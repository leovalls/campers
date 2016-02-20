import {SidebarController} from './SidebarController';
export class SidebarComponent {
	public restrict:string = 'E';
	public controllerAs:string = 'vm';
	public template:string = require('./index.html');
	public controller:Function = SidebarController;
}