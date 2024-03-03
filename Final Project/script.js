function gsapScrollTrigger() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#wrapper"),
    smooth: true,

    // for tablet smooth
    tablet: { smooth: true },

    // for mobile
    smartphone: { smooth: true },
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#wrapper", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // follwoing line is not required to work pinning on touch screen

    /* pinType: document.querySelector("#wrapper").style.transform
        ? "transform"
        : "fixed"*/
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

// gsapScrollTrigger();

function loadingAnimation() {
  let tl = gsap.timeline();
  tl.from(".loaderContent h1", {
    y: 150,
    opacity: 0,
    duaration: 0.5,
    delay: 1,
    stagger: 0.2,
  });

  tl.from(".timer h2", {
    opacity: 0,
    onStart: function () {
      let time = document.querySelector("#time");
      let grow = 0;
      setInterval(function () {
        grow++;
        if (grow <= 100) {
          time.textContent = grow;
        } else {
          time.textContent = 100;
        }
      }, 20);
    },
  });
  tl.from(".waiting h3", {
    opacity: 0,
    y: 150,
    duaration: 0.5,
  });
  tl.to(".blink h2", {
    opacity: 0,
    duaration: 2,
    animationName: "blinker",
    duaration: 0.2,
  });

  tl.to("#loader .loaderContent h1, .timer h2, .waiting h3,.blink", {
    opacity: 0,
    delay: 1.2,
    duration: 0.1,
    stagger: 0.1,
    // y:-1200
  });
  tl.to("#loader", {
    display: "none",
  });
  tl.from(".heroContainer", {
    y: 1200,
    duration: 1,
  });

  tl.from("nav", {
    opacity: 0,
    y: -100,
  });
  tl.from(".heroContent h2, .heroContent", {
    y: 150,
    opacity: 0,
    // duaration : 0.1,
    stagger: 0.1,
  });
}

loadingAnimation();

// function crsr() {
//   let wrapper = document.querySelector("#wrapper");
//   document.body.addEventListener("mousemove", function (dets) {
//     gsap.to("#crsr", {
//       x: dets.x,
//       y: dets.y,
//     });
//   });
// }
// crsr();
function sheryJS() {
  Shery.makeMagnet(".menus a" /* Element to target.*/, {
    //Parameters are optional.
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  Shery.imageEffect(".imgContainer", {
    style: 6,
    // debug: true,
    gooey: true,
    config: {
      noiseDetail: { value: 7.44, range: [0, 100] },
      distortionAmount: { value: 2.98, range: [0, 10] },
      scale: { value: 36.36, range: [0, 100] },
      speed: { value: 0.61, range: [0, 1] },
      zindex: { value: "99", range: [-9999999, 9999999] },
      aspect: { value: 0.9840426539534833 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.39, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 1.07, range: [0, 10] },
      metaball: { value: 0.31, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.49, range: [0, 2] },
      noise_scale: { value: 4.58, range: [0, 100] },
    },
  });
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 0.5,
  });
}

sheryJS();

function videoContainerEffect() {
  let videoContainer = document.querySelector(".videoContainer");
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to("#videoCursor", {
        x: dets.x - 1000,
        y: dets.y - 100,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to("#videoCursor", {
      top: "10%",
    });
  });
  let flag = 0;
  videoContainer.addEventListener("click", function () {
    let video = document.querySelector(".videoContainer video");
    let img = document.querySelector(".videoContainer img");
   

    if (flag == 0) {
      video.play();
      img.style.opacity = "0";
      document.querySelector(
        "#videoCursor"
      ).innerHTML = `<i class="ri-pause-mini-fill"></i>`;
      gsap.to('#videoCursor',{
        scale : '0.6'
      })
      flag = 1;
    }else{
      video.pause();
      img.style.opacity = "1";
      document.querySelector(
        "#videoCursor"
      ).innerHTML = `<i class="ri-play-mini-fill"></i>`;
      gsap.to('#videoCursor',{
        scale : '1'
      })

      flag = 0;
    }
  });
}
function flagAnimation(){
    // let flagCard = document.querySelector('#flags');

    wrapper.addEventListener('mousemove',function(dets){
        gsap.to('#flags',{
            left: dets.x,
            top: dets.y
        })
    })

    document.querySelector('#hero3')
    .addEventListener('mouseenter',function(){
        gsap.to('#flags',{
           opacity :1
        })
    })
    document.querySelector('#hero3')
    .addEventListener('mouseleave',function(){
        gsap.to('#flags',{
           opacity :0
        })
    })
  

}
videoContainerEffect();
flagAnimation()
