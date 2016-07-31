import {Component, Input} from "@angular/core";
import {ITableHeader} from "../interfaces/ITableHeader";

@Component({
    moduleId: module.id,
    selector: 'mdt-table-header',
    templateUrl: '../views/mdt-table-header.html',
    styleUrls: ['../main.css']
})
export class MdtTableHeader {
    @Input('table-header')
    tableHeader: ITableHeader;

    isEnabled(){
        return this.tableHeader ? true : false;
    }
}