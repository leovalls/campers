import {ReservationInfoController} from './ReservationInfoController';
export class ReservationInfoComponent implements ng.IDirective {
	public restrict:string = 'E';
	public controllerAs:string = 'vm';
	public template:string = require('./index.html');
	public controller:Function = ReservationInfoController;

}
