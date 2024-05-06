import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/chips";
import * as i4 from "@angular/forms";
import * as i5 from "@angular/material/icon";
/**
 * @title Chips with form control
 */
export class ChipsFormControlExample {
    constructor() {
        this.keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
        this.formControl = new FormControl(['angular']);
        this.announcer = inject(LiveAnnouncer);
    }
    removeKeyword(keyword) {
        const index = this.keywords.indexOf(keyword);
        if (index >= 0) {
            this.keywords.splice(index, 1);
            this.announcer.announce(`removed ${keyword}`);
        }
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our keyword
        if (value) {
            this.keywords.push(value);
        }
        // Clear the input value
        event.chipInput.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.0", ngImport: i0, type: ChipsFormControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-rc.0", type: ChipsFormControlExample, isStandalone: true, selector: "chips-form-control-example", ngImport: i0, template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <em>Enter video keywords</em>\n</p>\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\" >\n    @for (keyword of keywords; track keyword) {\n      <mat-chip-row (removed)=\"removeKeyword(keyword)\">\n        {{keyword}}\n        <button matChipRemove aria-label=\"'remove ' + keyword\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n  </mat-chip-grid>\n  <input placeholder=\"New keyword...\"\n          [matChipInputFor]=\"chipGrid\"\n          (matChipInputTokenEnd)=\"add($event)\"/>\n</mat-form-field>\n\n<p>\n  <strong>The following keywords are entered:</strong> {{formControl.value}}\n</p>\n", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i3.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i3.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i3.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i3.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.0", ngImport: i0, type: ChipsFormControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-form-control-example', standalone: true, imports: [
                        MatButtonModule,
                        MatFormFieldModule,
                        MatChipsModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                    ], template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <em>Enter video keywords</em>\n</p>\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\" >\n    @for (keyword of keywords; track keyword) {\n      <mat-chip-row (removed)=\"removeKeyword(keyword)\">\n        {{keyword}}\n        <button matChipRemove aria-label=\"'remove ' + keyword\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n  </mat-chip-grid>\n  <input placeholder=\"New keyword...\"\n          [matChipInputFor]=\"chipGrid\"\n          (matChipInputTokenEnd)=\"add($event)\"/>\n</mat-form-field>\n\n<p>\n  <strong>The following keywords are entered:</strong> {{formControl.value}}\n</p>\n", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBb0IsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDMUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7Ozs7QUFFaEQ7O0dBRUc7QUFlSCxNQUFNLE9BQU8sdUJBQXVCO0lBZHBDO1FBZUUsYUFBUSxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDOUQsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFM0MsY0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztLQXNCbkM7SUFwQkMsYUFBYSxDQUFDLE9BQWU7UUFDM0IsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFFL0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1FBQ2hELENBQUM7SUFDSCxDQUFDO0lBRUQsR0FBRyxDQUFDLEtBQXdCO1FBQzFCLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QyxrQkFBa0I7UUFDbEIsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFFRCx3QkFBd0I7UUFDeEIsS0FBSyxDQUFDLFNBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixDQUFDO21IQXpCVSx1QkFBdUI7dUdBQXZCLHVCQUF1QixzRkN6QnBDLCsrQkEyQkEsaUtEVkksZUFBZSwyTkFDZixrQkFBa0IsMFNBQ2xCLGNBQWMsNHVCQUNkLFdBQVcsc0lBQ1gsbUJBQW1CLGlOQUNuQixhQUFhOztnR0FHSix1QkFBdUI7a0JBZG5DLFNBQVM7K0JBQ0UsNEJBQTRCLGNBRzFCLElBQUksV0FDUDt3QkFDUCxlQUFlO3dCQUNmLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG1CQUFtQjt3QkFDbkIsYUFBYTtxQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBpbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hpcElucHV0RXZlbnQsIE1hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge0xpdmVBbm5vdW5jZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgd2l0aCBmb3JtIGNvbnRyb2xcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdENoaXBzTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNGb3JtQ29udHJvbEV4YW1wbGUge1xuICBrZXl3b3JkcyA9IFsnYW5ndWxhcicsICdob3ctdG8nLCAndHV0b3JpYWwnLCAnYWNjZXNzaWJpbGl0eSddO1xuICBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChbJ2FuZ3VsYXInXSk7XG5cbiAgYW5ub3VuY2VyID0gaW5qZWN0KExpdmVBbm5vdW5jZXIpO1xuXG4gIHJlbW92ZUtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLmtleXdvcmRzLmluZGV4T2Yoa2V5d29yZCk7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMua2V5d29yZHMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgdGhpcy5hbm5vdW5jZXIuYW5ub3VuY2UoYHJlbW92ZWQgJHtrZXl3b3JkfWApO1xuICAgIH1cbiAgfVxuXG4gIGFkZChldmVudDogTWF0Q2hpcElucHV0RXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IChldmVudC52YWx1ZSB8fCAnJykudHJpbSgpO1xuXG4gICAgLy8gQWRkIG91ciBrZXl3b3JkXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmtleXdvcmRzLnB1c2godmFsdWUpO1xuICAgIH1cblxuICAgIC8vIENsZWFyIHRoZSBpbnB1dCB2YWx1ZVxuICAgIGV2ZW50LmNoaXBJbnB1dCEuY2xlYXIoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJmb3JtQ29udHJvbC5kaXNhYmxlKClcIj5EaXNhYmxlIGZvcm0gY29udHJvbDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJmb3JtQ29udHJvbC5lbmFibGUoKVwiPkVuYWJsZSBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cbjwvZGl2PlxuPHA+XG4gIDxlbT5FbnRlciB2aWRlbyBrZXl3b3JkczwvZW0+XG48L3A+XG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIj5cbiAgPG1hdC1sYWJlbD5WaWRlbyBrZXl3b3JkczwvbWF0LWxhYmVsPlxuICA8bWF0LWNoaXAtZ3JpZCAjY2hpcEdyaWQgYXJpYS1sYWJlbD1cIkVudGVyIGtleXdvcmRzXCIgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCIgPlxuICAgIEBmb3IgKGtleXdvcmQgb2Yga2V5d29yZHM7IHRyYWNrIGtleXdvcmQpIHtcbiAgICAgIDxtYXQtY2hpcC1yb3cgKHJlbW92ZWQpPVwicmVtb3ZlS2V5d29yZChrZXl3b3JkKVwiPlxuICAgICAgICB7e2tleXdvcmR9fVxuICAgICAgICA8YnV0dG9uIG1hdENoaXBSZW1vdmUgYXJpYS1sYWJlbD1cIidyZW1vdmUgJyArIGtleXdvcmRcIj5cbiAgICAgICAgICA8bWF0LWljb24+Y2FuY2VsPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L21hdC1jaGlwLXJvdz5cbiAgICB9XG4gIDwvbWF0LWNoaXAtZ3JpZD5cbiAgPGlucHV0IHBsYWNlaG9sZGVyPVwiTmV3IGtleXdvcmQuLi5cIlxuICAgICAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcEdyaWRcIlxuICAgICAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGQoJGV2ZW50KVwiLz5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxwPlxuICA8c3Ryb25nPlRoZSBmb2xsb3dpbmcga2V5d29yZHMgYXJlIGVudGVyZWQ6PC9zdHJvbmc+IHt7Zm9ybUNvbnRyb2wudmFsdWV9fVxuPC9wPlxuIl19