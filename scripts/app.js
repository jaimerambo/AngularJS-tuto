var apps=angular.module('apps',[])


apps.controller('saludarController'['$scope', function ($scope) {
        $scope.userName='Jaime'
        $scope.salud=function(){
           $scope.greeting='Hello '+$scope.userName+'!';
        };
    }]);

apps.controller('MyController', ['$scope', function($scope) {
        $scope.username = 'World';

        $scope.sayHello = function() {
           return $scope.greeting = 'Hello ' + $scope.username + '!';
        };
    }]);