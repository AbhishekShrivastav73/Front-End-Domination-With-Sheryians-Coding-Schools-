gsap.to('#main h1',{
    transform : 'translateX(-140%)',
    scrollTrigger  : {
        trigger : "#main",
        scroller : "body",
        scrub : 3,
        pin : true,
        start : 'top 0%',
        end : "top -100%"
    }
})