import {Reservation} from '../entities/Reservation';
import {IDataService} from './IDataService';
import 'lodash';
export class DataService implements IDataService {
	private selectedDate:Date;
	private reservations:Array<Reservation>;

	public static $inject:Array<string> = ['localStorageService'];

	constructor(private localStorageService:any) {

	}

	getReservations(selectedDate:Date):Array<Reservation> {
		this.reservations = JSON.parse(this.localStorageService.get(this.getGroupKey(selectedDate)));
		if (_.isNull(this.reservations) === true)
			this.fillReservations(selectedDate);
		return this.reservations;
	}

	updateReservation(reservation:Reservation):Array<Reservation> {
		var index = _.findIndex(this.reservations, {partyId: reservation.partyId});
		this.reservations.splice(index, 1, reservation);
		this.localStorageService.set(this.getGroupKey(reservation.partyDate), JSON.stringify(this.reservations));
		return this.reservations;
	}

	getGroupKey(partyDate):string {
		return 'reservations-' + _.kebabCase(new Date(partyDate).toDateString());
	}

	fillReservations(selectedDate):void {
		this.reservations = [];
		for (var i:number = 0; i < 8; i++) {
			var res = new Reservation(selectedDate, i);
			res.partyTime = i + 1;
			this.reservations.push(res);
		}
		this.updateReservation(this.reservations[0]);
	}

}
