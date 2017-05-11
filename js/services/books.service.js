(function(){
	'use strict';
	angular.module('education')
		.factory('booksService', booksService);
		//a = 12;

	booksService.$inject = ['$http', '$log'];

	function booksService($http, $log){
		getBooks();
		return {
			getBooks: getBooks
		};

		function getBooks(){
			return $http.get('js/services/books.json')
						.then(getBooksComplete)
						.catch(getBooksFailure);

			function getBooksComplete(data){
				//console.log(data);
				return data.data;
			}

			function getBooksFailure($log){
				return $log.error('failed to get books', err);
			}			
		}
	}		
})();

