/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{BaseModule}from"../base/base.module";import{TreeComponent}from"./tree.component";import{TreeNodeComponent}from"./tree-node.component";import{TreeItemTemplateDirective}from"./tree-itemtemplate.directive";var TreeModule=function(){function TreeModule(){}return TreeModule.decorators=[{type:NgModule,args:[{declarations:[TreeComponent,TreeNodeComponent,TreeItemTemplateDirective],imports:[CommonModule,BaseModule],exports:[TreeComponent,TreeNodeComponent,TreeItemTemplateDirective]}]}],TreeModule}();export{TreeModule};