window.onload = function () {
    var seconds = 00; 
    var tens = 00; 
    var count = 0; 
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var appendCounter = document.getElementById("count")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval ;

    buttonStart.style.background = "#00FF00"
    buttonStop.style.background = "#FF0000"
    buttonStop.style.visibility = 'hidden';

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        buttonStop.style.visibility = 'visible';
        buttonStart.style.visibility = 'hidden';
    }
    buttonStop.onclick = function() {
        clearInterval(Interval);
        buttonStop.style.visibility = 'hidden';
        buttonStart.style.visibility = 'visible';
    }
    buttonReset.onclick = function() {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        count = "0";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendCounter.innerHTML = count;
        buttonStop.style.visibility = 'hidden';
        buttonStart.style.visibility = 'visible';
    }
    function startTimer () {
        tens++; 
        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9){
            appendTens.innerHTML = tens;
        } 
        if (tens > 99) {
            console.log("seconds");
            if((seconds+1) % 10 == 0){
                count++;
                appendCounter.innerHTML = count;
            }
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }
        if (seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
    }


  }