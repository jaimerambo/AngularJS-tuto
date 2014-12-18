(function () {
    var app = angular.module('app', []);

    app.controller("SaludoController", function () {
        this.username = '';
        this.mensaje = '';
        this.saludar = function () {
            this.mensaje = 'Hello ' + this.username + '!';
        };
    });
})();