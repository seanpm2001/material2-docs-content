import { ChangeDetectionStrategy, Component, model, signal } from '@angular/core';
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
        this.date = model(null);
        this.minDate = signal(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DatepickerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.1.0", type: DatepickerHarnessExample, isStandalone: true, selector: "datepicker-harness-example", inputs: { date: { classPropertyName: "date", publicName: "date", isSignal: true, isRequired: false, transformFunction: null } }, outputs: { date: "dateChange" }, providers: [provideNativeDateAdapter()], ngImport: i0, template: "<input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"date\" [min]=\"minDate()\" />\n<mat-datepicker #picker></mat-datepicker>\n", dependencies: [{ kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: DatepickerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-harness-example', standalone: true, providers: [provideNativeDateAdapter()], imports: [MatInputModule, MatDatepickerModule, FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<input matInput [matDatepicker]=\"picker\" [(ngModel)]=\"date\" [min]=\"minDate()\" />\n<mat-datepicker #picker></mat-datepicker>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItaGFybmVzcy9kYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1oYXJuZXNzL2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBRXZEOztHQUVHO0FBU0gsTUFBTSxPQUFPLHdCQUF3QjtJQVJyQztRQVNFLFNBQUksR0FBRyxLQUFLLENBQWMsSUFBSSxDQUFDLENBQUM7UUFDaEMsWUFBTyxHQUFHLE1BQU0sQ0FBYyxJQUFJLENBQUMsQ0FBQztLQUNyQzs4R0FIWSx3QkFBd0I7a0dBQXhCLHdCQUF3QiwyT0FKeEIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLDBCQ2J6QyxxSUFFQSwyQ0RZWSxjQUFjLDBXQUFFLG1CQUFtQiw4VEFBRSxXQUFXOzsyRkFHL0Msd0JBQXdCO2tCQVJwQyxTQUFTOytCQUNFLDRCQUE0QixjQUUxQixJQUFJLGFBQ0wsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLFdBQzlCLENBQUMsY0FBYyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyxtQkFDMUMsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgbW9kZWwsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge3Byb3ZpZGVOYXRpdmVEYXRlQWRhcHRlcn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0RGF0ZXBpY2tlcklucHV0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdkYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHByb3ZpZGVyczogW3Byb3ZpZGVOYXRpdmVEYXRlQWRhcHRlcigpXSxcbiAgaW1wb3J0czogW01hdElucHV0TW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VySGFybmVzc0V4YW1wbGUge1xuICBkYXRlID0gbW9kZWw8RGF0ZSB8IG51bGw+KG51bGwpO1xuICBtaW5EYXRlID0gc2lnbmFsPG51bGwgfCBEYXRlPihudWxsKTtcbn1cbiIsIjxpbnB1dCBtYXRJbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIiBbKG5nTW9kZWwpXT1cImRhdGVcIiBbbWluXT1cIm1pbkRhdGUoKVwiIC8+XG48bWF0LWRhdGVwaWNrZXIgI3BpY2tlcj48L21hdC1kYXRlcGlja2VyPlxuIl19