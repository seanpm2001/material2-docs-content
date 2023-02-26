import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/menu";
/** @title Nested context menus. */
export class CdkMenuNestedContextExample {
}
CdkMenuNestedContextExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CdkMenuNestedContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkMenuNestedContextExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.0", type: CdkMenuNestedContextExample, selector: "cdk-menu-nested-context-example", exportAs: ["cdkMenuNestedContextExample"], ngImport: i0, template: "<!-- #docregion triggers -->\n<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"outer\">\n  Outer context menu\n  <div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\">Inner context menu</div>\n</div>\n<!-- #enddocregion triggers -->\n\n<ng-template #outer>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Save</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Exit</button>\n  </div>\n</ng-template>\n\n<ng-template #inner>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n", styles: [".example-context-area {\n  display: inline-grid;\n  border: 2px dashed black;\n}\n\n.example-context-area .example-context-area {\n  margin: 100px;\n  width: 200px;\n  height: 100px;\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: i1.CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }, { kind: "directive", type: i1.CdkContextMenuTrigger, selector: "[cdkContextMenuTriggerFor]", inputs: ["cdkContextMenuTriggerFor", "cdkContextMenuPosition", "cdkContextMenuTriggerData", "cdkContextMenuDisabled"], outputs: ["cdkContextMenuOpened", "cdkContextMenuClosed"], exportAs: ["cdkContextMenuTriggerFor"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CdkMenuNestedContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-nested-context-example', exportAs: 'cdkMenuNestedContextExample', template: "<!-- #docregion triggers -->\n<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"outer\">\n  Outer context menu\n  <div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\">Inner context menu</div>\n</div>\n<!-- #enddocregion triggers -->\n\n<ng-template #outer>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Save</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Exit</button>\n  </div>\n</ng-template>\n\n<ng-template #inner>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n", styles: [".example-context-area {\n  display: inline-grid;\n  border: 2px dashed black;\n}\n\n.example-context-area .example-context-area {\n  margin: 100px;\n  width: 200px;\n  height: 100px;\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtbmVzdGVkLWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9tZW51L2Nkay1tZW51LW5lc3RlZC1jb250ZXh0L2Nkay1tZW51LW5lc3RlZC1jb250ZXh0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1uZXN0ZWQtY29udGV4dC9jZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDLG1DQUFtQztBQU9uQyxNQUFNLE9BQU8sMkJBQTJCOzsrSEFBM0IsMkJBQTJCO21IQUEzQiwyQkFBMkIsa0hDVHhDLGt4QkFxQkE7a0dEWmEsMkJBQTJCO2tCQU52QyxTQUFTOytCQUNFLGlDQUFpQyxZQUNqQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgTmVzdGVkIGNvbnRleHQgbWVudXMuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtNZW51TmVzdGVkQ29udGV4dEV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLW1lbnUtbmVzdGVkLWNvbnRleHQtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtNZW51TmVzdGVkQ29udGV4dEV4YW1wbGUge31cbiIsIjwhLS0gI2RvY3JlZ2lvbiB0cmlnZ2VycyAtLT5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRleHQtYXJlYVwiIFtjZGtDb250ZXh0TWVudVRyaWdnZXJGb3JdPVwib3V0ZXJcIj5cbiAgT3V0ZXIgY29udGV4dCBtZW51XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRleHQtYXJlYVwiIFtjZGtDb250ZXh0TWVudVRyaWdnZXJGb3JdPVwiaW5uZXJcIj5Jbm5lciBjb250ZXh0IG1lbnU8L2Rpdj5cbjwvZGl2PlxuPCEtLSAjZW5kZG9jcmVnaW9uIHRyaWdnZXJzIC0tPlxuXG48bmctdGVtcGxhdGUgI291dGVyPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5TYXZlPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+RXhpdDwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZSAjaW5uZXI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkN1dDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkNvcHk8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5QYXN0ZTwvYnV0dG9uPlxuICA8L2Rpdj5cbjwvbmctdGVtcGxhdGU+XG4iXX0=