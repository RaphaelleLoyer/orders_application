(function () {
    
    var SignupController = function ($scope, $log, $location, commonFactory, localStorageService) {
        
        //signup User
        $scope.submit = function(){
            if($scope.email && $scope.password){
                
                //What should be done with a signup system in the server
                /*var user = {"email": $scope.email, "password": $scope.password};
                commonFactory.createUser(user)
                    .success(function (user) {                    
                        $log.log('User successfully signed up');
                        localStorageService.set('token', user.token);
                        $location.path('/login');
                    })
                    .error(function (data, status, headers, config) {
                        $log.log('User not signed up');
                        alert("Error while registering");
                    });*/
                
                //Since there is no login system for now
                $location.path('/login');
                
            }else{
                alert("Please enter an email and password");
            }  
        };
  
    };
    
    SignupController.$inject = ['$scope', '$log', '$location', 'commonFactory', 'localStorageService'];
    angular.module('app').controller('SignupController', SignupController);
}());