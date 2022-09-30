const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEL = document.getElementById('date-picker');
const titleEl = document.getElementById('title');

let countdownTitle = '';
let countdownDate = '';

// Set Date Input Min with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEL.setAttribute('min', today);

// Take values from Form Input
function updateCountdown(e) {
	e.preventDefault();
	const countdownTitle = e.srcElement[0].value;
	const countdownDate = e.srcElement[1].value;
	console.log(countdownTitle);
	console.log(countdownDate);
}

// Event Listeners
countdownForm.addEventListener('submit', updateCountdown);
