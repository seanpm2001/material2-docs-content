import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent, } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/button";
/**
 * @title Dialog Animations
 */
export class DialogAnimationsExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog(enterAnimationDuration, exitAnimationDuration) {
        this.dialog.open(DialogAnimationsExampleDialog, {
            width: '250px',
            enterAnimationDuration,
            exitAnimationDuration,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0+sha-37d1f71", ngImport: i0, type: DialogAnimationsExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0+sha-37d1f71", type: DialogAnimationsExample, isStandalone: true, selector: "dialog-animations-example", ngImport: i0, template: "<button mat-raised-button (click)=\"openDialog('0ms', '0ms')\">Open dialog without animation</button>\n<button mat-raised-button (click)=\"openDialog('3000ms', '1500ms')\">Open dialog slowly</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0+sha-37d1f71", ngImport: i0, type: DialogAnimationsExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-animations-example', standalone: true, imports: [MatButtonModule], template: "<button mat-raised-button (click)=\"openDialog('0ms', '0ms')\">Open dialog without animation</button>\n<button mat-raised-button (click)=\"openDialog('3000ms', '1500ms')\">Open dialog slowly</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
export class DialogAnimationsExampleDialog {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0+sha-37d1f71", ngImport: i0, type: DialogAnimationsExampleDialog, deps: [{ token: i1.MatDialogRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0+sha-37d1f71", type: DialogAnimationsExampleDialog, isStandalone: true, selector: "dialog-animations-example-dialog", ngImport: i0, template: "<h2 mat-dialog-title>Delete file</h2>\n<mat-dialog-content>\n  Would you like to delete cat.jpeg?\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "directive", type: MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0+sha-37d1f71", ngImport: i0, type: DialogAnimationsExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-animations-example-dialog', standalone: true, imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent], template: "<h2 mat-dialog-title>Delete file</h2>\n<mat-dialog-content>\n  Would you like to delete cat.jpeg?\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>No</button>\n  <button mat-button mat-dialog-close cdkFocusInitial>Ok</button>\n</mat-dialog-actions>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialogRef }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctYW5pbWF0aW9ucy9kaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1hbmltYXRpb25zL2RpYWxvZy1hbmltYXRpb25zLWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RpYWxvZy9kaWFsb2ctYW5pbWF0aW9ucy9kaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLWRpYWxvZy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsZ0JBQWdCLEdBQ2pCLE1BQU0sMEJBQTBCLENBQUM7QUFDbEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXpEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUFtQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV4QyxVQUFVLENBQUMsc0JBQThCLEVBQUUscUJBQTZCO1FBQ3RFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFO1lBQzlDLEtBQUssRUFBRSxPQUFPO1lBQ2Qsc0JBQXNCO1lBQ3RCLHFCQUFxQjtTQUN0QixDQUFDLENBQUM7SUFDTCxDQUFDO2lJQVRVLHVCQUF1QjtxSEFBdkIsdUJBQXVCLHFGQ3JCcEMsMk1BRUEsNEZEaUJZLGVBQWU7OzhHQUVkLHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSwyQkFBMkIsY0FHekIsSUFBSSxXQUNQLENBQUMsZUFBZSxDQUFDOztBQW9CNUIsTUFBTSxPQUFPLDZCQUE2QjtJQUN4QyxZQUFtQixTQUFzRDtRQUF0RCxjQUFTLEdBQVQsU0FBUyxDQUE2QztJQUFHLENBQUM7aUlBRGxFLDZCQUE2QjtxSEFBN0IsNkJBQTZCLDRGRXZDMUMsK1JBUUEsMkNGNkJZLGVBQWUsNE5BQUUsZ0JBQWdCLDRIQUFFLGNBQWMscUxBQUUsY0FBYywrSEFBRSxnQkFBZ0I7OzhHQUVsRiw2QkFBNkI7a0JBTnpDLFNBQVM7K0JBQ0Usa0NBQWtDLGNBRWhDLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxjQUFjLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTWF0RGlhbG9nLFxuICBNYXREaWFsb2dSZWYsXG4gIE1hdERpYWxvZ0FjdGlvbnMsXG4gIE1hdERpYWxvZ0Nsb3NlLFxuICBNYXREaWFsb2dUaXRsZSxcbiAgTWF0RGlhbG9nQ29udGVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgQW5pbWF0aW9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlJyxcbiAgc3R5bGVVcmw6ICdkaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLmNzcycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogTWF0RGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coZW50ZXJBbmltYXRpb25EdXJhdGlvbjogc3RyaW5nLCBleGl0QW5pbWF0aW9uRHVyYXRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oRGlhbG9nQW5pbWF0aW9uc0V4YW1wbGVEaWFsb2csIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZW50ZXJBbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGV4aXRBbmltYXRpb25EdXJhdGlvbixcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkaWFsb2ctYW5pbWF0aW9ucy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLWFuaW1hdGlvbnMtZXhhbXBsZS1kaWFsb2cuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdERpYWxvZ0FjdGlvbnMsIE1hdERpYWxvZ0Nsb3NlLCBNYXREaWFsb2dUaXRsZSwgTWF0RGlhbG9nQ29udGVudF0sXG59KVxuZXhwb3J0IGNsYXNzIERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ0FuaW1hdGlvbnNFeGFtcGxlRGlhbG9nPikge31cbn1cbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coJzBtcycsICcwbXMnKVwiPk9wZW4gZGlhbG9nIHdpdGhvdXQgYW5pbWF0aW9uPC9idXR0b24+XG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJvcGVuRGlhbG9nKCczMDAwbXMnLCAnMTUwMG1zJylcIj5PcGVuIGRpYWxvZyBzbG93bHk8L2J1dHRvbj5cbiIsIjxoMiBtYXQtZGlhbG9nLXRpdGxlPkRlbGV0ZSBmaWxlPC9oMj5cbjxtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIFdvdWxkIHlvdSBsaWtlIHRvIGRlbGV0ZSBjYXQuanBlZz9cbjwvbWF0LWRpYWxvZy1jb250ZW50PlxuPG1hdC1kaWFsb2ctYWN0aW9ucz5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2U+Tm88L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdC1kaWFsb2ctY2xvc2UgY2RrRm9jdXNJbml0aWFsPk9rPC9idXR0b24+XG48L21hdC1kaWFsb2ctYWN0aW9ucz5cbiJdfQ==