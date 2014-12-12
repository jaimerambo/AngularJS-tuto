var apps=angular.module('apps',[]);

function AlumnosController($scope){
    $scope.alumnos=[
        {nombre:"Jaime",telefono:"3" ,curso:"9"},
        {nombre:"Gaby",telefono:"1" ,curso:"9"},
        {nombre:"Sergio",telefono:"4" ,curso:"9"},
        {nombre:"Alexis",telefono:"2" ,curso:"9"}
    ]

}