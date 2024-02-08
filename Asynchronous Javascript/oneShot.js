// Asynchronous Javascript 

// aisa code jiska answer aane me thoda time lge aise code ko asynchronous Code khete hai 

// basically do stacks  hote hai jisme sync aur async code divide hojaate hai ---- 
// 1) Main Call Stack (Main Stack)
// 2) Callback Queue (Side Stack)

// Jitna bhi sync code hai woh jaega main stack me aur jitna async code hai vo jaega side stack me 

// phle pura main stack vle code execute honge uss k bad jb main stack khali hojaega tb ek ek kr k side stack vale main stack me aaenge aur execute honge 

// ab ye pata krne k liye ki main stack khali hua ki nhi, Ye kaam Event Loop ka hota hai, ye pata krta rheta hai ki main khali hua ki nhai aur jb main khali hojaata hai tb side stack se usse main me bhejta hai

// Ways to write Asynchronous Code ----------
    // -Set Timeout
    // -Set Interval
    // -Promises
    // -Axois
    // -Fetch API


// Set Timeout --------------- Iska code kuch der bad chalta hai

setTimeout(() => {
    console.log("Hey");
}, 2000);

//  Set Interval -------------Ye Kuch der bad chlega aur chlta rhega equal interval of period k

// setInterval(function(){
//     console.log("setIntervals");
// },2000)

// To Stop 

let Interval = setInterval(function(){
    console.log("setIntervals");
},2000)

setTimeout(()=>{
    clearInterval(Interval)
},10000)

// Fetch APi -- y kisi aur url par jaega aur vaha se data le ke aaega ya humara data usse k pass le k jaega
// Fetch Internet pr jaega aur vaha se data le k aaega , ab issme time lgega issliye by default hi isse async code banaya gaya hai, agr ye sync hota to iss k bad ka code tb tk nahi chalta jb tk iska data nhi aajata, pura code atak skta tha 

// .them  fetch k sth hi aata hai vo tb run hoga jb fetch se data aega
fetch('https://randomuser.me/api/')
.then(raw => raw.json())
.then(read => console.log(read.results))

//Axois - ye bhi vhi krta hai jo fetch krta hai ye bas thoda zyda developer friendly hai

axios.get(`https://randomuser.me/api/`)
.then(result=> console.log(result.data.results[0])) //direct dega in json format isko convert krne ki zarurat nahi pdegi

// Promise 
// kuch code socho mann me jo ki async code ho mtlb ki ye side stack me jaega aur bdme main stack me execute hoga
// ab jo async code h uska answer aa bhi skta hai aur nahi bhi aaskta hai 
// Promise kya hai aisa samjho ki aap promise k andar koi bhi asynccode likh do jo mann me AnimationEffect, aur promise apko ek parchi dedeta hai aur vo parchi par by default likha reheta hai waiting , parchi par do events hote h mainly ek event ka naam hai THEN aur durse ka naaam CATCH, Agar data aagya to parchi par Resonlved likh jaega aur THEN chlega agr data me dikkat aai to CATCH chlega aur waiting ki jagah rejected likh dega


// SYNTAX 
// new Promise(function(resolved,rejected){           })

// Condition --- jaa ke ek user laao agr woh male hua green btn ya to red btn 

let parchi = new Promise(function(resolve,rejected){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
        console.log(result.results[0].gender);
        if(result.results[0].gender === "male"){
            resolve()
        }else rejected();
    })
})

parchi
.then(function(){
    console.log('Green Btn');
})
.catch(function(){
    console.log('Red Btn =');
})

console.log(parchi);


//Callbacks 
// ye kuch khas nahi blki sirf ek function hota hai, bas thoda special jo hai woh ye hai vi isse pass kiya jaata hai kisi aur functio me as a argument, aur jb woh call kiye jaae tab uss callback function ko chaala paae 

// Callback is Higer order function and first class function

function abcd(a,b){
    b();
}

abcd(1,function(){
    console.log('callback chala');
})

//USe kaise kre Callbacks ko

// callback phli chiz to ek function hai , aap iss function me wo sab likh do jo aapko chalana ho jab answer aajae, isse tb chalo jb apka async code chal chuka ho 

// function doSomeAsyncTask(url,callBack){
//     fetch(url)
//     .then(raw => raw.json())
//     .then(ans => {
//         callBack()
//     })
// }

// doSomeAsyncTask('',function(){

// })


// TASK ---User ka data mangao aur jb data aajae to name, gender aur email ko print kro

function getData(url,callback){
    fetch(url)
    .then(raw=> raw.json())
    .then(ans=>{
        callback(ans)
    })
}

getData('https://randomuser.me/api/',function(result){
    console.log(result.results[0].gender, result.results[0].email, result.results[0].name.first);
})


// Async await 
// functiona banana zaruri hai , uss k andar jo amnn ae async code likh do ab jb async likhnge to bad vali line phle chal jaegi kyu woh side stack me hota hai , aur agli wali line async k basis par hui to woh fail hojaega wo islye kyu ki aap ka code depend karta hai async code par jo ki badme chalega sync code chalne k bad

// let a =fetch(``)
// console.log(a);  This will throw an error

// with async await aap async code bhi aise likh sskte ho jae aap sync code likh rhe ho 

async function a(){
    let ans = await fetch(`https://randomuser.me/api/`) //await ka mtlb ye hai ki jb tk iska answer na aae algi linemt chalo
    let mainAns = await ans.json();
    console.log(mainAns);
}


// Generators 

// iske use kr program k flow ko pause kr skte ho 
// ya execution ko pause kr skte ho and bol skte ho ki ab agla step kro aur fir aap agla step jb bhi chaiye woh kar skte ho 

// koi bhi normal function me agr hum star * lga denge to vo generator ban jaega 
// isme ek special keyword milta hai yeild 

// function* gene(){}

function* gen(){
    console.log('started');
    yield 1;//Ye ek type se rokne ka kaam krta hai ki vaha tk chalo
    console.log('Phela chala');
    yield 2;
    console.log('Dusra chala');
    yield 3;
}

let asn = gen()
asn.next() // ye bol rha ek step chlo
// aage k steps k liye next bolte jao woh shuru kr dega 

asn.next()
// usski value k liye issko bhi console kr lo 

console.log(asn.next().value);

// Web workers 
// usually humara pura code single thread pr chalta hai par kai bar kuch bde calculations perform karne pd jaate hai jiski wajah se main thread busy hojaata h ya kaafi loaded hojaata hai aur baaki kaam ki performance kam hojaati hai 
// iss situation ko ache tareeke se handle krne k liye we use web workers , hum chahe to koi task web workers ko bhj skte hai woh usse dusre thread par perform krega and aapka main thread efficiently baaki chezzeon ko handle kr paega


// Thread aisa samjho ek computational task ko perform krne k liye ek thread alloted rheta hai 


// aap apni main js file se data bhej skte ho and worker file pr accept kroge aur jo perform krna hai kroge aur fhir data vapas main file me bhjoge and main file me vapas accept kroge

