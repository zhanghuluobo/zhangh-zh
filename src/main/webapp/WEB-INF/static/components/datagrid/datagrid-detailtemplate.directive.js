/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Directive,TemplateRef,ViewContainerRef,Input}from"@angular/core";var DataGridDetailTemplateDirective=function(){function DataGridDetailTemplateDirective(viewContainer){this.viewContainer=viewContainer}return DataGridDetailTemplateDirective.prototype.ngOnInit=function(){this.view=this.viewContainer.createEmbeddedView(this.template,{$implicit:this.row,rowIndex:this.rowIndex})},DataGridDetailTemplateDirective.prototype.ngOnDestroy=function(){this.view.destroy()},DataGridDetailTemplateDirective.decorators=[{type:Directive,args:[{selector:"[euiDataGridDetailTemplate]"}]}],DataGridDetailTemplateDirective.ctorParameters=function(){return[{type:ViewContainerRef}]},DataGridDetailTemplateDirective.propDecorators={row:[{type:Input}],rowIndex:[{type:Input}],template:[{type:Input,args:["euiDataGridDetailTemplate"]}]},DataGridDetailTemplateDirective}();export{DataGridDetailTemplateDirective};