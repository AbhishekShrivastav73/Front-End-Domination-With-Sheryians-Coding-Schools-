// Create a Unordered list, allow users to add and remove list item dynamically
let parent = document.querySelector('.parent');
let addBtn = document.querySelector('#add')
let delBtn = document.querySelector('#del')
let list = document.querySelector('ul')
let input = document.querySelector('input')
let li;
parent.addEventListener('click',function(e){
    console.log(e.target.id);
    if(e.target.id == 'add'){
        li = document.createElement('li');
        li.textContent = input.value;
        list.appendChild(li);
        input.value = ''
    }else{
        list.removeChild(list.lastElementChild)
    }
})