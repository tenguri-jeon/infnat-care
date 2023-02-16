

setInterval(() =>{
    makecategory(3);
},5000);

function makecategory(불켜기갯수){
    const 랜덤픽 = [];
    const 불몇개 = 불켜기갯수;
    const block = document.querySelectorAll('.category');
    let randomnumber;

    for (let index = 0; index < block.length; index++) {
        block[index].classList.remove('redblock');
    }

    for (let i = 0; i < 불몇개; i++) {
        while(true){
            let 중복여부 = true; 
            randomnumber = Math.floor(Math.random()*8);
            for(let j = 0 ; j < 랜덤픽.length ; j++ ){
                if(랜덤픽[j]===randomnumber){
                    중복여부 = false;
                }
            }

            if(중복여부){   
                랜덤픽.push(randomnumber);
                break;
            }
        }
    }

   
    for (let i = 0; i < 불몇개 ; i++) {
        block[랜덤픽[i]].classList.add('redblock')
    }
    
    
}



