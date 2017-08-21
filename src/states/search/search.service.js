(function () {
    'use strict';

    function searchService($http, $q) {
        var url = 'http://www.omdbapi.com/';
        function search(searchString) {
            var defered = $q.defer();
            var config = {
                params: {
                    s: searchString
                }
            };
            $http.get(url, config)
                .then(function (data) {
                    var results = data.data.Search;
                    defered.resolve(results);
                })
                .catch(function (error) {
                    console.error(error);
                    defered.reject(error);
                });
            return defered.promise;
        }

        function get(imdbId) {
            var defered = $q.defer();
            var config = {
                params: {
                    i: imdbId
                }
            };

            $http.get(url, config)
                .then(function (data) {
                    var results = data.data;
                    defered.resolve(results);
                })
                .catch(function (error) {
                    console.error(error);
                    defered.reject(error);
                });

            return defered.promise;

        }

        return {
            search: search,
            get: get
        };
    }

    angular.module('app')
        .factory('searchService', searchService);
} ());