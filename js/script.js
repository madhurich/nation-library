(function(){
	angular.module("education", ['ngRoute'])
		.config(configFunc);

		configFunc.$inject = ['$routeProvider'];

	function configFunc($routeProvider){
		$routeProvider
			.when('/main', {
				templateUrl: 'views/main.html',
				controller: 'MainCtrl',
				controllerAs: 'mc'
			})
			.when('/lab',{
				templateUrl: 'views/lab.html',
				controller: 'LabCtrl',
				controllerAs: 'labc'
			})
			.when('/contact', {
				templateUrl: 'views/contact.html',
				controller: 'ContactCtrl',
				controllerAs: 'cc'
			})
			.when('/newBooks', {
				templateUrl: 'views/newbooks.html',
				controller: 'NewBooksCtrl',
				controllerAs: 'nc'
			})
			.when('/libcard', {
				templateUrl: 'views/libcard.html',
				controller: 'LibCardCtrl',
				controllerAs: 'libc'
			})
			.otherwise({
				redirectTo: '/main'
			});
	}
})();
