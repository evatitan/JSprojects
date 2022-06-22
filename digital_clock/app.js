function digitalClock() {
	const date = new Date();

	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDay();
	let hour = date.getHours();
	let minute = date.getMinutes();
	let seconde = date.getSeconds();
	let period = 'AM';
	if (hour == 0) {
		hour == 12;
	} else if (hour > 12) {
		hour -= 12;
		period = 'PM';
	}

	hour = hour < 10 ? '0' + hour : hour;
	minute = minute < 10 ? '0' + minute : minute;
	seconde = seconde < 10 ? '0' + seconde : seconde;

	let time = `${hour} : ${minute}: ${seconde}  ${period}`;
	let dayTime = `${year} / ${month} / ${day}`;

	document.getElementById('time').innerHTML = time;
	document.getElementById('dayTime').innerHTML = dayTime;

	setInterval(digitalClock, 1000);
}

digitalClock();
