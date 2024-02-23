let tl = gsap.timeline()

tl.from('nav h2, nav ul li',{
    y : -50,
    opacity : 0,
    duration : 0.8,
    delay : 0.5,
    stagger : 0.1
})

tl.from('main h1',{
    x: -1000,
    opacity : 0,
    stagger : 0.4,
    duration : 1
})

tl.from('main img',{
    x:50,
    opacity : 0,
    duration : 0.6,
    rotate : 45,
    stagger : 0.4
})