import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
/** @title Form field with error messages */
export class FormFieldErrorExample {
    constructor() {
        this.email = new FormControl('', [Validators.required, Validators.email]);
        this.errorMessage = signal('');
        merge(this.email.statusChanges, this.email.valueChanges)
            .pipe(takeUntilDestroyed())
            .subscribe(() => this.updateErrorMessage());
    }
    updateErrorMessage() {
        if (this.email.hasError('required')) {
            this.errorMessage.set('You must enter a value');
        }
        else if (this.email.hasError('email')) {
            this.errorMessage.set('Not a valid email');
        }
        else {
            this.errorMessage.set('');
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: FormFieldErrorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0-next.1", type: FormFieldErrorExample, isStandalone: true, selector: "form-field-error-example", ngImport: i0, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your email</mat-label>\n    <input\n      matInput\n      placeholder=\"pat@example.com\"\n      [formControl]=\"email\"\n      (blur)=\"updateErrorMessage()\"\n      required\n    />\n    @if (email.invalid) {\n      <mat-error>{{errorMessage()}}</mat-error>\n    }\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatError, selector: "mat-error, [matError]", inputs: ["id"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i3.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: FormFieldErrorExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-error-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your email</mat-label>\n    <input\n      matInput\n      placeholder=\"pat@example.com\"\n      [formControl]=\"email\"\n      (blur)=\"updateErrorMessage()\"\n      required\n    />\n    @if (email.invalid) {\n      <mat-error>{{errorMessage()}}</mat-error>\n    }\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1lcnJvci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWVycm9yL2Zvcm0tZmllbGQtZXJyb3ItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1lcnJvci9mb3JtLWZpZWxkLWVycm9yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxVQUFVLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7QUFFM0IsNENBQTRDO0FBUzVDLE1BQU0sT0FBTyxxQkFBcUI7SUFLaEM7UUFKUyxVQUFLLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUU5RSxpQkFBWSxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUd4QixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7YUFDckQsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7YUFDMUIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUNsRCxDQUFDO2FBQU0sSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDN0MsQ0FBQzthQUFNLENBQUM7WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1QixDQUFDO0lBQ0gsQ0FBQztxSEFuQlUscUJBQXFCO3lHQUFyQixxQkFBcUIsb0ZDaEJsQyx1WEFlQSx1SURGWSxrQkFBa0IsdVlBQUUsY0FBYywwV0FBRSxXQUFXLG1uQkFBRSxtQkFBbUI7O2tHQUduRSxxQkFBcUI7a0JBUmpDLFNBQVM7K0JBQ0UsMEJBQTBCLGNBR3hCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMsbUJBQzlELHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge3Rha2VVbnRpbERlc3Ryb3llZH0gZnJvbSAnQGFuZ3VsYXIvY29yZS9yeGpzLWludGVyb3AnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7bWVyZ2V9IGZyb20gJ3J4anMnO1xuXG4vKiogQHRpdGxlIEZvcm0gZmllbGQgd2l0aCBlcnJvciBtZXNzYWdlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZm9ybS1maWVsZC1lcnJvci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdmb3JtLWZpZWxkLWVycm9yLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnZm9ybS1maWVsZC1lcnJvci1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRFcnJvckV4YW1wbGUge1xuICByZWFkb25seSBlbWFpbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdKTtcblxuICBlcnJvck1lc3NhZ2UgPSBzaWduYWwoJycpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIG1lcmdlKHRoaXMuZW1haWwuc3RhdHVzQ2hhbmdlcywgdGhpcy5lbWFpbC52YWx1ZUNoYW5nZXMpXG4gICAgICAucGlwZSh0YWtlVW50aWxEZXN0cm95ZWQoKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy51cGRhdGVFcnJvck1lc3NhZ2UoKSk7XG4gIH1cblxuICB1cGRhdGVFcnJvck1lc3NhZ2UoKSB7XG4gICAgaWYgKHRoaXMuZW1haWwuaGFzRXJyb3IoJ3JlcXVpcmVkJykpIHtcbiAgICAgIHRoaXMuZXJyb3JNZXNzYWdlLnNldCgnWW91IG11c3QgZW50ZXIgYSB2YWx1ZScpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5lbWFpbC5oYXNFcnJvcignZW1haWwnKSkge1xuICAgICAgdGhpcy5lcnJvck1lc3NhZ2Uuc2V0KCdOb3QgYSB2YWxpZCBlbWFpbCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm9yTWVzc2FnZS5zZXQoJycpO1xuICAgIH1cbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkVudGVyIHlvdXIgZW1haWw8L21hdC1sYWJlbD5cbiAgICA8aW5wdXRcbiAgICAgIG1hdElucHV0XG4gICAgICBwbGFjZWhvbGRlcj1cInBhdEBleGFtcGxlLmNvbVwiXG4gICAgICBbZm9ybUNvbnRyb2xdPVwiZW1haWxcIlxuICAgICAgKGJsdXIpPVwidXBkYXRlRXJyb3JNZXNzYWdlKClcIlxuICAgICAgcmVxdWlyZWRcbiAgICAvPlxuICAgIEBpZiAoZW1haWwuaW52YWxpZCkge1xuICAgICAgPG1hdC1lcnJvcj57e2Vycm9yTWVzc2FnZSgpfX08L21hdC1lcnJvcj5cbiAgICB9XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG48L2Rpdj5cbiJdfQ==