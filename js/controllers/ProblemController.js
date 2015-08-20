app.controller("ProblemController", function ($scope,$routeParams,Solutions) {
    
    // problem stats
    $scope.currentProblem = $routeParams.problemId;
    $scope.description = Solutions[$routeParams.problemId].description;
    $scope.code = Solutions[$routeParams.problemId].code;
    $scope.answer = Solutions[$routeParams.problemId].answer;

    //toggle code
    //$scope.toggleCode = function () {
    //    var code = document.getElementsByClassName("code");
    //    var state = code[0[].style.display;
    //    if (state == "none")
    //        code[0].style.display = "block";
    //    else
    //        code[0].style.display = "none";
    //};

    $scope.toggleCode = function () {
        var code = document.getElementById("code");
        var state = document.getElementById("code").style.display;
        if (state == "block")
            code.style.display = "none";
        else
            code.style.display = "block";
    };
    

    //navigation
    $scope.nextProblem = parseInt($routeParams.problemId) + 1;
    if ($routeParams.problemId == 1)
        $scope.prevProblem = "#";
    else
        $scope.prevProblem = parseInt($routeParams.problemId) - 1;


});