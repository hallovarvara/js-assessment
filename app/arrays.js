exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((sum, number) => sum + number, 0);
  },

  remove: function(arr, item) {
    return arr.filter(currentItem =>
      currentItem !== item
    );
  },

  removeWithoutCopy: function(arr, item) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    const newArr = [...arr];
    newArr.splice(index, 0, item);
    return newArr;
  },

  count: function(arr, item) {
    return arr.reduce((acc, currentItem) =>
        item === currentItem ? ++acc : acc,
      0
    )
  },

  duplicates: function(arr) {
    const resultObj = arr.reduce((result, item) => {
      result[item] = result[item] ? result[item] + 1 : 1;
      return result;
    }, {});


    return Object
      .entries(resultObj)
      .reduce((result, [key, value]) =>
          value > 1 ? [...result, +key] : result
        , []);
  },

  square: function(arr) {
    return arr.map(item => item ** 2)
  },

  findAllOccurrences: function(arr, target) {
    return arr.reduce((result, item, index) =>
        item === target ? [...result, index] : result
      , [])
  }
};
