const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".content",
        start: "top top",
        end: "bottom top",
        scrub: false,
        pin: true,
        //markers: true
        toggleActions: 'play none none reverse'
    }
})

tl
    .to('.displacement', {
        attr: {
            r: 700
        },
        duration: 2
    })
    .to('span, p', {
        y: 0,
        stagger: 0.1
    }, "-=2")
    .to('.border', {
        scaleX: 1,
        stagger: .1
    }, "-=2")

// smooth scroll

