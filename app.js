var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });

});
