// gsap.to('.box',{
//     x:1000,
//     duration : 2,
//     delay : 2,
//     backgroundColor : 'blue',
//     rotate : 360,
//     scale : 0.5
// })


// gsap.from('.box',{
//     x:1000,
//     duration : 2,
//     delay : 2,
//     backgroundColor : 'blue',
//     rotate : 360,
//     scale : 0.5,
//     repeat : -3
// })

let tl = gsap.timeline()

tl.to('#box1',{
    x:600,
    duration :1,// Time taken to Complete the animation
    scale : 0.8
})
tl.to('#box2',{
    x:600,
    duration :1,
    scale : 0.8
})
tl.to('#box3',{
    x:600,
    duration :1,
    scale : 0.8
})