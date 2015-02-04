'use strict';

angular.module('sgfwebdevstestapp', ["ngRoute", "ngResource"]);

angular.module('sgfwebdevstestapp').config(function ($routeProvider) {
    $routeProvider.
        when('/colors', {
            templateUrl: 'templates/color-list.html',
            controller: 'ColorListController'
        }).
        when('/colors/:colorId', {
            templateUrl: 'templates/edit-color.html',
            controller: 'EditColorController'
        }).
        otherwise({
            redirectTo: '/colors'
        });
});

