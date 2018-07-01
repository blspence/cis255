/* **************************************************************************
   * AUTHOR     : Brionna Spencer
   * ASSIGNMENT : cis255 - Program 07 - AngularJS
   * URL        : csis.svsu.edu/~blspence/cis255/program07/cubic.js
   * OVERVIEW   : JavaScript for cubic.html
   ************************************************************************** */

/* function modified from this stackoverflow post: https://goo.gl/xrGzr1 */
function cuberoot(x)
{
    var y = Math.pow(Math.abs(x), 1/3);
    return Math.sign(x)*y;
}

/* function modified from this stackoverflow post: https://goo.gl/xrGzr1 */
function solveCubic(a, b, c, d)
{
    if(Math.abs(a) < 1e-8) /* Quadratic case: ax^2+bx+c=0 */
    {
        a = b;
        b = c;
        c = d;

        if (Math.abs(a) < 1e-8)  /* Linear case: ax+b=0 */
        {
            a = b;
            b = c;
            if(Math.abs(a) < 1e-8) /* Degenerate case */
            {
                return [];
            }
            else
            {
                return [-b/a];
            }
        }
        else
        {
            var D = b*b - 4*a*c;
            if(Math.abs(D) < 1e-8)
            {
                return [-b/(2*a)];
            }
            else if(D > 0)
            {
                return [(-b+Math.sqrt(D))/(2*a), (-b-Math.sqrt(D))/(2*a)];
            }
            else
            {
                return [];
            }
        }
    }
    else /* Convert to depressed cubic t^3 + pt + q = 0 (subst x = t - b/3a) */
    {
        var p = (3*a*c - b*b)/(3*a*a);
        var q = (2*b*b*b - 9*a*b*c + 27*a*a*d)/(27*a*a*a);
        var roots;

        if(Math.abs(p) < 1e-8) /* p = 0 -> t^3 = -q -> t = -q^1/3 */
        {
            roots = [cuberoot(-q)];
        }
        else if(Math.abs(q) < 1e-8) /* q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0 */
        {
            roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
        }
        else
        {
            var D = q*q/4 + p*p*p/27;

            if(Math.abs(D) < 1e-8) /* D = 0 -> two roots */
            {
                roots = [-1.5*q/p, 3*q/p];
            }
            else if(D > 0)
            {             // Only one real root
                var u = cuberoot(-q/2 - Math.sqrt(D));
                roots = [u - p/(3*u)];
            }
            /* D < 0, three roots, but needs to use complex numbers/trig solution */
            else
            {
                var u = 2*Math.sqrt(-p/3);

                /* D < 0 implies p < 0 and acos argument in [-1..1] */
                var t = Math.acos(3*q/p/u)/3;

                var k = 2*Math.PI/3;
                roots = [u*Math.cos(t), u*Math.cos(t-k), u*Math.cos(t-2*k)];
            }
        }

        /* Convert back from depressed cubic */
        for (var i = 0; i < roots.length; i++)
        {
            roots[i] -= b/(3*a);
        }

        return roots;
    }
}

/* app: Cubic Formula *****************************************************/
var cApp = angular.module('cubicApp', []);
cApp.controller('cubicCtrl', function($scope)
{
    /* Calculates result with the Cubic Formula */
    $scope.calculate = function()
    {
        var a = $scope.a;
        var b = $scope.b;
        var c = $scope.c;
        var d = $scope.d;

        roots = solveCubic(a, b, c, d);
        var x1 = roots[0];
        var x2 = roots[2];
        var x3 = roots[1];

        if((x1 !== x1) || (roots.length < 1)) /* if result is NaN */
        {
            $scope.x1 = "NaN";
        }
        else
        {
            $scope.x1 = x1;
        }

        if((x2 !== x2) || (roots.length < 2)) /* if result is NaN */
        {
            $scope.x2 = "NaN";
        }
        else
        {
            $scope.x2 = x2;
        }

        if((x3 !== x3) || (roots.length < 3)) /* if result is NaN */
        {
            $scope.x3 = "NaN";
        }
        else
        {
            $scope.x3 = x3;
        }
    };
    $scope.calculate();
});



