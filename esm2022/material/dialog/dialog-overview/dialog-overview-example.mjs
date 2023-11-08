import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/button";
/**
 * @title Dialog Overview
 */
export class DialogOverviewExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
            data: { name: this.name, animal: this.animal },
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: DialogOverviewExample, deps: [{ token: i1.MatDialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.0", type: DialogOverviewExample, isStandalone: true, selector: "dialog-overview-example", ngImport: i0, template: "<ol>\n  <li>\n    <mat-form-field>\n      <mat-label>What's your name?</mat-label>\n      <input matInput [(ngModel)]=\"name\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  @if (animal) {\n    <li>You chose: <em>{{animal}}</em></li>\n  }\n</ol>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatDialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: DialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-overview-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatDialogModule], template: "<ol>\n  <li>\n    <mat-form-field>\n      <mat-label>What's your name?</mat-label>\n      <input matInput [(ngModel)]=\"name\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  @if (animal) {\n    <li>You chose: <em>{{animal}}</em></li>\n  }\n</ol>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialog }] });
export class DialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: DialogOverviewExampleDialog, deps: [{ token: i1.MatDialogRef }, { token: MAT_DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: DialogOverviewExampleDialog, isStandalone: true, selector: "dialog-overview-example-dialog", ngImport: i0, template: "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>\n", dependencies: [{ kind: "ngmodule", type: MatDialogModule }, { kind: "directive", type: i1.MatDialogClose, selector: "[mat-dialog-close], [matDialogClose]", inputs: ["aria-label", "type", "mat-dialog-close", "matDialogClose"], exportAs: ["matDialogClose"] }, { kind: "directive", type: i1.MatDialogTitle, selector: "[mat-dialog-title], [matDialogTitle]", inputs: ["id"], exportAs: ["matDialogTitle"] }, { kind: "directive", type: i1.MatDialogActions, selector: "[mat-dialog-actions], mat-dialog-actions, [matDialogActions]", inputs: ["align"] }, { kind: "directive", type: i1.MatDialogContent, selector: "[mat-dialog-content], mat-dialog-content, [matDialogContent]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i4.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: DialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'dialog-overview-example-dialog', standalone: true, imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule], template: "<h1 mat-dialog-title>Hi {{data.name}}</h1>\n<div mat-dialog-content>\n  <p>What's your favorite animal?</p>\n  <mat-form-field>\n    <mat-label>Favorite Animal</mat-label>\n    <input matInput [(ngModel)]=\"data.animal\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button (click)=\"onNoClick()\">No Thanks</button>\n  <button mat-button [mat-dialog-close]=\"data.animal\" cdkFocusInitial>Ok</button>\n</div>\n" }]
        }], ctorParameters: () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [MAT_DIALOG_DATA]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kaWFsb2cvZGlhbG9nLW92ZXJ2aWV3L2RpYWxvZy1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGlhbG9nL2RpYWxvZy1vdmVydmlldy9kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDbkcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFPaEU7O0dBRUc7QUFPSCxNQUFNLE9BQU8scUJBQXFCO0lBSWhDLFlBQW1CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXhDLFVBQVU7UUFDUixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQywyQkFBMkIsRUFBRTtZQUM5RCxJQUFJLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBQztTQUM3QyxDQUFDLENBQUM7UUFFSCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBZlUscUJBQXFCO2tHQUFyQixxQkFBcUIsbUZDckJsQyx5VUFjQSwyQ0RLWSxrQkFBa0IsMFNBQUUsY0FBYywwV0FBRSxXQUFXLDhtQkFBRSxlQUFlLDJOQUFFLGVBQWU7OzJGQUVoRixxQkFBcUI7a0JBTmpDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLGVBQWUsQ0FBQzs7QUEwQjlGLE1BQU0sT0FBTywyQkFBMkI7SUFDdEMsWUFDUyxTQUFvRCxFQUMzQixJQUFnQjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUEyQztRQUMzQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQy9DLENBQUM7SUFFSixTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzhHQVJVLDJCQUEyQiw4Q0FHNUIsZUFBZTtrR0FIZCwyQkFBMkIsMEZFN0N4QyxzYkFZQSwyQ0YrQlksZUFBZSwrbkJBQUUsa0JBQWtCLDBTQUFFLGNBQWMsMFdBQUUsV0FBVyw4bUJBQUUsZUFBZTs7MkZBRWhGLDJCQUEyQjtrQkFOdkMsU0FBUzsrQkFDRSxnQ0FBZ0MsY0FFOUIsSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDOzswQkFLekYsTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERpYWxvZywgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dSZWYsIE1hdERpYWxvZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBEaWFsb2cgT3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgRm9ybXNNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlIHtcbiAgYW5pbWFsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHt9XG5cbiAgb3BlbkRpYWxvZygpOiB2b2lkIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZywge1xuICAgICAgZGF0YToge25hbWU6IHRoaXMubmFtZSwgYW5pbWFsOiB0aGlzLmFuaW1hbH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgZGlhbG9nIHdhcyBjbG9zZWQnKTtcbiAgICAgIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0RGlhbG9nTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBGb3Jtc01vZHVsZSwgTWF0QnV0dG9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPERpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhLFxuICApIHt9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cbiIsIjxvbD5cbiAgPGxpPlxuICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgIDxtYXQtbGFiZWw+V2hhdCdzIHlvdXIgbmFtZT88L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgICA8L21hdC1mb3JtLWZpZWxkPlxuICA8L2xpPlxuICA8bGk+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlbkRpYWxvZygpXCI+UGljayBvbmU8L2J1dHRvbj5cbiAgPC9saT5cbiAgQGlmIChhbmltYWwpIHtcbiAgICA8bGk+WW91IGNob3NlOiA8ZW0+e3thbmltYWx9fTwvZW0+PC9saT5cbiAgfVxuPC9vbD5cbiIsIjxoMSBtYXQtZGlhbG9nLXRpdGxlPkhpIHt7ZGF0YS5uYW1lfX08L2gxPlxuPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQ+XG4gIDxwPldoYXQncyB5b3VyIGZhdm9yaXRlIGFuaW1hbD88L3A+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkZhdm9yaXRlIEFuaW1hbDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbKG5nTW9kZWwpXT1cImRhdGEuYW5pbWFsXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbjxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cIm9uTm9DbGljaygpXCI+Tm8gVGhhbmtzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0LWRpYWxvZy1jbG9zZV09XCJkYXRhLmFuaW1hbFwiIGNka0ZvY3VzSW5pdGlhbD5PazwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=