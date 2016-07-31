import {Component} from "@angular/core";
import {DataService} from "../services/DataService";
import {MdtCellAlign} from "../directives/mdt-cell-align.directive";
import {ArrayPaginationService} from "../services/ArrayPaginationService";
import {IColumn} from "../interfaces/IColumn";

@Component({
    moduleId: module.id,
    selector: '[mdt-columns]',
    templateUrl: '../views/mdt-columns.html',
    styleUrls: ['../main.css'],
    directives: [MdtCellAlign]
})
export class MdtColumns{
    constructor(public dataService: DataService, public arrayPaginationService: ArrayPaginationService){

    }

    setColumnOrder(aColumn:IColumn){
        this.arrayPaginationService.sortColumn = aColumn;
    }
}