exports = typeof window === 'undefined' ? global : window;

exports.flowControlAnswers = {
  fizzBuzz: function(num) {
    if (typeof num !== 'number' || Number.isNaN(num)) {
      return false;
    }

    const isDivisibleBy3 = num % 3 === 0;
    const isDivisibleBy5 = num % 5 === 0;

    if (isDivisibleBy3 && isDivisibleBy5) {
      return 'fizzbuzz';
    }

    if (isDivisibleBy3) {
      return 'fizz';
    }

    if (isDivisibleBy5) {
      return 'buzz';
    }

    return num;
  }
};
