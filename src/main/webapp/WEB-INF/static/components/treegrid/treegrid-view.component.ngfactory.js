/**
 * EasyUI for Angular 1.1.6
 * 
 * Copyright (c) 2009-2018 www.jeasyui.com. All rights reserved.
 *
 * Licensed under the freeware license: https://www.jeasyui.com/license_freeware2.php
 * To use it on other terms please contact us: info@jeasyui.com
 *
 */
function View_TreeGridViewComponent_1(_l){return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,null,null,1,"eui-grid-header",[["class","f-column f-noshrink"]],null,[[null,"cellClick"]],function(_v,en,$event){var ad=!0,_co=_v.component;return"cellClick"===en&&(ad=!1!==_co.onHeaderCellClick($event)&&ad),ad},i1.View_GridHeaderComponent_0,i1.RenderType_GridHeaderComponent)),i0.ɵdid(1,49152,[[1,4],["header",4]],0,i2.GridHeaderComponent,[],{columns:[0,"columns"],columnGroup:[1,"columnGroup"],paddingWidth:[2,"paddingWidth"],grid:[3,"grid"]},{cellClick:"cellClick"})],function(_ck,_v){var _co=_v.component;_ck(_v,1,0,_co.columns,_co.columnGroup,_co.headerPaddingWidth,_co.grid)},null)}function View_TreeGridViewComponent_2(_l){return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,null,null,1,"eui-grid-footer",[["class","f-column f-noshrink"]],null,null,null,i3.View_GridFooterComponent_0,i3.RenderType_GridFooterComponent)),i0.ɵdid(1,49152,[[2,4],["footer",4]],0,i4.GridFooterComponent,[],{columns:[0,"columns"],rows:[1,"rows"],paddingWidth:[2,"paddingWidth"]},null)],function(_ck,_v){var _co=_v.component;_ck(_v,1,0,_co.columns,_co.footerRows,_co.headerPaddingWidth)},null)}import*as i0 from"@angular/core";import*as i1 from"../gridbase/grid-header.component.ngfactory";import*as i2 from"../gridbase/grid-header.component";import*as i3 from"../gridbase/grid-footer.component.ngfactory";import*as i4 from"../gridbase/grid-footer.component";import*as i5 from"@angular/common";import*as i6 from"./treegrid-body.component.ngfactory";import*as i7 from"./treegrid-body.component";import*as i8 from"./treegrid-view.component";import*as i9 from"./treegrid.component";var styles_TreeGridViewComponent=[],RenderType_TreeGridViewComponent=i0.ɵcrt({encapsulation:2,styles:styles_TreeGridViewComponent,data:{}});export{RenderType_TreeGridViewComponent};export function View_TreeGridViewComponent_0(_l){return i0.ɵvid(0,[i0.ɵqud(671088640,1,{header:0}),i0.ɵqud(671088640,2,{footer:0}),i0.ɵqud(402653184,3,{body:0}),(_l()(),i0.ɵted(-1,null,["\n\t\t"])),(_l()(),i0.ɵand(16777216,null,null,1,null,View_TreeGridViewComponent_1)),i0.ɵdid(5,16384,null,0,i5.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,"ngIf"]},null),(_l()(),i0.ɵted(-1,null,["\n\t\t"])),(_l()(),i0.ɵeld(7,0,null,null,1,"eui-treegrid-body",[["align","center"],["class","f-column f-full"]],null,[[null,"bodyScroll"]],function(_v,en,$event){var ad=!0,_co=_v.component;return"bodyScroll"===en&&(ad=!1!==_co.onBodyScroll($event)&&ad),ad},i6.View_TreeGridBodyComponent_0,i6.RenderType_TreeGridBodyComponent)),i0.ɵdid(8,49152,[[3,4],["body",4]],0,i7.TreeGridBodyComponent,[i8.TreeGridViewComponent],{columns:[0,"columns"],rows:[1,"rows"]},{bodyScroll:"bodyScroll"}),(_l()(),i0.ɵted(-1,null,["\n\t\t"])),(_l()(),i0.ɵand(16777216,null,null,1,null,View_TreeGridViewComponent_2)),i0.ɵdid(11,16384,null,0,i5.NgIf,[i0.ViewContainerRef,i0.TemplateRef],{ngIf:[0,"ngIf"]},null),(_l()(),i0.ɵted(-1,null,["\n\t"]))],function(_ck,_v){var _co=_v.component;_ck(_v,5,0,_co.grid.showHeader),_ck(_v,8,0,_co.columns,_co.rows),_ck(_v,11,0,_co.grid.showFooter)},null)};export function View_TreeGridViewComponent_Host_0(_l){return i0.ɵvid(0,[(_l()(),i0.ɵeld(0,0,null,null,1,"eui-treegrid-view",[],[[8,"className",0]],null,null,View_TreeGridViewComponent_0,RenderType_TreeGridViewComponent)),i0.ɵdid(1,49152,null,0,i8.TreeGridViewComponent,[i9.TreeGridComponent],null,null)],null,function(_ck,_v){_ck(_v,0,0,i0.ɵnov(_v,1).viewCls)})};var TreeGridViewComponentNgFactory=i0.ɵccf("eui-treegrid-view",i8.TreeGridViewComponent,View_TreeGridViewComponent_Host_0,{columns:"columns",columnGroup:"columnGroup",viewIndex:"viewIndex",rows:"rows",footerRows:"footerRows",filterable:"filterable"},{bodyScroll:"bodyScroll"},[]);export{TreeGridViewComponentNgFactory};