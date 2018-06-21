import { ElementRef } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { BodyTemplateDirective } from '../base/template-base';
import { MessagerService } from './messager.service';
export declare const MESSAGER_TEMPLATE = "\n\t<div #panel *ngIf=\"!closed\" class=\"panel f-column f-full\" [ngClass]=\"panelCls\" [ngStyle]=\"panelStyle\"\n\t\t\teuiDraggable euiResizable>\n\t\t<div #pheader *ngIf=\"hasHeader\"\n\t\t\t\tclass=\"panel-header f-noshrink\"\n\t\t\t\t[class.panel-header-noborder]=\"!border\"\n\t\t\t\t[ngClass]=\"headerCls\"\n\t\t\t\t[ngStyle]=\"headerStyle\">\n\t\t\t<ng-content select=\"eui-panel-header,eui-dialog-header,eui-messager-header\"></ng-content>\n\t\t\t<div *ngIf=\"!headers.length\" class=\"panel-title\" [class.panel-with-icon]=\"iconCls\">{{title}}</div>\n\t\t\t<div *ngIf=\"iconCls\" class=\"panel-icon {{iconCls}}\"></div>\n\t\t\t<div class=\"panel-tool\" *ngIf=\"collapsible || closable\">\n\t\t\t\t<a *ngIf=\"collapsible\" href=\"javascript:;\" [ngClass]=\"collapsed?expandIconCls:collapseIconCls\" (click)=\"onClickCollapsibleTool($event)\"></a>\n\t\t\t\t<a *ngIf=\"closable\" href=\"javascript:;\" [ngClass]=\"closeIconCls\" (click)=\"onClickCloseTool($event)\"></a>\n\t\t\t</div>\n\t\t</div>\n\t\t<div #pbody *ngIf=\"!isBodyCollapsed()\"\n\t\t\t\tclass=\"panel-body f-full\" \n\t\t\t\t[class.panel-body-noheader]=\"!hasHeader\" \n\t\t\t\t[class.panel-body-nobottom]=\"footers.length\" \n\t\t\t\t[class.panel-body-noborder]=\"!border\" \n\t\t\t\t[ngClass]=\"bodyCls\"\n\t\t\t\t[ngStyle]=\"bodyStyle\">\n\t\t\t<ng-template *ngIf=\"bodyTemplate\" [euiMessagerBodyTemplate]=\"bodyTemplate.template\" [messager]=\"this\"></ng-template>\n\t\t\t<ng-container *ngIf=\"!bodyTemplate\">\n\t\t\t\t<div class=\"messager-body f-full f-column\">\n\t\t\t\t\t<div class=\"f-row f-full\">\n\t\t\t\t\t\t<div *ngIf=\"messagerIcon\" class=\"f-noshrink messager-icon\" [ngClass]=\"messagerIcon\"></div>\n\t\t\t\t\t\t<div class=\"f-full\" style=\"margin-bottom:20px\">\n\t\t\t\t\t\t\t<ng-content></ng-content>\n\t\t\t\t\t\t\t{{msg}}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div *ngIf=\"messagerType=='prompt'\">\n\t\t\t\t\t\t<input #input class=\"messager-input\" [(ngModel)]=\"inputValue\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div *ngIf=\"!hasFooter && buttons.length\" class=\"dialog-button messager-button\">\n\t\t\t\t\t<eui-linkbutton *ngFor=\"let button of buttons\" [text]=\"button.text\" (click)=\"closeDialog(button)\"></eui-linkbutton>\n\t\t\t\t</div>\n\t\t\t</ng-container>\n\t\t</div>\n\t\t<div #pfooter *ngIf=\"hasFooter\" \n\t\t\t\tclass=\"panel-footer\" \n\t\t\t\t[class.panel-footer-noborder]=\"!border\"\n\t\t\t\t[ngClass]=\"footerCls\"\n\t\t\t\t[ngStyle]=\"footerStyle\">\n\t\t\t<ng-content select=\"eui-panel-footer,eui-dialog-footer,eui-messager-footer\"></ng-content>\n\t\t</div>\n\t</div>\n";
export declare class MessagerComponent extends DialogComponent {
    hostRef: ElementRef;
    messagerService: MessagerService;
    inputRef: ElementRef;
    bodyTemplate: BodyTemplateDirective;
    title: string;
    panelStyle: Object;
    modal: boolean;
    icon: string;
    msg: string;
    ok: string;
    cancel: string;
    buttons: any[];
    messagerType: string;
    inputValue: string;
    resultValue: any;
    options: any;
    originalOptions: any;
    _closed: boolean;
    _bodyCls: string;
    bodyCls: string;
    readonly messagerIcon: string;
    constructor(hostRef: ElementRef, messagerService: MessagerService);
    openDialog(options: any, type?: string): void;
    closeDialog(result?: any): void;
    saveState(options: any): void;
    restoreState(): void;
    buildAlertOptions(options: any): any;
    buildConfirmOptions(options: any): any;
    buildPromptOptions(options: any): any;
}
