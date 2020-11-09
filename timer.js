var display = document.getElementById('display');

var minutes = document.getElementById('minutes');

var seconds = document.getElementById('seconds');

var start = document.getElementById('start');

var chronometerSeg;

var minutesCurrent;

var secondsCurrent;

var interval;

for (var i = 0; i <= 60; i++){
  minutes.innerHTML+= '<option value="'+i+'">'+i+'</option>';
}

for (var i = 0; i <= 60; i++){
  seconds.innerHTML+= '<option value="'+i+'">'+i+'</option>';
}

start.addEventListener('click', function(){
  minutesCurrent = minutes.value;
  secondsCurrent = seconds.value;

  display.childNodes[1].innerHTML = minutesCurrent + ":" +secondsCurrent;

  interval = setInterval(function(){

    secondsCurrent--;
    if(secondsCurrent <= 0){
      if(minutesCurrent > 0){
        minutesCurrent--;
        secondsCurrent = 59;
        
      }else{
        alert("finish!");
        document.getElementById("sound").onplay();
        clearInterval(Interval);
      }
    }
    display.childNodes[1].innerHTML = minutesCurrent + ":" +secondsCurrent;
  },1000);

})
