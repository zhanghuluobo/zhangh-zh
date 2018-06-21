/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Directive,TemplateRef,ViewContainerRef,Input}from"@angular/core";var DateBoxCellTemplateDirective=function(){function DateBoxCellTemplateDirective(viewContainer){this.viewContainer=viewContainer}return DateBoxCellTemplateDirective.prototype.ngOnInit=function(){this.view=this.viewContainer.createEmbeddedView(this.template,{$implicit:this.date})},DateBoxCellTemplateDirective.prototype.ngOnDestroy=function(){this.view.destroy()},DateBoxCellTemplateDirective.decorators=[{type:Directive,args:[{selector:"[euiDateBoxCellTemplate]"}]}],DateBoxCellTemplateDirective.ctorParameters=function(){return[{type:ViewContainerRef}]},DateBoxCellTemplateDirective.propDecorators={date:[{type:Input}],template:[{type:Input,args:["euiDateBoxCellTemplate"]}]},DateBoxCellTemplateDirective}();export{DateBoxCellTemplateDirective};