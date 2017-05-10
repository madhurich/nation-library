angular.module('education')
		.controller('LabCtrl', LabCtrlFunc);

LabCtrlFunc.$inject = ['$scope'];		

function LabCtrlFunc($scope){
	var vm = this;
	vm.content = "hello";
}		