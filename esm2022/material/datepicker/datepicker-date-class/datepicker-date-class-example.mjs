import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/datepicker";
/** @title Datepicker with custom date classes */
export class DatepickerDateClassExample {
    constructor() {
        this.dateClass = (cellDate, view) => {
            // Only highligh dates inside the month view.
            if (view === 'month') {
                const date = cellDate.getDate();
                // Highlight the 1st and 20th day of each month.
                return date === 1 || date === 20 ? 'example-custom-date-class' : '';
            }
            return '';
        };
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: DatepickerDateClassExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.1", type: DatepickerDateClassExample, isStandalone: true, selector: "datepicker-date-class-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-form-field class=\"example-full-width\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n", styles: ["button.example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatHint, selector: "mat-hint", inputs: ["align", "id"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i3.MatDatepicker, selector: "mat-datepicker", exportAs: ["matDatepicker"] }, { kind: "directive", type: i3.MatDatepickerInput, selector: "input[matDatepicker]", inputs: ["matDatepicker", "min", "max", "matDatepickerFilter"], exportAs: ["matDatepickerInput"] }, { kind: "component", type: i3.MatDatepickerToggle, selector: "mat-datepicker-toggle", inputs: ["for", "tabIndex", "aria-label", "disabled", "disableRipple"], exportAs: ["matDatepickerToggle"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: DatepickerDateClassExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-date-class-example', encapsulation: ViewEncapsulation.None, standalone: true, providers: [provideNativeDateAdapter()], imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field class=\"example-full-width\">\n  <mat-label>Choose a date</mat-label>\n  <input matInput [matDatepicker]=\"picker\">\n  <mat-hint>MM/DD/YYYY</mat-hint>\n  <mat-datepicker-toggle matIconSuffix [for]=\"picker\"></mat-datepicker-toggle>\n  <mat-datepicker [dateClass]=\"dateClass\" #picker></mat-datepicker>\n</mat-form-field>\n", styles: ["button.example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9kYXRlcGlja2VyL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy9kYXRlcGlja2VyLWRhdGUtY2xhc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1kYXRlLWNsYXNzL2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNwRixPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNoRSxPQUFPLEVBQStCLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDL0YsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUV2RCxpREFBaUQ7QUFXakQsTUFBTSxPQUFPLDBCQUEwQjtJQVZ2QztRQVdFLGNBQVMsR0FBdUMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEVBQUU7WUFDakUsNkNBQTZDO1lBQzdDLElBQUksSUFBSSxLQUFLLE9BQU8sRUFBRSxDQUFDO2dCQUNyQixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRWhDLGdEQUFnRDtnQkFDaEQsT0FBTyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDdEUsQ0FBQztZQUVELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQyxDQUFDO0tBQ0g7cUhBWlksMEJBQTBCO3lHQUExQiwwQkFBMEIsNEVBSjFCLENBQUMsd0JBQXdCLEVBQUUsQ0FBQywwQkNiekMsdVZBT0EsK0lET1ksa0JBQWtCLG1nQkFBRSxjQUFjLDBXQUFFLG1CQUFtQjs7a0dBR3RELDBCQUEwQjtrQkFWdEMsU0FBUzsrQkFDRSwrQkFBK0IsaUJBRzFCLGlCQUFpQixDQUFDLElBQUksY0FDekIsSUFBSSxhQUNMLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxXQUM5QixDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQyxtQkFDakQsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0VuY2Fwc3VsYXRpb259IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtwcm92aWRlTmF0aXZlRGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHtNYXRDYWxlbmRhckNlbGxDbGFzc0Z1bmN0aW9uLCBNYXREYXRlcGlja2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kYXRlcGlja2VyJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuLyoqIEB0aXRsZSBEYXRlcGlja2VyIHdpdGggY3VzdG9tIGRhdGUgY2xhc3NlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlci1kYXRlLWNsYXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ2RhdGVwaWNrZXItZGF0ZS1jbGFzcy1leGFtcGxlLmNzcycsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIHByb3ZpZGVyczogW3Byb3ZpZGVOYXRpdmVEYXRlQWRhcHRlcigpXSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlckRhdGVDbGFzc0V4YW1wbGUge1xuICBkYXRlQ2xhc3M6IE1hdENhbGVuZGFyQ2VsbENsYXNzRnVuY3Rpb248RGF0ZT4gPSAoY2VsbERhdGUsIHZpZXcpID0+IHtcbiAgICAvLyBPbmx5IGhpZ2hsaWdoIGRhdGVzIGluc2lkZSB0aGUgbW9udGggdmlldy5cbiAgICBpZiAodmlldyA9PT0gJ21vbnRoJykge1xuICAgICAgY29uc3QgZGF0ZSA9IGNlbGxEYXRlLmdldERhdGUoKTtcblxuICAgICAgLy8gSGlnaGxpZ2h0IHRoZSAxc3QgYW5kIDIwdGggZGF5IG9mIGVhY2ggbW9udGguXG4gICAgICByZXR1cm4gZGF0ZSA9PT0gMSB8fCBkYXRlID09PSAyMCA/ICdleGFtcGxlLWN1c3RvbS1kYXRlLWNsYXNzJyA6ICcnO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfTtcbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICA8bWF0LWxhYmVsPkNob29zZSBhIGRhdGU8L21hdC1sYWJlbD5cbiAgPGlucHV0IG1hdElucHV0IFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiPlxuICA8bWF0LWhpbnQ+TU0vREQvWVlZWTwvbWF0LWhpbnQ+XG4gIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0SWNvblN1ZmZpeCBbZm9yXT1cInBpY2tlclwiPjwvbWF0LWRhdGVwaWNrZXItdG9nZ2xlPlxuICA8bWF0LWRhdGVwaWNrZXIgW2RhdGVDbGFzc109XCJkYXRlQ2xhc3NcIiAjcGlja2VyPjwvbWF0LWRhdGVwaWNrZXI+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19