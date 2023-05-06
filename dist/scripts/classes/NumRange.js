export class NumRange {
    constructor(_min, _max) {
        this._min = _min;
        this._max = _max;
        this.min = _min;
        this.max = _max;
    }
    /**
     * Getter min
     * @return {TypeOfRange}
     */
    get min() {
        return this._min;
    }
    /**
     * Getter max
     * @return {TypeOfRange}
     */
    get max() {
        return this._max;
    }
    /**
     * Setter min
     * @param {TypeOfRange} value
     */
    set min(value) {
        this._min = value;
    }
    /**
     * Setter max
     * @param {TypeOfRange} value
     */
    set max(value) {
        this._max = value;
    }
    toString(plural_unit_name) {
        if (plural_unit_name)
            return `${this.min} to ${this.max} ${plural_unit_name}`;
        else
            return `${this.min} to ${this.max}`;
    }
}
//# sourceMappingURL=NumRange.js.map