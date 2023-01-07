const runners = document.getElementById('runners');
const coins = document.getElementById('coins');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('arrow-right');


rightArrow.onclick = function (){
    runners.style.display = 'inline-block';
    coins.style.display = 'none';
    rightArrow.style.display = 'none' ? 'inline-block' : "none";
}

leftArrow.onclick = function (){
    coins.style.display = 'inline-block';
    runners.style.display = 'none';
    leftArrow.style.display == 'none'? 'inline-block' : "none";
}