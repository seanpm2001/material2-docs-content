import { Component, forwardRef } from '@angular/core';
import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { NgTemplateOutlet } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/stepper";
/** @title A custom CDK stepper without a form */
export class CdkCustomStepperWithoutFormExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkCustomStepperWithoutFormExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: CdkCustomStepperWithoutFormExample, isStandalone: true, selector: "cdk-custom-stepper-without-form-example", ngImport: i0, template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n", styles: [""], dependencies: [{ kind: "component", type: i0.forwardRef(() => CustomStepper), selector: "example-custom-stepper" }, { kind: "ngmodule", type: i0.forwardRef(() => CdkStepperModule) }, { kind: "component", type: i0.forwardRef(() => i1.CdkStep), selector: "cdk-step", inputs: ["stepControl", "label", "errorMessage", "aria-label", "aria-labelledby", "state", "editable", "optional", "completed", "hasError"], outputs: ["interacted"], exportAs: ["cdkStep"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkCustomStepperWithoutFormExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-custom-stepper-without-form-example', standalone: true, imports: [forwardRef(() => CustomStepper), CdkStepperModule], template: "<example-custom-stepper>\n  <cdk-step> <p>This is any content of \"Step 1\"</p> </cdk-step>\n  <cdk-step> <p>This is any content of \"Step 2\"</p> </cdk-step>\n</example-custom-stepper>\n" }]
        }] });
/** Custom CDK stepper component */
export class CustomStepper extends CdkStepper {
    selectStepByIndex(index) {
        this.selectedIndex = index;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CustomStepper, deps: null, target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.0-next.2", type: CustomStepper, isStandalone: true, selector: "example-custom-stepper", providers: [{ provide: CdkStepper, useExisting: CustomStepper }], usesInheritance: true, ngImport: i0, template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    @for (step of steps; track step; let i = $index) {\n      <button\n        class=\"example-step\"\n        [class.example-active]=\"selectedIndex === i\"\n        (click)=\"selectStepByIndex(i)\">Step {{ i + 1 }}</button>\n    }\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"], dependencies: [{ kind: "directive", type: NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "ngmodule", type: CdkStepperModule }, { kind: "directive", type: i1.CdkStepperNext, selector: "button[cdkStepperNext]", inputs: ["type"] }, { kind: "directive", type: i1.CdkStepperPrevious, selector: "button[cdkStepperPrevious]", inputs: ["type"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CustomStepper, decorators: [{
            type: Component,
            args: [{ selector: 'example-custom-stepper', providers: [{ provide: CdkStepper, useExisting: CustomStepper }], standalone: true, imports: [NgTemplateOutlet, CdkStepperModule], template: "<section class=\"example-container\">\n  <header>\n    <h2>Step {{ selectedIndex + 1 }}/{{ steps.length }}</h2>\n  </header>\n\n  <div [ngTemplateOutlet]=\"selected ? selected.content : null\"></div>\n\n  <footer class=\"example-step-navigation-bar\">\n    <button class=\"example-nav-button\" cdkStepperPrevious>&larr;</button>\n    @for (step of steps; track step; let i = $index) {\n      <button\n        class=\"example-step\"\n        [class.example-active]=\"selectedIndex === i\"\n        (click)=\"selectStepByIndex(i)\">Step {{ i + 1 }}</button>\n    }\n    <button class=\"example-nav-button\" cdkStepperNext>&rarr;</button>\n  </footer>\n</section>\n", styles: [".example-container {\n  border: 1px solid;\n  padding: 10px;\n  margin: 10px;\n}\n\n.example-step-navigation-bar {\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 10px;\n}\n\n.example-step {\n  background: transparent;\n  border: 0;\n  margin: 0 10px;\n  padding: 10px;\n  color: inherit;\n}\n\n.example-step.example-active {\n  border-bottom: 1px solid;\n  font-weight: 600;\n}\n\n.example-nav-button {\n  background: transparent;\n  border: 0;\n  color: inherit;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc3RlcHBlci9jZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtL2Nkay1jdXN0b20tc3RlcHBlci13aXRob3V0LWZvcm0tZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3N0ZXBwZXIvY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS9leGFtcGxlLWN1c3RvbS1zdGVwcGVyLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGlCQUFpQixDQUFDOzs7QUFFakQsaURBQWlEO0FBUWpELE1BQU0sT0FBTyxrQ0FBa0M7cUhBQWxDLGtDQUFrQzt5R0FBbEMsa0NBQWtDLG1HQ1ovQyw2TEFJQSw4RURtQmEsYUFBYSx1RkFibUIsZ0JBQWdCOztrR0FFaEQsa0NBQWtDO2tCQVA5QyxTQUFTOytCQUNFLHlDQUF5QyxjQUd2QyxJQUFJLFdBQ1AsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLEVBQUUsZ0JBQWdCLENBQUM7O0FBSTlELG1DQUFtQztBQVNuQyxNQUFNLE9BQU8sYUFBYyxTQUFRLFVBQVU7SUFDM0MsaUJBQWlCLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO3FIQUhVLGFBQWE7eUdBQWIsYUFBYSxxRUFKYixDQUFDLEVBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFDLENBQUMsaURFbkJoRSx3cEJBa0JBLGdpQkZHWSxnQkFBZ0IsbUpBQUUsZ0JBQWdCOztrR0FFakMsYUFBYTtrQkFSekIsU0FBUzsrQkFDRSx3QkFBd0IsYUFHdkIsQ0FBQyxFQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxlQUFlLEVBQUMsQ0FBQyxjQUNsRCxJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsRUFBRSxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBmb3J3YXJkUmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrU3RlcHBlciwgQ2RrU3RlcHBlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3N0ZXBwZXInO1xuaW1wb3J0IHtOZ1RlbXBsYXRlT3V0bGV0fSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG4vKiogQHRpdGxlIEEgY3VzdG9tIENESyBzdGVwcGVyIHdpdGhvdXQgYSBmb3JtICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstY3VzdG9tLXN0ZXBwZXItd2l0aG91dC1mb3JtLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJy4vY2RrLWN1c3RvbS1zdGVwcGVyLXdpdGhvdXQtZm9ybS1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtmb3J3YXJkUmVmKCgpID0+IEN1c3RvbVN0ZXBwZXIpLCBDZGtTdGVwcGVyTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrQ3VzdG9tU3RlcHBlcldpdGhvdXRGb3JtRXhhbXBsZSB7fVxuXG4vKiogQ3VzdG9tIENESyBzdGVwcGVyIGNvbXBvbmVudCAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXhhbXBsZS1jdXN0b20tc3RlcHBlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9leGFtcGxlLWN1c3RvbS1zdGVwcGVyLmh0bWwnLFxuICBzdHlsZVVybDogJy4vZXhhbXBsZS1jdXN0b20tc3RlcHBlci5jc3MnLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogQ2RrU3RlcHBlciwgdXNlRXhpc3Rpbmc6IEN1c3RvbVN0ZXBwZXJ9XSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW05nVGVtcGxhdGVPdXRsZXQsIENka1N0ZXBwZXJNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21TdGVwcGVyIGV4dGVuZHMgQ2RrU3RlcHBlciB7XG4gIHNlbGVjdFN0ZXBCeUluZGV4KGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcbiAgfVxufVxuIiwiPGV4YW1wbGUtY3VzdG9tLXN0ZXBwZXI+XG4gIDxjZGstc3RlcD4gPHA+VGhpcyBpcyBhbnkgY29udGVudCBvZiBcIlN0ZXAgMVwiPC9wPiA8L2Nkay1zdGVwPlxuICA8Y2RrLXN0ZXA+IDxwPlRoaXMgaXMgYW55IGNvbnRlbnQgb2YgXCJTdGVwIDJcIjwvcD4gPC9jZGstc3RlcD5cbjwvZXhhbXBsZS1jdXN0b20tc3RlcHBlcj5cbiIsIjxzZWN0aW9uIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGhlYWRlcj5cbiAgICA8aDI+U3RlcCB7eyBzZWxlY3RlZEluZGV4ICsgMSB9fS97eyBzdGVwcy5sZW5ndGggfX08L2gyPlxuICA8L2hlYWRlcj5cblxuICA8ZGl2IFtuZ1RlbXBsYXRlT3V0bGV0XT1cInNlbGVjdGVkID8gc2VsZWN0ZWQuY29udGVudCA6IG51bGxcIj48L2Rpdj5cblxuICA8Zm9vdGVyIGNsYXNzPVwiZXhhbXBsZS1zdGVwLW5hdmlnYXRpb24tYmFyXCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbmF2LWJ1dHRvblwiIGNka1N0ZXBwZXJQcmV2aW91cz4mbGFycjs8L2J1dHRvbj5cbiAgICBAZm9yIChzdGVwIG9mIHN0ZXBzOyB0cmFjayBzdGVwOyBsZXQgaSA9ICRpbmRleCkge1xuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cImV4YW1wbGUtc3RlcFwiXG4gICAgICAgIFtjbGFzcy5leGFtcGxlLWFjdGl2ZV09XCJzZWxlY3RlZEluZGV4ID09PSBpXCJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdFN0ZXBCeUluZGV4KGkpXCI+U3RlcCB7eyBpICsgMSB9fTwvYnV0dG9uPlxuICAgIH1cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1uYXYtYnV0dG9uXCIgY2RrU3RlcHBlck5leHQ+JnJhcnI7PC9idXR0b24+XG4gIDwvZm9vdGVyPlxuPC9zZWN0aW9uPlxuIl19