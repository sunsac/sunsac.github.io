(function () {
  "use strict";

  const panels = [...document.querySelectorAll("[data-day-weather-date]")];
  if (!panels.length) return;

  const locations = {
    zurich: { name: "Zurich", latitude: 47.3769, longitude: 8.5417 },
    bern: { name: "Bern", latitude: 46.9480, longitude: 7.4474 },
    freiburg: { name: "Freiburg", latitude: 47.9990, longitude: 7.8421 },
    heidelberg: { name: "Heidelberg", latitude: 49.3988, longitude: 8.6724 },
    frankfurt: { name: "Frankfurt", latitude: 50.1109, longitude: 8.6821 },
  };

  const weatherCodes = {
    0: ["晴朗", "☀️"], 1: ["大致晴朗", "🌤️"], 2: ["局部多雲", "⛅"], 3: ["陰天", "☁️"],
    45: ["有霧", "🌫️"], 48: ["霧凇", "🌫️"], 51: ["微雨", "🌦️"], 53: ["細雨", "🌦️"],
    55: ["較強細雨", "🌧️"], 61: ["小雨", "🌦️"], 63: ["中雨", "🌧️"], 65: ["大雨", "🌧️"],
    71: ["小雪", "🌨️"], 73: ["中雪", "🌨️"], 75: ["大雪", "❄️"], 80: ["短暫陣雨", "🌦️"],
    81: ["陣雨", "🌧️"], 82: ["強陣雨", "⛈️"], 85: ["陣雪", "🌨️"], 86: ["強陣雪", "❄️"],
    95: ["雷暴", "⛈️"], 96: ["雷暴伴冰雹", "⛈️"], 99: ["強雷暴伴冰雹", "⛈️"],
  };

  const updateFormatter = new Intl.DateTimeFormat("zh-Hant", {
    month: "numeric", day: "numeric", hour: "2-digit", minute: "2-digit",
    hour12: false, timeZone: "Europe/Zurich",
  });

  function planningAdvice(weather) {
    if ([95, 96, 99].includes(weather.code)) return "雷暴風險：縮短湖邊與高處路線，優先教堂、博物館或咖啡休息。";
    if ((weather.rain ?? 0) >= 60 || (weather.precipitation ?? 0) >= 8) return "雨具放在隨身包；City Walk 預留短版與室內備案。";
    if ((weather.max ?? 0) >= 30) return "氣溫偏高：補水、防曬，並把長步行避開午後最熱時段。";
    if ((weather.max ?? 0) <= 18) return "體感可能偏涼，帶輕薄防風／防雨外層。";
    return "適合城市步行；仍建議隨身帶輕便雨具並臨行複查。";
  }

  function renderLocation(location, phase, weather) {
    if (!weather) {
      return `<article class="daily-weather-location is-pending">
        <div class="daily-weather-place"><h4>${location.name}</h4><span>${phase}</span></div>
        <p class="daily-weather-pending">尚未進入 16 日預報範圍</p>
      </article>`;
    }
    const [condition, icon] = weatherCodes[weather.code] || ["天氣待確認", "🌡️"];
    const temperature = Number.isFinite(weather.max) && Number.isFinite(weather.min)
      ? `${Math.round(weather.max)}° / ${Math.round(weather.min)}°` : "—";
    const apparent = Number.isFinite(weather.apparentMax) && Number.isFinite(weather.apparentMin)
      ? `${Math.round(weather.apparentMax)}° / ${Math.round(weather.apparentMin)}°` : "—";
    const rain = Number.isFinite(weather.rain) ? `${Math.round(weather.rain)}%` : "—";
    const precipitation = Number.isFinite(weather.precipitation) ? `${weather.precipitation.toFixed(1)} mm` : "—";
    return `<article class="daily-weather-location">
      <div class="daily-weather-place"><h4>${location.name}</h4><span>${phase}</span></div>
      <div class="daily-weather-now"><span aria-hidden="true">${icon}</span><div><strong>${condition}</strong><small>基地城市預報</small></div></div>
      <dl class="daily-weather-metrics">
        <div><dt>最高／最低</dt><dd>${temperature}</dd></div>
        <div><dt>體感溫度</dt><dd>${apparent}</dd></div>
        <div><dt>降雨機率</dt><dd>${rain}</dd></div>
        <div><dt>預計降水</dt><dd>${precipitation}</dd></div>
      </dl>
      <p class="daily-weather-advice">${planningAdvice(weather)}</p>
    </article>`;
  }

  function normalizeResponse(payload, locationKeys) {
    const responses = Array.isArray(payload) ? payload : [payload];
    return new Map(locationKeys.map((key, index) => {
      const daily = responses[index]?.daily || {};
      const byDate = new Map((daily.time || []).map((date, dayIndex) => [date, {
        code: daily.weather_code?.[dayIndex],
        max: daily.temperature_2m_max?.[dayIndex],
        min: daily.temperature_2m_min?.[dayIndex],
        apparentMax: daily.apparent_temperature_max?.[dayIndex],
        apparentMin: daily.apparent_temperature_min?.[dayIndex],
        rain: daily.precipitation_probability_max?.[dayIndex],
        precipitation: daily.precipitation_sum?.[dayIndex],
      }]));
      return [key, byDate];
    }));
  }

  function renderPanels(forecasts) {
    panels.forEach((panel) => {
      const date = panel.dataset.dayWeatherDate;
      const keys = panel.dataset.dayWeatherLocations.split(",");
      const labels = panel.dataset.dayWeatherLabels.split(",");
      panel.innerHTML = `<div class="daily-weather-heading">
          <div><p>DAILY WEATHER</p><h3>${panel.dataset.dayWeatherTitle}</h3></div>
          <button type="button" data-day-weather-refresh aria-label="重新整理天氣">↻</button>
        </div>
        <div class="daily-weather-locations">${keys.map((key, index) =>
          renderLocation(locations[key], labels[index] || "當日", forecasts.get(key)?.get(date))
        ).join("")}</div>
        <p class="daily-weather-source">更新：${updateFormatter.format(new Date())}（當地時間） · <a href="https://open-meteo.com/en/docs" target="_blank" rel="noopener noreferrer">Open-Meteo</a></p>`;
    });
  }

  function renderFailure() {
    panels.forEach((panel) => {
      panel.innerHTML = `<div class="daily-weather-heading">
          <div><p>DAILY WEATHER</p><h3>${panel.dataset.dayWeatherTitle}</h3></div>
          <button type="button" data-day-weather-refresh aria-label="重新整理天氣">↻</button>
        </div>
        <p class="daily-weather-error">天氣暫時無法載入。檢查網絡後可重新整理；日程文字仍可正常使用。</p>`;
    });
  }

  async function loadWeather() {
    const locationKeys = [...new Set(panels.flatMap((panel) => panel.dataset.dayWeatherLocations.split(",")))];
    const requestedLocations = locationKeys.map((key) => locations[key]);
    panels.forEach((panel) => panel.setAttribute("aria-busy", "true"));
    const params = new URLSearchParams({
      latitude: requestedLocations.map((location) => location.latitude).join(","),
      longitude: requestedLocations.map((location) => location.longitude).join(","),
      daily: "weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,precipitation_probability_max,precipitation_sum",
      timezone: "Europe/Zurich",
      forecast_days: "16",
    });
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
      if (!response.ok) throw new Error(`Weather API ${response.status}`);
      renderPanels(normalizeResponse(await response.json(), locationKeys));
    } catch (error) {
      renderFailure();
      console.warn("Daily itinerary weather unavailable", error);
    } finally {
      panels.forEach((panel) => panel.setAttribute("aria-busy", "false"));
    }
  }

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-day-weather-refresh]")) loadWeather();
  });
  loadWeather();
})();
