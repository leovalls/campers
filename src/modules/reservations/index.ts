import 'angular';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-ui-bootstrap';
import 'rx-lite';
import 'ng-fx';
import 'angular-local-storage/dist/angular-local-storage';
import 'angular-ui-mask';

import {config as routesConfig} from './configs/routes';
import {config as storageConfig} from './configs/storage';

import {PhoneFilter} from './core/filters/PhoneFilter';
import {PageReservationComponent} from './components/pageReservations/PageReservationComponent';
import {ReservationInfoComponent} from './components/reservationInfo/ReservationInfoComponent';
import {ReservationEditComponent} from './components/reservationEdit/ReservationEditComponent';
import {ReservationMainComponent} from './components/reservationMain/ReservationMainComponent';
import {SidebarComponent} from './components/sidebar/SidebarComponent';
import {SidebarService} from './core/services/SidebarService';
import {ReservationService} from './core/services/ReservationService';
import {DataService} from "./core/services/DataService";
module Tweets {

	angular.module('app.reservations', ['ui.router', 'ngAnimate',
			'ui.bootstrap', 'ui.bootstrap.modal', 'ng-fx', 'LocalStorageModule', 'ui.mask'])
		.service('IReservationService', ReservationService)
		.service('IDataService', DataService)
		.service('ISidebarService', SidebarService)
		.directive('sidebar', () => new SidebarComponent())
		.directive('pageReservations', () => new PageReservationComponent())
		.directive('reservationMain', () => new ReservationMainComponent())
		.directive('reservationInfo', () => new ReservationInfoComponent())
		.directive('reservationEdit', () => new ReservationEditComponent())
		.filter('phone', PhoneFilter)
		.config(storageConfig)
		.config(routesConfig);
}