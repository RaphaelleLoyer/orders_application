(function () {
    
    var LoginController = function ($scope, $log, $location, commonFactory, localStorageService) {
        
        //Log user
        $scope.submit = function(){
            if($scope.email && $scope.password){
                
               //What should be done when there is a login system in the server
               /*commonFactory.login()
                .success(function (user) {
                    //store the received token into localStorage
                    localStorageService.set('token', user.token);
                    $log.log('User successfully logged');
                    $location.path('/home'); 
                })
                .error(function (data, status, headers, config) {
                    $log.log('User not logged');
                    alert("Wrong email or password");
                    $location.path('/login');
                });*/
                
                //Since I havent configured a login system in my node server 
                //I simply add a token to the local storage, which will be used as proof of login and allow to refresh the app without having to login again
                var bt = (btoa($scope.email + $scope.password)).toString();
                if(localStorageService.isSupported) {
                    localStorageService.add('token', bt);
                    $location.path('/home');
                }else{
                    $log.log('localstorage not supported');  
                } 
                
            }else{
                alert("Please enter an email and password");
            }  
        };
  
    };
    
    LoginController.$inject = ['$scope', '$log', '$location', 'commonFactory', 'localStorageService'];
    angular.module('app').controller('LoginController', LoginController);
}());