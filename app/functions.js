exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn(...arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return (str2) => `${str}, ${str2}`
  },

  makeClosures: function(arr, fn) {
    return arr.map(num => () => fn(num));
  },

  partial: function(fn, str1, str2) {
    return (str3) => fn(str1, str2, str3)
  },

  useArguments: function() {
    return Array.from(arguments).reduce((sum, num) => sum + num, 0);
  },

  callIt: function(fn) {
    fn.apply(null, Array.from(arguments).slice(1));
  },

  partialUsingArguments: function(fn) {
    const args = Array.from(arguments).slice(1);

    return (...moreArgs) => {
      return fn.apply(null, [...args, ...moreArgs]);
    }
  },

  curryIt: function(fn) {
    return a => b => c => fn(a, b, c)
  }
};
