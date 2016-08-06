import {IPaginationService} from "../interfaces/IPaginationService";
import {IRow} from "../interfaces/IRow";
import * as _ from "lodash";
import {Injectable} from "@angular/core";

@Injectable()
export class ArrayPaginationService implements IPaginationService{
    itemsPerPage: number;
    page: number;
    totalRowsCount: number;

    constructor(){
        this.page = this.page || 1;
    }

    transformRows(rows: Array<IRow>):Array<IRow> {
        if(this.isActive() == false){
            return rows;
        }

        this.totalRowsCount = rows.length; // question if this is the right approach

        return _.slice(rows, this.getStartIndex(), this.getStartIndex() + this.itemsPerPage);
    }

    isActive(){
        return this.itemsPerPage > 0;
    }

    setItemsPerPage(pageSize: number){
        this.itemsPerPage = pageSize;
        this.page = 1;
    }

    getStartIndex(): number{
        return (this.page-1) * this.itemsPerPage;
    }

    nextPage(): void{
        if(this.hasNextPage()){
            this.page++;
        }
    }

    previousPage(): void{
        if(this.hasPreviousPage()){
            this.page --;
        }
    }

    hasPreviousPage(): boolean {
        return this.page > 1;
    }

    hasNextPage(): boolean {
        var totalPages = Math.ceil(this.totalRowsCount / this.itemsPerPage);

        return this.page < totalPages;
    }
}