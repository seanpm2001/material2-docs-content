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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: FormFieldThemingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: FormFieldThemingExample, isStandalone: true, selector: "form-field-theming-example", ngImport: i0, template: "<mat-form-field [color]=\"colorControl.value!\">\n  <mat-label>Color</mat-label>\n  <mat-select [formControl]=\"colorControl\">\n    <mat-option value=\"primary\">Primary</mat-option>\n    <mat-option value=\"accent\">Accent</mat-option>\n    <mat-option value=\"warn\">Warn</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: FormFieldThemingExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-theming-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule], template: "<mat-form-field [color]=\"colorControl.value!\">\n  <mat-label>Color</mat-label>\n  <mat-select [formControl]=\"colorControl\">\n    <mat-option value=\"primary\">Primary</mat-option>\n    <mat-option value=\"accent\">Accent</mat-option>\n    <mat-option value=\"warn\">Warn</mat-option>\n  </mat-select>\n</mat-form-field>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtdGhlbWluZy9mb3JtLWZpZWxkLXRoZW1pbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC10aGVtaW5nL2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRTdFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBRWhFLGdDQUFnQztBQVFoQyxNQUFNLE9BQU8sdUJBQXVCO0lBUHBDO1FBUUUsaUJBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxTQUF5QixDQUFDLENBQUM7S0FDM0Q7cUhBRlksdUJBQXVCO3lHQUF2Qix1QkFBdUIsc0ZDZHBDLHVVQVFBLHVJRElZLGtCQUFrQiwwU0FBRSxlQUFlLHVUQUFFLFdBQVcsc0lBQUUsbUJBQW1COztrR0FFcEUsdUJBQXVCO2tCQVBuQyxTQUFTOytCQUNFLDRCQUE0QixjQUcxQixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgdGhlbWluZyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtdGhlbWluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC10aGVtaW5nLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRUaGVtaW5nRXhhbXBsZSB7XG4gIGNvbG9yQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgncHJpbWFyeScgYXMgVGhlbWVQYWxldHRlKTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBbY29sb3JdPVwiY29sb3JDb250cm9sLnZhbHVlIVwiPlxuICA8bWF0LWxhYmVsPkNvbG9yPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJjb2xvckNvbnRyb2xcIj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInByaW1hcnlcIj5QcmltYXJ5PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiYWNjZW50XCI+QWNjZW50PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwid2FyblwiPldhcm48L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=