let portlandBlock = document.querySelector("#portland");
let portlandDate = portlandBlock.querySelector(".date");
let portlandTime = document.querySelector("#portland-time");

let portlandCurrentTime = moment().tz("America/Vancouver");

portlandDate.innerHTML = portlandCurrentTime.format("MMMM Do YYYY");
portlandTime.innerHTML = portlandCurrentTime.format("h:mm:SS [<small>]A[</small>]");
