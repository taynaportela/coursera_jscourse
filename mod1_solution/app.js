(function () {
'use strict';

angular.module('assignmentApp', [])

.controller('LunchCheckController', lunchController);

lunchController.inject = ['$scope'];
function lunchController($scope) {
    $scope.menuOptions = '';
    $scope.message = '';

    $scope.countItems = function (){
        let arrayOfOptions = $scope.menuOptions.split(',');
        let countOptions = 0;

        arrayOfOptions.forEach((option) =>{
            if (option != false)
                countOptions++;
        });

        if (countOptions > 0 && countOptions < 4) {
            $scope.message = "Enjoy!";
        } else if (countOptions > 4) {
            $scope.message = "Too much!";
        } else {
            $scope.message = "Please enter data first";
        }
    }
}
})();
