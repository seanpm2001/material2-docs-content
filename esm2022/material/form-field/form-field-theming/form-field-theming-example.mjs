import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
/** @title Form field theming */
export class FormFieldThemingExample {
    constructor() {
        this.colorControl = new FormControl('primary');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.0", ngImport: i0, type: FormFieldThemingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.0", type: FormFieldThemingExample, isStandalone: true, selector: "form-field-theming-example", ngImport: i0, template: "<mat-form-field [color]=\"colorControl.value!\">\n  <mat-label>Color</mat-label>\n  <mat-select [formControl]=\"colorControl\">\n    <mat-option value=\"primary\">Primary</mat-option>\n    <mat-option value=\"accent\">Accent</mat-option>\n    <mat-option value=\"warn\">Warn</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.0", ngImport: i0, type: FormFieldThemingExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-theming-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field [color]=\"colorControl.value!\">\n  <mat-label>Color</mat-label>\n  <mat-select [formControl]=\"colorControl\">\n    <mat-option value=\"primary\">Primary</mat-option>\n    <mat-option value=\"accent\">Accent</mat-option>\n    <mat-option value=\"warn\">Warn</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBRWhFLGdDQUFnQztBQVFoQyxNQUFNLE9BQU8sdUJBQXVCO0lBUHBDO1FBUUUsaUJBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUF5QixDQUFDLENBQUM7S0FDM0Q7bUhBRlksdUJBQXVCO3VHQUF2Qix1QkFBdUIsc0ZDZHBDLHVVQVFBLHVJRElZLGtCQUFrQiwwU0FBRSxlQUFlLG1yQkFBRSxXQUFXLHNJQUFFLG1CQUFtQjs7Z0dBRXBFLHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FHMUIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHRoZW1pbmcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdmb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkVGhlbWluZ0V4YW1wbGUge1xuICBjb2xvckNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ3ByaW1hcnknIGFzIFRoZW1lUGFsZXR0ZSk7XG59XG4iLCI8bWF0LWZvcm0tZmllbGQgW2NvbG9yXT1cImNvbG9yQ29udHJvbC52YWx1ZSFcIj5cbiAgPG1hdC1sYWJlbD5Db2xvcjwvbWF0LWxhYmVsPlxuICA8bWF0LXNlbGVjdCBbZm9ybUNvbnRyb2xdPVwiY29sb3JDb250cm9sXCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJwcmltYXJ5XCI+UHJpbWFyeTwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImFjY2VudFwiPkFjY2VudDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIndhcm5cIj5XYXJuPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19