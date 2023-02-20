
step2();

function step2(){

    
    const content = document.querySelectorAll('.step2-slide figure');
    const contentswrapper = document.querySelector('.step2-main-slide-wrapper');
    const contaienrWith = document.querySelector('.step2-main-img-container');
    const step2Circle = document.querySelectorAll('.step2-sub-slide figure');
    const circleWrapper = document.querySelector('.step2-sub-slide-wrapper');
    const circlesize = (document.querySelector('.step2-subslide-container')).clientWidth;
    const count = 3;
    
    let circleWidth;
    let slideWith;
    let index = 0;
    
    
    
    size();
    function size() {
        window.addEventListener('resize' , ()=>{

            for (let i = 0; i < content.length; i++) {
                slideWith = contentswrapper.clientWidth;
                content[i].style.width = `${slideWith}px`
            }

        })
    }

    checkCircleWidth();
    function checkCircleWidth() {
        const secondClone = step2Circle[1].cloneNode(true);
        const lastClone = step2Circle[2].cloneNode(true);
        console.log(lastClone);
        console.log(secondClone);

        circleWrapper.insertBefore(secondClone,circleWrapper.null)
        circleWrapper.insertBefore(lastClone,circleWrapper.null)
        makecircleSlide = circlesize / count;
        for (let i = 0; i < step2Circle.length; i++) {
            step2Circle[i].style.width = `${makecircleSlide}px`
        }
        
    }
    function slideWidth() {
        contentswrapper.style.transform = `translateX(-${index * slideWith}px)`;
    }
    
    function moveCircle(){
        circleWidth = step2Circle[0].clientWidth;
        circleWrapper.style.transform = `translateX(-${index * circleWidth}px)`;
        console.log(index);
    }




    setInterval(()=>{
        for (let i = 0; i < content.length; i++) {
            slideWidth();
            moveCircle();
        }
        index++;
        if (index > content.length - 1) {
            index = 0;
        }
    },5000)


}