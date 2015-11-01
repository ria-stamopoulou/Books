var myBooks = angular.module('myBooks', ['ui.grid', 'ngRoute']);

myBooks.config(function ($routeProvider) {
    $routeProvider
        .when('/',
            {
                controller: 'MainCtrl',
                templateUrl: 'views/gridBooks.html'
            }
        )
    .otherwise({ redirectTo: '/' });
});