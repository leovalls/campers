config.$inject = ['$stateProvider'];
export function config($stateProvider:angular.ui.IStateProvider):void {
	$stateProvider
		.state('about', <ng.ui.IState>{
			url     : '/about',
			template: '<page-about></page-about>'
		});
}