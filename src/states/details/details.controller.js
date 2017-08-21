(function () {
    'use strict';

    angular
        .module('app')
        .controller('detailsController', detailsController);

    detailsController.$inject = ['$stateParams', 'searchService'];
    function detailsController($stateParams, searchService) {
        var vm = this;


        activate();

        ////////////////

        function activate() {
            searchService.get($stateParams.imdbId)
                .then(function (data) {
                    vm.movie = data;
                    console.log(vm.movie);
                });
        }
    }
})();