import { IllegalInputError } from './IllegalInputError.js';
export class IllegalIntegerInputError extends IllegalInputError {
    constructor(invalid_input) {
        super(invalid_input, "Your input must be in integer format");
        this.invalid_input = invalid_input;
    }
}
//# sourceMappingURL=IllegalIntergerInputError.js.map