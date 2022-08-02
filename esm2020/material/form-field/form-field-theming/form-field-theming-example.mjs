import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
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
        this.options = this._formBuilder.group({
            color: this._formBuilder.control('primary'),
            fontSize: this._formBuilder.control(16, Validators.min(10)),
        });
    }
    getFontSize() {
        return Math.max(10, this.options.value.fontSize || 0);
    }
}
FormFieldThemingExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FormFieldThemingExample, deps: [{ token: i1.NonNullableFormBuilder }], target: i0.ɵɵFactoryTarget.Component });
FormFieldThemingExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: FormFieldThemingExample, selector: "form-field-theming-example", ngImport: i0, template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field appearance=\"fill\" [color]=\"options.value.color\">\n    <mat-label>Color</mat-label>\n    <mat-select formControlName=\"color\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" [color]=\"options.value.color\">\n    <mat-label>Font size</mat-label>\n    <input matInput type=\"number\" placeholder=\"Ex. 12\" formControlName=\"fontSize\" min=\"10\">\n    <span matTextSuffix>px</span>\n    <mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n</form>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "directive", type: i3.MatError, selector: "mat-error", inputs: ["id"] }, { kind: "directive", type: i3.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]" }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i5.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i6.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.MinValidator, selector: "input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]", inputs: ["min"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: FormFieldThemingExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-theming-example', template: "<form class=\"example-container\" [formGroup]=\"options\" [style.fontSize.px]=\"getFontSize()\">\n  <mat-form-field appearance=\"fill\" [color]=\"options.value.color\">\n    <mat-label>Color</mat-label>\n    <mat-select formControlName=\"color\">\n      <mat-option value=\"primary\">Primary</mat-option>\n      <mat-option value=\"accent\">Accent</mat-option>\n      <mat-option value=\"warn\">Warn</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field appearance=\"fill\" [color]=\"options.value.color\">\n    <mat-label>Font size</mat-label>\n    <input matInput type=\"number\" placeholder=\"Ex. 12\" formControlName=\"fontSize\" min=\"10\">\n    <span matTextSuffix>px</span>\n    <mat-error *ngIf=\"options.get('fontSize')?.invalid\">Min size: 10px</mat-error>\n  </mat-form-field>\n</form>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NonNullableFormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUUsVUFBVSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBR2xFLGdDQUFnQztBQU1oQyxNQUFNLE9BQU8sdUJBQXVCO0lBTWxDLFlBQW9CLFlBQW9DO1FBQXBDLGlCQUFZLEdBQVosWUFBWSxDQUF3QjtRQUx4RCxZQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDaEMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQXlCLENBQUM7WUFDM0QsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzVELENBQUMsQ0FBQztJQUV3RCxDQUFDO0lBRTVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDOztvSEFWVSx1QkFBdUI7d0dBQXZCLHVCQUF1QixrRUNWcEMsb3pCQWlCQTsyRkRQYSx1QkFBdUI7a0JBTG5DLFNBQVM7K0JBQ0UsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOb25OdWxsYWJsZUZvcm1CdWlsZGVyLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8qKiBAdGl0bGUgRm9ybSBmaWVsZCB0aGVtaW5nICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUge1xuICBvcHRpb25zID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIGNvbG9yOiB0aGlzLl9mb3JtQnVpbGRlci5jb250cm9sKCdwcmltYXJ5JyBhcyBUaGVtZVBhbGV0dGUpLFxuICAgIGZvbnRTaXplOiB0aGlzLl9mb3JtQnVpbGRlci5jb250cm9sKDE2LCBWYWxpZGF0b3JzLm1pbigxMCkpLFxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogTm9uTnVsbGFibGVGb3JtQnVpbGRlcikge31cblxuICBnZXRGb250U2l6ZSgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoMTAsIHRoaXMub3B0aW9ucy52YWx1ZS5mb250U2l6ZSB8fCAwKTtcbiAgfVxufVxuIiwiPGZvcm0gY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiIFtmb3JtR3JvdXBdPVwib3B0aW9uc1wiIFtzdHlsZS5mb250U2l6ZS5weF09XCJnZXRGb250U2l6ZSgpXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiIFtjb2xvcl09XCJvcHRpb25zLnZhbHVlLmNvbG9yXCI+XG4gICAgPG1hdC1sYWJlbD5Db2xvcjwvbWF0LWxhYmVsPlxuICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImNvbG9yXCI+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInByaW1hcnlcIj5QcmltYXJ5PC9tYXQtb3B0aW9uPlxuICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJhY2NlbnRcIj5BY2NlbnQ8L21hdC1vcHRpb24+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIndhcm5cIj5XYXJuPC9tYXQtb3B0aW9uPlxuICAgIDwvbWF0LXNlbGVjdD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBbY29sb3JdPVwib3B0aW9ucy52YWx1ZS5jb2xvclwiPlxuICAgIDxtYXQtbGFiZWw+Rm9udCBzaXplPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBwbGFjZWhvbGRlcj1cIkV4LiAxMlwiIGZvcm1Db250cm9sTmFtZT1cImZvbnRTaXplXCIgbWluPVwiMTBcIj5cbiAgICA8c3BhbiBtYXRUZXh0U3VmZml4PnB4PC9zcGFuPlxuICAgIDxtYXQtZXJyb3IgKm5nSWY9XCJvcHRpb25zLmdldCgnZm9udFNpemUnKT8uaW52YWxpZFwiPk1pbiBzaXplOiAxMHB4PC9tYXQtZXJyb3I+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Zvcm0+XG4iXX0=