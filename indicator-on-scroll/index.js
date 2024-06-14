// let counter = document.querySelector('.percent');

// TweenLite.set(counter,{
//     xPercent:-5,
//     yPercent:-5,
// });
// window.addEventListener('mousemove',moveCounter);
// function moveCounter(e){
//     TweenLite.to(counter,0.5,{
//         x:e.clientX,
//         y:e.clientY,
//     })
// };
function progress(){
    let windowScrolltop = $(window).scrollTop();
    let docHeight = $(document).height();
    let windowHeight = $(window).height();
    let progress = (windowScrolltop / (docHeight - windowHeight)) * 100;
    let $bgColor = progress > 99 ? '#fff' : 'red';
    let $textColor = progress > 99 ? '#fff' : '#333';
    $('h1').text(Math.round(progress) + '%').css({color:$textColor});
    $('.fill').height(progress + '%').css({backgroundColor:$bgColor});
}
progress();
$(document).on('scroll',progress);