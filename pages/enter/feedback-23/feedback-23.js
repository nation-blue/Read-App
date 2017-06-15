app.controller('feedbackCtrl',['$scope',function($scope){
	
}])

app.directive('ngCc23',[function(){
	return{
		restrict:'A',
		replace:true,
		template:'<div class="l-circle"></div>',
		link:function($scope,el){
			$(".feedback-input textarea").on('focus',function(){
				$(".fb-reminder").addClass("feedback-dis");
			})
		}
	}
}])