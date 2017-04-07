import { NgModule } from '@angular/core/core';
import { NgModel } from '@angular/forms/src/directives';
import {Component} from "@angular/core";
import {DataService} from "../services/DataService";
import {MdtCellAlign} from "../directives/mdt-cell-align.directive";

@Component({
    selector: '[mdt-rows]',
    templateUrl: '../views/mdt-rows.html',
})
export class MdtRows{
    constructor(public dataService: DataService){

    }
}
