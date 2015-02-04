angular.module("sgfwebdevstestapp").controller("ColorController", function($scope, reverseFilter, ColorService){

    $scope.colorList = ColorService.getColorList();
    $scope.selectedOrderByField = "name";
    $scope.reversedColorList = reverseFilter($scope.colorList);

    $scope.displayPanel = "list";

    $scope.addColorToList = function(colorName, colorHex){
        ColorService.addColor(colorName, colorHex);
    }

    $scope.deleteColor = function(color){
        ColorService.deleteColor(color.name);
    }

    $scope.editColor = function(color){
        $scope.selectedColor = color;
        $scope.displayPanel = "edit";
    }

    $scope.displayList = function(){
        $scope.displayPanel = "list";
    }

});