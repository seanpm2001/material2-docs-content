import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/card";
/**
 * @title Card with actions alignment option
 */
export class CardActionsExample {
}
CardActionsExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: CardActionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CardActionsExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0-rc.0", type: CardActionsExample, selector: "card-actions-example", ngImport: i0, template: "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>Start</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>End</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions align=\"end\">\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", dependencies: [{ kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i2.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i2.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "component", type: i2.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i2.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i2.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: CardActionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-actions-example', template: "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>Start</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>End</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions align=\"end\">\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1hY3Rpb25zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtYWN0aW9ucy9jYXJkLWFjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1hY3Rpb25zL2NhcmQtYWN0aW9ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxrQkFBa0I7O29IQUFsQixrQkFBa0I7d0dBQWxCLGtCQUFrQiw0RENUL0IsZ21CQXFCQTtnR0RaYSxrQkFBa0I7a0JBSjlCLFNBQVM7K0JBQ0Usc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggYWN0aW9ucyBhbGlnbm1lbnQgb3B0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhcmQtYWN0aW9ucy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLWFjdGlvbnMtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FyZEFjdGlvbnNFeGFtcGxlIHt9XG4iLCI8bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPG1hdC1jYXJkLXRpdGxlPkFjdGlvbnMgQnV0dG9uczwvbWF0LWNhcmQtdGl0bGU+XG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlPlN0YXJ0PC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cbjwvbWF0LWNhcmQ+XG48YnI+XG48bWF0LWNhcmQ+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPG1hdC1jYXJkLXRpdGxlPkFjdGlvbnMgQnV0dG9uczwvbWF0LWNhcmQtdGl0bGU+XG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlPkVuZDwvbWF0LWNhcmQtc3VidGl0bGU+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8bWF0LWNhcmQtYWN0aW9ucyBhbGlnbj1cImVuZFwiPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cbjwvbWF0LWNhcmQ+XG4iXX0=