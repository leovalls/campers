import {Reservation} from '../entities/Reservation';
export interface IDataService {
	getReservations(date): Array<Reservation>;
	updateReservation(reservation):any;
}
