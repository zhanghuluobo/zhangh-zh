/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{NgModule}from"@angular/core";import{CommonModule}from"@angular/common";import{PanelModule}from"../panel/panel.module";import{AccordionModule}from"../accordion/accordion.module";import{TreeModule}from"../tree/tree.module";import{SideMenuComponent}from"./sidemenu.component";import{TooltipModule}from"../tooltip/tooltip.module";import{SideMenuItemsComponent}from"./sidemenu-items.component";var SideMenuModule=function(){function SideMenuModule(){}return SideMenuModule.decorators=[{type:NgModule,args:[{declarations:[SideMenuComponent,SideMenuItemsComponent],imports:[CommonModule,PanelModule,AccordionModule,TreeModule,TooltipModule],exports:[SideMenuComponent]}]}],SideMenuModule}();export{SideMenuModule};