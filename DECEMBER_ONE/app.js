// Add JavaScript code here
const get_days = document.getElementById('days');
const get_hours = document.getElementById('hours');
const get_minutes = document.getElementById('minutes');
const get_seconds = document.getElementById('seconds');

console.log(get_days);



function updateTime() {

    const get_time = new Date();
    const no_days = get_time.getDay()+21  ;

    const no_hours = get_time.getHours();

    const no_minutes = get_time.getMinutes();

    const no_seconds = get_time.getSeconds();


    get_days.innerHTML = no_days;
    get_hours.innerHTML = no_hours;
    get_minutes.innerHTML = no_minutes;
    get_seconds.innerHTML = no_seconds;


}

setInterval(updateTime,1000);