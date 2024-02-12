// Create a html page with a btn, when btn is clicked change the text of paragraph element


let btn = document.querySelector('button');
let p = document.querySelector('p')
btn.addEventListener('click',function(){
    p.textContent = "Hello! World"
})  