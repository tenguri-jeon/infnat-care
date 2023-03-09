// 1. 큰 슬라이드는 사이즈조정을 해야 작동됨 
// 2. 작은 슬라이드는 사이드 조절 후 새로고침 해야 작은 원 크기조절이 됨
step2();

function step2(){
    
    
    const content = document.getElementsByClassName('step2-slide');
    const contentswrapper = document.querySelector('.step2-main-slide-wrapper');
    const circleWrapper = document.querySelector('.step2-sub-slide-wrapper');
    const contaienrWith = document.querySelector('.step2-main-img-container');
    const step2Circle = document.getElementsByClassName('step2-sub-slide');
    let circlesize;
    const count = 3;
    
    let circleWidth;
    let slideWith;
    let index = 0;
    let makecircleSlide;
    
    size();
    makeNode();
    window.addEventListener('resize' , ()=>{
        size();
    });

    function size() {
            circlesize = (document.querySelector('.step2-subslide-container')).clientWidth;
            slideWith = contentswrapper.clientWidth;
            makecircleSlide = ((circlesize - (24 * (count-1))) / count);
            
            for (let i = 0; i < content.length; i++) {
                content[i].style.width = `${slideWith}px`
            }
            
            for (let i = 0; i < step2Circle.length; i++) {
                step2Circle[i].style.width = `${makecircleSlide}px`
            }
        }
    
    
    
    function makeNode(){
        const contentsNode = content[0].cloneNode(true);
        contentswrapper.appendChild(contentsNode);
        const temp = [];
        
        for (let i = 0; i < step2Circle.length; i++) {
            const makeClone = step2Circle[i].cloneNode(true);
            temp.push(makeClone);
        }
        for (let i = 0 ; i < temp.length ; i ++ ){
            circleWrapper.appendChild(temp[i]);
        }
    }



    function slideWidth() {
        contentswrapper.style.transform = `translateX(-${index * slideWith}px)`;
    }
    
    function moveCircle(){
        circleWrapper.style.transform = `translateX(-${index  * (makecircleSlide + 24)}px)`;
    }

    function nextSlide(){
        circleWrapper.style.transition = `500ms`; 
        
        index++;
        slideWidth();
        moveCircle();
                

        if (index === content.length - 1 ) {
            setTimeout(() => {
                circleWrapper.style.transition = `0ms`;
                index = 0;
                slideWidth();
                moveCircle();
            }, 500);
        }
    }

    setInterval(()=>{
        nextSlide();
    },5000)


}