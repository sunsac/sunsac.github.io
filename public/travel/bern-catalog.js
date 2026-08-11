function renderBernModuleCard(module) {
  const typeLabel = module.type === "activity" ? "专项活动" : "地点模块";
  return `
    <article class="module-card ${module.type === "activity" ? "is-activity" : "is-destination"}">
      <div class="module-card-topline">
        <span class="module-type">${typeLabel}</span>
        <span class="module-duration">${module.duration}</span>
      </div>
      <h3>${module.title}</h3>
      <p>${module.summary}</p>
      <dl class="module-metrics">
        <div><dt>交通</dt><dd>${module.travelTime}</dd></div>
        <div><dt>预算</dt><dd>${module.estimatedCost}</dd></div>
        <div><dt>强度</dt><dd>${module.intensity}</dd></div>
        <div><dt>天气</dt><dd>${module.weatherDependency}</dd></div>
      </dl>
      <a class="module-link" href="bern-daytrip.html?trip=${encodeURIComponent(module.id)}">查看完整模块 <span aria-hidden="true">→</span></a>
    </article>
  `;
}

function renderBernCatalog() {
  const container = document.querySelector("#bern-module-catalog");
  if (!container || !window.bernModules || !window.bernModuleCategories) return;

  container.innerHTML = window.bernModuleCategories.map(([categoryId, title, description]) => {
    const modules = window.bernModules.filter((module) => module.category === categoryId);
    if (!modules.length) return "";
    return `
      <section class="module-category" id="modules-${categoryId}">
        <div class="module-category-heading">
          <div>
            <p class="eyebrow section-eyebrow">${String(modules.length).padStart(2, "0")} MODULES</p>
            <h2>${title}</h2>
          </div>
          <p>${description}</p>
        </div>
        <div class="module-grid">${modules.map(renderBernModuleCard).join("")}</div>
      </section>
    `;
  }).join("");

  const destinationCount = window.bernModules.filter((module) => module.type === "destination").length;
  const activityCount = window.bernModules.filter((module) => module.type === "activity").length;
  const stats = document.querySelector("#bern-module-stats");
  if (stats) {
    stats.innerHTML = `
      <span><strong>${window.bernModules.length}</strong>独立模块</span>
      <span><strong>${destinationCount}</strong>地点选择</span>
      <span><strong>${activityCount}</strong>专项活动</span>
    `;
  }
}

document.addEventListener("DOMContentLoaded", renderBernCatalog);
const bernExternalLinkObserver = new MutationObserver(() => {
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
});
bernExternalLinkObserver.observe(document.body, { childList: true, subtree: true });
window.addEventListener("load", () => {
  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}, { once: true });
