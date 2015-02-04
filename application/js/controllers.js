angular.module("sgfwebdevstestapp").controller("ColorController", function($scope, reverseFilter, ColorService){

    $scope.colorList = ColorService.getColorList();
    $scope.selectedOrderByField = "name";
    $scope.reversedColorList = reverseFilter($scope.colorList);

    $scope.addColorToList = function(colorName, colorHex){
        ColorService.addColor(colorName, colorHex);
    }

    $scope.deleteColor = function(color){
        ColorService.deleteColor(color.name);
    }
});