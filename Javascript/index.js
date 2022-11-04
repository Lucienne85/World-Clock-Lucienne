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
determineCityTime();
setInterval(determineCityTime, 1000);

function determineCityTime(){
let chosenCity = event.target.value;
if (event.target.value === "current") {
    chosenCity = moment.tz.guess();
    document.getElementById("container").className = "currentChosen container"
}

if (chosenCity.length > 0){
let chosenCityName = chosenCity.replace("_", " ").split("/")[1];
let chosenCityTime = moment().tz(chosenCity);
let cityTimeElement = document.querySelector("#city-time-element");
let backElement = document.querySelector("#back-button-space");

if(event.target.value === "America/Lima") {
    chosenCityName = "Cuzco"
}

backElement.innerHTML = `<div class="backToOverview">
<a href="/" class="backButton">Back to overview</a>
<div>`

cityTimeElement.innerHTML = `
<div class="selectedCity">
    <div class="defaultCity">
        <div class="cityNameDate">
            <h2 class="cityName">${chosenCityName}</h2>
            <div class="date">${chosenCityTime.format("MMMM Do YYYY")}</div>
        </div>
    </div>
    <div class="time">${chosenCityTime.format("h:mm:ss")} <small>${chosenCityTime.format("A")}</small></div>
</div>`
}
}

document.getElementById("body").classList.add('bodyChosen')
document.getElementById("city-select").classList.add('selectChosen')

if(event.target.value === "Asia/Taipei") {
    document.getElementById("container").className ="taipeiChosen container";
}

if(event.target.value === "America/Lima") {
    document.getElementById("container").className = "cuzcoChosen container"
}

if(event.target.value === "Europe/Oslo") {
    document.getElementById("container").className = "osloChosen container"
}

if(event.target.value === "Australia/Sydney") {
    document.getElementById("container").className = "sydneyChosen container"
}

if(event.target.value === "Africa/Kigali") {
    document.getElementById("container").className = "kigaliChosen container"
}
}


showCurrentTime();
setInterval(showCurrentTime, 1000);

let citySelector = document.querySelector("#city-select");
citySelector.addEventListener('change', updateCityTime);