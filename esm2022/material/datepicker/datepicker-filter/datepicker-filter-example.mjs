import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Datepicker with filter validation */
export class DatepickerFilterExample {
    constructor() {
        this.myFilter = (d) => {
            const day = (d || new Date()).getDay();
            // Prevent Saturday and Sunday from being selected.
            return day !== 0 && day !== 6;
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-next.5", ngImport: i0, type: DatepickerFilterExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-next.5", type: DatepickerFilterExample, isStandalone: true, selector: "datepicker-filter-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatNativeDateModule }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-next.5", ngImport: i0, type: DatepickerFilterExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-filter-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatNativeDateModule, MatDatepickerModule], template: "<mat-form-field class=\"example-full-width\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepickerFilter]=\"myFilter\" [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1maWx0ZXIvZGF0ZXBpY2tlci1maWx0ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztBQUUzRCwrQ0FBK0M7QUFPL0MsTUFBTSxPQUFPLHVCQUF1QjtJQU5wQztRQU9FLGFBQVEsR0FBRyxDQUFDLENBQWMsRUFBVyxFQUFFO1lBQ3JDLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN2QyxtREFBbUQ7WUFDbkQsT0FBTyxHQUFHLEtBQUssQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUFDO0tBQ0g7cUhBTlksdUJBQXVCO3lHQUF2Qix1QkFBdUIscUZDYnBDLGdXQU9BLDJDRElZLGtCQUFrQixtZ0JBQUUsY0FBYywwV0FBRSxtQkFBbUIsOEJBQUUsbUJBQW1COztrR0FFM0UsdUJBQXVCO2tCQU5uQyxTQUFTOytCQUNFLDJCQUEyQixjQUV6QixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXROYXRpdmVEYXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggZmlsdGVyIHZhbGlkYXRpb24gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItZmlsdGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZmlsdGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXROYXRpdmVEYXRlTW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckZpbHRlckV4YW1wbGUge1xuICBteUZpbHRlciA9IChkOiBEYXRlIHwgbnVsbCk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGRheSA9IChkIHx8IG5ldyBEYXRlKCkpLmdldERheSgpO1xuICAgIC8vIFByZXZlbnQgU2F0dXJkYXkgYW5kIFN1bmRheSBmcm9tIGJlaW5nIHNlbGVjdGVkLlxuICAgIHJldHVybiBkYXkgIT09IDAgJiYgZGF5ICE9PSA2O1xuICB9O1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIGEgZGF0ZTwvbWF0LWxhYmVsPlxuICA8aW5wdXQgbWF0SW5wdXQgW21hdERhdGVwaWNrZXJGaWx0ZXJdPVwibXlGaWx0ZXJcIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cbiAgPG1hdC1oaW50Pk1NL0REL1lZWVk8L21hdC1oaW50PlxuICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdEljb25TdWZmaXggW2Zvcl09XCJwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=