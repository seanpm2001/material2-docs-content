import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
/**
 * @title List with selection
 */
export class ListSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: ListSelectionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-next.1", type: ListSelectionExample, isStandalone: true, selector: "list-selection-example", ngImport: i0, template: "<mat-selection-list #shoes>\n  @for (shoe of typesOfShoes; track shoe) {\n    <mat-list-option>{{shoe}}</mat-list-option>\n  }\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatSelectionList, selector: "mat-selection-list", inputs: ["color", "compareWith", "multiple", "hideSingleSelectionIndicator", "disabled"], outputs: ["selectionChange"], exportAs: ["matSelectionList"] }, { kind: "component", type: i1.MatListOption, selector: "mat-list-option", inputs: ["togglePosition", "checkboxPosition", "color", "value", "selected"], outputs: ["selectedChange"], exportAs: ["matListOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: ListSelectionExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-selection-example', standalone: true, imports: [MatListModule], template: "<mat-selection-list #shoes>\n  @for (shoe of typesOfShoes; track shoe) {\n    <mat-list-option>{{shoe}}</mat-list-option>\n  }\n</mat-selection-list>\n\n<p>\n  Options selected: {{shoes.selectedOptions.selected.length}}\n</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1zZWxlY3Rpb24vbGlzdC1zZWxlY3Rpb24tZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7QUFFckQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8sb0JBQW9CO0lBTmpDO1FBT0UsaUJBQVksR0FBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztLQUNqRjtxSEFGWSxvQkFBb0I7eUdBQXBCLG9CQUFvQixrRkNaakMscU9BU0EsMkNEQ1ksYUFBYTs7a0dBRVosb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNFLHdCQUF3QixjQUV0QixJQUFJLFdBQ1AsQ0FBQyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdExpc3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2xpc3QnO1xuXG4vKipcbiAqIEB0aXRsZSBMaXN0IHdpdGggc2VsZWN0aW9uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3Qtc2VsZWN0aW9uLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRMaXN0TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdFNlbGVjdGlvbkV4YW1wbGUge1xuICB0eXBlc09mU2hvZXM6IHN0cmluZ1tdID0gWydCb290cycsICdDbG9ncycsICdMb2FmZXJzJywgJ01vY2Nhc2lucycsICdTbmVha2VycyddO1xufVxuIiwiPG1hdC1zZWxlY3Rpb24tbGlzdCAjc2hvZXM+XG4gIEBmb3IgKHNob2Ugb2YgdHlwZXNPZlNob2VzOyB0cmFjayBzaG9lKSB7XG4gICAgPG1hdC1saXN0LW9wdGlvbj57e3Nob2V9fTwvbWF0LWxpc3Qtb3B0aW9uPlxuICB9XG48L21hdC1zZWxlY3Rpb24tbGlzdD5cblxuPHA+XG4gIE9wdGlvbnMgc2VsZWN0ZWQ6IHt7c2hvZXMuc2VsZWN0ZWRPcHRpb25zLnNlbGVjdGVkLmxlbmd0aH19XG48L3A+XG4iXX0=