const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
}) //lenis scroll code

function fillText(){
    gsap.ticker.lagSmoothing(0)

let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.two',
        scroller:'body',
        start:'20% 50%',
        end:'100% 50%',
        scrub:1,
        markers:true,
    },
});
tl.to('.text-area-2',{
    width:'100%'
})
}
fillText();

//text code
let element = document.querySelectorAll('.text');

element.forEach((element) => {
    let innerText = element.innerText;
    element.innerHTML = "";

    let textBox = document.createElement('div');
    textBox.classList.add('block');

    for(let letter of innerText) {
        let span = document.createElement('span');
        span.innerText = letter.trim() === "" ? "\xa0" : letter;
        span.classList.add('letter');
        textBox.appendChild(span);
    }
    element.appendChild(textBox);
    element.appendChild(textBox.cloneNode(true));
});

element.forEach((element) => {
    element.addEventListener('mouseover',function(){
        element.classList.remove('play')
    })
})
