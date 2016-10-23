var app = angular.module("education", ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
	$routeProvider
			.when('/main', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl'
			})
			.when('/lab',{
				templateUrl: 'views/lab.html',
				controller: 'LabCtrl'
			})
			.when('/contact', {
				templateUrl: 'views/contact.html',
				controller: 'ContactCtrl'
			})
			.when('/newBooks', {
				templateUrl: 'views/newbooks.html',
				controller: 'NewBooksCtrl'
			})
			.when('/libcard', {
				templateUrl: 'views/libcard.html',
				controller: 'LibCardCtrl'
			})
			.otherwise({
				redirectTo: '/main'
			});
}]);