/* **************************************************************************
   * AUTHOR     : Brionna Spencer
   * ASSIGNMENT : cis255 - Program 07 - AngularJS
   * URL        : csis.svsu.edu/~blspence/cis255/program07/temp.js
   * OVERVIEW   : JavaScript for temp.html
   ************************************************************************** */

/* app: Temperature Conversion ************************************************/
var tApp = angular.module('tempApp', []);
tApp.controller('tempCtrl', function($scope)
{
    /* Converts fahrenheit to celsius; rounds result to 2 decimal places */
    $scope.convert = function()
    {
        var result = ($scope.fahrenheit - 32) * (5/9);
        $scope.celsius = parseFloat(result.toFixed(2));
    };
    $scope.convert();
});
