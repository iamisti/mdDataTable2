import {Component, Input} from "@angular/core";
import {DataService} from "../services/DataService";

@Component({
    moduleId: module.id,
    selector: 'md-data-table',
    styleUrls: ['main.css'],
    templateUrl: 'md-data-table.html',
    providers: [DataService]
})
export class MdDataTable{
    @Input('columns') columns: any;
    @Input('rows') rows: any;

    constructor(private dataService: DataService){
        dataService.addColumns(this.columns);
        dataService.addRows(this.rows);
    }
}