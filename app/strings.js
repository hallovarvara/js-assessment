exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let letterRepeats = 0;

    return str.split('').reduce((result, letter) => {
      if (result.length === 0) {
        return letter;
      }

      const sameLetters = result[result.length - 1] === letter;

      letterRepeats = sameLetters ? letterRepeats + 1 : 0;

      return sameLetters && letterRepeats >= amount
        ? result : `${result}${letter}`;
    }, '');
  },

  wordWrap: function(str, cols) {
    const words = str.split(' ');
    let result = '';
    let columnLength = 0;

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      columnLength += word.length;

      if (i === 0) {
        result = word;
      } else if (columnLength > cols) {
        columnLength = word.length;
        result += `\n${word}`;
      } else {
        result += ` ${word}`;
      }
    }

    return result;
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
