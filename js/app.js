var app = angular.module('muthuTest',['ngRoute']);

app.controller('headerCntr',function($scope,$http){

	$scope.intNum = 0;
	$scope.endNum = 12;
	$scope.totalLen = 0;
	$scope.headerObj=['Home', 'In Play', 'Spot Betting', 'Lotto', 'Search Card', 'Skinfri     ']
	$scope.footerObj=['Home', 'Terms Conditions', 'About Us', 'Rules', 'Retailer Location', 'Contact Us']
	
	$http.get('data/gameData.json').then(function(response){
		$scope.config = response.data.config;
		$scope.totalLen = $scope.config.length;
	})

	$scope.removeSpace = function (path){
		return path.replace(/ /g,"");
	}
	$scope.moveNext = function(){
		
		if($scope.endNum<$scope.totalLen)$scope.intNum = $scope.endNum;
		
		if(($scope.endNum+12) <= $scope.totalLen){
			$scope.endNum = $scope.endNum+12;
		}else{
			$scope.endNum = $scope.totalLen;
		}
	}
	$scope.movePrevious = function(){
		if(($scope.intNum-12) >= 0){
			$scope.intNum = $scope.intNum-12
		}else{
			$scope.intNum = 0;
		}
		
		
		if($scope.totalLen <= 12){
			$scope.endNum = $scope.totalLen;
		}else{
			$scope.endNum = $scope.intNum+12;
		}
	}
	$scope.checkNextEnable = function(){
		return $scope.totalLen > $scope.endNum;
	}
	$scope.checkPreviousEnable = function(){
		return 0 < $scope.intNum;
	}


	
});
app.filter('slice', function() {
  return function(arr, start, end) {
    return arr.slice(start, end);
 };
});
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'pages/home.html',
	})
	.when('/InPlay',{
		templateUrl : 'pages/inplay.html',
	})
	.when('/SpotBetting',{
		templateUrl : 'pages/soptbetting.html',
	})
	.when('/Lotto',{
		templateUrl : 'pages/lotto.html',
	})
	.when('/SearchCard',{
		templateUrl : 'pages/searchCard.html',
	})
	.when('/Skinfri',{
		templateUrl : 'pages/skinfri.html',
	})
	.when('/TermsConditions',{
		templateUrl : 'pages/terms_conditions.html',
	})
	.when('/AboutUs',{
		templateUrl : 'pages/about_us.html',
	})
	.when('/Rules',{
		templateUrl : 'pages/rules.html',
	})
	.when('/RetailerLocation',{
		templateUrl : 'pages/retailer_location.html',
	})
	.when('/ContactUs',{
		templateUrl : 'pages/contact_us.html',
	})
	.otherwise({
		redirectTo : '/'
	})
});



