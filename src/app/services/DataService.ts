import {IColumn} from "../components/IColumn";
import {IRow} from "../components/IRow";

export class DataService{
    private columns: Array<IColumn>;
    private rows: Array<IRow>;

    constructor(){
        this.columns = [];
        this.rows = [];
    }

    addColumns(column:Array<IColumn>){
        this.columns = column;
    }

    addRows(rows:Array<any>){
        this.rows = rows;
    }
}