angular.module("sgfwebdevstestapp").controller("ColorListController", function($scope, $location, reverseFilter, ColorService){

    $scope.colorList = ColorService.getColorList();
    $scope.selectedOrderByField = "name";

    $scope.addColorToList = function(colorName, colorHex){
        ColorService.addColor(colorName, colorHex);
    }

    $scope.deleteColor = function(color){
        ColorService.deleteColor(color.name);
    }

    $scope.editColor = function(color){
        $location.path("/colors/" + color.name);
    }

});

angular.module("sgfwebdevstestapp").controller("EditColorController", function($scope, $routeParams, $location, reverseFilter, ColorService){
    $scope.selectedColor = ColorService.getColor($routeParams.colorName);

    $scope.doneEditing = function(){
        $location.path("/colors");
    }

});