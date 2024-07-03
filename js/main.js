const mainContainer = document.querySelector("#main-container");
const timeZoneElement = document.createElement("p");
timeZoneElement.textContent = dayjs.tz.guess();
timeZoneElement.classList.add("time-zone");
mainContainer.appendChild(timeZoneElement);

const currentTime = document.createElement("p");
currentTime.classList.add("current-time");
currentTime.textContent = dayjs().format("HH:mm:ss");
mainContainer.appendChild(currentTime);

