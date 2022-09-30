const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEL = document.getElementById('date-picker');
const titleEl = document.getElementById('title');

const countdownEl = document.getElementById('countdown');
const countdownElTitle = document.getElementById('countdown-title');
const countdownButton = document.getElementById('countdown-button');
const timeElements = document.querySelectorAll('span');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEL.setAttribute('min', today);

// Populate Countdown / Complete UI
function updateDOM() {
	countdownActive = setInterval(() => {
		const now = new Date().getTime();
		const distance = countdownValue - now;

		const days = Math.floor(distance / day);
		const hours = Math.floor((distance % day) / hour);
		const minutes = Math.floor((distance % hour) / minute);
		const seconds = Math.floor((distance % minute) / second);

		// Populate Countdown
		timeElements[0].textContent = `${days}`;
		timeElements[1].textContent = `${hours}`;
		timeElements[2].textContent = `${minutes}`;
		timeElements[3].textContent = `${seconds}`;

		// Hide Input
		inputContainer.hidden = true;

		// Show Countdown
		countdownEl.hidden = false;
		console.log(countdownActive);
	}, second);
}

// Take values from Form Input
function updateCountdown(e) {
	e.preventDefault();
	const countdownTitle = e.srcElement[0].value;
	const countdownDate = e.srcElement[1].value;

	// Get number version of current Date
	countdownValue = new Date(countdownDate).getTime();
	countdownElTitle.textContent = `${countdownTitle}`;

	// Check for valid date
	!countdownDate ? alert('Must Fill Date') : updateDOM();
}

// Reset All Values
function resetCountdown() {
	// Hide Countdowns and Show Input
	countdownEl.hidden = true;
	inputContainer.hidden = false;

	// Stop the Countdown
	clearInterval(countdownActive);

	// Reset values
	countdownTitle = '';
	countdownDate = '';
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
countdownButton.addEventListener('click', resetCountdown);
