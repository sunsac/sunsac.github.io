(() => {
  "use strict";

  const STORAGE_KEY = "travel-language";
  const LANGUAGES = new Set(["zh-Hant", "en"]);
  const TRANSLATABLE_ATTRIBUTES = ["title", "aria-label", "alt", "placeholder"];
  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const observerConfig = {
    subtree: true,
    childList: true,
    characterData: true,
    attributes: true,
    attributeFilter: TRANSLATABLE_ATTRIBUTES,
  };
  let currentLanguage = "zh-Hant";
  let applying = false;
  let observer;
  let switcher;
  let pageTools;

  function readPreference() {
    try {
      const value = window.localStorage.getItem(STORAGE_KEY);
      return LANGUAGES.has(value) ? value : "zh-Hant";
    } catch (_error) {
      return "zh-Hant";
    }
  }

  function savePreference(language) {
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch (_error) {
      // Storage restrictions must not prevent an in-page language change.
    }
  }

  function dictionaries() {
    const catalog = window.travelEnglish || {};
    return {
      exact: catalog.exact || {},
      phrases: catalog.phrases || {},
    };
  }

  function translateValue(value) {
    if (!value || !/[\u3400-\u9fff]/.test(value)) return value;
    const { exact, phrases } = dictionaries();
    const trimmed = value.trim();
    if (Object.prototype.hasOwnProperty.call(exact, trimmed)) {
      return value.replace(trimmed, exact[trimmed]);
    }
    const translated = Object.keys(phrases)
      .sort((a, b) => b.length - a.length)
      .reduce((text, source) => text.replaceAll(source, phrases[source]), value);
    const translatedTrimmed = translated.trim();
    if (Object.prototype.hasOwnProperty.call(exact, translatedTrimmed)) {
      return translated.replace(translatedTrimmed, exact[translatedTrimmed]);
    }
    return Object.keys(phrases)
      .sort((a, b) => b.length - a.length)
      .reduce((text, source) => text.replaceAll(source, phrases[source]), translated);
  }

  function isExcluded(node) {
    const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
    return !element || Boolean(element.closest("script, style, noscript, [data-travel-language-ui]"));
  }

  function rememberAttribute(element, name, value) {
    let values = originalAttributes.get(element);
    if (!values) {
      values = new Map();
      originalAttributes.set(element, values);
    }
    values.set(name, value);
  }

  function applyTextNode(node, refreshOriginal = false) {
    if (isExcluded(node)) return;
    if (refreshOriginal || !originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    node.nodeValue = currentLanguage === "en" ? translateValue(source) : source;
  }

  function applyElementAttributes(element, refreshName = "") {
    if (isExcluded(element)) return;
    TRANSLATABLE_ATTRIBUTES.forEach((name) => {
      if (!element.hasAttribute(name)) return;
      const current = element.getAttribute(name);
      const values = originalAttributes.get(element);
      if (name === refreshName || !values?.has(name)) rememberAttribute(element, name, current);
      const source = originalAttributes.get(element).get(name);
      element.setAttribute(name, currentLanguage === "en" ? translateValue(source) : source);
    });
  }

  function applySubtree(root, refreshText = false) {
    if (root.nodeType === Node.TEXT_NODE) {
      applyTextNode(root, refreshText);
      return;
    }
    if (root.nodeType !== Node.ELEMENT_NODE || isExcluded(root)) return;
    applyElementAttributes(root);
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      if (walker.currentNode.nodeType === Node.TEXT_NODE) applyTextNode(walker.currentNode, refreshText);
      else applyElementAttributes(walker.currentNode);
    }
  }

  function updateSwitcher() {
    if (!switcher) return;
    switcher.querySelectorAll("[data-travel-language]").forEach((button) => {
      const active = button.dataset.travelLanguage === currentLanguage;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    const label = switcher.querySelector(".travel-language-label");
    label.textContent = currentLanguage === "en" ? "Language" : "語言";
    switcher.setAttribute("aria-label", currentLanguage === "en" ? "Language selection" : "語言選擇");
    if (pageTools) {
      const topButton = pageTools.querySelector("[data-page-top]");
      topButton.textContent = currentLanguage === "en" ? "Back to top" : "返回頂部";
      topButton.setAttribute("aria-label", currentLanguage === "en" ? "Back to top" : "返回頁面頂部");
    }
  }

  function mountPageTools() {
    const contentsNav = document.querySelector(".contents-nav");
    if (!contentsNav) return;

    pageTools = document.createElement("div");
    pageTools.className = "page-tools";
    pageTools.dataset.travelLanguageUi = "";
    pageTools.innerHTML = '<button type="button" data-page-top>返回頂部</button>';
    document.body.append(pageTools);

    const topButton = pageTools.querySelector("[data-page-top]");
    topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    const updateVisibility = () => pageTools.classList.toggle("is-visible", window.scrollY > 720);
    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();

    const links = [...contentsNav.querySelectorAll('a[href^="#"]')];
    const targets = links
      .map((link) => ({ link, section: document.querySelector(link.getAttribute("href")) }))
      .filter((item) => item.section);
    if (!("IntersectionObserver" in window) || !targets.length) return;

    const sectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (!visible) return;
      links.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-current", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.01] });
    targets.forEach(({ section }) => sectionObserver.observe(section));
  }

  function setLanguage(language, { persist = true } = {}) {
    if (!LANGUAGES.has(language)) return;
    currentLanguage = language;
    if (persist) savePreference(language);
    observer?.disconnect();
    applying = true;
    document.documentElement.lang = language === "en" ? "en" : "zh-Hant";
    document.documentElement.dataset.travelLocale = language;
    const title = document.querySelector("title");
    if (title?.firstChild) applyTextNode(title.firstChild);
    applySubtree(document.body);
    updateSwitcher();
    applying = false;
    if (observer) observer.observe(document.body, observerConfig);
    document.dispatchEvent(new CustomEvent("travellanguagechange", { detail: { language } }));
  }

  function mountSwitcher() {
    switcher = document.createElement("div");
    switcher.className = "travel-language-switcher";
    switcher.dataset.travelLanguageUi = "";
    switcher.setAttribute("role", "group");
    switcher.innerHTML = `
      <span class="travel-language-label">語言</span>
      <button type="button" data-travel-language="zh-Hant">中文</button>
      <button type="button" data-travel-language="en">EN</button>
    `;
    const headerWrap = document.querySelector("header .wrap");
    if (headerWrap) {
      headerWrap.classList.add("has-language-switcher");
      headerWrap.prepend(switcher);
    } else {
      switcher.classList.add("is-floating");
      document.body.prepend(switcher);
    }
    switcher.addEventListener("click", (event) => {
      const button = event.target.closest("[data-travel-language]");
      if (button) setLanguage(button.dataset.travelLanguage);
    });
  }

  function observeChanges() {
    observer = new MutationObserver((mutations) => {
      if (applying) return;
      observer.disconnect();
      applying = true;
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") {
          applyTextNode(mutation.target, true);
          return;
        }
        if (mutation.type === "attributes") {
          applyElementAttributes(mutation.target, mutation.attributeName);
          return;
        }
        mutation.addedNodes.forEach((node) => applySubtree(node));
      });
      applying = false;
      observer.observe(document.body, observerConfig);
    });
    observer.observe(document.body, observerConfig);
  }

  function init() {
    mountSwitcher();
    mountPageTools();
    observeChanges();
    setLanguage(readPreference(), { persist: false });
  }

  window.travelLanguage = {
    get language() { return currentLanguage; },
    setLanguage,
    translate: translateValue,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
