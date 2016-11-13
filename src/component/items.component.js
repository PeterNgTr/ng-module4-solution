(function() {
    'use strict';

    angular.module('MenuApp')
        .component('itemsComponent', {
            templateUrl: 'src/component/items.component.html',
            bindings: {
                items: '<'
            }
        });
})();