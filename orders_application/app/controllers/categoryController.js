(function () {
    
    var CategoryController = function ($scope, $log, $routeParams, commonFactory) {
        $scope.category = $routeParams.category;
        var temp =[];
        $scope.products = [];
        $scope.sortBy = 'name';
        $scope.reverse = false;

        function init() {
            
            //Retrieve the products from a category in order to display them
            commonFactory.getProducts()
                .success(function (products) {
                    
                    temp = products;
                    $log.log('Products successfully retrieved from inside CategoryController');
                
                    for (var i=0,len=temp.length;i<len;i++){
                        if(temp[i].category === $scope.category){
                            $scope.products.push(temp[i]);
                        }
                    }   
                
                })
                .error(function (data, status, headers, config) {
                    $log.log('Products not retrieved');
                });
        
        }
        
        init();
        
        //updating filter
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
                 
    };
    
    
    CategoryController.$inject = ['$scope', '$log', '$routeParams', 'commonFactory'];
    angular.module('app').controller('CategoryController', CategoryController);

}());