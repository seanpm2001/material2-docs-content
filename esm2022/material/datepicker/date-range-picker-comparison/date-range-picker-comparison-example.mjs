import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
const today = new Date();
const month = today.getMonth();
const year = today.getFullYear();
/** @title Date range picker comparison ranges */
class DateRangePickerComparisonExample {
    constructor() {
        this.campaignOne = new FormGroup({
            start: new FormControl(new Date(year, month, 13)),
            end: new FormControl(new Date(year, month, 16)),
        });
        this.campaignTwo = new FormGroup({
            start: new FormControl(new Date(year, month, 15)),
            end: new FormControl(new Date(year, month, 19)),
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DateRangePickerComparisonExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: DateRangePickerComparisonExample, isStandalone: true, selector: "date-range-picker-comparison-example", ngImport: i0, template: "<mat-form-field class=\"example-form-field\">\n  <mat-label>First campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignOne\"\n    [rangePicker]=\"campaignOnePicker\"\n    [comparisonStart]=\"campaignTwo.value.start\"\n    [comparisonEnd]=\"campaignTwo.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\n</mat-form-field>\n\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Second campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignTwo\"\n    [rangePicker]=\"campaignTwoPicker\"\n    [comparisonStart]=\"campaignOne.value.start\"\n    [comparisonEnd]=\"campaignOne.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignTwoPicker\"></mat-datepicker-toggle>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>\n</mat-form-field>\n", styles: [".example-form-field {\n  margin: 0 8px 16px 0;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }, { kind: "component", type: i2.MatDateRangeInput, selector: "mat-date-range-input", inputs: ["rangePicker", "required", "dateFilter", "min", "max", "disabled", "separator", "comparisonStart", "comparisonEnd"], exportAs: ["matDateRangeInput"] }, { kind: "directive", type: i2.MatStartDate, selector: "input[matStartDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "directive", type: i2.MatEndDate, selector: "input[matEndDate]", inputs: ["errorStateMatcher"], outputs: ["dateChange", "dateInput"] }, { kind: "component", type: i2.MatDateRangePicker, selector: "mat-date-range-picker", exportAs: ["matDateRangePicker"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i3.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
export { DateRangePickerComparisonExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: DateRangePickerComparisonExample, decorators: [{
            type: Component,
            args: [{ selector: 'date-range-picker-comparison-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatDatepickerModule,
                        MatNativeDateModule,
                        FormsModule,
                        ReactiveFormsModule,
                    ], template: "<mat-form-field class=\"example-form-field\">\n  <mat-label>First campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignOne\"\n    [rangePicker]=\"campaignOnePicker\"\n    [comparisonStart]=\"campaignTwo.value.start\"\n    [comparisonEnd]=\"campaignTwo.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignOnePicker\"></mat-datepicker-toggle>\n  <mat-date-range-picker #campaignOnePicker></mat-date-range-picker>\n</mat-form-field>\n\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Second campaign</mat-label>\n  <mat-date-range-input\n    [formGroup]=\"campaignTwo\"\n    [rangePicker]=\"campaignTwoPicker\"\n    [comparisonStart]=\"campaignOne.value.start\"\n    [comparisonEnd]=\"campaignOne.value.end\">\n    <input matStartDate placeholder=\"Start date\" formControlName=\"start\">\n    <input matEndDate placeholder=\"End date\" formControlName=\"end\">\n  </mat-date-range-input>\n  <mat-datepicker-toggle matIconSuffix [for]=\"campaignTwoPicker\"></mat-datepicker-toggle>\n  <mat-hint>MM/DD/YYYY \u2013 MM/DD/YYYY</mat-hint>\n  <mat-date-range-picker #campaignTwoPicker></mat-date-range-picker>\n</mat-form-field>\n", styles: [".example-form-field {\n  margin: 0 8px 16px 0;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uL2RhdGUtcmFuZ2UtcGlja2VyLWNvbXBhcmlzb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi9kYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hGLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzNELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7OztBQUVoRSxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBQ3pCLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMvQixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFakMsaURBQWlEO0FBQ2pELE1BYWEsZ0NBQWdDO0lBYjdDO1FBY0UsZ0JBQVcsR0FBRyxJQUFJLFNBQVMsQ0FBQztZQUMxQixLQUFLLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNqRCxHQUFHLEVBQUUsSUFBSSxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztTQUNoRCxDQUFDLENBQUM7UUFDSCxnQkFBVyxHQUFHLElBQUksU0FBUyxDQUFDO1lBQzFCLEtBQUssRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELEdBQUcsRUFBRSxJQUFJLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2hELENBQUMsQ0FBQztLQUNKOzhHQVRZLGdDQUFnQztrR0FBaEMsZ0NBQWdDLGdHQ3hCN0MsNjNDQTZCQSw0R0RaSSxrQkFBa0IsbWdCQUNsQixtQkFBbUIsazNCQUNuQixtQkFBbUIsOEJBQ25CLFdBQVcsa2pCQUNYLG1CQUFtQjs7U0FHVixnQ0FBZ0M7MkZBQWhDLGdDQUFnQztrQkFiNUMsU0FBUzsrQkFDRSxzQ0FBc0MsY0FHcEMsSUFBSSxXQUNQO3dCQUNQLGtCQUFrQjt3QkFDbEIsbUJBQW1CO3dCQUNuQixtQkFBbUI7d0JBQ25CLFdBQVc7d0JBQ1gsbUJBQW1CO3FCQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0TmF0aXZlRGF0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5jb25zdCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCk7XG5jb25zdCB5ZWFyID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuLyoqIEB0aXRsZSBEYXRlIHJhbmdlIHBpY2tlciBjb21wYXJpc29uIHJhbmdlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZS1yYW5nZS1waWNrZXItY29tcGFyaXNvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlLXJhbmdlLXBpY2tlci1jb21wYXJpc29uLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0RGF0ZXBpY2tlck1vZHVsZSxcbiAgICBNYXROYXRpdmVEYXRlTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBpY2tlckNvbXBhcmlzb25FeGFtcGxlIHtcbiAgY2FtcGFpZ25PbmUgPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBzdGFydDogbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxMykpLFxuICAgIGVuZDogbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxNikpLFxuICB9KTtcbiAgY2FtcGFpZ25Ud28gPSBuZXcgRm9ybUdyb3VwKHtcbiAgICBzdGFydDogbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxNSkpLFxuICAgIGVuZDogbmV3IEZvcm1Db250cm9sKG5ldyBEYXRlKHllYXIsIG1vbnRoLCAxOSkpLFxuICB9KTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZFwiPlxuICA8bWF0LWxhYmVsPkZpcnN0IGNhbXBhaWduPC9tYXQtbGFiZWw+XG4gIDxtYXQtZGF0ZS1yYW5nZS1pbnB1dFxuICAgIFtmb3JtR3JvdXBdPVwiY2FtcGFpZ25PbmVcIlxuICAgIFtyYW5nZVBpY2tlcl09XCJjYW1wYWlnbk9uZVBpY2tlclwiXG4gICAgW2NvbXBhcmlzb25TdGFydF09XCJjYW1wYWlnblR3by52YWx1ZS5zdGFydFwiXG4gICAgW2NvbXBhcmlzb25FbmRdPVwiY2FtcGFpZ25Ud28udmFsdWUuZW5kXCI+XG4gICAgPGlucHV0IG1hdFN0YXJ0RGF0ZSBwbGFjZWhvbGRlcj1cIlN0YXJ0IGRhdGVcIiBmb3JtQ29udHJvbE5hbWU9XCJzdGFydFwiPlxuICAgIDxpbnB1dCBtYXRFbmREYXRlIHBsYWNlaG9sZGVyPVwiRW5kIGRhdGVcIiBmb3JtQ29udHJvbE5hbWU9XCJlbmRcIj5cbiAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cbiAgPG1hdC1oaW50Pk1NL0REL1lZWVkg4oCTIE1NL0REL1lZWVk8L21hdC1oaW50PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJjYW1wYWlnbk9uZVBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNjYW1wYWlnbk9uZVBpY2tlcj48L21hdC1kYXRlLXJhbmdlLXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZFwiPlxuICA8bWF0LWxhYmVsPlNlY29uZCBjYW1wYWlnbjwvbWF0LWxhYmVsPlxuICA8bWF0LWRhdGUtcmFuZ2UtaW5wdXRcbiAgICBbZm9ybUdyb3VwXT1cImNhbXBhaWduVHdvXCJcbiAgICBbcmFuZ2VQaWNrZXJdPVwiY2FtcGFpZ25Ud29QaWNrZXJcIlxuICAgIFtjb21wYXJpc29uU3RhcnRdPVwiY2FtcGFpZ25PbmUudmFsdWUuc3RhcnRcIlxuICAgIFtjb21wYXJpc29uRW5kXT1cImNhbXBhaWduT25lLnZhbHVlLmVuZFwiPlxuICAgIDxpbnB1dCBtYXRTdGFydERhdGUgcGxhY2Vob2xkZXI9XCJTdGFydCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwic3RhcnRcIj5cbiAgICA8aW5wdXQgbWF0RW5kRGF0ZSBwbGFjZWhvbGRlcj1cIkVuZCBkYXRlXCIgZm9ybUNvbnRyb2xOYW1lPVwiZW5kXCI+XG4gIDwvbWF0LWRhdGUtcmFuZ2UtaW5wdXQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cImNhbXBhaWduVHdvUGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gIDxtYXQtaGludD5NTS9ERC9ZWVlZIOKAkyBNTS9ERC9ZWVlZPC9tYXQtaGludD5cbiAgPG1hdC1kYXRlLXJhbmdlLXBpY2tlciAjY2FtcGFpZ25Ud29QaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19