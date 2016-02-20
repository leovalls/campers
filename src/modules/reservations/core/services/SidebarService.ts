import {ISidebarService} from "./ISidebarService";

export class SidebarService implements ISidebarService {
	private selectedDate:Date;
	private featureItems:any = {
		beers: [
			{name: 'Maduro'},
			{name: 'Night Swim'},
			{name: 'Roller'},
		],
		suggestions : [
			{
				name      : 'Braised Lamb Kapama',
				description: 'Lamb shanks cooked in tomato sauce and herbs. Served with rice, vegetables, a cup of soup and salad.'
			}
		]
	};

	constructor() {

	}

	/*this service would return items featured by  season */
	public getFeatureItems(selectedDate:Date):any {
		return this.featureItems;
	}

}