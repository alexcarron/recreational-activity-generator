import { IllegalInputError } from '../errors/IllegalInputError.js';
export const Parser = {
    parseBooleanFromStr: function parseBooleanFromStr(string, true_value, false_value) {
        let boolean;
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
    parseStrFromBoolean: function parseStrFromBoolean(boolean_value, true_value, false_value) {
        let string_value;
        if (boolean_value) {
            string_value = true_value;
        }
        else {
            string_value = false_value;
        }
        return string_value;
    },
    parseStrFromNumber: function parseStrFromBoolean(number_value) {
        let string_value = number_value.toString();
        return string_value;
    },
};
//# sourceMappingURL=Parser.js.map