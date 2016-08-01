import {IColumn} from "../interfaces/IColumn";
import {IRow} from "../interfaces/IRow";
import {ICell} from "../interfaces/ICell";
import * as _ from "lodash";
import {SortDirection} from "../enums/SortDirection";
import {ISortService} from "../interfaces/ISortService";

export class SortService implements ISortService{
    private columnToSort: IColumn;
    private isEnabled: boolean;
    private direction: SortDirection;

    constructor(){
        this.direction = SortDirection.Ascending;
    }

    setColumnToSort(column: IColumn) :void{
        if(!column){
            return;
        }

        this.calculateSortDirection(column);

        this.columnToSort = column;
    }

    transformRows(rows: Array<IRow>):Array<IRow> {
        if(this.isSortingEnabled() == false || this.isSortingNeeded() == false){
            return rows;
        }

        let res;

        res = this.applySortOnColumn(rows);
        res = this.applySortDirection(res);

        return res;
    }

    isSortingNeeded(): boolean{
        return this.columnToSort != undefined;
    }

    isSortingEnabled(): boolean{
        return this.isEnabled;
    }

    setSortingEnabled(isEnabled: boolean): void{
        this.isEnabled = isEnabled ? true : false;
    }

    isSortedAscending():boolean {
        return this.direction == SortDirection.Ascending;
    }

    isSortedDescending():boolean {
        return this.direction == SortDirection.Descending;
    }

    isSortedByColumn(column:IColumn): boolean {
        return this.columnToSort && column && this.columnToSort.dataKey == column.dataKey;
    }

    private applySortOnColumn(rows:Array<IRow>): Array<IRow> {
        let res = _.sortBy(rows, (aRow:IRow) => {
            let index = _.findIndex(aRow.value, (cell:ICell) => {
                return cell.dataKey == this.columnToSort.dataKey;
            });

            return aRow.value[index].value;
        });

        return res;
    }

    private calculateSortDirection(column:IColumn) {
        if(!this.columnToSort){
            this.direction = SortDirection.Ascending;
            return;
        }

        if(column.dataKey != this.columnToSort.dataKey){
            this.direction = SortDirection.Ascending;
        }else{
            this.direction = this.direction == SortDirection.Ascending ? SortDirection.Descending : SortDirection.Ascending;
        }
    }

    private applySortDirection(res:IRow[]) {
        if(this.direction == SortDirection.Descending){
            res = _.reverse(res);
        }

        return res;
    }
}