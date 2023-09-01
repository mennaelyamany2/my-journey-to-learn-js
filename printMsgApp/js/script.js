
var inputEle = document.getElementById("input");
var buttonEle = document.getElementById("btn");
var msgEl = document.getElementById("msg");


buttonEle.onclick = function() {

    
    var inputValue = inputEle.value; 
    if(inputValue!="")
    msgEl.innerHTML=inputValue;
    else msgEl.innerHTML="please Enter a message";

    inputEle.value= "";
    
   

} 