const appcontent = document.querySelectorAll('.app-mobile-view-wrapper li figure');
const contentswrapper = document.querySelector('.app-mobile-view-wrapper');
const slideapp = document.querySelector('.make-mobile-view');
const imgcontent = document.querySelectorAll('.app-mobile-background li figure');
const imgslide = document.querySelector('.show-app');
const imgcontentswrapper = document.querySelector('.app-mobile-background');
const allow = document.querySelectorAll('.allow-container-wrapper a');

let index;
let slideWith;

allow[0].addEventListener('click', (e)=>{
    e.preventDefault();
    before();
})

allow[1].addEventListener('click', (e)=>{
    e.preventDefault();
    after();
})

makeappslide();
function makeappslide() {
    let slideWith = slideapp.clientWidth
    for (let i = 0; i < appcontent.length; i++) {
        appcontent[i].style.width = `${slideWith}px`;
    }
}

makeimgslide();
function makeimgslide() {
    let imgslideWith = imgslide.clientWidth
    for (let i = 0; i < imgcontent.length; i++) {
         imgcontent[i].style.width = `${imgslideWith}px`
    }
}

window.addEventListener('resize', ()=>{
    makeappslide();
    makeimgslide();
});

// function after(){
//     if(index > contentswrapper[0].childElementCount - count-1){
//         index=contentswrapper[0].childElementCount - count -1
//     }
//     index++
//     moveappcontents
// }


function before(){
    if(index < 0) {
        index = 0
    }
    index--;
    moveappcontents();
    moveimgcontents();
}

function moveimgcontents(){
    imgcontentswrapper.style.transform = `translateX(-${index * slideWith}px)`;
}
function moveappcontents(){
    contentswrapper.style.transform = `translateX(-${index * slideWith}px)`;
}