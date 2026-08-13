const zurichPlanningZones = [
  {
    name: "HB / Europaallee (Station / New City)",
    color: "#36769b",
    description: "Zürich HB 是機場、跨城鐵路、tram 與補給的交通門。Europaallee 在其西南側，適合抵達、離開與住宿基地。",
    bounds: [[47.3755, 8.5295], [47.3755, 8.5412], [47.3808, 8.5412], [47.3808, 8.5295]]
  },
  {
    name: "Old Town / 金融軸 (Financial Axis)",
    color: "#c7864b",
    description: "由 Bahnhofstrasse、Paradeplatz、Lindenhof、Grossmünster 與 Fraumünster 組成的緊湊步行核心；歷史、金融和河岸在這裡交匯。",
    bounds: [[47.3652, 8.5368], [47.3652, 8.5485], [47.3763, 8.5485], [47.3763, 8.5368]]
  },
  {
    name: "大學山坡 (University Hill)",
    color: "#5f9d77",
    description: "ETH、University 和 Polyterrasse 位於 Old Town 東北側高地；適合用 Polybahn 上山看城市、湖和屋頂。",
    bounds: [[47.3760, 8.5456], [47.3760, 8.5565], [47.3832, 8.5565], [47.3832, 8.5456]]
  },
  {
    name: "湖邊 / Bellevue Square",
    color: "#4f9fb0",
    description: "Bürkliplatz、Bellevue、Opera House 與 Seefeld 組成 Lake Zurich 的城市客廳；適合湖景、船班和輕鬆散步。",
    bounds: [[47.3580, 8.5410], [47.3580, 8.5588], [47.3686, 8.5588], [47.3686, 8.5410]]
  },
  {
    name: "Zürich West (Creative District)",
    color: "#8d6bb2",
    description: "舊工業區轉型為設計、餐飲、Im Viadukt 與創意街區；適合獨立安排半日，不必接在抵達日主線後。",
    bounds: [[47.3790, 8.5160], [47.3790, 8.5310], [47.3890, 8.5310], [47.3890, 8.5160]]
  }
];

const zurichPlanningPlaces = [
  ["Zürich HB (Zurich Main Station)", 47.37818, 8.54019, "交通核心｜機場 train、跨城鐵路、tram 與補給集中處", "station"],
  ["25hours Hotel Zürich Langstrasse", 47.38030, 8.52850, "H1｜已訂住宿｜Langstrasse 150，Europaallee / Langstrasse 一側；距 Zürich HB 約 9–12 分鐘步行", "lodging", "H1"],
  ["Lindenhof (Lindenhof Hill)", 47.37070, 8.54160, "Old Town 的觀景高地｜俯瞰 Limmat River 與城市屋頂", "old-town"],
  ["Grossmünster (Gross Minster)", 47.37002, 8.54407, "Old Town 標誌性教堂｜宗教改革歷史", "old-town"],
  ["Bürkliplatz (Bürkliplatz Square)", 47.36592, 8.54118, "湖邊門戶｜船班、市場與 Bahnhofstrasse 南端", "lakefront"],
  ["Bellevue (Bellevue Square)", 47.36620, 8.54633, "湖邊 tram 樞紐｜連接 Old Town、Opera House 與 Zürichhorn", "lakefront"],
  ["ETH / Polyterrasse (ETH Terrace)", 47.37630, 8.54830, "大學山坡｜由 Central 乘 Polybahn 上山", "university"],
  ["Europaallee", 47.37700, 8.53220, "HB 西南側新開發區｜餐飲、辦公與現代城市景觀", "station"],
  ["Im Viadukt", 47.38580, 8.52380, "Zürich West｜鐵路拱廊、設計店與餐飲", "west"]
];

let zurichPlanningMap;

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

  const map = L.map(element);
  zurichPlanningMap = map;
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
document.addEventListener("toggle", (event) => {
  if (!event.target.matches(".reference-details") || !event.target.open || !zurichPlanningMap) return;
  window.setTimeout(() => {
    zurichPlanningMap.invalidateSize();
    zurichPlanningMap.fitBounds([[47.3575, 8.5155], [47.3895, 8.5595]], { padding: [18, 18] });
  }, 50);
}, true);
