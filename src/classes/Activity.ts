
import { EnjoymentLevel, Focus, Item, Place, YesNoCheckbox }  from '../types/enums.js'
import { NumRange }  from './NumRange.js'
import { ToCase }  from '../utilities/ToCase.js'
import { Duration }  from './Duration.js'

export class Activity {
	private _name: string;
	private _description: string;
	private _duration_range: NumRange<Duration>;
	private _required_focuses: Focus[];
	private _required_devices: Item[];
	private _num_participants_needed: NumRange<number>;
	private _needInternet: boolean;
	private _isProductive: YesNoCheckbox;
	private _enjoyment_level: EnjoymentLevel;
	private _required_place: Place;

	constructor(
		{
			name,
			description,
			duration_range,
			required_focuses,
			required_devices,
			num_participants_needed,
			needInternet,
			isProductive,
			enjoyment_level,
			required_place
		}: {
			name: string,
			description: string,
			duration_range: NumRange<Duration>,
			required_focuses: Focus[],
			required_devices: Item[],
			num_participants_needed: NumRange<number>,
			needInternet: boolean,
			isProductive: YesNoCheckbox,
			enjoyment_level: EnjoymentLevel,
			required_place: Place,
		}
	) {
		this._name = name;
		this._description = description;
		this._duration_range = duration_range;
		this._required_focuses = required_focuses;
		this._required_devices = required_devices;
		this._num_participants_needed = num_participants_needed;
		this._needInternet = needInternet;
		this._isProductive = isProductive;
		this._enjoyment_level = enjoyment_level;
		this._required_place = required_place;
	}

	/**
	 * Getter required_place
	 * @return {Place}
	 */
	public get required_place(): Place {
		return this._required_place;
	}

	/**
	 * Setter required_place
	 * @param {Place} value
	 */
	public set required_place(value: Place) {
		this._required_place = value;
	}

	/**
	 * Getter name
	 * @return {string}
	 */
	public get name(): string {
		return this._name;
	}

	/**
	 * Getter description
	 * @return {string}
	 */
	public get description(): string {
		return this._description;
	}

	/**
	 * Getter duration_range
	 * @return {NumRange<IDuration>}
	 */
	public get duration_range(): NumRange<Duration> {
		return this._duration_range;
	}

	/**
	 * Getter required_focuses
	 * @return {Focus[]}
	 */
	public get required_focuses(): Focus[] {
		return this._required_focuses;
	}

	/**
	 * Getter required_devices
	 * @return {Item[]}
	 */
	public get required_devices(): Item[] {
		return this._required_devices;
	}

	/**
	 * Getter num_participants_needed
	 * @return {NumRange<number>}
	 */
	public get num_participants_needed(): NumRange<number> {
		return this._num_participants_needed;
	}

	/**
	 * Getter needInternet
	 * @return {boolean}
	 */
	public get needInternet(): boolean {
		return this._needInternet;
	}

	/**
	 * Getter isProductive
	 * @return {boolean}
	 */
	public get isProductive(): YesNoCheckbox {
		return this._isProductive;
	}

	/**
	 * Getter enjoyment_level
	 * @return {number}
	 */
	public get enjoyment_level(): EnjoymentLevel {
		return this._enjoyment_level;
	}

	/**
	 * Setter name
	 * @param {string} value
	 */
	public set name(value: string) {
		this._name = value;
	}

	/**
	 * Setter description
	 * @param {string} value
	 */
	public set description(value: string) {
		this._description = value;
	}

	/**
	 * Setter duration_range
	 * @param {NumRange<IDuration>} value
	 */
	public set duration_range(value: NumRange<Duration>) {
		this._duration_range = value;
	}

	/**
	 * Setter required_focuses
	 * @param {Focus[]} value
	 */
	public set required_focuses(value: Focus[]) {
		this._required_focuses = value;
	}

	/**
	 * Setter required_devices
	 * @param {Item[]} value
	 */
	public set required_devices(value: Item[]) {
		this._required_devices = value;
	}

	/**
	 * Setter num_participants_needed
	 * @param {NumRange<number>} value
	 */
	public set num_participants_needed(value: NumRange<number>) {
		this._num_participants_needed = value;
	}

	/**
	 * Setter needInternet
	 * @param {boolean} value
	 */
	public set needInternet(value: boolean) {
		this._needInternet = value;
	}

	/**
	 * Setter isProductive
	 * @param {boolean} value
	 */
	public set isProductive(value: YesNoCheckbox) {
		this._isProductive = value;
	}

	/**
	 * Setter enjoyment_level
	 * @param {number} value
	 */
	public set enjoyment_level(value: EnjoymentLevel) {
		this._enjoyment_level = value;
	}

	public toString(): string {
		const required_focuses =
			this.required_focuses
				.map(device => ToCase.titleCase(device))

		const required_devices =
			this.required_devices
				.map(device => ToCase.titleCase(device));

		const required_string =
			required_focuses.length > 0 && required_devices.length > 0 ?
			`Requires ` + [...required_focuses, ...required_devices].join(", ") + "\n" :
			"";

		const description_string = this.description !== "" ? ` (${this.description})` : "";

		return (
			this.name + description_string + ` at ${ToCase.titleCase(this.required_place)}\n` +
			`Takes ${ this.duration_range.toString() }` + "\n" +
			required_string +
			`Needs ${this.num_participants_needed.toString("participants")}` + "\n" +
			(this.needInternet ? ("Internet Required\n") : ("")) +
			(this.isProductive === YesNoCheckbox.Yes ? ("Is Productive\n") : ("")) +
			`${this.enjoyment_level}/10 Enjoyment` + "\n"
		);
	}
}