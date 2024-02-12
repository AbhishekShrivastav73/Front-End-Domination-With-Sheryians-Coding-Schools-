// Usse(selection ) ye krdo(change) ye hone par(event) 

// Selction ---

// // Ways of Selection 

// document.getElementById()
// document.getElementsByClassName()
// document.getElementsByTagName()

// BEST METHOD -- 

// document.querySelector()
// document.querySelectorAll

// Modifying Element 
let h1s = document.querySelector('.heading')
h1s.textContent += " - Hello World"




//Manipulating Styles and Classes

// use Camel Case in applying style 

h1s.style.color = 'cyan'
h1s.style.fontFamily = 'serif'


// adding class to element 

let body = document.querySelector('body');

body.classList.add('dark')

//Removing a class

body.classList.remove('dark')

// Addding Elemnt in any parent element

let h6 = document.createElement('h6');
h6.textContent = "This element is created by Javascript"

body.appendChild(h6)

let img = document.createElement('img')
img.src = 'https://images.unsplash.com/photo-1532779952550-b8fc9200ed8c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'


body.appendChild(img)

body.removeChild(img)

//Event Handling

// addEventListener()

// jb bhi aap kisi element par kisi bhi prakar ka koi action krte ho to vaha par event automatically raise hota hai , agr apne koi event listner nahi banaya hai to usee ignore kr dega agr bnya to vo event ignore nahi kiya jaega balki uska listener chlgea

// Element.addEventListener(event,callback )

let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    setTimeout(()=>{
        btn.textContent = "Starting ... "
    },2000)
    setTimeout(()=>{
        btn.textContent = 'Downloaded'
    },4000)
})

// more event _
// dblclick
//mouseover -- uske upr mouse jaega tb
//mouseleave -- jb mouse chala jaae 


// event Object 

body.addEventListener('mousemove',function(dets){
    console.log(dets.x);
    console.log(dets.y);
})