//Functions

// Functions are the block of code which executed when it is called 
// js me functions baaki programming languages se alg hai, mtlb issme hmko functions banane k liye type nahi btna pdta hai, bas function keyword likhna hota hai 

//Syntax of Functions
// function abcd(~param){
  // Param ho bhi skta hai aur nhi bhi   
// }


function number(){
    for(let i=0; i<11;i++)
    console.log('hello');
  }
  
  number();// Calling the function
  
  // HappyBirthday
  let birthDate = 7;
  let todaysDate = 7;
  
  function HappyBirthday(){
    console.log('Happy Birthday');
  }
  
  if(birthDate == todaysDate){
    HappyBirthday()
  }

//   Extras we should know---
// arguments and parameter
// Agrguments-- Real value jo hum dete hai functions chlate waqt
// Parameter -- Varibles jinme agrument ki value store hoti hai 

function a(Parameter){
    console.log(Parameter);
}
a("Agruments")


// Prep for interview  ---- 

//Function Statement 

// function a(){
    //statement
// }

// Function Expression 

// var a = function(){
//   //expression
// }

// Anonymous functions

// function(){

// }


// FAT ARROW FUNCTIONS 

// Basic fat arrow function

// let a =()=>{
//   console.log(' Fat arroe functions ');
// }

// Fat arrow with one parameter

let ab = param =>{
  console.log(param);
}
ab('abhishek')

//Return
// jaha pr bhi return lagega uske aage ki jo bhi chiz hogi vo jaaegi jaha pr function call horha hai, return functions k andar use krte hai     

function abcde(){
  return 'abhi';
}

console.log(abcde());