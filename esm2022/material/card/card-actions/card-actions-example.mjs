import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/button";
/**
 * @title Card with actions alignment option
 */
export class CardActionsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CardActionsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: CardActionsExample, isStandalone: true, selector: "card-actions-example", ngImport: i0, template: "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>Start</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>End</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions align=\"end\">\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CardActionsExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-actions-example', standalone: true, imports: [MatCardModule, MatButtonModule], template: "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>Start</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n<br>\n<mat-card>\n  <mat-card-header>\n    <mat-card-title>Actions Buttons</mat-card-title>\n    <mat-card-subtitle>End</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-actions align=\"end\">\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1hY3Rpb25zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtYWN0aW9ucy9jYXJkLWFjdGlvbnMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1hY3Rpb25zL2NhcmQtYWN0aW9ucy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRXJEOztHQUVHO0FBT0gsTUFBTSxPQUFPLGtCQUFrQjtxSEFBbEIsa0JBQWtCO3lHQUFsQixrQkFBa0IsZ0ZDYi9CLGdtQkFxQkEsMkNEVlksYUFBYSwyakJBQUUsZUFBZTs7a0dBRTdCLGtCQUFrQjtrQkFOOUIsU0FBUzsrQkFDRSxzQkFBc0IsY0FFcEIsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcblxuLyoqXG4gKiBAdGl0bGUgQ2FyZCB3aXRoIGFjdGlvbnMgYWxpZ25tZW50IG9wdGlvblxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXJkLWFjdGlvbnMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2FyZC1hY3Rpb25zLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRDYXJkTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkQWN0aW9uc0V4YW1wbGUge31cbiIsIjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWhlYWRlcj5cbiAgICA8bWF0LWNhcmQtdGl0bGU+QWN0aW9ucyBCdXR0b25zPC9tYXQtY2FyZC10aXRsZT5cbiAgICA8bWF0LWNhcmQtc3VidGl0bGU+U3RhcnQ8L21hdC1jYXJkLXN1YnRpdGxlPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPG1hdC1jYXJkLWFjdGlvbnM+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkxJS0U8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+U0hBUkU8L2J1dHRvbj5cbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxuPC9tYXQtY2FyZD5cbjxicj5cbjxtYXQtY2FyZD5cbiAgPG1hdC1jYXJkLWhlYWRlcj5cbiAgICA8bWF0LWNhcmQtdGl0bGU+QWN0aW9ucyBCdXR0b25zPC9tYXQtY2FyZC10aXRsZT5cbiAgICA8bWF0LWNhcmQtc3VidGl0bGU+RW5kPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgPC9tYXQtY2FyZC1oZWFkZXI+XG4gIDxtYXQtY2FyZC1hY3Rpb25zIGFsaWduPVwiZW5kXCI+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkxJS0U8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+U0hBUkU8L2J1dHRvbj5cbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxuPC9tYXQtY2FyZD5cbiJdfQ==