
step2();

function step2(){
    
    
    const content = document.querySelectorAll('.step2-slide');
    const contentswrapper = document.querySelector('.step2-main-slide-wrapper');
    const circleWrapper = document.querySelector('.step2-sub-slide-wrapper');
    const contaienrWith = document.querySelector('.step2-main-img-container');
    const step2Circle = document.querySelectorAll('.step2-sub-slide');
    const circlesize = (document.querySelector('.step2-subslide-container')).clientWidth;
    const count = 3;
    
    let circleWidth;
    let slideWith;
    let index = 0;
    
    
    
    size();
    function size() {
        window.addEventListener('resize' , ()=>{
            slideWith = contentswrapper.clientWidth;
            let makecircleSlide = ((circlesize - (24 * (count-1))) / count);
            
            for (let i = 0; i < content.length; i++) {
                content[i].style.width = `${slideWith}px`
            }
            
            
            for (let i = 0; i < step2Circle.length; i++) {
                step2Circle[i].style.width = `${makecircleSlide}px`
            }
            
            nodeWidth();
            
        })
    }
    
    function nodeWidth(){
        makeNode();
        contentsNode.style.width = `${slideWith}px`
        makeClone.style.width = `${makecircleSlide}px` 
    }

    makeNode();
    function makeNode(){
        const contentsNode = content[0].cloneNode(true);
        contentswrapper.appendChild(contentsNode);

        let makecircleSlide = ((circlesize - (24 * (count-1))) / count);
        for (let i = 0; i < step2Circle.length; i++) {
            const makeClone = step2Circle[i].cloneNode(true);
            circleWrapper.appendChild(makeClone);
        }
    }



    function slideWidth() {
        contentswrapper.style.transform = `translateX(-${index * slideWith}px)`;
    }
    
    function moveCircle(){
        circleWidth = step2Circle[0].clientWidth;
        circleWrapper.style.transform = `translateX(-${index  * (circleWidth + 24)}px)`;
        console.log(index);
    }

    function nextSlide(){
        index++;
        circleWrapper.style.transition = `500ms`; 
        
        slideWidth();
        moveCircle();
                

        if (index === content.length ) {
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