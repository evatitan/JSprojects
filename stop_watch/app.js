window.onload = function() {
	let mins = '00';
	let seconds = '00';
	let tens = '00';
	const appendMins = document.querySelector('#mins');
	const appendSeconds = document.querySelector('#seconds');
	const appendTens = document.querySelector('#tens');
	const start = document.querySelector('#start');
	const stop = document.querySelector('#stop');
	const reset = document.querySelector('#reset');
	let Interval;

	start.onclick = function() {
		clearInterval(Interval);
		Interval = setInterval(startTimer, 10);
	};

	stop.onclick = function() {
		clearInterval(Interval);
	};

	reset.onclick = function() {
		clearInterval(Interval);
		mins = '00';
		seconds = '00';
		tens = '00';
		appendMins.innerHTML = mins;
		appendSeconds.innerHTML = seconds;
		appendTens.innerHTML = tens;
	};

	function startTimer() {
		tens++;
		if (tens < 9) {
			appendTens.innerHTML = '0' + tens;
		}
		if (tens > 9) {
			appendTens.innerHTML = tens;
		}
		if (tens > 99) {
			seconds++;
			appendSeconds.innerHTML = '0' + seconds;
			tens = 0;
			appendTens.innerHTML = '0' + tens;
		}
		if (seconds > 9) {
			appendSeconds.innerHTML = seconds;
		}
		if (seconds > 59) {
			mins++;
			appendMins.innerHTML = '0' + mins;
			seconds = 0;
			appendSeconds.innerHTML = '0' + seconds;
		}
	}
};
