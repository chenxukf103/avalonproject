require(["avalon",
	    "routerConfig",
	    "contextService",
	    "sysUtil",
	    "menuUtil",
	    "domReady!"],
	     function(avalon,routerConfig,contextService,sysUtil,menuUtil) {
    
    var menus = contextService.getMenusTree();

    var vm = avalon.define({
        $id: "root",
        leftHeight:$(window).height() - 60,
        leftWidth:200,
        menus:sysUtil.copyArray(menus),
        submenus:[],
        curMenu:{},
        curSubMenu:{},
        toState:function(value,e){
			e.preventDefault();
        	var state = menuUtil.getState(value);
        	avalon.router.go(state.path,state.param);
        }

    });


    //----- 配置路由 -------
    if (routerConfig.routers !== undefined) {
		for ( var key in routerConfig.routers) {
			var route= routerConfig.routers[key];
			avalon.state(key,route.data);
		}
	}

	avalon.state.config({
		onLoad:function(fromState,toState){
			var state = {};
			for(var i=0;i < menus.length;i++){
				state = menuUtil.getState(menus[i].resValue);
				if(toState.stateName.indexOf(state.path) != -1){
					vm.curMenu = sysUtil.copy(menus[i]);
					var subMenus = menus[i].subMenus;
					vm.submenus = sysUtil.copyArray(subMenus);
					if(toState.stateName === state.path){
						if(subMenus && subMenus.length > 0){
							state = menuUtil.getState(subMenus[0].resValue);
        					avalon.router.go(state.path,state.param);
						}else{
							vm.curSubMenu = {};
						}
					}else{
						for(var j = 0, length2 = subMenus.length; j < length2; j++){
							state = menuUtil.getState(subMenus[j].resValue);
							if(toState.stateName.indexOf(state.path) != -1){
								vm.curSubMenu = sysUtil.copy(subMenus[j]);
								break;
							}
						}
					}
					break;
				}
				
			}
		}
	});

	//设置默认跳转
	avalon.router.when("/",routerConfig.defaultPath);

	//启动路由
	avalon.history.start();
	//----- 配置路由 end -------




    avalon.scan(document.body);
});