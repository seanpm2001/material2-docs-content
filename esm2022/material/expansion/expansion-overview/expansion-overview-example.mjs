import { Component } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/expansion";
/**
 * @title Basic expansion panel
 */
export class ExpansionOverviewExample {
    constructor() {
        this.panelOpenState = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ExpansionOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ExpansionOverviewExample, isStandalone: true, selector: "expansion-overview-example", ngImport: i0, template: "<mat-accordion>\n<!-- #docregion basic-panel -->\n<!-- #docregion hide-toggle -->\n  <mat-expansion-panel hideToggle>\n<!-- #enddocregion hide-toggle -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        This is the expansion title\n      </mat-panel-title>\n      <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>This is the primary content of the panel.</p>\n  </mat-expansion-panel>\n<!-- #enddocregion basic-panel -->\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n", dependencies: [{ kind: "ngmodule", type: MatExpansionModule }, { kind: "directive", type: i1.MatAccordion, selector: "mat-accordion", inputs: ["multi", "hideToggle", "displayMode", "togglePosition"], exportAs: ["matAccordion"] }, { kind: "component", type: i1.MatExpansionPanel, selector: "mat-expansion-panel", inputs: ["disabled", "expanded", "hideToggle", "togglePosition"], outputs: ["opened", "closed", "expandedChange", "afterExpand", "afterCollapse"], exportAs: ["matExpansionPanel"] }, { kind: "component", type: i1.MatExpansionPanelHeader, selector: "mat-expansion-panel-header", inputs: ["expandedHeight", "collapsedHeight", "tabIndex"] }, { kind: "directive", type: i1.MatExpansionPanelTitle, selector: "mat-panel-title" }, { kind: "directive", type: i1.MatExpansionPanelDescription, selector: "mat-panel-description" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ExpansionOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'expansion-overview-example', standalone: true, imports: [MatExpansionModule], template: "<mat-accordion>\n<!-- #docregion basic-panel -->\n<!-- #docregion hide-toggle -->\n  <mat-expansion-panel hideToggle>\n<!-- #enddocregion hide-toggle -->\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        This is the expansion title\n      </mat-panel-title>\n      <mat-panel-description>\n        This is a summary of the content\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>This is the primary content of the panel.</p>\n  </mat-expansion-panel>\n<!-- #enddocregion basic-panel -->\n  <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                       (closed)=\"panelOpenState = false\">\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Self aware panel\n      </mat-panel-title>\n      <mat-panel-description>\n        Currently I am {{panelOpenState ? 'open' : 'closed'}}\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <p>I'm visible because I am open</p>\n  </mat-expansion-panel>\n</mat-accordion>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9leHBhbnNpb24vZXhwYW5zaW9uLW92ZXJ2aWV3L2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZXhwYW5zaW9uL2V4cGFuc2lvbi1vdmVydmlldy9leHBhbnNpb24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sNkJBQTZCLENBQUM7OztBQUUvRDs7R0FFRztBQU9ILE1BQU0sT0FBTyx3QkFBd0I7SUFOckM7UUFPRSxtQkFBYyxHQUFHLEtBQUssQ0FBQztLQUN4Qjs4R0FGWSx3QkFBd0I7a0dBQXhCLHdCQUF3QixzRkNackMscS9CQTZCQSwyQ0RuQlksa0JBQWtCOzsyRkFFakIsd0JBQXdCO2tCQU5wQyxTQUFTOytCQUNFLDRCQUE0QixjQUUxQixJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0RXhwYW5zaW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9leHBhbnNpb24nO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBleHBhbnNpb24gcGFuZWxcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhwYW5zaW9uLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2V4cGFuc2lvbi1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0RXhwYW5zaW9uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgRXhwYW5zaW9uT3ZlcnZpZXdFeGFtcGxlIHtcbiAgcGFuZWxPcGVuU3RhdGUgPSBmYWxzZTtcbn1cbiIsIjxtYXQtYWNjb3JkaW9uPlxuPCEtLSAjZG9jcmVnaW9uIGJhc2ljLXBhbmVsIC0tPlxuPCEtLSAjZG9jcmVnaW9uIGhpZGUtdG9nZ2xlIC0tPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCBoaWRlVG9nZ2xlPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGhpZGUtdG9nZ2xlIC0tPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFRoaXMgaXMgdGhlIGV4cGFuc2lvbiB0aXRsZVxuICAgICAgPC9tYXQtcGFuZWwtdGl0bGU+XG4gICAgICA8bWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgICAgICBUaGlzIGlzIGEgc3VtbWFyeSBvZiB0aGUgY29udGVudFxuICAgICAgPC9tYXQtcGFuZWwtZGVzY3JpcHRpb24+XG4gICAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICA8cD5UaGlzIGlzIHRoZSBwcmltYXJ5IGNvbnRlbnQgb2YgdGhlIHBhbmVsLjwvcD5cbiAgPC9tYXQtZXhwYW5zaW9uLXBhbmVsPlxuPCEtLSAjZW5kZG9jcmVnaW9uIGJhc2ljLXBhbmVsIC0tPlxuICA8bWF0LWV4cGFuc2lvbi1wYW5lbCAob3BlbmVkKT1cInBhbmVsT3BlblN0YXRlID0gdHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgIChjbG9zZWQpPVwicGFuZWxPcGVuU3RhdGUgPSBmYWxzZVwiPlxuICAgIDxtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcj5cbiAgICAgIDxtYXQtcGFuZWwtdGl0bGU+XG4gICAgICAgIFNlbGYgYXdhcmUgcGFuZWxcbiAgICAgIDwvbWF0LXBhbmVsLXRpdGxlPlxuICAgICAgPG1hdC1wYW5lbC1kZXNjcmlwdGlvbj5cbiAgICAgICAgQ3VycmVudGx5IEkgYW0ge3twYW5lbE9wZW5TdGF0ZSA/ICdvcGVuJyA6ICdjbG9zZWQnfX1cbiAgICAgIDwvbWF0LXBhbmVsLWRlc2NyaXB0aW9uPlxuICAgIDwvbWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI+XG4gICAgPHA+SSdtIHZpc2libGUgYmVjYXVzZSBJIGFtIG9wZW48L3A+XG4gIDwvbWF0LWV4cGFuc2lvbi1wYW5lbD5cbjwvbWF0LWFjY29yZGlvbj5cbiJdfQ==