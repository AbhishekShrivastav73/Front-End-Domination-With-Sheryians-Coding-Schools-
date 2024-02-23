function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#wrapper"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#wrapper" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#wrapper", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}


function textEffect(){
    let h1s = document.querySelectorAll('section h1')
    h1s.forEach(function(elem){
        let text = elem.textContent
        let splittedText = text.split('')
        let clutter = ''
        
        splittedText.forEach(function(e){
            clutter += `<span>${e}</span>`
        })
        
        elem.innerHTML = clutter
    })


    gsap.to('section h1 span',{
        color : '#E3E3C4',
        stagger : 0.2,
        scrollTrigger : {
            trigger : 'section h1',
            scroller : '#wrapper',
            start : 'top 50%',
            end : 'top 10%',
            scrub : 5,
        }
    })
}

function gsapAnimation(){
    let tl = gsap.timeline()
    tl.from('.overlay nav h1',{
        opacity : 0,
        top : 70,
        scale : 1.5,
        delay :0.5,
        duration :0.8,
    })
    tl.from('main img',{
        width : "40%",
        height : "40vh",
        duration :1,
        borderRadius : 20,
    })
    tl.from('.overlay nav i, .overlay nav div',{
        opacity : 0,
        top : 50,
    })

   
}






locoScroll()
gsapAnimation()
textEffect()