/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{BaseModule}from"../base/base.module";import{TabsComponent}from"./tabs.component";import{TabPanelComponent}from"./tab-panel.component";import{TabHeaderTemplateDirective}from"./tab-headertemplate.directive";var TabsModule=function(){function TabsModule(){}return TabsModule.decorators=[{type:NgModule,args:[{declarations:[TabsComponent,TabPanelComponent,TabHeaderTemplateDirective],imports:[CommonModule,BaseModule],exports:[TabsComponent,TabPanelComponent,TabHeaderTemplateDirective]}]}],TabsModule}();export{TabsModule};