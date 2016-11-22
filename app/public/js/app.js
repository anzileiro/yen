'use strict'

//http://localhost:7000/v1/product/ -> GET
//http://localhost:7000/v1/product/ -> POST
//http://localhost:7000/v1/session/verify -> POST

var yenApp = angular.module('yenApp', [])

yenApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true
    delete $httpProvider.defaults.headers.common['X-Requested-With']
}])

yenApp.controller('indexController', function($scope, $http) {

    $scope.getToken = function() {
        $http.get('http://localhost:8000/v1/token').then(function(_result) {
            $scope.token = _result.data.result.token
            $scope.expiration = _result.data.result.expiration
        })
    }

    $scope.getProducts = function() {

        if ($scope.token) {
            $http({
                method: 'POST',
                url: 'http://localhost:8000/v1/token',
                data: {
                    token: $scope.token
                },
                headers: {
                    'Content-Type': 'application/json'
                    //'Token': $scope.token
                }
            }).success(function(_result) {

                if (_result.code === 200) {

                    $http.get('http://localhost:7000/v1/product').then(function(_result) {
                        $scope.products = _result.data.result
                    })

                }

            }).error(function(_error) {

                if (_error.code === 403) {
                    $scope.token = null
                    $scope.expiration = null
                    $scope.products = null
                }

            })
        } else {
            console.log('you should generate a token')
        }

    }
})
