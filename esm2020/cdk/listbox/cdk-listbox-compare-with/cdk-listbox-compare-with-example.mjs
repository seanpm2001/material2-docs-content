import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/cdk/listbox";
const today = new Date();
const formatter = new Intl.DateTimeFormat(undefined, {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
});
/** @title Listbox with complex object as values. */
export class CdkListboxCompareWithExample {
    constructor() {
        this.slots = [12, 13, 14, 15].map(hour => new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, hour));
        this.appointment = [
            new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1, 14),
        ];
    }
    compareDate(date1, date2) {
        return date1.getTime() === date2.getTime();
    }
    formatTime(date) {
        return formatter.format(date);
    }
    formatAppointment() {
        return this.appointment.map(a => this.formatTime(a));
    }
}
CdkListboxCompareWithExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: CdkListboxCompareWithExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkListboxCompareWithExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0-rc.0", type: CdkListboxCompareWithExample, selector: "cdk-listbox-compare-with-example", exportAs: ["cdkListboxCompareWithExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-appointment-label\">\n    Appointment Time\n  </label>\n  <ul cdkListbox\n      [cdkListboxValue]=\"appointment\"\n      [cdkListboxCompareWith]=\"compareDate\"\n      (cdkListboxValueChange)=\"appointment = $event.value\"\n      aria-labelledby=\"example-appointment-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let time of slots\"\n        [cdkOption]=\"time\"\n        class=\"example-option\">\n      {{formatTime(time)}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p *ngIf=\"appointment[0]\">\n  Your appointment  is scheduled for <strong>{{formatAppointment() | json}}</strong>&nbsp;\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: i2.CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "pipe", type: i1.JsonPipe, name: "json" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: CdkListboxCompareWithExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-compare-with-example', exportAs: 'cdkListboxCompareWithExample', template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-appointment-label\">\n    Appointment Time\n  </label>\n  <ul cdkListbox\n      [cdkListboxValue]=\"appointment\"\n      [cdkListboxCompareWith]=\"compareDate\"\n      (cdkListboxValueChange)=\"appointment = $event.value\"\n      aria-labelledby=\"example-appointment-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let time of slots\"\n        [cdkOption]=\"time\"\n        class=\"example-option\">\n      {{formatTime(time)}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p *ngIf=\"appointment[0]\">\n  Your appointment  is scheduled for <strong>{{formatAppointment() | json}}</strong>&nbsp;\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtY29tcGFyZS13aXRoLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1jb21wYXJlLXdpdGgvY2RrLWxpc3Rib3gtY29tcGFyZS13aXRoLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1jb21wYXJlLXdpdGgvY2RrLWxpc3Rib3gtY29tcGFyZS13aXRoLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDLE1BQU0sS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFFekIsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRTtJQUNuRCxPQUFPLEVBQUUsT0FBTztJQUNoQixLQUFLLEVBQUUsT0FBTztJQUNkLEdBQUcsRUFBRSxTQUFTO0lBQ2QsSUFBSSxFQUFFLFNBQVM7SUFDZixNQUFNLEVBQUUsU0FBUztDQUNsQixDQUFDLENBQUM7QUFFSCxvREFBb0Q7QUFPcEQsTUFBTSxPQUFPLDRCQUE0QjtJQU56QztRQU9FLFVBQUssR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FDMUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQ25GLENBQUM7UUFFRixnQkFBVyxHQUFvQjtZQUM3QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDO1NBQ3pFLENBQUM7S0FhSDtJQVhDLFdBQVcsQ0FBQyxLQUFXLEVBQUUsS0FBVztRQUNsQyxPQUFPLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDN0MsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFVO1FBQ25CLE9BQU8sU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs4SEFuQlUsNEJBQTRCO2tIQUE1Qiw0QkFBNEIsb0hDbkJ6QywwdkJBc0JBO2dHREhhLDRCQUE0QjtrQkFOeEMsU0FBUzsrQkFDRSxrQ0FBa0MsWUFDbEMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5jb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG5cbmNvbnN0IGZvcm1hdHRlciA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KHVuZGVmaW5lZCwge1xuICB3ZWVrZGF5OiAnc2hvcnQnLFxuICBtb250aDogJ3Nob3J0JyxcbiAgZGF5OiAnbnVtZXJpYycsXG4gIGhvdXI6ICdudW1lcmljJyxcbiAgbWludXRlOiAnbnVtZXJpYycsXG59KTtcblxuLyoqIEB0aXRsZSBMaXN0Ym94IHdpdGggY29tcGxleCBvYmplY3QgYXMgdmFsdWVzLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWxpc3Rib3gtY29tcGFyZS13aXRoLWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hDb21wYXJlV2l0aEV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1saXN0Ym94LWNvbXBhcmUtd2l0aC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWxpc3Rib3gtY29tcGFyZS13aXRoLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hDb21wYXJlV2l0aEV4YW1wbGUge1xuICBzbG90cyA9IFsxMiwgMTMsIDE0LCAxNV0ubWFwKFxuICAgIGhvdXIgPT4gbmV3IERhdGUodG9kYXkuZ2V0RnVsbFllYXIoKSwgdG9kYXkuZ2V0TW9udGgoKSwgdG9kYXkuZ2V0RGF0ZSgpICsgMSwgaG91ciksXG4gICk7XG5cbiAgYXBwb2ludG1lbnQ6IHJlYWRvbmx5IERhdGVbXSA9IFtcbiAgICBuZXcgRGF0ZSh0b2RheS5nZXRGdWxsWWVhcigpLCB0b2RheS5nZXRNb250aCgpLCB0b2RheS5nZXREYXRlKCkgKyAxLCAxNCksXG4gIF07XG5cbiAgY29tcGFyZURhdGUoZGF0ZTE6IERhdGUsIGRhdGUyOiBEYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUxLmdldFRpbWUoKSA9PT0gZGF0ZTIuZ2V0VGltZSgpO1xuICB9XG5cbiAgZm9ybWF0VGltZShkYXRlOiBEYXRlKSB7XG4gICAgcmV0dXJuIGZvcm1hdHRlci5mb3JtYXQoZGF0ZSk7XG4gIH1cblxuICBmb3JtYXRBcHBvaW50bWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5hcHBvaW50bWVudC5tYXAoYSA9PiB0aGlzLmZvcm1hdFRpbWUoYSkpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWNvbnRhaW5lclwiPlxuICA8IS0tICNkb2NyZWdpb24gbGlzdGJveCAtLT5cbiAgPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWxhYmVsXCIgaWQ9XCJleGFtcGxlLWFwcG9pbnRtZW50LWxhYmVsXCI+XG4gICAgQXBwb2ludG1lbnQgVGltZVxuICA8L2xhYmVsPlxuICA8dWwgY2RrTGlzdGJveFxuICAgICAgW2Nka0xpc3Rib3hWYWx1ZV09XCJhcHBvaW50bWVudFwiXG4gICAgICBbY2RrTGlzdGJveENvbXBhcmVXaXRoXT1cImNvbXBhcmVEYXRlXCJcbiAgICAgIChjZGtMaXN0Ym94VmFsdWVDaGFuZ2UpPVwiYXBwb2ludG1lbnQgPSAkZXZlbnQudmFsdWVcIlxuICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1hcHBvaW50bWVudC1sYWJlbFwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgdGltZSBvZiBzbG90c1wiXG4gICAgICAgIFtjZGtPcHRpb25dPVwidGltZVwiXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgIHt7Zm9ybWF0VGltZSh0aW1lKX19XG4gICAgPC9saT5cbiAgPC91bD5cbiAgPCEtLSAjZW5kZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG48L2Rpdj5cbjxwICpuZ0lmPVwiYXBwb2ludG1lbnRbMF1cIj5cbiAgWW91ciBhcHBvaW50bWVudCAgaXMgc2NoZWR1bGVkIGZvciA8c3Ryb25nPnt7Zm9ybWF0QXBwb2ludG1lbnQoKSB8IGpzb259fTwvc3Ryb25nPiZuYnNwO1xuPC9wPlxuIl19