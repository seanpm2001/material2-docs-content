import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/progress-bar";
/**
 * @title Testing with MatProgressBarHarness
 */
export class ProgressBarHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: ProgressBarHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.5", type: ProgressBarHarnessExample, isStandalone: true, selector: "progress-bar-harness-example", ngImport: i0, template: "<mat-progress-bar mode=\"determinate\" [value]=\"value\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n", dependencies: [{ kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i1.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: ProgressBarHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'progress-bar-harness-example', standalone: true, imports: [MatProgressBarModule], template: "<mat-progress-bar mode=\"determinate\" [value]=\"value\"></mat-progress-bar>\n<mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MtYmFyLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Byb2dyZXNzLWJhci9wcm9ncmVzcy1iYXItaGFybmVzcy9wcm9ncmVzcy1iYXItaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyL3Byb2dyZXNzLWJhci1oYXJuZXNzL3Byb2dyZXNzLWJhci1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7QUFFcEU7O0dBRUc7QUFPSCxNQUFNLE9BQU8seUJBQXlCO3FIQUF6Qix5QkFBeUI7eUdBQXpCLHlCQUF5Qix3RkNadEMsOElBRUEsMkNEUVksb0JBQW9COztrR0FFbkIseUJBQXlCO2tCQU5yQyxTQUFTOytCQUNFLDhCQUE4QixjQUU1QixJQUFJLFdBQ1AsQ0FBQyxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRQcm9ncmVzc0Jhckhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncHJvZ3Jlc3MtYmFyLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncHJvZ3Jlc3MtYmFyLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFByb2dyZXNzQmFyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJvZ3Jlc3NCYXJIYXJuZXNzRXhhbXBsZSB7XG4gIHZhbHVlOiBudW1iZXI7XG59XG4iLCI8bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiZGV0ZXJtaW5hdGVcIiBbdmFsdWVdPVwidmFsdWVcIj48L21hdC1wcm9ncmVzcy1iYXI+XG48bWF0LXByb2dyZXNzLWJhciBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvbWF0LXByb2dyZXNzLWJhcj5cbiJdfQ==