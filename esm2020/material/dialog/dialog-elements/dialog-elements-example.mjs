import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Dialog elements
 */
export class DialogElementsExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        this.dialog.open(DialogElementsExampleDialog);
    }
}
DialogElementsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: DialogElementsExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component });
DialogElementsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: DialogElementsExample, selector: "dialog-elements-example", ngImport: i0, template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>\n", components: [{ type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: DialogElementsExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-elements-example', template: "<button mat-button (click)=\"openDialog()\">Launch dialog</button>\n" }]
        }], ctorParameters: function () { return [{ type: i1.MatDialog }]; } });
export class DialogElementsExampleDialog {
}
DialogElementsExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: DialogElementsExampleDialog, deps: [], target: i0.ɵɵFactoryTarget.Component });
DialogElementsExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: DialogElementsExampleDialog, selector: "dialog-elements-example-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Dialog with elements</h1>\n<div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</div>\n", components: [{ type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]" }, { type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: DialogElementsExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-elements-example-dialog', template: "<h1 mat-dialog-title>Dialog with elements</h1>\n<div mat-dialog-content>This dialog showcases the title, close, content and actions elements.</div>\n<div mat-dialog-actions>\n  <button mat-button mat-dialog-close>Close</button>\n</div>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLWVsZW1lbnRzL2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1lbGVtZW50cy9kaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUVuRDs7R0FFRztBQUtILE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsWUFBbUIsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFeEMsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLENBQUM7SUFDaEQsQ0FBQzs7MEhBTFUscUJBQXFCOzhHQUFyQixxQkFBcUIsK0RDVmxDLHNFQUNBO21HRFNhLHFCQUFxQjtrQkFKakMsU0FBUzsrQkFDRSx5QkFBeUI7O0FBZXJDLE1BQU0sT0FBTywyQkFBMkI7O2dJQUEzQiwyQkFBMkI7b0hBQTNCLDJCQUEyQixzRUV0QnhDLCtPQUtBO21HRmlCYSwyQkFBMkI7a0JBSnZDLFNBQVM7K0JBQ0UsZ0NBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREaWFsb2d9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5cbi8qKlxuICogQHRpdGxlIERpYWxvZyBlbGVtZW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZWxlbWVudHMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWVsZW1lbnRzLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0VsZW1lbnRzRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCkge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctZWxlbWVudHMtZXhhbXBsZS1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1lbGVtZW50cy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nRWxlbWVudHNFeGFtcGxlRGlhbG9nIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPkxhdW5jaCBkaWFsb2c8L2J1dHRvbj5cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkRpYWxvZyB3aXRoIGVsZW1lbnRzPC9oMT5cbjxkaXYgbWF0LWRpYWxvZy1jb250ZW50PlRoaXMgZGlhbG9nIHNob3djYXNlcyB0aGUgdGl0bGUsIGNsb3NlLCBjb250ZW50IGFuZCBhY3Rpb25zIGVsZW1lbnRzLjwvZGl2PlxuPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnM+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBtYXQtZGlhbG9nLWNsb3NlPkNsb3NlPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==