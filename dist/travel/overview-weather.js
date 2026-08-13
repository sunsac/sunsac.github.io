const TRIP_WEATHER_YEAR = 2026;

const tripWeatherStops = [
  { id: "zurich", city: "Zurich", label: "抵達 · City Walk", latitude: 47.3769, longitude: 8.5417, start: "2026-08-15", end: "2026-08-16", transferEnd: true },
  { id: "bern", city: "Bern", label: "住宿基地 · Alps", latitude: 46.9480, longitude: 7.4474, start: "2026-08-16", end: "2026-08-20", transferStart: true, transferEnd: true },
  { id: "freiburg", city: "Freiburg", label: "Black Forest", latitude: 47.9990, longitude: 7.8421, start: "2026-08-20", end: "2026-08-23", transferStart: true, transferEnd: true },
  { id: "heidelberg", city: "Heidelberg", label: "City · Day Trips", latitude: 49.3988, longitude: 8.6724, start: "2026-08-23", end: "2026-08-29", transferStart: true, transferEnd: true },
  { id: "frankfurt", city: "Frankfurt", label: "Departure", latitude: 50.1109, longitude: 8.6821, start: "2026-08-29", end: "2026-08-30", transferStart: true },
];

const weatherCodeDetails = {
  0: ["晴朗", "☀️"],
  1: ["大致晴朗", "🌤️"],
  2: ["局部多雲", "⛅"],
  3: ["陰天", "☁️"],
  45: ["有霧", "🌫️"],
  48: ["霧凇", "🌫️"],
  51: ["微雨", "🌦️"],
  53: ["細雨", "🌦️"],
  55: ["較強細雨", "🌧️"],
  56: ["凍微雨", "🌧️"],
  57: ["較強凍雨", "🌧️"],
  61: ["小雨", "🌦️"],
  63: ["中雨", "🌧️"],
  65: ["大雨", "🌧️"],
  66: ["凍雨", "🌧️"],
  67: ["較強凍雨", "🌧️"],
  71: ["小雪", "🌨️"],
  73: ["中雪", "🌨️"],
  75: ["大雪", "❄️"],
  77: ["雪粒", "🌨️"],
  80: ["短暫陣雨", "🌦️"],
  81: ["陣雨", "🌧️"],
  82: ["強陣雨", "⛈️"],
  85: ["陣雪", "🌨️"],
  86: ["強陣雪", "❄️"],
  95: ["雷暴", "⛈️"],
  96: ["雷暴伴冰雹", "⛈️"],
  99: ["強雷暴伴冰雹", "⛈️"],
};

const dateFormatter = new Intl.DateTimeFormat("zh-Hant", {
  month: "numeric",
  day: "numeric",
  weekday: "short",
  timeZone: "Europe/Zurich",
});

const updateFormatter = new Intl.DateTimeFormat("zh-Hant", {
  month: "numeric",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: "Europe/Zurich",
});

function parseTripDate(value) {
  return new Date(`${value}T12:00:00+02:00`);
}

function listDates(start, end) {
  const dates = [];
  const cursor = parseTripDate(start);
  const last = parseTripDate(end);
  while (cursor <= last) {
    dates.push(cursor.toISOString().slice(0, 10));
    cursor.setUTCDate(cursor.getUTCDate() + 1);
  }
  return dates;
}

function formatDate(value) {
  return dateFormatter.format(parseTripDate(value)).replace("星期", "週");
}

function formatRange(stop) {
  const short = (date) => `${Number(date.slice(5, 7))}/${Number(date.slice(8, 10))}`;
  return `${short(stop.start)}–${short(stop.end)}`;
}

function transferNote(stop, date) {
  if (date === stop.start && stop.transferStart) return "抵達日";
  if (date === stop.end && stop.transferEnd) return "轉移日";
  if (date === stop.start) return "抵達日";
  if (date === stop.end && stop.id === "frankfurt") return "離境日";
  return "住宿日";
}

function placeholderRow(stop, date, state = "loading") {
  const content = state === "error"
    ? `<span class="weather-pending-icon" aria-hidden="true">!</span><span class="weather-condition">載入失敗<small>可按上方重新整理</small></span>`
    : `<span class="weather-pending-icon" aria-hidden="true">…</span><span class="weather-condition">正在載入<small>取得每日預報</small></span>`;
  return `<li class="weather-day-row is-${state}">
    <time datetime="${date}">${formatDate(date)}<small>${transferNote(stop, date)}</small></time>
    <span class="weather-summary">${content}</span>
    <span class="weather-temperature">—<small>最高／最低</small></span>
    <span class="weather-rain">—<small>降雨</small></span>
  </li>`;
}

function renderWeatherShell(state = "loading") {
  const board = document.querySelector("#weather-board");
  if (!board) return;
  board.innerHTML = tripWeatherStops.map((stop) => `
    <article class="weather-city-card" data-weather-stop="${stop.id}">
      <header class="weather-city-heading">
        <div><h3>${stop.city}</h3><p>${stop.label}</p></div>
        <span>${formatRange(stop)}</span>
      </header>
      <ul>${listDates(stop.start, stop.end).map((date) => placeholderRow(stop, date, state)).join("")}</ul>
    </article>
  `).join("");
}

function normalizeWeatherResponse(payload) {
  const responses = Array.isArray(payload) ? payload : [payload];
  return tripWeatherStops.map((stop, index) => {
    const daily = responses[index]?.daily || {};
    const byDate = new Map();
    (daily.time || []).forEach((date, dayIndex) => {
      byDate.set(date, {
        code: daily.weather_code?.[dayIndex],
        max: daily.temperature_2m_max?.[dayIndex],
        min: daily.temperature_2m_min?.[dayIndex],
        apparentMax: daily.apparent_temperature_max?.[dayIndex],
        apparentMin: daily.apparent_temperature_min?.[dayIndex],
        rain: daily.precipitation_probability_max?.[dayIndex],
        precipitation: daily.precipitation_sum?.[dayIndex],
      });
    });
    return { stop, byDate };
  });
}

function weatherRow(stop, date, weather) {
  if (!weather) {
    return `<li class="weather-day-row is-pending">
      <time datetime="${date}">${formatDate(date)}<small>${transferNote(stop, date)}</small></time>
      <span class="weather-summary"><span class="weather-pending-icon" aria-hidden="true">＋</span><span class="weather-condition">等待預報<small>尚未進入 16 日範圍</small></span></span>
      <span class="weather-temperature">—<small>稍後更新</small></span>
      <span class="weather-rain">—<small>降雨</small></span>
    </li>`;
  }

  const [condition, icon] = weatherCodeDetails[weather.code] || ["天氣待確認", "🌡️"];
  const temperature = Number.isFinite(weather.max) && Number.isFinite(weather.min)
    ? `${Math.round(weather.max)}° / ${Math.round(weather.min)}°`
    : "—";
  const apparent = Number.isFinite(weather.apparentMax) && Number.isFinite(weather.apparentMin)
    ? `體感 ${Math.round(weather.apparentMax)}° / ${Math.round(weather.apparentMin)}°`
    : "最高／最低";
  const rain = Number.isFinite(weather.rain) ? `${Math.round(weather.rain)}%` : "—";
  const rainDetail = Number.isFinite(weather.precipitation) ? `約 ${weather.precipitation.toFixed(1)} mm` : "降雨機率";
  return `<li class="weather-day-row">
    <time datetime="${date}">${formatDate(date)}<small>${transferNote(stop, date)}</small></time>
    <span class="weather-summary"><span class="weather-icon" aria-hidden="true">${icon}</span><span class="weather-condition">${condition}<small>基地城市預報</small></span></span>
    <span class="weather-temperature">${temperature}<small>${apparent}</small></span>
    <span class="weather-rain">${rain}<small>${rainDetail}</small></span>
  </li>`;
}

function renderForecast(payload) {
  const datasets = normalizeWeatherResponse(payload);
  let latestForecastDate = "";
  datasets.forEach(({ stop, byDate }) => {
    const card = document.querySelector(`[data-weather-stop="${stop.id}"]`);
    if (!card) return;
    const dates = listDates(stop.start, stop.end);
    card.querySelector("ul").innerHTML = dates.map((date) => weatherRow(stop, date, byDate.get(date))).join("");
    [...byDate.keys()].forEach((date) => {
      if (date > latestForecastDate) latestForecastDate = date;
    });
  });

  const updateStatus = document.querySelector("#weather-update-status");
  const horizonStatus = document.querySelector("#weather-horizon-status");
  if (updateStatus) updateStatus.textContent = `最新取得：${updateFormatter.format(new Date())}（瑞士／德國時間）`;
  if (horizonStatus && latestForecastDate) horizonStatus.textContent = `目前預報覆蓋至 ${formatDate(latestForecastDate)}；其後日期會自動補上`;
}

async function loadTripWeather() {
  const board = document.querySelector("#weather-board");
  const button = document.querySelector("#weather-refresh");
  const updateStatus = document.querySelector("#weather-update-status");
  if (!board) return;
  board.setAttribute("aria-busy", "true");
  button?.setAttribute("disabled", "");
  if (updateStatus) updateStatus.textContent = "正在取得最新預報…";

  const latitude = tripWeatherStops.map((stop) => stop.latitude).join(",");
  const longitude = tripWeatherStops.map((stop) => stop.longitude).join(",");
  const params = new URLSearchParams({
    latitude,
    longitude,
    daily: "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,precipitation_sum",
    timezone: "Europe/Zurich",
    forecast_days: "16",
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
    if (!response.ok) throw new Error(`Weather API ${response.status}`);
    renderForecast(await response.json());
  } catch (error) {
    renderWeatherShell("error");
    if (updateStatus) updateStatus.textContent = "天氣資料暫時無法載入；請檢查網絡後重新整理。";
    console.warn("Trip weather unavailable", error);
  } finally {
    board.setAttribute("aria-busy", "false");
    button?.removeAttribute("disabled");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (new Date().getFullYear() > TRIP_WEATHER_YEAR) {
    const horizonStatus = document.querySelector("#weather-horizon-status");
    if (horizonStatus) horizonStatus.textContent = "旅程日期已過；即時預報不再提供歷史天氣。";
  }
  renderWeatherShell();
  loadTripWeather();
  document.querySelector("#weather-refresh")?.addEventListener("click", loadTripWeather);
});
