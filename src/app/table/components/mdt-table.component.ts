import {Component, Input} from "@angular/core";
import {DataService} from "../services/DataService";
import {MdtRows} from "./mdt-rows.component";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";
import {MdtColumns} from "./mdt-columns.component";
import {ITableHeader} from "../interfaces/ITableHeader";
import {MdtTableHeader} from "./mdt-table-header.component";
export {AlignRule} from '../enums/AlignRule';

@Component({
    moduleId: module.id,
    selector: 'mdt-table',
    styleUrls: ['../main.css'],
    templateUrl: '../views/mdt-table.html',
    providers: [DataService, MdIconRegistry],
    directives: [MdIcon, MdtRows, MdtColumns, MdtTableHeader]
})
export class MdtTable{
    @Input('columns') columns: any;
    @Input('rows') rows: any;
    @Input('table-header') tableHeader: ITableHeader;

    constructor(protected dataService: DataService){

    }

    ngOnInit(){
        this.dataService.addColumns(this.columns);
        this.dataService.addRows(this.rows);
    }
}