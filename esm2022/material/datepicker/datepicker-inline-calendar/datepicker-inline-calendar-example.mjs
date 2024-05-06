import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/datepicker";
/** @title Datepicker inline calendar example */
export class DatepickerInlineCalendarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.0", ngImport: i0, type: DatepickerInlineCalendarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.0", type: DatepickerInlineCalendarExample, isStandalone: true, selector: "datepicker-inline-calendar-example", providers: [provideNativeDateAdapter()], ngImport: i0, template: "<mat-card class=\"demo-inline-calendar-card\">\n  <mat-calendar [(selected)]=\"selected\"></mat-calendar>\n</mat-card>\n<p>Selected date: {{selected}}</p>\n", styles: [".demo-inline-calendar-card {\n  width: 300px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "ngmodule", type: MatDatepickerModule }, { kind: "component", type: i2.MatCalendar, selector: "mat-calendar", inputs: ["headerComponent", "startAt", "startView", "selected", "minDate", "maxDate", "dateFilter", "dateClass", "comparisonStart", "comparisonEnd", "startDateAccessibleName", "endDateAccessibleName"], outputs: ["selectedChange", "yearSelected", "monthSelected", "viewChanged", "_userSelection", "_userDragDrop"], exportAs: ["matCalendar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.0", ngImport: i0, type: DatepickerInlineCalendarExample, decorators: [{
            type: Component,
            args: [{ selector: 'datepicker-inline-calendar-example', standalone: true, providers: [provideNativeDateAdapter()], imports: [MatCardModule, MatDatepickerModule], template: "<mat-card class=\"demo-inline-calendar-card\">\n  <mat-calendar [(selected)]=\"selected\"></mat-calendar>\n</mat-card>\n<p>Selected date: {{selected}}</p>\n", styles: [".demo-inline-calendar-card {\n  width: 300px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2RhdGVwaWNrZXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXIvZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLG1CQUFtQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRWhFLGdEQUFnRDtBQVNoRCxNQUFNLE9BQU8sK0JBQStCO21IQUEvQiwrQkFBK0I7dUdBQS9CLCtCQUErQixpRkFIL0IsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDLDBCQ1h6Qyw4SkFJQSwyR0RRWSxhQUFhLDRJQUFFLG1CQUFtQjs7Z0dBRWpDLCtCQUErQjtrQkFSM0MsU0FBUzsrQkFDRSxvQ0FBb0MsY0FHbEMsSUFBSSxhQUNMLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxXQUM5QixDQUFDLGFBQWEsRUFBRSxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RGF0ZXBpY2tlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGF0ZXBpY2tlcic7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuaW1wb3J0IHtwcm92aWRlTmF0aXZlRGF0ZUFkYXB0ZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKiogQHRpdGxlIERhdGVwaWNrZXIgaW5saW5lIGNhbGVuZGFyIGV4YW1wbGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGVwaWNrZXItaW5saW5lLWNhbGVuZGFyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGVwaWNrZXItaW5saW5lLWNhbGVuZGFyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnZGF0ZXBpY2tlci1pbmxpbmUtY2FsZW5kYXItZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBwcm92aWRlcnM6IFtwcm92aWRlTmF0aXZlRGF0ZUFkYXB0ZXIoKV0sXG4gIGltcG9ydHM6IFtNYXRDYXJkTW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRGF0ZXBpY2tlcklubGluZUNhbGVuZGFyRXhhbXBsZSB7XG4gIHNlbGVjdGVkOiBEYXRlIHwgbnVsbDtcbn1cbiIsIjxtYXQtY2FyZCBjbGFzcz1cImRlbW8taW5saW5lLWNhbGVuZGFyLWNhcmRcIj5cbiAgPG1hdC1jYWxlbmRhciBbKHNlbGVjdGVkKV09XCJzZWxlY3RlZFwiPjwvbWF0LWNhbGVuZGFyPlxuPC9tYXQtY2FyZD5cbjxwPlNlbGVjdGVkIGRhdGU6IHt7c2VsZWN0ZWR9fTwvcD5cbiJdfQ==