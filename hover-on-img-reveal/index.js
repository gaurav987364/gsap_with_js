const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);


let project = document.querySelector('.projectss');
let preview = document.querySelector('.preview');
let previewImg = document.querySelector('.preview-img');

let isInside = false;

let bgPositions = {
    p1:"0% 0%",
    p2:"0% 25%",
    p3:"0% 50%",
    p4:"0% 75%",
    p5:"0% 100%",
};
const moveStuff = () => {
    const mouseInside = isMouseInsideContainer(e);

    if(mouseInside !== isInside){
        isInside = mouseInside;
        if(isInside){
            gsap.to(preview,0.3,{
                scale:1,
            });
        } else{
            gsap.to(preview,0.3,{
                scale:0,
            });
        }
    }
};

let moveProject = (e) => {
    let previewRect = preview.getBoundingClientRect();
    offsetX = previewRect.width / 2;
    offsetY = previewRect.height / 2;


    preview.style.left = e.pageX - offsetX + 'px'
    preview.style.top = e.pageY - offsetY + 'px'
};
let moveProjectImg = (project) => {
    const projectId = project.id;
    gsap.to(previewImg,0.4,{
        backgroundPosition:bgPositions[projectId] || "0 0",
    })
};

let isMouseInsideContainer = (e) =>{
    const containerRect = project.getBoundingClientRect();
    return(
        e.pageX >= containerRect.left &&
        e.pageY <= containerRect.right &&
        e.pageX >= containerRect.top &&
        e.pageY <= containerRect.bottom
    );
};
window.addEventListener('mousemove',moveStuff);
Array.from(project.children).forEach((project) => {
    project.addEventListener('mousemove',moveProject);
    project.addEventListener('mousemove',moveProjectImg.bind(null,project));
});