app.controller('bookstoreCtrl',['$scope',function($scope){
	
}]);
app.directive('myXxk',[function(){
	return{
		restrict:'A',
		replace:true,
		transclude:true,
		template:'<div class="lc-nav"><div ng-transclude></div></div>',
		link:function($scope,el){
			$('#lc-head .lis').on('touchend',function  () {
				$('#lc-head .showing').removeClass('active');
				$(this).children('.showing').addClass('active');
				$('.lc-main').removeClass('active');
				var index=$(this).index();
				$('.lc-main').eq(index).addClass('active');
			})
		}
	}
}])

//$(function  () {
//	$('#lc-head .lis').on('touchend',function  () {
//		$('#lc-head .showing').removeClass('active');
//		$(this).children('.showing').addClass('active');
//		$('.lc-main').removeClass('active');
//		var index=$(this).index();
//		$('.lc-main').eq(index).addClass('active');
//	})
//})