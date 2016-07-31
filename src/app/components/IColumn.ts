export interface IColumn{
    dataKey: string;
    name: string,
    align: AlignRule
}

export enum AlignRule{
    Left,
    Right,
    Center
}