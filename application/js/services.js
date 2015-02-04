angular.module('sgfwebdevstestapp').factory('ColorService', function($resource, $rootScope) {

    var Color = $resource('http://localhost:1337/color/:id', {id:'@id'}, {'query': {method: 'GET', isArray: true, cache: false }});

    function onColorListUpdated(){
        $rootScope.$broadcast('colorListUpdated');
    }


    return {
       getColorList: function(){
           return Color.query();
       },

       getColor: function(colorId){
           return Color.get({id:colorId});
       },

       deleteColor: function(colorId){
           Color.get({id:colorId}, function(retrievedColor) {
               retrievedColor.$delete(onColorListUpdated);
           });
       },

       addColor: function(colorName, colorHex) {
           var color = new Color();
           color.name = colorName;
           color.hex = colorHex;
           color.$save(onColorListUpdated);
       },

        saveColor: function(color){
            color.$save(onColorListUpdated);
        }

    };
});
