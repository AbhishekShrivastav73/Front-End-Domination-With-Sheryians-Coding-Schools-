// Create a form with input fields and a submit btn. use javascript to validate the form and display an error message if the input feild is invalid--

// jab bhi forms k sth deal kro yaad rkho submit hone par forms page ko reload kr dete hai aur tmhe khayal rkhana hai ki pages reload na ho agr page reload hua to js nahi chlegi kyu js chal pae usse phle hi page reload hojaega 


// form ko submit krne pr rkne k liye 

let form = document.querySelector('form');
let inputs = document.querySelectorAll('input[type="text"]')
let errors = document.querySelector('span');

form.addEventListener('submit',function(eve){
    eve.preventDefault();
    for(let i =0;i<inputs.length;i++){
        if(inputs[i].value == ''){
            errors.textContent = 'Some feilds are empty!'
            errors.style.color = 'red'
            break;
        }
    }
})
