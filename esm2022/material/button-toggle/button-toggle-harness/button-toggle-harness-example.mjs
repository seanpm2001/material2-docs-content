import { Component } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
/**
 * @title Testing with MatButtonToggleHarness
 */
export class ButtonToggleHarnessExample {
    constructor() {
        this.disabled = false;
        this.appearance = 'standard';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: ButtonToggleHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: ButtonToggleHarnessExample, isStandalone: true, selector: "button-toggle-harness-example", ngImport: i0, template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\n</mat-button-toggle-group>\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: ButtonToggleHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-harness-example', standalone: true, imports: [MatButtonToggleModule], template: "<mat-button-toggle-group [disabled]=\"disabled\" [appearance]=\"appearance\">\n  <mat-button-toggle value=\"1\">One</mat-button-toggle>\n  <mat-button-toggle value=\"2\">Two</mat-button-toggle>\n</mat-button-toggle-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtaGFybmVzcy9idXR0b24tdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1oYXJuZXNzL2J1dHRvbi10b2dnbGUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQTRCLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7OztBQUVqRzs7R0FFRztBQU9ILE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFPRSxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGVBQVUsR0FBOEIsVUFBVSxDQUFDO0tBQ3BEOzhHQUhZLDBCQUEwQjtrR0FBMUIsMEJBQTBCLHlGQ1p2QyxpT0FJQSwyQ0RNWSxxQkFBcUI7OzJGQUVwQiwwQkFBMEI7a0JBTnRDLFNBQVM7K0JBQ0UsK0JBQStCLGNBRTdCLElBQUksV0FDUCxDQUFDLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGVBcHBlYXJhbmNlLCBNYXRCdXR0b25Ub2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0QnV0dG9uVG9nZ2xlSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tdG9nZ2xlLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Ub2dnbGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBCdXR0b25Ub2dnbGVIYXJuZXNzRXhhbXBsZSB7XG4gIGRpc2FibGVkID0gZmFsc2U7XG4gIGFwcGVhcmFuY2U6IE1hdEJ1dHRvblRvZ2dsZUFwcGVhcmFuY2UgPSAnc3RhbmRhcmQnO1xufVxuIiwiPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFthcHBlYXJhbmNlXT1cImFwcGVhcmFuY2VcIj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiMVwiPk9uZTwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIjJcIj5Ud288L21hdC1idXR0b24tdG9nZ2xlPlxuPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiJdfQ==