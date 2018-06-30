/* **************************************************************************
   * AUTHOR     : Brionna Spencer
   * ASSIGNMENT : cis255 - Program 07 - AngularJS
   * URL        : csis.svsu.edu/~blspence/cis255/program07/program07.js
   * OVERVIEW   : JavaScript for program07.html
   ************************************************************************** */

/* app: Temperature Conversion ************************************************/
var tApp = angular.module('tempApp', []);
tApp.controller('tempCtrl', function($scope)
{
    /* Converts fahrenheit to celsius; rounds result to 2 decimal places */
    $scope.convert = function()
    {
        $scope.celsius = ($scope.fahrenheit - 32) * (5/9);
    };
    $scope.convert();
});

/* app: Quadratic Formula *****************************************************/
// TODO

/* app: Cubic Formula *********************************************************/
// TODO
