const zurichPlanningZones = [
  {
    name: "HB / Europaallee (Station / New City)",
    color: "#36769b",
    description: "Zürich HB 是机场、跨城铁路、tram 与补给的交通门。Europaallee 在其西南侧，适合抵达、离开与住宿基地。",
    bounds: [[47.3755, 8.5295], [47.3755, 8.5412], [47.3808, 8.5412], [47.3808, 8.5295]]
  },
  {
    name: "Old Town / 金融轴 (Financial Axis)",
    color: "#c7864b",
    description: "由 Bahnhofstrasse、Paradeplatz、Lindenhof、Grossmünster 与 Fraumünster 组成的紧凑步行核心；历史、金融和河岸在这里交汇。",
    bounds: [[47.3652, 8.5368], [47.3652, 8.5485], [47.3763, 8.5485], [47.3763, 8.5368]]
  },
  {
    name: "大学山坡 (University Hill)",
    color: "#5f9d77",
    description: "ETH、University 和 Polyterrasse 位于 Old Town 东北侧高地；适合用 Polybahn 上山看城市、湖和屋顶。",
    bounds: [[47.3760, 8.5456], [47.3760, 8.5565], [47.3832, 8.5565], [47.3832, 8.5456]]
  },
  {
    name: "湖边 / Bellevue Square",
    color: "#4f9fb0",
    description: "Bürkliplatz、Bellevue、Opera House 与 Seefeld 组成 Lake Zurich 的城市客厅；适合湖景、船班和轻松散步。",
    bounds: [[47.3580, 8.5410], [47.3580, 8.5588], [47.3686, 8.5588], [47.3686, 8.5410]]
  },
  {
    name: "Zürich West (Creative District)",
    color: "#8d6bb2",
    description: "旧工业区转型为设计、餐饮、Im Viadukt 与创意街区；适合独立安排半日，不必接在抵达日主线后。",
    bounds: [[47.3790, 8.5160], [47.3790, 8.5310], [47.3890, 8.5310], [47.3890, 8.5160]]
  }
];

const zurichPlanningPlaces = [
  ["Zürich HB (Zurich Main Station)", 47.37818, 8.54019, "交通核心｜机场 train、跨城铁路、tram 与补给集中处", "station"],
  ["25hours Hotel Zürich Langstrasse", 47.38030, 8.52850, "H1｜已订住宿｜Langstrasse 150，Europaallee / Langstrasse 一侧；距 Zürich HB 约 9–12 分钟步行", "lodging", "H1"],
  ["Lindenhof (Lindenhof Hill)", 47.37070, 8.54160, "Old Town 的观景高地｜俯瞰 Limmat River 与城市屋顶", "old-town"],
  ["Grossmünster (Gross Minster)", 47.37002, 8.54407, "Old Town 标志性教堂｜宗教改革历史", "old-town"],
  ["Bürkliplatz (Bürkliplatz Square)", 47.36592, 8.54118, "湖边门户｜船班、市场与 Bahnhofstrasse 南端", "lakefront"],
  ["Bellevue (Bellevue Square)", 47.36620, 8.54633, "湖边 tram 枢纽｜连接 Old Town、Opera House 与 Zürichhorn", "lakefront"],
  ["ETH / Polyterrasse (ETH Terrace)", 47.37630, 8.54830, "大学山坡｜由 Central 乘 Polybahn 上山", "university"],
  ["Europaallee", 47.37700, 8.53220, "HB 西南侧新开发区｜餐饮、办公与现代城市景观", "station"],
  ["Im Viadukt", 47.38580, 8.52380, "Zürich West｜铁路拱廊、设计店与餐饮", "west"]
];

function makePlanningIcon(type, markerLabel) {
  const label = type === "lodging" ? markerLabel : "●";
  return L.divIcon({
    className: "",
    html: `<span class="planning-map-marker ${type}">${label}</span>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14]
  });
}

function renderZurichCityPlanningMap() {
  const element = document.querySelector("#zurich-city-planning-map");
  if (!element || !window.L) return;

  const map = L.map(element, { scrollWheelZoom: false });
  L.control.scale({ imperial: false, metric: true, maxWidth: 120 }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  zurichPlanningZones.forEach((zone) => {
    L.polygon(zone.bounds, {
      color: zone.color,
      weight: 2,
      fillColor: zone.color,
      fillOpacity: 0.18
    }).addTo(map).bindPopup(`<strong>${zone.name}</strong><br>${zone.description}`);
  });

  zurichPlanningPlaces.forEach(([name, lat, lng, description, type, markerLabel]) => {
    L.marker([lat, lng], { icon: makePlanningIcon(type, markerLabel) })
      .addTo(map)
      .bindPopup(`<strong>${name}</strong><br>${description}`);
  });

  map.fitBounds([[47.3575, 8.5155], [47.3895, 8.5595]], { padding: [18, 18] });
}

document.addEventListener("DOMContentLoaded", renderZurichCityPlanningMap);
