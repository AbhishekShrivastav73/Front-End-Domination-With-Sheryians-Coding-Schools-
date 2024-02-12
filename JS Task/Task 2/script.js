//Create a page with two image and a btn, when btn is clicked swapp the source attribute of the img;


let img = document.querySelectorAll('img');
let btn = document.querySelector('button');

console.log(img[0].src);

btn.addEventListener('click',function(){
    let src1 = img[0].src
    let src2 = img[1].src

    img[0].src = src2;
    img[1].src = src1;
})