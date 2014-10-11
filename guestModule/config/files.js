module.exports = function(lineman) {
  return {
    js: {
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ]
    }
  };
};
