/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{FormsModule}from"@angular/forms";import{BaseModule}from"../base/base.module";import{PaginationModule}from"../pagination/pagination.module";import{DataListComponent}from"./datalist.component";import{DataListItemTemplateDirective}from"./datalist-itemtemplate.directive";var DataListModule=function(){function DataListModule(){}return DataListModule.decorators=[{type:NgModule,args:[{declarations:[DataListComponent,DataListItemTemplateDirective],imports:[CommonModule,FormsModule,BaseModule,PaginationModule],exports:[DataListComponent,DataListItemTemplateDirective]}]}],DataListModule}();export{DataListModule};