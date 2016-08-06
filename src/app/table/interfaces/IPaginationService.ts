import {IRow} from "./IRow";

export interface IPaginationService {
    itemsPerPage: number;
    page: number;

    transformRows(rows: Array<IRow>): Array<IRow>;
}