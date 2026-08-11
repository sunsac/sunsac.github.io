const bernPlanningZones = [
  {
    name: "Station / New City",
    color: "#36769b",
    description: "Bern Bahnhof 是跨城铁路、tram、bus 与补给中心；由这里向东进入 Old City。",
    bounds: [[46.9464, 7.4348], [46.9464, 7.4427], [46.9510, 7.4427], [46.9510, 7.4348]]
  },
  {
    name: "Federal Quarter",
    color: "#7a5aa6",
    description: "Bundeshaus、Bundesplatz 与周边行政建筑代表 Bern 作为 Switzerland federal city 的政治角色。",
    bounds: [[46.9438, 7.4405], [46.9438, 7.4483], [46.9480, 7.4483], [46.9480, 7.4405]]
  },
  {
    name: "UNESCO Old City",
    color: "#c7864b",
    description: "Zytglogge、Marktgasse、Kramgasse、Bern Minster 与连续 Lauben 拱廊构成中世紀城市核心。",
    bounds: [[46.9450, 7.4470], [46.9450, 7.4588], [46.9506, 7.4588], [46.9506, 7.4470]]
  },
  {
    name: "Aare / Matte",
    color: "#4f9fb0",
    description: "Aare 河彎與 Matte 低地展現 Bern 半島的高低城地形；河岸活動須留意水流與天氣。",
    bounds: [[46.9407, 7.4473], [46.9407, 7.4615], [46.9464, 7.4615], [46.9464, 7.4473]]
  },
  {
    name: "BearPark / Rosengarten",
    color: "#5f9d77",
    description: "Old City 東端越過 Nydeggbrücke 後接 BearPark 與 Rosengarten；由河谷重新上升到全景高地。",
    bounds: [[46.9460, 7.4582], [46.9460, 7.4655], [46.9532, 7.4655], [46.9532, 7.4582]]
  }
];

const bernPlanningPlaces = [
  ["Bern Bahnhof (Bern Main Station)", 46.94804, 7.43965, "交通門戶｜跨城 train、tram、bus 與補給", "station"],
  ["Bundeshaus (Federal Palace)", 46.94660, 7.44400, "聯邦政治核心｜Bundesplatz 與 26 道州份噴泉", "government"],
  ["Zytglogge (Clock Tower)", 46.94801, 7.45133, "Old City 時間與街道節點｜former city gate", "old-town"],
  ["Kramgasse (Old Town Main Street)", 46.94870, 7.45450, "Lauben、噴泉、砂岩立面與 Einstein House", "old-town"],
  ["Berner Münster (Bern Minster)", 46.94700, 7.45124, "高地宗教地標｜tower 與 Münsterplattform", "old-town"],
  ["Matte district", 46.94420, 7.45620, "Aare 河谷低地｜理解 Old City 高低差", "river"],
  ["BärenPark (BearPark)", 46.94870, 7.45980, "Aare 河坡地與 Bern 熊徽章", "east"],
  ["Rosengarten (Rose Garden)", 46.95150, 7.45990, "完整 Old City panorama｜City Walk 收尾", "east"]
];

function makeBernPlanningIcon(type) {
  return L.divIcon({
    className: "",
    html: `<span class="planning-map-marker ${type}">●</span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
}

function renderBernCityPlanningMap() {
  const element = document.querySelector("#bern-city-planning-map");
  if (!element || !window.L) return;

  const map = L.map(element);
  L.control.scale({ imperial: false, metric: true, maxWidth: 120 }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  bernPlanningZones.forEach((zone) => {
    L.polygon(zone.bounds, {
      color: zone.color,
      weight: 2,
      fillColor: zone.color,
      fillOpacity: 0.18
    }).addTo(map).bindPopup(`<strong>${zone.name}</strong><br>${zone.description}`);
  });

  bernPlanningPlaces.forEach(([name, lat, lng, description, type]) => {
    L.marker([lat, lng], { icon: makeBernPlanningIcon(type) })
      .addTo(map)
      .bindPopup(`<strong>${name}</strong><br>${description}`);
  });

  map.fitBounds([[46.9402, 7.4342], [46.9537, 7.4660]], { padding: [18, 18] });
}

document.addEventListener("DOMContentLoaded", renderBernCityPlanningMap);
