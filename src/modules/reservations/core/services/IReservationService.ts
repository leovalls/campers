import {Reservation} from '../entities/Reservation';
export interface IReservationService {
	getReservations(date): void;
	getCurrentReservation():Reservation;
	setCurrentReservation(reservation):void;
	updateReservation(reservation, reload):Reservation;
	removeReservation(reservation, reload):Reservation;
	getSelectedDate():Date;
	reservationSync:any;
}
