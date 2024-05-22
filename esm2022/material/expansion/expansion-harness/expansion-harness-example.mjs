import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
/**
 * @title Testing with MatExpansionPanelHarness and MatAccordionHarness
 */
export class ExpansionHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: ExpansionHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: ExpansionHarnessExample, isStandalone: true, selector: "expansion-harness-example", ngImport: i0, template: "<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Welcome\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <p>I am the content!</p>\n  </mat-expansion-panel>\n</mat-accordion>\n", dependencies: [{ kind: "ngmodule", type: MatExpansionModule }, { kind: "directive", type: i1.MatAccordion, selector: "mat-accordion", inputs: ["hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["hideToggle", "togglePosition"], outputs: ["afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["expandedHeight", "collapsedHeight", "tabIndex"] }, { kind: "directive", type: i1.MatExpansionPanelTitle, selector: "mat-panel-title" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: ExpansionHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'expansion-harness-example', standalone: true, imports: [MatExpansionModule], template: "<mat-accordion>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Welcome\n      </mat-panel-title>\n    </mat-expansion-panel-header>\n    <p>I am the content!</p>\n  </mat-expansion-panel>\n</mat-accordion>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2V4cGFuc2lvbi9leHBhbnNpb24taGFybmVzcy9leHBhbnNpb24taGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1oYXJuZXNzL2V4cGFuc2lvbi1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7QUFFL0Q7O0dBRUc7QUFPSCxNQUFNLE9BQU8sdUJBQXVCOzhHQUF2Qix1QkFBdUI7a0dBQXZCLHVCQUF1QixxRkNacEMsK1BBVUEsMkNEQVksa0JBQWtCOzsyRkFFakIsdUJBQXVCO2tCQU5uQyxTQUFTOytCQUNFLDJCQUEyQixjQUV6QixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RXhwYW5zaW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0RXhwYW5zaW9uUGFuZWxIYXJuZXNzIGFuZCBNYXRBY2NvcmRpb25IYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4cGFuc2lvbi1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRFeHBhbnNpb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBFeHBhbnNpb25IYXJuZXNzRXhhbXBsZSB7fVxuIiwiPG1hdC1hY2NvcmRpb24+XG4gIDxtYXQtZXhwYW5zaW9uLXBhbmVsPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFdlbGNvbWVcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgPHA+SSBhbSB0aGUgY29udGVudCE8L3A+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbjwvbWF0LWFjY29yZGlvbj5cbiJdfQ==