import {IColumn} from "./IColumn";
import {IRow} from "./IRow";

export interface IPaginationService {
    sortColumn: IColumn;
    itemsPerPage: number;
    page: number;

    transformRows(rows: Array<IRow>): Array<IRow>;
}