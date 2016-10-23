app.controller('NewBooksCtrl', ['$scope', '$http', function($scope, $http){
	$http.get('js/services/books.json')
	     .success(function(data){
          $scope.books = data;
	      })
	     .error(function(err){
	     	return err;
	     });
}]);