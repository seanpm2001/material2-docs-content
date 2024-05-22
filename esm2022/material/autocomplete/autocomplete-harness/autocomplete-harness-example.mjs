import { Component } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/autocomplete";
import * as i2 from "@angular/material/core";
/**
 * @title Testing with MatAutocompleteHarness
 */
export class AutocompleteHarnessExample {
    constructor() {
        this.states = [
            { code: 'AL', name: 'Alabama' },
            { code: 'CA', name: 'California' },
            { code: 'FL', name: 'Florida' },
            { code: 'KS', name: 'Kansas' },
            { code: 'MA', name: 'Massachusetts' },
            { code: 'NY', name: 'New York' },
            { code: 'OR', name: 'Oregon' },
            { code: 'PA', name: 'Pennsylvania' },
            { code: 'TN', name: 'Tennessee' },
            { code: 'VA', name: 'Virginia' },
            { code: 'WY', name: 'Wyoming' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: AutocompleteHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: AutocompleteHarnessExample, isStandalone: true, selector: "autocomplete-harness-example", ngImport: i0, template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  @for (state of states; track state) {\n    <mat-option [value]=\"state.code\">{{ state.name }}</mat-option>\n  }\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n", dependencies: [{ kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i1.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i2.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i1.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: AutocompleteHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-harness-example', standalone: true, imports: [MatAutocompleteModule], template: "<mat-autocomplete #autocomplete=\"matAutocomplete\">\n  @for (state of states; track state) {\n    <mat-option [value]=\"state.code\">{{ state.name }}</mat-option>\n  }\n</mat-autocomplete>\n\n<input id=\"plain\" [matAutocomplete]=\"autocomplete\">\n<input id=\"disabled\" disabled [matAutocomplete]=\"autocomplete\">\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLWhhcm5lc3MtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2F1dG9jb21wbGV0ZS9hdXRvY29tcGxldGUtaGFybmVzcy9hdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1oYXJuZXNzL2F1dG9jb21wbGV0ZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDOzs7O0FBRXJFOztHQUVHO0FBT0gsTUFBTSxPQUFPLDBCQUEwQjtJQU52QztRQU9FLFdBQU0sR0FBRztZQUNQLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFDO1lBQ2hDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO1lBQzdCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFDO1lBQ25DLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQzlCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQzVCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsY0FBYyxFQUFDO1lBQ2xDLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFDO1lBQy9CLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO1lBQzlCLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFDO1NBQzlCLENBQUM7S0FDSDs4R0FkWSwwQkFBMEI7a0dBQTFCLDBCQUEwQix3RkNadkMsaVVBUUEsMkNERVkscUJBQXFCOzsyRkFFcEIsMEJBQTBCO2tCQU50QyxTQUFTOytCQUNFLDhCQUE4QixjQUU1QixJQUFJLFdBQ1AsQ0FBQyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuXG4vKipcbiAqIEB0aXRsZSBUZXN0aW5nIHdpdGggTWF0QXV0b2NvbXBsZXRlSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdhdXRvY29tcGxldGUtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QXV0b2NvbXBsZXRlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0b2NvbXBsZXRlSGFybmVzc0V4YW1wbGUge1xuICBzdGF0ZXMgPSBbXG4gICAge2NvZGU6ICdBTCcsIG5hbWU6ICdBbGFiYW1hJ30sXG4gICAge2NvZGU6ICdDQScsIG5hbWU6ICdDYWxpZm9ybmlhJ30sXG4gICAge2NvZGU6ICdGTCcsIG5hbWU6ICdGbG9yaWRhJ30sXG4gICAge2NvZGU6ICdLUycsIG5hbWU6ICdLYW5zYXMnfSxcbiAgICB7Y29kZTogJ01BJywgbmFtZTogJ01hc3NhY2h1c2V0dHMnfSxcbiAgICB7Y29kZTogJ05ZJywgbmFtZTogJ05ldyBZb3JrJ30sXG4gICAge2NvZGU6ICdPUicsIG5hbWU6ICdPcmVnb24nfSxcbiAgICB7Y29kZTogJ1BBJywgbmFtZTogJ1Blbm5zeWx2YW5pYSd9LFxuICAgIHtjb2RlOiAnVE4nLCBuYW1lOiAnVGVubmVzc2VlJ30sXG4gICAge2NvZGU6ICdWQScsIG5hbWU6ICdWaXJnaW5pYSd9LFxuICAgIHtjb2RlOiAnV1knLCBuYW1lOiAnV3lvbWluZyd9LFxuICBdO1xufVxuIiwiPG1hdC1hdXRvY29tcGxldGUgI2F1dG9jb21wbGV0ZT1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICBAZm9yIChzdGF0ZSBvZiBzdGF0ZXM7IHRyYWNrIHN0YXRlKSB7XG4gICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cInN0YXRlLmNvZGVcIj57eyBzdGF0ZS5uYW1lIH19PC9tYXQtb3B0aW9uPlxuICB9XG48L21hdC1hdXRvY29tcGxldGU+XG5cbjxpbnB1dCBpZD1cInBsYWluXCIgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIj5cbjxpbnB1dCBpZD1cImRpc2FibGVkXCIgZGlzYWJsZWQgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvY29tcGxldGVcIj5cbiJdfQ==