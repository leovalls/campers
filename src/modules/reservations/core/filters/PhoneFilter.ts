export function PhoneFilter() {

	return function (phone):string {
		var value;
		var country;
		var city;
		var number;

		if (!phone) {
			return '';
		}

		value = phone.toString().trim().replace(/^\+/, '');
		if (value.match(/[^0-9]/)) {
			return phone;
		}

		switch (value.length) {
			case 10:
				country = 1;
				city = value.slice(0, 3);
				number = value.slice(3);
				break;

			case 11:
				country = value[0];
				city = value.slice(1, 4);
				number = value.slice(4);
				break;

			case 12:
				country = value.slice(0, 3);
				city = value.slice(3, 5);
				number = value.slice(5);
				break;

			default:
				return phone;
		}

		if (country == 1) {
			country = "";
		}
		number = number.slice(0, 3) + '-' + number.slice(3);
		return (country + " (" + city + ") " + number).trim();

	}

}
