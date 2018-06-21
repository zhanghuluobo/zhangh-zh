/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{BaseModule}from"../base/base.module";import{PanelHeaderComponent}from"./panel-header.component";import{PanelFooterComponent}from"./panel-footer.component";import{PanelComponent}from"./panel.component";var PanelModule=function(){function PanelModule(){}return PanelModule.decorators=[{type:NgModule,args:[{declarations:[PanelHeaderComponent,PanelFooterComponent,PanelComponent],imports:[CommonModule,BaseModule],exports:[PanelHeaderComponent,PanelFooterComponent,PanelComponent]}]}],PanelModule}();export{PanelModule};