// DIFFERENCE BETWEEN VARIABLES AND CONST------
// har progamming language me data se deal krna hota hai, woh alg alg prkar ka data hoskta hai, aisa data jisse humein deal krna hai usse save to krna pdega, to usse save krne k liye humein saving space(RAM) chaiye jaha par data save ho jaae and save krne k liye unhe kuch naam bhi dena pdega and issi liye humein VARIABLES AND CONSTANTS  banane pdte taakki data save hojae aur uska naam bhhi dete hai taaki badme ussko access bhi kar skte hai

// saving-space --- RAM 
// html,css and Js teeno browser par chalti hai, aur browser khud nahi chlta woh RAM par chalta hai, isslye jab hum js file me kuch save krne ko khete hai to vo browser ko batata hai aur woh browser usse RAM par save kr deta hai 

// CONCLUSION ----
// variables ek container hai jisme hum data save kr skte hai and variables me data store hota hai change bhi hojaata hai but constants me data change nahi hota aur dono hi browser per memory lete hai aur browser RAM par chalte hai ya fhir usspe space lete hai

var a = 22;
const userName = "abhishek"
 
userName = "Abhi"

console.log(a)

// Js language english language use krte hai aur computers english nahi samjhte hai, woh samjhte hai 0 or 1 jisko hm current flow(1)(andar ho k gye) aur current-bypass(0)(bahar se chala gya) bhi khe skte hai and hum chahte hai hm english me likh k computer se baat kr le isslye hm ek translator lgyange jo humre code english me lega aur usse 0 aur 1 me convert kr deta

// JIT Compiler - Interpreter  ki suruwaat ki taakat aur compiler ki bad ki taakat ko use krta hai fast processing k liye 

// Conclusion - Compilers and interpreters both are the translator which converts our English code into a machine code,  the compilers converts the English code into the machine code which requires a more conversion time but it runs really fast as it is directly converted into machine code on the other hand interpreters converts our English code into the byte code which the conversion time is very less but it is further converted into machine code while running therefore the interpret runs little bit slower than that of compilers, so in order to solve this problem JIT( just in time) compilers are used by various browsers they use the capabilities of compilers of running faster code and the capabilities of an interpreter of converting the English code into bytecode in the more faster way to improve the performance.


// Window -- 
// there are many features which are frequently used but they are not part of JS, because they are the part of JS the language but they are available in the browser and when we use them , they are called or used from the browser and Not the JS

// window ek bucket samjh lo jisme woh saari cheezion available hai jo browser humme deta hai use krne k liye kyun woh saari chizzein js ka part nahi hai balki browser ka part hai which is available to use with JS, we can also say that they are provided by browser to use in JS, all these features which are made available via browser are put inside the window      
