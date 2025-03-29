function updateDateTime() {
    let now = new Date();
    document.getElementById("datetime").innerText = "📅 " + now.toLocaleString("th-TH", { dateStyle: "full", timeStyle: "medium" });
}

function updateFakeEarthquake() {
    let locations = ["เชียงใหม่", "กรุงเทพฯ", "ภูเก็ต", "ขอนแก่น", "สงขลา"];
    let location = locations[Math.floor(Math.random() * locations.length)];
    let magnitude = (Math.random() * (6 - 3) + 3).toFixed(1);
    let timestamp = new Date().toLocaleString();

    let earthquakeData = JSON.parse(localStorage.getItem('earthquakeData')) || [];
    earthquakeData.push({ location, magnitude, timestamp });
    localStorage.setItem('earthquakeData', JSON.stringify(earthquakeData));

    document.getElementById("earthquake-location").innerText = location;
    document.getElementById("earthquake-magnitude").innerText = magnitude + " ริกเตอร์";
}

setInterval(updateDateTime, 10000);
setInterval(updateFakeEarthquake, 10000);

updateDateTime();
updateFakeEarthquake();
