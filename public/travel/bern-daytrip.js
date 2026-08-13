(function () {
  "use strict";

  const safe = (value) => String(value ?? "")
    .replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;").replaceAll("'", "&#039;");
  const ext = (url, label, className = "") => `<a${className ? ` class="${className}"` : ""} href="${safe(url)}" target="_blank" rel="noopener noreferrer">${safe(label)} <span aria-hidden="true">↗</span></a>`;

  function moduleTitle(id) {
    return window.bernModuleIndex[id]?.title || id;
  }

  function relatedLinks(ids, emptyText) {
    if (!ids?.length) return `<p class="small">${safe(emptyText)}</p>`;
    return `<div class="module-related-links">${ids.map((id) => {
      const target = window.bernModuleIndex[id];
      return target ? `<a href="bern-daytrip.html?trip=${encodeURIComponent(id)}">${safe(target.title)} <span aria-hidden="true">→</span></a>` : "";
    }).join("")}</div>`;
  }

  function detailMap(module) {
    if (module.interactiveCityWalk) {
      return `<div class="route-map" data-city-map="bern" aria-label="Bern City Walk 互動地圖"></div>
        <p class="map-note">觸控板、滾輪和雙指均可縮放。默認完整版包含 Einstein House，Münsterplattform 留作 Optional；可用下方快捷組合一鍵換線，再繼續增減景點、餐飲或調整順序。</p>
        <p class="route-distance small"></p><div data-city-guide="bern"></div>`;
    }
    return `<div class="daytrip-map module-detail-map" id="module-detail-map" aria-label="${safe(module.title)} 互動地圖"></div>
      ${module.cityWalk ? '<p class="walking-route-status" id="walking-route-status" role="status">正在載入沿街步行路線…</p>' : ""}
      <p class="map-note">${module.cityWalk ? "藍色為沿道路／步道生成的主線，紫色虛線為 Optional 繞行；" : "橙色為 Bern 基地，藍色為景點；"}綠色為餐飲，灰色為交通節點。觸控板、滾輪及觸摸手勢均可縮放；路線服務或地圖離線時，checkpoint 與文字步驟仍完整可用，不會改畫成直線。</p>`;
  }

  function renderVariants(variants) {
    return `<div class="module-variant-grid">${variants.map((item, index) => `<article class="module-variant${index === 1 ? " recommended" : ""}">
      <div class="module-variant-label">${index === 1 ? "推薦" : "路線"}</div><h3>${safe(item.name)}</h3>
      <p class="module-variant-duration">${safe(item.duration)}</p><p>${safe(item.when)}</p><code>${safe(item.route)}</code>
    </article>`).join("")}</div>`;
  }

  function renderDetailedCityWalk(module) {
    if (!module.cityWalk) return "";
    const walk = module.cityWalk;
    return `<section id="module-city-walk" class="detailed-city-walk"><p class="eyebrow section-eyebrow">CITY WALK CHECKPOINTS</p>
      <h2>${safe(walk.title)}</h2><p class="section-intro">${safe(walk.summary)}</p>
      <dl class="city-walk-stats"><div><dt>起點</dt><dd>${safe(walk.start)}</dd></div><div><dt>終點</dt><dd>${safe(walk.finish)}</dd></div>
        <div><dt>路線距離</dt><dd>${safe(walk.estimatedDistance)}</dd></div><div><dt>執行時間</dt><dd>${safe(walk.walkingTime)}</dd></div></dl>
      <div class="city-walk-shortcut"><strong>時間不足時</strong><span>${safe(walk.shortCut)}</span></div>
      <div class="checkpoint-route" aria-label="${safe(module.title)} City Walk checkpoint 順序">${walk.checkpoints.map((item, index) => `<article class="checkpoint-route-stop${item.optional ? " optional" : ""}">
        <span class="checkpoint-number">${index + 1}</span><div><p>${item.optional ? "OPTIONAL" : `CHECKPOINT ${index + 1}`}</p><h3>${safe(item.name)}</h3>
        <small>${safe(item.walkFromPrevious)}｜停留 ${safe(item.stay)}</small></div></article>`).join("")}</div>
      <details class="city-walk-detail-disclosure"><summary><span><small>CHECKPOINT NOTES</small><strong>逐站完整說明與現場判斷</strong></span><em>${walk.checkpoints.length} 個 checkpoint</em></summary>
        <div class="checkpoint-detail-grid">${walk.checkpoints.map((item, index) => `<article class="checkpoint-detail-card${item.optional ? " optional" : ""}">
          <div class="checkpoint-card-heading"><span>${index + 1}</span><div><p>${item.optional ? "可跳過" : "主線"}</p><h3>${safe(item.name)}</h3></div></div>
          <p>${safe(item.value)}</p><dl><div><dt>上一站過來</dt><dd>${safe(item.walkFromPrevious)}</dd></div><div><dt>建議停留</dt><dd>${safe(item.stay)}</dd></div></dl>
          <p class="practical-note"><strong>現場判斷：</strong>${safe(item.practical)}</p></article>`).join("")}</div>
      </details>
    </section>`;
  }

  function renderFoodGuide(module) {
    if (!module.foodGuide) return "";
    const guide = module.foodGuide;
    return `<section id="module-food-guide" class="local-food-guide"><p class="eyebrow section-eyebrow">TASTE BERN</p>
      <h2>Bern 當地美食，不只是一張餐廳清單</h2><p class="section-intro">${safe(guide.intro)}</p>
      <div class="food-route-plan"><div class="food-route-heading"><p class="eyebrow">EAT ALONG THE WALK</p><h3>沿 City Walk 怎麼安排</h3><p>不用一次吃齊；按照路線選擇兩個小食加一頓正餐即可。</p></div>
        <ol>${guide.routePlan.map((item) => `<li><strong>${safe(item.checkpoint)}</strong><span>${safe(item.suggestion)}</span></li>`).join("")}</ol></div>
      <aside class="market-note"><strong>遇到 Märit（市集）時</strong><p>${safe(guide.marketNote)}</p></aside>
      <details class="food-library"><summary><span><small>FOOD REFERENCE</small><strong>Bern 完整當地食物資料庫</strong></span><em>${guide.specialties.length} 種食物</em></summary>
        <div class="food-library-body"><div class="food-specialty-grid">${guide.specialties.map((item) => `<article class="food-specialty-card">
          <div class="food-photo" data-image-query="${safe(item.imageQuery)}" data-image-fallback="${safe(item.imageFallback)}"><span>${safe(item.category)}</span><em>圖片暫不可用</em></div>
          <div class="food-specialty-body"><span class="food-category">${safe(item.category)}</span><h3>${safe(item.name)}</h3><p class="food-summary">${safe(item.summary)}</p>
            <dl><div><dt>怎麼吃</dt><dd>${safe(item.taste)}</dd></div><div><dt>放在路線哪裡</dt><dd>${safe(item.timing)}</dd></div>
              <div><dt>份量判斷</dt><dd>${safe(item.portion)}</dd></div><div><dt>飲食注意</dt><dd>${safe(item.diet)}</dd></div></dl>
            ${ext(item.officialUrl, "瞭解這種 Bern 味道", "official-link")}</div></article>`).join("")}</div>
          <div class="food-guide-sources"><strong>官方美食資料</strong>${guide.sources.map((item) => ext(item.url, item.label)).join("")}</div></div>
      </details>
    </section>`;
  }

  function renderAttractions(attractions) {
    return `<div class="attraction-detail-grid">${attractions.map((item, index) => `<article class="attraction-detail-card">
      <div class="attraction-photo" data-image-query="${safe(item.imageQuery || item.name)}"><span>${index + 1}</span><em>圖片載入失敗時不影響資料</em></div>
      <div class="attraction-detail-body"><p class="eyebrow">CORE STOP ${index + 1}</p><h3>${safe(item.name)}</h3>
        <p class="attraction-value">${safe(item.description)}</p>
        <dl class="fact-list"><div><dt>建議停留</dt><dd>${safe(item.stay)}</dd></div><div><dt>開放</dt><dd>${safe(item.hours)}</dd></div>
          <div><dt>費用</dt><dd>${safe(item.price)}</dd></div><div><dt>預約</dt><dd>${safe(item.booking)}</dd></div></dl>
        <p class="practical-note"><strong>現場注意：</strong>${safe(item.practical)}</p>${ext(item.officialUrl, "官方入口", "official-link")}
      </div></article>`).join("")}</div>`;
  }

  function renderHighlightsSection(module) {
    const content = `<p class="section-intro">每張卡按「價值 → 停留 → 開放／費用 → 預約／限制」排列；臨行仍以官方入口為準。</p>${renderAttractions(module.attractions)}`;
    if (!module.interactiveCityWalk) {
      return `<section id="module-highlights"><p class="eyebrow section-eyebrow">WHAT TO SEE</p><h2>核心景點</h2>${content}</section>`;
    }
    return `<section class="module-collapsible-info module-secondary-info"><details id="module-highlights"><summary>核心景點完整資料 <span>${module.attractions.length} 個景點 · 開放／費用／預約</span></summary><div class="module-detail-disclosure-body">${content}</div></details></section>`;
  }

  function renderDining(items) {
    return `<div class="dining-detail-grid">${items.map((item) => `<article class="dining-detail-card"><span class="dining-role">${safe(item.role)}</span>
      <h3>${safe(item.name)}</h3><p><strong>行程位置：</strong>${safe(item.routePosition)}</p><p><strong>適合點：</strong>${safe(item.specialties)}</p>
      <p><strong>價位：</strong>${safe(item.price)}</p><p><strong>營業注意：</strong>${safe(item.hours)}</p><p><strong>訂位：</strong>${safe(item.reservation)}</p>
      ${ext(item.officialUrl, "餐廳官方／官方資料", "official-link")}</article>`).join("")}</div>`;
  }

  function renderBackground(module) {
    const labels = ["地點骨架", "歷史與文化", "空間關係", "現場觀察"];
    return `<div class="background-rich">
      <div class="background-grid">${module.background.map((item, index) => `<article class="background-note"><span>${safe(labels[index] || `理解線索 ${index + 1}`)}</span><p>${safe(item)}</p></article>`).join("")}</div>
      <article class="route-reading"><div><p class="eyebrow">READ THE ROUTE</p><h3>把背景放回行走順序</h3><code>${safe(module.route)}</code></div>
        <div><strong>沿途重點觀察</strong><ul>${module.attractions.slice(0, 4).map((item) => `<li><a href="#module-highlights">${safe(item.name)}</a><span>${safe(item.description)}</span></li>`).join("")}</ul></div></article>
    </div>`;
  }

  function renderOperators(operators) {
    if (!operators?.length) return "";
    return `<section id="module-operators"><p class="eyebrow section-eyebrow">VERIFIED OPERATORS</p><h2>兩個實際營運選擇</h2>
      <div class="operator-grid">${operators.map((item) => `<article class="operator-card"><h3>${safe(item.name)}</h3>
        <dl class="fact-list"><div><dt>價格範圍</dt><dd>${safe(item.price)}</dd></div><div><dt>集合點</dt><dd>${safe(item.meeting)}</dd></div>
          <div><dt>活動時長</dt><dd>${safe(item.duration)}</dd></div><div><dt>資格限制</dt><dd>${safe(item.eligibility)}</dd></div>
          <div><dt>取消政策</dt><dd>${safe(item.cancellation)}</dd></div></dl>${ext(item.bookingUrl, "查看與預約", "module-link")}</article>`).join("")}</div>
      <p class="small">比較資料核對於 ${safe(moduleData.verifiedOn)}；最終價格、名額、資格與取消處理以營運方預訂頁及書面確認優先。</p></section>`;
  }

  function renderDetail(module) {
    const typeLabel = module.type === "activity" ? "專項活動" : "地點模塊";
    document.title = `${module.title}｜Bern 行程模塊`;
    document.querySelector("#daytrip-title").textContent = module.title;
    document.querySelector("#daytrip-subtitle").textContent = `Bern Plug & Play｜${typeLabel}｜${module.duration}`;

    document.querySelector("#daytrip-page").innerHTML = `
      <article class="module-detail-hero">
        <div class="module-detail-copy"><div class="module-card-topline"><span class="module-type">${typeLabel}</span><span class="module-duration">${safe(module.duration)}</span></div>
          <p class="eyebrow section-eyebrow">${safe(module.category.replaceAll("-", " ").toUpperCase())}</p><h2>${safe(module.title)}</h2>
          <p class="module-detail-summary">${safe(module.summary)}</p>
          <dl class="module-metrics module-detail-metrics"><div><dt>所需時間</dt><dd>${safe(module.duration)}</dd></div><div><dt>Bern 往返</dt><dd>${safe(module.travelTime)}</dd></div>
            <div><dt>預算估算</dt><dd>${safe(module.estimatedCost)}</dd></div><div><dt>體力強度</dt><dd>${safe(module.intensity)}</dd></div><div><dt>天氣依賴</dt><dd>${safe(module.weatherDependency)}</dd></div></dl>
        </div><div class="module-hero-visual" data-image-query="${safe(module.imageQuery || module.title)}"><span>${safe(module.title)}</span><em>外部圖片不可用時保留完整內容</em></div>
      </article>

      <section class="module-decision-grid" aria-label="選擇判斷"><article class="decision-card choose"><p class="eyebrow">WHY THIS</p><h2>為什麼選</h2><p>${safe(module.whyChoose)}</p></article>
        <article class="decision-card skip"><p class="eyebrow">WHEN TO SKIP</p><h2>什麼情況不要選</h2><p>${safe(module.skipWhen)}</p></article></section>

      <nav class="module-detail-nav" aria-label="模塊詳情目錄"><a href="#module-variants">版本</a><a href="#module-plan">時間軸</a>${module.cityWalk ? '<a href="#module-city-walk">City Walk</a>' : ""}<a href="#module-map">地圖</a>${module.foodGuide ? '<a href="#module-food-guide">當地美食</a>' : ""}
        <a href="#module-highlights">景點</a><a href="#module-transport">交通</a><a href="#module-conditions">天氣／裝備</a><a href="#module-combine">組合</a></nav>

      <section id="module-variants"><p class="eyebrow section-eyebrow">CHOOSE A VERSION</p><h2>推薦版本與路線選擇</h2>${renderVariants(module.variants)}</section>
      <section id="module-plan"><p class="eyebrow section-eyebrow">READY-TO-USE PLAN</p><h2>具體時間軸</h2>
        <div class="daytrip-timeline">${module.schedule.map((item) => `<article class="daytrip-time"><strong>${safe(item.time)}</strong><div><h3>${safe(item.title)}</h3><p>${safe(item.detail)}</p></div></article>`).join("")}</div></section>

      ${renderDetailedCityWalk(module)}

      <section id="module-map"><p class="eyebrow section-eyebrow">ORIENTATION</p><h2>${module.cityWalk ? `${safe(module.cityWalk.title)}路線圖` : "互動地圖與現場順序"}</h2>${detailMap(module)}</section>
      ${module.interactiveCityWalk ? `<section class="city-planning-section"><p class="eyebrow section-eyebrow">CITY STRUCTURE</p><h2>Bern 的空間關係</h2>
        <p>由 Federal Quarter 進入 Old City，再下降到 Aare 河谷，最後由 Rosengarten 回望半島；高低變化是 City Walk 的敘事骨架。</p>
        <div id="bern-city-planning-map" class="city-planning-map" aria-label="Bern 城市空間地圖"></div></section>` : ""}

      ${renderFoodGuide(module)}

      ${renderHighlightsSection(module)}

      ${renderOperators(module.operators)}

      <section id="module-transport"><p class="eyebrow section-eyebrow">FROM BERN</p><h2>交通與票券</h2><div class="transport-detail-grid">
        <article class="card"><h3>逐段交通</h3><p><strong>SBB 搜索：</strong><code>${safe(module.transport.search)}</code></p><ol class="transport-segments">${module.transport.segments.map((item) => `<li><strong>${safe(item.label)}</strong><span>${safe(item.detail)}</span></li>`).join("")}</ol><p>${safe(module.transport.bookingSearch)}</p></article>
        <article class="card"><h3>票種與最後一程</h3><p><strong>規劃費用：</strong>${safe(module.transport.plannedCost)}</p><p>${safe(module.transport.ticketChoice)}</p><p class="practical-note"><strong>最後一程：</strong>${safe(module.transport.lastMile)}</p></article>
      </div></section>

      <section id="module-conditions"><p class="eyebrow section-eyebrow">CONDITIONS</p><h2>天氣、裝備與備案</h2><div class="condition-detail-grid">
        <article class="card"><h3>天氣判斷</h3><p>${safe(module.conditions.weather)}</p><p><strong>取消標準：</strong>${safe(module.conditions.cancel)}</p></article>
        <article class="card"><h3>衣著與攜帶</h3><p>${safe(module.conditions.clothing)}</p><p>${safe(module.conditions.packing)}</p></article>
        <article class="card"><h3>體力與無障礙</h3><p>${safe(module.conditions.fitness)}</p><p>${safe(module.conditions.accessibility)}</p></article>
        <article class="card"><h3>替代方案</h3><p>${safe(module.conditions.backup)}</p></article></div></section>

      <section id="module-combine" class="module-combination-section"><p class="eyebrow section-eyebrow">PLUG & PLAY</p><h2>可組合與衝突模塊</h2>
        <div class="module-detail-columns"><article class="card compatible"><h3>適合搭配</h3>${relatedLinks(module.combineWith, "這個模塊本身已經足夠完整，不需要再添加其他模塊。")}</article>
          <article class="card incompatible"><h3>不建議同日</h3>${relatedLinks(module.avoidWith, "沒有特別衝突；仍需按當天時間和體力判斷。")}</article></div>
        <p class="small">這裡只顯示組合邊界，不會自動排程、記錄或保存選擇。</p></section>

      <section class="module-collapsible-info"><details><summary>餐廳完整資料 <span>${module.dining.length} 個選擇</span></summary>${renderDining(module.dining)}</details>
        <details><summary>歷史、文化與空間背景 <span>${module.background.length} 個理解層次</span></summary>${renderBackground(module)}</details>
        <details><summary>官方資料與核對日期 <span>${safe(module.verifiedOn)}</span></summary><ul class="resource-list">${module.resources.map((item) => `<li><span>${safe(item.kind)}</span>${ext(item.url, item.label)}</li>`).join("")}</ul>
          <p class="verification-note">資料核對日期：${safe(module.verifiedOn)}。價格、時刻、開放、天氣與營運會變化，請在出發前通過以上官方入口再次確認。</p></details></section>`;
  }

  function renderMissing(tripKey, missingDetails = false) {
    document.title = "模塊不存在｜Bern 行程模塊";
    document.querySelector("#daytrip-title").textContent = missingDetails ? "模塊資料暫不可用" : "找不到這個模塊";
    document.querySelector("#daytrip-subtitle").textContent = "Bern Plug & Play";
    document.querySelector("#daytrip-page").innerHTML = `<section class="module-not-found"><p class="eyebrow section-eyebrow">${missingDetails ? "DETAIL DATA UNAVAILABLE" : "MODULE NOT FOUND"}</p>
      <h2>${missingDetails ? "目錄中有這個模塊，但詳細資料未能載入" : "這個鏈接沒有對應的行程模塊"}</h2>
      <p>${missingDetails ? "請返回目錄選擇其他模塊，或稍後重新載入本頁。" : tripKey ? `查詢值為 <code>${safe(tripKey)}</code>，可能是舊鏈接或拼寫錯誤。` : "網址中缺少 trip 參數。"}</p>
      <a class="module-link" href="bern.html">返回 Bern 模塊庫 →</a></section>`;
  }

  function markerIcon(label, type) {
    return L.divIcon({ className: "", html: `<span class="module-map-marker ${type}">${safe(label)}</span>`, iconSize: [32, 32], iconAnchor: [16, 16], popupAnchor: [0, -16] });
  }

  async function requestFootRoute(points, signal) {
    const coordinates = points.map((item) => `${item.coordinates[1]},${item.coordinates[0]}`).join(";");
    const url = `https://routing.openstreetmap.de/routed-foot/route/v1/driving/${coordinates}?overview=full&geometries=geojson&steps=false`;
    const response = await fetch(url, { signal });
    if (!response.ok) throw new Error("walking route request failed");
    const data = await response.json();
    if (data.code !== "Ok" || !data.routes?.[0]?.geometry?.coordinates?.length) throw new Error("walking route unavailable");
    return {
      coordinates: data.routes[0].geometry.coordinates.map(([lng, lat]) => [lat, lng]),
      distance: data.routes[0].distance,
      duration: data.routes[0].duration,
    };
  }

  async function drawDetailedWalkingRoute(map, module, mapElement) {
    const status = document.querySelector("#walking-route-status");
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);
    const checkpoints = module.cityWalk.checkpoints;
    const mainCheckpoints = checkpoints.filter((item) => !item.optional);
    try {
      const mainRoute = await requestFootRoute(mainCheckpoints, controller.signal);
      L.polyline(mainRoute.coordinates, { color: "rgba(255,255,255,.9)", weight: 9, opacity: 1, lineJoin: "round" }).addTo(map);
      L.polyline(mainRoute.coordinates, { color: "#2e6f95", weight: 5, opacity: .95, lineJoin: "round" }).addTo(map);

      const optionalDetours = checkpoints.map((item, index) => {
        if (!item.optional) return null;
        const previous = checkpoints.slice(0, index).reverse().find((point) => !point.optional);
        const next = checkpoints.slice(index + 1).find((point) => !point.optional);
        return previous && next ? [previous, item, next] : null;
      }).filter(Boolean);
      const detourRoutes = await Promise.allSettled(optionalDetours.map((points) => requestFootRoute(points, controller.signal)));
      detourRoutes.forEach((result) => {
        if (result.status !== "fulfilled") return;
        L.polyline(result.value.coordinates, { color: "rgba(255,255,255,.9)", weight: 8, opacity: 1, dashArray: "7 8" }).addTo(map);
        L.polyline(result.value.coordinates, { color: "#79599b", weight: 4, opacity: .95, dashArray: "7 8" }).addTo(map);
      });
      const distanceKm = (mainRoute.distance / 1000).toFixed(1);
      const walkingMinutes = Math.round(mainRoute.duration / 60);
      if (status) {
        status.classList.add("route-ready");
        status.textContent = `沿街主線已載入｜約 ${distanceKm} km｜純步行約 ${walkingMinutes} 分鐘${optionalDetours.length ? `｜另有 ${optionalDetours.length} 條 Optional 繞行` : ""}`;
      }
    } catch {
      mapElement.classList.add("walking-route-unavailable");
      if (status) {
        status.classList.add("route-unavailable");
        status.textContent = "沿街路線暫時無法載入；地圖只顯示 checkpoint，不以直線代替。請依下方逐站步行說明或現場地圖導航。";
      }
    } finally {
      window.clearTimeout(timeout);
    }
  }

  function initMap(module) {
    if (module.interactiveCityWalk) return;
    const element = document.querySelector("#module-detail-map");
    if (!element) return;
    if (!window.L) {
      element.classList.add("map-unavailable");
      element.textContent = "互動地圖暫時無法載入；景點、交通和時間軸仍可正常使用。";
      return;
    }
    const map = L.map(element, { scrollWheelZoom: true, touchZoom: true });
    L.control.scale({ imperial: false, metric: true, maxWidth: 120 }).addTo(map);
    const tile = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 19, attribution: "&copy; OpenStreetMap contributors" });
    tile.addTo(map).on("tileerror", () => element.classList.add("tiles-unavailable"));
    const bounds = module.cityWalk ? [] : [[BERN_BASE[1], BERN_BASE[2]]];
    if (!module.cityWalk) {
      L.marker(bounds[0], { icon: markerIcon("B", "base") }).addTo(map).bindPopup("<strong>Bern</strong><br>住宿基地與公共交通起點");
    }
    const routeItems = module.cityWalk?.checkpoints || module.attractions;
    routeItems.forEach((item, index) => {
      const [lat, lng] = item.coordinates; bounds.push([lat, lng]);
      const label = module.cityWalk ? `C${index + 1}` : String(index + 1);
      const movement = module.cityWalk ? `${item.walkFromPrevious}｜停留 ${item.stay}` : `建議停留 ${item.stay}`;
      L.marker([lat, lng], { icon: markerIcon(label, item.optional ? "optional-checkpoint" : "destination") }).addTo(map).bindPopup(`<strong>${safe(item.name)}</strong><br>${safe(movement)}<br>${safe(item.practical)}`);
    });
    module.dining.forEach((item) => {
      const [lat, lng] = item.coordinates; bounds.push([lat, lng]);
      L.marker([lat, lng], { icon: markerIcon("餐", "restaurant") }).addTo(map).bindPopup(`<strong>${safe(item.name)}</strong><br>${safe(item.role)}｜${safe(item.routePosition)}`);
    });
    (module.points || []).forEach(([name, lat, lng, description]) => {
      bounds.push([lat, lng]); L.marker([lat, lng], { icon: markerIcon("T", "transit") }).addTo(map).bindPopup(`<strong>${safe(name)}</strong><br>${safe(description)}`);
    });
    if (module.cityWalk) {
      drawDetailedWalkingRoute(map, module, element);
    } else if (routeItems.length) {
      L.polyline([[BERN_BASE[1], BERN_BASE[2]], routeItems[0].coordinates], { color: "#d9782f", weight: 4, opacity: 0.8, dashArray: "8 8" }).addTo(map);
      L.polyline(routeItems.map((item) => item.coordinates), { color: "#2e6f95", weight: 4, opacity: 0.85 }).addTo(map);
    }
    map.fitBounds(L.latLngBounds(bounds), { padding: [34, 34], maxZoom: 13 });
  }

  async function wikipediaImage(query, size = 900) {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 4500);
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(query)}&gsrnamespace=0&gsrlimit=5&prop=pageimages&piprop=thumbnail&pithumbsize=${size}&format=json&origin=*`;
    try {
      const response = await fetch(endpoint, { signal: controller.signal });
      if (!response.ok) throw new Error("image request failed");
      const data = await response.json();
      return Object.values(data.query?.pages || {}).filter((item) => item.thumbnail).sort((a, b) => (a.index || 999) - (b.index || 999))[0]?.thumbnail?.source;
    } finally {
      window.clearTimeout(timeout);
    }
  }

  async function loadImages(module) {
    const hydrateTarget = async (target, index) => {
      if (target.dataset.imageHydrated === "true") return;
      target.dataset.imageHydrated = "true";
      try {
        let source;
        try {
          source = await wikipediaImage(target.dataset.imageQuery, index ? 640 : 1000);
        } catch {
          source = null;
        }
        if (!source && target.dataset.imageFallback) {
          try {
            source = await wikipediaImage(target.dataset.imageFallback, index ? 640 : 1000);
          } catch {
            source = null;
          }
        }
        if (!source) throw new Error("no image");
        const image = new Image(); image.loading = target.classList.contains("food-photo") ? "eager" : "lazy"; image.decoding = "async"; image.alt = index ? `${module.title}｜${target.dataset.imageQuery}` : `${module.title} 景點圖片`;
        const imageTimeout = window.setTimeout(() => { image.remove(); target.classList.add("image-unavailable"); }, 4500);
        image.addEventListener("load", () => { window.clearTimeout(imageTimeout); target.classList.add("has-image"); }, { once: true });
        image.addEventListener("error", () => { window.clearTimeout(imageTimeout); image.remove(); target.classList.add("image-unavailable"); }, { once: true });
        image.src = source; target.prepend(image);
      } catch { target.classList.add("image-unavailable"); }
    };
    const targets = [...document.querySelectorAll("[data-image-query]")];
    const visibleTargets = targets.filter((target) => !target.closest("details:not([open])"));
    await Promise.allSettled(visibleTargets.map(hydrateTarget));
    document.querySelectorAll("details").forEach((detailsElement) => {
      detailsElement.addEventListener("toggle", () => {
        if (!detailsElement.open) return;
        [...detailsElement.querySelectorAll("[data-image-query]")].forEach(hydrateTarget);
      });
    });
  }

  const tripKey = new URLSearchParams(window.location.search).get("trip");
  const core = tripKey ? window.bernModuleIndex?.[tripKey] : null;
  const details = tripKey ? window.bernModuleDetails?.[tripKey] : null;
  const moduleData = core && details ? { ...core, ...details } : null;
  function secureExternalLinks() {
    document.querySelectorAll('a[href^="http"]').forEach((link) => {
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    });
  }
  const externalLinkObserver = new MutationObserver(secureExternalLinks);
  externalLinkObserver.observe(document.body, { childList: true, subtree: true });
  document.addEventListener("keydown", (event) => {
    const summary = event.target.closest?.(".module-collapsible-info summary");
    if (!summary || !["Enter", " "].includes(event.key)) return;
    event.preventDefault();
    const detailsElement = summary.closest("details");
    detailsElement.open = !detailsElement.open;
  });
  if (moduleData) {
    renderDetail(moduleData); initMap(moduleData); secureExternalLinks(); loadImages(moduleData);
  } else {
    renderMissing(tripKey, Boolean(core && !details));
  }
  window.addEventListener("load", secureExternalLinks, { once: true });
})();
