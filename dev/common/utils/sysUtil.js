define(["avalon"],function(avalon){
	return {
		copyArray:function(obj){
			return avalon.mix(true,[],obj);
		},
		copy:function(obj){
			return avalon.mix(true,{},obj);
		}
	}
});