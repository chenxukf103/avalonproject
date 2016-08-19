define(["common/config/menu"],function(menu){
	var contextData = {
		menusTree:menu
	};
	return {
		setContextData:function(data){
			contextData = data;
		},
		getContextData:function(){
			return contextData;
		},
		getMenusTree:function(){
			return contextData.menusTree;
		}
	}
})
