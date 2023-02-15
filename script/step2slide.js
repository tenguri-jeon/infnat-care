const content = document.querySelectorAll('.step2-slide figure');
const contentswrapper = document.querySelector('.step2-main-slide-wrapper');
let slideWith;

window.addEventListener('resize' , ()=>{
    
    for (let i = 0; i < content.length; i++) {
        slideWith = contentswrapper.clientWidth;
        content[i].style.width = `${slideWith}px`
    }
})
