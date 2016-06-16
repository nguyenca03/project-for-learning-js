var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$timeout', function($scope, $filter, $timeout) {
    
    $scope.abc = '';
    
    $scope.lowercasehandle = function() {
        return $filter('lowercase')($scope.abc);
    };
    
    $scope.$watch('abc', function(newValue, oldValue) {
        
        console.info('Changed!');
        console.log('Old:' + oldValue);
        console.log('New:' + newValue);
        
    });
    
     $timeout(function() {
        $scope.abc = 'newtwitterhandle';
        console.log('Scope changed!');    
     }, 3000);
    
}]);
//edit update
