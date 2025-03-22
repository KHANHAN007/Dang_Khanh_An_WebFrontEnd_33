const weatherData = {
    "hà nội": { temperature: 25, humidity: 70, windSpeed: 5, description: "Có mây", icon: "☁️" },
    "hồ chí minh": { temperature: 32, humidity: 75, windSpeed: 7, description: "Nắng", icon: "☀️" },
    "đà nẵng": { temperature: 28, humidity: 82, windSpeed: 12, description: "Mưa rào", icon: "🌧️" }
};
function searchWeather() {
    let city = document.getElementById("cityInput").value.trim().toLowerCase();
    if (weatherData.hasOwnProperty(city)) {
        document.getElementById("cityName").innerText = city.charAt(0).toUpperCase() + city.slice(1);
        document.getElementById("weatherIcon").innerText = weatherData[city].icon;
        document.getElementById("temperature").innerText = weatherData[city].temperature + "°C";
        document.getElementById("description").innerText = weatherData[city].description;
        document.getElementById("humidity").innerText = "Độ ẩm: " + weatherData[city].humidity + "%";
        document.getElementById("windSpeed").innerText = "Tốc độ gió: " + weatherData[city].windSpeed + " km/h";
        document.getElementById("weatherBox").style.display = "block";
    } else {
        alert("Không tìm thấy thành phố này!");
        document.getElementById("weatherBox").style.display = "none";
    }
}