(function () {

    var commonFactory = function ($http, $log) {
        
        var factory = {};
        var baseUrl = 'http://localhost:3000/';
        
        //What should be used with a proper login system
        /*var getAuthorizationToken = function() {
            return btoa($rootScope.email + ':' +$rootScope.password);
        };*/
        
        //////////GET////////////
        factory.getCustomers = function () {
            return $http({
                method: 'GET',
                url: baseUrl + 'customers',
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.getCustomer = function (customerId) {
            return $http({
                method: 'GET',
                url: baseUrl + 'customers/' + customerId,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.getOrders = function () {
            return $http({
                method: 'GET',
                url: baseUrl + 'orders',
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.getOrder = function (orderId) {
            return $http({
                method: 'GET',
                url: baseUrl + 'orders/' + orderId,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.getProducts = function () {
            return $http({
                method: 'GET',
                url: baseUrl + 'products',
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.getCategories = function () {
            return $http({
                method: 'GET',
                url: baseUrl + 'categories',
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.getSizes = function () {
            return $http({
                method: 'GET',
                url: baseUrl + 'sizes',
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.getCustomerViaOrder = function (orderId) {
            return $http({
                method: 'GET',
                url: baseUrl + 'customers/order/' + orderId,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
         
        //////////DELETE////////////
        factory.deleteCustomer = function (customerId) {
            return $http({
                method: 'DELETE',
                url: baseUrl + 'customers/' + customerId,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.deleteProduct = function (productId) {
            return $http({
                method: 'DELETE',
                url: baseUrl + 'products/' + productId,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.deleteOrder = function (orderId) {
            return $http({
                method: 'DELETE',
                url: baseUrl + 'orders/' + orderId,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.deleteCategory = function (category) {
            return $http({
                method: 'DELETE',
                url: baseUrl + 'categories/' + category,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        
        //////////ADD////////////
        factory.addCustomer = function (customer) {
            return $http({
                method: 'POST',
                url: baseUrl + 'customers/add',
                data: customer,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.addProduct = function (product) {
            return $http({
                method: 'POST',
                url: baseUrl + 'products/add',
                data: product,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.addOrder = function (order,customerId) {
            $log.log('Order: '+ order.total + ' into customer : ' + customerId);
            order.customerId = customerId;
            return $http({
                method: 'POST',
                url: baseUrl + 'orders/add',
                data: order,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        factory.addCategory = function (category) {
            return $http({
                method: 'POST',
                url: baseUrl + 'categories/add',
                data: category,
                contentType: 'application/json',
                //headers: { Authorization: 'Basic ' +  getAuthorizationToken() },
            });
        };
        
        
        return factory;
    };
    
    commonFactory.$inject = ['$http', '$log'];
    
    angular.module('app').factory('commonFactory', commonFactory);
    
}());