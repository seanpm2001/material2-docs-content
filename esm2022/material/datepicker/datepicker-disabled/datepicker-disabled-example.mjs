import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Disabled datepicker */
export class DatepickerDisabledExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: DatepickerDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: DatepickerDisabledExample, isStandalone: true, selector: "datepicker-disabled-example", ngImport: i0, template: "<p>\n  <mat-form-field>\n    <mat-label>Completely disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp1\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <mat-label>Popup disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp2\">\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <mat-label>Input disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp3\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: DatepickerDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-disabled-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule], template: "<p>\n  <mat-form-field>\n    <mat-label>Completely disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp1\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp1\"></mat-datepicker-toggle>\n    <mat-datepicker #dp1></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <mat-label>Popup disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp2\">\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp2\" disabled></mat-datepicker-toggle>\n    <mat-datepicker #dp2></mat-datepicker>\n  </mat-form-field>\n</p>\n\n<p>\n  <mat-form-field>\n    <mat-label>Input disabled</mat-label>\n    <input matInput [matDatepicker]=\"dp3\" disabled>\n    <mat-hint>MM/DD/YYYY</mat-hint>\n    <mat-datepicker-toggle matIconSuffix [for]=\"dp3\"></mat-datepicker-toggle>\n    <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\n  </mat-form-field>\n</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZGF0ZXBpY2tlci9kYXRlcGlja2VyLWRpc2FibGVkL2RhdGVwaWNrZXItZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kaXNhYmxlZC9kYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7QUFFM0QsaUNBQWlDO0FBT2pDLE1BQU0sT0FBTyx5QkFBeUI7cUhBQXpCLHlCQUF5Qjt5R0FBekIseUJBQXlCLHVGQ2J0QyxzOEJBNkJBLDJDRGxCWSxrQkFBa0IsbWdCQUFFLGNBQWMsMFdBQUUsbUJBQW1CLDhCQUFFLG1CQUFtQjs7a0dBRTNFLHlCQUF5QjtrQkFOckMsU0FBUzsrQkFDRSw2QkFBNkIsY0FFM0IsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0TmF0aXZlRGF0ZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8qKiBAdGl0bGUgRGlzYWJsZWQgZGF0ZXBpY2tlciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1kaXNhYmxlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWRpc2FibGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXROYXRpdmVEYXRlTW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckRpc2FibGVkRXhhbXBsZSB7fVxuIiwiPHA+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkNvbXBsZXRlbHkgZGlzYWJsZWQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJdPVwiZHAxXCIgZGlzYWJsZWQ+XG4gICAgPG1hdC1oaW50Pk1NL0REL1lZWVk8L21hdC1oaW50PlxuICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cImRwMVwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICAgIDxtYXQtZGF0ZXBpY2tlciAjZHAxPjwvbWF0LWRhdGVwaWNrZXI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L3A+XG5cbjxwPlxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5Qb3B1cCBkaXNhYmxlZDwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJkcDJcIj5cbiAgICA8bWF0LWhpbnQ+TU0vREQvWVlZWTwvbWF0LWhpbnQ+XG4gICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRJY29uU3VmZml4IFtmb3JdPVwiZHAyXCIgZGlzYWJsZWQ+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XG4gICAgPG1hdC1kYXRlcGlja2VyICNkcDI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cblxuPHA+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPklucHV0IGRpc2FibGVkPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cImRwM1wiIGRpc2FibGVkPlxuICAgIDxtYXQtaGludD5NTS9ERC9ZWVlZPC9tYXQtaGludD5cbiAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJkcDNcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgICA8bWF0LWRhdGVwaWNrZXIgI2RwMyBkaXNhYmxlZD1cImZhbHNlXCI+PC9tYXQtZGF0ZXBpY2tlcj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvcD5cbiJdfQ==