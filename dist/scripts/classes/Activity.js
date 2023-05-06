import { YesNoCheckbox } from '../types/enums.js';
import { ToCase } from '../utilities/ToCase.js';
export class Activity {
    constructor({ name, description, duration_range, required_focuses, required_devices, num_participants_needed, needInternet, isProductive, enjoyment_level, required_place }) {
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
    get required_place() {
        return this._required_place;
    }
    /**
     * Setter required_place
     * @param {Place} value
     */
    set required_place(value) {
        this._required_place = value;
    }
    /**
     * Getter name
     * @return {string}
     */
    get name() {
        return this._name;
    }
    /**
     * Getter description
     * @return {string}
     */
    get description() {
        return this._description;
    }
    /**
     * Getter duration_range
     * @return {NumRange<IDuration>}
     */
    get duration_range() {
        return this._duration_range;
    }
    /**
     * Getter required_focuses
     * @return {Focus[]}
     */
    get required_focuses() {
        return this._required_focuses;
    }
    /**
     * Getter required_devices
     * @return {Item[]}
     */
    get required_devices() {
        return this._required_devices;
    }
    /**
     * Getter num_participants_needed
     * @return {NumRange<number>}
     */
    get num_participants_needed() {
        return this._num_participants_needed;
    }
    /**
     * Getter needInternet
     * @return {boolean}
     */
    get needInternet() {
        return this._needInternet;
    }
    /**
     * Getter isProductive
     * @return {boolean}
     */
    get isProductive() {
        return this._isProductive;
    }
    /**
     * Getter enjoyment_level
     * @return {number}
     */
    get enjoyment_level() {
        return this._enjoyment_level;
    }
    /**
     * Setter name
     * @param {string} value
     */
    set name(value) {
        this._name = value;
    }
    /**
     * Setter description
     * @param {string} value
     */
    set description(value) {
        this._description = value;
    }
    /**
     * Setter duration_range
     * @param {NumRange<IDuration>} value
     */
    set duration_range(value) {
        this._duration_range = value;
    }
    /**
     * Setter required_focuses
     * @param {Focus[]} value
     */
    set required_focuses(value) {
        this._required_focuses = value;
    }
    /**
     * Setter required_devices
     * @param {Item[]} value
     */
    set required_devices(value) {
        this._required_devices = value;
    }
    /**
     * Setter num_participants_needed
     * @param {NumRange<number>} value
     */
    set num_participants_needed(value) {
        this._num_participants_needed = value;
    }
    /**
     * Setter needInternet
     * @param {boolean} value
     */
    set needInternet(value) {
        this._needInternet = value;
    }
    /**
     * Setter isProductive
     * @param {boolean} value
     */
    set isProductive(value) {
        this._isProductive = value;
    }
    /**
     * Setter enjoyment_level
     * @param {number} value
     */
    set enjoyment_level(value) {
        this._enjoyment_level = value;
    }
    toString() {
        const required_focuses = this.required_focuses
            .map(device => ToCase.titleCase(device));
        const required_devices = this.required_devices
            .map(device => ToCase.titleCase(device));
        const required_string = required_focuses.length > 0 && required_devices.length > 0 ?
            `Requires ` + [...required_focuses, ...required_devices].join(", ") + "\n" :
            "";
        const description_string = this.description !== "" ? ` (${this.description})` : "";
        return (this.name + description_string + ` at ${ToCase.titleCase(this.required_place)}\n` +
            `Takes ${this.duration_range.toString()}` + "\n" +
            required_string +
            `Needs ${this.num_participants_needed.toString("participants")}` + "\n" +
            (this.needInternet ? ("Internet Required\n") : ("")) +
            (this.isProductive === YesNoCheckbox.Yes ? ("Is Productive\n") : ("")) +
            `${this.enjoyment_level}/10 Enjoyment` + "\n");
    }
}
//# sourceMappingURL=Activity.js.map