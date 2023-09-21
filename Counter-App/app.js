let getLower=document.querySelector('.prevBtn');

let getAdd=document.querySelector('.nextBtn');
let getCounter=document.getElementById('counter');
let count=0;

getAdd.onclick= function(){
    count++;
    getCounter.innerHTML=count;

}


getLower.onclick= function(){
  count--;
  getCounter.innerHTML=count;

}

  
