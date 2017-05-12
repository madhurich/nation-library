angular.module('education')
		.controller('LibCardCtrl', LibCardCtrl);

LibCardCtrl.$inject = ['$scope'];		

function LibCardCtrl($scope){
	var vm = this;
	vm.content = "hello";
}		