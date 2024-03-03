// Array ek aisa data Structure hai jo ek se zyda elements ko rakh skta hai
//Immutable and Mutable


// Spread Operators 
let arr  = [1,2,3,4,5,6,7,8,9,10,12];
let arr2 = [...arr]
console.log(arr2);



// jaise issme refernce data type me directly copy nahi kr skte hai 
// Vaise ReactJS me hume STATE naam ki chizz milegi jisko hm mutate nahi kr skte hai  mtlb ki directly value change nahi kr skte hai ya jod skte hai  

// To main yahi padhna hai ki state ko immutable way me kaise update krnge - mtlb directly change nahi krnge kuch alg way me krnge
// State ki current value nahi change krnge bas new value assign kr skte hai puri ki puri 

// Immutable -- Cant be changed 
// mutable -- can change 

// State ki value kuch bhi hoskti hai --Number array object etc

let state = {
    name : 'abhishek',
    age : 21
};

let copy = {...state}
copy.name = 'abhi'

state = copy // Assigning value of copy in the state

// Ab isko js me directly kr skte hai state.name ka use kr k but react state ko directly update nahi krne deta hai isslye ye treeka use kr skte hai 

// DESTRUCTURING.............................

let {age,name} = state
console.log(age);
console.log(name);


// destructure the array  

let [first , second,,chacha] = arr
//Removes element index wise

console.log(first);

// but agr fourth eleem nikalna hai to 
console.log(chacha);

// import and Export 

// hum log component bnaate hai, component mtlb page ka hissa i.e, navbar , sidebar, cart, landing page, Second Page ab dikkat ye aati hai harr hissa alg alg component hai aur components ko hm alg alg file me rakhte hai, to inko last me jodna bhi pdata hai to jodne k liye lgta hai IMPORT AND EXPORT 

// COMPONENT EK FUNCTION HOTE HAI 


// METHOD 1


// function cart(){
//     // code 
// }

// export default cart;   iise sirf ek hi chiz export hoskti hai

// import cart from ./location.js


// EK FILE SE KAI SAARI CHIZZO KO EXPORT KRNE K LIYE 

export function navbar(){}
export function header(){}



// Arrow FUnction with Implicit return 

const abcd =()=> 'abhishek'; //Returns name
// But what if we want to return Object

const newObj =()=>({
    name : 'abhishek',
    age : 21
})
console.log(newObj());


// Map and filter

// Map ka mtlb kisi array par kuch kro aur ek naye array me rkh do...
// Map saare elements par run krega

let returnedArr = arr.map(val => val*2)
console.log(returnedArr);


let newArr = arr.map(elem => elem>5 ? elem+5 : elem)
console.log(newArr);


// Map aur Filter me ek hi farak hai,map saare bande lauta hai mtlb count kam nahi hoga, FIlter bando ko kam kr skta hai 

let Arrays = [1,2,3,4,5,6,7,8,9,0,12];

let five = Arrays.filter(elem => elem>5)
console.log(five);

let product = [
    {name :"iphone", price : 122200},
    {name :"samsung", price : 18800},
    {name :"Redmi", price : 8000}
]


let filteredProduct = product.filter(elem => elem.price<20000)

console.log(filteredProduct);