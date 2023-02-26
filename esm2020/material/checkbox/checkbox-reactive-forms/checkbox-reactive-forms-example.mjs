import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/common";
/** @title Checkboxes with reactive forms */
export class CheckboxReactiveFormsExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.toppings = this._formBuilder.group({
            pepperoni: false,
            extracheese: false,
            mushroom: false,
        });
    }
}
CheckboxReactiveFormsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CheckboxReactiveFormsExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
CheckboxReactiveFormsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.0", type: CheckboxReactiveFormsExample, selector: "checkbox-reactive-forms-example", ngImport: i0, template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"], dependencies: [{ kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "pipe", type: i3.JsonPipe, name: "json" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CheckboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-reactive-forms-example', template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zL2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7O0FBRTNDLDRDQUE0QztBQU01QyxNQUFNLE9BQU8sNEJBQTRCO0lBT3ZDLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBTjdDLGFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNqQyxTQUFTLEVBQUUsS0FBSztZQUNoQixXQUFXLEVBQUUsS0FBSztZQUNsQixRQUFRLEVBQUUsS0FBSztTQUNoQixDQUFDLENBQUM7SUFFNkMsQ0FBQzs7Z0lBUHRDLDRCQUE0QjtvSEFBNUIsNEJBQTRCLHVFQ1R6Qyw4ZEFXQTtrR0RGYSw0QkFBNEI7a0JBTHhDLFNBQVM7K0JBQ0UsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQnVpbGRlcn0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG4vKiogQHRpdGxlIENoZWNrYm94ZXMgd2l0aCByZWFjdGl2ZSBmb3JtcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94UmVhY3RpdmVGb3Jtc0V4YW1wbGUge1xuICB0b3BwaW5ncyA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBwZXBwZXJvbmk6IGZhbHNlLFxuICAgIGV4dHJhY2hlZXNlOiBmYWxzZSxcbiAgICBtdXNocm9vbTogZmFsc2UsXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCIgW2Zvcm1Hcm91cF09XCJ0b3BwaW5nc1wiPlxuICA8aDQ+U2VsZWN0IHlvdXIgdG9wcGluZ3M6PC9oND5cbiAgPHA+PG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJwZXBwZXJvbmlcIj5QZXBwZXJvbmk8L21hdC1jaGVja2JveD48L3A+XG4gIDxwPjxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZXh0cmFjaGVlc2VcIj5FeHRyYSBDaGVlc2U8L21hdC1jaGVja2JveD48L3A+XG4gIDxwPjxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwibXVzaHJvb21cIj5NdXNocm9vbTwvbWF0LWNoZWNrYm94PjwvcD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIiBbZm9ybUdyb3VwXT1cInRvcHBpbmdzXCI+XG4gIDxoND5Zb3UgY2hvc2U6PC9oND5cbiAge3t0b3BwaW5ncy52YWx1ZSB8IGpzb259fVxuPC9zZWN0aW9uPlxuIl19