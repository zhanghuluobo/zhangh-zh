/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Directive,ElementRef,Renderer2,Input,Output,HostListener,EventEmitter}from"@angular/core";import{DraggableProxyComponent}from"./draggable-proxy.component";import{domHelper}from"../base/domhelper";var DraggableDirective=function(){function DraggableDirective(hostRef,renderer){this.hostRef=hostRef,this.renderer=renderer,this.scope=null,this.handle=null,this.disabled=!1,this.revert=!1,this.deltaX=null,this.deltaY=null,this.edge=0,this.delay=100,this.axis=null,this.cursor="move",this.proxy=null,this.dragStart=new EventEmitter,this.drag=new EventEmitter,this.dragEnd=new EventEmitter,this.isDragging=!1,this.entered=!1,this.currDroppable=null,this.state=null,this.mousemoveListener=null,this.mouseupListener=null,this.touchmoveListener=null,this.touchendListener=null,this.hostTransitionListener=null}return DraggableDirective.prototype.parseEvent=function(event){if(["touchstart","touchmove","touchend","touchcancel"].indexOf(event.type)>=0){var touch=event.touches[0]||event.changedTouches[0];event.pageX=touch.pageX,event.pageY=touch.pageY}return event},DraggableDirective.prototype.getHandle=function(){return this.handle?this.handle instanceof Element?this.handle:this.handle.nativeElement:this.hostRef.nativeElement},DraggableDirective.prototype.onMouseDown=function(event){if(!this.disabled&&(event=this.parseEvent(event),0!=this.checkArea(event))){var handle=this.getHandle(),style=getComputedStyle(this.hostRef.nativeElement),position=domHelper.position(this.hostRef.nativeElement),offset=domHelper.offset(this.hostRef.nativeElement);this.state={target:this,startPosition:style.position,startLeft:position.left,startTop:position.top,left:position.left,top:position.top,startX:event.pageX,startY:event.pageY,width:domHelper.outerWidth(this.hostRef.nativeElement),height:domHelper.outerHeight(this.hostRef.nativeElement),offsetWidth:event.pageX-offset.left,offsetHeight:event.pageY-offset.top},this.renderer.setStyle(handle,"cursor",""),this.bindDocumentEvents()}},DraggableDirective.prototype.onMouseMove=function(event){if(!this.disabled&&!this.isDragging){event=this.parseEvent(event);var handle=this.getHandle();this.checkArea(event)?this.renderer.setStyle(handle,"cursor",this.cursor):this.renderer.setStyle(handle,"cursor","")}},DraggableDirective.prototype.onMouseLeave=function(event){if(!this.disabled){event=this.parseEvent(event);var handle=this.getHandle();this.renderer.setStyle(handle,"cursor","")}},DraggableDirective.prototype.doMove=function(event){var x1=(event=this.parseEvent(event)).pageX,y1=event.pageY,x2=this.state.startX,y2=this.state.startY;return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))>3&&!this.isDragging?(this.isDragging=!0,this.proxy?this.proxy.closed=!1:this.renderer.setStyle(this.hostRef.nativeElement,"position","absolute"),this.doDrag(event),this.applyDrag(),this.dragStart.emit(this.state),!1):(this.isDragging&&(this.doDrag(event),this.applyDrag(),this.checkDrag(event),this.drag.emit(this.state)),!1)},DraggableDirective.prototype.doUp=function(event){if(this.isDragging)return event=this.parseEvent(event),this.doMove(event),this.revert?this.checkDrop(event)?this.restorePosition():this.revertPosition():(this.renderer.setStyle(this.hostRef.nativeElement,"position","absolute"),this.renderer.setStyle(this.hostRef.nativeElement,"left",this.state.left+"px"),this.renderer.setStyle(this.hostRef.nativeElement,"top",this.state.top+"px"),this.checkDrop(event)),this.clearDragging(),this.dragEnd.emit(this.state),!1;this.clearDragging()},DraggableDirective.prototype.findDroppable=function(e){for(var i=DraggableDirective.droppables.length-1;i>=0;i--){var dropObj=DraggableDirective.droppables[i];if(!dropObj.disabled){var p2=domHelper.offset(dropObj.hostRef.nativeElement),width=domHelper.outerWidth(dropObj.hostRef.nativeElement),height=domHelper.outerHeight(dropObj.hostRef.nativeElement);if(e.pageX>p2.left&&e.pageX<p2.left+width&&e.pageY>p2.top&&e.pageY<p2.top+height&&dropObj.checkDrop(this.scope))return dropObj}}return null},DraggableDirective.prototype.checkDrag=function(e){var dropObj=this.findDroppable(e);this.currDroppable&&this.currDroppable!=dropObj&&this.entered&&(this.entered=!1,this.currDroppable.dragLeave.emit(this.scope),this.currDroppable=null),dropObj&&(this.currDroppable=dropObj,this.entered||(this.entered=!0,dropObj.dragEnter.emit(this.scope)),dropObj.dragOver.emit(this.scope))},DraggableDirective.prototype.checkDrop=function(e){var dropObj=this.findDroppable(e);return dropObj?(this.revert&&this.restorePosition(),this.removeProxy(),this.entered=!1,dropObj.drop.emit(this.scope),!0):(this.revert||this.removeProxy(),!1)},DraggableDirective.prototype.removeProxy=function(){this.proxy&&(this.proxy.reverting=!1,this.proxy.closed=!0)},DraggableDirective.prototype.revertPosition=function(){var _this=this;this.proxy?this.state.startX!=this.state.left||this.state.startY!=this.state.top?(this.proxy.reverting=!0,this.proxy.left=this.state.startX-this.state.offsetWidth,this.proxy.top=this.state.startY-this.state.offsetHeight):this.proxy.closed=!0:(this.hostTransitionListener=this.renderer.listen(this.hostRef.nativeElement,"transitionend",function(event){_this.renderer.removeClass(_this.hostRef.nativeElement,"draggable-reverting"),_this.renderer.setStyle(_this.hostRef.nativeElement,"position",_this.state.startPosition),_this.hostTransitionListener&&(_this.hostTransitionListener(),_this.hostTransitionListener=null)}),this.renderer.addClass(this.hostRef.nativeElement,"draggable-reverting"),this.renderer.setStyle(this.hostRef.nativeElement,"left",this.state.startLeft+"px"),this.renderer.setStyle(this.hostRef.nativeElement,"top",this.state.startTop+"px"))},DraggableDirective.prototype.restorePosition=function(){this.renderer.setStyle(this.hostRef.nativeElement,"position",this.state.startPosition),this.renderer.setStyle(this.hostRef.nativeElement,"left",this.state.startLeft+"px"),this.renderer.setStyle(this.hostRef.nativeElement,"top",this.state.startTop+"px")},DraggableDirective.prototype.bindDocumentEvents=function(){var _this=this;this.mousemoveListener||(this.mousemoveListener=this.renderer.listen("document","mousemove",function(event){return _this.doMove(event)})),this.touchmoveListener||(this.touchmoveListener=this.renderer.listen("document","touchmove",function(event){return _this.doMove(event)})),this.mouseupListener||(this.mouseupListener=this.renderer.listen("document","mouseup",function(event){return _this.doUp(event)})),this.touchendListener||(this.touchendListener=this.renderer.listen("document","touchend",function(event){return _this.doUp(event)}))},DraggableDirective.prototype.unbindDocumentEvents=function(){this.mousemoveListener&&(this.mousemoveListener(),this.mousemoveListener=null),this.touchmoveListener&&(this.touchmoveListener(),this.touchmoveListener=null),this.mouseupListener&&(this.mouseupListener(),this.mouseupListener=null),this.touchendListener&&(this.touchendListener(),this.touchendListener=null)},DraggableDirective.prototype.checkArea=function(e){var handle=this.getHandle(),offset=domHelper.offset(handle),width=domHelper.outerWidth(handle),height=domHelper.outerHeight(handle),t=e.pageY-offset.top,r=offset.left+width-e.pageX,b=offset.top+height-e.pageY,l=e.pageX-offset.left;return Math.min(t,r,b,l)>this.edge},DraggableDirective.prototype.clearDragging=function(){var _this=this;this.unbindDocumentEvents(),this.isDragging=!1,setTimeout(function(){_this.renderer.setStyle(document.body,"cursor","")})},DraggableDirective.prototype.doDrag=function(e){var dragData=this.state,left=0,top=0;this.proxy?(this.proxy.reverting=!1,left=null!=this.deltaX?e.pageX+this.deltaX:e.pageX-dragData.offsetWidth,top=null!=this.deltaY?e.pageY+this.deltaY:e.pageY-dragData.offsetHeight):(left=dragData.startLeft+e.pageX-dragData.startX,top=dragData.startTop+e.pageY-dragData.startY),this.hostRef.nativeElement.parentNode!=document.body&&(left+=this.hostRef.nativeElement.parentNode.scrollLeft,top+=this.hostRef.nativeElement.parentNode.scrollTop),"h"==this.axis?dragData.left=left:"v"==this.axis?dragData.top=top:(dragData.left=left,dragData.top=top)},DraggableDirective.prototype.applyDrag=function(){this.proxy?(this.proxy.left=this.state.left,this.proxy.top=this.state.top):(this.renderer.setStyle(this.hostRef.nativeElement,"left",this.state.left+"px"),this.renderer.setStyle(this.hostRef.nativeElement,"top",this.state.top+"px")),this.renderer.setStyle(document.body,"cursor",this.cursor)},DraggableDirective.droppables=[],DraggableDirective.decorators=[{type:Directive,args:[{selector:"[euiDraggable]"}]}],DraggableDirective.ctorParameters=function(){return[{type:ElementRef},{type:Renderer2}]},DraggableDirective.propDecorators={scope:[{type:Input,args:["euiDraggable"]}],handle:[{type:Input}],disabled:[{type:Input}],revert:[{type:Input}],deltaX:[{type:Input}],deltaY:[{type:Input}],edge:[{type:Input}],delay:[{type:Input}],axis:[{type:Input}],cursor:[{type:Input}],proxy:[{type:Input}],dragStart:[{type:Output}],drag:[{type:Output}],dragEnd:[{type:Output}],onMouseDown:[{type:HostListener,args:["touchstart",["$event"]]},{type:HostListener,args:["mousedown",["$event"]]}],onMouseMove:[{type:HostListener,args:["touchmove",["$event"]]},{type:HostListener,args:["mousemove",["$event"]]}],onMouseLeave:[{type:HostListener,args:["touchcancel",["$event"]]},{type:HostListener,args:["touchend",["$event"]]},{type:HostListener,args:["mouseleave",["$event"]]}]},DraggableDirective}();export{DraggableDirective};