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
            max:5,
            onDecrease:function (value) {
                avalon.log("this是触发事件的元素");
                avalon.log(value);
            },
            onIncrease:function (value) {
                avalon.log(value)
            }
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