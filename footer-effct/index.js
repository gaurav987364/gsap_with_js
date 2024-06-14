document.addEventListener('DOMContentLoaded',function(){
    let workItem = document.querySelectorAll('.work-item');
    let work = document.querySelector('.work');
    let overlay = document.querySelector('.ovrlay');
    let prevItem = document.querySelectorAll('.prev');

    overlay.style.top = '0%';
    overlay.style.left = '13.25%';
    document.querySelector('#prev-2').classList.add('active');

    function removeactiveClass(){
        prevItem.forEach(function (prev) {
            prev.classList.remove('active');
        });
    }

     workItem.forEach((item,index) => {
        item.addEventListener('mouseover',function(){
            removeactiveClass();
            let activeprev = document.querySelector('#prev-' + (index+1));
            if(activeprev){
                activeprev.classList.add('active')
            }
            work.classList.add('hovered');
            switch(index){
                case 0:
                    overlay.style.top = '50%';
                    overlay.style.left = '50%';
                    work.className = 'work bg-color-red hovered';
                    break;
                case 1:
                    overlay.style.top = '0%';
                    overlay.style.left = '13.25%';
                    work.className = 'work bg-color-blue hovered';
                    break;
                case 2:
                    overlay.style.top = '-50%';
                    overlay.style.left = '-23.5%';
                    work.className = 'work bg-color-green hovered';
                    break;
            }
        })
        item.addEventListener('mouseout',function(){
            work.classList.remove('hovered');
            work.className = 'work';
            overlay.style.top = '0%';
            overlay.style.left = '13.25%';
            removeactiveClass();
            document.querySelector('#prev-2').classList.add('active')
        })
     })
})