import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/input";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/forms";
/**
 * @title Inputs in a form
 */
export class InputFormExample {
}
InputFormExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: InputFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputFormExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.0", type: InputFormExample, selector: "input-form-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Company (disabled)</mat-label>\n    <input matInput disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Address</mat-label>\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Address 2</mat-label>\n      <textarea matInput></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>City</mat-label>\n      <input matInput placeholder=\"Ex. San Francisco\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>State</mat-label>\n      <input matInput placeholder=\"Ex. California\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>Postal Code</mat-label>\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "directive", type: i2.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: InputFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-form-example', template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Company (disabled)</mat-label>\n    <input matInput disabled value=\"Google\">\n  </mat-form-field>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>First name</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>Long Last Name That Will Be Truncated</mat-label>\n      <input matInput>\n    </mat-form-field></td>\n  </tr></table>\n\n  <p>\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Address</mat-label>\n      <textarea matInput placeholder=\"Ex. 100 Main St\">1600 Amphitheatre Pkwy</textarea>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <mat-label>Address 2</mat-label>\n      <textarea matInput></textarea>\n    </mat-form-field>\n  </p>\n\n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>City</mat-label>\n      <input matInput placeholder=\"Ex. San Francisco\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>State</mat-label>\n      <input matInput placeholder=\"Ex. California\">\n    </mat-form-field></td>\n    <td><mat-form-field class=\"example-full-width\">\n      <mat-label>Postal Code</mat-label>\n      <input matInput #postalCode maxlength=\"5\" placeholder=\"Ex. 94105\" value=\"94043\">\n      <mat-hint align=\"end\">{{postalCode.value.length}} / 5</mat-hint>\n    </mat-form-field></td>\n  </tr></table>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\ntd {\n  padding-right: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtZm9ybS9pbnB1dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1mb3JtL2lucHV0LWZvcm0tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLGdCQUFnQjs7b0hBQWhCLGdCQUFnQjt3R0FBaEIsZ0JBQWdCLDBEQ1Y3Qiw0cURBNENBO2tHRGxDYSxnQkFBZ0I7a0JBTDVCLFNBQVM7K0JBQ0Usb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnB1dHMgaW4gYSBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lucHV0LWZvcm0tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnaW5wdXQtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnaW5wdXQtZm9ybS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEZvcm1FeGFtcGxlIHt9XG4iLCI8Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiPlxuICA8bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICA8bWF0LWxhYmVsPkNvbXBhbnkgKGRpc2FibGVkKTwvbWF0LWxhYmVsPlxuICAgIDxpbnB1dCBtYXRJbnB1dCBkaXNhYmxlZCB2YWx1ZT1cIkdvb2dsZVwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDx0YWJsZSBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0cj5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPkZpcnN0IG5hbWU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gICAgPHRkPjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgICAgPG1hdC1sYWJlbD5Mb25nIExhc3QgTmFtZSBUaGF0IFdpbGwgQmUgVHJ1bmNhdGVkPC9tYXQtbGFiZWw+XG4gICAgICA8aW5wdXQgbWF0SW5wdXQ+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICA8L3RyPjwvdGFibGU+XG5cbiAgPHA+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cbiAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiAxMDAgTWFpbiBTdFwiPjE2MDAgQW1waGl0aGVhdHJlIFBrd3k8L3RleHRhcmVhPlxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPkFkZHJlc3MgMjwvbWF0LWxhYmVsPlxuICAgICAgPHRleHRhcmVhIG1hdElucHV0PjwvdGV4dGFyZWE+XG4gICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgPC9wPlxuXG4gIDx0YWJsZSBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiIGNlbGxzcGFjaW5nPVwiMFwiPjx0cj5cbiAgICA8dGQ+PG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1mdWxsLXdpZHRoXCI+XG4gICAgICA8bWF0LWxhYmVsPkNpdHk8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiBTYW4gRnJhbmNpc2NvXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxtYXQtbGFiZWw+U3RhdGU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cIkV4LiBDYWxpZm9ybmlhXCI+XG4gICAgPC9tYXQtZm9ybS1maWVsZD48L3RkPlxuICAgIDx0ZD48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZ1bGwtd2lkdGhcIj5cbiAgICAgIDxtYXQtbGFiZWw+UG9zdGFsIENvZGU8L21hdC1sYWJlbD5cbiAgICAgIDxpbnB1dCBtYXRJbnB1dCAjcG9zdGFsQ29kZSBtYXhsZW5ndGg9XCI1XCIgcGxhY2Vob2xkZXI9XCJFeC4gOTQxMDVcIiB2YWx1ZT1cIjk0MDQzXCI+XG4gICAgICA8bWF0LWhpbnQgYWxpZ249XCJlbmRcIj57e3Bvc3RhbENvZGUudmFsdWUubGVuZ3RofX0gLyA1PC9tYXQtaGludD5cbiAgICA8L21hdC1mb3JtLWZpZWxkPjwvdGQ+XG4gIDwvdHI+PC90YWJsZT5cbjwvZm9ybT5cbiJdfQ==