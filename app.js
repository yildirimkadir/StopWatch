let seconds = 0;
let minutes = 0;
let hours = 0;
const button = document.querySelector("#handler");
button.addEventListener("click");

const startWatch = () => {
    seconds++;

    if (seconds/60 === 1) {
        seconds = 0;
        minutes++;

        if (minutes/60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10 ) {
		displaySeconds = '0' + seconds.toString();
	}
	else {
		displaySeconds = seconds;
	}

	if(minutes < 10 ) {
		displayMinutes = '0' + minutes.toString();
	}
	else {
		displayMinutes = minutes;
	}

	if(hours < 10 ) {
		displayHours = '0' + hours.toString();
	} else {
		displayHours = hours;
	}

	document.getElementById('display').innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
};

function startStop() {
	if(status == 'Stopped') {
		interval = window.setInterval(StartWatch,1000);
		document.getElementById('handler').innerHTML = 'Stop';
		status = 'Started';
	}
	else if(status == 'Started') {
		window.clearInterval(interval);
		document.getElementById('handler').innerHTML = 'Start';
		status = 'Stopped';
	}
}

function Reset()
{
	seconds = 0;
	hours = 0;
	minutes = 0;
	window.clearInterval(interval);
	document.getElementById('display').innerHTML = '00:00:00';
	document.getElementById('handler').innerHTML = 'Start';
	status = 'Stopped';
}