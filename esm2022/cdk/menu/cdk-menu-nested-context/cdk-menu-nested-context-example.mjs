import { Component } from '@angular/core';
import { CdkMenu, CdkMenuItem, CdkContextMenuTrigger } from '@angular/cdk/menu';
import * as i0 from "@angular/core";
/** @title Nested context menus. */
export class CdkMenuNestedContextExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: CdkMenuNestedContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0", type: CdkMenuNestedContextExample, isStandalone: true, selector: "cdk-menu-nested-context-example", exportAs: ["cdkMenuNestedContextExample"], ngImport: i0, template: "<!-- #docregion triggers -->\n<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"outer\">\n  Outer context menu\n  <div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\">Inner context menu</div>\n</div>\n<!-- #enddocregion triggers -->\n\n<ng-template #outer>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Save</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Exit</button>\n  </div>\n</ng-template>\n\n<ng-template #inner>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n", styles: [".example-context-area {\n  display: inline-grid;\n  border: 2px dashed black;\n}\n\n.example-context-area .example-context-area {\n  margin: 100px;\n  width: 200px;\n  height: 100px;\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], dependencies: [{ kind: "directive", type: CdkContextMenuTrigger, selector: "[cdkContextMenuTriggerFor]", inputs: ["cdkContextMenuTriggerFor", "cdkContextMenuPosition", "cdkContextMenuTriggerData", "cdkContextMenuDisabled"], outputs: ["cdkContextMenuOpened", "cdkContextMenuClosed"], exportAs: ["cdkContextMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: CdkMenuNestedContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-nested-context-example', exportAs: 'cdkMenuNestedContextExample', standalone: true, imports: [CdkContextMenuTrigger, CdkMenu, CdkMenuItem], template: "<!-- #docregion triggers -->\n<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"outer\">\n  Outer context menu\n  <div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\">Inner context menu</div>\n</div>\n<!-- #enddocregion triggers -->\n\n<ng-template #outer>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Save</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Exit</button>\n  </div>\n</ng-template>\n\n<ng-template #inner>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Paste</button>\n  </div>\n</ng-template>\n", styles: [".example-context-area {\n  display: inline-grid;\n  border: 2px dashed black;\n}\n\n.example-context-area .example-context-area {\n  margin: 100px;\n  width: 200px;\n  height: 100px;\n}\n\n.example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtbmVzdGVkLWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9tZW51L2Nkay1tZW51LW5lc3RlZC1jb250ZXh0L2Nkay1tZW51LW5lc3RlZC1jb250ZXh0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1uZXN0ZWQtY29udGV4dC9jZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDOztBQUU5RSxtQ0FBbUM7QUFTbkMsTUFBTSxPQUFPLDJCQUEyQjs4R0FBM0IsMkJBQTJCO2tHQUEzQiwyQkFBMkIsc0lDWnhDLGt4QkFxQkEsazBCRFhZLHFCQUFxQixpU0FBRSxPQUFPLGtHQUFFLFdBQVc7OzJGQUUxQywyQkFBMkI7a0JBUnZDLFNBQVM7K0JBQ0UsaUNBQWlDLFlBQ2pDLDZCQUE2QixjQUczQixJQUFJLFdBQ1AsQ0FBQyxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtNZW51LCBDZGtNZW51SXRlbSwgQ2RrQ29udGV4dE1lbnVUcmlnZ2VyfSBmcm9tICdAYW5ndWxhci9jZGsvbWVudSc7XG5cbi8qKiBAdGl0bGUgTmVzdGVkIGNvbnRleHQgbWVudXMuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtNZW51TmVzdGVkQ29udGV4dEV4YW1wbGUnLFxuICBzdHlsZVVybDogJ2Nkay1tZW51LW5lc3RlZC1jb250ZXh0LWV4YW1wbGUuY3NzJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1uZXN0ZWQtY29udGV4dC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrQ29udGV4dE1lbnVUcmlnZ2VyLCBDZGtNZW51LCBDZGtNZW51SXRlbV0sXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVOZXN0ZWRDb250ZXh0RXhhbXBsZSB7fVxuIiwiPCEtLSAjZG9jcmVnaW9uIHRyaWdnZXJzIC0tPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGV4dC1hcmVhXCIgW2Nka0NvbnRleHRNZW51VHJpZ2dlckZvcl09XCJvdXRlclwiPlxuICBPdXRlciBjb250ZXh0IG1lbnVcbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGV4dC1hcmVhXCIgW2Nka0NvbnRleHRNZW51VHJpZ2dlckZvcl09XCJpbm5lclwiPklubmVyIGNvbnRleHQgbWVudTwvZGl2PlxuPC9kaXY+XG48IS0tICNlbmRkb2NyZWdpb24gdHJpZ2dlcnMgLS0+XG5cbjxuZy10ZW1wbGF0ZSAjb3V0ZXI+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlNhdmU8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5FeGl0PC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cblxuPG5nLXRlbXBsYXRlICNpbm5lcj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudVwiIGNka01lbnU+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Q3V0PC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+Q29weTwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlBhc3RlPC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==