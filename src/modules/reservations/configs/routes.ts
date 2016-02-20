config.$inject = ['$stateProvider'];
export function config($stateProvider:angular.ui.IStateProvider):void {
	$stateProvider
		.state('home', <ng.ui.IState>{
			url     : '/home',
			template: '<page-reservations></page-reservations>'
		});
}