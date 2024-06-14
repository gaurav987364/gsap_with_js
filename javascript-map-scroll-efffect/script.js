document.addEventListener('DOMContentLoaded', function() {
    const imagesConatiner = document.querySelector('.images');
    const preview = document.querySelector('.preview');
    const minimap = document.querySelector('.minimap');


    function getElementTop(element){
        let top = 0;
        while(element){
            top += element.offsetTop;
            element = element.offsetParent;
        }
        return top;
    };

    const imagesStart = getElementTop(imagesConatiner);
    const imageEnd = imagesStart + imagesConatiner.offsetHeight;
    const viewPortHeight = window.innerHeight;
    const previewHeight = preview.offsetHeight;
    const prevMaxTranslate = (minimap.offsetHeight - previewHeight) * 2.84;

    function handelScroll(){
        const scrollPosition = window.scrollY;
        const scrollRange = imageEnd - imagesStart - viewPortHeight;
        const prevScrollRange = Math.min(prevMaxTranslate, scrollRange);

        if(scrollPosition >= imagesStart &&
        scrollPosition <= imageEnd - viewPortHeight){
            let scrollFraction = (scrollPosition - imagesStart) / scrollRange;
            let prevTranslateY = scrollFraction * prevScrollRange;
            preview.style.transform = `translateX(-50%) translateY(${prevTranslateY}px)`;
        } else if(scrollPosition < imagesStart){
            preview.style.transform = `translateX(-50%) translateY(0%)`;
        } else{
            preview.style.transform = `translateX(-50%) translateY(${prevMaxTranslate}px)`;
        }
    }
    window.addEventListener('scroll', handelScroll);


    //theme
    const togglePoint = window.innerHeight * 4;
    const wrapper = document.querySelector('.wrappper');

    function chcekScroll(){
        if(window.scrollY >= togglePoint){
            wrapper.classList.add('light-theme');
        } else{
            wrapper.classList.remove('light-theme');
        }
    }
    window.addEventListener('scroll', chcekScroll);
})