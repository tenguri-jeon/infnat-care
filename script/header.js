header();

function header(){

    const header = document.querySelector('header');
    let lastscrollY = 0;
    
    
    addEventListener('scroll' , (e)=>{
        const scrollY = window.scrollY;
        
        if (scrollY > lastscrollY) {
            scrollHeaderup();
        }
        
        else{
        scrolledHeaderdown();
    }
    
    lastscrollY = scrollY;

    function scrollHeaderup(){
        header.classList.add('hide-header')
    }
    function scrolledHeaderdown(){
        header.classList.remove('hide-header')
    }
})
}

const hamburgerMenu = document.querySelector('.mobile-hamburger-menu');
const hamburgerA = document.querySelector('.mobile-hamburger');

hamburgerA.addEventListener('click', ()=>{
    hamburgerMenu.classList.add('click-close')
})
