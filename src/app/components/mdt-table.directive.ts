import {Component, Input} from "@angular/core";
import {DataService} from "../services/DataService";
import {MdtRows} from "./mdt-rows.directive";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";

@Component({
    moduleId: module.id,
    selector: 'mdt-table',
    styleUrls: ['main.css'],
    templateUrl: 'mdt-table.html',
    providers: [DataService, MdIconRegistry],
    directives: [MdIcon, MdtRows]
})
export class MdtTable{
    @Input('columns') columns: any;
    @Input('rows') rows: any;

    constructor(protected dataService: DataService){

    }

    ngOnInit(){
        this.dataService.addColumns(this.columns);
        this.dataService.addRows(this.rows);
    }
}