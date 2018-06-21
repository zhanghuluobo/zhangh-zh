import { EventEmitter } from "@angular/core";
export declare class SideMenuComponent {
    collapsed: boolean;
    border: boolean;
    animate: boolean;
    multiple: boolean;
    floatMenuWidth: number;
    floatMenuPosition: string;
    selection: any;
    itemClick: EventEmitter<{}>;
    selectionChange: EventEmitter<{}>;
    _data: any;
    data: any;
    onSelectionChange(node: any): void;
    onNodeClick(node: any): void;
}
