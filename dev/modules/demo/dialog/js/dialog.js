/**
 * Created by suyc on 2016/8/22.
 */
define(['avalon'],function (avalon) {
    var vm = avalon.define({
        $id:"dialogDemo",
        message:"笑傻了吧！！",
        show:function (id) {
            avalon.vmodels[id].toggle = true;
        },
        name:"shirly",
        check1:["1"],
        $aaOpts1:{
            fullScreen:true
        }
    });
    var vm2 = avalon.define({
        $id:"dialogDemo1",
        show:function (id) {
            avalon.vmodels[id].toggle = true;
        },
        title:"可自定义回调操作的dialog",
        $aaOpts:{
            onOpen:function () {
                alert("open dialog");
            },
            onConfirm:function () {
                alert('success')
            },
            onClose:function () {
                alert('fail');
            }
        }
    });
    return avalon.controller(function ($ctrl) {
        $ctrl.$vmodels = [vm,vm2];
        $ctrl.$onEnter = function (param, rs, rj) {
        }
    });
});
