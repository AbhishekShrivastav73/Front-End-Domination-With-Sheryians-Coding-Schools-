// Display a progess bar that updates in real time, showing the progress of a task, download or form submition

let prg = document.querySelector('#progress')
let count = 0;

let int = setInterval(function(){
    if(count == 100){
        clearInterval(int)
    }
    count++;
    prg.style.width = count + '%';
},50)