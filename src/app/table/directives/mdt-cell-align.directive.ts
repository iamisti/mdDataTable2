import {Input, Directive, ElementRef} from "@angular/core";
import {IColumn} from "../interfaces/IColumn";
import {AlignRule} from "../enums/AlignRule";

@Directive({
    selector: '[mdt-cell-align]'
})
export class MdtCellAlign {

    private el: HTMLElement;

    @Input('mdt-cell-align')
    aColumn: IColumn;

    constructor(el: ElementRef){
        this.el = el.nativeElement;
    }

    ngOnInit(){
        switch(this.aColumn.align){
            case AlignRule.Left:
                this.el.classList.add('leftAlignedColumn');
                return;

            case AlignRule.Center:
                return;

            case AlignRule.Right:
                this.el.classList.add('rightAlignedColumn');
                return;

            default:
                throw new Error('Could not align because the align rule ('+this.aColumn.align+') was unknown.');
        }
    }
}