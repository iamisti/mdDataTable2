import {IColumn} from "../interfaces/IColumn";
import {IRow} from "../interfaces/IRow";
import {ICell} from "../interfaces/ICell";
import * as _ from "lodash";

export class SortService {

    private columnToSort: IColumn;

    setColumnToSort(column: IColumn) :void{
        this.columnToSort = column;
    }

    transformRows(rows: Array<IRow>):Array<IRow> {
        if(this.columnToSort === undefined){
            return rows;
        }

        var that = this;
        let res =  _.sortBy(rows, function(aRow:IRow){
            let index = _.findIndex(aRow.value, (cell:ICell) => {
                return cell.dataKey == that.columnToSort.dataKey;
            });

            return aRow.value[index].value;
        });

        return res;
    }
}