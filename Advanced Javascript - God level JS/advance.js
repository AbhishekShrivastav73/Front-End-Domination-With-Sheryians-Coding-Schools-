// this call apply bind

//Keyword ka mtlb hota hai aisa word jiska koi  mtlb ho programming language me 

//This Keyword---------
// this keyword js me most suspenseful keyword hai 

//this ki value bar bar badal skti hai alg alg conditions me, saari conditions ko sikh jaao to this ko samjh jaenge 

// Global scope 
// Global scope mtlb kisi bhi braces k andar code na hona

console.log(this); // Window

// in Function 
(function(){
    console.log(this);
})()

// In method - Object 

// method-- Object k andar jab koi function h usko method bolte hai 

let obj = {
    name : 'Lucifer',
    default : function(){
        console.log(this); // Returns object
    }
}

obj.default();

let obj2 = {
    title : {
        age :22,
        head : function(){
            console.log(this); // Returns the object jisme woh bana hai
        }
    }
}

obj2.title.head();

// Function inside method (es5)

let user = {
    sayName : function(){
        console.log(this); // Ye object return kr rha hai 
        function childFnc(){
            console.log(this); // ye window return kr rha hai, to isse koi object ki value nahi access kr skte hai
        }

        childFnc()
    }
}

user.sayName() // Returns Window

// functions inside method (es6) - object
// es6 function == arrow function 

let userDetails = {
    name : function(){
        let child =()=>{
            console.log(this); //returns object
        }

        child()
    }
}
userDetails.name()

// Contructor Function -- Basic -- 
// jis function ko new keyword ka use kr k call krte hai aur uski value dekhenge to woh ek blank object return krega 

function abcd(){
    console.log(this); // Global scope hai to isse Window return krna chaiye tha 
}

let ans = new abcd(); // new keyword ka use hua hai to ek blank object return hoga to this ussi ko refer krega 


// Value of this in event listener 

document.querySelector('button').addEventListener('click',function(){
    console.log(this);// issme this refer krega uss element ko jisko select kr rakha hai
    this.style.backgroundColor = "cyan"
    this.style.color = "white"
})

// Call, Apply and Bind 

// Ye teeno tareeke hai functions ko call krne ke kisi object ko this maan kr 

function qwerty(a,b,c){
    console.log(this,a,b,c); // By default iski value window return hogi
}
 // Par hum chahte hai ki this window nahi return ya refer kre balki kisi object ko return kre ussme iska use hota hai 

 let object = {
    name : "abhishek"
 }
// Normally function ko call nahi kiya balki , function k naam k aage .call lgya aur targeted object brackets me likh diya 
 qwerty.call(object)
//  Giving arguments 
 qwerty.call(object,1,2,3)

// Apply --- Similar hai call se but have some minor changes 

// agr function me koi parameter dena hai to issme hm de skte hai in form of array

// Syntax 
// qwerty.apply(this,arguments )

qwerty.apply(object,[1,2,3])

//Bind ---------

// bind bhi bilkul call ki tarah hai , par iska answer turant nahi milta balki, bind function ko chalata hi nahi ye apko ek aur funtion return kr k deta hai return kr k jiko hm badme chala skte hai ya bdme call kr kr skte hai 

let badmeChalneKliye = qwerty.bind(object,1,2.3,3);

badmeChalneKliye();


//Prototypal Inheritence

// Hum Object create karte hai and kisi ek parent constructor function ke prototype me kuch add kar dete hai and jb bhi add hota hai to wo parent se banne vle sabhi children instances ko wo properties jo parent ko prototype me di gai thi woh milti hai saugaat me 

// function makeHuman(naam, ages){
//     this.name = naam;
//     this.age = ages;
//     this.printMyName = function(){
//         console.log(this.name);//iss samay ye do objects k liye do alg alg memory le rhe honge, hum isko bacha sakte hai prototypal inheritance se
//     }
// }


function makeHuman(naam, ages){
    this.name = naam;
    this.age = ages;
    
}
//hum koi bhi ibject banate h vo prototype ban jaata hai
// prototype  me bhot si helper properties and methods hote h jo hum use kr skte hai apne kaam pura krne k liye
// iske prototype me add kr do 

//Added chacha to prototype of the makeHuman object
makeHuman.prototype.chacha = 12;

makeHuman.prototype.printMyName = function(){
    console.log(this.name);
}


const human1 = new makeHuman('abhi',21);
const human2 = new makeHuman('abhishek',21);

console.log(human1.printMyName());

// aisa koi bhi function jisme aap this ka use kr rhe ho aur us function ko call krte waqt aap new ka use krte h to new ka mtlb vaha par ek blank object hojaata hai 

//Closures --
// ek aisa function jo ek dusre function ko return krta hai aur use krta hai kisi parent function k variable ko 

function abcde(){
    let a = 12;
    return function(){
        console.log(a);
    }
}

let ans2 = abcde();
ans2()


// Event Delegation 

// jab aap ek event listener se kai saare different Element ke event ko handle kar sake 

//Event Listener ko parent par lagaao and usko id, class ya tag ke basis par differnetiate krke different task krao 

// document.querySelector('#parent').addEventListener('click',function(){
//     console.log('parent'); //Issme event parent par lga h naki uske child par, but jb child pr click krnge to vo apne parent me koi event dhundhne lg jaega...isko Event Bubbling khete hai
// })

document.querySelector('#parent').addEventListener('click',function(chacha){
    console.log(chacha); //Gives details about the Event
    console.log(chacha.target); //Gives details about the Element Clicked
    console.log(chacha.target.id);

    if(chacha.target.id == 'play'){
        console.log('Play song');
    }else if(chacha.target.id == 'pause'){
        console.log('pause Song');
    }
})

// Higher Order Function 

// aisa koi bhi function jo ek function ko le rha hai as a argument ya return kre ek function ko 

function abs(){
    return function(){
        
    }
}

// error Handling

function div(a,b){
    try{

        if(b==0){
            throw Error('KOi gadbad hui');
        }
        console.log(a/b);
    } 
    catch(err){
        console.error(err);
    }
}
div(12,0)

// Custom Events 
// Hm apni marzi ka koi event bana sakte hai 

// Steps to create a custome Event 
// 1. Make a event as an variable by using event constuctor 
// 2. Attach to DOM Element
// 3. dispatch that event from that DOM element in which you attached the event

const evt = new Event('chacha');

let btn = document.querySelector('#btn');

btn.addEventListener('chacha',function(){
    console.log('Chacha vala event run hogya');
})

// to Run event 
 
btn.dispatchEvent(evt)