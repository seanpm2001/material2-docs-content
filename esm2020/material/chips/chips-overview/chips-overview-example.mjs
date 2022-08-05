import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/legacy-chips";
/**
 * @title Basic chips
 */
export class ChipsOverviewExample {
}
ChipsOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ChipsOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: ChipsOverviewExample, selector: "chips-overview-example", ngImport: i0, template: "<mat-chip-list aria-label=\"Fish selection\">\n  <mat-chip>One fish</mat-chip>\n  <mat-chip>Two fish</mat-chip>\n  <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n  <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\n</mat-chip-list>\n", dependencies: [{ kind: "component", type: i1.MatLegacyChipList, selector: "mat-chip-list", inputs: ["role", "aria-describedby", "errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { kind: "directive", type: i1.MatLegacyChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "role", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ChipsOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-overview-example', template: "<mat-chip-list aria-label=\"Fish selection\">\n  <mat-chip>One fish</mat-chip>\n  <mat-chip>Two fish</mat-chip>\n  <mat-chip color=\"primary\" selected>Primary fish</mat-chip>\n  <mat-chip color=\"accent\" selected>Accent fish</mat-chip>\n</mat-chip-list>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLW92ZXJ2aWV3L2NoaXBzLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1vdmVydmlldy9jaGlwcy1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRXhDOztHQUVHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjs7aUhBQXBCLG9CQUFvQjtxR0FBcEIsb0JBQW9CLDhEQ1RqQyxtUUFNQTsyRkRHYSxvQkFBb0I7a0JBSmhDLFNBQVM7K0JBQ0Usd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBjaGlwc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc092ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPG1hdC1jaGlwLWxpc3QgYXJpYS1sYWJlbD1cIkZpc2ggc2VsZWN0aW9uXCI+XG4gIDxtYXQtY2hpcD5PbmUgZmlzaDwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcD5Ud28gZmlzaDwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcCBjb2xvcj1cInByaW1hcnlcIiBzZWxlY3RlZD5QcmltYXJ5IGZpc2g8L21hdC1jaGlwPlxuICA8bWF0LWNoaXAgY29sb3I9XCJhY2NlbnRcIiBzZWxlY3RlZD5BY2NlbnQgZmlzaDwvbWF0LWNoaXA+XG48L21hdC1jaGlwLWxpc3Q+XG4iXX0=