import {IReservationService} from "../../core/services/IReservationService";
import {ISidebarService} from "../../core/services/ISidebarService";

export interface ISidebarController {
	selectedDate:Date;
	minDate:Date;
	setSelectedDate(date): void;
	featureItems:any;

}

export class SidebarController implements ISidebarController {
	public static $inject:Array<string> = ['IReservationService', 'ISidebarService'];
	public selectedDate:Date = new Date();
	public minDate:Date = new Date();
	public featureItems:any;

	constructor(private reservationService:IReservationService,
	            private sidebarService:ISidebarService) {
		this.reservationService.getReservations(new Date());
		this.featureItems = this.sidebarService.getFeatureItems(new Date());
	}

	setSelectedDate() {
		this.reservationService.getReservations(this.selectedDate);
	}
}
