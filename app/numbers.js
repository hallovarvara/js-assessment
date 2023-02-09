exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return 1 & (num >> (bit - 1));
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    const arr = [];

    for (let i = 7; i > -1; i--) {
      arr.push( num & (1 << i) ? 1 : 0 );
    }

    return arr.join('');
  },

  multiply: function(a, b) {
    const adjust = (num) => {
      if (num < 1) {
        const exponent = Math.floor( Math.log(num) * -1 );
        const multiplier = Math.pow(10, exponent);

        return {
          num: num * multiplier,
          multiplier: multiplier
        };
      }

      return { num, multiplier: 1 };
    }

    const newA = adjust(a);
    const newB = adjust(b);

    return (newA.num * newB.num) / (newA.multiplier * newB.multiplier);
  }
};
