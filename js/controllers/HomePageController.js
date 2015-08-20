app.controller("HomePageController", function ($scope) {

    

    $scope.arama = function () {
        $scope.aramaId = document.getElementById("aramaInput").value;
        window.location.href = '#/problems/' + $scope.aramaId;
    };

});