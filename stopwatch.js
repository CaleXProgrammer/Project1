let time = document.getElementById('time');

function clock(){
    let hours = new Date().getHours().toString().padStart(2, 0);
    let minutes = new Date().getMinutes().toString().padStart(2, 0);
    let seconds = new Date().getSeconds().toString().padStart(2, 0);
    
    let currentTime = `${hours}:${minutes}:${seconds}`;
    // console.log(currentTime);
    time.innerHTML = currentTime;
}
clock();
setInterval(clock, 1000);