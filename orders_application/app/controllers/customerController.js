(function () {
    
    var CustomerController = function ($scope, $log, $routeParams, commonFactory) {
        
        var customerId = $routeParams.customerId;
        
        function init() {
           
                commonFactory.getCustomer(customerId)
                    .success(function (customer) {
                        $scope.customer = customer;
                        $log.log('Customer successfully retrieved');
                    })
                    .error(function (data, status, headers, config) {
                        //handle error
                        $log.log('Customer not retrieved');
                    });   
        }
        
        init();
    };
    
    
    CustomerController.$inject = ['$scope', '$log', '$routeParams', 'commonFactory'];
    angular.module('app').controller('CustomerController', CustomerController);

}());