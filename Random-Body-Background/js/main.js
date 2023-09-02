let btnEL=document.querySelector("#btn");

btnEL.addEventListener('click',changeColor);



function changeColor(){
    document.body.style.backgroundColor = '#'+ Math.random().toString(16).slice(2,8);

}
