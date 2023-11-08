import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Stacked chips
 */
export class ChipsStackedExample {
    constructor() {
        this.availableColors = [
            { name: 'none', color: undefined },
            { name: 'Primary', color: 'primary' },
            { name: 'Accent', color: 'accent' },
            { name: 'Warn', color: 'warn' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: ChipsStackedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.0", type: ChipsStackedExample, isStandalone: true, selector: "chips-stacked-example", ngImport: i0, template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Color selection\">\n  @for (chip of availableColors; track chip) {\n    <mat-chip-option selected [color]=\"chip.color\">{{chip.name}}</mat-chip-option>\n  }\n</mat-chip-listbox>\n", styles: [".mat-mdc-chip-set {\n  max-width: 200px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1.MatChipListbox, selector: "mat-chip-listbox", inputs: ["tabIndex", "multiple", "aria-orientation", "selectable", "compareWith", "required", "hideSingleSelectionIndicator", "value"], outputs: ["change"] }, { kind: "component", type: i1.MatChipOption, selector: "mat-basic-chip-option, [mat-basic-chip-option], mat-chip-option, [mat-chip-option]", inputs: ["color", "disabled", "disableRipple", "tabIndex", "selectable", "selected"], outputs: ["selectionChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: ChipsStackedExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-stacked-example', standalone: true, imports: [MatChipsModule], template: "<mat-chip-listbox class=\"mat-mdc-chip-set-stacked\" aria-label=\"Color selection\">\n  @for (chip of availableColors; track chip) {\n    <mat-chip-option selected [color]=\"chip.color\">{{chip.name}}</mat-chip-option>\n  }\n</mat-chip-listbox>\n", styles: [".mat-mdc-chip-set {\n  max-width: 200px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtc3RhY2tlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtc3RhY2tlZC9jaGlwcy1zdGFja2VkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1zdGFja2VkL2NoaXBzLXN0YWNrZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7QUFPdkQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBUUUsb0JBQWUsR0FBZ0I7WUFDN0IsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDaEMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDbkMsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7WUFDakMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7U0FDOUIsQ0FBQztLQUNIOzhHQVBZLG1CQUFtQjtrR0FBbkIsbUJBQW1CLGlGQ25CaEMsd1BBS0Esc0dEWVksY0FBYzs7MkZBRWIsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLHVCQUF1QixjQUdyQixJQUFJLFdBQ1AsQ0FBQyxjQUFjLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2hpcENvbG9yIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb2xvcjogVGhlbWVQYWxldHRlO1xufVxuXG4vKipcbiAqIEB0aXRsZSBTdGFja2VkIGNoaXBzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLXN0YWNrZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtc3RhY2tlZC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2hpcHMtc3RhY2tlZC1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Q2hpcHNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc1N0YWNrZWRFeGFtcGxlIHtcbiAgYXZhaWxhYmxlQ29sb3JzOiBDaGlwQ29sb3JbXSA9IFtcbiAgICB7bmFtZTogJ25vbmUnLCBjb2xvcjogdW5kZWZpbmVkfSxcbiAgICB7bmFtZTogJ1ByaW1hcnknLCBjb2xvcjogJ3ByaW1hcnknfSxcbiAgICB7bmFtZTogJ0FjY2VudCcsIGNvbG9yOiAnYWNjZW50J30sXG4gICAge25hbWU6ICdXYXJuJywgY29sb3I6ICd3YXJuJ30sXG4gIF07XG59XG4iLCI8bWF0LWNoaXAtbGlzdGJveCBjbGFzcz1cIm1hdC1tZGMtY2hpcC1zZXQtc3RhY2tlZFwiIGFyaWEtbGFiZWw9XCJDb2xvciBzZWxlY3Rpb25cIj5cbiAgQGZvciAoY2hpcCBvZiBhdmFpbGFibGVDb2xvcnM7IHRyYWNrIGNoaXApIHtcbiAgICA8bWF0LWNoaXAtb3B0aW9uIHNlbGVjdGVkIFtjb2xvcl09XCJjaGlwLmNvbG9yXCI+e3tjaGlwLm5hbWV9fTwvbWF0LWNoaXAtb3B0aW9uPlxuICB9XG48L21hdC1jaGlwLWxpc3Rib3g+XG4iXX0=