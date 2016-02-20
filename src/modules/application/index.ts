import 'angular';
import 'angular-animate';
import 'angular-ui-router';
import 'angular-ui-bootstrap';

import {CampersApplicationComponent} from './components/campersApplication/CampersApplicationComponent';
import {TopbarComponent} from './components/topbar/TopbarComponent';
import {config as routesConfig} from './configs/routes';

angular.module('app.application', ['ui.router', 'ngAnimate', 'ui.bootstrap'])
	.directive('campersApp', () => new CampersApplicationComponent())
	.directive('topbar', () => new TopbarComponent())
	.config(routesConfig);

