/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Directive,TemplateRef,ViewContainerRef,Input}from"@angular/core";var TreeItemTemplateDirective=function(){function TreeItemTemplateDirective(viewContainer){this.viewContainer=viewContainer}return TreeItemTemplateDirective.prototype.ngOnInit=function(){this.view=this.viewContainer.createEmbeddedView(this.template,{$implicit:this.node})},TreeItemTemplateDirective.prototype.ngOnDestroy=function(){this.view.destroy()},TreeItemTemplateDirective.decorators=[{type:Directive,args:[{selector:"[euiTreeItemTemplate]"}]}],TreeItemTemplateDirective.ctorParameters=function(){return[{type:ViewContainerRef}]},TreeItemTemplateDirective.propDecorators={node:[{type:Input}],template:[{type:Input,args:["euiTreeItemTemplate"]}]},TreeItemTemplateDirective}();export{TreeItemTemplateDirective};