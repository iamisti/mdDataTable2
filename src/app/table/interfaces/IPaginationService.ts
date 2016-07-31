import {IColumn} from "./IColumn";
import {IRow} from "./IRow";

export interface IPaginationService {
    sortColumn: IColumn;

    transformRows(rows: Array<IRow>): Array<IRow>;
}