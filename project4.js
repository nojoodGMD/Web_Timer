// Variables for buttons
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Variable for time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Variable for leading zero
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadinghours = 0;

//Variables for set interval and timer status
let timerIntreval = null;
let timerStatus = "stop";

//--------------------------------------------

// Stop whatch function
function stopWatch(){
    seconds++;

    if(seconds / 60 === 1){
        seconds = 0;
        minutes ++;
    }

    if(minutes / 60 === 1){
        minutes =0;
        hours ++;
    }

    //check if the counter of seconds are one digit, if not then increase the leading zero (same for the rest)
    if(seconds < 10){
        leadingSeconds = '0'+seconds.toString();
    }else{
        leadingSeconds = seconds;
    }

    //same for minutes to keep the leading zero
    if(minutes < 10){
        leadingMinutes = '0'+minutes.toString();
    }else{
        leadingMinutes = minutes;
    }
   
    //same for hours to keep the leading zero
    if(hours < 10){
        leadinghours = '0'+hours.toString();
    }else{
        leadinghours = hours;
    }

    //display the format in window
    document.querySelector('#timer').innerText =
    leadinghours + ':' + leadingMinutes + ':' + leadingSeconds;
}

//----
//Click event for the start buttons
startStopBtn.addEventListener('click',function(){

    if(timerStatus === "stop"){
        timerIntreval = window.setInterval(stopWatch , 1000);
        startStopBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timerStatus = "start";
    }else{
        window.clearInterval(timerIntreval);
        startStopBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timerStatus = "stop";
    }

})

//Click event for the reset buttons
resetBtn.addEventListener('click',function(){
    window.clearInterval(timerIntreval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    document.querySelector('#timer').innerText =
    "00:00:00";

})
