import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/forms";
/**
 * @title Basic select with initial value and no form
 */
export class SelectInitialValueExample {
    constructor() {
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' },
        ];
        this.cars = [
            { value: 'ford', viewValue: 'Ford' },
            { value: 'chevrolet', viewValue: 'Chevrolet' },
            { value: 'dodge', viewValue: 'Dodge' },
        ];
        this.selectedFood = this.foods[2].value;
        this.selectedCar = this.cars[0].value;
    }
    selectCar(event) {
        this.selectedCar = event.target.value;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: SelectInitialValueExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0", type: SelectInitialValueExample, isStandalone: true, selector: "select-initial-value-example", ngImport: i0, template: "<h4>Basic mat-select with initial value</h4>\n<mat-form-field>\n  <mat-label>Favorite Food</mat-label>\n  <mat-select [(value)]=\"selectedFood\">\n    <mat-option></mat-option>\n    @for (option of foods; track option) {\n      <mat-option [value]=\"option.value\">{{ option.viewValue }}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n<p>You selected: {{selectedFood}}</p>\n\n<h4>Basic native select with initial value</h4>\n<mat-form-field>\n  <mat-label>Favorite Car</mat-label>\n  <select matNativeControl (change)=\"selectCar($event)\">\n    <option value=\"\"></option>\n    @for (option of cars; track option) {\n      <option [value]=\"option.value\"\n            [selected]=\"selectedCar === option.value\">{{ option.viewValue }}</option>\n    }\n  </select>\n</mat-form-field>\n<p>You selected: {{selectedCar}}</p>\n", dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i5.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { kind: "directive", type: i5.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: SelectInitialValueExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-initial-value-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule], template: "<h4>Basic mat-select with initial value</h4>\n<mat-form-field>\n  <mat-label>Favorite Food</mat-label>\n  <mat-select [(value)]=\"selectedFood\">\n    <mat-option></mat-option>\n    @for (option of foods; track option) {\n      <mat-option [value]=\"option.value\">{{ option.viewValue }}</mat-option>\n    }\n  </mat-select>\n</mat-form-field>\n<p>You selected: {{selectedFood}}</p>\n\n<h4>Basic native select with initial value</h4>\n<mat-form-field>\n  <mat-label>Favorite Car</mat-label>\n  <select matNativeControl (change)=\"selectCar($event)\">\n    <option value=\"\"></option>\n    @for (option of cars; track option) {\n      <option [value]=\"option.value\"\n            [selected]=\"selectedCar === option.value\">{{ option.viewValue }}</option>\n    }\n  </select>\n</mat-form-field>\n<p>You selected: {{selectedCar}}</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaW5pdGlhbC12YWx1ZS9zZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1pbml0aWFsLXZhbHVlL3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBWWhFOztHQUVHO0FBT0gsTUFBTSxPQUFPLHlCQUF5QjtJQU50QztRQU9FLFVBQUssR0FBVztZQUNkLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1lBQ3RDLEVBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFDO1NBQ3ZDLENBQUM7UUFDRixTQUFJLEdBQVU7WUFDWixFQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBQztZQUNsQyxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBQztZQUM1QyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztTQUNyQyxDQUFDO1FBQ0YsaUJBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNuQyxnQkFBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0tBS2xDO0lBSEMsU0FBUyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBSSxLQUFLLENBQUMsTUFBNEIsQ0FBQyxLQUFLLENBQUM7SUFDL0QsQ0FBQzs4R0FoQlUseUJBQXlCO2tHQUF6Qix5QkFBeUIsd0ZDekJ0QyxxMEJBd0JBLDJDRERZLGtCQUFrQiwwU0FBRSxlQUFlLG1yQkFBRSxjQUFjLDBXQUFFLFdBQVc7OzJGQUUvRCx5QkFBeUI7a0JBTnJDLFNBQVM7K0JBQ0UsOEJBQThCLGNBRTVCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsV0FBVyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRTZWxlY3RNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5cbmludGVyZmFjZSBGb29kIHtcbiAgdmFsdWU6IHN0cmluZztcbiAgdmlld1ZhbHVlOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBDYXIge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgc2VsZWN0IHdpdGggaW5pdGlhbCB2YWx1ZSBhbmQgbm8gZm9ybVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRTZWxlY3RNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBGb3Jtc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEluaXRpYWxWYWx1ZUV4YW1wbGUge1xuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9LFxuICBdO1xuICBjYXJzOiBDYXJbXSA9IFtcbiAgICB7dmFsdWU6ICdmb3JkJywgdmlld1ZhbHVlOiAnRm9yZCd9LFxuICAgIHt2YWx1ZTogJ2NoZXZyb2xldCcsIHZpZXdWYWx1ZTogJ0NoZXZyb2xldCd9LFxuICAgIHt2YWx1ZTogJ2RvZGdlJywgdmlld1ZhbHVlOiAnRG9kZ2UnfSxcbiAgXTtcbiAgc2VsZWN0ZWRGb29kID0gdGhpcy5mb29kc1syXS52YWx1ZTtcbiAgc2VsZWN0ZWRDYXIgPSB0aGlzLmNhcnNbMF0udmFsdWU7XG5cbiAgc2VsZWN0Q2FyKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuc2VsZWN0ZWRDYXIgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcbiAgfVxufVxuIiwiPGg0PkJhc2ljIG1hdC1zZWxlY3Qgd2l0aCBpbml0aWFsIHZhbHVlPC9oND5cbjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5GYXZvcml0ZSBGb29kPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0IFsodmFsdWUpXT1cInNlbGVjdGVkRm9vZFwiPlxuICAgIDxtYXQtb3B0aW9uPjwvbWF0LW9wdGlvbj5cbiAgICBAZm9yIChvcHRpb24gb2YgZm9vZHM7IHRyYWNrIG9wdGlvbikge1xuICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIm9wdGlvbi52YWx1ZVwiPnt7IG9wdGlvbi52aWV3VmFsdWUgfX08L21hdC1vcHRpb24+XG4gICAgfVxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuPHA+WW91IHNlbGVjdGVkOiB7e3NlbGVjdGVkRm9vZH19PC9wPlxuXG48aDQ+QmFzaWMgbmF0aXZlIHNlbGVjdCB3aXRoIGluaXRpYWwgdmFsdWU8L2g0PlxuPG1hdC1mb3JtLWZpZWxkPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIENhcjwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgKGNoYW5nZSk9XCJzZWxlY3RDYXIoJGV2ZW50KVwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cbiAgICBAZm9yIChvcHRpb24gb2YgY2FyczsgdHJhY2sgb3B0aW9uKSB7XG4gICAgICA8b3B0aW9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkQ2FyID09PSBvcHRpb24udmFsdWVcIj57eyBvcHRpb24udmlld1ZhbHVlIH19PC9vcHRpb24+XG4gICAgfVxuICA8L3NlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG48cD5Zb3Ugc2VsZWN0ZWQ6IHt7c2VsZWN0ZWRDYXJ9fTwvcD5cbiJdfQ==