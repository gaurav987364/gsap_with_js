Draggable.create('.drag',{
    type:'x',
    bounds:'.container'
});


// let v1 = document.querySelector('#v1');
// let v2 = document.querySelector('#v2');


function overlap(){
    let drag = document.querySelector('.drag');
let drag2 = document.querySelector('.drag2');
let axix1 = drag2.getBoundingClientRect();
let axix2 = drag.getBoundingClientRect(); //ye chij hame hamare divs ka position btatai h

if(axix1.left < axix2.right){
    document.querySelector('#v1').style.opacity = 0
}
else{
    document.querySelector('#v1').style.opacity = 1
}
}
window,addEventListener('mousemove',overlap);//funtion call idhr krdiyanh hmnee