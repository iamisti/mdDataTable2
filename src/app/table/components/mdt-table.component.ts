import {Component, Input} from "@angular/core";
import {DataService} from "../services/DataService";
import {MdtRows} from "./mdt-rows.component";
import {MdIcon, MdIconRegistry} from "@angular2-material/icon";
import {MdtColumns} from "./mdt-columns.component";
import {ITableHeader} from "../interfaces/ITableHeader";
import {MdtHeader} from "./mdt-header.component";
import {IPagination} from "../interfaces/IPagination";
import {MdtFooter} from "./mdt-footer.component";
import {ITableFooter} from "../interfaces/ITableFooter";
import {ArrayPaginationService} from "../services/ArrayPaginationService";
export {AlignRule} from '../enums/AlignRule';

@Component({
    moduleId: module.id,
    selector: 'mdt-table',
    styleUrls: ['../main.css'],
    templateUrl: '../views/mdt-table.html',
    providers: [DataService, ArrayPaginationService, MdIconRegistry],
    directives: [MdIcon, MdtRows, MdtColumns, MdtHeader, MdtFooter]
})
export class MdtTable{
    @Input('columns') columns: any;
    @Input('rows') rows: any;
    @Input('table-header') tableHeader: ITableHeader;
    @Input('pagination') pagination: IPagination;

    tableFooter: ITableFooter;

    constructor(protected dataService: DataService, protected arrayPaginationService: ArrayPaginationService){

    }

    ngOnInit(){
        this.dataService.addColumns(this.columns);
        this.dataService.addRows(this.rows);

        this.tableFooter = {
            pagination: this.pagination || <IPagination>{}
        }
    }
}