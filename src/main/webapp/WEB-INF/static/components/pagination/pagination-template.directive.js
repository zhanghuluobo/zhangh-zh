/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Directive,TemplateRef,ViewContainerRef,Input}from"@angular/core";import{PaginationComponent}from"./pagination.component";var PaginationTemplateDirective=function(){function PaginationTemplateDirective(viewContainer){this.viewContainer=viewContainer}return PaginationTemplateDirective.prototype.ngOnInit=function(){this.view=this.viewContainer.createEmbeddedView(this.template,{$implicit:this.pagination})},PaginationTemplateDirective.prototype.ngOnDestroy=function(){this.view.destroy()},PaginationTemplateDirective.decorators=[{type:Directive,args:[{selector:"[euiPaginationTemplate]"}]}],PaginationTemplateDirective.ctorParameters=function(){return[{type:ViewContainerRef}]},PaginationTemplateDirective.propDecorators={pagination:[{type:Input}],template:[{type:Input,args:["euiPaginationTemplate"]}]},PaginationTemplateDirective}();export{PaginationTemplateDirective};