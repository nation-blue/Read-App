app.controller('messageSCtrl',['$scope',function($scope){
	
}])

app.directive('ngLine',[function(){
	return {
		restrict:'A',
		replace:true,
		transclude:true,
		template:'<div class="mS-line"><div ng-transclude></div></div>',
		link:function($scope,el){
			var msLf=$(".messageS-select .mS-left-font");
			var msRf=$(".messageS-select .mS-right-font");
			var msL=$(".messageS-select .mS-left");
			var msR=$(".messageS-select .mS-right");
			var msC=$(".messageS-con");
			var mmC=$(".messageM-con");
			msLf.on('touchend',function(){
				msL.removeClass('messagse-dis');
				msR.addClass('messagse-dis');
				msC.removeClass('messagse-dis');
				mmC.addClass('messagse-dis');
			})
			msRf.on('touchend',function(){
				msR.removeClass('messagse-dis');
				msL.addClass('messagse-dis');
				mmC.removeClass('messagse-dis');
				msC.addClass('messagse-dis');
			})
		}
	}
}])
