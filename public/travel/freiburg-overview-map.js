const freiburgOverviewPlaces = [
  ["Freiburg", 47.9978, 7.8417, "base", "住宿基地、City Walk 及所有周邊行程的出發點"],
  ["Titisee", 47.8968, 8.1544, "forest", "湖區與慢遊"],
  ["Triberg", 48.1285, 8.2345, "forest", "瀑布與 Schwarzwaldbahn"],
  ["Todtnau", 47.8290, 7.9430, "forest", "南黑森林瀑布與夏季活動"],
  ["Schiltach", 48.2900, 8.3420, "forest", "木骨架小鎮與河谷"],
  ["Baden-Baden", 48.7594, 8.2398, "wellness", "溫泉與文化城市"],
  ["Bad Wildbad", 48.7500, 8.5500, "wellness", "樹冠步道、森林與溫泉"],
  ["Europa-Park Rust", 48.2660, 7.7210, "wellness", "主題樂園 Full-day"],
  ["Basel", 47.5574, 7.5926, "cross-border", "跨境城市、博物館與 Rhine"],
  ["Colmar", 48.0770, 7.3570, "cross-border", "Alsace 童話小鎮"],
  ["Strasbourg", 48.5818, 7.7508, "cross-border", "Alsace 首府與城市 Walk"],
];

const overviewColors = {
  base: "#2e6f95",
  forest: "#477b68",
  wellness: "#a76b35",
  "cross-border": "#8b5aa8",
};

function overviewIcon(label, category) {
  return L.divIcon({
    className: "",
    html: `<span class="overview-map-marker ${category}">${label}</span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

function renderFreiburgOverviewMap() {
  const element = document.querySelector("#freiburg-overview-map");
  if (!element || !window.L) return;

  const map = L.map(element).setView([48.12, 7.85], 8);
  L.control.scale({ imperial: false, metric: true, maxWidth: 120 }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 12,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const base = freiburgOverviewPlaces[0];
  const bounds = [];
  freiburgOverviewPlaces.forEach(([name, lat, lng, category, description], index) => {
    const marker = L.marker([lat, lng], {
      icon: overviewIcon(category === "base" ? "F" : String(index), category),
    }).addTo(map);
    marker.bindPopup(`<strong>${name}</strong><br>${description}`);
    bounds.push([lat, lng]);
    if (category !== "base") {
      L.polyline([[base[1], base[2]], [lat, lng]], {
        color: overviewColors[category],
        weight: 2,
        opacity: 0.45,
        dashArray: "5 7",
      }).addTo(map);
    }
  });
  map.fitBounds(L.latLngBounds(bounds), { padding: [28, 28] });
}

document.addEventListener("DOMContentLoaded", renderFreiburgOverviewMap);
