(function () {
    'use strict';
    
    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to Home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // Set up UI states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'src/home.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/categories.html',
                controller: 'CategoriesController as menuCategories',
                resolve: {
                    categories: ['MenuDataService', function(MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('items', {
                url: '/items?category',
                templateUrl: 'src/items.html',
                controller: 'ItemsController as menuItems',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }],
                    category: ['$stateParams', function($stateParams) {
                        return $stateParams.category;
                    }]
                }
            });
    }


})();
