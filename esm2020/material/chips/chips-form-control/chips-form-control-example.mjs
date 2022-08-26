import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/chips";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/forms";
/**
 * @title Chips with form control
 */
export class ChipsFormControlExample {
    constructor() {
        this.keywords = new Set(['angular', 'how-to', 'tutorial']);
        this.formControl = new FormControl(['angular']);
    }
    addKeywordFromInput(event) {
        if (event.value) {
            this.keywords.add(event.value);
            event.chipInput.clear();
        }
    }
    removeKeyword(keyword) {
        this.keywords.delete(keyword);
    }
}
ChipsFormControlExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ChipsFormControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsFormControlExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: ChipsFormControlExample, selector: "chips-form-control-example", ngImport: i0, template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n\n<p>\n  <i>Select a focused chip by pressing <code>SPACE</code></i>\n</p>\n\n<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-list #chipList aria-label=\"Video keywords\" multiple [formControl]=\"formControl\">\n    <mat-chip\n        *ngFor=\"let keyword of keywords\"\n        [selected]=\"keyword\"\n        [value]=\"keyword\"\n        (removed)=\"removeKeyword(keyword)\">\n      {{keyword}}\n    </mat-chip>\n    <input\n      placeholder=\"New keyword...\"\n      [matChipInputFor]=\"chipList\"\n      (matChipInputTokenEnd)=\"addKeywordFromInput($event)\">\n  </mat-chip-list>\n</mat-form-field>\n\n<p>\n  <b>The following keywords are selected:</b> {{formControl.value}}\n</p>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"], dependencies: [{ kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "component", type: i2.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i3.MatChipList, selector: "mat-chip-list", inputs: ["role", "aria-describedby", "errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { kind: "directive", type: i3.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "role", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { kind: "directive", type: i3.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "directive", type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i5.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: ChipsFormControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-form-control-example', template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n\n<p>\n  <i>Select a focused chip by pressing <code>SPACE</code></i>\n</p>\n\n<mat-form-field class=\"example-chip-list\" appearance=\"fill\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-list #chipList aria-label=\"Video keywords\" multiple [formControl]=\"formControl\">\n    <mat-chip\n        *ngFor=\"let keyword of keywords\"\n        [selected]=\"keyword\"\n        [value]=\"keyword\"\n        (removed)=\"removeKeyword(keyword)\">\n      {{keyword}}\n    </mat-chip>\n    <input\n      placeholder=\"New keyword...\"\n      [matChipInputFor]=\"chipList\"\n      (matChipInputTokenEnd)=\"addKeywordFromInput($event)\">\n  </mat-chip-list>\n</mat-form-field>\n\n<p>\n  <b>The following keywords are selected:</b> {{formControl.value}}\n</p>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7OztBQUczQzs7R0FFRztBQU1ILE1BQU0sT0FBTyx1QkFBdUI7SUFMcEM7UUFNRSxhQUFRLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FZNUM7SUFWQyxtQkFBbUIsQ0FBQyxLQUF3QjtRQUMxQyxJQUFJLEtBQUssQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDL0IsS0FBSyxDQUFDLFNBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxDQUFDOztvSEFiVSx1QkFBdUI7d0dBQXZCLHVCQUF1QixrRUNacEMsaytCQTZCQTsyRkRqQmEsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2x9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0Q2hpcElucHV0RXZlbnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcblxuLyoqXG4gKiBAdGl0bGUgQ2hpcHMgd2l0aCBmb3JtIGNvbnRyb2xcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzRm9ybUNvbnRyb2xFeGFtcGxlIHtcbiAga2V5d29yZHMgPSBuZXcgU2V0KFsnYW5ndWxhcicsICdob3ctdG8nLCAndHV0b3JpYWwnXSk7XG4gIGZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKFsnYW5ndWxhciddKTtcblxuICBhZGRLZXl3b3JkRnJvbUlucHV0KGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCkge1xuICAgIGlmIChldmVudC52YWx1ZSkge1xuICAgICAgdGhpcy5rZXl3b3Jkcy5hZGQoZXZlbnQudmFsdWUpO1xuICAgICAgZXZlbnQuY2hpcElucHV0IS5jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUtleXdvcmQoa2V5d29yZDogc3RyaW5nKSB7XG4gICAgdGhpcy5rZXl3b3Jkcy5kZWxldGUoa2V5d29yZCk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiZm9ybUNvbnRyb2wuZGlzYWJsZSgpXCI+RGlzYWJsZSBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiZm9ybUNvbnRyb2wuZW5hYmxlKClcIj5FbmFibGUgZm9ybSBjb250cm9sPC9idXR0b24+XG48L2Rpdj5cblxuPHA+XG4gIDxpPlNlbGVjdCBhIGZvY3VzZWQgY2hpcCBieSBwcmVzc2luZyA8Y29kZT5TUEFDRTwvY29kZT48L2k+XG48L3A+XG5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCIgYXBwZWFyYW5jZT1cImZpbGxcIj5cbiAgPG1hdC1sYWJlbD5WaWRlbyBrZXl3b3JkczwvbWF0LWxhYmVsPlxuICA8bWF0LWNoaXAtbGlzdCAjY2hpcExpc3QgYXJpYS1sYWJlbD1cIlZpZGVvIGtleXdvcmRzXCIgbXVsdGlwbGUgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCI+XG4gICAgPG1hdC1jaGlwXG4gICAgICAgICpuZ0Zvcj1cImxldCBrZXl3b3JkIG9mIGtleXdvcmRzXCJcbiAgICAgICAgW3NlbGVjdGVkXT1cImtleXdvcmRcIlxuICAgICAgICBbdmFsdWVdPVwia2V5d29yZFwiXG4gICAgICAgIChyZW1vdmVkKT1cInJlbW92ZUtleXdvcmQoa2V5d29yZClcIj5cbiAgICAgIHt7a2V5d29yZH19XG4gICAgPC9tYXQtY2hpcD5cbiAgICA8aW5wdXRcbiAgICAgIHBsYWNlaG9sZGVyPVwiTmV3IGtleXdvcmQuLi5cIlxuICAgICAgW21hdENoaXBJbnB1dEZvcl09XCJjaGlwTGlzdFwiXG4gICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkS2V5d29yZEZyb21JbnB1dCgkZXZlbnQpXCI+XG4gIDwvbWF0LWNoaXAtbGlzdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxwPlxuICA8Yj5UaGUgZm9sbG93aW5nIGtleXdvcmRzIGFyZSBzZWxlY3RlZDo8L2I+IHt7Zm9ybUNvbnRyb2wudmFsdWV9fVxuPC9wPlxuIl19