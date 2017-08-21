(function () {
    'use strict';

    function navbarDirective() {
        return {
            restrict: 'E',
            templateUrl: 'layout/navbar.html'
        }
    }
    
    angular.module('app')
        .directive('navBar', navbarDirective);
} ());