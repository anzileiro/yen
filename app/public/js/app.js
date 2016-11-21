'use strict'

//http://localhost:7000/v1/product/ -> GET
//http://localhost:7000/v1/product/ -> POST

var yenApp = angular.module('yenApp', [])

yenApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true
    delete $httpProvider.defaults.headers.common['X-Requested-With']
}])

yenApp.controller('indexController', function ($scope, $http) {
    $http.get('http://localhost:7000/v1/product').then(function (_products) {
        console.log(_products)
        //$scope.products = _products
    })
})
