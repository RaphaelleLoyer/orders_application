(function() {
    
    var app = angular.module('app', ['ngRoute','ui.bootstrap','LocalStorageModule']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                resolve: {
                    "check": function($location,localStorageService, $log){
                        if(!localStorageService.get('token')){
                            $location.path('/login');                    
                        }
                    }
                },
                controller: 'HomeController',
                templateUrl: 'app/views/home.html'
            })
            .when('/allcustomers', {
                resolve: {
                    "check": function($location,localStorageService){
                        if(!localStorageService.get('token')){
                            $location.path('/login');
                        }
                    
                    }
                },
                controller: 'AllCustomersController',
                templateUrl: 'app/views/allcustomers.html'
            })
            .when('/allorders', {
                resolve: {
                    "check": function($location,localStorageService){
                        if(!localStorageService.get('token')){
                            $location.path('/login');
                        }
                    
                    }
                },
                controller: 'AllOrdersController',
                templateUrl: 'app/views/allorders.html'
            })
            .when('/allproducts', {
                resolve: {
                    "check": function($location,localStorageService){
                        if(!localStorageService.get('token')){
                            $location.path('/login');
                        }
                    
                    }
                },
                controller: 'AllProductsController',
                templateUrl: 'app/views/allproducts.html'
            })
            .when('/categories', {
                resolve: {
                    "check": function($location, localStorageService){
                        if(!localStorageService.get('token')){
                            $location.path('/login');
                        }
                    
                    }
                },
                controller: 'CategoriesController',
                templateUrl: 'app/views/categories.html'
            })
            .when('/category/:category', {
                resolve: {
                    "check": function($location, localStorageService){
                        if(!localStorageService.get('token')){
                            $location.path('/login');
                        }
                    
                    }
                },
                controller: 'CategoryController',
                templateUrl: 'app/views/category.html'
            })
            .when('/customers/:customerId', {
                resolve: {
                    "check": function($location, localStorageService){
                        if(!localStorageService.get('token')){
                            $location.path('/login');
                        }
                    
                    }
                },
                controller: 'CustomerController',
                templateUrl: 'app/views/customer.html'
            })
            .when('/orders/:orderId', {
                resolve: {
                    "check": function($location, localStorageService){
                        if(!localStorageService.get('token')){
                            $location.path('/login');
                        }
                    
                    }
                },
                controller: 'OrderController',
                templateUrl: 'app/views/order.html'
            }) 
            .when('/login', {
                controller: 'LoginController',
                templateUrl: 'app/views/login.html'
            })
            .when('/signup', {
                controller: 'SignupController',
                templateUrl: 'app/views/signup.html'
            })
            .otherwise( { redirectTo: '/' } );     
    });
    
    
}());