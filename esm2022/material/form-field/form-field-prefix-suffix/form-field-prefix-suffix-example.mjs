import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
/** @title Form field with prefix & suffix */
export class FormFieldPrefixSuffixExample {
    constructor() {
        this.hide = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: FormFieldPrefixSuffixExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: FormFieldPrefixSuffixExample, isStandalone: true, selector: "form-field-prefix-suffix-example", ngImport: i0, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n    <input matInput [type]=\"hide ? 'password' : 'text'\">\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field floatLabel=\"always\">\n    <mat-label>Amount</mat-label>\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\">\n    <span matTextPrefix>$&nbsp;</span>\n    <span matTextSuffix>.00</span>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: FormFieldPrefixSuffixExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-prefix-suffix-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule], template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n    <input matInput [type]=\"hide ? 'password' : 'text'\">\n    <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field floatLabel=\"always\">\n    <mat-label>Amount</mat-label>\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\">\n    <span matTextPrefix>$&nbsp;</span>\n    <span matTextSuffix>.00</span>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4L2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7O0FBRWhFLDZDQUE2QztBQVE3QyxNQUFNLE9BQU8sNEJBQTRCO0lBUHpDO1FBUUUsU0FBSSxHQUFHLElBQUksQ0FBQztLQUNiO3FIQUZZLDRCQUE0Qjt5R0FBNUIsNEJBQTRCLDRGQ2R6QyxrcUJBZ0JBLGlZREpZLGtCQUFrQiw0aUJBQUUsY0FBYywwV0FBRSxlQUFlLDJMQUFFLGFBQWE7O2tHQUVqRSw0QkFBNEI7a0JBUHhDLFNBQVM7K0JBQ0Usa0NBQWtDLGNBR2hDLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBwcmVmaXggJiBzdWZmaXggKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkUHJlZml4U3VmZml4RXhhbXBsZSB7XG4gIGhpZGUgPSB0cnVlO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkVudGVyIHlvdXIgcGFzc3dvcmQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW3R5cGVdPVwiaGlkZSA/ICdwYXNzd29yZCcgOiAndGV4dCdcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRTdWZmaXggKGNsaWNrKT1cImhpZGUgPSAhaGlkZVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ0hpZGUgcGFzc3dvcmQnXCIgW2F0dHIuYXJpYS1wcmVzc2VkXT1cImhpZGVcIj5cbiAgICAgIDxtYXQtaWNvbj57e2hpZGUgPyAndmlzaWJpbGl0eV9vZmYnIDogJ3Zpc2liaWxpdHknfX08L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZCBmbG9hdExhYmVsPVwiYWx3YXlzXCI+XG4gICAgPG1hdC1sYWJlbD5BbW91bnQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cIm51bWJlclwiIGNsYXNzPVwiZXhhbXBsZS1yaWdodC1hbGlnblwiIHBsYWNlaG9sZGVyPVwiMFwiPlxuICAgIDxzcGFuIG1hdFRleHRQcmVmaXg+JCZuYnNwOzwvc3Bhbj5cbiAgICA8c3BhbiBtYXRUZXh0U3VmZml4Pi4wMDwvc3Bhbj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIl19