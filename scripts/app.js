(function () {
    var app = angular.module('app', []);

    app.controller("SaludoController", function () {
        this.username = '';
        this.mensaje = '';
        this.saludar = function () {
            this.mensaje = 'Hello ' + this.username + '!';
        };
    });
    
    
    app.controller("Otro",function ($scope) {
        $scope.name='';
        $scope.telf='';


    })

    app.controller("peticionesGET",['$scope','$http','$templateCache', function ($scope, $http, $templateCache) {
        $scope.method='GET';
        $scope.url='index.html'

        $scope.fetch= function () {
            $scope.code=null;
            $scope.response=null;
            $http({method:$scope.method,url:$scope.url,cache:$templateCache})
                .success(function (data,status) {
                    $scope.status=status;
                    $scope.data=data;
                })
                .error(function (data, status) {
                    $scope.status=status;
                    $scope.data=data || "Request failed";
                });

            $scope.updateModel = function(method, url) {
                $scope.method = method;
                $scope.url = url;
            };
        }

    }]);






})();