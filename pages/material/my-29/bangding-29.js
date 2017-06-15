app.controller("my-29Ctrl",["$scope",function($scope){
	
}])

app.directive("ngMybangding",[function(){
	return{
		restrict:'A',
		replace:true,
		template:"<div id='bd_neirong'><div ng-transclude></div></div>",
		transclude:true,
		link:function($scope,el){
			$(".ssjhs").on("focus",function(){
				$(".ssjh").html("");
			})
			$(".syzms").on("focus",function(){
				$(".qsryzm").html("");
			})
		}
	}
	
	
}])