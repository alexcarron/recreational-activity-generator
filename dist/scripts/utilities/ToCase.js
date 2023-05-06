export const ToCase = {
    titleCase: function titleCase(string) {
        const the_words = string.toLowerCase().split(' ');
        for (let word_index in the_words) {
            const word = the_words[word_index];
            the_words[word_index] = word.charAt(0).toUpperCase() + word.slice(1);
        }
        return the_words.join(' ');
    }
};
//# sourceMappingURL=ToCase.js.map