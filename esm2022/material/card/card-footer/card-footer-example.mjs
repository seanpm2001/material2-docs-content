import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/progress-bar";
/**
 * @title Card with footer
 */
export class CardFooterExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-next.2", ngImport: i0, type: CardFooterExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-next.2", type: CardFooterExample, isStandalone: true, selector: "card-footer-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    <mat-card-title>Shiba Inu</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n    <mat-divider></mat-divider>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "directive", type: i1.MatCardFooter, selector: "mat-card-footer" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatProgressBarModule }, { kind: "component", type: i4.MatProgressBar, selector: "mat-progress-bar", inputs: ["color", "value", "bufferValue", "mode"], outputs: ["animationEnd"], exportAs: ["matProgressBar"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-next.2", ngImport: i0, type: CardFooterExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-footer-example', standalone: true, imports: [MatCardModule, MatDividerModule, MatButtonModule, MatProgressBarModule], template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n    <mat-card-title>Shiba Inu</mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>This card has divider and indeterminate progress as footer</p>\n    <p>{{ longText }}</p>\n    <mat-divider></mat-divider>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n  <mat-card-footer>\n    <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n  </mat-card-footer>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mb290ZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mb290ZXIvY2FyZC1mb290ZXItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7O0FBRXJEOztHQUVHO0FBUUgsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQVFFLGFBQVEsR0FBRzs7K0JBRWtCLENBQUM7S0FDL0I7cUhBSlksaUJBQWlCO3lHQUFqQixpQkFBaUIsK0VDaEI5QiwwbEJBa0JBLG9HREpZLGFBQWEscXRCQUFFLGdCQUFnQixrSUFBRSxlQUFlLDJOQUFFLG9CQUFvQjs7a0dBRXJFLGlCQUFpQjtrQkFQN0IsU0FBUzsrQkFDRSxxQkFBcUIsY0FHbkIsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UHJvZ3Jlc3NCYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0RGl2aWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggZm9vdGVyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhcmQtZm9vdGVyLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtZm9vdGVyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjYXJkLWZvb3Rlci1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Q2FyZE1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRQcm9ncmVzc0Jhck1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRGb290ZXJFeGFtcGxlIHtcbiAgbG9uZ1RleHQgPSBgVGhlIFNoaWJhIEludSBpcyB0aGUgc21hbGxlc3Qgb2YgdGhlIHNpeCBvcmlnaW5hbCBhbmQgZGlzdGluY3Qgc3BpdHogYnJlZWRzIG9mIGRvZ1xuICBmcm9tIEphcGFuLiBBIHNtYWxsLCBhZ2lsZSBkb2cgdGhhdCBjb3BlcyB2ZXJ5IHdlbGwgd2l0aCBtb3VudGFpbm91cyB0ZXJyYWluLCB0aGUgU2hpYmEgSW51IHdhc1xuICBvcmlnaW5hbGx5IGJyZWQgZm9yIGh1bnRpbmcuYDtcbn1cbiIsIjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiPlxuICA8bWF0LWNhcmQtaGVhZGVyPlxuICAgIDxtYXQtY2FyZC1zdWJ0aXRsZT5Eb2cgQnJlZWQ8L21hdC1jYXJkLXN1YnRpdGxlPlxuICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAgPHA+VGhpcyBjYXJkIGhhcyBkaXZpZGVyIGFuZCBpbmRldGVybWluYXRlIHByb2dyZXNzIGFzIGZvb3RlcjwvcD5cbiAgICA8cD57eyBsb25nVGV4dCB9fTwvcD5cbiAgICA8bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuICA8bWF0LWNhcmQtYWN0aW9ucz5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+TElLRTwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5TSEFSRTwvYnV0dG9uPlxuICA8L21hdC1jYXJkLWFjdGlvbnM+XG4gIDxtYXQtY2FyZC1mb290ZXI+XG4gICAgPG1hdC1wcm9ncmVzcy1iYXIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1wcm9ncmVzcy1iYXI+XG4gIDwvbWF0LWNhcmQtZm9vdGVyPlxuPC9tYXQtY2FyZD5cbiJdfQ==