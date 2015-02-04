'use strict';

angular.module('sgfwebdevstestapp', []);

angular.module('sgfwebdevstestapp').filter('universe', function(){
    return function(input) {
        return input + ", World!!";
    };
});