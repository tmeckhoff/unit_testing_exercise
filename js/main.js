var app = angular.module("myApp", []);

app.controller('MathController', function ($scope) {
    $scope.numberOne = 1;
    $scope.numberTwo = 2;
    $scope.numberThree = 3;

    $scope.multiplyThese = function(){
        return $scope.numberOne * $scope.numberTwo * $scope.numberThree;
    }

    $scope.addThese = function(){
        return $scope.numberOne + $scope.numberTwo + $scope.numberThree;
    }

    $scope.subtractTwo = function(){
        return $scope.numberThree - $scope.numberOne;
    }
});


app.controller('StringController', function ($scope) {
    $scope.firstString = "Tara";
    $scope.secondString = "loves to";
    $scope.thirdString = "code";

    $scope.showOne = function(){
        return $scope.firstString;
    }

    $scope.combineThree = function(){
        return $scope.firstString + ' ' + $scope.secondString + ' ' + $scope.thirdString;
    }
});


app.controller('BooleanController', function ($scope) {
    $scope.firstValue = false;
    $scope.secondValue = true;

    $scope.showTrue = function(){
        return $scope.secondValue;
    }

    $scope.showFalse = function(){
        return $scope.firstValue;
    }

});