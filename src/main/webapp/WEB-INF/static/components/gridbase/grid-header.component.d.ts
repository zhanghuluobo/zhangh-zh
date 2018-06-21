import { ElementRef, EventEmitter } from '@angular/core';
import { GridColumnComponent } from './grid-column.component';
import { GridColumnGroupComponent } from './grid-column-group.component';
export declare const GRID_HEADER_TEMPLATE = "\n\t<div class=\"datagrid-header f-row\">\n\t\t<div #header class=\"datagrid-header-inner f-full\" [style.height.px]=\"_height\">\n\t\t\t<table #content class=\"datagrid-htable\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\">\n\t\t\t\t<colgroup>\n\t\t\t\t\t<col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\n\t\t\t\t</colgroup>\n\t\t\t\t<tbody *ngIf=\"columnGroup\">\n\t\t\t\t\t<tr *ngIf=\"filterOnTop\" class=\"datagrid-header-row datagrid-filter-row\" euiGridFilterRow [columns]=\"columns\" [grid]=\"grid\"></tr>\n\t\t\t\t\t<tr *ngFor=\"let row of columnGroup.rows\" class=\"datagrid-header-row\">\n\t\t\t\t\t\t<td *ngFor=\"let col of row.columns\"\n\t\t\t\t\t\t\t\t[attr.rowspan]=\"col.rowspan\"\n\t\t\t\t\t\t\t\t[attr.colspan]=\"col.colspan\"\n\t\t\t\t\t\t\t\t[class.datagrid-field-td]=\"col.field\"\n\t\t\t\t\t\t\t\t[class.datagrid-header-over]=\"hoverColumn==col && col.sortable\"\n\t\t\t\t\t\t\t\t(mouseenter)=\"hoverColumn=col\"\n\t\t\t\t\t\t\t\t(mouseleave)=\"hoverColumn=null\"\n\t\t\t\t\t\t\t\t(click)=\"onCellClick($event,col)\">\n\t\t\t\t\t\t\t<div class=\"datagrid-cell\" \n\t\t\t\t\t\t\t\t\t[class.datagrid-cell-group]=\"!col.field\"\n\t\t\t\t\t\t\t\t\t[class.datagrid-sort]=\"col.field && col.sortable\"\n\t\t\t\t\t\t\t\t\t[class.datagrid-sort-asc]=\"col.currOrder=='asc'\"\n\t\t\t\t\t\t\t\t\t[class.datagrid-sort-desc]=\"col.currOrder=='desc'\"\n\t\t\t\t\t\t\t\t\t[style.textAlign]=\"col.halign || col.align || null\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"!col.headerTemplate\">{{col.title}}</span>\n\t\t\t\t\t\t\t\t<ng-template *ngIf=\"col.headerTemplate\" [euiGridHeaderTemplate]=\"col.headerTemplate.template\" [column]=\"col\"></ng-template>\n\t\t\t\t\t\t\t\t<span class=\"datagrid-sort-icon\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"filterOnBottom\" class=\"datagrid-header-row datagrid-filter-row\" euiGridFilterRow [columns]=\"columns\" [grid]=\"grid\"></tr>\n\t\t\t\t</tbody>\n\t\t\t\t<tbody *ngIf=\"!columnGroup\">\n\t\t\t\t\t<tr *ngIf=\"filterOnTop\" class=\"datagrid-header-row datagrid-filter-row\" euiGridFilterRow [columns]=\"columns\" [grid]=\"grid\"></tr>\n\t\t\t\t\t<tr class=\"datagrid-header-row\">\n\t\t\t\t\t\t<td *ngFor=\"let col of columns\" \n\t\t\t\t\t\t\t\tclass=\"datagrid-field-td\"\n\t\t\t\t\t\t\t\t[class.datagrid-header-over]=\"hoverColumn==col && col.sortable\"\n\t\t\t\t\t\t\t\t(mouseenter)=\"hoverColumn=col\"\n\t\t\t\t\t\t\t\t(mouseleave)=\"hoverColumn=null\"\n\t\t\t\t\t\t\t\t(click)=\"onCellClick($event,col)\">\n\t\t\t\t\t\t\t<div class=\"datagrid-cell\"\n\t\t\t\t\t\t\t\t\t[class.datagrid-sort]=\"col.field && col.sortable\"\n\t\t\t\t\t\t\t\t\t[class.datagrid-sort-asc]=\"col.currOrder=='asc'\"\n\t\t\t\t\t\t\t\t\t[class.datagrid-sort-desc]=\"col.currOrder=='desc'\"\n\t\t\t\t\t\t\t\t\t[style.textAlign]=\"col.halign || col.align || null\">\n\t\t\t\t\t\t\t\t<span *ngIf=\"!col.headerTemplate\">{{col.title}}</span>\n\t\t\t\t\t\t\t\t<ng-template *ngIf=\"col.headerTemplate\" [euiGridHeaderTemplate]=\"col.headerTemplate.template\" [column]=\"col\"></ng-template>\n\t\t\t\t\t\t\t\t<span class=\"datagrid-sort-icon\"></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</td>\n\t\t\t\t\t</tr>\n\t\t\t\t\t<tr *ngIf=\"filterOnBottom\" class=\"datagrid-header-row datagrid-filter-row\" euiGridFilterRow [columns]=\"columns\" [grid]=\"grid\"></tr>\n\t\t\t\t</tbody>\n\t\t\t</table>\n\t\t</div>\n\t\t<div *ngIf=\"paddingWidth\" class=\"datagrid-header f-noshrink\" [style.width.px]=\"paddingWidth\"></div>\n\t</div>\n";
export declare class GridHeaderComponent {
    headerRef: ElementRef;
    contentRef: ElementRef;
    columns: GridColumnComponent[];
    columnGroup: GridColumnGroupComponent;
    paddingWidth: number;
    filterable: boolean;
    grid: any;
    cellClick: EventEmitter<{}>;
    hoverColumn: GridColumnComponent;
    readonly filterOnTop: boolean;
    readonly filterOnBottom: boolean;
    _height: number;
    height: number;
    private _scrollLeft;
    scrollLeft: number;
    onCellClick(event: any, col: any): void;
}
