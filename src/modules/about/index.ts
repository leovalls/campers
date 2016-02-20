import 'angular';
import 'angular-ui-router';
import {PageAboutComponent} from './components/pageAbout/PageAboutComponent';
import {config as routesConfig} from './configs/routes';

angular.module('app.about', ['ui.router'])
	.directive('pageAbout', () => new PageAboutComponent())
	.config(routesConfig);