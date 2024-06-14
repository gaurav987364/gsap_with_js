
gsap.set('.cursor',{xPercent:-50, yPercent: -50})

let cursor = document.querySelector('.cursor')
let hand = document.querySelector('.hand')
let title = document.querySelector('h1')

let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, 0.5, {x: mouseX, y:mouseY})
})

title.addEventListener('mouseenter', () => {
    gsap.to(hand, 1, {
        scale: 1,
        opacity: 1,
        top: '-75px',
        left: '-75px',
        rotate: 0,
        ease: Elastic.easeOut.config(1, 0.3)
    })
})

title.addEventListener('mousemove', () => {
    gsap.to(hand, 1, {
        x: mouseX,
        y: mouseY
    })
})

title.addEventListener('mouseleave', () => {
    gsap.to(hand, 0.2, {
        scale: 0,
        opacity: 0,
        top: '10',
        left: '40',
        rotate: 45,
    })
})