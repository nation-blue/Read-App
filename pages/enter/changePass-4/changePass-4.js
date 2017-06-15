app.controller('changePassCtrl',['$scope',function($scope){
	
}])
app.directive('ngCc4',[function(){
	return{
		restrict:'A',
		replace:true,
		template:'<div class="l-circle"></div>',
		link:function($scope,el){
			$(".register-password:eq(0) input").on('focus',function(){
				$(".register-password:eq(0) .tishi").addClass("login-dis");
			})
			$(".register-password:eq(1) input").on('focus',function(){
				$(".register-password:eq(1) .tishi").addClass("login-dis");
			})
		}
	}
}])
/*$(function(){

	
})*/