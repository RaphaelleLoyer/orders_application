(function () {
    
    var AllProductsController = function ($scope, $log, commonFactory) {
        $scope.customers = [];
        $scope.orders = [];
        $scope.products = [];
        $scope.categories = [];
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $scope.sizes = [];
        $scope.productToAdd = {};

        
        function init() {
           
            commonFactory.getCustomers()
                .success(function (customers) {
                    $scope.customers = customers;
                    $log.log('Customers successfully retrieved');
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log('Customers not retrieved');
                });
            
            commonFactory.getOrders()
                .success(function (orders) {
                    $scope.orders = orders;
                    $log.log('Orders successfully retrieved');
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log('Orders not retrieved');
                });
            
            commonFactory.getProducts()
                .success(function (products) {
                    $scope.products = products;
                    $log.log('Products successfully retrieved');
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log('Products not retrieved');
                });
            
            commonFactory.getCategories()
                .success(function (categories) {
                    $scope.categories = categories;
                    $log.log('Categories successfully retrieved');
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log('Categories not retrieved');
                });
            
            commonFactory.getSizes()
                .success(function (sizes) {
                    $scope.sizes = sizes;
                    $log.log('Sizes successfully retrieved');
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log('Sizes not retrieved');
                });

        }
        
        init();
        
        //updating filter
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        
        //delete product to database using factory
        $scope.deleteProduct = function (productId) {
            commonFactory.deleteProduct(productId)
                .success(function (status) {
                    if (status) {
                        init();
                    }
                
                })
                .error(function (data, status, headers, config) {
                        $log.log('Product not deleted');
                });
        };
        
        //add product to database using factory
        $scope.addProduct = function() {
            commonFactory.addProduct(this.productToAdd)
                .success(function (status) {
                    if (status) {
                        clearFields();
                        init();
                    }
                     
                })
                .error(function (data, status, headers, config) {
                        $log.log('Product not added');
                });
        };
        
        //clear input fields after submission of the form
        function clearFields() {
            $scope.productToAdd = null;
        }
                 
    };
    
    
    AllProductsController.$inject = ['$scope', '$log', 'commonFactory'];
    angular.module('app').controller('AllProductsController', AllProductsController);

}());