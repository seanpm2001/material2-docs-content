import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
/** @title Date range picker forms integration */
export class DateRangePickerFormsExample {
    constructor() {
        this.range = new FormGroup({
            start: new FormControl(null),
            end: new FormControl(null),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: DateRangePickerFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0", type: DateRangePickerFormsExample, isStandalone: true, selector: "date-range-picker-forms-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  @if (range.controls.start.hasError('matStartDateInvalid')) {\n    <mat-error>Invalid start date</mat-error>\n  }\n  @if (range.controls.end.hasError('matEndDateInvalid')) {\n    <mat-error>Invalid end date</mat-error>\n  }\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i2.MatStartDate, selector: "input[matStartDate]", outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i2.MatEndDate, selector: "input[matEndDate]", outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: DateRangePickerFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-forms-example', standalone: true, providers: [provideNativeDateAdapter()], imports: [MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe], template: "<mat-form-field>\n  <mat-label>Enter a date range</mat-label>\n  <mat-date-range-input [formGroup]=\"range\" [rangePicker]=\"picker\">\n    <input matStartDate formControlName=\"start\" placeholder=\"Start date\">\n    <input matEndDate formControlName=\"end\" placeholder=\"End date\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #picker></mat-date-range-picker>\n\n  @if (range.controls.start.hasError('matStartDateInvalid')) {\n    <mat-error>Invalid start date</mat-error>\n  }\n  @if (range.controls.end.hasError('matEndDateInvalid')) {\n    <mat-error>Invalid end date</mat-error>\n  }\n</mat-form-field>\n\n<p>Selected range: {{range.value | json}}</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMvZGF0ZS1yYW5nZS1waWNrZXItZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEYsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUVoRSxpREFBaUQ7QUFRakQsTUFBTSxPQUFPLDJCQUEyQjtJQVB4QztRQVFFLFVBQUssR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUNwQixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQWMsSUFBSSxDQUFDO1lBQ3pDLEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBYyxJQUFJLENBQUM7U0FDeEMsQ0FBQyxDQUFDO0tBQ0o7OEdBTFksMkJBQTJCO2tHQUEzQiwyQkFBMkIsOEVBSDNCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQywwQkNaekMsdXlCQW1CQSwyQ0ROWSxrQkFBa0IsZ21CQUFFLG1CQUFtQixvekJBQUUsV0FBVyxrakJBQUUsbUJBQW1CLDJVQUFFLFFBQVE7OzJGQUVsRiwyQkFBMkI7a0JBUHZDLFNBQVM7K0JBQ0UsaUNBQWlDLGNBRS9CLElBQUksYUFDTCxDQUFDLHdCQUF3QixFQUFFLENBQUMsV0FDOUIsQ0FBQyxrQkFBa0IsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtKc29uUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge3Byb3ZpZGVOYXRpdmVEYXRlQWRhcHRlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGF0ZSByYW5nZSBwaWNrZXIgZm9ybXMgaW50ZWdyYXRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtcmFuZ2UtcGlja2VyLWZvcm1zLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHByb3ZpZGVyczogW3Byb3ZpZGVOYXRpdmVEYXRlQWRhcHRlcigpXSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIEpzb25QaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZVJhbmdlUGlja2VyRm9ybXNFeGFtcGxlIHtcbiAgcmFuZ2UgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBzdGFydDogbmV3IEZvcm1Db250cm9sPERhdGUgfCBudWxsPihudWxsKSxcbiAgICBlbmQ6IG5ldyBGb3JtQ29udHJvbDxEYXRlIHwgbnVsbD4obnVsbCksXG4gIH0pO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkVudGVyIGEgZGF0ZSByYW5nZTwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXQgW2Zvcm1Hcm91cF09XCJyYW5nZVwiIFtyYW5nZVBpY2tlcl09XCJwaWNrZXJcIj5cbiAgICA8aW5wdXQgbWF0U3RhcnREYXRlIGZvcm1Db250cm9sTmFtZT1cInN0YXJ0XCIgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCI+XG4gICAgPGlucHV0IG1hdEVuZERhdGUgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCIgcGxhY2Vob2xkZXI9XCJFbmQgZGF0ZVwiPlxuICA8L21hdC1kYXRlLXJhbmdlLWlucHV0PlxuICA8bWF0LWhpbnQ+TU0vREQvWVlZWSDigJMgTU0vREQvWVlZWTwvbWF0LWhpbnQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG5cbiAgQGlmIChyYW5nZS5jb250cm9scy5zdGFydC5oYXNFcnJvcignbWF0U3RhcnREYXRlSW52YWxpZCcpKSB7XG4gICAgPG1hdC1lcnJvcj5JbnZhbGlkIHN0YXJ0IGRhdGU8L21hdC1lcnJvcj5cbiAgfVxuICBAaWYgKHJhbmdlLmNvbnRyb2xzLmVuZC5oYXNFcnJvcignbWF0RW5kRGF0ZUludmFsaWQnKSkge1xuICAgIDxtYXQtZXJyb3I+SW52YWxpZCBlbmQgZGF0ZTwvbWF0LWVycm9yPlxuICB9XG48L21hdC1mb3JtLWZpZWxkPlxuXG48cD5TZWxlY3RlZCByYW5nZToge3tyYW5nZS52YWx1ZSB8IGpzb259fTwvcD5cbiJdfQ==