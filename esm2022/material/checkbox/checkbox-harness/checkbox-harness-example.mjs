import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
/**
 * @title Testing with MatCheckboxHarness
 */
export class CheckboxHarnessExample {
    constructor() {
        this.disabled = input(true);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CheckboxHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "18.0.0", type: CheckboxHarnessExample, isStandalone: true, selector: "checkbox-harness-example", inputs: { disabled: { classPropertyName: "disabled", publicName: "disabled", isSignal: true, isRequired: false, transformFunction: null } }, ngImport: i0, template: "<mat-checkbox\n  required\n  [checked]=\"true\"\n  name=\"first-name\"\n  value=\"first-value\"\n  aria-label=\"First checkbox\"\n>\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled()\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n", dependencies: [{ kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CheckboxHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-harness-example', standalone: true, imports: [MatCheckboxModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-checkbox\n  required\n  [checked]=\"true\"\n  name=\"first-name\"\n  value=\"first-value\"\n  aria-label=\"First checkbox\"\n>\n  First\n</mat-checkbox>\n<mat-checkbox indeterminate=\"true\" [disabled]=\"disabled()\" aria-label=\"Second checkbox\">\n  Second\n</mat-checkbox>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hlY2tib3gvY2hlY2tib3gtaGFybmVzcy9jaGVja2JveC1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1oYXJuZXNzL2NoZWNrYm94LWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDOzs7QUFFN0Q7O0dBRUc7QUFRSCxNQUFNLE9BQU8sc0JBQXNCO0lBUG5DO1FBUVcsYUFBUSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNqQzs4R0FGWSxzQkFBc0I7a0dBQXRCLHNCQUFzQixpT0NibkMsNFJBWUEsMkNERlksaUJBQWlCOzsyRkFHaEIsc0JBQXNCO2tCQVBsQyxTQUFTOytCQUNFLDBCQUEwQixjQUV4QixJQUFJLFdBQ1AsQ0FBQyxpQkFBaUIsQ0FBQyxtQkFDWCx1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBpbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENoZWNrYm94TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRDaGVja2JveEhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2hlY2tib3gtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGVja2JveC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRDaGVja2JveE1vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveEhhcm5lc3NFeGFtcGxlIHtcbiAgcmVhZG9ubHkgZGlzYWJsZWQgPSBpbnB1dCh0cnVlKTtcbn1cbiIsIjxtYXQtY2hlY2tib3hcbiAgcmVxdWlyZWRcbiAgW2NoZWNrZWRdPVwidHJ1ZVwiXG4gIG5hbWU9XCJmaXJzdC1uYW1lXCJcbiAgdmFsdWU9XCJmaXJzdC12YWx1ZVwiXG4gIGFyaWEtbGFiZWw9XCJGaXJzdCBjaGVja2JveFwiXG4+XG4gIEZpcnN0XG48L21hdC1jaGVja2JveD5cbjxtYXQtY2hlY2tib3ggaW5kZXRlcm1pbmF0ZT1cInRydWVcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZWQoKVwiIGFyaWEtbGFiZWw9XCJTZWNvbmQgY2hlY2tib3hcIj5cbiAgU2Vjb25kXG48L21hdC1jaGVja2JveD5cbiJdfQ==