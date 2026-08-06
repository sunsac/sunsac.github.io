const freiburgDaytrips = {
  titisee: {
    title: "Titisee + Hinterzarten",
    category: "Black Forest／湖區與慢遊",
    summary: "湖畔、森林及低強度散步，適合慢節奏及天氣普通的一天。",
    route: "Freiburg → Titisee → 湖畔 → Hinterzarten（可選）→ Freiburg",
    schedule: [
      ["08:30–10:00", "由 Freiburg 乘 Breisgau S-Bahn 前往 Titisee。"],
      ["10:00–12:30", "Titisee 湖畔、碼頭及短距離森林散步。"],
      ["12:30–14:00", "湖畔午餐或咖啡；視船班選擇短程湖船。"],
      ["14:00–16:00", "按體力完成部分湖畔環線，或前往 Hinterzarten。"],
      ["16:00–18:00", "返回 Titisee 及 Freiburg，保留晚餐時間。"]
    ],
    highlights: ["Lake Titisee", "湖畔散步", "Hinterzarten", "Black Forest café"],
    activity: "湖上船程、湖畔環線及森林咖啡。",
    booking: "確認 S-Bahn、湖船及湖畔餐廳營運；一般湖畔散步不需預約。",
    backup: "大雨時改為 Freiburg 博物館、咖啡店及 Dreisam 河畔短線。"
  },
  triberg: {
    title: "Triberg + Schwarzwaldbahn",
    category: "Black Forest／瀑布與景觀鐵路",
    summary: "瀑布、小鎮及森林鐵路景觀，景點密度較高但山徑可能濕滑。",
    route: "Freiburg → Offenburg → Triberg → Waterfalls／Museum → Freiburg",
    schedule: [
      ["07:30–10:00", "由 Freiburg 經 Offenburg 乘 Regional-Express 前往 Triberg。"],
      ["10:00–12:30", "Triberg Bahnhof → town centre → Triberg Waterfalls。"],
      ["12:30–14:00", "小鎮午餐及 Black Forest cake。"],
      ["14:00–16:00", "Black Forest Museum 或瀑布其他步道段落。"],
      ["16:00–19:00", "乘 Schwarzwaldbahn 景觀路段及鐵路返回 Freiburg。"]
    ],
    highlights: ["Triberg Waterfalls", "Triberg town centre", "Black Forest Museum", "Schwarzwaldbahn"],
    activity: "瀑布步道、Black Forest Museum 及景觀鐵路。",
    booking: "確認 Regional-Express、Schwarzwaldbahn 路線及瀑布開放；濕滑時不要勉強走完整步道。",
    backup: "山徑狀況差時改為 Baden-Baden 或 Basel 城市日。"
  },
  "baden-baden": {
    title: "Baden-Baden",
    category: "City／溫泉與文化",
    summary: "溫泉、Kurhaus、公園及文化城市氛圍；雨天比森林步道更穩定。",
    route: "Freiburg → Baden-Baden Bahnhof → Old Town／Kurhaus → Freiburg",
    schedule: [
      ["08:30–10:00", "由 Freiburg 前往 Baden-Baden Bahnhof，再轉市區巴士。"],
      ["10:00–12:30", "Kurhaus、Trinkhalle、Old Town 及 Lichtentaler Allee。"],
      ["12:30–14:00", "Old Town 午餐。"],
      ["14:00–16:30", "按預約選 Thermal Spa，或安排博物館、公園及咖啡。"],
      ["16:30–19:00", "返回 Baden-Baden station 及 Freiburg。"]
    ],
    highlights: ["Kurhaus", "Trinkhalle", "Lichtentaler Allee", "Thermal Spa"],
    activity: "Thermal Spa、城市散步及公園慢遊。",
    booking: "Spa 必須提前確認入場及用品要求；公共城市景點按開放時間安排。",
    backup: "大雨時保留室內 Spa、Kurhaus、博物館及餐廳。"
  },
  basel: {
    title: "Basel",
    category: "City／博物館與 Rhine 河",
    summary: "博物館、Rhine 河、Old Town 及跨境城市文化；自然日的雨天備案。",
    route: "Freiburg → Basel Bad Bf → Old Town → Rhine → Museums → Freiburg",
    schedule: [
      ["08:30–10:00", "由 Freiburg 前往 Basel Bad Bf，確認跨境票券及身份證明。"],
      ["10:00–12:30", "Basel Minster、Rathaus、Old Town 及 Spalentor。"],
      ["12:30–14:00", "Old Town 午餐。"],
      ["14:00–16:30", "選一間博物館，或沿 Rhine 河短走。"],
      ["16:30–19:00", "返回 Basel Bad Bf 及 Freiburg。"]
    ],
    highlights: ["Basel Minster", "Old Town", "Rhine riverside", "Kunstmuseum"],
    activity: "博物館、Old Town City Walk 及 Rhine 河岸。",
    booking: "博物館查看開放時間；跨境攜帶護照／身份證明及確認交通票適用範圍。",
    backup: "雨天以博物館、教堂及 Old Town 拱廊為主。"
  }
};

function renderFreiburgDaytrip(trip) {
  document.title = `${trip.title}｜Freiburg Full-day 行程`;
  document.querySelector("#freiburg-daytrip-title").textContent = trip.title;
  document.querySelector("#freiburg-daytrip-subtitle").textContent =
    `Freiburg 周邊 Full-day｜${trip.category}｜8 月 21–22 日擇一安排`;
  document.querySelector("#freiburg-daytrip-page").innerHTML = `
    <section class="daytrip-hero">
      <p class="daytrip-category">${trip.category}</p>
      <h2>${trip.title}</h2>
      <p>${trip.summary}</p>
    </section>
    <section>
      <h2>當日路線與時間軸</h2>
      <p><code>${trip.route}</code></p>
      <div class="daytrip-timeline">
        ${trip.schedule.map(([time, detail]) => `
          <article class="daytrip-time"><strong>${time}</strong><p>${detail}</p></article>
        `).join("")}
      </div>
    </section>
    <section>
      <h2>景點與活動</h2>
      <div class="grid">
        <article class="card planning-card">
          <h3>主要看點</h3>
          <ul>${trip.highlights.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="card planning-card">
          <h3>可搭配活動</h3>
          <p>${trip.activity}</p>
        </article>
      </div>
    </section>
    <section>
      <h2>預約、交通與備案</h2>
      <div class="note"><strong>預約／交通：</strong>${trip.booking}</div>
      <p><strong>天氣或營運變化：</strong>${trip.backup}</p>
      <p class="small">出發前以 DB、SBB、景點及活動 operator 的最新公告為準。</p>
    </section>
    <section>
      <h2>天氣、衣著與隨身物品</h2>
      <div class="grid">
        <article class="card planning-card"><h3>天氣預測</h3><p>出發前一晚及當日早上確認 Black Forest 降雨、山徑濕滑、湖船及鐵路營運。</p><a class="activity-link" href="https://www.meteoswiss.admin.ch/" target="_blank" rel="noreferrer">MeteoSwiss 官方天氣 →</a></article>
        <article class="card planning-card"><h3>衣著建議</h3><p>舒適步行鞋、分層衣物、薄外套及雨具；森林步道濕滑時不要穿城市皮鞋。</p></article>
        <article class="card planning-card"><h3>建議攜帶</h3><p>交通票、飲用水、零食、行動電源、個人藥物、雨具及小型背包；跨境 Basel 額外攜帶身份證明。</p></article>
      </div>
    </section>
  `;
}

const tripKey = new URLSearchParams(window.location.search).get("trip");
renderFreiburgDaytrip(freiburgDaytrips[tripKey] || freiburgDaytrips.titisee);
