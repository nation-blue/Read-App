app.directive('booktab',[function(){
	return{
		restrict:"E",
		replace:true,
		scope:{
			pics:'=',
			//传入图片数组
			drops:'@',
			//目标类名
			myClass:'@',
			//利用link增加类名
		},
		templateUrl:'component/booktab/booktab.html',
		link:function($scope,el){
			$(el).on('touchend',"li",function  () {
				console.log($scope.drops);
				$(el).find('.showing').removeClass('active');
				$(this).children('.showing').addClass('active');
				$('.'+$scope.drops).removeClass('active');
				var index=$(this).index();
				$('.'+$scope.drops).eq(index).addClass('active');
			})
		}	
	}
}])