
const originalText = "timer here";

const zeroTime = "0 : 00";
var totalSecs = 0;

clockStyle=(amount)=> {
  mins = parseInt(amount, 10);
  mins < 0 ? (mins *= -1) : (mins = mins);

  return mins + " : 00";
}
display=() =>{
  amount = document.getElementById("amount");
  timer = document.getElementById("timer");
  if (amount.value == "") {
    timer.innerText = originalText;
    return;
  }

  timer.innerText = clockStyle(amount.value);
}

startTimer=() =>{
  amount = document.getElementById("amount").value;
  if (amount == "") return;
  mins = parseInt(amount, 10);

  mins < 0 ? (mins *= -1) : (mins = mins);
  timerFunc(mins);
}

timerFunc=(minutes)=> {
  showPlace = document.getElementById("timer");
  totalSecs = minutes * 60;
  console.log(totalSecs);

  mins = minutes - 1; 
  secs = 60;

  tempSec = 1;

  showPlace.innerText = mins + " : " + secs;

  setInterval(function () {
    if (totalSecs == 0) {
      showPlace.innerText = zeroTime;
      return;
    }

    if (tempSec == 60) {
      tempSec = 1;
      secs = 60;
      mins--;
    }

    secs--;
    tempSec++;
    showPlace.innerText = mins + " : " + secs;
    totalSecs--;
  }, 1000);
}

resetTimer=() =>{
  if (totalSecs > 0) totalSecs = 0;
}

document.getElementById("amount").addEventListener("keyup", display);
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
