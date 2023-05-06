import { IllegalInputError }  from './IllegalInputError'

export class IllegalEnumValueError extends Error {
	constructor(
		public enum_obj: object,
		public invalid_enum_value: any,
	) {
		super(
			`Invalid value for enumerator: "${invalid_enum_value}"` + "\n" +
			`Possible values "${Object.values(enum_obj).join(", ")}"`
		);
	}
}