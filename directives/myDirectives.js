nicksFlicks.directive("changeMode", function() {
    return function(scope, element) {
        element.bind("click", function() {
            element.parent().parent().parent().toggleClass("night");
            element.parent().parent().parent().toggleClass("day");
        });
    }
});
