const API_KEY = "62f27f0e3d588cd1a3b38295266dad5b";
const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const locBtn = document.getElementById("locBtn");
const messageEl = document.getElementById("message");
const resultEl = document.getElementById("result");
const cityNameEl = document.getElementById("cityName");
const descEl = document.getElementById("desc");
const tempEl = document.getElementById("temp");
const feelsEl = document.getElementById("feels");
const humidityEl = document.getElementById("humidity");
const windEl = document.getElementById("wind");
const iconEl = document.getElementById("icon");
const metaInfoEl = document.getElementById("metaInfo");
const timeNowEl = document.getElementById("timeNow");

// Cập nhật thời gian hiện tại
function updateTime() {
  const now = new Date();
  timeNowEl.textContent = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}
updateTime();
setInterval(updateTime, 60000);

function showMessage(text, isError = false) {
  messageEl.innerHTML = text;
  messageEl.style.color = isError ? "red" : "";
}
function hideResult() {
  resultEl.classList.add("d-none");
}
function showLoading(text = "Đang tải...") {
  showMessage(`<span class="spinner-inline"></span> ${text}`);
}

async function getCoordsByCity(city) {
  const url = `${GEO_URL}?q=${encodeURIComponent(
    city.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
  )}&limit=1&appid=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  if (!data.length) throw new Error("Không tìm thấy thành phố.");
  return {
    lat: data[0].lat,
    lon: data[0].lon,
    name: data[0].name,
    country: data[0].country,
  };
}

async function fetchWeather(lat, lon) {
  const url = `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=vi`;
  const res = await fetch(url);
  return res.json();
}

function renderWeather(data, name, country) {
  if (!data || data.cod !== 200) {
    showMessage("Không lấy được dữ liệu thời tiết.", true);
    hideResult();
    return;
  }
  cityNameEl.textContent = `${name}, ${country}`;
  descEl.textContent = data.weather[0].description;
  tempEl.textContent = Math.round(data.main.temp) + "°C";
  feelsEl.textContent = Math.round(data.main.feels_like) + "°C";
  humidityEl.textContent = data.main.humidity + "%";
  windEl.textContent = data.wind.speed + " m/s";
  iconEl.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  metaInfoEl.textContent =
    "Cập nhật: " + new Date(data.dt * 1000).toLocaleString();
  resultEl.classList.remove("d-none");
  showMessage("");
}

searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) return showMessage("Vui lòng nhập tên thành phố.", true);
  hideResult();
  showLoading(`Đang tìm "${city}"...`);
  try {
    const { lat, lon, name, country } = await getCoordsByCity(city);
    const data = await fetchWeather(lat, lon);
    renderWeather(data, name, country);
  } catch (err) {
    showMessage("Lỗi: " + err.message, true);
  }
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") searchBtn.click();
});

locBtn.addEventListener("click", () => {
  if (!navigator.geolocation)
    return showMessage("Trình duyệt không hỗ trợ định vị.", true);

  hideResult();
  showLoading("Đang lấy vị trí thiết bị...");
  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const { latitude: lat, longitude: lon } = pos.coords;
      showLoading("Đang tải thời tiết...");
      try {
        const data = await fetchWeather(lat, lon);
        renderWeather(data, "Vị trí của bạn", data.sys.country);
      } catch (err) {
        showMessage("Lỗi khi gọi API: " + err.message, true);
      }
    },
    (err) => {
      showMessage("Không thể lấy vị trí: " + err.message, true);
    }
  );
});
