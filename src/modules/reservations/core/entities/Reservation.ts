export class Reservation {
	public partyDateCode:string;
	public partyId:number = Math.floor(Math.random() * ( 1 + 200 - 1 )) + 1;

	constructor(public partyDate:Date,
	            public partyTime:number,
	            public available?:boolean,
	            public partyName?:string,
	            public partyQuantity?:number,
	            public partyPhone?:string,
	            public partyIsPresent?:boolean) {
		if (!this.available)
			this.available = true;
		this.partyQuantity = 2;

	}

	public static createInstance(partyDate:Date,
	                             partyTime:number,
	                             partyId:number,
	                             available?:boolean,
	                             partyName?:string,
	                             partyQuantity?:number,
	                             partyPhone?:string,
	                             partyIsPresent?:boolean):Reservation {

		return new Reservation(partyDate, partyTime, available, partyName, partyQuantity, partyPhone, partyIsPresent);
	}
}
