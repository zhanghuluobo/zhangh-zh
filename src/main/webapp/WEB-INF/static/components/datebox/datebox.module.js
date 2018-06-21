/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{FormsModule}from"@angular/forms";import{BaseModule}from"../base/base.module";import{CalendarModule}from"../calendar/calendar.module";import{DateBoxComponent}from"./datebox.component";import{DateBoxCellTemplateDirective}from"./datebox-celltemplate.directive";var DateBoxModule=function(){function DateBoxModule(){}return DateBoxModule.decorators=[{type:NgModule,args:[{declarations:[DateBoxComponent,DateBoxCellTemplateDirective],imports:[CommonModule,FormsModule,BaseModule,CalendarModule],exports:[DateBoxComponent,DateBoxCellTemplateDirective]}]}],DateBoxModule}();export{DateBoxModule};