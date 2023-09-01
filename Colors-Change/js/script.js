var buttonEl=document.querySelector(".btn");

var divEl=document.querySelector(".mydiv");
var colors= ["red","green","blue" ];
c=0;

buttonEl.onclick= function(){
    divEl.style.backgroundColor=colors[c%3];
    c++;
}


