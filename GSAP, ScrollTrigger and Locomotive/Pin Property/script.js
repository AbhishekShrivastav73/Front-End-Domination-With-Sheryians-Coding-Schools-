gsap.to('#page2 img',{
    width : "100%",
    height : '100%',
    scrollTrigger : {
        trigger  : '#page2',
        scoller : 'body',
        scrub : 3,
        markers : true,
        pin : true,
        start  : "top 0%",
        end : "top -100%"
    }
})