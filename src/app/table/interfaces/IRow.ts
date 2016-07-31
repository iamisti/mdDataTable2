import {ICell} from "./ICell";

export interface IRow{
    rowId?: any;
    index: number,
    //selected: boolean;
    //deleted: boolean;
    //visible: boolean;
    value: Array<ICell>;
    //rawValue: any;
}