exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return {
      then: function (resolve) {
        setTimeout(function() {
          resolve(value);
        }, 10);

        return new Promise(resolve => resolve());
      }
    };
  },

  manipulateRemoteData: function(url) {
    return fetch(url).then(response =>
      response.text()
    ).then(text =>
      JSON.parse(text)
    ).then((data) =>
      data.people.map(obj => obj.name).sort()
    );
  }
};
