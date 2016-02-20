/// <reference path="../typings/main.d.ts" />
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import './styles/bootswatch.paper.min.css';
import './styles/screen.scss';
import 'angular';
import './modules/application/';
import './modules/reservations/';
import './modules/about/';

angular.module('app', ['app.application', 'app.reservations', 'app.about']);
angular.bootstrap(document, ['app'], {
	strictDi: true
});
