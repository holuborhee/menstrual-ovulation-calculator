export default class MenstrualCycle {

	constructor(firstDay, cycleLength) {
        this.firstDay = firstDay;
        this.cycleLength = cycleLength;
    }

	get nextMenstruationStart(){
		let d = new Date(this.firstDay);
		d.setDate(d.getDate() + +this.cycleLength);
		
		return d;
	}

	get nextOvulationDays(){

		let _this = this.nextMenstruationStart;
		let start = new Date(
				_this.getFullYear(),
                _this.getMonth(),
                _this.getDate() - 16,
                _this.getHours(),
                _this.getMinutes(),
                _this.getSeconds(),
                _this.getMilliseconds());
		let end = new Date();



		end.setDate(start.getDate() + 4);

		return {start, end};
	}
}