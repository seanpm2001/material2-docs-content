import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/stepper";
/**
 * @title Testing with MatStepperHarness
 */
export class StepperHarnessExample {
}
StepperHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: StepperHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
StepperHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-next.16", type: StepperHarnessExample, selector: "stepper-harness-example", ngImport: i0, template: "<mat-stepper>\n  <mat-step>\n    <ng-template matStepLabel>One</ng-template>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Two</ng-template>\n    <button matStepperPrevious>Previous</button>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Three</ng-template>\n    <button matStepperPrevious>Previous</button>\n  </mat-step>\n</mat-stepper>\n", dependencies: [{ kind: "component", type: i1.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i1.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i1.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["selectedIndex", "disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i1.MatStepperNext, selector: "button[matStepperNext]", inputs: ["type"] }, { kind: "directive", type: i1.MatStepperPrevious, selector: "button[matStepperPrevious]", inputs: ["type"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: StepperHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-harness-example', template: "<mat-stepper>\n  <mat-step>\n    <ng-template matStepLabel>One</ng-template>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Two</ng-template>\n    <button matStepperPrevious>Previous</button>\n    <button matStepperNext>Next</button>\n  </mat-step>\n  <mat-step optional>\n    <ng-template matStepLabel>Three</ng-template>\n    <button matStepperPrevious>Previous</button>\n  </mat-step>\n</mat-stepper>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zdGVwcGVyL3N0ZXBwZXItaGFybmVzcy9zdGVwcGVyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1oYXJuZXNzL3N0ZXBwZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLHFCQUFxQjs7MEhBQXJCLHFCQUFxQjs4R0FBckIscUJBQXFCLCtEQ1RsQyx1ZEFlQTttR0ROYSxxQkFBcUI7a0JBSmpDLFNBQVM7K0JBQ0UseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0U3RlcHBlckhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RlcHBlci1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3N0ZXBwZXItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVySGFybmVzc0V4YW1wbGUge31cbiIsIjxtYXQtc3RlcHBlcj5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+T25lPC9uZy10ZW1wbGF0ZT5cbiAgICA8YnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwIG9wdGlvbmFsPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+VHdvPC9uZy10ZW1wbGF0ZT5cbiAgICA8YnV0dG9uIG1hdFN0ZXBwZXJQcmV2aW91cz5QcmV2aW91czwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0U3RlcHBlck5leHQ+TmV4dDwvYnV0dG9uPlxuICA8L21hdC1zdGVwPlxuICA8bWF0LXN0ZXAgb3B0aW9uYWw+XG4gICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5UaHJlZTwvbmctdGVtcGxhdGU+XG4gICAgPGJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+UHJldmlvdXM8L2J1dHRvbj5cbiAgPC9tYXQtc3RlcD5cbjwvbWF0LXN0ZXBwZXI+XG4iXX0=