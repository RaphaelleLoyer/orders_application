(function () {
    
    var CategoriesController = function ($scope, $log, commonFactory) {
        $scope.categories = [];

        function init() {
            
            commonFactory.getCategories()
                .success(function (categories) {
                    $scope.categories = categories;
                    $log.log('Categories successfully retrieved from inside CategoriesController');
                })
                .error(function (data, status, headers, config) {
                    $log.log('Categories not retrieved');
                });
        
        }
        
        init();
                 
    };
    
    
    CategoriesController.$inject = ['$scope', '$log', 'commonFactory'];
    angular.module('app').controller('CategoriesController', CategoriesController);

}());