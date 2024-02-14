// Create a tabbed interface where clicking on tabs displays different content section without page reload

let parent = document.querySelector('.parent');
let content = document.querySelector('.content');
let h1 =document.createElement('h1')
let p =document.createElement('pre')



parent.addEventListener('click',function(elem){
    console.log(elem.target.id);
    content.appendChild(h1);
    content.appendChild(p);
    if(elem.target.id == 'intro'){
        
        h1.textContent = 'Introduction';
        p.textContent = `JavaScript is the world's most popular programming language.
JavaScript is the programming language of the Web.
JavaScript is easy to learn.
This tutorial will teach you JavaScript from basic to advanced.`
    }else if(elem.target.id == 'basic'){
        h1.textContent = 'Overview of JS'
        p.textContent = `JavaScript is a versatile and widely-used programming language primarily
used for creating dynamic and interactive web content. It enables developers 
to add interactivity and behavior to web pages, responding to user actions such 
as clicks, mouse movements, and keyboard inputs. JavaScript syntax is similar to other
programming languages like Java and C, employing variables, loops,`
    }else{
        h1.textContent = 'Extras'
        p.textContent = "This is an additional part"
    }

})