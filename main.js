const clock = document.querySelector('#clock');
const hexColor = document.querySelector('#hexColor');


let hexClock = () => { // get currnet time and turn into hex-color
	let time = new Date();
	let hours = (time.getHours() % 12).toString();
	let minutes = time.getMinutes().toString();
	let seconds = time.getSeconds().toString();

	if(hours.length < 2) {
		hours = '0' + hours;
	} 

	if(hours === '00') {
		hours = '12';
	}

	if(minutes.length < 2) {
		minutes = '0' + minutes;
	}

	if(seconds.length < 2) {
		seconds = '0' + seconds;
	}

	let clockStr = hours + ' : ' + minutes + ' : ' + seconds;
	let hexColorStr = '#' + hours + minutes + seconds;

	clock.textContent = clockStr;
	hexColor.textContent = hexColorStr;

	document.body.style.backgroundColor = hexColorStr;

}

hexClock(); // had to run this function first because setInterval starts after a second
setInterval(hexClock, 1000);
