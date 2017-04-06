import {Component, Input} from "@angular/core";
import {ITableFooter} from "../interfaces/ITableFooter";
import {ArrayPaginationService} from "../services/ArrayPaginationService";
@Component({
    selector: 'mdt-footer',
    templateUrl: '../views/mdt-footer.html',
})
export class MdtFooter{
    @Input('table-footer')
    tableFooter: ITableFooter;

    constructor(private arrayPaginationService: ArrayPaginationService){

    }

    ngOnInit(){
        this.tableFooter.pagination.rowsPerPage =  this.tableFooter.pagination.rowsPerPage || [];

        if(this.isEnabled()){
            this.tableFooter.pagination.defaultRowsPerPage = this.tableFooter.pagination.defaultRowsPerPage
                                                                || this.tableFooter.pagination.rowsPerPage[0];

            this.arrayPaginationService.setItemsPerPage(this.tableFooter.pagination.defaultRowsPerPage);
        }
    }

    isEnabled(){
        return this.tableFooter.pagination.rowsPerPage.length > 0;
    }

    setPageSize(pageSize:number){
        this.arrayPaginationService.setItemsPerPage(+pageSize);
    }

    nextPage(){
        this.arrayPaginationService.nextPage();
    }

    previousPage(){
        this.arrayPaginationService.previousPage();
    }

    isPreviousButtonDisabled(): string {
        if(this.arrayPaginationService.hasPreviousPage() == false){
            return 'md-dark md-inactive';
        }

        return '';
    }

    isNextButtonDisabled(): string {
        if(this.arrayPaginationService.hasNextPage() == false){
            return 'md-dark md-inactive';
        }

        return '';
    }
}