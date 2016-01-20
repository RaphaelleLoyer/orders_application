(function () {
    
    var NavController = function ($scope, $log, commonFactory, $location, localStorageService) {
        $scope.categories = [];
        
        function init() {
            
            commonFactory.getCategories()
                .success(function (categories) {
                    $scope.categories = categories;
                    $log.log('Categories successfully retrieved from inside NavController');
                })
                .error(function (data, status, headers, config) {
                    //handle error
                    $log.log('Categories not retrieved');
                });

        }
        
        init();
        
        //hide navigation tabs when user not logged
        $scope.isHidden = function() {
            if(!localStorageService.get('token')){
                return true;
            }else{
                return false;
            }
        };
        
        //manage signout button -> go to login page
        $scope.signout = function(){
            localStorageService.remove('token');
            $location.path('/login');
        }
                 
    };
    
    
    NavController.$inject = ['$scope', '$log', 'commonFactory', '$location', 'localStorageService'];
    angular.module('app').controller('NavController', NavController);

}());