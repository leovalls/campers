import {Reservation} from "../../core/entities/Reservation";
import {IReservationService} from "../../core/services/IReservationService";
import IModalServiceInstance = angular.ui.bootstrap.IModalServiceInstance;
export interface IReservationEditController {
	currentReservation:Reservation;
	updateReservation(close):void;
	removeReservation(close):void;
	cancelEdit(cancel):void;
}

export class ReservationEditController implements IReservationEditController {
	public static $inject:Array<string> = ['IReservationService'];
	currentReservation:Reservation;

	constructor(private reservationService:IReservationService) {
		this.currentReservation = this.reservationService.getCurrentReservation();
	}

	updateReservation(close) {
		close();
		this.currentReservation.available = false;
		this.reservationService.updateReservation(this.currentReservation, true);
	}

	removeReservation(close):void {
		close();
		this.reservationService.removeReservation(this.currentReservation, true);
	}

	cancelEdit(cancel):void {
		cancel();
	}

}