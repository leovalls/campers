import {Reservation} from '../entities/Reservation';
import {IReservationService} from "./IReservationService";
import {IDataService} from "./IDataService";
var Rx:any = require('rx-lite');

export class ReservationService implements IReservationService {
	public reservationSync:any = new Rx.ReplaySubject(1);
	private selectedDate:Date;
	private currentReservation:Reservation;
	public static $inject:Array<string> = ['IDataService'];

	constructor(private dataService:IDataService) {

	}

	public getReservations(selectedDate:Date):void {
		this.selectedDate = selectedDate;
		this.reservationSync.onNext({
			reservations: this.dataService.getReservations(selectedDate),
			selectedDate: this.selectedDate
		});
	}

	public getSelectedDate():Date {
		return this.selectedDate || new Date();
	}

	public setSelectedDate(date:Date):void {
		this.selectedDate = date;
		this.getReservations(this.selectedDate);
	}

	public getCurrentReservation():Reservation {
		return this.currentReservation;
	}

	public setCurrentReservation(reservation):void {
		this.currentReservation = reservation;
	}

	public removeReservation(reservation:Reservation):any {
		var availableReservation = new Reservation(reservation.partyDate, reservation.partyTime);
		availableReservation.partyId = reservation.partyId;
		return this.updateReservation(availableReservation);
	}

	public updateReservation(reservation:Reservation, reload?:boolean):any {
		return this.reservationSync.onNext({
			reservations: this.dataService.updateReservation(reservation),
			selectedDate: this.selectedDate
		});
	}

}