import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Button toggle appearance
 */
export class ButtonToggleAppearanceExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ButtonToggleAppearanceExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0", type: ButtonToggleAppearanceExample, isStandalone: true, selector: "button-toggle-appearance-example", ngImport: i0, template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n", styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: ButtonToggleAppearanceExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-appearance-example', standalone: true, imports: [MatButtonToggleModule], template: "<p>\n  Default appearance:\n  <mat-button-toggle-group name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n\n<p>\n  Legacy appearance:\n  <mat-button-toggle-group appearance=\"legacy\" name=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n</p>\n", styles: ["mat-button-toggle-group {\n  margin-left: 12px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS9idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlL2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQzs7O0FBRXRFOztHQUVHO0FBUUgsTUFBTSxPQUFPLDZCQUE2Qjs4R0FBN0IsNkJBQTZCO2tHQUE3Qiw2QkFBNkIsNEZDYjFDLHlzQkFpQkEsNkdETlkscUJBQXFCOzsyRkFFcEIsNkJBQTZCO2tCQVB6QyxTQUFTOytCQUNFLGtDQUFrQyxjQUdoQyxJQUFJLFdBQ1AsQ0FBQyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcblxuLyoqXG4gKiBAdGl0bGUgQnV0dG9uIHRvZ2dsZSBhcHBlYXJhbmNlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tdG9nZ2xlLWFwcGVhcmFuY2UtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2J1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uVG9nZ2xlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uVG9nZ2xlQXBwZWFyYW5jZUV4YW1wbGUge31cbiIsIjxwPlxuICBEZWZhdWx0IGFwcGVhcmFuY2U6XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCBuYW1lPVwiZm9udFN0eWxlXCIgYXJpYS1sYWJlbD1cIkZvbnQgU3R5bGVcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJib2xkXCI+Qm9sZDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiaXRhbGljXCI+SXRhbGljPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJ1bmRlcmxpbmVcIj5VbmRlcmxpbmU8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPC9wPlxuXG48cD5cbiAgTGVnYWN5IGFwcGVhcmFuY2U6XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCBhcHBlYXJhbmNlPVwibGVnYWN5XCIgbmFtZT1cImZvbnRTdHlsZVwiIGFyaWEtbGFiZWw9XCJGb250IFN0eWxlXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiYm9sZFwiPkJvbGQ8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIml0YWxpY1wiPkl0YWxpYzwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwidW5kZXJsaW5lXCI+VW5kZXJsaW5lPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbjwvcD5cbiJdfQ==