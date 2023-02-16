const content = document.querySelectorAll('.step2-slide figure');
const contentswrapper = document.querySelector('.step2-main-slide-wrapper');
const contaienrWith = document.querySelector('.step2-main-img-container')
let slideWith;
let index = 0;

init


window.addEventListener('resize' , ()=>{
    
    for (let i = 0; i < content.length; i++) {
        slideWith = contentswrapper.clientWidth;
        content[i].style.width = `${slideWith}px`
    }
})


setInterval(()=>{
    for (let i = 0; i < content.length; i++) {
        slideWidth();
    }
    index++;
},5000)

function slideWidth() {
    contentswrapper.style.transform = `translateX(-${index * slideWith}px)`;
}


