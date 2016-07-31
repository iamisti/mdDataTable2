import {Component, Input} from "@angular/core";
import {ITableHeader} from "../interfaces/ITableHeader";

@Component({
    moduleId: module.id,
    selector: 'mdt-header',
    templateUrl: '../views/mdt-header.html',
    styleUrls: ['../main.css']
})
export class MdtHeader {
    @Input('table-header')
    tableHeader: ITableHeader;

    isEnabled(){
        return this.tableHeader ? true : false;
    }
}