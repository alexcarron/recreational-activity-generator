import { IllegalEnumValueError }  from '../errors/IllegalEnumValueError.js'
import { IllegalIntegerInputError }  from '../errors/IllegalIntergerInputError.js'
import { IllegalInputError } from '../errors/IllegalInputError.js';

export const Validator = {
	isStrAnInt: (string_value: string) => {
		console.log({string_value});
		try {
			parseInt(string_value);
		} catch (error) {
			throw new IllegalIntegerInputError(string_value);
		}
	},

	isStrABoolean: (string_value: string, true_value: string, false_value: string) => {
		if ( ![true_value, false_value].includes(string_value) ) {
			throw new IllegalInputError(string_value, "Invalid stirng value for boolean");
		}
	},

	isEnumValueInEnum: function isEnumValueInEnum(enum_obj: object, enum_value: any) {
		if ( !Object.values(enum_obj).includes(enum_value) )
			throw new IllegalEnumValueError(enum_obj, enum_value);
	},
}