nicksFlicks.controller('ReviewsCtrl', function ReviewsCtrl($scope, $stateParams, ReviewsFactory) {
    $scope.reviews = ReviewsFactory.reviews;
    $scope.ReviewsFactory = ReviewsFactory;
    $scope.currentReview = ReviewsFactory.findById($stateParams.reviewId);

    $scope.addReview = function () {
        $scope.reviews.push({ title: $scope.newReviewTitle, reviewBody: $scope.newReviewBody, id: $scope.reviews.length });
        $scope.newReviewTitle = null;
        $scope.newReviewBody = null;
    };

});
