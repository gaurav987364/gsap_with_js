//loader js
let tl = gsap.timeline();

//code of 0-100% 
function load(){
    let a = 0;
    setInterval(function(){
        a = a + Math.floor(Math.random()*20);
        if(a<100){
         document.querySelector('#loader h1').
         innerHTML = a + '%';
        } else{
            a = 100;
            document.querySelector('#loader h1').
            innerHTML = a + '%';
        }
    },150)
}
//load(); // here call se better niche call kro html k sath

// code to bagcground upar le jane ka
tl.to('#loader',{
    top:'-100vh',
    delay:1,
    duration:1.5,
    onStart:load(),
})



//text-animate
tl.to('#page1 h1',{
    transform:'translateX(-100%)',
    fontWeight:90,
    scrollTrigger:{
        trigger:'#page1',
        scroller:'body',
        start:'top 0',
        end:'top -200%',
        scrub:2,
        pin:true
    }
});

//navbar
tl.from('.heading,#item h3,.btn',{
    y:-100,
    delay:0.5,
    stagger:1
});




///this is noraml loco code when not scrollltrgier use
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true
// });
//locomotive js code

// function locomotive(){
//     gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// ScrollTrigger.refresh();

// };
// locomotive();
