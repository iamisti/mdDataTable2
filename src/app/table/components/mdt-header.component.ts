import {Component, Input} from "@angular/core";
import {ITableHeader} from "../interfaces/ITableHeader";

@Component({
    selector: 'mdt-header',
    templateUrl: '../views/mdt-header.html',
})
export class MdtHeader {
    @Input('table-header')
    tableHeader: ITableHeader;

    isEnabled(){
        return this.tableHeader ? true : false;
    }
}