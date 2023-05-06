import { IllegalInputError }  from './IllegalInputError.js'

export class IllegalIntegerInputError extends IllegalInputError {
	constructor(
		public invalid_input: string,
	) {
		super(invalid_input, "Your input must be in integer format");
	}
}