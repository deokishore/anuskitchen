//app.js

var PMApp = {};

var App = angular.module('PMApp', ['PMApp.filters', 'PMApp.services', 'PMApp.directives']);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', '$locationProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/layout',
            controller: LoginController
        });

        $routeProvider.when('/main', {
            templateUrl: 'main/layout',
            controller: MainController
        });

        $routeProvider.otherwise({redirectTo: '/login'});

    }]);

//Login validation. 
//!!!!!! ATTENTION !!!!!!!
//If session id is expired, $rootScope.SessionID should be set to null or empty string!!!
App.run(function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on("$routeChangeStart", function(event, next, current) {

        console.log("Routechanged sessionId="+$rootScope.SessionId);

        if ($rootScope.SessionId == '' || $rootScope.SessionId == null) {

            // no logged user, we should be going to #login
            if (next.templateUrl == "login/layout.html") {
                // already going to #login, no redirect needed
            } else {
                // not going to #login, we should redirect now
                $location.path("/login");
            }
        }
    });
});