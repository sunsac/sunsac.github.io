const bernOverviewPlaces = [
  ["Bern", 46.9480, 7.4396, "base", "住宿基地、City Walk 及周邊行程出發點"],
  ["Interlaken", 46.6863, 7.8632, "alpine", "湖區、Lauterbrunnen 和 Jungfrau Region 轉乘基地"],
  ["Lauterbrunnen", 46.5936, 7.9090, "alpine", "瀑布山谷與 Wengen／Mürren 入口"],
  ["Grindelwald", 46.6244, 8.0410, "alpine", "First、村落和高山活動"],
  ["Jungfraujoch", 46.5475, 7.9850, "alpine", "高山鐵路與冰雪景觀"],
  ["Wengen", 46.6055, 7.9218, "village", "無車村落與山谷景觀"],
  ["Mürren", 46.5596, 7.8926, "village", "高山無車村落與 Alps 景觀"],
  ["Iseltwald", 46.7120, 7.9650, "lake", "Lake Brienz 湖畔村落"],
  ["Thun", 46.7580, 7.6280, "lake", "湖區城市、城堡與船程"],
  ["Lucerne", 47.0502, 8.3093, "city", "湖畔城市與文化"],
  ["Lausanne", 46.5197, 6.6323, "city", "Lake Geneva、Old Town 與 Olympic Museum"],
  ["Fribourg", 46.8065, 7.1619, "city", "中世紀城市與 Gruyères 轉移點"],
  ["Gurten", 46.9230, 7.4870, "local", "Bern local mountain 與慢遊"],
];

const bernOverviewColors = {
  base: "#2e6f95",
  alpine: "#477b68",
  village: "#6e8c4b",
  lake: "#378c9e",
  city: "#8b5aa8",
  local: "#a76b35",
};

function bernOverviewIcon(label, category) {
  return L.divIcon({
    className: "",
    html: `<span class="overview-map-marker ${category}">${label}</span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

function renderBernOverviewMap() {
  const element = document.querySelector("#bern-overview-map");
  if (!element || !window.L) return;
  const map = L.map(element).setView([46.75, 7.75], 8);
  L.control.scale({ imperial: false, metric: true, maxWidth: 120 }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 12,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const base = bernOverviewPlaces[0];
  const bounds = [];
  bernOverviewPlaces.forEach(([name, lat, lng, category, description], index) => {
    L.marker([lat, lng], {
      icon: bernOverviewIcon(category === "base" ? "B" : String(index), category),
    }).addTo(map).bindPopup(`<strong>${name}</strong><br>${description}`);
    bounds.push([lat, lng]);
    if (category !== "base") {
      L.polyline([[base[1], base[2]], [lat, lng]], {
        color: bernOverviewColors[category],
        weight: 2,
        opacity: 0.45,
        dashArray: "5 7",
      }).addTo(map);
    }
  });
  map.fitBounds(L.latLngBounds(bounds), { padding: [28, 28] });
}

document.addEventListener("DOMContentLoaded", renderBernOverviewMap);
