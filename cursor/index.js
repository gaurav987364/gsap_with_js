let crsr = document.querySelector('.crsr');
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');

(function mouseMove(){
    box1.addEventListener('mousemove', function(e){
        crsr.style.left = e.clientX  + 'px';
        crsr.style.top = e.clientY +  'px';
        crsr.style.opacity = '1';
        crsr.style.transform = 'translate(-50%, -50%)';
    });
})()
// box2.addEventListener('mousemove', function(e){
//     crsr.style.left = e.clientX  + 'px';
//     crsr.style.top = e.clientY +  'px';
//     crsr.style.transform = 'translate(-50%, -50%)';
//     crsr.style.opacity = '1';
// });
