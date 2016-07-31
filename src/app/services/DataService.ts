import {IColumn} from "../components/IColumn";
import {IRow} from "../components/IRow";
import {ICell} from "../components/ICell";
import * as _ from "lodash";
import {AlignRule} from "../components/AlignRule";

export class DataService{
    private columns: Array<IColumn>;
    private rows: Array<IRow>;

    constructor(){
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

            _.each(this.columns, (aColumn:IColumn, colIndex:number) => {
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
        return _.find(this.rows[row.index].value, (aCell:ICell) => {
            return aCell.dataKey === column.dataKey
        });
    }

    getColumns(){
        return this.columns;
    }

    getRows(){
        return this.rows;
    }
}