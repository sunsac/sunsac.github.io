const heidelbergOverviewPlaces = [
  ["Heidelberg", 49.4106, 8.6878, "base", "住宿基地、City Walk 和周邊一日遊出發點"],
  ["Heidelberg Castle", 49.4106, 8.7157, "local", "城堡與城市全景"],
  ["Königstuhl", 49.3813, 8.7167, "local", "高地觀景與自然步道"],
  ["Speyer", 49.3173, 8.4412, "city", "大教堂、歷史與 Rhine 城市"],
  ["Strasbourg", 48.5818, 7.7508, "cross-border", "Alsace 跨境城市"],
  ["Schwetzingen", 49.3820, 8.5750, "garden", "宮殿與花園"],
  ["Mannheim", 49.4875, 8.4660, "city", "Baroque grid、宮殿與 Rhine／Neckar"],
  ["Heiligenberg", 49.4210, 8.7190, "local", "Neckar 北岸高地與短步道"],
  ["Baden-Baden", 48.7594, 8.2398, "wellness", "溫泉與文化城市備選"],
  ["Colmar", 48.0770, 7.3570, "cross-border", "Alsace 童話小鎮備選"],
  ["Cologne", 50.9413, 6.9583, "long-distance", "大教堂、Rhine 與長距離城市日"],
];

const heidelbergOverviewColors = {
  base: "#2e6f95",
  local: "#477b68",
  city: "#8b5aa8",
  "cross-border": "#a76b35",
  garden: "#6e8c4b",
  wellness: "#a76b35",
  "long-distance": "#9b4d62",
};

function heidelbergOverviewIcon(label, category) {
  return L.divIcon({
    className: "",
    html: `<span class="overview-map-marker ${category}">${label}</span>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });
}

function renderHeidelbergOverviewMap() {
  const element = document.querySelector("#heidelberg-overview-map");
  if (!element || !window.L) return;
  const map = L.map(element).setView([49.40, 8.58], 9);
  L.control.scale({ imperial: false, metric: true, maxWidth: 120 }).addTo(map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 12,
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);

  const base = heidelbergOverviewPlaces[0];
  const bounds = [];
  heidelbergOverviewPlaces.forEach(([name, lat, lng, category, description], index) => {
    L.marker([lat, lng], {
      icon: heidelbergOverviewIcon(category === "base" ? "H" : String(index), category),
    }).addTo(map).bindPopup(`<strong>${name}</strong><br>${description}`);
    bounds.push([lat, lng]);
    if (category !== "base") {
      L.polyline([[base[1], base[2]], [lat, lng]], {
        color: heidelbergOverviewColors[category],
        weight: 2,
        opacity: 0.45,
        dashArray: "5 7",
      }).addTo(map);
    }
  });
  map.fitBounds(L.latLngBounds(bounds), { padding: [28, 28] });
}

document.addEventListener("DOMContentLoaded", renderHeidelbergOverviewMap);
