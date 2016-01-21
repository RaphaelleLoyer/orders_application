(function () {

    var AllCustomersController = function ($scope, $log, $location, commonFactory) {

        $scope.sortBy = 'lastname';
        $scope.reverse = false;
        $scope.customers = [];
        $scope.customerToAdd = {};

        function init() {

            commonFactory.getCustomers()
                .success(function (customers) {
                    $scope.customers = customers;
                    $log.log('Customers successfully retrieved inside AllCustomers');
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log('Customers not retrieved');
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
        
        //Go to customer webpage
        $scope.goCustomer = function (customerId) {
            $location.url('/customers/' + customerId);
        };
        
        //delete Customer to database using commonFactory factory
        $scope.deleteCustomer = function (e,customerId) {
            e.stopPropagation();
            $log.log('Customer id: ' + customerId);
            commonFactory.deleteCustomer(customerId)
                .success(function (status) {
                    if (status) {
                        for (var i=0,len=$scope.customers.length;i<len;i++){
                            if($scope.customers[i].id === customerId){
                                $scope.customers.splice(i,1);
                                break;
                            }
                        }
                    }
                })
                .error(function (data, status, headers, config) {
                        $log.log('Customer not deleted');
                });
                init();
        };

        //addCustomer to database using commonFactory factory
        $scope.addCustomer = function() {
            $scope.customerToAdd.date = new Date($scope.myDate);
            commonFactory.addCustomer(this.customerToAdd)
                .success(function (status) {
                    if (status) {
                        clearFields();
                        init();
                    }
            })
            .error(function (data, status, headers, config) {
                    $log.log('Customer not added');
            });
        };
        
        //clear input fields after submission of the form
        function clearFields() {
            $scope.customerToAdd = null;
            $scope.myDate = null;
        }

    };


    AllCustomersController.$inject = ['$scope', '$log', '$location', 'commonFactory'];
    angular.module('app').controller('AllCustomersController', AllCustomersController);

}());
