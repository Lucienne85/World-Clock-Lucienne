let portlandBlock = document.querySelector("#portland");
let portlandDate = portlandBlock.querySelector(".date");
let portlandTime = document.querySelector("#portland-time");

function showCurrentTime() {
let portlandCurrentTime = moment().tz("America/Vancouver");

portlandDate.innerHTML = portlandCurrentTime.format("MMMM Do YYYY");
portlandTime.innerHTML = portlandCurrentTime.format("h:mm:ss [<small>]A[</small>]");
}

showCurrentTime();
setInterval(showCurrentTime, 1000);

