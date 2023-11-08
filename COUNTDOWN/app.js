// Add JavaScript code here
const days_listen = document.getElementById("day");
const day = new Date();

const dayss=[0,'Monday,','Tuesday,','Wednesday,','Thursday,','Friday,','Saturday,','Sunday,']
days_listen.innerHTML = dayss[day.getDay()];

const date = document.getElementById("Date");
date.innerHTML = day.getDate();


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const month = document.getElementById("month");
month.innerHTML = monthNames[day.getMonth()];


const year = document.getElementById("year");
year.innerHTML = day.getFullYear();

function updateDate() {
  const day = new Date();
  const noDays = document.getElementById("no_days");
  const timing = 29 - day.getDate();
  noDays.innerHTML = timing;


  const noHours = document.getElementById('no_hours');
  noHours.innerHTML =day.getHours();

  const noMinutes = document.getElementById("no_min");
  noMinutes.innerHTML = day.getMinutes();

  const noSecond = document.getElementById("no_second");
  noSecond.innerHTML =  day.getSeconds();
}
setInterval(updateDate, 1000);