import {IPaginationService} from "../interfaces/IPaginationService";
import {IColumn} from "../interfaces/IColumn";
import {IRow} from "../interfaces/IRow";
import {ICell} from "../interfaces/ICell";
import * as _ from "lodash";
import {Injectable} from "@angular/core";

@Injectable()
export class ArrayPaginationService implements IPaginationService{
    sortColumn:IColumn;

    transformRows(rows: Array<IRow>):Array<IRow> {
        if(this.sortColumn === undefined){
            return rows;
        }

        var that = this;
        let res =  _.sortBy(rows, function(aRow:IRow){
            let index = _.findIndex(aRow.value, (cell:ICell) => {
                return cell.dataKey == that.sortColumn.dataKey;
            });

            return aRow.value[index].value;
        });

        return res;
    }
}