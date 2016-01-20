(function () {

    var AllOrdersController = function ($scope, $log, $location, commonFactory) {

        $scope.orders = [];
        $scope.sortBy = 'product';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.orderToAdd = {};
        $scope.customerId;

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
        }

        init();
        
        //initialize popup for date
        $scope.popup = {
          opened: false
        };
        
        //open popup for date
        $scope.open = function() {
          $scope.popup.opened = true;
        };
        
        //updating filter
        $scope.doSort = function (propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
        
        //display customer name in the tab
        $scope.getCustomerName = function (orderId) {
            $log.log('order id ' + orderId);
            for (var i=0,len=$scope.customers.length;i<len;i++) {
                if ($scope.customers[i].orders){
                    for(var j=0, lenn=$scope.customers[i].orders.length;j<lenn;j++){
                        if($scope.customers[i].orders[j].id === orderId){
                            return $scope.customers[i].firstname + " " + $scope.customers[i].lastname;
                        }
                    }
                }
            }
        };
        
        //go to the order web page
        $scope.goOrder = function (orderId) {
            $log.log('OrderId :' + orderId);
            $location.url('/orders/' + orderId);
        };
        
        //go to customer web page
        $scope.goCustomer = function (e,orderId) {
            e.stopPropagation();
            $log.log('OrderId :' + orderId);
            for (var i=0,len=$scope.customers.length;i<len;i++) {
                if ($scope.customers[i].orders){
                    for(var j=0, lenn=$scope.customers[i].orders.length;j<lenn;j++){
                        if($scope.customers[i].orders[j].id === orderId){
                            $scope.customerId = $scope.customers[i].id;
                        }
                    }
                }
            }
            $location.url('/customers/' + $scope.customerId);
        };
        
        
        //add an order to database using factory
        $scope.addOrder = function() {
            $log.log('Order: '+ $scope.orderToAdd.total + ' into customer : ' + $scope.customerId);
            $scope.orderToAdd.date = new Date($scope.myDate);
            commonFactory.addOrder(this.orderToAdd,this.customerId)
                .success(function (status) {
                    if (status) {
                        clearFields();
                        init();
                    }
                })
                .error(function (data, status, headers, config) {
                    $log.log('Order not added to customer:  ' + $scope.customerId);
                });
        };
        
        //delete an order to database using factory
        $scope.deleteOrder = function (e,orderId) {
            e.stopPropagation();
            commonFactory.deleteOrder(orderId)
                .success(function (status) {
                    if (status) {
                        init();
                    }
                })
                .error(function (data, status, headers, config) {
                    $log.log('Order not deleted: ' + this.orderId);
                });
        };
        
        //clear input fields after submission of the form
        function clearFields() {
            $scope.orderToAdd = null;
            $scope.myDate = null;
        }

    };


    AllOrdersController.$inject = ['$scope', '$log', '$location', 'commonFactory'];
    angular.module('app').controller('AllOrdersController', AllOrdersController);

}());
