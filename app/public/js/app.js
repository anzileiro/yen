'use strict'

//http://localhost:7000/v1/product/ -> GET
//http://localhost:7000/v1/product/ -> POST

var yenApp = angular.module('yenApp', [])

yenApp.controller('indexController', function($scope, $http) {
    $http({
        method: 'GET',
        url: 'http://localhost:7000/v1/product'
    }).then(function(_products) {
        console.log(_products)
        //$scope.products = _products
    })
})
