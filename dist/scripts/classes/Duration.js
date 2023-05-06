import { UnitOfTime } from '../types/enums.js';
export class Duration {
    constructor(_amount, _unit) {
        this._amount = _amount;
        this._unit = _unit;
        this._amount = _amount;
        this._unit = _unit;
    }
    /**
     * Getter amount
     * @return {number}
     */
    get amount() {
        return this._amount;
    }
    /**
     * Getter unit
     * @return {UnitOfTime}
     */
    get unit() {
        return this._unit;
    }
    /**
     * Setter amount
     * @param {number} value
     */
    set amount(value) {
        this._amount = value;
    }
    /**
     * Setter unit
     * @param {UnitOfTime} value
     */
    set unit(value) {
        this._unit = value;
    }
    get seconds() {
        let seconds;
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
    isLargerThanDuration(other_duration) {
        if (this.seconds >= other_duration.seconds) {
            return true;
        }
        else {
            return false;
        }
    }
    toString() {
        return `${this.amount} ${this.unit.toLowerCase()}`;
    }
}
//# sourceMappingURL=Duration.js.map