import { Component } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/stepper";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
/**
 * @title Stepper with editable steps
 */
export class StepperEditableExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
        this.isEditable = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: StepperEditableExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.5", type: StepperEditableExample, isStandalone: true, selector: "stepper-editable-example", ngImport: i0, template: "<button mat-raised-button (click)=\"isEditable = !isEditable\">\n  {{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}\n</button>\n\n<mat-stepper linear #stepper>\n<!-- #docregion editable -->\n  <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\n<!-- #enddocregion editable -->\n    <form [formGroup]=\"firstFormGroup\">\n<!-- #docregion step-label -->\n      <ng-template matStepLabel>Fill out your name</ng-template>\n<!-- #enddocregion step-label -->\n      <mat-form-field>\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"firstCtrl\" placeholder=\"Last name, First name\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-mdc-form-field {\n  margin-top: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatStepperModule }, { kind: "component", type: i3.MatStep, selector: "mat-step", inputs: ["color"], exportAs: ["matStep"] }, { kind: "directive", type: i3.MatStepLabel, selector: "[matStepLabel]" }, { kind: "component", type: i3.MatStepper, selector: "mat-stepper, mat-vertical-stepper, mat-horizontal-stepper, [matStepper]", inputs: ["disableRipple", "color", "labelPosition", "headerPosition", "animationDuration"], outputs: ["animationDone"], exportAs: ["matStepper", "matVerticalStepper", "matHorizontalStepper"] }, { kind: "directive", type: i3.MatStepperNext, selector: "button[matStepperNext]" }, { kind: "directive", type: i3.MatStepperPrevious, selector: "button[matStepperPrevious]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: StepperEditableExample, decorators: [{
            type: Component,
            args: [{ selector: 'stepper-editable-example', standalone: true, imports: [
                        MatButtonModule,
                        MatStepperModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                    ], template: "<button mat-raised-button (click)=\"isEditable = !isEditable\">\n  {{!isEditable ? 'Enable edit mode' : 'Disable edit mode'}}\n</button>\n\n<mat-stepper linear #stepper>\n<!-- #docregion editable -->\n  <mat-step [stepControl]=\"firstFormGroup\" [editable]=\"isEditable\">\n<!-- #enddocregion editable -->\n    <form [formGroup]=\"firstFormGroup\">\n<!-- #docregion step-label -->\n      <ng-template matStepLabel>Fill out your name</ng-template>\n<!-- #enddocregion step-label -->\n      <mat-form-field>\n        <mat-label>Name</mat-label>\n        <input matInput formControlName=\"firstCtrl\" placeholder=\"Last name, First name\" required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step [stepControl]=\"secondFormGroup\" [editable]=\"isEditable\">\n    <form [formGroup]=\"secondFormGroup\">\n      <ng-template matStepLabel>Fill out your address</ng-template>\n      <mat-form-field>\n        <mat-label>Address</mat-label>\n        <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\n               required>\n      </mat-form-field>\n      <div>\n        <button mat-button matStepperPrevious>Back</button>\n        <button mat-button matStepperNext>Next</button>\n      </div>\n    </form>\n  </mat-step>\n  <mat-step>\n    <ng-template matStepLabel>Done</ng-template>\n    <p>You are now done.</p>\n    <div>\n      <button mat-button matStepperPrevious>Back</button>\n      <button mat-button (click)=\"stepper.reset()\">Reset</button>\n    </div>\n  </mat-step>\n</mat-stepper>\n", styles: [".mat-stepper-horizontal {\n  margin-top: 8px;\n}\n\n.mat-mdc-form-field {\n  margin-top: 16px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.FormBuilder }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci1lZGl0YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc3RlcHBlci9zdGVwcGVyLWVkaXRhYmxlL3N0ZXBwZXItZWRpdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3N0ZXBwZXIvc3RlcHBlci1lZGl0YWJsZS9zdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3pGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFFekQ7O0dBRUc7QUFlSCxNQUFNLE9BQU8sc0JBQXNCO0lBU2pDLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBUjdDLG1CQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDckMsQ0FBQyxDQUFDO1FBQ0gsb0JBQWUsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUN4QyxVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUN0QyxDQUFDLENBQUM7UUFDSCxlQUFVLEdBQUcsS0FBSyxDQUFDO0lBRTZCLENBQUM7cUhBVHRDLHNCQUFzQjt5R0FBdEIsc0JBQXNCLG9GQ3hCbkMscW1EQTRDQSw0SkQ1QkksZUFBZSwyTkFDZixnQkFBZ0Isa3NCQUNoQixXQUFXLHczQkFDWCxtQkFBbUIsK1VBQ25CLGtCQUFrQiwwU0FDbEIsY0FBYzs7a0dBR0wsc0JBQXNCO2tCQWRsQyxTQUFTOytCQUNFLDBCQUEwQixjQUd4QixJQUFJLFdBQ1A7d0JBQ1AsZUFBZTt3QkFDZixnQkFBZ0I7d0JBQ2hCLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixrQkFBa0I7d0JBQ2xCLGNBQWM7cUJBQ2YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1CdWlsZGVyLCBWYWxpZGF0b3JzLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRTdGVwcGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zdGVwcGVyJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG4vKipcbiAqIEB0aXRsZSBTdGVwcGVyIHdpdGggZWRpdGFibGUgc3RlcHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc3RlcHBlci1lZGl0YWJsZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzdGVwcGVyLWVkaXRhYmxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnc3RlcHBlci1lZGl0YWJsZS1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0U3RlcHBlck1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckVkaXRhYmxlRXhhbXBsZSB7XG4gIGZpcnN0Rm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIGZpcnN0Q3RybDogWycnLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgfSk7XG4gIHNlY29uZEZvcm1Hcm91cCA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBzZWNvbmRDdHJsOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICB9KTtcbiAgaXNFZGl0YWJsZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cbn1cbiIsIjxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImlzRWRpdGFibGUgPSAhaXNFZGl0YWJsZVwiPlxuICB7eyFpc0VkaXRhYmxlID8gJ0VuYWJsZSBlZGl0IG1vZGUnIDogJ0Rpc2FibGUgZWRpdCBtb2RlJ319XG48L2J1dHRvbj5cblxuPG1hdC1zdGVwcGVyIGxpbmVhciAjc3RlcHBlcj5cbjwhLS0gI2RvY3JlZ2lvbiBlZGl0YWJsZSAtLT5cbiAgPG1hdC1zdGVwIFtzdGVwQ29udHJvbF09XCJmaXJzdEZvcm1Hcm91cFwiIFtlZGl0YWJsZV09XCJpc0VkaXRhYmxlXCI+XG48IS0tICNlbmRkb2NyZWdpb24gZWRpdGFibGUgLS0+XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmaXJzdEZvcm1Hcm91cFwiPlxuPCEtLSAjZG9jcmVnaW9uIHN0ZXAtbGFiZWwgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgbWF0U3RlcExhYmVsPkZpbGwgb3V0IHlvdXIgbmFtZTwvbmctdGVtcGxhdGU+XG48IS0tICNlbmRkb2NyZWdpb24gc3RlcC1sYWJlbCAtLT5cbiAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgPG1hdC1sYWJlbD5OYW1lPC9tYXQtbGFiZWw+XG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdEN0cmxcIiBwbGFjZWhvbGRlcj1cIkxhc3QgbmFtZSwgRmlyc3QgbmFtZVwiIHJlcXVpcmVkPlxuICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyTmV4dD5OZXh0PC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG4gIDwvbWF0LXN0ZXA+XG4gIDxtYXQtc3RlcCBbc3RlcENvbnRyb2xdPVwic2Vjb25kRm9ybUdyb3VwXCIgW2VkaXRhYmxlXT1cImlzRWRpdGFibGVcIj5cbiAgICA8Zm9ybSBbZm9ybUdyb3VwXT1cInNlY29uZEZvcm1Hcm91cFwiPlxuICAgICAgPG5nLXRlbXBsYXRlIG1hdFN0ZXBMYWJlbD5GaWxsIG91dCB5b3VyIGFkZHJlc3M8L25nLXRlbXBsYXRlPlxuICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICA8bWF0LWxhYmVsPkFkZHJlc3M8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInNlY29uZEN0cmxcIiBwbGFjZWhvbGRlcj1cIkV4LiAxIE1haW4gU3QsIE5ldyBZb3JrLCBOWVwiXG4gICAgICAgICAgICAgICByZXF1aXJlZD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U3RlcHBlclByZXZpb3VzPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIG1hdFN0ZXBwZXJOZXh0Pk5leHQ8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cbiAgPC9tYXQtc3RlcD5cbiAgPG1hdC1zdGVwPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXRTdGVwTGFiZWw+RG9uZTwvbmctdGVtcGxhdGU+XG4gICAgPHA+WW91IGFyZSBub3cgZG9uZS48L3A+XG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBtYXRTdGVwcGVyUHJldmlvdXM+QmFjazwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzdGVwcGVyLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L21hdC1zdGVwPlxuPC9tYXQtc3RlcHBlcj5cbiJdfQ==