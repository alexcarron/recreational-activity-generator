import { Validator } from './Validator.js';
import readline_sync from 'readline-sync';
import { IllegalInputError } from '../errors/IllegalInputError.js';
import { UnitOfTime, getEnumFromValue, Focus } from '../types/enums.js';
import { Duration } from '../classes/Duration.js';
import { Parser } from './Parser.js';
import { NumRange } from '../classes/NumRange.js';
export const Input = {
    getValidInput: function getValidInput(prompt, validatorFunction, stringParser) {
        let input = "";
        let valid_input;
        let isValidInput = false;
        while (!isValidInput) {
            try {
                input = readline_sync.question("\n" + prompt);
                validatorFunction(input);
                isValidInput = true;
            }
            catch (error) {
                console.log(error.message);
            }
        }
        valid_input = stringParser(input);
        return valid_input;
    },
    getString: function getString(prompt) {
        const input = readline_sync.question("\n" + prompt);
        return input;
    },
    getInteger: function getInteger(prompt) {
        return Input.getValidInput(prompt, Validator.isStrAnInt, parseInt);
    },
    getBoolean: function getBoolean(prompt, true_value, false_value) {
        let input = "";
        let valid_input;
        let isValidInput = false;
        while (!isValidInput) {
            try {
                input = readline_sync.question("\n" + prompt);
                Validator.isStrABoolean(input, true_value, false_value);
                isValidInput = true;
            }
            catch (error) {
                console.log(error.message);
            }
        }
        valid_input = Parser.parseBooleanFromStr(input, true_value, false_value);
        return valid_input;
    },
    getDuration: function getDuration(prompt) {
        const input = readline_sync.question("\n" + prompt);
        const inputs = input.split(" ");
        if (inputs.length !== 2) {
            throw new IllegalInputError(input, `Your input must have one space, but there's ${inputs.length - 1}`);
        }
        const amount_input = inputs[0];
        Validator.isStrAnInt(amount_input);
        const amount = parseInt(amount_input);
        const unit_of_time_input = inputs[1];
        const unit_of_time = getEnumFromValue(UnitOfTime, unit_of_time_input);
        const duration = new Duration(amount, unit_of_time);
        return duration;
    },
    getDurationRange: function getDurationRange(min_prompt, max_prompt) {
        const min_duraiton = Input.getDuration(min_prompt);
        const max_duraiton = Input.getDuration(max_prompt);
        if (!max_duraiton.isLargerThanDuration(min_duraiton)) {
            throw new IllegalInputError(max_duraiton.toString(), "Maximum duration must be larger than the minimum duration");
        }
        const duration_range = new NumRange(min_duraiton, max_duraiton);
        return duration_range;
    },
    getIntRange: function getRange(min_prompt, max_prompt) {
        const min = Input.getInteger(min_prompt);
        const max = Input.getInteger(max_prompt);
        const duration_range = new NumRange(min, max);
        return duration_range;
    },
    getFocus: function getFocus(prompt) {
        const focus_value_input = Input.getString(prompt);
        const focus = getEnumFromValue(Focus, focus_value_input);
        return focus;
    },
    getEnumValue: function getEnumIndentifier(enum_obj, prompt) {
        let enum_value;
        let recievedValidInput = false;
        while (!recievedValidInput) {
            try {
                const enum_value_input = Input.getString(prompt);
                Validator.isEnumValueInEnum(enum_obj, enum_value_input);
                enum_value = getEnumFromValue(enum_obj, enum_value_input);
                recievedValidInput = true;
            }
            catch (error) {
                console.log(error.message);
            }
        }
        return enum_value;
    },
    getMultipleEnumInputs(enum_obj, prompt, stop_input) {
        let inputs = [];
        let isEnteringInputs = true;
        console.log(`\n\nPossible Values: "${Object.values(enum_obj).join(`", "`)}" `);
        while (isEnteringInputs) {
            let recievedValidInput = false;
            while (!recievedValidInput) {
                try {
                    let input = Input.getString(`${prompt} (Enter "${stop_input}" when finished): `);
                    if (input === stop_input) {
                        isEnteringInputs = false;
                    }
                    else {
                        Validator.isEnumValueInEnum(enum_obj, input);
                        let enum_input = getEnumFromValue(enum_obj, input);
                        inputs.push(enum_input);
                    }
                    recievedValidInput = true;
                }
                catch (error) {
                    console.log(error.message);
                }
            }
        }
        return inputs;
    }
};
//# sourceMappingURL=Input.js.map