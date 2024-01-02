import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
import * as i4 from "@angular/material/button";
/** @title Datepicker action buttons */
export class DatepickerActionsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-next.5", ngImport: i0, type: DatepickerActionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-next.5", type: DatepickerActionsExample, isStandalone: true, selector: "datepicker-actions-example", ngImport: i0, template: "<mat-form-field class=\"example-form-field\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"datepicker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n<!-- #docregion datepicker-actions -->\n  <mat-datepicker #datepicker>\n    <mat-datepicker-actions>\n      <button mat-button matDatepickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDatepickerApply>Apply</button>\n    </mat-datepicker-actions>\n  </mat-datepicker>\n<!-- #enddocregion datepicker-actions -->\n</mat-form-field>\n\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"rangePicker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\n<!-- #docregion date-range-picker-actions -->\n  <mat-date-range-picker #rangePicker>\n    <mat-date-range-picker-actions>\n      <button mat-button matDateRangePickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\n    </mat-date-range-picker-actions>\n  </mat-date-range-picker>\n<!-- #enddocregion date-range-picker-actions -->\n</mat-form-field>\n", styles: [".example-form-field {\n  margin-right: 20px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i3.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i3.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i3.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i3.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "component", type: i3.MatDatepickerActions, selector: "mat-datepicker-actions, mat-date-range-picker-actions" }, { kind: "directive", type: i3.MatDatepickerCancel, selector: "[matDatepickerCancel], [matDateRangePickerCancel]" }, { kind: "directive", type: i3.MatDatepickerApply, selector: "[matDatepickerApply], [matDateRangePickerApply]" }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-next.5", ngImport: i0, type: DatepickerActionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-actions-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        MatButtonModule,
                    ], template: "<mat-form-field class=\"example-form-field\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"datepicker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"datepicker\"></mat-datepicker-toggle>\n<!-- #docregion datepicker-actions -->\n  <mat-datepicker #datepicker>\n    <mat-datepicker-actions>\n      <button mat-button matDatepickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDatepickerApply>Apply</button>\n    </mat-datepicker-actions>\n  </mat-datepicker>\n<!-- #enddocregion datepicker-actions -->\n</mat-form-field>\n\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [rangePicker]=\"rangePicker\">\n    <input matStartDate placeholder=\"Start date\">\n    <input matEndDate placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"rangePicker\"></mat-datepicker-toggle>\n<!-- #docregion date-range-picker-actions -->\n  <mat-date-range-picker #rangePicker>\n    <mat-date-range-picker-actions>\n      <button mat-button matDateRangePickerCancel>Cancel</button>\n      <button mat-raised-button color=\"primary\" matDateRangePickerApply>Apply</button>\n    </mat-date-range-picker-actions>\n  </mat-date-range-picker>\n<!-- #enddocregion date-range-picker-actions -->\n</mat-form-field>\n", styles: [".example-form-field {\n  margin-right: 20px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1hY3Rpb25zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItYWN0aW9ucy9kYXRlcGlja2VyLWFjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hY3Rpb25zL2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFFM0QsdUNBQXVDO0FBY3ZDLE1BQU0sT0FBTyx3QkFBd0I7cUhBQXhCLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLHNGQ3JCckMsbTdDQWdDQSwwR0RsQkksa0JBQWtCLG1nQkFDbEIsY0FBYywwV0FDZCxtQkFBbUIsazdDQUNuQixtQkFBbUIsOEJBQ25CLGVBQWU7O2tHQUdOLHdCQUF3QjtrQkFicEMsU0FBUzsrQkFDRSw0QkFBNEIsY0FHMUIsSUFBSSxXQUNQO3dCQUNQLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkIsZUFBZTtxQkFDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdE5hdGl2ZURhdGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgYWN0aW9uIGJ1dHRvbnMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWFjdGlvbnMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2RhdGVwaWNrZXItYWN0aW9ucy1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdERhdGVwaWNrZXJNb2R1bGUsXG4gICAgTWF0TmF0aXZlRGF0ZU1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVwaWNrZXJBY3Rpb25zRXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCI+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIGEgZGF0ZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZGF0ZXBpY2tlclwiPlxuICA8bWF0LWhpbnQ+TU0vREQvWVlZWTwvbWF0LWhpbnQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cImRhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbjwhLS0gI2RvY3JlZ2lvbiBkYXRlcGlja2VyLWFjdGlvbnMgLS0+XG4gIDxtYXQtZGF0ZXBpY2tlciAjZGF0ZXBpY2tlcj5cbiAgICA8bWF0LWRhdGVwaWNrZXItYWN0aW9ucz5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXREYXRlcGlja2VyQ2FuY2VsPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBtYXREYXRlcGlja2VyQXBwbHk+QXBwbHk8L2J1dHRvbj5cbiAgICA8L21hdC1kYXRlcGlja2VyLWFjdGlvbnM+XG4gIDwvbWF0LWRhdGVwaWNrZXI+XG48IS0tICNlbmRkb2NyZWdpb24gZGF0ZXBpY2tlci1hY3Rpb25zIC0tPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mb3JtLWZpZWxkXCI+XG4gIDxtYXQtbGFiZWw+RW50ZXIgYSBkYXRlIHJhbmdlPC9tYXQtbGFiZWw+XG4gIDxtYXQtZGF0ZS1yYW5nZS1pbnB1dCBbcmFuZ2VQaWNrZXJdPVwicmFuZ2VQaWNrZXJcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIHBsYWNlaG9sZGVyPVwiU3RhcnQgZGF0ZVwiPlxuICAgIDxpbnB1dCBtYXRFbmREYXRlIHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIj5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgPG1hdC1oaW50Pk1NL0REL1lZWVkg4oCTIE1NL0REL1lZWVk8L21hdC1oaW50PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJyYW5nZVBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuPCEtLSAjZG9jcmVnaW9uIGRhdGUtcmFuZ2UtcGlja2VyLWFjdGlvbnMgLS0+XG4gIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXIgI3JhbmdlUGlja2VyPlxuICAgIDxtYXQtZGF0ZS1yYW5nZS1waWNrZXItYWN0aW9ucz5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXREYXRlUmFuZ2VQaWNrZXJDYW5jZWw+Q2FuY2VsPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIG1hdERhdGVSYW5nZVBpY2tlckFwcGx5PkFwcGx5PC9idXR0b24+XG4gICAgPC9tYXQtZGF0ZS1yYW5nZS1waWNrZXItYWN0aW9ucz5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48IS0tICNlbmRkb2NyZWdpb24gZGF0ZS1yYW5nZS1waWNrZXItYWN0aW9ucyAtLT5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=