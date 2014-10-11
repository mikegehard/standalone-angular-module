var someDirectives = angular.module("someDirectives", []);

someDirectives.directive('myCustomDirective', function() {
        return {
            restrict: 'E',
            template: 'Text from a custom directive!!!'
        };
    });