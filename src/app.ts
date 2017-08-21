/// <reference path="../typings/angularjs/angular.d.ts" />

(function() {
    'use strict';

    angular
        .module('app', [
            'ui.router'
        ])
        .config(function($stateProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/fourOfour');

            $stateProvider
                .state('fourOfour', {
                    url: '/fourOfour',
                    template: '<div class="alert alert-danger">Page not found</div>'
                })
                .state('page1', {
                    url: '/page1',
                    template: '<div class="alert alert-success">Page 1</div>'
                })
                .state('search', {
                    url: '/search',
                    templateUrl: 'states/search/search.html',
                    controller: 'searchController',
                    controllerAs: 'vm'
                })
                .state('details', {
                    url: '/details/:imdbId',
                    templateUrl: 'states/details/details.html',
                    controller: 'detailsController',
                    controllerAs: 'vm'
                });
        });

} ());