'use strict'

//http://localhost:7000/v1/product/ -> GET
//http://localhost:7000/v1/product/ -> POST

var yenApp = angular.module('yenApp', [])

yenApp.config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true
    delete $httpProvider.defaults.headers.common['X-Requested-With']
}])

yenApp.controller('indexController', function ($scope, $http) {

    $scope.products = {}

    $scope.getToken = function () {
        $http.get('http://localhost:8000/v1/token').then(function (_result) {
            $scope.token = _result.data.result.token
            $scope.expiration = _result.data.result.expiration
        })
    }

    $scope.getProducts = function () {

        $http({
            method: 'POST',
            url: 'http://localhost:8000/v1/token',
            data: { token: $scope.token },
            headers: { 'Content-Type': 'application/json' }
        }).then(function (_result) {
            console.log(_result.data.result)
        })

        // $http.post('http://localhost:8000/v1/token', { token: $scope.token }).then(function (_result) {
        //     console.log(_result.data.result)
        // })

        // $http.get('http://localhost:7000/v1/product').then(function (_result) {
        //     $scope.products = _result.data.result
        // })
    }

})
