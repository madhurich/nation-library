(function(){
	angular.module('education')
		.factory('booksService', getBooksService);


	getBooksService.$inject = ['$http', 'logger'];

	function getBooksService($http, logger){
		getBooks();
		return {
			getBooks: getBooks
		};

		function getBooks(){
			return $http.get('js/services/books.json')
						.then(getBooksComplete)
						.catch(getBooksFailure);

			function getBooksComplete(data){
				return data;
			}

			function getBooksFailure(looger){
				return logger.error('failed to get books', err);
			}			
		}
	}		
})();

