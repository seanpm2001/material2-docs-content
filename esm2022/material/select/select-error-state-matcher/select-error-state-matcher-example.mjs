import { Component } from '@angular/core';
import { FormControl, Validators, FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/input";
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title Select with a custom ErrorStateMatcher */
export class SelectErrorStateMatcherExample {
    constructor() {
        this.selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
        this.selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);
        this.nativeSelectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: SelectErrorStateMatcherExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0-rc.1", type: SelectErrorStateMatcherExample, isStandalone: true, selector: "select-error-state-matcher-example", ngImport: i0, template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Choose one</mat-label>\n  <mat-select [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\n    <mat-option>Clear</mat-option>\n    <mat-option value=\"valid\">Valid option</mat-option>\n    <mat-option value=\"invalid\">Invalid option</mat-option>\n  </mat-select>\n  <mat-hint>Errors appear instantly!</mat-hint>\n  @if (selected.hasError('required')) {\n    <mat-error>You must make a selection</mat-error>\n  }\n  @if (selected.hasError('pattern') && !selected.hasError('required')) {\n    <mat-error>Your selection is invalid</mat-error>\n  }\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field class=\"demo-full-width\">\n  <mat-label>Choose one</mat-label>\n  <select matNativeControl [formControl]=\"nativeSelectFormControl\" [errorStateMatcher]=\"matcher\">\n    <option value=\"\"></option>\n    <option value=\"valid\" selected>Valid option</option>\n    <option value=\"invalid\">Invalid option</option>\n  </select>\n  @if (nativeSelectFormControl.hasError('required')) {\n    <mat-error>You must make a selection</mat-error>\n  }\n  @if (nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')) {\n    <mat-error>Your selection is invalid</mat-error>\n  }\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i4.SelectControlValueAccessor, selector: "select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]", inputs: ["compareWith"] }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: SelectErrorStateMatcherExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-error-state-matcher-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule, MatInputModule], template: "<h4>mat-select</h4>\n<mat-form-field>\n  <mat-label>Choose one</mat-label>\n  <mat-select [formControl]=\"selected\" [errorStateMatcher]=\"matcher\">\n    <mat-option>Clear</mat-option>\n    <mat-option value=\"valid\">Valid option</mat-option>\n    <mat-option value=\"invalid\">Invalid option</mat-option>\n  </mat-select>\n  <mat-hint>Errors appear instantly!</mat-hint>\n  @if (selected.hasError('required')) {\n    <mat-error>You must make a selection</mat-error>\n  }\n  @if (selected.hasError('pattern') && !selected.hasError('required')) {\n    <mat-error>Your selection is invalid</mat-error>\n  }\n</mat-form-field>\n\n<h4>native html select</h4>\n<mat-form-field class=\"demo-full-width\">\n  <mat-label>Choose one</mat-label>\n  <select matNativeControl [formControl]=\"nativeSelectFormControl\" [errorStateMatcher]=\"matcher\">\n    <option value=\"\"></option>\n    <option value=\"valid\" selected>Valid option</option>\n    <option value=\"invalid\">Invalid option</option>\n  </select>\n  @if (nativeSelectFormControl.hasError('required')) {\n    <mat-error>You must make a selection</mat-error>\n  }\n  @if (nativeSelectFormControl.hasError('pattern') && !nativeSelectFormControl.hasError('required')) {\n    <mat-error>Your selection is invalid</mat-error>\n  }\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci9zZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1lcnJvci1zdGF0ZS1tYXRjaGVyL3NlbGVjdC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFDTCxXQUFXLEVBR1gsVUFBVSxFQUNWLFdBQVcsRUFDWCxtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUV4QixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBRWhFLGtFQUFrRTtBQUNsRSxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLFlBQVksQ0FBQyxPQUEyQixFQUFFLElBQXdDO1FBQ2hGLE1BQU0sV0FBVyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxPQUFPLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM3RixDQUFDO0NBQ0Y7QUFFRCxvREFBb0Q7QUFPcEQsTUFBTSxPQUFPLDhCQUE4QjtJQU4zQztRQU9FLGFBQVEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhGLHNCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFakcsNEJBQXVCLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ2pELFVBQVUsQ0FBQyxRQUFRO1lBQ25CLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILFlBQU8sR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7S0FDckM7bUhBWFksOEJBQThCO3VHQUE5Qiw4QkFBOEIsOEZDN0IzQyx1eENBZ0NBLDJDRExZLGtCQUFrQiwrZEFBRSxlQUFlLG1yQkFBRSxXQUFXLGlpQkFBRSxtQkFBbUIsaU5BQUUsY0FBYzs7Z0dBRXBGLDhCQUE4QjtrQkFOMUMsU0FBUzsrQkFDRSxvQ0FBb0MsY0FFbEMsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBGb3JtQ29udHJvbCxcbiAgRm9ybUdyb3VwRGlyZWN0aXZlLFxuICBOZ0Zvcm0sXG4gIFZhbGlkYXRvcnMsXG4gIEZvcm1zTW9kdWxlLFxuICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Vycm9yU3RhdGVNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKiogRXJyb3Igd2hlbiBpbnZhbGlkIGNvbnRyb2wgaXMgZGlydHksIHRvdWNoZWQsIG9yIHN1Ym1pdHRlZC4gKi9cbmV4cG9ydCBjbGFzcyBNeUVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTdWJtaXR0ZWQgPSBmb3JtICYmIGZvcm0uc3VibWl0dGVkO1xuICAgIHJldHVybiAhIShjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQgfHwgaXNTdWJtaXR0ZWQpKTtcbiAgfVxufVxuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIGEgY3VzdG9tIEVycm9yU3RhdGVNYXRjaGVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBNYXRJbnB1dE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEVycm9yU3RhdGVNYXRjaGVyRXhhbXBsZSB7XG4gIHNlbGVjdGVkID0gbmV3IEZvcm1Db250cm9sKCd2YWxpZCcsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oJ3ZhbGlkJyldKTtcblxuICBzZWxlY3RGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgndmFsaWQnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKCd2YWxpZCcpXSk7XG5cbiAgbmF0aXZlU2VsZWN0Rm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ3ZhbGlkJywgW1xuICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgVmFsaWRhdG9ycy5wYXR0ZXJuKCd2YWxpZCcpLFxuICBdKTtcblxuICBtYXRjaGVyID0gbmV3IE15RXJyb3JTdGF0ZU1hdGNoZXIoKTtcbn1cbiIsIjxoND5tYXQtc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5DaG9vc2Ugb25lPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFtmb3JtQ29udHJvbF09XCJzZWxlY3RlZFwiIFtlcnJvclN0YXRlTWF0Y2hlcl09XCJtYXRjaGVyXCI+XG4gICAgPG1hdC1vcHRpb24+Q2xlYXI8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCJ2YWxpZFwiPlZhbGlkIG9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cImludmFsaWRcIj5JbnZhbGlkIG9wdGlvbjwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuICA8bWF0LWhpbnQ+RXJyb3JzIGFwcGVhciBpbnN0YW50bHkhPC9tYXQtaGludD5cbiAgQGlmIChzZWxlY3RlZC5oYXNFcnJvcigncmVxdWlyZWQnKSkge1xuICAgIDxtYXQtZXJyb3I+WW91IG11c3QgbWFrZSBhIHNlbGVjdGlvbjwvbWF0LWVycm9yPlxuICB9XG4gIEBpZiAoc2VsZWN0ZWQuaGFzRXJyb3IoJ3BhdHRlcm4nKSAmJiAhc2VsZWN0ZWQuaGFzRXJyb3IoJ3JlcXVpcmVkJykpIHtcbiAgICA8bWF0LWVycm9yPllvdXIgc2VsZWN0aW9uIGlzIGludmFsaWQ8L21hdC1lcnJvcj5cbiAgfVxuPC9tYXQtZm9ybS1maWVsZD5cblxuPGg0Pm5hdGl2ZSBodG1sIHNlbGVjdDwvaDQ+XG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJkZW1vLWZ1bGwtd2lkdGhcIj5cbiAgPG1hdC1sYWJlbD5DaG9vc2Ugb25lPC9tYXQtbGFiZWw+XG4gIDxzZWxlY3QgbWF0TmF0aXZlQ29udHJvbCBbZm9ybUNvbnRyb2xdPVwibmF0aXZlU2VsZWN0Rm9ybUNvbnRyb2xcIiBbZXJyb3JTdGF0ZU1hdGNoZXJdPVwibWF0Y2hlclwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwidmFsaWRcIiBzZWxlY3RlZD5WYWxpZCBvcHRpb248L29wdGlvbj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiaW52YWxpZFwiPkludmFsaWQgb3B0aW9uPC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuICBAaWYgKG5hdGl2ZVNlbGVjdEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpKSB7XG4gICAgPG1hdC1lcnJvcj5Zb3UgbXVzdCBtYWtlIGEgc2VsZWN0aW9uPC9tYXQtZXJyb3I+XG4gIH1cbiAgQGlmIChuYXRpdmVTZWxlY3RGb3JtQ29udHJvbC5oYXNFcnJvcigncGF0dGVybicpICYmICFuYXRpdmVTZWxlY3RGb3JtQ29udHJvbC5oYXNFcnJvcigncmVxdWlyZWQnKSkge1xuICAgIDxtYXQtZXJyb3I+WW91ciBzZWxlY3Rpb24gaXMgaW52YWxpZDwvbWF0LWVycm9yPlxuICB9XG48L21hdC1mb3JtLWZpZWxkPlxuIl19