

setInterval(() =>{
    makecategory();
},2000);

function makecategory(){
    const block = document.querySelectorAll('.category');
    let randomnumber;

    for (let i = 1; i < 3; i++) {
        randomnumber = parseInt(Math.floor(Math.random()*8));
        // console.log(randomnumber);
        // 같은숫자 나오지 않게 하려면?
        block[randomnumber].classList.add('redblock');
    }
    block[randomnumber].classList.remove('redblock');
    
}



