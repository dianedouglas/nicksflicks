nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};

    factory.reviews = [
        { title: "Hackers is the best movie ever!", reviewBody: "Here is where a description of the review goes.", id: 0},
        { title: "Thor: 5 stars!", reviewBody: "Lorem ipsum etc.", id: 1},
        { title: "No one cares about the new Star Wars.", reviewBody: "Seriously Disney. No one cares.", id: 2},
        { title: "Riddick movies are underrated", reviewBody: "No one believes me, but you know...", id: 3}
    ];

    factory.findById = function(searchId) {
        for (var i = 0; i < factory.reviews.length; i++) {
            if (factory.reviews[i].id == searchId) {
                return factory.reviews[i];
            }
        }
    }

    return factory;
});
