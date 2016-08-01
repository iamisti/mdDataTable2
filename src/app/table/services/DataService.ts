import {IColumn} from "../interfaces/IColumn";
import {IRow} from "../interfaces/IRow";
import {ICell} from "../interfaces/ICell";
import * as _ from "lodash";
import {AlignRule} from "../enums/AlignRule";
import {Injectable} from "@angular/core";
import {ArrayPaginationService} from "./ArrayPaginationService";
import {SortService} from "./SortService";

@Injectable()
export class DataService{
    private columns: Array<IColumn>;
    private rows: Array<IRow>;

    constructor(private arrayPaginationService: ArrayPaginationService,
                private sortService: SortService){

        this.columns = [];
        this.rows = [];
    }

    addColumns(columns:Array<IColumn>){
        _.each(columns, (aColumn) => {
            this.columns.push({
                dataKey: aColumn.dataKey,
                name: aColumn.name,
                align: aColumn.align || AlignRule.Left
            });
        });
    }

    addRows(rows:Array<any>){
        _.each(rows, (aRow:any, rowIndex:number) => {
            var newRow: Array<ICell> = [];

            _.each(this.columns, (aColumn:IColumn) => {
                newRow.push({
                    dataKey: aColumn.dataKey,
                    value: aRow[aColumn.dataKey]
                });
            });

            this.rows.push({
                index: rowIndex,
                value: newRow
            });
        });
    }

    getCellData(column:IColumn, row:IRow){
        return _.find(row.value, (aCell:ICell) => {
            return aCell.dataKey === column.dataKey
        });
    }

    getColumns(){
        return this.columns;
    }

    getRows(): Array<IRow>{
        //sorting rows
        let rows = this.sortService.transformRows(this.rows);

        //paginating rows
        rows = this.arrayPaginationService.transformRows(rows);

        return rows;
    }
}