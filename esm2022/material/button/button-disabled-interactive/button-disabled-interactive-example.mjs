import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import * as i0 from "@angular/core";
/**
 * @title Interactive disabled buttons
 */
export class ButtonDisabledInteractiveExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: ButtonDisabledInteractiveExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: ButtonDisabledInteractiveExample, isStandalone: true, selector: "button-disabled-interactive-example", ngImport: i0, template: "<button\n  mat-raised-button\n  disabled\n  disabledInteractive\n  matTooltip=\"This is a tooltip!\">Disabled button allowing interactivity</button>\n\n<button\n  mat-raised-button\n  disabled\n  matTooltip=\"This is a tooltip!\">Default disabled button</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "component", type: MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "directive", type: MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: ButtonDisabledInteractiveExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-disabled-interactive-example', standalone: true, imports: [MatButton, MatTooltip], template: "<button\n  mat-raised-button\n  disabled\n  disabledInteractive\n  matTooltip=\"This is a tooltip!\">Disabled button allowing interactivity</button>\n\n<button\n  mat-raised-button\n  disabled\n  matTooltip=\"This is a tooltip!\">Default disabled button</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLWRpc2FibGVkLWludGVyYWN0aXZlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLWRpc2FibGVkLWludGVyYWN0aXZlL2J1dHRvbi1kaXNhYmxlZC1pbnRlcmFjdGl2ZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1kaXNhYmxlZC1pbnRlcmFjdGl2ZS9idXR0b24tZGlzYWJsZWQtaW50ZXJhY3RpdmUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7QUFFckQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sZ0NBQWdDOzhHQUFoQyxnQ0FBZ0M7a0dBQWhDLGdDQUFnQywrRkNkN0MsMFFBVUEsNkZERVksU0FBUyxpTEFBRSxVQUFVOzsyRkFFcEIsZ0NBQWdDO2tCQVA1QyxTQUFTOytCQUNFLHFDQUFxQyxjQUduQyxJQUFJLFdBQ1AsQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdFRvb2x0aXB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xuXG4vKipcbiAqIEB0aXRsZSBJbnRlcmFjdGl2ZSBkaXNhYmxlZCBidXR0b25zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1kaXNhYmxlZC1pbnRlcmFjdGl2ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdidXR0b24tZGlzYWJsZWQtaW50ZXJhY3RpdmUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdidXR0b24tZGlzYWJsZWQtaW50ZXJhY3RpdmUtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uLCBNYXRUb29sdGlwXSxcbn0pXG5leHBvcnQgY2xhc3MgQnV0dG9uRGlzYWJsZWRJbnRlcmFjdGl2ZUV4YW1wbGUge31cbiIsIjxidXR0b25cbiAgbWF0LXJhaXNlZC1idXR0b25cbiAgZGlzYWJsZWRcbiAgZGlzYWJsZWRJbnRlcmFjdGl2ZVxuICBtYXRUb29sdGlwPVwiVGhpcyBpcyBhIHRvb2x0aXAhXCI+RGlzYWJsZWQgYnV0dG9uIGFsbG93aW5nIGludGVyYWN0aXZpdHk8L2J1dHRvbj5cblxuPGJ1dHRvblxuICBtYXQtcmFpc2VkLWJ1dHRvblxuICBkaXNhYmxlZFxuICBtYXRUb29sdGlwPVwiVGhpcyBpcyBhIHRvb2x0aXAhXCI+RGVmYXVsdCBkaXNhYmxlZCBidXR0b248L2J1dHRvbj5cbiJdfQ==