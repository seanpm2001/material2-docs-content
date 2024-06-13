import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/select";
import * as i4 from "@angular/material/core";
/** @title Form field with hints */
export class FormFieldHintExample {
    constructor() {
        this.value = signal('');
    }
    onInput(event) {
        this.value.set(event.target.value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FormFieldHintExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: FormFieldHintExample, isStandalone: true, selector: "form-field-hint-example", ngImport: i0, template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <mat-label>Enter some input</mat-label>\n    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\" (input)=\"onInput($event)\" />\n    <mat-hint align=\"end\">{{value().length}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Select me</mat-label>\n    <mat-select>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i3.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i4.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: FormFieldHintExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-hint-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatSelectModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"example-container\">\n  <mat-form-field hintLabel=\"Max 10 characters\">\n    <mat-label>Enter some input</mat-label>\n    <input matInput #input maxlength=\"10\" placeholder=\"Ex. Nougat\" (input)=\"onInput($event)\" />\n    <mat-hint align=\"end\">{{value().length}}/10</mat-hint>\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Select me</mat-label>\n    <mat-select>\n      <mat-option value=\"option\">Option</mat-option>\n    </mat-select>\n    <mat-hint align=\"end\">Here's the dropdown arrow ^</mat-hint>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1oaW50LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtaGludC9mb3JtLWZpZWxkLWhpbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1oaW50L2Zvcm0tZmllbGQtaGludC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7O0FBRXpELG1DQUFtQztBQVNuQyxNQUFNLE9BQU8sb0JBQW9CO0lBUmpDO1FBU3FCLFVBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7S0FLdkM7SUFIVyxPQUFPLENBQUMsS0FBWTtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBRSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMzRCxDQUFDOzhHQUxVLG9CQUFvQjtrR0FBcEIsb0JBQW9CLG1GQ2RqQywwakJBZUEsdUlESlksa0JBQWtCLGtZQUFFLGNBQWMsMFdBQUUsZUFBZTs7MkZBR2xELG9CQUFvQjtrQkFSaEMsU0FBUzsrQkFDRSx5QkFBeUIsY0FHdkIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGVBQWUsQ0FBQyxtQkFDN0MsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBoaW50cyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1oaW50LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Zvcm0tZmllbGQtaGludC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ2Zvcm0tZmllbGQtaGludC1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRTZWxlY3RNb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRm9ybUZpZWxkSGludEV4YW1wbGUge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgdmFsdWUgPSBzaWduYWwoJycpO1xuXG4gIHByb3RlY3RlZCBvbklucHV0KGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMudmFsdWUuc2V0KChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWUpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPG1hdC1mb3JtLWZpZWxkIGhpbnRMYWJlbD1cIk1heCAxMCBjaGFyYWN0ZXJzXCI+XG4gICAgPG1hdC1sYWJlbD5FbnRlciBzb21lIGlucHV0PC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0ICNpbnB1dCBtYXhsZW5ndGg9XCIxMFwiIHBsYWNlaG9sZGVyPVwiRXguIE5vdWdhdFwiIChpbnB1dCk9XCJvbklucHV0KCRldmVudClcIiAvPlxuICAgIDxtYXQtaGludCBhbGlnbj1cImVuZFwiPnt7dmFsdWUoKS5sZW5ndGh9fS8xMDwvbWF0LWhpbnQ+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+U2VsZWN0IG1lPC9tYXQtbGFiZWw+XG4gICAgPG1hdC1zZWxlY3Q+XG4gICAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIm9wdGlvblwiPk9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICA8L21hdC1zZWxlY3Q+XG4gICAgPG1hdC1oaW50IGFsaWduPVwiZW5kXCI+SGVyZSdzIHRoZSBkcm9wZG93biBhcnJvdyBePC9tYXQtaGludD5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIl19