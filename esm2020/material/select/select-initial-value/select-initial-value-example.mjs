import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/common";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/forms";
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
}
SelectInitialValueExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: SelectInitialValueExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
SelectInitialValueExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: SelectInitialValueExample, selector: "select-initial-value-example", ngImport: i0, template: "<h4>Basic mat-select with initial value</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Favorite Food</mat-label>\n  <mat-select [(value)]=\"selectedFood\">\n    <mat-option></mat-option>\n    <mat-option [value]=\"option.value\" *ngFor=\"let option of foods\">{{ option.viewValue }}</mat-option>\n  </mat-select>\n</mat-form-field>\n<p>You selected: {{selectedFood}}</p>\n\n<h4>Basic native select with initial value</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Favorite Car</mat-label>\n  <select matNativeControl (change)=\"selectCar($event)\">\n    <option value=\"\"></option>\n    <option *ngFor=\"let option of cars\" [value]=\"option.value\"\n            [selected]=\"selectedCar === option.value\">{{ option.viewValue }}</option>\n  </select>\n</mat-form-field>\n<p>You selected: {{selectedCar}}</p>\n", components: [{ type: i1.MatFormField, selector: "mat-form-field", inputs: ["color", "appearance", "hideRequiredMarker", "hintLabel", "floatLabel"], exportAs: ["matFormField"] }, { type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { type: i3.MatOption, selector: "mat-option", exportAs: ["matOption"] }], directives: [{ type: i1.MatLabel, selector: "mat-label" }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { type: i6.NgSelectOption, selector: "option", inputs: ["ngValue", "value"] }, { type: i6.ɵNgSelectMultipleOption, selector: "option", inputs: ["ngValue", "value"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: SelectInitialValueExample, decorators: [{
            type: Component,
            args: [{ selector: 'select-initial-value-example', template: "<h4>Basic mat-select with initial value</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Favorite Food</mat-label>\n  <mat-select [(value)]=\"selectedFood\">\n    <mat-option></mat-option>\n    <mat-option [value]=\"option.value\" *ngFor=\"let option of foods\">{{ option.viewValue }}</mat-option>\n  </mat-select>\n</mat-form-field>\n<p>You selected: {{selectedFood}}</p>\n\n<h4>Basic native select with initial value</h4>\n<mat-form-field appearance=\"fill\">\n  <mat-label>Favorite Car</mat-label>\n  <select matNativeControl (change)=\"selectCar($event)\">\n    <option value=\"\"></option>\n    <option *ngFor=\"let option of cars\" [value]=\"option.value\"\n            [selected]=\"selectedCar === option.value\">{{ option.viewValue }}</option>\n  </select>\n</mat-form-field>\n<p>You selected: {{selectedCar}}</p>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWluaXRpYWwtdmFsdWUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtaW5pdGlhbC12YWx1ZS9zZWxlY3QtaW5pdGlhbC12YWx1ZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1pbml0aWFsLXZhbHVlL3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7OztBQVl4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyx5QkFBeUI7SUFKdEM7UUFLRSxVQUFLLEdBQVc7WUFDZCxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUN0QyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztZQUN0QyxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBQztTQUN2QyxDQUFDO1FBQ0YsU0FBSSxHQUFVO1lBQ1osRUFBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7WUFDbEMsRUFBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUM7WUFDNUMsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUM7U0FDckMsQ0FBQztRQUNGLGlCQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDbkMsZ0JBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztLQUtsQztJQUhDLFNBQVMsQ0FBQyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEdBQUksS0FBSyxDQUFDLE1BQTRCLENBQUMsS0FBSyxDQUFDO0lBQy9ELENBQUM7OzhIQWhCVSx5QkFBeUI7a0hBQXpCLHlCQUF5QixvRUNuQnRDLGkwQkFvQkE7bUdERGEseUJBQXlCO2tCQUpyQyxTQUFTOytCQUNFLDhCQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW50ZXJmYWNlIEZvb2Qge1xuICB2YWx1ZTogc3RyaW5nO1xuICB2aWV3VmFsdWU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIENhciB7XG4gIHZhbHVlOiBzdHJpbmc7XG4gIHZpZXdWYWx1ZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBzZWxlY3Qgd2l0aCBpbml0aWFsIHZhbHVlIGFuZCBubyBmb3JtXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NlbGVjdC1pbml0aWFsLXZhbHVlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEluaXRpYWxWYWx1ZUV4YW1wbGUge1xuICBmb29kczogRm9vZFtdID0gW1xuICAgIHt2YWx1ZTogJ3N0ZWFrLTAnLCB2aWV3VmFsdWU6ICdTdGVhayd9LFxuICAgIHt2YWx1ZTogJ3BpenphLTEnLCB2aWV3VmFsdWU6ICdQaXp6YSd9LFxuICAgIHt2YWx1ZTogJ3RhY29zLTInLCB2aWV3VmFsdWU6ICdUYWNvcyd9LFxuICBdO1xuICBjYXJzOiBDYXJbXSA9IFtcbiAgICB7dmFsdWU6ICdmb3JkJywgdmlld1ZhbHVlOiAnRm9yZCd9LFxuICAgIHt2YWx1ZTogJ2NoZXZyb2xldCcsIHZpZXdWYWx1ZTogJ0NoZXZyb2xldCd9LFxuICAgIHt2YWx1ZTogJ2RvZGdlJywgdmlld1ZhbHVlOiAnRG9kZ2UnfSxcbiAgXTtcbiAgc2VsZWN0ZWRGb29kID0gdGhpcy5mb29kc1syXS52YWx1ZTtcbiAgc2VsZWN0ZWRDYXIgPSB0aGlzLmNhcnNbMF0udmFsdWU7XG5cbiAgc2VsZWN0Q2FyKGV2ZW50OiBFdmVudCkge1xuICAgIHRoaXMuc2VsZWN0ZWRDYXIgPSAoZXZlbnQudGFyZ2V0IGFzIEhUTUxTZWxlY3RFbGVtZW50KS52YWx1ZTtcbiAgfVxufVxuIiwiPGg0PkJhc2ljIG1hdC1zZWxlY3Qgd2l0aCBpbml0aWFsIHZhbHVlPC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIEZvb2Q8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgWyh2YWx1ZSldPVwic2VsZWN0ZWRGb29kXCI+XG4gICAgPG1hdC1vcHRpb24+PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZvb2RzXCI+e3sgb3B0aW9uLnZpZXdWYWx1ZSB9fTwvbWF0LW9wdGlvbj5cbiAgPC9tYXQtc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxwPllvdSBzZWxlY3RlZDoge3tzZWxlY3RlZEZvb2R9fTwvcD5cblxuPGg0PkJhc2ljIG5hdGl2ZSBzZWxlY3Qgd2l0aCBpbml0aWFsIHZhbHVlPC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkZhdm9yaXRlIENhcjwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgKGNoYW5nZSk9XCJzZWxlY3RDYXIoJGV2ZW50KVwiPlxuICAgIDxvcHRpb24gdmFsdWU9XCJcIj48L29wdGlvbj5cbiAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHRpb24gb2YgY2Fyc1wiIFt2YWx1ZV09XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgW3NlbGVjdGVkXT1cInNlbGVjdGVkQ2FyID09PSBvcHRpb24udmFsdWVcIj57eyBvcHRpb24udmlld1ZhbHVlIH19PC9vcHRpb24+XG4gIDwvc2VsZWN0PlxuPC9tYXQtZm9ybS1maWVsZD5cbjxwPllvdSBzZWxlY3RlZDoge3tzZWxlY3RlZENhcn19PC9wPlxuIl19