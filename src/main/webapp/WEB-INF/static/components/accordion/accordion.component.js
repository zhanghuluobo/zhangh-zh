/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Component,forwardRef,ContentChildren,QueryList,Input,Output,EventEmitter}from"@angular/core";import{AccordionPanelComponent}from"./accordion-panel.component";var AccordionComponent=function(){function AccordionComponent(){this.border=!0,this.multiple=!1,this.animate=!1,this.panelSelect=new EventEmitter,this.panelUnselect=new EventEmitter,this._selectedIndex=0}return Object.defineProperty(AccordionComponent.prototype,"selectedIndex",{get:function(){return this._selectedIndex},set:function(value){var _this=this;if(this.multiple?this._selectedIndex=value instanceof Array?value:[+value]:this._selectedIndex=value instanceof Array?+value[0]:+value,this.panels)if(this.multiple){this.panels.filter(function(p,index){return-1==_this._selectedIndex.indexOf(index)}).forEach(function(p){return p.unselect()});for(var _i=0,_a=this._selectedIndex;_i<_a.length;_i++){var index=_a[_i];this.select(index)}}else this.select(this._selectedIndex)},enumerable:!0,configurable:!0}),AccordionComponent.prototype.ngAfterContentInit=function(){var _this=this;setTimeout(function(){return _this.initPanels()}),this.panels.changes.subscribe(function(){setTimeout(function(){return _this.initPanels()})})},AccordionComponent.prototype.initPanels=function(){var _this=this;this.panels.length&&(this.panels.forEach(function(p){p.isLast=!1,p.animate=_this.animate}),this.panels.last.isLast=!0,this.initSelectedPanel())},AccordionComponent.prototype.initSelectedPanel=function(){var panels=this.panels.filter(function(p){return p.selected});panels.length||(panels=this.multiple?this.getPanels(this.selectedIndex):this.getPanels([this.selectedIndex])),panels.length&&(this.multiple?panels.forEach(function(p){return p.selected=!0}):(panels[0].selected=!0,panels.filter(function(p,index){return 0!=index}).forEach(function(p){return p.selected=!1})))},AccordionComponent.prototype.select=function(index){var panel=this.getPanel(index);panel&&panel.select()},AccordionComponent.prototype.unselect=function(index){var panel=this.getPanel(index);panel&&panel.unselect()},AccordionComponent.prototype.getPanel=function(index){return this.panels.toArray()[index]},AccordionComponent.prototype.getPanels=function(indexs){for(var panels=[],_i=0,indexs_1=indexs;_i<indexs_1.length;_i++){var index=indexs_1[_i],panel=this.getPanel(index);panel&&panels.push(panel)}return panels},AccordionComponent.prototype.getPanelIndex=function(panel){for(var panels=this.panels.toArray(),i=0;i<panels.length;i++)if(panels[i]===panel)return i;return-1},AccordionComponent.prototype.getSelectedIndex=function(){var panel=this.getSelectedPanel();return panel?this.getPanelIndex(panel):-1},AccordionComponent.prototype.getSelectedPanel=function(){var pp=this.getSelectedPanels();return pp.length?pp[0]:null},AccordionComponent.prototype.getSelectedPanels=function(){return this.panels.filter(function(p){return p.selected})},AccordionComponent.decorators=[{type:Component,args:[{selector:"eui-accordion",template:'\n\t\t<div class="accordion f-column f-full" [class.accordion-noborder]="!border">\n\t\t\t<ng-content></ng-content>\n\t\t</div>\n\t',host:{class:"f-column"}}]}],AccordionComponent.propDecorators={panels:[{type:ContentChildren,args:[forwardRef(function(){return AccordionPanelComponent})]}],border:[{type:Input}],multiple:[{type:Input}],animate:[{type:Input}],panelSelect:[{type:Output}],panelUnselect:[{type:Output}],selectedIndex:[{type:Input}]},AccordionComponent}();export{AccordionComponent};