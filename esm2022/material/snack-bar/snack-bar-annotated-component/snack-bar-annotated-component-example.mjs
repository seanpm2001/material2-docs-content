import { Component, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarAction, MatSnackBarActions, MatSnackBarLabel, MatSnackBarRef, } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/snack-bar";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/material/button";
/**
 * @title Snack-bar with an annotated custom component
 */
export class SnackBarAnnotatedComponentExample {
    constructor(_snackBar) {
        this._snackBar = _snackBar;
        this.durationInSeconds = 5;
    }
    openSnackBar() {
        this._snackBar.openFromComponent(PizzaPartyAnnotatedComponent, {
            duration: this.durationInSeconds * 1000,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: SnackBarAnnotatedComponentExample, deps: [{ token: i1.MatSnackBar }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.5", type: SnackBarAnnotatedComponentExample, isStandalone: true, selector: "snack-bar-annotated-component-example", ngImport: i0, template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: SnackBarAnnotatedComponentExample, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-annotated-component-example', standalone: true, imports: [MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule], template: "<mat-form-field>\n  <mat-label>Snack bar duration (seconds)</mat-label>\n  <input type=\"number\" [(ngModel)]=\"durationInSeconds\" matInput>\n</mat-form-field>\n\n<button mat-stroked-button (click)=\"openSnackBar()\" aria-label=\"Show an example snack-bar\">\n  Pizza party\n</button>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.MatSnackBar }] });
export class PizzaPartyAnnotatedComponent {
    constructor() {
        this.snackBarRef = inject(MatSnackBarRef);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: PizzaPartyAnnotatedComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.5", type: PizzaPartyAnnotatedComponent, isStandalone: true, selector: "snack-bar-annotated-component-example-snack", ngImport: i0, template: "<span class=\"example-pizza-party\" matSnackBarLabel>\n  Pizza party!!!\n</span>\n<span matSnackBarActions>\n  <button mat-button matSnackBarAction (click)=\"snackBarRef.dismissWithAction()\">\uD83C\uDF55</button>\n</span>\n\n", styles: ["\n    :host {\n      display: flex;\n    }\n\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i5.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "directive", type: MatSnackBarLabel, selector: "[matSnackBarLabel]" }, { kind: "directive", type: MatSnackBarActions, selector: "[matSnackBarActions]" }, { kind: "directive", type: MatSnackBarAction, selector: "[matSnackBarAction]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: PizzaPartyAnnotatedComponent, decorators: [{
            type: Component,
            args: [{ selector: 'snack-bar-annotated-component-example-snack', standalone: true, imports: [MatButtonModule, MatSnackBarLabel, MatSnackBarActions, MatSnackBarAction], template: "<span class=\"example-pizza-party\" matSnackBarLabel>\n  Pizza party!!!\n</span>\n<span matSnackBarActions>\n  <button mat-button matSnackBarAction (click)=\"snackBarRef.dismissWithAction()\">\uD83C\uDF55</button>\n</span>\n\n", styles: ["\n    :host {\n      display: flex;\n    }\n\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hY2stYmFyLWFubm90YXRlZC1jb21wb25lbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9zbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC9zbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc25hY2stYmFyL3NuYWNrLWJhci1hbm5vdGF0ZWQtY29tcG9uZW50L3NuYWNrLWJhci1hbm5vdGF0ZWQtY29tcG9uZW50LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NuYWNrLWJhci9zbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC9zbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUNMLFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsa0JBQWtCLEVBQ2xCLGdCQUFnQixFQUNoQixjQUFjLEdBQ2YsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQUVoRTs7R0FFRztBQVFILE1BQU0sT0FBTyxpQ0FBaUM7SUFHNUMsWUFBb0IsU0FBc0I7UUFBdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUYxQyxzQkFBaUIsR0FBRyxDQUFDLENBQUM7SUFFdUIsQ0FBQztJQUU5QyxZQUFZO1FBQ1YsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyw0QkFBNEIsRUFBRTtZQUM3RCxRQUFRLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUk7U0FDeEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztxSEFUVSxpQ0FBaUM7eUdBQWpDLGlDQUFpQyxpR0N2QjlDLGlTQVFBLHFHRGFZLGtCQUFrQiwwU0FBRSxXQUFXLGd4QkFBRSxjQUFjLDBXQUFFLGVBQWU7O2tHQUUvRCxpQ0FBaUM7a0JBUDdDLFNBQVM7K0JBQ0UsdUNBQXVDLGNBR3JDLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDOztBQTZCN0UsTUFBTSxPQUFPLDRCQUE0QjtJQWZ6QztRQWdCRSxnQkFBVyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUN0QztxSEFGWSw0QkFBNEI7eUdBQTVCLDRCQUE0Qix1R0VsRHpDLG9PQU9BLG1LRnlDWSxlQUFlLDROQUFFLGdCQUFnQiwrREFBRSxrQkFBa0IsaUVBQUUsaUJBQWlCOztrR0FFdkUsNEJBQTRCO2tCQWZ4QyxTQUFTOytCQUNFLDZDQUE2QyxjQVczQyxJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE1hdFNuYWNrQmFyLFxuICBNYXRTbmFja0JhckFjdGlvbixcbiAgTWF0U25hY2tCYXJBY3Rpb25zLFxuICBNYXRTbmFja0JhckxhYmVsLFxuICBNYXRTbmFja0JhclJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKipcbiAqIEB0aXRsZSBTbmFjay1iYXIgd2l0aCBhbiBhbm5vdGF0ZWQgY3VzdG9tIGNvbXBvbmVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItYW5ub3RhdGVkLWNvbXBvbmVudC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ3NuYWNrLWJhci1hbm5vdGF0ZWQtY29tcG9uZW50LWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgRm9ybXNNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja0JhckFubm90YXRlZENvbXBvbmVudEV4YW1wbGUge1xuICBkdXJhdGlvbkluU2Vjb25kcyA9IDU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyKSB7fVxuXG4gIG9wZW5TbmFja0JhcigpIHtcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChQaXp6YVBhcnR5QW5ub3RhdGVkQ29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogdGhpcy5kdXJhdGlvbkluU2Vjb25kcyAqIDEwMDAsXG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLWFubm90YXRlZC1jb21wb25lbnQtZXhhbXBsZS1zbmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWFubm90YXRlZC1jb21wb25lbnQtZXhhbXBsZS1zbmFjay5odG1sJyxcbiAgc3R5bGVzOiBgXG4gICAgOmhvc3Qge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAuZXhhbXBsZS1waXp6YS1wYXJ0eSB7XG4gICAgICBjb2xvcjogaG90cGluaztcbiAgICB9XG4gIGAsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdFNuYWNrQmFyTGFiZWwsIE1hdFNuYWNrQmFyQWN0aW9ucywgTWF0U25hY2tCYXJBY3Rpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBQaXp6YVBhcnR5QW5ub3RhdGVkQ29tcG9uZW50IHtcbiAgc25hY2tCYXJSZWYgPSBpbmplY3QoTWF0U25hY2tCYXJSZWYpO1xufVxuIiwiPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPlNuYWNrIGJhciBkdXJhdGlvbiAoc2Vjb25kcyk8L21hdC1sYWJlbD5cbiAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cImR1cmF0aW9uSW5TZWNvbmRzXCIgbWF0SW5wdXQ+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiAoY2xpY2spPVwib3BlblNuYWNrQmFyKClcIiBhcmlhLWxhYmVsPVwiU2hvdyBhbiBleGFtcGxlIHNuYWNrLWJhclwiPlxuICBQaXp6YSBwYXJ0eVxuPC9idXR0b24+XG4iLCI8c3BhbiBjbGFzcz1cImV4YW1wbGUtcGl6emEtcGFydHlcIiBtYXRTbmFja0JhckxhYmVsPlxuICBQaXp6YSBwYXJ0eSEhIVxuPC9zcGFuPlxuPHNwYW4gbWF0U25hY2tCYXJBY3Rpb25zPlxuICA8YnV0dG9uIG1hdC1idXR0b24gbWF0U25hY2tCYXJBY3Rpb24gKGNsaWNrKT1cInNuYWNrQmFyUmVmLmRpc21pc3NXaXRoQWN0aW9uKClcIj7wn42VPC9idXR0b24+XG48L3NwYW4+XG5cbiJdfQ==