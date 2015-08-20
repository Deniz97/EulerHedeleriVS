var app = angular.module("EulerApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
		.when("/", {
		    controller: "HomePageController",
		    templateUrl: "views/HomePage.html"
		})
        .when("/problems/:problemId", {
            controller: "ProblemController",
            templateUrl: "views/problems.html"
        })
        .otherwise({
            redirectTo: "/"
        });
});