const mainContainer = document.querySelector("#main-container");
const timeZoneElement = document.createElement("p");
timeZoneElement.textContent = dayjs.tz.guess();
timeZoneElement.classList.add("time-zone");
mainContainer.appendChild(timeZoneElement);
