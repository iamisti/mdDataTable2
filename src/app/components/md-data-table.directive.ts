import {Component, Input} from "@angular/core";
import {DataService} from "../services/DataService";
import {MdtGenerateRows} from "./md-generate-rows.directive";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";

@Component({
    moduleId: module.id,
    selector: 'md-data-table',
    styleUrls: ['main.css'],
    templateUrl: 'md-data-table.html',
    providers: [DataService, MdIconRegistry],
    directives: [MdIcon, MdtGenerateRows]
})
export class MdDataTable{
    @Input('columns') columns: any;
    @Input('rows') rows: any;

    constructor(protected dataService: DataService){

    }

    ngOnInit(){
        this.dataService.addColumns(this.columns);
        this.dataService.addRows(this.rows);
    }
}