module.exports = function(lineman) {
  return {
    js: {
      vendor: [
        "vendor/js/**/*.js"
      ],
      app: [
        "app/js/app.js",
        "app/js/**/*.js"
      ]
    }
  };
};
