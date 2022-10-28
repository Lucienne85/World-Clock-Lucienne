let portlandBlock = document.querySelector("#portland");
let portlandDate = portlandBlock.querySelector(".date");
let portlandTime = document.querySelector("#portland-time");

let amsterdamBlock = document.querySelector("#amsterdam");
let amsterdamDate = amsterdamBlock.querySelector(".date");
let amsterdamTime = document.querySelector("#amsterdam-time");


function showCurrentTime() {
let portlandCurrentTime = moment().tz("America/Vancouver");
let amsterdamCurrentTime = moment().tz("Europe/Amsterdam");

portlandDate.innerHTML = portlandCurrentTime.format("MMMM Do YYYY");
portlandTime.innerHTML = portlandCurrentTime.format("h:mm:ss [<small>]A[</small>]");

amsterdamDate.innerHTML = amsterdamCurrentTime.format("MMMM Do YYYY");
amsterdamTime.innerHTML = amsterdamCurrentTime.format("h:mm:ss [<small>]A[</small>]");
}

function updateCityTime(event) {
let chosenCity = event.target.value;
if (chosenCity.length > 0){

let chosenCityName = chosenCity.replace("_", " ").split("/")[1];
let chosenCityTime = moment().tz(chosenCity);
let cityTimeElement = document.querySelector("#city-time-element");

cityTimeElement.innerHTML = `
<div class="city">
        <div class="defaultCity">
            <div class="cityNameDate">
                <h2 class="cityName">${chosenCityName}</h2>
                <div class="date">${chosenCityTime.format("MMMM Do YYYY")}</div>
            </div>
        </div>
        <div class="time">${chosenCityTime.format("h:mm:ss")} <small>${chosenCityTime.format("A")}</small></div>
    </div>
`
}
}


showCurrentTime();
setInterval(showCurrentTime, 1000);

let citySelector = document.querySelector("#citySelect");
citySelector.addEventListener('change', updateCityTime);