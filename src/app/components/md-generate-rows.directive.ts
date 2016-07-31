import {Component} from "@angular/core";
import {DataService} from "../services/DataService";

@Component({
    moduleId: module.id,
    selector: '[md-generate-rows]',
    templateUrl: 'md-generate-rows.html',
    styleUrls: ['main.css']
})
export class MdtGenerateRows{
    constructor(public dataService: DataService){

    }
}