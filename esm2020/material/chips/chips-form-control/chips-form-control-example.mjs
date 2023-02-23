import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/chips";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/forms";
/**
 * @title Chips with form control
 */
export class ChipsFormControlExample {
    constructor() {
        this.keywords = ['angular', 'how-to', 'tutorial', 'accessibility'];
        this.formControl = new FormControl(['angular']);
    }
    removeKeyword(keyword) {
        const index = this.keywords.indexOf(keyword);
        if (index >= 0) {
            this.keywords.splice(index, 1);
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
}
ChipsFormControlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: ChipsFormControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsFormControlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0-rc.0", type: ChipsFormControlExample, selector: "chips-form-control-example", ngImport: i0, template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <i>Enter video keywords</i>\n</p>\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\" >\n    <mat-chip-row *ngFor=\"let keyword of keywords\" (removed)=\"removeKeyword(keyword)\">\n      {{keyword}}\n      <button matChipRemove aria-label=\"'remove ' + keyword\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n  </mat-chip-grid>\n  <input placeholder=\"New keyword...\"\n          [matChipInputFor]=\"chipGrid\"\n          (matChipInputTokenEnd)=\"add($event)\"/>\n</mat-form-field>\n\n<p>\n  <b>The following keywords are entered:</b> {{formControl.value}}\n</p>", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatChipGrid, selector: "mat-chip-grid", inputs: ["tabIndex", "disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i3.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i3.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i3.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "editable"], outputs: ["edited"] }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i5.MatLabel, selector: "mat-label" }, { kind: "directive", type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i6.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: ChipsFormControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-form-control-example', template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <i>Enter video keywords</i>\n</p>\n<mat-form-field appearance=\"fill\" class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\" >\n    <mat-chip-row *ngFor=\"let keyword of keywords\" (removed)=\"removeKeyword(keyword)\">\n      {{keyword}}\n      <button matChipRemove aria-label=\"'remove ' + keyword\">\n        <mat-icon>cancel</mat-icon>\n      </button>\n    </mat-chip-row>\n  </mat-chip-grid>\n  <input placeholder=\"New keyword...\"\n          [matChipInputFor]=\"chipGrid\"\n          (matChipInputTokenEnd)=\"add($event)\"/>\n</mat-form-field>\n\n<p>\n  <b>The following keywords are entered:</b> {{formControl.value}}\n</p>", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7QUFHM0M7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBTUUsYUFBUSxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFDOUQsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FvQjVDO0lBbEJDLGFBQWEsQ0FBQyxPQUFlO1FBQzNCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCxHQUFHLENBQUMsS0FBd0I7UUFDMUIsTUFBTSxLQUFLLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBRXpDLGtCQUFrQjtRQUNsQixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzNCO1FBRUQsd0JBQXdCO1FBQ3hCLEtBQUssQ0FBQyxTQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs7eUhBckJVLHVCQUF1Qjs2R0FBdkIsdUJBQXVCLGtFQ1pwQyxvOUJBd0JJO2dHRFpTLHVCQUF1QjtrQkFMbkMsU0FBUzsrQkFDRSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge01hdENoaXBJbnB1dEV2ZW50fSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIHdpdGggZm9ybSBjb250cm9sXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1mb3JtLWNvbnRyb2wtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0Zvcm1Db250cm9sRXhhbXBsZSB7XG4gIGtleXdvcmRzID0gWydhbmd1bGFyJywgJ2hvdy10bycsICd0dXRvcmlhbCcsICdhY2Nlc3NpYmlsaXR5J107XG4gIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFsnYW5ndWxhciddKTtcblxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IHN0cmluZykge1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5rZXl3b3Jkcy5pbmRleE9mKGtleXdvcmQpO1xuICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICB0aGlzLmtleXdvcmRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuICB9XG5cbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnZhbHVlIHx8ICcnKS50cmltKCk7XG5cbiAgICAvLyBBZGQgb3VyIGtleXdvcmRcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMua2V5d29yZHMucHVzaCh2YWx1ZSk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgdGhlIGlucHV0IHZhbHVlXG4gICAgZXZlbnQuY2hpcElucHV0IS5jbGVhcigpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImZvcm1Db250cm9sLmRpc2FibGUoKVwiPkRpc2FibGUgZm9ybSBjb250cm9sPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImZvcm1Db250cm9sLmVuYWJsZSgpXCI+RW5hYmxlIGZvcm0gY29udHJvbDwvYnV0dG9uPlxuPC9kaXY+XG48cD5cbiAgPGk+RW50ZXIgdmlkZW8ga2V5d29yZHM8L2k+XG48L3A+XG48bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZFwiPlxuICA8bWF0LWxhYmVsPlZpZGVvIGtleXdvcmRzPC9tYXQtbGFiZWw+XG4gIDxtYXQtY2hpcC1ncmlkICNjaGlwR3JpZCBhcmlhLWxhYmVsPVwiRW50ZXIga2V5d29yZHNcIiBbZm9ybUNvbnRyb2xdPVwiZm9ybUNvbnRyb2xcIiA+XG4gICAgPG1hdC1jaGlwLXJvdyAqbmdGb3I9XCJsZXQga2V5d29yZCBvZiBrZXl3b3Jkc1wiIChyZW1vdmVkKT1cInJlbW92ZUtleXdvcmQoa2V5d29yZClcIj5cbiAgICAgIHt7a2V5d29yZH19XG4gICAgICA8YnV0dG9uIG1hdENoaXBSZW1vdmUgYXJpYS1sYWJlbD1cIidyZW1vdmUgJyArIGtleXdvcmRcIj5cbiAgICAgICAgPG1hdC1pY29uPmNhbmNlbDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21hdC1jaGlwLXJvdz5cbiAgPC9tYXQtY2hpcC1ncmlkPlxuICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJOZXcga2V5d29yZC4uLlwiXG4gICAgICAgICAgW21hdENoaXBJbnB1dEZvcl09XCJjaGlwR3JpZFwiXG4gICAgICAgICAgKG1hdENoaXBJbnB1dFRva2VuRW5kKT1cImFkZCgkZXZlbnQpXCIvPlxuPC9tYXQtZm9ybS1maWVsZD5cblxuPHA+XG4gIDxiPlRoZSBmb2xsb3dpbmcga2V5d29yZHMgYXJlIGVudGVyZWQ6PC9iPiB7e2Zvcm1Db250cm9sLnZhbHVlfX1cbjwvcD4iXX0=