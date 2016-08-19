/*define(['avalon','resources/lib/oniui/mmRouter/mmState'],
	function(avalon){
	avalon.state("state1", {
        url: "/state1/:id",
        templateUrl: "modules/state1/state1.html",
        controllerUrl:"modules/state1/state1Ctrl.js"
    }).state("state2", {
        url: "/state2",
        templateUrl: "modules/state2/state2.html"
    })
    //启动路由
    avalon.history.start();
});*/

define([], function(){
    return {
        defaultPath: '/demo',
        routers: {
            "demo":{
                name:'开发参考',
                data:{
                    url: "/demo",
                    templateUrl: "common/templates/common-veiw.html"
                }
            },
            "demo.store":{
                name:'本地存储',
                data:{
                    url: "/store",
                    templateUrl: "modules/demo/store/views/store.html",
                    controllerUrl:["modules/demo/store/js/storeDemo.js"]
                }
            },
            "demo.dropdown":{
                name:'下拉框',
                data:{
                    url: "/dropdown",
                    templateUrl: "modules/demo/dropdown/views/dropdown.html",
                    controllerUrl:"modules/demo/dropdown/js/dropdown.js"
                }
            },
            "setting":{
                name:'问卷配置',
                data:{
                    url: "/setting",
                    templateUrl: "common/templates/common-veiw.html"
                }
            },
            "setting.mgt":{
                name:'问卷配置管理',
                data:{
                    url: "/mgt",
                    templateUrl: "modules/demo/state2/state2.html"
                }
            }
        }
    };
});