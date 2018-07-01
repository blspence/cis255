/* **************************************************************************
   * AUTHOR     : Brionna Spencer
   * ASSIGNMENT : cis255 - Program 07 - AngularJS
   * URL        : csis.svsu.edu/~blspence/cis255/program07/quad.js
   * OVERVIEW   : JavaScript for quad.html
   ************************************************************************** */

/* app: Quadratic Formula *****************************************************/
var qApp = angular.module('quadApp', []);
qApp.controller('quadCtrl', function($scope)
{
    /* Calculates result with the Quadratic Formula */
    $scope.calculate = function()
    {
        var a = $scope.a;
        var b = $scope.b;
        var c = $scope.c;

        var x1 = (-b + Math.sqrt(Math.pow(b, 2) - 4*a*c)) / (2*a);
        var x2 = (-b - Math.sqrt(Math.pow(b, 2) - 4*a*c)) / (2*a);

        if(x1 !== x1) /* if result is NaN */
        {
            $scope.x1 = "NaN";
        }
        else
        {
            $scope.x1 = parseFloat(x1.toFixed(2));
        }

        if(x2 !== x2) /* if result is NaN */
        {
            $scope.x2 = "NaN";
        }
        else
        {
            $scope.x2 = parseFloat(x2.toFixed(2));
        }
    };
    $scope.calculate();
});
