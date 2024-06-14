document.addEventListener('DOMContentLoaded', function(){
    const imgSources = [
        './assets/img1.jpg',
        './assets/img2.jpg',
        './assets/img3.jpg',
        './assets/img4.jpg',
        './assets/img5.jpg',
    ];

    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function(item){
        const copyElement = item.querySelectorAll('.info, .tag, .name');
        copyElement.forEach((div)=>{
            const copy = div.querySelector('p');

            if(copy){
                const duplicateCopy = document.createElement('p')
                duplicateCopy.textContent = copy.textContent;
                div.appendChild(duplicateCopy);
            }
        });
    });
  
    const appendImages = (src)=>{
        const preview1 = document.querySelector('.preview-img-1');
        const preview2 = document.querySelector('.preview-img-2');

        const img1 = document.createElement('img');
        const img2 = document.createElement('img');

        img1.src = src;
        // console.log(src);
        img1.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";
        img2.src = src;
        img2.style.clipPath = "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)";

        preview1.appendChild(img1);
        preview2.appendChild(img2);

        gsap.to([img1, img2],{
            clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power2.inOut",
            onComplete: function(){
                removeExtraImages(preview1);
                removeExtraImages(preview2);
            }
        });
    };


    function removeExtraImages(container){
        while (container.children.length > 10){
            container.removeChild(container.firstChild);
        }
    }

    document.querySelectorAll('.menu-item').forEach((item,index)=>{
        item.addEventListener('mouseover',()=>{
            mouseOverAnimation(item);
            appendImages(imgSources[index]);
        });
        item.addEventListener('mouseout',()=>{
            mouseOutAnimation(item);
        });
    });

    const mouseOverAnimation = (elem)=>{
        gsap.to(elem.querySelectorAll('p:nth-child(1)'),{
            top:"-100%",
            duration: 0.2,
        });
        gsap.to(elem.querySelectorAll('p:nth-child(2)'),{
            top:"0%",
            duration: 0.2,
        });
    };
    const mouseOutAnimation = (elem)=>{
        gsap.to(elem.querySelectorAll('p:nth-child(1)'),{
            top:"0%",
            duration: 0.2,
        });
        gsap.to(elem.querySelectorAll('p:nth-child(2)'),{
            top:"100%",
            duration: 0.2,
        });
    };

    document.querySelector('.menu').addEventListener('mouseout',function(){
        gsap.to('.preview-img img',{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
            duration: 1,
            ease: "power3.out",
        });
    });

    document.addEventListener('mousemove',function(e){
        let preview = document.querySelector('.preview');

        //for img move with mouse
        gsap.to(preview, {
            x: e.clientX,
            y: e.clientY,
            duration: 1,
            ease: "power3.out",
        })
    })
})