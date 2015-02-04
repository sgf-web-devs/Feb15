
angular.module('sgfwebdevstestapp').filter('universe', function(){
    return function(input) {
        return input + ", World!!";
    };
});


angular.module('sgfwebdevstestapp').filter('reverse', function() {
    return function(input) {
        return input.slice().reverse();
    }
});

