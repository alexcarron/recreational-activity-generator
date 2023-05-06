export class IllegalInputError extends Error {
	constructor(
		public invalid_input: string,
		message: string
	) {
		super(`${message}: "${invalid_input}"`);
		this.name = "IllegalInputError";
		this.invalid_input = invalid_input;
	}
}

