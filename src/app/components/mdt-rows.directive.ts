import {Component} from "@angular/core";
import {DataService} from "../services/DataService";

@Component({
    moduleId: module.id,
    selector: '[mdt-rows]',
    templateUrl: 'mdt-rows.html',
    styleUrls: ['main.css']
})
export class MdtRows{
    constructor(public dataService: DataService){

    }
}