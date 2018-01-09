import MenstrualCycle from './menstrualcycle'


var myForm = document.getElementById('ovulationCalc');
var mentruation = document.getElementById('next_start');
var ovulation = document.getElementById('ovulation_period');



myForm.onsubmit = (evt) => {
	event.preventDefault();

	const form = evt.target;

	let cycleLength = form.cLength.value;
	let lastPeriod = form.lastPeriodDay.value;

	let m = new MenstrualCycle(lastPeriod, cycleLength);

	console.log(m.nextMenstruationStart);
	console.log(m.nextOvulationDays);

	let d = m.nextMenstruationStart;
	mentruation.innerHTML = `${d.toLocaleDateString("engish", { weekday: 'short' })} ${d.getDate()} ${d.toLocaleDateString("english", { month: 'long' })}`;
	
	let {start, end} = m.nextOvulationDays;

	start = `${start.toLocaleDateString("english", { month: 'short'})} ${start.getDate()}`;
	end = `${end.toLocaleDateString("english", { month: 'short'})} ${end.getDate()}`;

	ovulation.innerHTML = `${start} and ${end}`;
}

