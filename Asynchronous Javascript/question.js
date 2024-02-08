// Callback vs Promises vs async/await 

//Ek url se data le k aao aur usse console par show kro via callback 
// callback 

function dataFetcher(url,callback){
    fetch(url)
    .then(raw=> raw.json())
    .then(res => {
        callback(res)
    })
}

dataFetcher(`https://randomuser.me/api/`,function(res){
    console.log(res.results[0]);
})

// Same With Promises 

let parchi = new Promise(function(res,rej){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(ress=>{
        res(ress)
    })
})

parchi
.then(function(ress){
    console.log(ress);
})
.catch(function(){
    console.log('error');
})

// Same with async await

async function data(){
    let raw = await fetch(`https://randomuser.me/api/`);
    let ans = await raw.json();
    console.log(ans.results);
}

data();

// print 1 - 10 with generators 

function* allNum(){
    for(let i =1 ; i<11;i++){
        yield i;
    }
}

let num = allNum();
 console.log(num.next().value);
 console.log(num.next().value);
 console.log(num.next().value);
 console.log(num.next().value);

//  Print Prime number and give answer if it asked for next number 

function* primeNum(nums){
    for(let i=1;i<=nums;i++){
        if(i==1){
            yield i;
        }else if(i>1){
            for(let n = 2;n<nums;n++){
                if(i%n==0){
                    continue;
                }else{
                    yield i;
                }
            }
        }
    }
}
let pNUm = primeNum(20)
console.log(pNUm.next().value);
console.log(pNUm.next().value);
console.log(pNUm.next().value);
console.log(pNUm.next().value);