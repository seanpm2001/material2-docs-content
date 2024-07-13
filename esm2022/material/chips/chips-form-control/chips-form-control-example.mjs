import { LiveAnnouncer } from '@angular/cdk/a11y';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
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
        this.keywords = signal(['angular', 'how-to', 'tutorial', 'accessibility']);
        this.formControl = new FormControl(['angular']);
        this.announcer = inject(LiveAnnouncer);
    }
    removeKeyword(keyword) {
        this.keywords.update(keywords => {
            const index = keywords.indexOf(keyword);
            if (index < 0) {
                return keywords;
            }
            keywords.splice(index, 1);
            this.announcer.announce(`removed ${keyword}`);
            return [...keywords];
        });
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our keyword
        if (value) {
            this.keywords.update(keywords => [...keywords, value]);
        }
        // Clear the input value
        event.chipInput.clear();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: ChipsFormControlExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0", type: ChipsFormControlExample, isStandalone: true, selector: "chips-form-control-example", ngImport: i0, template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <em>Enter video keywords</em>\n</p>\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\">\n    @for (keyword of keywords(); track keyword) {\n      <mat-chip-row (removed)=\"removeKeyword(keyword)\">\n        {{keyword}}\n        <button matChipRemove aria-label=\"'remove ' + keyword\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n  </mat-chip-grid>\n  <input\n    placeholder=\"New keyword...\"\n    [matChipInputFor]=\"chipGrid\"\n    (matChipInputTokenEnd)=\"add($event)\"\n  />\n</mat-form-field>\n\n<p><strong>The following keywords are entered:</strong> {{formControl.value}}</p>\n", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i3.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i3.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i3.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i3.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i5.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: ChipsFormControlExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-form-control-example', standalone: true, imports: [
                        MatButtonModule,
                        MatFormFieldModule,
                        MatChipsModule,
                        FormsModule,
                        ReactiveFormsModule,
                        MatIconModule,
                    ], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"example-button-container\">\n  <button mat-raised-button (click)=\"formControl.disable()\">Disable form control</button>\n  <button mat-raised-button (click)=\"formControl.enable()\">Enable form control</button>\n</div>\n<p>\n  <em>Enter video keywords</em>\n</p>\n<mat-form-field class=\"example-form-field\">\n  <mat-label>Video keywords</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter keywords\" [formControl]=\"formControl\">\n    @for (keyword of keywords(); track keyword) {\n      <mat-chip-row (removed)=\"removeKeyword(keyword)\">\n        {{keyword}}\n        <button matChipRemove aria-label=\"'remove ' + keyword\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n  </mat-chip-grid>\n  <input\n    placeholder=\"New keyword...\"\n    [matChipInputFor]=\"chipGrid\"\n    (matChipInputTokenEnd)=\"add($event)\"\n  />\n</mat-form-field>\n\n<p><strong>The following keywords are entered:</strong> {{formControl.value}}</p>\n", styles: [".example-form-field {\n  width: 100%;\n}\n\n.example-button-container > button {\n  margin: 0 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1mb3JtLWNvbnRyb2wvY2hpcHMtZm9ybS1jb250cm9sLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDaEQsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBb0IsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDMUUsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBRXJEOztHQUVHO0FBZ0JILE1BQU0sT0FBTyx1QkFBdUI7SUFmcEM7UUFnQlcsYUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDdEUsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFFcEQsY0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztLQTBCbkM7SUF4QkMsYUFBYSxDQUFDLE9BQWU7UUFDM0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDOUIsTUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN4QyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDZCxPQUFPLFFBQVEsQ0FBQztZQUNsQixDQUFDO1lBRUQsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsV0FBVyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELEdBQUcsQ0FBQyxLQUF3QjtRQUMxQixNQUFNLEtBQUssR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFekMsa0JBQWtCO1FBQ2xCLElBQUksS0FBSyxFQUFFLENBQUM7WUFDVixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRUQsd0JBQXdCO1FBQ3hCLEtBQUssQ0FBQyxTQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDM0IsQ0FBQzs4R0E3QlUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsc0ZDMUJwQyx1K0JBMkJBLGlLRFZJLGVBQWUsMk5BQ2Ysa0JBQWtCLDBTQUNsQixjQUFjLDR1QkFDZCxXQUFXLHNJQUNYLG1CQUFtQixpTkFDbkIsYUFBYTs7MkZBSUosdUJBQXVCO2tCQWZuQyxTQUFTOytCQUNFLDRCQUE0QixjQUcxQixJQUFJLFdBQ1A7d0JBQ1AsZUFBZTt3QkFDZixrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QsV0FBVzt3QkFDWCxtQkFBbUI7d0JBQ25CLGFBQWE7cUJBQ2QsbUJBQ2dCLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpdmVBbm5vdW5jZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgaW5qZWN0LCBzaWduYWx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDaGlwSW5wdXRFdmVudCwgTWF0Q2hpcHNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoaXBzJztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbi8qKlxuICogQHRpdGxlIENoaXBzIHdpdGggZm9ybSBjb250cm9sXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWZvcm0tY29udHJvbC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1mb3JtLWNvbnRyb2wtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdjaGlwcy1mb3JtLWNvbnRyb2wtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0QnV0dG9uTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRDaGlwc01vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0Zvcm1Db250cm9sRXhhbXBsZSB7XG4gIHJlYWRvbmx5IGtleXdvcmRzID0gc2lnbmFsKFsnYW5ndWxhcicsICdob3ctdG8nLCAndHV0b3JpYWwnLCAnYWNjZXNzaWJpbGl0eSddKTtcbiAgcmVhZG9ubHkgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woWydhbmd1bGFyJ10pO1xuXG4gIGFubm91bmNlciA9IGluamVjdChMaXZlQW5ub3VuY2VyKTtcblxuICByZW1vdmVLZXl3b3JkKGtleXdvcmQ6IHN0cmluZykge1xuICAgIHRoaXMua2V5d29yZHMudXBkYXRlKGtleXdvcmRzID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0ga2V5d29yZHMuaW5kZXhPZihrZXl3b3JkKTtcbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGtleXdvcmRzO1xuICAgICAgfVxuXG4gICAgICBrZXl3b3Jkcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5hbm5vdW5jZXIuYW5ub3VuY2UoYHJlbW92ZWQgJHtrZXl3b3JkfWApO1xuICAgICAgcmV0dXJuIFsuLi5rZXl3b3Jkc107XG4gICAgfSk7XG4gIH1cblxuICBhZGQoZXZlbnQ6IE1hdENoaXBJbnB1dEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSAoZXZlbnQudmFsdWUgfHwgJycpLnRyaW0oKTtcblxuICAgIC8vIEFkZCBvdXIga2V5d29yZFxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5rZXl3b3Jkcy51cGRhdGUoa2V5d29yZHMgPT4gWy4uLmtleXdvcmRzLCB2YWx1ZV0pO1xuICAgIH1cblxuICAgIC8vIENsZWFyIHRoZSBpbnB1dCB2YWx1ZVxuICAgIGV2ZW50LmNoaXBJbnB1dCEuY2xlYXIoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJmb3JtQ29udHJvbC5kaXNhYmxlKClcIj5EaXNhYmxlIGZvcm0gY29udHJvbDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJmb3JtQ29udHJvbC5lbmFibGUoKVwiPkVuYWJsZSBmb3JtIGNvbnRyb2w8L2J1dHRvbj5cbjwvZGl2PlxuPHA+XG4gIDxlbT5FbnRlciB2aWRlbyBrZXl3b3JkczwvZW0+XG48L3A+XG48bWF0LWZvcm0tZmllbGQgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRcIj5cbiAgPG1hdC1sYWJlbD5WaWRlbyBrZXl3b3JkczwvbWF0LWxhYmVsPlxuICA8bWF0LWNoaXAtZ3JpZCAjY2hpcEdyaWQgYXJpYS1sYWJlbD1cIkVudGVyIGtleXdvcmRzXCIgW2Zvcm1Db250cm9sXT1cImZvcm1Db250cm9sXCI+XG4gICAgQGZvciAoa2V5d29yZCBvZiBrZXl3b3JkcygpOyB0cmFjayBrZXl3b3JkKSB7XG4gICAgICA8bWF0LWNoaXAtcm93IChyZW1vdmVkKT1cInJlbW92ZUtleXdvcmQoa2V5d29yZClcIj5cbiAgICAgICAge3trZXl3b3JkfX1cbiAgICAgICAgPGJ1dHRvbiBtYXRDaGlwUmVtb3ZlIGFyaWEtbGFiZWw9XCIncmVtb3ZlICcgKyBrZXl3b3JkXCI+XG4gICAgICAgICAgPG1hdC1pY29uPmNhbmNlbDwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9tYXQtY2hpcC1yb3c+XG4gICAgfVxuICA8L21hdC1jaGlwLWdyaWQ+XG4gIDxpbnB1dFxuICAgIHBsYWNlaG9sZGVyPVwiTmV3IGtleXdvcmQuLi5cIlxuICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcEdyaWRcIlxuICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGQoJGV2ZW50KVwiXG4gIC8+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48cD48c3Ryb25nPlRoZSBmb2xsb3dpbmcga2V5d29yZHMgYXJlIGVudGVyZWQ6PC9zdHJvbmc+IHt7Zm9ybUNvbnRyb2wudmFsdWV9fTwvcD5cbiJdfQ==