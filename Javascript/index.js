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


showCurrentTime();
setInterval(showCurrentTime, 1000);

