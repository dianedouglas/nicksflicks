nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory) {
    $scope.reviews = ReviewsFactory.reviews;
    $scope.ReviewsFactory = ReviewsFactory;
    $scope.currentReview = ReviewsFactory.findById($stateParams.reviewId);
});
