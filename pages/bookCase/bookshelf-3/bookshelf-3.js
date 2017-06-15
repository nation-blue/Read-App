app.controller('bookshelf-3Ctrl',['$scope',function($scope){
	
}]);
app.directive('search',[function(){
	return{
		restrict:'A',
		replace:true,
		template:'<div class="search-center"><input type="text" /></div>',
		link:function($secope,el){
			var zhao=$('#zhao-bookshelf');
			var input=$(".search-center input");
			var box=$(".type-box");
			input.on("touchstart",function(){
				zhao.css({"display":"block"});
				return false;
			})
			box.on("touchstart",function(){
				return false;
			});
			$(document).on("touchstart",function(){
				zhao.css({"display":"none"});
				return false;
			})
			var two=$(".sorts-box .two");
			two.on("touchstart",function(){
				var index=$(this).index();
				$(".backg").addClass('none').eq(index).removeClass('none');
			});
			var name=$(".all-sort-box .name")
			name.on("touchstart",function(){
				var index=$(this).index();
				name.removeClass('change').eq(index).addClass('change');
			});
	  }
	}
}])