angular.module("hostApp").run(["$templateCache", function($templateCache) {

  $templateCache.put("home.html",
    "{{message}}"
  );

}]);
