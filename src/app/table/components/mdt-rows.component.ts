import {Component} from "@angular/core";
import {DataService} from "../services/DataService";
import {MdtCellAlign} from "../directives/mdt-cell-align.directive";

@Component({
    moduleId: module.id,
    selector: '[mdt-rows]',
    templateUrl: '../views/mdt-rows.html',
    styleUrls: ['../main.css'],
    directives: [MdtCellAlign]
})
export class MdtRows{
    constructor(public dataService: DataService){

    }
}