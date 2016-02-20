import {Reservation} from "../../core/entities/Reservation";
import {IReservationService} from "../../core/services/IReservationService";
export interface IReservationInfoController {
	activateReservation(reservation):void ;
	showEditReservation(reservation):void;
}

export class ReservationInfoController implements IReservationInfoController {
	public static $inject:Array<string> = ['IReservationService', '$uibModal'];

	constructor(private reservationService:IReservationService, private $modal:ng.ui.bootstrap.IModalService) {

	}
	
	activateReservation(reservation):void {
		reservation.available = false;
		this.reservationService.updateReservation(reservation, false);
	}

	showEditReservation(reservation):void {
		var modalInstance:any;
		this.reservationService.setCurrentReservation(angular.copy(reservation));
		var options:ng.ui.bootstrap.IModalSettings = {
			template        : '<reservation-edit></reservation-edit>',
			bindToController: true
		};
		this.$modal.open(options);
	}

}