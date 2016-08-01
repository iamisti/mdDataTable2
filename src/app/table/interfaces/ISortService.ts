import {IColumn} from "./IColumn";
import {IRow} from "./IRow";

export interface ISortService {

    setColumnToSort(column: IColumn) :void;

    transformRows(rows: Array<IRow>):Array<IRow>;

    isSortingNeeded(): boolean;

    isSortingEnabled(): boolean

    setSortingEnabled(isEnabled: boolean): void

    isSortedAscending(): boolean;

    isSortedDescending(): boolean;

    isSortedByColumn(column:IColumn): boolean;
}