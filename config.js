app.config([
	'$routeProvider',
	function($routeProvider){
		$routeProvider.when('/sy-31',{
			templateUrl:'pages/bookPage/sy-31/sy-31.html',
			controller:'sy-31Ctrl'
		})
		.when('/sy-33',{
			templateUrl:'pages/bookPage/sy-33/sy-33.html',
			controller:'sy-33Ctrl'
		})
		.when('/sy-34',{
			templateUrl:'pages/bookPage/sy-34/sy-34.html',
			controller:'sy-34Ctrl'
		})
		.when('/sy-35',{
			templateUrl:'pages/bookPage/sy-35/sy-35.html',
			controller:'sy-35Ctrl'
		})
		.when('/sy-36',{
			templateUrl:'pages/bookPage/sy-36/sy-36.html',
			controller:'sy-36Ctrl'
		})
		.when('/Myinfo',{
			templateUrl:'pages/install/Myinfo/Myinfo.html',
			controller:'myinfo2Ctrl'
		})
		.when('/Myinfo_1',{
			templateUrl:'pages/install/Myinfo/Myinfo_1.html',
			controller:'myinfo3Ctrl'
		})
		.when('/Myinfo_3',{
			templateUrl:'pages/install/Myinfo/Myinfo_3.html',
			controller:'myinfo4Ctrl'
		})
		.when('/my-24',{
			templateUrl:'pages/material/my-24/banben-24.html',
			controller:'my-24Ctrl'
		})
		.when('/my-26',{
			templateUrl:'pages/material/my-26/ziliao-26.html',
			controller:'my-26Ctrl'
		})
		.when('/my-29',{
			templateUrl:'pages/material/my-29/bangding-29.html',
			controller:'my-29Ctrl'
		})
		.when('/my-30',{
			templateUrl:'pages/material/my-30/mima-30.html',
			controller:'my-30Ctrl'
		})
		.when('/bookshelf',{
			templateUrl:'pages/bookCase/bookshelf/bookshelf.html',
			controller:'bookshelfCtrl'
		})
		.when('/bookshelf-2',{
			templateUrl:'pages/bookCase/bookshelf-2/bookshelf-2.html',
			controller:'bookshelf-2Ctrl'
		})
		.when('/bookshelf-3',{
			templateUrl:'pages/bookCase/bookshelf-3/bookshelf-3.html',
			controller:'bookshelf-3Ctrl'
		})
		.when('/w-38',{
			templateUrl:'pages/read/w-38/w-38.html',
			controller:'w-38Ctrl'
		})
		.when('/w-40',{
			templateUrl:'pages/read/w-40/w-40.html',
			controller:'w-40Ctrl'
		})
		.when('/w-41',{
			templateUrl:'pages/read/w-41/w-41.html',
			controller:'w-41Ctrl'
		})
		.when('/w-42',{
			templateUrl:'pages/read/w-42/w-42.html',
			controller:'w-42Ctrl'
		})
		.when('/setting-46',{
			templateUrl:'pages/read/setting-46/setting-46.html',
			controller:'setting-46Ctrl'
		})
		.when('/',{
			templateUrl:'pages/enter/login-1/login-1.html',
			controller:'loginCtrl'
		})
		.when('/register-2',{
			templateUrl:'pages/enter/register-2/register-2.html',
			controller:'registerCtrl'
		})
		.when('/retrievePass-3',{
			templateUrl:'pages/enter/retrievePass-3/retrievePass-3.html',
			controller:'retrievePassCtrl'
		})
		.when('/changePass-4',{
			templateUrl:'pages/enter/changePass-4/changePass-4.html',
			controller:'changePassCtrl'
		})
		.when('/messageS-21',{
			templateUrl:'pages/enter/message-21/messageS-21.html',
			controller:'messageSCtrl'
		})
		.when('/feedback-23',{
			templateUrl:'pages/enter/feedback-23/feedback-23.html',
			controller:'feedbackCtrl'
		})
		.when('/bookstore',{
			templateUrl:'pages/bookCity/bookstore-10/bookstore-10.html',
			controller:'bookstoreCtrl'
		})
		.when('/bookstore-11',{
			templateUrl:'pages/bookCity/bookstore-11/bookstore-11.html',
			controller:'booklistCtrl'
		})
		.when('/bookstore-12',{
			templateUrl:'pages/bookCity/bookstore-12/bookstore-12.html',
			controller:'bookclassCtrl'
		})
	}
])