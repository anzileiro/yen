'use strict'

var yenApp = angular.module('yenApp', ['ngRoute'])

yenApp.config(function($routeProvider) {
    $routeProvider
        .when('/docs', {
            templateUrl: '/docs',
            controller: 'docsController'
        })
})

yenApp.controller('indexController', function($scope) {
    $scope.message = 'Index'
})

yenApp.controller('docsController', function($scope) {
    $scope.message = 'Docs'
})
