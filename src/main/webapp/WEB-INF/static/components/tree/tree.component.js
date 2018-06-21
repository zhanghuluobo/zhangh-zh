/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
import{Component,ContentChild,Input,Output,EventEmitter}from"@angular/core";import{ItemTemplateDirective}from"../base/template-base";import{treeHelper}from"../base/treehelper";var TreeComponent=function(){function TreeComponent(){this.data=[],this.selection=null,this.animate=!1,this.selectLeafOnly=!1,this.checkbox=!1,this.cascadeCheck=!0,this.filterIncludingChild=!1,this.filter=function(q,node){if(!q)return!0;var qq=q instanceof Array?q:[q];qq=qq.map(function(q){return q.trim()}).filter(function(q){return q});for(var i=0;i<qq.length;i++)if(node.text.toLowerCase().indexOf(qq[i].toLowerCase())>=0)return!0;return!qq.length},this.selectionChange=new EventEmitter,this.nodeClick=new EventEmitter,this.nodeExpand=new EventEmitter,this.nodeCollapse=new EventEmitter,this.nodeCheck=new EventEmitter,this.nodeUncheck=new EventEmitter,this.checkChange=new EventEmitter,this.nodeContextMenu=new EventEmitter}return Object.defineProperty(TreeComponent.prototype,"checkedNodes",{get:function(){return this.getCheckedNodes()},enumerable:!0,configurable:!0}),TreeComponent.prototype.getCheckedNodes=function(state){void 0===state&&(state="checked");var nodes=[];return treeHelper.cascadeCheck=this.cascadeCheck,treeHelper.forNodes(this.data,function(node){node.checkState==state&&nodes.push(node)}),nodes},TreeComponent.prototype.selectNode=function(node){node.children&&node.children.length&&this.selectLeafOnly||this.selection!=node&&(this.selection=node,this.selectionChange.emit(node))},TreeComponent.prototype.checkNode=function(node){var _this=this;treeHelper.cascadeCheck=this.cascadeCheck,treeHelper.checkNode(node,function(){_this.nodeCheck.emit(node),_this.checkChange.emit(_this.checkedNodes)})},TreeComponent.prototype.uncheckNode=function(node){var _this=this;treeHelper.cascadeCheck=this.cascadeCheck,treeHelper.uncheckNode(node,function(){_this.nodeUncheck.emit(node),_this.checkChange.emit(_this.checkedNodes)})},TreeComponent.prototype.uncheckAllNodes=function(){var _this=this;treeHelper.uncheckAllNodes(this.data,function(){_this.checkChange.emit([])})},TreeComponent.prototype.adjustCheck=function(node){treeHelper.cascadeCheck=this.cascadeCheck,treeHelper.adjustCheck(node)},TreeComponent.prototype.doFilter=function(q){var _this=this,nodes=[];treeHelper.cascadeCheck=this.cascadeCheck,treeHelper.forNodes(this.data,function(node){_this.filter(q,node)?(node.hidden=!1,nodes.push(node)):node.hidden=!0});for(var _i=0,nodes_1=nodes;_i<nodes_1.length;_i++){for(var node=nodes_1[_i],pnode=node.parent;pnode;)pnode.hidden=!1,pnode=pnode.parent;this.filterIncludingChild&&node.children&&treeHelper.forNodes(node.children,function(node){node.hidden=!1})}},TreeComponent.decorators=[{type:Component,args:[{selector:"eui-tree",template:'\n\t\t<ul class="tree">\n\t\t\t<ng-container *ngFor="let node of data">\n\t\t\t\t<eui-tree-node *ngIf="!node.hidden" [node]="node"></eui-tree-node>\n\t\t\t</ng-container>\n\t\t</ul>\n\t'}]}],TreeComponent.propDecorators={itemTemplate:[{type:ContentChild,args:[ItemTemplateDirective]}],data:[{type:Input}],selection:[{type:Input}],animate:[{type:Input}],selectLeafOnly:[{type:Input}],checkbox:[{type:Input}],cascadeCheck:[{type:Input}],filterIncludingChild:[{type:Input}],filter:[{type:Input}],selectionChange:[{type:Output}],nodeClick:[{type:Output}],nodeExpand:[{type:Output}],nodeCollapse:[{type:Output}],nodeCheck:[{type:Output}],nodeUncheck:[{type:Output}],checkChange:[{type:Output}],nodeContextMenu:[{type:Output}]},TreeComponent}();export{TreeComponent};