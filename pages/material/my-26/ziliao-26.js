app.controller("my-26Ctrl",["$scope",function($scope){
	
}])

app.directive("ngMyziliao",[function(){
	return{
		restrict:'A',
		replace:true,
		template:"<ul id='ziliao'><div ng-transclude></div></ul>",
		transclude:true,
		link:function($scope,el){
			$("#xtx1s").on("touchend",function(){
				$("#tan1").css("display","block");
			})
			$("#quxiaos").on("touchend",function(){
				$("#tan1").css("display","none");
			})
			$("#xxbs").on("touchend",function(){
				$("#tan2").css("display","block");
			})
			$("#quxiao2s").on("touchend",function(){
				$("#tan2").css("display","none");
			})
		}
	}
	
	
}])
