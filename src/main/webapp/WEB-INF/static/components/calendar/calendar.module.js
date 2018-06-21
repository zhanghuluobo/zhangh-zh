/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{FormsModule}from"@angular/forms";import{CalendarComponent}from"./calendar.component";import{CalendarCellTemplateDirective}from"./calendar-celltemplate.directive";var CalendarModule=function(){function CalendarModule(){}return CalendarModule.decorators=[{type:NgModule,args:[{declarations:[CalendarComponent,CalendarCellTemplateDirective],imports:[CommonModule,FormsModule],exports:[CalendarComponent,CalendarCellTemplateDirective]}]}],CalendarModule}();export{CalendarModule};