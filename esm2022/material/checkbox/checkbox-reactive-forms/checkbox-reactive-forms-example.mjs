import { JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
/** @title Checkboxes with reactive forms */
export class CheckboxReactiveFormsExample {
    constructor() {
        this._formBuilder = inject(FormBuilder);
        this.toppings = this._formBuilder.group({
            pepperoni: false,
            extracheese: false,
            mushroom: false,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CheckboxReactiveFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: CheckboxReactiveFormsExample, isStandalone: true, selector: "checkbox-reactive-forms-example", ngImport: i0, template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "pipe", type: JsonPipe, name: "json" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CheckboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-reactive-forms-example', standalone: true, imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>Select your toppings:</h4>\n  <p><mat-checkbox formControlName=\"pepperoni\">Pepperoni</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"extracheese\">Extra Cheese</mat-checkbox></p>\n  <p><mat-checkbox formControlName=\"mushroom\">Mushroom</mat-checkbox></p>\n</section>\n\n<section class=\"example-section\" [formGroup]=\"toppings\">\n  <h4>You chose:</h4>\n  {{toppings.value | json}}\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zL2NoZWNrYm94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy9jaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pFLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFN0QsNENBQTRDO0FBUzVDLE1BQU0sT0FBTyw0QkFBNEI7SUFSekM7UUFTbUIsaUJBQVksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFM0MsYUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQzFDLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFdBQVcsRUFBRSxLQUFLO1lBQ2xCLFFBQVEsRUFBRSxLQUFLO1NBQ2hCLENBQUMsQ0FBQztLQUNKOzhHQVJZLDRCQUE0QjtrR0FBNUIsNEJBQTRCLDJGQ2R6Qyw4ZEFXQSxtR0RBWSxXQUFXLGtTQUFFLG1CQUFtQiwrVUFBRSxpQkFBaUIseVdBQUUsUUFBUTs7MkZBRzVELDRCQUE0QjtrQkFSeEMsU0FBUzsrQkFDRSxpQ0FBaUMsY0FHL0IsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLG1CQUFtQixFQUFFLGlCQUFpQixFQUFFLFFBQVEsQ0FBQyxtQkFDdkQsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SnNvblBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIGluamVjdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuXG4vKiogQHRpdGxlIENoZWNrYm94ZXMgd2l0aCByZWFjdGl2ZSBmb3JtcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hlY2tib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdjaGVja2JveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUsIEpzb25QaXBlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrYm94UmVhY3RpdmVGb3Jtc0V4YW1wbGUge1xuICBwcml2YXRlIHJlYWRvbmx5IF9mb3JtQnVpbGRlciA9IGluamVjdChGb3JtQnVpbGRlcik7XG5cbiAgcmVhZG9ubHkgdG9wcGluZ3MgPSB0aGlzLl9mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgcGVwcGVyb25pOiBmYWxzZSxcbiAgICBleHRyYWNoZWVzZTogZmFsc2UsXG4gICAgbXVzaHJvb206IGZhbHNlLFxuICB9KTtcbn1cbiIsIjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1zZWN0aW9uXCIgW2Zvcm1Hcm91cF09XCJ0b3BwaW5nc1wiPlxuICA8aDQ+U2VsZWN0IHlvdXIgdG9wcGluZ3M6PC9oND5cbiAgPHA+PG1hdC1jaGVja2JveCBmb3JtQ29udHJvbE5hbWU9XCJwZXBwZXJvbmlcIj5QZXBwZXJvbmk8L21hdC1jaGVja2JveD48L3A+XG4gIDxwPjxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwiZXh0cmFjaGVlc2VcIj5FeHRyYSBDaGVlc2U8L21hdC1jaGVja2JveD48L3A+XG4gIDxwPjxtYXQtY2hlY2tib3ggZm9ybUNvbnRyb2xOYW1lPVwibXVzaHJvb21cIj5NdXNocm9vbTwvbWF0LWNoZWNrYm94PjwvcD5cbjwvc2VjdGlvbj5cblxuPHNlY3Rpb24gY2xhc3M9XCJleGFtcGxlLXNlY3Rpb25cIiBbZm9ybUdyb3VwXT1cInRvcHBpbmdzXCI+XG4gIDxoND5Zb3UgY2hvc2U6PC9oND5cbiAge3t0b3BwaW5ncy52YWx1ZSB8IGpzb259fVxuPC9zZWN0aW9uPlxuIl19