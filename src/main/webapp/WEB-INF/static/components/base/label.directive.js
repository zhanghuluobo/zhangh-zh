/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Directive,ElementRef,Input}from"@angular/core";import{domHelper}from"./domhelper";var LabelDirective=function(){function LabelDirective(hostRef){this.hostRef=hostRef,this.align="left"}return LabelDirective.prototype.ngAfterViewInit=function(){var _this=this;setTimeout(function(){if(_this.target)if(_this.target.hasOwnProperty("inputId")){inputId=_this.initAttributes();_this.target.inputId=inputId}else if(_this.target instanceof Element){var inputId=_this.initAttributes(),att=document.createAttribute("id");att.value=inputId,_this.target.setAttributeNode(att)}})},LabelDirective.prototype.initAttributes=function(){domHelper.addClass(this.hostRef.nativeElement,"textbox-label"),domHelper.addClass(this.hostRef.nativeElement,"textbox-label-"+this.align);var inputId=LabelDirective.nextId(),att=document.createAttribute("for");return att.value=inputId,this.hostRef.nativeElement.setAttributeNode(att),inputId},LabelDirective.nextId=function(){return"_input_id_"+LabelDirective.index++},LabelDirective.index=1,LabelDirective.decorators=[{type:Directive,args:[{selector:"[for]"}]}],LabelDirective.ctorParameters=function(){return[{type:ElementRef}]},LabelDirective.propDecorators={target:[{type:Input,args:["for"]}],align:[{type:Input}]},LabelDirective}();export{LabelDirective};