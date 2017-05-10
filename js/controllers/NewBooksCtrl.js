(function(){
		angular.module('education')
			.controller('NewBooksCtrl', newBooksCtrlFunc);

	newBooksCtrlFunc.$inject = ['$scope', '$http', 'booksService', 'logger'];

	function newBooksCtrlFunc($scope, $http, booksService, logger){
		var vm = this;
		vm.books = null;

		activate();

		function activate(){
			return getBooks().then(function(){
				logger.info('activated books');
			});
		}
		
	}

	function getBooks(){
		return booksService.getBooks()
				.then(function(data){
					vm.books = data;
					return vm.books;
				});
	}
})();
