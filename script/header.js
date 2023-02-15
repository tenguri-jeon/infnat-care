header();

function header(){

    
    const header = document.querySelector('header');
    let lastscrollY = 0;
    
    function scrollHeaderup(){
        header.classList.add('hide-header')
    }
    function scrolledHeaderdown(){
        header.classList.remove('hide-header')
    }
    
    addEventListener('scroll' , (e)=>{
        const scrollY = window.scrollY;
        
        if (scrollY > lastscrollY) {
            scrollHeaderup();
        }
        
        else{
        scrolledHeaderdown();
    }
    
    lastscrollY = scrollY;
})

}