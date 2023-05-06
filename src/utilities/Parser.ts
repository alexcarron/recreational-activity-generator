import { IllegalInputError }  from '../errors/IllegalInputError.js'

export const Parser = {
	parseBooleanFromStr: function parseBooleanFromStr(string: string, true_value: string, false_value: string): boolean {
		let boolean: boolean;

		switch (string) {
			case true_value:
				boolean = true;
				break;

			case false_value:
				boolean = false;
				break;

			default:
				throw new IllegalInputError(string, "Invalid string value for boolean");
		}

		return boolean;
	},

	parseStrFromBoolean: function parseStrFromBoolean(boolean_value: boolean, true_value: string, false_value: string): string {
		let string_value: string;

		if (boolean_value) {
			string_value = true_value;
		}
		else {
			string_value = false_value;
		}

		return string_value;
	},

	parseStrFromNumber: function parseStrFromBoolean(number_value: number): string {
		let string_value: string = number_value.toString();
		return string_value;
	},
}