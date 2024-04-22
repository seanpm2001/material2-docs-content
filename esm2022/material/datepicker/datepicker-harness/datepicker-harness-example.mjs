import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/input";
import * as i2 from "@angular/material/datepicker";
import * as i3 from "@angular/forms";
/**
 * @title Testing with MatDatepickerInputHarness
 */
export class DatepickerHarnessExample {
    constructor() {
        this.date = null;
        this.minDate = null;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: DatepickerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.5", type: DatepickerHarnessExample, isStandalone: true, selector: "datepicker-harness-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate\">\n<mat-datepicker #picker></mat-datepicker>\n", dependencies: [{ kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: DatepickerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-harness-example', standalone: true, providers: [provideNativeDateAdapter()], imports: [MatInputModule, MatDatepickerModule, FormsModule], template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate\">\n<mat-datepicker #picker></mat-datepicker>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItaGFybmVzcy9kYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1oYXJuZXNzL2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDaEUsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUV2RDs7R0FFRztBQVFILE1BQU0sT0FBTyx3QkFBd0I7SUFQckM7UUFRRSxTQUFJLEdBQWdCLElBQUksQ0FBQztRQUN6QixZQUFPLEdBQWdCLElBQUksQ0FBQztLQUM3QjtxSEFIWSx3QkFBd0I7eUdBQXhCLHdCQUF3Qix5RUFIeEIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLDBCQ2J6QyxxSkFNQSwyQ0RRWSxjQUFjLDBXQUFFLG1CQUFtQiw4VEFBRSxXQUFXOztrR0FFL0Msd0JBQXdCO2tCQVBwQyxTQUFTOytCQUNFLDRCQUE0QixjQUUxQixJQUFJLGFBQ0wsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLFdBQzlCLENBQUMsY0FBYyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7cHJvdmlkZU5hdGl2ZURhdGVBZGFwdGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXREYXRlcGlja2VySW5wdXRIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgcHJvdmlkZXJzOiBbcHJvdmlkZU5hdGl2ZURhdGVBZGFwdGVyKCldLFxuICBpbXBvcnRzOiBbTWF0SW5wdXRNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckhhcm5lc3NFeGFtcGxlIHtcbiAgZGF0ZTogRGF0ZSB8IG51bGwgPSBudWxsO1xuICBtaW5EYXRlOiBEYXRlIHwgbnVsbCA9IG51bGw7XG59XG4iLCI8aW5wdXRcbiAgICBtYXRJbnB1dFxuICAgIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXG4gICAgWyhuZ01vZGVsKV09XCJkYXRlXCJcbiAgICBbbWluXT1cIm1pbkRhdGVcIj5cbjxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4iXX0=