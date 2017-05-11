(function(){
		angular.module('education')
			.controller('NewBooksCtrl', newBooksCtrlFunc);

	newBooksCtrlFunc.$inject = ['$scope', '$http', 'booksService', '$log'];

	function newBooksCtrlFunc($scope, $http, booksService, $log){
		var vm = this;
		vm.books = null;

		activate();

		function activate(){
			return getBooksHere().then(function(){
				$log.info('activated books');
			});
		}


		//this function must be declared inside of the controller
		function getBooksHere(){
		return booksService.getBooks()
				.then(function(data){
					vm.books = data;
					return vm.books;
				});
	}
		
	}

	
})();

//union type
//pull requests
//lifecycle method
//