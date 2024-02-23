

gsap.to('#page1 #circle',{
    scale : 2,
    duration : 1,
    rotate : 360,
    delay :1
})
gsap.to('#page2 #circle',{
    scale : 2,
    duration : 1,
    rotate : 360,
    // delay :1,
    scrollTrigger : {
        trigger : '#page2 #circle',
        scroller : 'body',
        markers : true ,
        scrub : 4,
        start : 'top 60%',
        end : 'top 30%'
    }
})
