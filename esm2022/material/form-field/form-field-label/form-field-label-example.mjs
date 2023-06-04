import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/material/form-field";
import * as i5 from "@angular/material/input";
import * as i6 from "@angular/material/select";
import * as i7 from "@angular/material/core";
import * as i8 from "@angular/material/icon";
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: FormFieldLabelExample, deps: [{ token: i1.FormBuilder }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: FormFieldLabelExample, isStandalone: true, selector: "form-field-label-example", ngImport: i0, template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <input matInput placeholder=\"Simple placeholder\" required>\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"getFloatLabelValue()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\">\n      </mat-form-field>\n\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: i1.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["disableRipple", "tabIndex"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i4.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i4.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i5.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i6.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "panelWidth", "hideSingleSelectionIndicator"], exportAs: ["matSelect"] }, { kind: "component", type: i7.MatOption, selector: "mat-option", exportAs: ["matOption"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: FormFieldLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-label-example', standalone: true, imports: [
                        FormsModule,
                        ReactiveFormsModule,
                        MatCheckboxModule,
                        MatRadioModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatSelectModule,
                        MatIconModule,
                    ], template: "<div class=\"example-container\">\n  <form [formGroup]=\"options\">\n    <mat-checkbox [formControl]=\"hideRequiredControl\">Hide required marker</mat-checkbox>\n    <div>\n      <label>Float label: </label>\n      <mat-radio-group [formControl]=\"floatLabelControl\">\n        <mat-radio-button value=\"auto\">Auto</mat-radio-button>\n        <mat-radio-button value=\"always\">Always</mat-radio-button>\n      </mat-radio-group>\n    </div>\n\n    <div class=\"example-form-fields\">\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <input matInput placeholder=\"Simple placeholder\" required>\n      </mat-form-field>\n\n      <mat-form-field [floatLabel]=\"getFloatLabelValue()\">\n        <mat-label>Both a label and a placeholder</mat-label>\n        <input matInput placeholder=\"Simple placeholder\">\n      </mat-form-field>\n\n      <mat-form-field\n          [hideRequiredMarker]=\"hideRequiredControl.value\"\n          [floatLabel]=\"getFloatLabelValue()\">\n        <mat-select required>\n          <mat-option>-- None --</mat-option>\n          <mat-option value=\"option\">Option</mat-option>\n        </mat-select>\n        <mat-label><mat-icon>favorite</mat-icon> <strong> Fancy</strong> <em> label</em></mat-label>\n      </mat-form-field>\n    </div>\n  </form>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-container mat-form-field {\n  width: 220px;\n}\n\n.example-container form {\n  margin-bottom: 20px;\n}\n\n.example-container form > * {\n  margin: 12px 0;\n}\n\n.example-container .mat-radio-button {\n  margin: 0 12px;\n}\n\n.example-form-fields {\n  display: flex;\n  align-items: flex-start;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.FormBuilder }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZm9ybS1maWVsZC9mb3JtLWZpZWxkLWxhYmVsL2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1sYWJlbC9mb3JtLWZpZWxkLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzFGLE9BQU8sRUFBaUIsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRixPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7QUFFN0QsbUNBQW1DO0FBaUJuQyxNQUFNLE9BQU8scUJBQXFCO0lBUWhDLFlBQW9CLFlBQXlCO1FBQXpCLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBUDdDLHdCQUFtQixHQUFHLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLHNCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE1BQXdCLENBQUMsQ0FBQztRQUM5RCxZQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDaEMsWUFBWSxFQUFFLElBQUksQ0FBQyxtQkFBbUI7WUFDdEMsVUFBVSxFQUFFLElBQUksQ0FBQyxpQkFBaUI7U0FDbkMsQ0FBQyxDQUFDO0lBRTZDLENBQUM7SUFFakQsa0JBQWtCO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssSUFBSSxNQUFNLENBQUM7SUFDaEQsQ0FBQztxSEFaVSxxQkFBcUI7eUdBQXJCLHFCQUFxQixvRkMxQmxDLDQyQ0FtQ0EsNGJEbkJJLFdBQVcsMllBQ1gsbUJBQW1CLGtXQUNuQixpQkFBaUIsZ0xBQ2pCLGNBQWMsMFJBQ2Qsa0JBQWtCLDBTQUNsQixjQUFjLDBXQUNkLGVBQWUsdVRBQ2YsYUFBYTs7a0dBR0oscUJBQXFCO2tCQWhCakMsU0FBUzsrQkFDRSwwQkFBMEIsY0FHeEIsSUFBSSxXQUNQO3dCQUNQLFdBQVc7d0JBQ1gsbUJBQW1CO3dCQUNuQixpQkFBaUI7d0JBQ2pCLGNBQWM7d0JBQ2Qsa0JBQWtCO3dCQUNsQixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsYUFBYTtxQkFDZCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtGbG9hdExhYmVsVHlwZSwgTWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0UmFkaW9Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggbGFiZWwgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Zvcm0tZmllbGQtbGFiZWwtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnZm9ybS1maWVsZC1sYWJlbC1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgICBNYXRDaGVja2JveE1vZHVsZSxcbiAgICBNYXRSYWRpb01vZHVsZSxcbiAgICBNYXRGb3JtRmllbGRNb2R1bGUsXG4gICAgTWF0SW5wdXRNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdEljb25Nb2R1bGUsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1GaWVsZExhYmVsRXhhbXBsZSB7XG4gIGhpZGVSZXF1aXJlZENvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woZmFsc2UpO1xuICBmbG9hdExhYmVsQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnYXV0bycgYXMgRmxvYXRMYWJlbFR5cGUpO1xuICBvcHRpb25zID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIGhpZGVSZXF1aXJlZDogdGhpcy5oaWRlUmVxdWlyZWRDb250cm9sLFxuICAgIGZsb2F0TGFiZWw6IHRoaXMuZmxvYXRMYWJlbENvbnRyb2wsXG4gIH0pO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2Zvcm1CdWlsZGVyOiBGb3JtQnVpbGRlcikge31cblxuICBnZXRGbG9hdExhYmVsVmFsdWUoKTogRmxvYXRMYWJlbFR5cGUge1xuICAgIHJldHVybiB0aGlzLmZsb2F0TGFiZWxDb250cm9sLnZhbHVlIHx8ICdhdXRvJztcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxmb3JtIFtmb3JtR3JvdXBdPVwib3B0aW9uc1wiPlxuICAgIDxtYXQtY2hlY2tib3ggW2Zvcm1Db250cm9sXT1cImhpZGVSZXF1aXJlZENvbnRyb2xcIj5IaWRlIHJlcXVpcmVkIG1hcmtlcjwvbWF0LWNoZWNrYm94PlxuICAgIDxkaXY+XG4gICAgICA8bGFiZWw+RmxvYXQgbGFiZWw6IDwvbGFiZWw+XG4gICAgICA8bWF0LXJhZGlvLWdyb3VwIFtmb3JtQ29udHJvbF09XCJmbG9hdExhYmVsQ29udHJvbFwiPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImF1dG9cIj5BdXRvPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cImFsd2F5c1wiPkFsd2F5czwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9ybS1maWVsZHNcIj5cbiAgICAgIDxtYXQtZm9ybS1maWVsZFxuICAgICAgICAgIFtoaWRlUmVxdWlyZWRNYXJrZXJdPVwiaGlkZVJlcXVpcmVkQ29udHJvbC52YWx1ZVwiXG4gICAgICAgICAgW2Zsb2F0TGFiZWxdPVwiZ2V0RmxvYXRMYWJlbFZhbHVlKClcIj5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCIgcmVxdWlyZWQ+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICA8bWF0LWZvcm0tZmllbGQgW2Zsb2F0TGFiZWxdPVwiZ2V0RmxvYXRMYWJlbFZhbHVlKClcIj5cbiAgICAgICAgPG1hdC1sYWJlbD5Cb3RoIGEgbGFiZWwgYW5kIGEgcGxhY2Vob2xkZXI8L21hdC1sYWJlbD5cbiAgICAgICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiU2ltcGxlIHBsYWNlaG9sZGVyXCI+XG4gICAgICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gICAgICA8bWF0LWZvcm0tZmllbGRcbiAgICAgICAgICBbaGlkZVJlcXVpcmVkTWFya2VyXT1cImhpZGVSZXF1aXJlZENvbnRyb2wudmFsdWVcIlxuICAgICAgICAgIFtmbG9hdExhYmVsXT1cImdldEZsb2F0TGFiZWxWYWx1ZSgpXCI+XG4gICAgICAgIDxtYXQtc2VsZWN0IHJlcXVpcmVkPlxuICAgICAgICAgIDxtYXQtb3B0aW9uPi0tIE5vbmUgLS08L21hdC1vcHRpb24+XG4gICAgICAgICAgPG1hdC1vcHRpb24gdmFsdWU9XCJvcHRpb25cIj5PcHRpb248L21hdC1vcHRpb24+XG4gICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgPG1hdC1sYWJlbD48bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPiA8c3Ryb25nPiBGYW5jeTwvc3Ryb25nPiA8ZW0+IGxhYmVsPC9lbT48L21hdC1sYWJlbD5cbiAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbjwvZGl2PlxuIl19