var myApp = angular.module('myApp', []);

myApp.config(function($interpolateProvider){
	$interpolateProvider.startSymbol('{[{').endSymbol('}]}');
});