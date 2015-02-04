angular.module('sgfwebdevstestapp').directive('sortColorListSelector', function () {
    return {
        restrict: "AEC",
        replace: false,
        templateUrl: '/templates/sortColorListSelector_Template.html?r=' + Math.random()
    };
});


angular.module('sgfwebdevstestapp').directive('addColorToList', function () {
    return {
        restrict: "AEC",
        replace: false,
        scope: {
            addColorCallback: "&"
        },
        templateUrl: '/templates/addColorToList_Template.html?r=' + Math.random(),
        link: function (scope, element, attrs) {
            scope.clickAddColor = function(){
                scope.addColorCallback({name: scope.color.name, hex: scope.color.hex});
            }
        }
    };
});
