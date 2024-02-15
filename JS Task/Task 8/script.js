let personContainer = document.querySelector('.personsContainer')
let input = document.querySelector('input')
let data = [
    {name : 'abhishek', src : 'https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'abhi', src : 'https://images.unsplash.com/photo-1681510477644-ba103d54fc75?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'aman', src : 'https://images.unsplash.com/photo-1697653489143-a07cf494e7b0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'prakhar', src : 'https://images.unsplash.com/photo-1674704740369-a225682dcd70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'},
    {name : 'shruti', src : 'https://images.unsplash.com/photo-1611601322175-ef8ec8c85f01?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
];
let per ='';
data.forEach((elem)=>{
    per += `<div class="person">
    <img src="${elem.src}" alt="">
    <h4>${elem.name}</h4>
    </div>`

})

personContainer.innerHTML = per

input.addEventListener('input',function(){
    let matching = data.filter((e)=>{
        return e.name.startsWith(input.value)
    });
    let newUsers = '';
    matching.forEach((e)=>{
        newUsers += `<div class="person">
    <img src="${e.src}" alt="">
    <h4>${e.name}</h4>
    </div>`
    })

    personContainer.innerHTML = newUsers

})