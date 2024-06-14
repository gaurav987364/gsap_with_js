let tl = gsap.timeline({scrollTrigger:{
    trigger:'.main',
    start:'50% 50%',
    end:'100% 50%',
    scrub:2,
    pin:true,
}});

tl.to('.top-div',{
    top:'-50%'
},'same-name-to-run-both-together')
.to('.bottom-div',{
    bottom:'-50%'
},'same-name-to-run-both-together')
.to('.upper-heading',{
    top:'55%'
},'same-name-to-run-both-together')
.to('.lower-heading',{
    bottom:'-50%'
},'same-name-to-run-both-together');


