app.controller("my-30Ctrl",["$scope",function($scope){
	
}])

app.directive("ngMymima",[function(){
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
				$(".syzm").html("");
			})
		}
	}
	
	
}])