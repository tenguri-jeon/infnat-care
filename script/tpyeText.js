const preset = [
    '육아 꿀템이 다 모인 곳 육템입니다',
    '1주 신생아 아토피 기저귀',
    '3주 신생아 추천 육아템',
    '임산부 출산용품을 검색해 보세요'
]


setInterval(()=> {
    const placeHolderJs = document.getElementById('place-holder-js');
    const array = preset[Math.floor(Math.random()*preset.length)].split("");
    placeHolderJs.innerHTML = '';

for(let i = 0 ; i < array.length ; i ++ ){

    setTimeout(() => {
        placeHolderJs.innerHTML += array[i];
    }, 100*i);
}
}, 5000);