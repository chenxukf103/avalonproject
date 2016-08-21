/**
 * Created by suyc on 2016/8/21.
 */
define(['avalon'],function (avalon) {
    var vm = avalon.define({
        $id:"spinnerDemo",
        p:"8",
        p1:2,
        p2:1.0,
        $spinnerOpts:{
            min:0,
            max:5
        },
        $stepOpts:{
            step:0.5
        }
    });
    return avalon.controller(function ($ctrl) {
        $ctrl.$vmodels = [vm];

        $ctrl.$onEnter = function (param, rs, rj) {
        }
    })
});