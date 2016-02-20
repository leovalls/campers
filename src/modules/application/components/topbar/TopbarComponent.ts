import {TopbarController} from './TopbarController';
export class TopbarComponent {
	public restrict:string = 'E';
	public controllerAs:string = 'topbarVm';
	public template:string = require('./index.html');
	public controller:Function = TopbarController;
}
