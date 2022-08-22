import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/material/form-field";
import * as i4 from "@angular/material/icon";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/radio";
import * as i7 from "@angular/material/select";
import * as i8 from "@angular/material/core";
/** @title Form field with label */
export class FormFieldLabelExample {
    constructor(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.hideRequiredControl = new FormControl(false);
        this.floatLabelControl = new FormControl('auto');
        this.options = this._formBuilder.group({
            hideRequired: this.hideRequiredControl,
            floatLabel: this.floatLabelControl,
        });
    }
    getFloatLabelValue() {
        return this.floatLabelControl.value || 'auto';
    }
}
FormFieldLabelExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: FormFieldLabelExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component });
FormFieldLabelExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0-rc.0", type: FormFieldLabelExample, selector: "form-field-label-example", ngImport: i0, template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field appearance=\"fill\"\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <input matInput placeholder=\"Simple placeholder\" required>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"fill\" [floatLabel]=\"getFloatLabelValue()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\">\n      </mat-form-field>\n\n      <mat-form-field appearance=\"fill\"\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"], dependencies: [{ kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "component", type: i3.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i3.MatLabel, selector: "mat-label" }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i6.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i6.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "component", type: i7.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex"], exportAs: ["matSelect"] }, { kind: "component", type: i8.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0-rc.0", ngImport: i0, type: FormFieldLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-label-example', template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field appearance=\"fill\"\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <input matInput placeholder=\"Simple placeholder\" required>\n      </mat-form-field>\n\n      <mat-form-field appearance=\"fill\" [floatLabel]=\"getFloatLabelValue()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\">\n      </mat-form-field>\n\n      <mat-form-field appearance=\"fill\"\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <b> Fancy</b> <i> label</i></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7QUFHeEQsbUNBQW1DO0FBTW5DLE1BQU0sT0FBTyxxQkFBcUI7SUFRaEMsWUFBb0IsWUFBeUI7UUFBekIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFQN0Msd0JBQW1CLEdBQUcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0Msc0JBQWlCLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBd0IsQ0FBQyxDQUFDO1FBQzlELFlBQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNoQyxZQUFZLEVBQUUsSUFBSSxDQUFDLG1CQUFtQjtZQUN0QyxVQUFVLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtTQUNuQyxDQUFDLENBQUM7SUFFNkMsQ0FBQztJQUVqRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQztJQUNoRCxDQUFDOzt1SEFaVSxxQkFBcUI7MkdBQXJCLHFCQUFxQixnRUNWbEMsNDVDQW1DQTtnR0R6QmEscUJBQXFCO2tCQUxqQyxTQUFTOytCQUNFLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0Zsb2F0TGFiZWxUeXBlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggbGFiZWwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRMYWJlbEV4YW1wbGUge1xuICBoaWRlUmVxdWlyZWRDb250cm9sID0gbmV3IEZvcm1Db250cm9sKGZhbHNlKTtcbiAgZmxvYXRMYWJlbENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ2F1dG8nIGFzIEZsb2F0TGFiZWxUeXBlKTtcbiAgb3B0aW9ucyA9IHRoaXMuX2Zvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICBoaWRlUmVxdWlyZWQ6IHRoaXMuaGlkZVJlcXVpcmVkQ29udHJvbCxcbiAgICBmbG9hdExhYmVsOiB0aGlzLmZsb2F0TGFiZWxDb250cm9sLFxuICB9KTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9mb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIpIHt9XG5cbiAgZ2V0RmxvYXRMYWJlbFZhbHVlKCk6IEZsb2F0TGFiZWxUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5mbG9hdExhYmVsQ29udHJvbC52YWx1ZSB8fCAnYXV0byc7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICA8Zm9ybSBbZm9ybUdyb3VwXT1cIm9wdGlvbnNcIj5cbiAgICA8bWF0LWNoZWNrYm94IFtmb3JtQ29udHJvbF09XCJoaWRlUmVxdWlyZWRDb250cm9sXCI+SGlkZSByZXF1aXJlZCBtYXJrZXI8L21hdC1jaGVja2JveD5cbiAgICA8ZGl2PlxuICAgICAgPGxhYmVsPkZsb2F0IGxhYmVsOiA8L2xhYmVsPlxuICAgICAgPG1hdC1yYWRpby1ncm91cCBbZm9ybUNvbnRyb2xdPVwiZmxvYXRMYWJlbENvbnRyb2xcIj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJhdXRvXCI+QXV0bzwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJhbHdheXNcIj5BbHdheXM8L21hdC1yYWRpby1idXR0b24+XG4gICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWZvcm0tZmllbGRzXCI+XG4gICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIlxuICAgICAgICAgIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwiaGlkZVJlcXVpcmVkQ29udHJvbC52YWx1ZVwiXG4gICAgICAgICAgW2Zsb2F0TGFiZWxdPVwiZ2V0RmxvYXRMYWJlbFZhbHVlKClcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCIgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICA8bWF0LWZvcm0tZmllbGQgYXBwZWFyYW5jZT1cImZpbGxcIiBbZmxvYXRMYWJlbF09XCJnZXRGbG9hdExhYmVsVmFsdWUoKVwiPlxuICAgICAgICA8bWF0LWxhYmVsPkJvdGggYSBsYWJlbCBhbmQgYSBwbGFjZWhvbGRlcjwvbWF0LWxhYmVsPlxuICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJTaW1wbGUgcGxhY2Vob2xkZXJcIj5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgIDxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiXG4gICAgICAgICAgW2hpZGVSZXF1aXJlZE1hcmtlcl09XCJoaWRlUmVxdWlyZWRDb250cm9sLnZhbHVlXCJcbiAgICAgICAgICBbZmxvYXRMYWJlbF09XCJnZXRGbG9hdExhYmVsVmFsdWUoKVwiPlxuICAgICAgICA8bWF0LXNlbGVjdCByZXF1aXJlZD5cbiAgICAgICAgICA8bWF0LW9wdGlvbj4tLSBOb25lIC0tPC9tYXQtb3B0aW9uPlxuICAgICAgICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwib3B0aW9uXCI+T3B0aW9uPC9tYXQtb3B0aW9uPlxuICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgIDxtYXQtbGFiZWw+PG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj4gPGI+IEZhbmN5PC9iPiA8aT4gbGFiZWw8L2k+PC9tYXQtbGFiZWw+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgIDwvZGl2PlxuICA8L2Zvcm0+XG48L2Rpdj5cbiJdfQ==