config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
export function config($locationProvider:angular.ILocationProvider,
                       $stateProvider:angular.ui.IStateProvider,
                       $urlRouterProvider:angular.ui.IUrlRouterProvider):void {
	$urlRouterProvider.otherwise('/home');

}