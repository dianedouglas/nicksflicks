nicksFlicks.factory('ReviewsFactory', function ReviewsFactory() {
    var factory = {};

    factory.reviews = [
        { title: "Hackers is the best movie ever!", reviewBody: "Here is where a description of the review goes."},
        { title: "Thor: 5 stars!", reviewBody: "Lorem ipsum etc."},
        { title: "No one cares about the new Star Wars.", reviewBody: "Seriously Disney. No one cares."},
        { title: "Riddick movies are underrated", reviewBody: "No one believes me, but you know..."}
    ];

    return factory;
});
