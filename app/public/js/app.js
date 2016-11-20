'use strict'

var yenApp = angular.module('yenApp', ['ngRoute'])

yenApp.config(function($routeProvider) {
    $routeProvider
        .when('/docs', {
            templateUrl: '/docs',
            controller: 'docsController'
        })
        .when('/products', {
            templateUrl: '/products',
            controller: 'productsController'
        })
})

yenApp.controller('indexController', function($scope) {

})
