exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    let timeout;

    const tick = () => {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(tick, 100);
      }
    }

    tick();

    return {
      cancel: () => {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
