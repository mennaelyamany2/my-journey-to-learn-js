function currentTime(){
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let word="AM";

  if(hours==0)   hours=12 ;
  if(hours>12)   hours-=12,word="PM";
  if(hours <10) hours="0"+hours;
  if(minutes <10) minutes="0"+minutes;
  if(seconds<10)  seconds="0"+seconds;


  document.querySelector('.Clock').innerText=`${hours} : ${minutes}: ${seconds} : ${word}`;

  setTimeout(function(){
    currentTime()
  },1000)
}

currentTime()
