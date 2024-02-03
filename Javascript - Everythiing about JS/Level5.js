// Undefined is a value==
// ye value tb di jaati hai jb variables ko koi value na mili ho, iska mtlb hai, ye ek garbage value ki tarah treat ki jaati hai, aap isse default value bhi khe skte ho 

var a;
console.log(a);

// Not defined is an error
// jiski koi bhi existance hi na ho 
// console.log(vars);

// vars dont exist in the given code


// Null is a value
// this is the value which resolve like, Not found
// Null is received when some thing is not found  

// Array == Array ek data structure hai jo ek ya ek se zyda value ko rakhta hai 
// Syntax 
// let Arr = []

let chacha = ['abhishek','abhi','aman','prakher'];// isme kuch bhi daal do

// Access the values with Index number
// Index No starts with 0 

console.log(chacha[1]);
console.log(chacha[6]);// Iski value to pata hi nahi hai is liye Undefined aaega


// Loop with Array

for(let elem of chacha){
    console.log(elem)
}

let numbers = [1,2,3,4,5,6,7];

//forEach()
// syntax

// Array.forEach(function(val){      })


// Loop and do something which each element

let sum = 0;
numbers.forEach(element => {
    sum+=element
});
console.log(sum);

// Check if element exists 

chacha.forEach((val)=>{
    if(val== "abhishek"){
        console.log('Name exists in the List');
    }
})


// Object ek tareeka hai jisse ki hm ek identity ki details ko ek sath rkh skte hai

// Syntax

// var obj = { }

var obj2 = new Object();
console.log(typeof obj2);

let userDetails = {
    Name : "Abhishek",
    Age : 21,
    Skills : ['FrontEnd developer', 'UI/Ux', 'ReactJs'],
    availableForWork : true
}
console.log(userDetails);
console.log(userDetails.Skills);

// add an element to the object
userDetails.contact = 955659894;


console.log(userDetails);

// Synchronous And Asynchronous 

// Basics -------
//Synchronous code me code hamesha line by line chalta hai 
// Async code me line by line nahi chalta baalki, saara code ek sth chal jaata hai aur jo phle complete hogya uska answer dediya jaata hai 
