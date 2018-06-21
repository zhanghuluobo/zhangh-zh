/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{FormsModule}from"@angular/forms";import{LinkButtonModule}from"../linkbutton/linkbutton.module";import{MessagerService}from"./messager.service";import{MessagerComponent}from"./messager.component";import{MessagerBodyTemplateDirective}from"./messager-bodytemplate.directive";import{DraggableModule}from"../draggable/draggable.module";import{ResizableModule}from"../resizable/resizable.module";var MessagerModule=function(){function MessagerModule(){}return MessagerModule.decorators=[{type:NgModule,args:[{declarations:[MessagerComponent,MessagerBodyTemplateDirective],imports:[CommonModule,FormsModule,LinkButtonModule,DraggableModule,ResizableModule],exports:[MessagerComponent,MessagerBodyTemplateDirective],providers:[MessagerService]}]}],MessagerModule}();export{MessagerModule};