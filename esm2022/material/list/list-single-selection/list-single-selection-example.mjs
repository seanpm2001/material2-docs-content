import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
/**
 * @title List with single selection
 */
export class ListSingleSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListSingleSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: ListSingleSelectionExample, isStandalone: true, selector: "list-single-selection-example", ngImport: i0, template: "<mat-selection-list #shoes [multiple]=\"false\">\n  @for (shoe of typesOfShoes; track shoe) {\n    <mat-list-option [value]=\"shoe\">{{shoe}}</mat-list-option>\n  }\n</mat-selection-list>\n\n<p>\n  Option selected: {{shoes.selectedOptions.hasValue() ? shoes.selectedOptions.selected[0].value : 'None'}}\n</p>\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ListSingleSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-single-selection-example', standalone: true, imports: [MatListModule], template: "<mat-selection-list #shoes [multiple]=\"false\">\n  @for (shoe of typesOfShoes; track shoe) {\n    <mat-list-option [value]=\"shoe\">{{shoe}}</mat-list-option>\n  }\n</mat-selection-list>\n\n<p>\n  Option selected: {{shoes.selectedOptions.hasValue() ? shoes.selectedOptions.selected[0].value : 'None'}}\n</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zaW5nbGUtc2VsZWN0aW9uLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi9saXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zaW5nbGUtc2VsZWN0aW9uL2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDs7R0FFRztBQU9ILE1BQU0sT0FBTywwQkFBMEI7SUFOdkM7UUFPRSxpQkFBWSxHQUFhLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQ2pGOzhHQUZZLDBCQUEwQjtrR0FBMUIsMEJBQTBCLHlGQ1p2Qyx3VEFTQSwyQ0RDWSxhQUFhOzsyRkFFWiwwQkFBMEI7a0JBTnRDLFNBQVM7K0JBQ0UsK0JBQStCLGNBRTdCLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5cbi8qKlxuICogQHRpdGxlIExpc3Qgd2l0aCBzaW5nbGUgc2VsZWN0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2luZ2xlLXNlbGVjdGlvbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdsaXN0LXNpbmdsZS1zZWxlY3Rpb24tZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdExpc3RNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0U2luZ2xlU2VsZWN0aW9uRXhhbXBsZSB7XG4gIHR5cGVzT2ZTaG9lczogc3RyaW5nW10gPSBbJ0Jvb3RzJywgJ0Nsb2dzJywgJ0xvYWZlcnMnLCAnTW9jY2FzaW5zJywgJ1NuZWFrZXJzJ107XG59XG4iLCI8bWF0LXNlbGVjdGlvbi1saXN0ICNzaG9lcyBbbXVsdGlwbGVdPVwiZmFsc2VcIj5cbiAgQGZvciAoc2hvZSBvZiB0eXBlc09mU2hvZXM7IHRyYWNrIHNob2UpIHtcbiAgICA8bWF0LWxpc3Qtb3B0aW9uIFt2YWx1ZV09XCJzaG9lXCI+e3tzaG9lfX08L21hdC1saXN0LW9wdGlvbj5cbiAgfVxuPC9tYXQtc2VsZWN0aW9uLWxpc3Q+XG5cbjxwPlxuICBPcHRpb24gc2VsZWN0ZWQ6IHt7c2hvZXMuc2VsZWN0ZWRPcHRpb25zLmhhc1ZhbHVlKCkgPyBzaG9lcy5zZWxlY3RlZE9wdGlvbnMuc2VsZWN0ZWRbMF0udmFsdWUgOiAnTm9uZSd9fVxuPC9wPlxuIl19