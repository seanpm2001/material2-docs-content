import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/input";
/** @title Datepicker open method */
export class DatepickerApiExample {
}
DatepickerApiExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: DatepickerApiExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
DatepickerApiExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: DatepickerApiExample, selector: "datepicker-api-example", ngImport: i0, template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { type: i3.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: DatepickerApiExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-api-example', template: "<mat-form-field class=\"example-full-width\" appearance=\"fill\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<button mat-raised-button (click)=\"picker.open()\">Open</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1hcGktZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hcGkvZGF0ZXBpY2tlci1hcGktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1hcGkvZGF0ZXBpY2tlci1hcGktZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUV4QyxvQ0FBb0M7QUFNcEMsTUFBTSxPQUFPLG9CQUFvQjs7eUhBQXBCLG9CQUFvQjs2R0FBcEIsb0JBQW9CLDhEQ1JqQywrUkFNQTttR0RFYSxvQkFBb0I7a0JBTGhDLFNBQVM7K0JBQ0Usd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgb3BlbiBtZXRob2QgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItYXBpLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItYXBpLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydkYXRlcGlja2VyLWFwaS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VyQXBpRXhhbXBsZSB7fVxuIiwiPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5DaG9vc2UgYSBkYXRlPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIj5cbiAgPG1hdC1kYXRlcGlja2VyICNwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cbjwvbWF0LWZvcm0tZmllbGQ+XG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJwaWNrZXIub3BlbigpXCI+T3BlbjwvYnV0dG9uPlxuIl19