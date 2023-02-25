makeAppSlide();

function makeAppSlide(){

    const appcontent = document.querySelectorAll('.app-mobile-view-wrapper li figure');
    const contentswrapper = document.querySelector('.app-mobile-view-wrapper');
    const slideapp = document.querySelector('.make-mobile-view');
    const imgcontent = document.querySelectorAll('.app-mobile-background li figure');
    const imgslide = document.querySelector('.show-app');
    const imgcontentswrapper = document.querySelector('.app-mobile-background');
    const allow = document.querySelectorAll('.allow-container-wrapper a');

    let index=0;
    let slideWith;
    let imgslideWith;
    let count = appcontent.length;

    
    window.addEventListener('resize', ()=>{
        makeAppSlide();
        makeimgslide();
    });
    
    
    makeAppSlide();
    function makeAppSlide() {
        slideWith = slideapp.clientWidth
        for (let i = 0; i < appcontent.length; i++) {
            appcontent[i].style.width = `${slideWith}px`;
        }
    }
    
    makeimgslide();
    function makeimgslide() {
        imgslideWith = imgslide.clientWidth
        for (let i = 0; i < imgcontent.length; i++) {
            imgcontent[i].style.width = `${imgslideWith}px`
        }
    }
    
    allow[0].addEventListener('click', (e)=>{
        e.preventDefault();
        before();
    })

    allow[1].addEventListener('click', (e)=>{
        e.preventDefault();
        after();
    })

    function after(){
        index++;
        if(index > appcontent.length - 1){
            index = appcontent.length - 1;
        }

        console.log(`appcontent.length: ${appcontent.length} - count: ${count}`)
        console.log(index);
        moveappcontents();
        moveimgcontents();
    }


    function before(){
        index--;
        if(index < 0) {
            index = 0
        }
        console.log(index);
        moveappcontents();
        moveimgcontents();
    }

    function moveimgcontents(){
        imgcontentswrapper.style.transform = `translateX(-${index * imgslideWith}px)`;
    }
    function moveappcontents(){
        contentswrapper.style.transform = `translateX(-${index * slideWith}px)`;
    }
}