makeappslide();

function makeappslide(){

    const appcontent = document.querySelectorAll('.app-mobile-view-wrapper li figure');
    const contentswrapper = document.querySelector('.app-mobile-view-wrapper');
    const slideapp = document.querySelector('.make-mobile-view');
    const imgcontent = document.querySelectorAll('.app-mobile-background li figure');
    const imgslide = document.querySelector('.show-app');
    const imgcontentswrapper = document.querySelector('.app-mobile-background');
    const allow = document.querySelectorAll('.allow-container-wrapper a');

    let index;
    let slideWith;
    let imgslideWith;
    let count = appcontent.length;
    
    allow[0].addEventListener('click', (e)=>{
        e.preventDefault();
        before();
    })

    allow[1].addEventListener('click', (e)=>{
        e.preventDefault();
        after();
    })

    window.addEventListener('resize', ()=>{
        makeappslide();
        makeimgslide();
    });
    

    makeappslide();
    function makeappslide() {
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


    function after(){
        if(index > appcontent.length - count-1){
            index = appcontent.length - count -1
        }
        index++;
        moveappcontents();
        moveimgcontents();
    }


    function before(){
        if(index < 0) {
            index = 0
        }
        index--;
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