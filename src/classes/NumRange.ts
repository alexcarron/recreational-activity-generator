

export class NumRange<TypeOfRange> {

	constructor(
		private _min: TypeOfRange,
		private _max: TypeOfRange,
	) {
		this.min = _min;
		this.max = _max;
	}

    /**
     * Getter min
     * @return {TypeOfRange}
     */
	public get min(): TypeOfRange {
		return this._min;
	}

    /**
     * Getter max
     * @return {TypeOfRange}
     */
	public get max(): TypeOfRange {
		return this._max;
	}

    /**
     * Setter min
     * @param {TypeOfRange} value
     */
	public set min(value: TypeOfRange) {
		this._min = value;
	}

    /**
     * Setter max
     * @param {TypeOfRange} value
     */
	public set max(value: TypeOfRange) {
		this._max = value;
	}

	public toString(plural_unit_name?: string): string {
		if (plural_unit_name)
			return `${this.min} to ${this.max} ${plural_unit_name}`
		else
			return `${this.min} to ${this.max}`

	}
}