import { IllegalEnumValueError } from '../errors/IllegalEnumValueError.js';
import { IllegalIntegerInputError } from '../errors/IllegalIntergerInputError.js';
import { IllegalInputError } from '../errors/IllegalInputError.js';
export const Validator = {
    isStrAnInt: (string_value) => {
        console.log({ string_value });
        try {
            parseInt(string_value);
        }
        catch (error) {
            throw new IllegalIntegerInputError(string_value);
        }
    },
    isStrABoolean: (string_value, true_value, false_value) => {
        if (![true_value, false_value].includes(string_value)) {
            throw new IllegalInputError(string_value, "Invalid stirng value for boolean");
        }
    },
    isEnumValueInEnum: function isEnumValueInEnum(enum_obj, enum_value) {
        if (!Object.values(enum_obj).includes(enum_value))
            throw new IllegalEnumValueError(enum_obj, enum_value);
    },
};
//# sourceMappingURL=Validator.js.map