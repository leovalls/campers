import {ReservationMainController} from './ReservationMainController';
export class ReservationMainComponent implements ng.IDirective {
	public restrict:string = 'E';
	public controllerAs:string = 'mainVm';
	public template:string = require('./index.html');
	public controller:Function = ReservationMainController;
}
