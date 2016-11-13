(function () {
    'use strict';

    angular.module('data')
        .component('categoriesComponent', {
            templateUrl: 'src/component/categories.component.html',
            bindings: {
                categories: '<'
            }
            });
})();