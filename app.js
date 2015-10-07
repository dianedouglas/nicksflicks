var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        url: '',
        views: {
            'header': {
                templateUrl: "partials/header.html"
            },
            'body' : {
                templateUrl: "partials/welcome.html"
            }
        }
    });

    $stateProvider.state('reviews', {
        url: '/reviews',
        views: {
            'header': {
                templateUrl: "partials/header.html"
            },
            'body': {
                templateUrl: "partials/list.html",
                controller: "ReviewsCtrl"
            }
        }
    });

    $stateProvider.state('reviews.movies', {
        url: '/:reviewId',
        views: {
            'currentReview': {
                templateUrl: "partials/main.html",
                controller: "ReviewsCtrl"
            }
        }
    });

});
