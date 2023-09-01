
var passEL=document.getElementById("input");

var btnEL=document.getElementById("btn");

btnEL.addEventListener('click',togglePassword)

function togglePassword(){
       if(btnEL.getAttribute('data-text')=="show"){
        passEL.setAttribute('type','text');
        this.setAttribute('data-text',"hide");
        this.innerHTML="hide";
    }
    else {
        passEL.setAttribute('type','password');
        this.setAttribute('data-text','show');
        this.innerHTML="show";

    }
    

};