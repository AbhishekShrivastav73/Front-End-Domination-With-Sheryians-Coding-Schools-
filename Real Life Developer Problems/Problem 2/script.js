let cardContainer = document.querySelector('#cardsContainer');
let btn = document.querySelector('button');


function addcard(){

fetch(`https://randomuser.me/api/`)
.then(raw => raw.json())
.then(res =>{
    console.log(res.results[0]);
    // Object Destructuing 
    let {name, email, picture, gender} =res.results[0];

    cardContainer.innerHTML +=`<div id="card" class="w-64 bg-zinc-800 p-3 rounded-xl">
    <div class="mb-2 imgs w-20 h-20 bg-zinc-600 rounded-lg overflow-hidden">
        <img src="${picture.large}" class="w-full h-full object-cover" alt="">
    </div>
    <h2 class="font-bold">${name.first}</h2>
    <h3 class="opacity-50 ">${gender}</h3>
    <h4 class="opacity-80 font-semibold ">${email}</h4>
    <p class="opacity-60" >Lorem ipsum dolor sit amet consectetur adipisicing elit. epellat consequatur non!</p>
</div>`
})
}

btn.addEventListener('click',function(){
    addcard()
})