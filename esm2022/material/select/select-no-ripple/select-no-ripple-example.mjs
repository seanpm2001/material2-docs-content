import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
/** @title Select with no option ripple */
export class SelectNoRippleExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: SelectNoRippleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.1", type: SelectNoRippleExample, isStandalone: true, selector: "select-no-ripple-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Select an option</mat-label>\n  <mat-select disableRipple>\n    <mat-option value=\"1\">Option 1</mat-option>\n    <mat-option value=\"2\">Option 2</mat-option>\n    <mat-option value=\"3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: SelectNoRippleExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-no-ripple-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule], template: "<mat-form-field>\n  <mat-label>Select an option</mat-label>\n  <mat-select disableRipple>\n    <mat-option value=\"1\">Option 1</mat-option>\n    <mat-option value=\"2\">Option 2</mat-option>\n    <mat-option value=\"3\">Option 3</mat-option>\n  </mat-select>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1uby1yaXBwbGUvc2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1uby1yaXBwbGUvc2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7O0FBRWhFLDBDQUEwQztBQU8xQyxNQUFNLE9BQU8scUJBQXFCO3FIQUFyQixxQkFBcUI7eUdBQXJCLHFCQUFxQixvRkNYbEMsMFJBUUEsMkNEQ1ksa0JBQWtCLDBTQUFFLGVBQWU7O2tHQUVsQyxxQkFBcUI7a0JBTmpDLFNBQVM7K0JBQ0UsMEJBQTBCLGNBRXhCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIG5vIG9wdGlvbiByaXBwbGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1uby1yaXBwbGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0LW5vLXJpcHBsZS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3ROb1JpcHBsZUV4YW1wbGUge31cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5TZWxlY3QgYW4gb3B0aW9uPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IGRpc2FibGVSaXBwbGU+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxXCI+T3B0aW9uIDE8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIyXCI+T3B0aW9uIDI8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIzXCI+T3B0aW9uIDM8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=