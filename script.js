// ฟังก์ชันอัปเดตวันที่และเวลา
function updateDateTime() {
    let now = new Date();
    let dateTimeString = now.toLocaleString("th-TH", { 
        dateStyle: "full", 
        timeStyle: "medium" 
    });
    document.getElementById("datetime").innerText = "📅 " + dateTimeString;
}

// ฟังก์ชันจำลองข้อมูลอุณหภูมิและความดันอากาศ
function updateWeatherData() {
    let temperature = (Math.random() * (35 - 20) + 20).toFixed(1); // ค่าอุณหภูมิระหว่าง 20-35°C
    let pressure = (Math.random() * (1020 - 1000) + 1000).toFixed(1); // ความดันระหว่าง 1000 - 1020 hPa
    let timestamp = new Date().toLocaleString(); // เวลาที่อัปเดตข้อมูล

    // เก็บข้อมูลอุณหภูมิและความดันอากาศใน Local Storage
    let weatherData = JSON.parse(localStorage.getItem('weatherData')) || [];
    weatherData.push({ temperature, pressure, timestamp });
    localStorage.setItem('weatherData', JSON.stringify(weatherData));

    // แสดงข้อมูลบนหน้าแรก
    document.getElementById("temperature").innerText = temperature;
    document.getElementById("pressure").innerText = pressure;
}

// ฟังก์ชันที่แสดงข้อมูลอุณหภูมิและความดันในตารางบนหน้า `weather.html`
function displayWeatherData() {
    let weatherData = JSON.parse(localStorage.getItem('weatherData')) || [];
    let tableBody = document.getElementById("weather-table-body");

    weatherData.forEach((data) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${data.temperature} °C</td><td>${data.pressure} hPa</td><td>${data.timestamp}</td>`;
        tableBody.appendChild(row);
    });
}

// ฟังก์ชันจำลองข้อมูลแผ่นดินไหว
function updateFakeEarthquake() {
    let locations = ["เชียงใหม่", "กรุงเทพฯ", "ภูเก็ต", "ขอนแก่น", "สงขลา"];
    let location = locations[Math.floor(Math.random() * locations.length)];
    let magnitude = (Math.random() * (6 - 3) + 3).toFixed(1); // ค่าระหว่าง 3.0 - 6.0
    let timestamp = new Date().toLocaleString(); // เวลาที่เกิดเหตุ

    // เก็บข้อมูลแผ่นดินไหวใน Local Storage
    let earthquakeData = JSON.parse(localStorage.getItem('earthquakeData')) || [];
    earthquakeData.push({ location, magnitude, timestamp });
    localStorage.setItem('earthquakeData', JSON.stringify(earthquakeData));

    // แสดงข้อมูลบนหน้าแรก
    document.getElementById("earthquake-location").innerText = location;
    document.getElementById("earthquake-magnitude").innerText = magnitude + " ริกเตอร์";
}

// ฟังก์ชันที่แสดงข้อมูลแผ่นดินไหวในตารางบนหน้า `earthquake.html`
function displayEarthquakeData() {
    let earthquakeData = JSON.parse(localStorage.getItem('earthquakeData')) || [];
    let tableBody = document.getElementById("earthquake-table-body");

    earthquakeData.forEach((data) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${data.location}</td><td>${data.magnitude}</td><td>${data.timestamp}</td>`;
        tableBody.appendChild(row);
    });
}

// เรียกใช้ฟังก์ชันเพื่อแสดงข้อมูลในหน้า `earthquake.html` และ `weather.html`
if (window.location.pathname.includes('earthquake.html')) {
    displayEarthquakeData();
}

if (window.location.pathname.includes('weather.html')) {
    displayWeatherData();
}


// เรียกใช้ฟังก์ชันเพื่อแสดงข้อมูลในหน้า `earthquake.html` และ `weather.html`
if (window.location.pathname.includes('earthquake.html')) {
    displayEarthquakeData();
}

if (window.location.pathname.includes('weather.html')) {
    displayWeatherData();
}

// ฟังก์ชันจำลองข้อมูลแผ่นดินไหว
function updateFakeEarthquake() {
    let locations = ["เชียงใหม่", "กรุงเทพฯ", "ภูเก็ต", "ขอนแก่น", "สงขลา"];
    let location = locations[Math.floor(Math.random() * locations.length)];
    let magnitude = (Math.random() * (6 - 3) + 3).toFixed(1); // ค่าระหว่าง 3.0 - 6.0
    let timestamp = new Date().toLocaleString(); // เวลาที่เกิดเหตุ

    // เก็บข้อมูลแผ่นดินไหวใน Local Storage
    let earthquakeData = JSON.parse(localStorage.getItem('earthquakeData')) || [];
    earthquakeData.push({ location, magnitude, timestamp });
    localStorage.setItem('earthquakeData', JSON.stringify(earthquakeData));

    // แสดงข้อมูลบนหน้าแรก
    document.getElementById("earthquake-location").innerText = location;
    document.getElementById("earthquake-magnitude").innerText = magnitude + " ริกเตอร์";
}

// ฟังก์ชันที่แสดงข้อมูลแผ่นดินไหวในตารางบนหน้า `earthquake.html`
function displayEarthquakeData() {
    let earthquakeData = JSON.parse(localStorage.getItem('earthquakeData')) || [];
    let tableBody = document.getElementById("earthquake-table-body");

    earthquakeData.forEach((data) => {
        let row = document.createElement('tr');
        row.innerHTML = `<td>${data.location}</td><td>${data.magnitude}</td><td>${data.timestamp}</td>`;
        tableBody.appendChild(row);
    });
}

// เรียกใช้ฟังก์ชันเพื่อแสดงข้อมูลแผ่นดินไหวในหน้า `earthquake.html`
if (window.location.pathname.includes('earthquake.html')) {
    displayEarthquakeData();
}


// อัปเดตข้อมูลทุก 1 วินาที
setInterval(updateDateTime, 10000);
setInterval(updateWeatherData, 10000); // อัปเดตข้อมูลอุณหภูมิและความดัน
setInterval(updateFakeEarthquake, 10000); // อัปเดตข้อมูลแผ่นดินไหว

// เรียกใช้งานครั้งแรก
updateDateTime();
updateWeatherData();
updateFakeEarthquake();
