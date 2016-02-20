import {ReservationEditController} from './ReservationEditController';
export class ReservationEditComponent implements ng.IDirective {
	public restrict:string = 'E';
	public controllerAs:string = 'vm';
	public template:string = require('./index.html');
	public controller:Function = ReservationEditController;
}
