import {AlignRule} from "../enums/AlignRule";
import {IColumn} from "../interfaces/IColumn";

export class Column implements IColumn{
    dataKey: string;
    name: string;
    align: AlignRule;

    isLeftAligned():boolean {
        return this.align === AlignRule.Left;
    };

    isRightAligned():boolean {
        return this.align === AlignRule.Right;
    };
}