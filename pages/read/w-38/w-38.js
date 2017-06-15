app.controller('w-38Ctrl',['$scope',function($scope){
	
}])
app.directive('ngX',[function(){
			return{
				restrict:"A",
				template:"<div><div ng-transclude></div></div>",
				replace:true,
				transclude:true,
				link:function($scope,el){
					$(".zhengwen").on('touchend',function(){
						  $('#header').toggle();
						  })
					$(".zhengwen").on('touchend',function(){
						  $('#end').toggle();
						  })
					$(".circles2").on('touchend',function(){
						  $('#s-43').show();
						  })
					$(".zhengwen").on('touchend',function(){
						  $('#s-43').hide();
						  })
					$(".circles3").on('touchend',function(){
						  $('#s-44').show();
						  })
					$(".zhengwen").on('touchend',function(){
						  $('#s-44').hide();
						  })
					////////////////
					var t=$("#s-43")
					t.find('.zi .btn').css("left",0)
					t.find('.zi .btn').on('touchstart',function(e){
						$(document).on('touchmove',function(e){
							var w=e.originalEvent.changedTouches[0].clientX-t.find('.zi .tiao').offset().left;	
							console.log(w)
							console.log(-$('#s-43 .zi .btn').width()/2)
							if(w<-t.find('.zi .btn').width()/2||w>$('#s-43 .zi .tiao').width()-t.find('.zi .btn').width()/2){
								return
								
							}
							t.find('.zi .btn').css("left",w);
						})
					})
					//////////////
				}
			}
		}])