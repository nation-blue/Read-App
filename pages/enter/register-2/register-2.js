app.controller('registerCtrl',['$scope',function($scope){
	
}])

app.directive('ngCc2',[function(){
	return{
		restrict:'A',
		replace:true,
		template:'<div class="l-circle"></div>',
		link:function($scope,el){
			$(".register-user:eq(0) input").on('focus',function(){
			$(".register-user:eq(0) .tishi").addClass("login-dis");
			})
			$(".register-user:eq(1) input").on('focus',function(){
				$(".register-user:eq(1) .tishi").addClass("login-dis");
			})
			
			$(".register-password:eq(0) input").on('focus',function(){
				$(".register-password:eq(0) .tishi").addClass("login-dis");
			})
			$(".register-password:eq(1) input").on('focus',function(){
				$(".register-password:eq(1) .tishi").addClass("login-dis");
			})
			
			$(".register-phone:eq(0) input").on('focus',function(){
				$(".register-phone:eq(0) .tishi").addClass("login-dis");
			})
			$(".register-code input").on('focus',function(){
				$(".register-code .tishi").addClass("login-dis");
			})
		}
	}
}])
/*$(function(){

	
})*/