app.controller('loginCtrl',['$scope',function($scope){
	
}])

app.directive('ngCc1',[function(){
	return{
		restrict:'A',
		replace:true,
		template:'<div class="l-circle"></div>',
		link:function($scope,el){
			$(".login-user input").on('focus',function(){
				$(".login-user .tishi").addClass("login-dis");
			})
			$(".login-password input").on('focus',function(){
				$(".login-password .tishi").addClass("login-dis");
			})
		}
	}
}])
/*$(function(){
	
})
*/