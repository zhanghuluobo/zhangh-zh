import { ElementRef, QueryList, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { AddonComponent } from './addon.component';
import { ValueAccessorBase } from './value-accessor-base';
export declare const INPUT_BASE_TEMPLATE = "\n\t<span class=\"textbox f-inline-row f-full\" \n\t\t\t[ngClass]=\"cls\"\n\t\t\t[class.textbox-disabled]=\"disabled\"\n\t\t\t[class.textbox-readonly]=\"readonly\"\n\t\t\t[class.textbox-focused]=\"focused\"\n\t\t\t[class.textbox-invalid]=\"invalid\">\n\t\t<input #input *ngIf=\"!multiline\" autocomplete=\"off\" class=\"textbox-text f-full f-order3\"\n\t\t\t\t[class.validatebox-invalid]=\"invalid\"\n\t\t\t\t[attr.id]=\"inputId\"\n\t\t\t\t[attr.disabled]=\"disabled?'disabled':null\"\n\t\t\t\t[attr.readonly]=\"(readonly||!editable)?'readonly':null\"\n\t\t\t\t[attr.tabindex]=\"tabindex\"\n\t\t\t\t[ngClass]=\"inputCls\"\n\t\t\t\t[ngStyle]=\"inputStyle\"\n\t\t\t\t[(ngModel)]=\"text\"\n\t\t\t\t[placeholder]=\"placeholder\"\n\t\t\t\t(focus)=\"focus()\"\n\t\t\t\t(blur)=\"blur()\">\n\t\t<textarea #input *ngIf=\"multiline\" autocomplete=\"off\" class=\"textbox-text f-full f-order3\"\n\t\t\t\t[class.validatebox-invalid]=\"invalid\"\n\t\t\t\t[attr.id]=\"inputId\"\n\t\t\t\t[attr.disabled]=\"disabled?'disabled':null\"\n\t\t\t\t[attr.readonly]=\"(readonly||!editable)?'readonly':null\"\n\t\t\t\t[attr.tabindex]=\"tabindex\"\n\t\t\t\t[ngClass]=\"inputCls\"\n\t\t\t\t[ngStyle]=\"inputStyle\"\n\t\t\t\t[(ngModel)]=\"text\"\n\t\t\t\t[placeholder]=\"placeholder\"\n\t\t\t\t(focus)=\"focus()\"\n\t\t\t\t(blur)=\"blur()\"></textarea>\n\t\t<input class=\"textbox-value\" type=\"hidden\" [value]=\"value\" [attr.disabled]=\"disabled?'disabled':null\">\n\t\t<ng-content select=\"eui-addon\"></ng-content>\n\t\t<span #addon *ngIf=\"iconCls\" \n\t\t\t\tclass=\"textbox-addon textbox-addon-icon f-inline-row f-noshrink\" \n\t\t\t\t[class.f-order1]=\"iconAlign=='left'\"\n\t\t\t\t[class.f-order5]=\"iconAlign=='right'\">\n\t\t\t<span class=\"textbox-icon textbox-icon-disabled {{iconCls}}\"></span>\n\t\t</span>\n\t</span>\n";
export declare class InputBaseComponent<T> extends ValueAccessorBase<T> {
    cdRef: ChangeDetectorRef;
    addonRef: ElementRef;
    inputRef: ElementRef;
    addons: QueryList<AddonComponent>;
    textFormatter: Function;
    disabled: boolean;
    readonly: boolean;
    editable: boolean;
    iconCls: string;
    iconAlign: string;
    placeholder: string;
    multiline: boolean;
    invalid: boolean;
    tabindex: number;
    cls: string;
    inputCls: string;
    inputStyle: Object;
    inputId: string;
    onFocus: EventEmitter<{}>;
    onBlur: EventEmitter<{}>;
    protected _focused: boolean;
    protected _defaultTextFormatter(value: any): any;
    constructor(cdRef: ChangeDetectorRef);
    ngOnInit(): void;
    readonly focused: boolean;
    focus(): void;
    blur(): void;
    getSelectionStart(): number;
    getSelectionRange(): {
        start: number;
        end: number;
    };
    setSelectionRange(start: number, end: number): void;
}
