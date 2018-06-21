/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
var __extends=this&&this.__extends||function(){var extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])};return function(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}}();import{Component,forwardRef,Input}from"@angular/core";import{NG_VALUE_ACCESSOR}from"@angular/forms";import{InputBaseComponent}from"../base/input-base.component";export var SPINNER_BASE_TEMPLATE='\n\t<span class="textbox f-inline-row f-full" \n\t\t\t[ngClass]="cls"\n\t\t\t[class.textbox-disabled]="disabled"\n\t\t\t[class.textbox-readonly]="readonly"\n\t\t\t[class.textbox-focused]="focused"\n\t\t\t[class.textbox-invalid]="invalid">\n\t\t<input #input *ngIf="!multiline" autocomplete="off" class="textbox-text f-full f-order3"\n\t\t\t\t[class.validatebox-invalid]="invalid"\n\t\t\t\t[attr.id]="inputId"\n\t\t\t\t[attr.disabled]="disabled?\'disabled\':null"\n\t\t\t\t[attr.readonly]="(readonly||!editable)?\'readonly\':null"\n\t\t\t\t[attr.tabindex]="tabindex"\n\t\t\t\t[ngClass]="inputCls"\n\t\t\t\t[ngStyle]="inputStyle"\n\t\t\t\t[(ngModel)]="text"\n\t\t\t\t[placeholder]="placeholder"\n\t\t\t\t(focus)="focus()"\n\t\t\t\t(blur)="blur()">\n\t\t<textarea #input *ngIf="multiline" autocomplete="off" class="textbox-text f-full f-order3"\n\t\t\t\t[class.validatebox-invalid]="invalid"\n\t\t\t\t[attr.id]="inputId"\n\t\t\t\t[attr.disabled]="disabled?\'disabled\':null"\n\t\t\t\t[attr.readonly]="(readonly||!editable)?\'readonly\':null"\n\t\t\t\t[attr.tabindex]="tabindex"\n\t\t\t\t[ngClass]="inputCls"\n\t\t\t\t[ngStyle]="inputStyle"\n\t\t\t\t[(ngModel)]="text"\n\t\t\t\t[placeholder]="placeholder"\n\t\t\t\t(focus)="focus()"\n\t\t\t\t(blur)="blur()"></textarea>\n\t\t<input class="textbox-value" type="hidden" [value]="value" [attr.disabled]="disabled?\'disabled\':null">\n\t\t<ng-content select="eui-addon"></ng-content>\n\t\t<span #addon *ngIf="iconCls" \n\t\t\t\tclass="textbox-addon textbox-addon-icon f-inline-row f-noshrink" \n\t\t\t\t[class.f-order1]="iconAlign==\'left\'"\n\t\t\t\t[class.f-order5]="iconAlign==\'right\'">\n\t\t\t<span class="textbox-icon textbox-icon-disabled {{iconCls}}"></span>\n\t\t</span>\n\t\t\n\t\t<ng-container *ngIf="spinners">\n\t\t<ng-container [ngSwitch]="spinAlign">\n\t\t\t<ng-container *ngSwitchCase="\'horizontal\'">\n\t\t\t\t<span #spin1 class="textbox-addon spinner-arrow spinner-button-left f-inline-row f-noshrink f-order1" (click)="onClickDown($event)">\n\t\t\t\t\t<span class="spinner-button"\n\t\t\t\t\t\t\t[class.spinner-button-down]="!reversed"\n\t\t\t\t\t\t\t[class.spinner-button-up]="reversed"></span>\n\t\t\t\t</span>\n\t\t\t\t<span #spin2 class="textbox-addon spinner-arrow spinner-button-right f-inline-row f-noshrink f-order5" (click)="onClickUp($event)">\n\t\t\t\t\t<span class="spinner-button"\n\t\t\t\t\t\t\t[class.spinner-button-down]="reversed"\n\t\t\t\t\t\t\t[class.spinner-button-up]="!reversed"></span>\n\t\t\t\t</span>\n\t\t\t</ng-container>\n\t\t\t<ng-container *ngSwitchCase="\'vertical\'">\n\t\t\t\t<span #spin1 class="textbox-addon spinner-arrow spinner-button-bottom f-noshrink" (click)="onClickDown($event)">\n\t\t\t\t\t<span class="spinner-button"\n\t\t\t\t\t\t\t[class.spinner-button-down]="!reversed"\n\t\t\t\t\t\t\t[class.spinner-button-up]="reversed"></span>\n\t\t\t\t</span>\n\t\t\t\t<span #spin2 class="textbox-addon spinner-arrow spinner-button-top f-noshrink" (click)="onClickUp($event)">\n\t\t\t\t\t<span class="spinner-button"\n\t\t\t\t\t\t\t[class.spinner-button-down]="reversed"\n\t\t\t\t\t\t\t[class.spinner-button-up]="!reversed"></span>\n\t\t\t\t</span>\n\t\t\t</ng-container>\n\t\t\t<span *ngSwitchDefault #spin\n\t\t\t\t\tclass="textbox-addon spinner-button-updown f-column f-noshrink" \n\t\t\t\t\t[class.f-order1]="spinAlign==\'left\'"\n\t\t\t\t\t[class.f-order5]="spinAlign==\'right\'">\n\t\t\t\t<span class="spinner-arrow spinner-button-top f-full" (click)="onClickUp($event)">\n\t\t\t\t\t<span class="spinner-arrow-up"></span>\n\t\t\t\t</span>\n\t\t\t\t<span class="spinner-arrow spinner-button-bottom f-full" (click)="onClickDown($event)">\n\t\t\t\t\t<span class="spinner-arrow-down"></span>\n\t\t\t\t</span>\n\t\t\t</span>\n\t\t</ng-container>\n\t\t</ng-container>\n\t</span>\n';var SpinnerBaseComponent=function(_super){function SpinnerBaseComponent(){var _this=null!==_super&&_super.apply(this,arguments)||this;return _this.reversed=!1,_this.spinners=!0,_this.spinAlign="right",_this._cls=null,_this}return __extends(SpinnerBaseComponent,_super),Object.defineProperty(SpinnerBaseComponent.prototype,"cls",{get:function(){return"spinner"+(this._cls?" "+this._cls:"")},set:function(value){this._cls=value},enumerable:!0,configurable:!0}),SpinnerBaseComponent.prototype.onClickUp=function(){this.disabled||this.readonly||("left"==this.spinAlign||"right"==this.spinAlign?this.doSpinUp():this.reversed?this.doSpinDown():this.doSpinUp())},SpinnerBaseComponent.prototype.onClickDown=function(){this.disabled||this.readonly||("left"==this.spinAlign||"right"==this.spinAlign?this.doSpinDown():this.reversed?this.doSpinUp():this.doSpinDown())},SpinnerBaseComponent.prototype.doSpinUp=function(){},SpinnerBaseComponent.prototype.doSpinDown=function(){},SpinnerBaseComponent.decorators=[{type:Component,args:[{template:SPINNER_BASE_TEMPLATE,providers:[{provide:NG_VALUE_ACCESSOR,useExisting:forwardRef(function(){return SpinnerBaseComponent}),multi:!0}],host:{"[class.h-inputbox]":"true"}}]}],SpinnerBaseComponent.propDecorators={reversed:[{type:Input}],spinners:[{type:Input}],spinAlign:[{type:Input}],cls:[{type:Input}]},SpinnerBaseComponent}(InputBaseComponent);export{SpinnerBaseComponent};