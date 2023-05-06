import { Validator }  from './Validator.js'
import readline_sync from 'readline-sync';
import { IllegalInputError } from '../errors/IllegalInputError.js';
import { UnitOfTime, getEnumFromValue, Focus } from '../types/enums.js';
import { Duration }  from '../classes/Duration.js'
import { Parser } from './Parser.js';
import { NumRange }  from '../classes/NumRange.js'



export const Input = {

	getValidInput: function getValidInput<InputType>(prompt: string, validatorFunction: Function, stringParser: Function) {
		let input: string = "";
		let valid_input: InputType;
		let isValidInput: boolean = false;

		while (!isValidInput) {
			try {
				input = readline_sync.question("\n" + prompt);
				validatorFunction(input);
				isValidInput = true;
			}
			catch (error: any) {
				console.log(error.message);
			}
		}
		valid_input = stringParser(input);

		return valid_input;
	},

	getString: function getString(prompt: string): string {
		const input: string = readline_sync.question("\n" + prompt);
		return input;
	},

	getInteger: function getInteger(prompt: string): number {
		return Input.getValidInput<number>(prompt, Validator.isStrAnInt, parseInt);
	},

	getBoolean: function getBoolean(prompt: string, true_value: string, false_value: string): boolean {
		let input: string = "";
		let valid_input: boolean;
		let isValidInput: boolean = false;

		while (!isValidInput) {
			try {
				input = readline_sync.question("\n" + prompt);
				Validator.isStrABoolean(input, true_value, false_value);
				isValidInput = true;
			}
			catch (error: any) {
				console.log(error.message);
			}
		}
		valid_input = Parser.parseBooleanFromStr(input, true_value, false_value);

		return valid_input;
	},

	getDuration: function getDuration(prompt: string): Duration {
		const input: string = readline_sync.question("\n" + prompt);
		const inputs: string[] = input.split(" ");

		if (inputs.length !== 2) {
			throw new IllegalInputError(input, `Your input must have one space, but there's ${inputs.length-1}`);
		}

		const amount_input: string = inputs[0];
		Validator.isStrAnInt(amount_input)
		const amount: number = parseInt(amount_input);

		const unit_of_time_input: string = inputs[1];
		const unit_of_time: UnitOfTime = getEnumFromValue(UnitOfTime, unit_of_time_input);

		const duration = new Duration(amount, unit_of_time);
		return duration;
	},

	getDurationRange: function getDurationRange(min_prompt: string, max_prompt: string): NumRange<Duration> {
		const min_duraiton: Duration = Input.getDuration(min_prompt);
		const max_duraiton: Duration = Input.getDuration(max_prompt);

		if (!max_duraiton.isLargerThanDuration(min_duraiton)) {
			throw new IllegalInputError(max_duraiton.toString(), "Maximum duration must be larger than the minimum duration");
		}

		const duration_range: NumRange<Duration> = new NumRange(min_duraiton, max_duraiton);

		return duration_range;
	},

	getIntRange: function getRange(min_prompt: string, max_prompt: string): NumRange<number> {
		const min: number = Input.getInteger(min_prompt)
		const max: number = Input.getInteger(max_prompt);

		const duration_range: NumRange<number> = new NumRange(min, max);

		return duration_range;
	},

	getFocus: function getFocus(prompt: string): Focus {
		const focus_value_input = Input.getString(prompt);
		const focus = getEnumFromValue(Focus, focus_value_input);
		return focus;
	},

	getEnumValue: function getEnumIndentifier(enum_obj: object, prompt: string): any {
		let enum_value: any;
		let recievedValidInput: boolean = false;

		while (!recievedValidInput) {
			try {
				const enum_value_input = Input.getString(prompt);

				Validator.isEnumValueInEnum(enum_obj, enum_value_input);

				enum_value = getEnumFromValue(enum_obj, enum_value_input);

				recievedValidInput = true;
			}
			catch (error: any) {
				console.log(error.message);
			}
		}

		return enum_value;
	},

	getMultipleEnumInputs<InputType>(enum_obj: object, prompt: string, stop_input: string): InputType[] {
		let inputs: InputType[] = [];
		let isEnteringInputs: boolean = true;

		console.log(`\n\nPossible Values: "${Object.values(enum_obj).join(`", "`)}" `);

		while (isEnteringInputs) {
			let recievedValidInput: boolean = false;

			while (!recievedValidInput) {
				try {
					let input: string = Input.getString(`${prompt} (Enter "${stop_input}" when finished): `);

					if (input === stop_input) {
						isEnteringInputs = false;
					}
					else {
						Validator.isEnumValueInEnum(enum_obj, input);
						let enum_input: InputType = getEnumFromValue(enum_obj, input);
						inputs.push(enum_input);
					}

					recievedValidInput = true;
				}
				catch (error: any) {
					console.log(error.message);
				}
			}
		}

		return inputs;
	}
}