// Build a countdown timer that starts when a button is clicked and updates the display in realtime

let strBtn = document.querySelector('#start');
let stpBtn = document.querySelector('#stop');
let time = document.querySelector('h3');
let interval;

strBtn.addEventListener('click',function(){
    let count = 0;
    interval = setInterval(() => {
        time.textContent = count;
        count ++;        
    }, 1000);
})

stpBtn.addEventListener('click',function(){
    clearInterval(interval)
})