header();

function header(){
    
    const header = document.querySelector('header');
    const hamburgerA = document.querySelector('.mobile-hamburger');
    const hamburgerMenu = document.querySelector('.mobile-hamburger-menu');
    const clickModal = document.querySelector('.click-language');
    const modal = document.querySelector('.modal');
    const modalHeader = document.querySelector('header');
    const body = document.querySelector('body');
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



hamburgerA.addEventListener('click', ()=>{
    hamburgerMenu.classList.toggle('click-close');
    hamburgerA.classList.toggle('active-hamburger');
    })

    
    
    modalOpenClose();
    function modalOpenClose() {
        
        clickModal.addEventListener('click', (e)=>{
            modalHeader.classList.add('modal-open');
        })
        
        window.addEventListener('click',(e)=>{
            if(e.target.classList.contains('modal-overay')){
                modalHeader.classList.remove('modal-open');
            }
        })  
    }
    
    
    
    window.addEventListener('resize', ()=>{
        modalplace();
    })
    function modalplace() {
        let modalLeft = clickModal.getBoundingClientRect().left
        let modaltop = clickModal.getBoundingClientRect().top
        modal.style.left = `${modalLeft}px`
        modal.style.top = `${modaltop}px`
    }
}










