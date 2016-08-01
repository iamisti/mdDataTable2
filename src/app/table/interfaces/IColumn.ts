import {AlignRule} from "../enums/AlignRule";

export interface IColumn{
    dataKey: string;
    name: string;
    align: AlignRule;
}