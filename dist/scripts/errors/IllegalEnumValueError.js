export class IllegalEnumValueError extends Error {
    constructor(enum_obj, invalid_enum_value) {
        super(`Invalid value for enumerator: "${invalid_enum_value}"` + "\n" +
            `Possible values "${Object.values(enum_obj).join(", ")}"`);
        this.enum_obj = enum_obj;
        this.invalid_enum_value = invalid_enum_value;
    }
}
//# sourceMappingURL=IllegalEnumValueError.js.map