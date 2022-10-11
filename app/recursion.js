exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const files = [];
    const directories = [];

    function processDirectory(directory) {
      let directoryFiles = directory.files;

      directories.push( directory.dir );

      for (let i = 0; i < directoryFiles.length; i++) {
        const entity = directoryFiles[i];

        if (typeof entity === 'string') {
          if (!dirName || directories.indexOf(dirName) !== -1) {
            files.push(entity);
          }
        } else {
          processDirectory(entity);
        }
      }

      directories.pop();
    }

    processDirectory(data);

    return files;
  },

  permute: function(arr) {
    const arrayCopy = [...arr];
    const temporaryItems = [];
    const answer = [];

    function addAnswer() {
      answer.push(temporaryItems.slice());
    }

    function processArray() {
      let item;

      for (let i = 0; i < arrayCopy.length; i++) {
        item = arrayCopy.splice(i, 1)[0];
        temporaryItems.push(item);

        if (arrayCopy.length) {
          processArray();
        } else {
          addAnswer();
        }

        arrayCopy.splice(i, 0, item);
        temporaryItems.pop();
      }

      return answer;
    }

    return processArray();
  },

  fibonacci: function(n) {
    let previous = 0, next = 1;

    for(let i = 0; i < n; i++) {
      next += previous;
      previous = next - previous;
    }

    return previous;

    // recursion is possible, but it costs O(e^n) and grow exponentially
    // return n < 2 ? n : this.fibonacci(n - 1) + this.fibonacci(n - 2)
  },

  validParentheses: function(n) {
    if (n === 0) {
      return [''];
    }

    const result = [];

    for (let i = 0; i < n; ++i) {
      const lefts = this.validParentheses(i);
      const rights = this.validParentheses(n - i - 1);

      for (let l = 0; l < lefts.length; ++l) {
        for (let r = 0; r < rights.length; ++r) {
          result.push('(' + lefts[l] + ')' + rights[r]);
        }
      }
    }

    return result;
  }
};
