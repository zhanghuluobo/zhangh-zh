/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Directive,Input,ElementRef}from"@angular/core";import{domHelper}from"../base/domhelper";var SlideUpDownDirective=function(){function SlideUpDownDirective(hostRef){this.hostRef=hostRef,this.animate=!1,this.disabled=!1,this.viewInited=!1,this._collapsed=!1}return Object.defineProperty(SlideUpDownDirective.prototype,"collapsed",{get:function(){return this._collapsed},set:function(value){if(value!=this._collapsed&&(this._collapsed=value,!this.disabled&&this.viewInited)){var el=this.hostRef.nativeElement;this.animate?this._collapsed?domHelper.slideUp(el):domHelper.slideDown(el):this._collapsed?domHelper.addClass(el,"f-hide"):domHelper.removeClass(el,"f-hide")}},enumerable:!0,configurable:!0}),SlideUpDownDirective.prototype.ngAfterViewInit=function(){var _this=this;if(this.disabled)return!1;this.viewInited||setTimeout(function(){_this.viewInited=!0,_this.collapsed&&domHelper.addClass(_this.hostRef.nativeElement,"f-hide")})},SlideUpDownDirective.decorators=[{type:Directive,args:[{selector:"[euiSlideUpDown]"}]}],SlideUpDownDirective.ctorParameters=function(){return[{type:ElementRef}]},SlideUpDownDirective.propDecorators={animate:[{type:Input}],disabled:[{type:Input}],collapsed:[{type:Input}]},SlideUpDownDirective}();export{SlideUpDownDirective};