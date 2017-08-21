(function () {
    'use strict';

    function searchController($scope, searchService) {
        var vm = this;
        
        vm.message = 'My first controller';

        vm.search = function () {
            vm.isLoading = true;
            searchService.search(vm.formContent)
                .then(function (data) {
                    vm.results = data;
                    vm.isLoading = false;
                });
        };
    }

    angular.module('app')
        .controller('searchController', searchController);
} ());