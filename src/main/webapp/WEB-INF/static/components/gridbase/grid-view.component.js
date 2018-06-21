/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Component,ViewChild,Input,Output,EventEmitter}from"@angular/core";import{GridColumnGroupComponent}from"./grid-column-group.component";import{GridHeaderComponent}from"./grid-header.component";import{GridFooterComponent}from"./grid-footer.component";import{GridBodyComponent}from"./grid-body.component";var GridViewComponent=function(){function GridViewComponent(){this.viewIndex=2,this.filterable=!1,this.bodyScroll=new EventEmitter}return Object.defineProperty(GridViewComponent.prototype,"viewCls",{get:function(){return"f-column datagrid-view"+this.viewIndex+(2==this.viewIndex?" f-full":" f-noshrink")},enumerable:!0,configurable:!0}),Object.defineProperty(GridViewComponent.prototype,"scrollTop",{get:function(){return this.body.scrollTop},set:function(value){this.body.scrollTop=value},enumerable:!0,configurable:!0}),Object.defineProperty(GridViewComponent.prototype,"headerHeight",{get:function(){return this.header?this.header.height:0},set:function(value){this.header&&(this.header.height=value)},enumerable:!0,configurable:!0}),Object.defineProperty(GridViewComponent.prototype,"headerPaddingWidth",{get:function(){if(2==this.viewIndex){var width=this.body.scrollbarWidth;if(width>0)return width}return null},enumerable:!0,configurable:!0}),GridViewComponent.prototype.onBodyScroll=function(event){this.header&&(this.header.scrollLeft=event.left),this.footer&&(this.footer.scrollLeft=event.left),this.bodyScroll.emit(event)},GridViewComponent.decorators=[{type:Component,args:[{selector:"eui-grid-view",template:'\n\t\t<eui-grid-header #header [columnGroup]="columnGroup" [columns]="columns" [paddingWidth]="headerPaddingWidth"></eui-grid-header>\n\t\t<eui-grid-body #body [columns]="columns" align="center" [rows]="rows" (bodyScroll)="onBodyScroll($event)"></eui-grid-body>\n\t\t<eui-grid-footer #footer [columns]="columns" [rows]="footerRows"></eui-grid-footer>\n\t',host:{"[class]":"viewCls"}}]}],GridViewComponent.propDecorators={header:[{type:ViewChild,args:["header"]}],footer:[{type:ViewChild,args:["footer"]}],body:[{type:ViewChild,args:["body"]}],columns:[{type:Input}],columnGroup:[{type:Input}],viewIndex:[{type:Input}],rows:[{type:Input}],footerRows:[{type:Input}],filterable:[{type:Input}],bodyScroll:[{type:Output}]},GridViewComponent}();export{GridViewComponent};