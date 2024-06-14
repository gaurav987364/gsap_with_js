const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

function textHoverImage(){
    const {gsap} = window;

gsap.timeline()
.set('.menu', {autoAlpha: 1})
.from('.menu-item-innertext',{
    delay:1,
    duration:1.85,
    xPercent:25,
    yPercent:125,
    stagger:0.095,
    skewY:gsap.utils.wrap([-8,8]),
    ease:'expo.out',
})
.set('.menu',{pointerEvents: 'all'});

gsap.defaults({
    duration:2,
    ease:'expo.out',
})

let menuItem = document.querySelectorAll('.menu-item');
menuItem.forEach((item) => {
    let imageWrapper = item.querySelector('.menu-item-image-wrapper');
    let imageWrapperBound = imageWrapper.getBoundingClientRect();
    let itemBound = item.getBoundingClientRect();

    let onMouseEnter = () => {
        gsap.set(imageWrapper,{
            scale:0.8,
            xPercent:25,
            yPercent:50,
            // rotation:-15,
        });
        gsap.to(imageWrapper,{
            opacity:1.4,
            scale:1,
            yPercent:0,
            rotation:0,
        });
    };
    let onMouseLeave = () => {
        gsap.to(imageWrapper,{
            opacity:0,
            yPercent:-50,
            xPercent:25,
            scale:0.8,
            // rotation:-15,
        })
    };

    let onMouseMOve = ({x,y}) => {
        let yOffset = itemBound.top / imageWrapperBound.height;
        yOffset = gsap.utils.mapRange(0, 0, -150, 150, yOffset);
        gsap.to(imageWrapper,{
            duration:2.25,
            x: Math.abs(x - itemBound.left) - imageWrapperBound.width / 1.55,
            y: Math.abs(y - itemBound.top) - imageWrapperBound.height / 2 - yOffset,
        });
    };
    item.addEventListener('mouseenter', onMouseEnter);
    item.addEventListener('mouseleave', onMouseLeave);
    item.addEventListener('mousemove', onMouseMOve);

    window.addEventListener('resize',() => {
        itemBound = item.getBoundingClientRect();
    })
});
}
textHoverImage();