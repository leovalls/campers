import {PageReservationController} from './PageReservationController';
export class PageReservationComponent implements ng.IDirective {
	public restrict:string = 'E';
	public controllerAs:string = 'pageVm';
	public template:string = require('./index.html');
	public controller:Function = PageReservationController;
}