config.$inject = ['localStorageServiceProvider'];
export function config(localStorageServiceProvider:any):void {
	localStorageServiceProvider
		.setPrefix('campersApp')
		.setNotify(true, true);
}


