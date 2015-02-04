angular.module("sgfwebdevstestapp").controller("ColorListController", function($scope, $location, reverseFilter, ColorService){

    $scope.colorList = ColorService.getColorList();
    $scope.selectedOrderByField = "name";

    $scope.$on('colorListUpdated', function(event) {
        $scope.colorList = ColorService.getColorList();
    });

    $scope.addColorToList = function(colorName, colorHex){
        ColorService.addColor(colorName, colorHex);
    }

    $scope.deleteColor = function(color){
        ColorService.deleteColor(color.id);
    }

    $scope.editColor = function(color){
        $location.path("/colors/" + color.id);
    }

});

angular.module("sgfwebdevstestapp").controller("EditColorController", function($scope, $routeParams, $location, reverseFilter, ColorService){
    $scope.selectedColor = ColorService.getColor($routeParams.colorId);

    $scope.doneEditing = function(){
        ColorService.saveColor($scope.selectedColor);
        $location.path("/colors");
    }

});