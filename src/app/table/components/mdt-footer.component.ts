import {Component, Input} from "@angular/core";
import {ITableFooter} from "../interfaces/ITableFooter";
@Component({
    moduleId: module.id,
    selector: 'mdt-footer',
    templateUrl: '../views/mdt-footer.html',
    styleUrls: ['../main.css']
})
export class MdtFooter{
    @Input('table-footer')
    tableFooter: ITableFooter;

    ngOnInit(){
        console.log(this.tableFooter)
        this.tableFooter.pagination.rowsPerPage =  this.tableFooter.pagination.rowsPerPage || [];

        //if default value is not set then select the first value as default
        if(this.tableFooter.pagination.rowsPerPage.length > 0
            && !this.tableFooter.pagination.defaultRowsPerPage){
                this.tableFooter.pagination.defaultRowsPerPage = this.tableFooter.pagination.rowsPerPage[0];
        }
    }

    isEnabled(){
        return this.tableFooter.pagination.rowsPerPage.length > 0 ? true : false;
    }
}