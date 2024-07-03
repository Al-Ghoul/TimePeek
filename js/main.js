const mainContainer = document.querySelector("#main-container");
const timeZoneContainer = document.createElement("div");
timeZoneContainer.classList.add("time-zone-container");
const timeZoneElement = document.createElement("p");
timeZoneElement.textContent = dayjs.tz.guess();
timeZoneElement.classList.add("time-zone");
timeZoneContainer.appendChild(timeZoneElement);
const editIconSVG = `<?xml version="1.0" ?><svg class="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`;
timeZoneContainer.innerHTML += editIconSVG;
timeZoneContainer.addEventListener("click", () => {
  MicroModal.show("modal-1");
});
mainContainer.appendChild(timeZoneContainer);

const currentTime = document.createElement("p");
currentTime.classList.add("current-time");
currentTime.textContent = dayjs().format("HH:mm:ss");
mainContainer.appendChild(currentTime);

const currentDate = document.createElement("p");
currentDate.classList.add("current-date");
currentDate.textContent = dayjs().format("dddd, D MMMM, YYYY");
mainContainer.appendChild(currentDate);

const modalContentContainer = document.querySelector("#modal-1-content");
const timeZoneSelection = document.createElement("select");
timeZoneSelection.classList.add("time-zone-selection");
timeZoneSelection.id = "time-zone-selection";
for (const timeZone of Intl.supportedValuesOf("timeZone")) {
  const option = document.createElement("option");
  option.value = timeZone;
  option.textContent = timeZone;
  timeZoneSelection.appendChild(option);
}
timeZoneSelection.value = dayjs.tz.guess();
const timeZoneApplyButton = document.querySelector("#time-zone-apply");
timeZoneApplyButton.addEventListener("click", () => {
  const selectedTimeZone = timeZoneSelection.value;
  const currentTime = document.querySelector(".current-time");
  const timeZoneElement = document.querySelector(".time-zone");
  const currentDate = document.querySelector(".current-date");
  timeZoneElement.textContent = selectedTimeZone;
  currentTime.textContent = dayjs().tz(selectedTimeZone).format("HH:mm:ss");
  currentDate.textContent = dayjs().tz(selectedTimeZone).format("dddd, D MMMM, YYYY");
  MicroModal.close("modal-1");
});
modalContentContainer.appendChild(timeZoneSelection);
