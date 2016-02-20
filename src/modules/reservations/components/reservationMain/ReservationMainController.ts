import {Reservation} from "../../core/entities/Reservation";
import {IReservationService} from "../../core/services/IReservationService";
import 'lodash';
export interface IReservationMainController {
	reservations: Array<Reservation>;
	availableReservations:number;
	selectedDate:Date;
}

export class ReservationMainController implements IReservationMainController {
	public static $inject:Array<string> = ['IReservationService'];
	public reservations:Array<Reservation>;
	public availableReservations:number;
	public selectedDate:Date;

	constructor(private reservationService:IReservationService) {
		this.reservationService.reservationSync.subscribe(this.subscriptionHandler.bind(this));
	}

	subscriptionHandler(data) {
		var self = this;
		var available=0;
		this.reservations = data.reservations;
		this.selectedDate = data.selectedDate;

		available = _.sumBy(this.reservations, function (prop) {
		 return prop.available ? 0 : 1;
		 });
		this.availableReservations = 8 - available;
	}
}
