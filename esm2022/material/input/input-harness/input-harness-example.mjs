import { Component, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
/**
 * @title Testing with MatInputHarness
 */
export class InputHarnessExample {
    constructor() {
        this.inputType = signal('number');
        this.disabled = signal(false);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: InputHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: InputHarnessExample, isStandalone: true, selector: "input-harness-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <input matInput value=\"Sushi\" name=\"favorite-food\">\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [type]=\"inputType()\"\n         [disabled]=\"disabled()\">\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Leave a comment</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: InputHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'input-harness-example', standalone: true, imports: [MatFormFieldModule, MatInputModule], template: "<mat-form-field>\n  <mat-label>Favorite food</mat-label>\n  <input matInput value=\"Sushi\" name=\"favorite-food\">\n</mat-form-field>\n\n<mat-form-field>\n  <input matInput [type]=\"inputType()\"\n         [disabled]=\"disabled()\">\n</mat-form-field>\n\n<mat-form-field>\n  <mat-label>Leave a comment</mat-label>\n  <textarea matInput></textarea>\n</mat-form-field>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvaW5wdXQvaW5wdXQtaGFybmVzcy9pbnB1dC1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9pbnB1dC9pbnB1dC1oYXJuZXNzL2lucHV0LWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUVoRTs7R0FFRztBQU9ILE1BQU0sT0FBTyxtQkFBbUI7SUFOaEM7UUFPRSxjQUFTLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzdCLGFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7OEdBSFksbUJBQW1CO2tHQUFuQixtQkFBbUIsaUZDYmhDLG1YQWNBLDJDREhZLGtCQUFrQiwwU0FBRSxjQUFjOzsyRkFFakMsbUJBQW1CO2tCQU4vQixTQUFTOytCQUNFLHVCQUF1QixjQUVyQixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdElucHV0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbnB1dC1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2lucHV0LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBJbnB1dEhhcm5lc3NFeGFtcGxlIHtcbiAgaW5wdXRUeXBlID0gc2lnbmFsKCdudW1iZXInKTtcbiAgZGlzYWJsZWQgPSBzaWduYWwoZmFsc2UpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIGZvb2Q8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IHZhbHVlPVwiU3VzaGlcIiBuYW1lPVwiZmF2b3JpdGUtZm9vZFwiPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPG1hdC1mb3JtLWZpZWxkPlxuICA8aW5wdXQgbWF0SW5wdXQgW3R5cGVdPVwiaW5wdXRUeXBlKClcIlxuICAgICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkKClcIj5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5MZWF2ZSBhIGNvbW1lbnQ8L21hdC1sYWJlbD5cbiAgPHRleHRhcmVhIG1hdElucHV0PjwvdGV4dGFyZWE+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19