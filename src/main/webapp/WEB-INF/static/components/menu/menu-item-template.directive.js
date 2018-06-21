/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Directive,TemplateRef,ViewContainerRef,Input}from"@angular/core";var MenuItemTemplateDirective=function(){function MenuItemTemplateDirective(viewContainer){this.viewContainer=viewContainer}return MenuItemTemplateDirective.prototype.ngOnInit=function(){this.view=this.viewContainer.createEmbeddedView(this.template,{$implicit:this.value,text:this.text})},MenuItemTemplateDirective.prototype.ngOnDestroy=function(){this.view.destroy()},MenuItemTemplateDirective.decorators=[{type:Directive,args:[{selector:"[euiMenuItemTemplate]"}]}],MenuItemTemplateDirective.ctorParameters=function(){return[{type:ViewContainerRef}]},MenuItemTemplateDirective.propDecorators={value:[{type:Input}],text:[{type:Input}],template:[{type:Input,args:["euiMenuItemTemplate"]}]},MenuItemTemplateDirective}();export{MenuItemTemplateDirective};