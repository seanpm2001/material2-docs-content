import { Component, signal } from '@angular/core';
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
        this.minDate = signal(null);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: DatepickerHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.2", type: DatepickerHarnessExample, isStandalone: true, selector: "datepicker-harness-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate()\">\n<mat-datepicker #picker></mat-datepicker>\n", dependencies: [{ kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i1.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i2.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: DatepickerHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-harness-example', standalone: true, providers: [provideNativeDateAdapter()], imports: [MatInputModule, MatDatepickerModule, FormsModule], template: "<input\n    matInput\n    [matDatepicker]=\"picker\"\n    [(ngModel)]=\"date\"\n    [min]=\"minDate()\">\n<mat-datepicker #picker></mat-datepicker>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItaGFybmVzcy9kYXRlcGlja2VyLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1oYXJuZXNzL2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7QUFFdkQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sd0JBQXdCO0lBUHJDO1FBUUUsU0FBSSxHQUFnQixJQUFJLENBQUM7UUFDekIsWUFBTyxHQUFHLE1BQU0sQ0FBYyxJQUFJLENBQUMsQ0FBQztLQUNyQzttSEFIWSx3QkFBd0I7dUdBQXhCLHdCQUF3Qix5RUFIeEIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLDBCQ2J6Qyx1SkFNQSwyQ0RRWSxjQUFjLDBXQUFFLG1CQUFtQiw4VEFBRSxXQUFXOztnR0FFL0Msd0JBQXdCO2tCQVBwQyxTQUFTOytCQUNFLDRCQUE0QixjQUUxQixJQUFJLGFBQ0wsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLFdBQzlCLENBQUMsY0FBYyxFQUFFLG1CQUFtQixFQUFFLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBzaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtwcm92aWRlTmF0aXZlRGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdERhdGVwaWNrZXJJbnB1dEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItaGFybmVzcy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtwcm92aWRlTmF0aXZlRGF0ZUFkYXB0ZXIoKV0sXG4gIGltcG9ydHM6IFtNYXRJbnB1dE1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSwgRm9ybXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEYXRlcGlja2VySGFybmVzc0V4YW1wbGUge1xuICBkYXRlOiBEYXRlIHwgbnVsbCA9IG51bGw7XG4gIG1pbkRhdGUgPSBzaWduYWw8bnVsbCB8IERhdGU+KG51bGwpO1xufVxuIiwiPGlucHV0XG4gICAgbWF0SW5wdXRcbiAgICBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxuICAgIFsobmdNb2RlbCldPVwiZGF0ZVwiXG4gICAgW21pbl09XCJtaW5EYXRlKClcIj5cbjxtYXQtZGF0ZXBpY2tlciAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG4iXX0=