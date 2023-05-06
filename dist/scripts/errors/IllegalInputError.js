export class IllegalInputError extends Error {
    constructor(invalid_input, message) {
        super(`${message}: "${invalid_input}"`);
        this.invalid_input = invalid_input;
        this.name = "IllegalInputError";
        this.invalid_input = invalid_input;
    }
}
//# sourceMappingURL=IllegalInputError.js.map