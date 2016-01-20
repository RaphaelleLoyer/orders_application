(function () {
    
    var OrderController = function ($scope, $log, $routeParams, commonFactory) {
        
        var orderId = $routeParams.orderId;
        var order = [];
        var customer = [];
        
        function init() {
            
            commonFactory.getOrder(orderId)
                .success(function (order) {
                    $scope.order = order;
                    $log.log('Order successfully retrieved :' + orderId);
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log('Order not retrieved: ' + orderId);
                });
            
            commonFactory.getCustomerViaOrder(orderId)
                .success(function (customer) {
                    $scope.customer = customer;
                    $log.log('Customer successfully retrieved');
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log('Customer not retrieved with orderId: ' + orderId);
                });
        }  
    
        init();
        
    };
        
    OrderController.$inject = ['$scope', '$log', '$routeParams', 'commonFactory'];
    angular.module('app').controller('OrderController', OrderController);
    
}());
