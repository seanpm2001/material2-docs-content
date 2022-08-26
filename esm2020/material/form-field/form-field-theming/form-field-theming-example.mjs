import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/select";
import * as i6 from "@angular/material/core";
/** @title Form field theming */
export class FormFieldThemingExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.colorControl = new FormControl('primary');
        this.fontSizeControl = new FormControl(16, Validators.min(10));
        this.options = this._formBuilder.group({
            color: this.colorControl,
            fontSize: this.fontSizeControl,
        });
    }
    getFontSize() {
        return Math.max(10, this.fontSizeControl.value || 0);
    }
}
FormFieldThemingExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: FormFieldThemingExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
FormFieldThemingExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: FormFieldThemingExample, selector: "form-field-theming-example", ngImport: i0, template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field appearance=\"fill\" [color]=\"colorControl.value\">\n    <mat-label>Color</mat-label>\n    <mat-select [formControl]=\"colorControl\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" [color]=\"colorControl.value\">\n    <mat-label>Font size</mat-label>\n    <input matInput type=\"number\" placeholder=\"Ex. 12\" [formControl]=\"fontSizeControl\" min=\"10\">\n    <span matSuffix>px</span>\n    <mat-error *ngIf=\"fontSizeControl.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n</form>\n", styles: [".example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.MatError, selector: "mat-error", inputs: ["id"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix]" }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: FormFieldThemingExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-theming-example', template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field appearance=\"fill\" [color]=\"colorControl.value\">\n    <mat-label>Color</mat-label>\n    <mat-select [formControl]=\"colorControl\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" [color]=\"colorControl.value\">\n    <mat-label>Font size</mat-label>\n    <input matInput type=\"number\" placeholder=\"Ex. 12\" [formControl]=\"fontSizeControl\" min=\"10\">\n    <span matSuffix>px</span>\n    <mat-error *ngIf=\"fontSizeControl.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n</form>\n", styles: [".example-container .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFFcEUsZ0NBQWdDO0FBTWhDLE1BQU0sT0FBTyx1QkFBdUI7SUFRbEMsWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFQN0MsaUJBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxvQkFBZSxHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUQsWUFBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ2hDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWTtZQUN4QixRQUFRLEVBQUUsSUFBSSxDQUFDLGVBQWU7U0FDL0IsQ0FBQyxDQUFDO0lBRTZDLENBQUM7SUFFakQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7b0hBWlUsdUJBQXVCO3dHQUF2Qix1QkFBdUIsa0VDVHBDLCt5QkFpQkE7MkZEUmEsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB0aGVtaW5nICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUge1xuICBjb2xvckNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ3ByaW1hcnknKTtcbiAgZm9udFNpemVDb250cm9sID0gbmV3IEZvcm1Db250cm9sKDE2LCBWYWxpZGF0b3JzLm1pbigxMCkpO1xuICBvcHRpb25zID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIGNvbG9yOiB0aGlzLmNvbG9yQ29udHJvbCxcbiAgICBmb250U2l6ZTogdGhpcy5mb250U2l6ZUNvbnRyb2wsXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBnZXRGb250U2l6ZSgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMTAsIHRoaXMuZm9udFNpemVDb250cm9sLnZhbHVlIHx8IDApO1xuICB9XG59XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgW2Zvcm1Hcm91cF09XCJvcHRpb25zXCIgW3N0eWxlLmZvbnRTaXplLnB4XT1cImdldEZvbnRTaXplKClcIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGFwcGVhcmFuY2U9XCJmaWxsXCIgW2NvbG9yXT1cImNvbG9yQ29udHJvbC52YWx1ZVwiPlxuICAgIDxtYXQtbGFiZWw+Q29sb3I8L21hdC1sYWJlbD5cbiAgICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiY29sb3JDb250cm9sXCI+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInByaW1hcnlcIj5QcmltYXJ5PC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJhY2NlbnRcIj5BY2NlbnQ8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIndhcm5cIj5XYXJuPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBbY29sb3JdPVwiY29sb3JDb250cm9sLnZhbHVlXCI+XG4gICAgPG1hdC1sYWJlbD5Gb250IHNpemU8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwiRXguIDEyXCIgW2Zvcm1Db250cm9sXT1cImZvbnRTaXplQ29udHJvbFwiIG1pbj1cIjEwXCI+XG4gICAgPHNwYW4gbWF0U3VmZml4PnB4PC9zcGFuPlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJmb250U2l6ZUNvbnRyb2wuaW52YWxpZFwiPk1pbiBzaXplOiAxMHB4PC9tYXQtZXJyb3I+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=