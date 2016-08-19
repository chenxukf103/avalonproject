define(["avalon"],function(avalon){

	var store = avalon.store;
	 function getData() {
        var array = []
        avalon.each(store.getAll(), function(name, value) {
            array.push({
                name: name,
                value: value
            })
        })
        return array
    }
    var array = getData();

	 var vm = avalon.define({
        $id: "stroe",
     		array:array,
     		name:"",
     		value:"",
     		error:false,
     		add:function(){
     			var name = vm.name.trim(), value = vm.value.trim()
              if (name && value) {
                  vm.error = false
                  store.set(name, value)
                  vm.array = getData()
                  vm.name = ""
                  vm.value = ""
              } else {
                  vm.error = true
              }
     		},
     		remove:function(el, action){
     			 store.remove(el.name)
               action();
     		}
       });
			

	 return avalon.controller(function($ctrl) {
        $ctrl.$vmodels = [vm];

        $ctrl.$onEnter = function(param, rs, rj){
        	
        }
     });
});