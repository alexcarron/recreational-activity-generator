import { UnitOfTime }  from '../types/enums.js'

export class Duration {
	constructor(
		private _amount: number,
		private _unit: UnitOfTime,
	) {
		this._amount = _amount;
		this._unit = _unit;
	}

    /**
     * Getter amount
     * @return {number}
     */
	public get amount(): number {
		return this._amount;
	}

    /**
     * Getter unit
     * @return {UnitOfTime}
     */
	public get unit(): UnitOfTime {
		return this._unit;
	}

    /**
     * Setter amount
     * @param {number} value
     */
	public set amount(value: number) {
		this._amount = value;
	}

    /**
     * Setter unit
     * @param {UnitOfTime} value
     */
	public set unit(value: UnitOfTime) {
		this._unit = value;
	}


	public get seconds(): number {
		let seconds: number;

		switch (this.unit) {
			case UnitOfTime.Minutes:
				seconds = this.amount * 60;
				break;

			case UnitOfTime.Hours:
				seconds = this.amount * 60 * 60;
				break;

			case UnitOfTime.Days:
				seconds = this.amount * 60 * 60 * 24;
				break;

			case UnitOfTime.Weeks:
				seconds = this.amount * 60 * 60 * 24 * 7;
				break;

			case UnitOfTime.Months:
				seconds = this.amount * 60 * 60 * 24 * 30.437;
				break;

			case UnitOfTime.Years:
				seconds = this.amount * 60 * 60 * 24 * 365;
				break;

			default:
				seconds = this.amount;
				break;
		}

		return seconds;
	}

	public isLargerThanDuration(other_duration: this): boolean {

		if (this.seconds >= other_duration.seconds) {
			return true;
		}
		else {
			return false;
		}

	}

	public toString(): string {
		return `${this.amount} ${this.unit.toLowerCase()}`
	}
}