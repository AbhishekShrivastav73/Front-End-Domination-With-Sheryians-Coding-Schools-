//DATA TYPES---
// data bhot alg alg type k hone hai 
// Data type data ka roop hai

// abhishek = string
// 12 = integer 
// 12.3 = float 
// true or false = boolean 
// a = Character 

// There are two types Data----1) Primitive DT 2) Refrence DT 
// saare brackets wale refrence DT hote hai-- (),{},[], finctions()
// rest are primitive-- int , boolean , string, null, undefined
 var a= 12;
 var b = a + 2; // issme changes sirf b me hua kyun ki ye refrence nahi generate kiya
 console.log(a);
 console.log(b);

// Refrence data type 
// refrence kabhi bhi copy nhi krta woh bas refrence bana deta hai 
// copy krne k liye spread operator ka use kr skte hai

 var arr = [1,2,3,4,5,6];
 var arr2 = arr;
 var copyArr = [...arr] // issne copy bna di ab koi bhi change issme krunga woh usme change nahi hoga
 copyArr.shift()
 console.log(arr);
 console.log(copyArr);

 arr2.pop() // hataya arr2 me se par changes arr me bhi hogye ..yhi frk hai primitive and refrence data type me

  console.log(arr2)
  console.log(arr)

//   CONDITIONALS 

// There are three types of conditionals --
// 1) if else statement
// 2) ternary operator
// 3) switch case 

// jab bhi apko program me decision lena ho ki aage ka execution kaisa ho to waha par if else else if ka use hota hai 

var age = 18;

// if me hamesha true aur false aata hoga---agr true hoga to run hoga varna nahi hoga
// koi bhi value jo true aur false me convert hoksti hai uska use kr skte hai conditionals me

if(age>18){ // agr ye condition true hui to ye chalega varna else vala statement chal jaega 
  console.log('You are an Adult');
}else{
  console.log('You are not an Adult');
}

// agr sirf ek line ka code hai to ek line me likh skte hai 
if(12<15) console.log("12 is smaller than 15")
// Truthy and falsy Values
// truthy values --true me convert hojaega 
// falsy value -- false me convert hojaega 

// Falsy== 0, false , ' ', " ", undefined,  NaN, document.all, null 
// rest all are truthy values


// if else ya else if me se koi ek hi run krega jb uski condition true hogi 
// hoskta hai saari conditions sahi ho...par run sabse top vala hi hoga 
// Example ---- issme first vala hi run kr jaega aage chalega hi nahi 
if(10<12){
  console.log('first');
}else if(10<15){
  console.log('second')
}else{
  console.log('third');
}

// Loops == repeat
// 1. for------impt
// 2. while 
// 3. do-while 
// 4. for-each--------impt 
// 5. forin 
// 6. forof 

// Syntax of for Loop 
// for(start; end; change){

// }
// Numbers from 1 to 10
for(var i=1; i<11; i++){
  console.log(i);
}
// Number from 25-50 
for(let num = 25; num<=50; num++){
  console.log(num);
}
// Number 35-40
for(let a= 35; a<=40; a++){
  console.log(a);
}
// Number 20-5
for(let a = 20; a>=5; a--){
  console.log(a);
}
// Number 5-1
for(let a = 5; a>=1;a--){
  console.log(a);
}

// While Loop
// Start;
//  while(end){
//   change;
//  }

// Number 1-10
let numm = 1;
while(numm<=10){
  numm++;
  console.log(numm);
}
// Number 32-45
var i = 32;
while(i<46){
  i++;
  console.log(i);
}
// Number 20- 1
var i= 20;
while(i>=1){
  i--;
  console.log(i);
}