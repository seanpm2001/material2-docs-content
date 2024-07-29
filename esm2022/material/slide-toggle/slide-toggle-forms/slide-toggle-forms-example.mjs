import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule, _MatSlideToggleRequiredValidatorModule, } from '@angular/material/slide-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/slide-toggle";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/material/button";
/**
 * @title Slide-toggle with forms
 */
export class SlideToggleFormsExample {
    constructor() {
        this._formBuilder = inject(FormBuilder);
        this.isChecked = true;
        this.formGroup = this._formBuilder.group({
            enableWifi: '',
            acceptTerms: ['', Validators.requiredTrue],
        });
    }
    alertFormValues(formGroup) {
        alert(JSON.stringify(formGroup.value, null, 2));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: SlideToggleFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: SlideToggleFormsExample, isStandalone: true, selector: "slide-toggle-forms-example", ngImport: i0, template: "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"alertFormValues(form.form)\">\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"alertFormValues(formGroup)\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{formGroup.status}}</p>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n", styles: [".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i1.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "color", "disabled", "disableRipple", "tabIndex", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: _MatSlideToggleRequiredValidatorModule }, { kind: "directive", type: i1.MatSlideToggleRequiredValidator, selector: "mat-slide-toggle[required][formControlName],             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.FormGroupDirective, selector: "[formGroup]", inputs: ["formGroup"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "directive", type: i2.FormControlName, selector: "[formControlName]", inputs: ["formControlName", "disabled", "ngModel"], outputs: ["ngModelChange"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: SlideToggleFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'slide-toggle-forms-example', standalone: true, imports: [
                        MatSlideToggleModule,
                        FormsModule,
                        _MatSlideToggleRequiredValidatorModule,
                        MatButtonModule,
                        ReactiveFormsModule,
                    ], template: "<p>Slide Toggle using a simple NgModel.</p>\n\n<mat-slide-toggle [(ngModel)]=\"isChecked\">Slide Toggle Checked: {{isChecked}}</mat-slide-toggle>\n\n<p>Slide Toggle inside of a Template-driven form</p>\n\n<form class=\"example-form\" #form=\"ngForm\" (ngSubmit)=\"alertFormValues(form.form)\">\n\n  <mat-slide-toggle ngModel name=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle ngModel name=\"acceptTerms\" required>Accept Terms of Service</mat-slide-toggle>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n\n<p>Slide Toggle inside of a Reactive form</p>\n\n<form class=\"example-form\" [formGroup]=\"formGroup\" (ngSubmit)=\"alertFormValues(formGroup)\" ngNativeValidate>\n\n  <mat-slide-toggle formControlName=\"enableWifi\">Enable Wifi</mat-slide-toggle>\n  <mat-slide-toggle formControlName=\"acceptTerms\">Accept Terms of Service</mat-slide-toggle>\n\n  <p>Form Group Status: {{formGroup.status}}</p>\n\n  <button mat-raised-button type=\"submit\">Save Settings</button>\n</form>\n", styles: [".example-form mat-slide-toggle {\n  margin: 8px 0;\n  display: block;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUtdG9nZ2xlLWZvcm1zLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zbGlkZS10b2dnbGUvc2xpZGUtdG9nZ2xlLWZvcm1zL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2xpZGUtdG9nZ2xlL3NsaWRlLXRvZ2dsZS1mb3Jtcy9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQWEsVUFBVSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BHLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLHNDQUFzQyxHQUN2QyxNQUFNLGdDQUFnQyxDQUFDOzs7OztBQUV4Qzs7R0FFRztBQWNILE1BQU0sT0FBTyx1QkFBdUI7SUFicEM7UUFjVSxpQkFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUzQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLGNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQztZQUNsQyxVQUFVLEVBQUUsRUFBRTtZQUNkLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxVQUFVLENBQUMsWUFBWSxDQUFDO1NBQzNDLENBQUMsQ0FBQztLQUtKO0lBSEMsZUFBZSxDQUFDLFNBQW9CO1FBQ2xDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs4R0FYVSx1QkFBdUI7a0dBQXZCLHVCQUF1QixzRkN4QnBDLCtnQ0F5QkEsbUlEUkksb0JBQW9CLGtXQUNwQixXQUFXLG8vQkFDWCxzQ0FBc0Msa1BBQ3RDLGVBQWUsMk5BQ2YsbUJBQW1COzsyRkFHVix1QkFBdUI7a0JBYm5DLFNBQVM7K0JBQ0UsNEJBQTRCLGNBRzFCLElBQUksV0FDUDt3QkFDUCxvQkFBb0I7d0JBQ3BCLFdBQVc7d0JBQ1gsc0NBQXNDO3dCQUN0QyxlQUFlO3dCQUNmLG1CQUFtQjtxQkFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgaW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycywgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtcbiAgTWF0U2xpZGVUb2dnbGVNb2R1bGUsXG4gIF9NYXRTbGlkZVRvZ2dsZVJlcXVpcmVkVmFsaWRhdG9yTW9kdWxlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuXG4vKipcbiAqIEB0aXRsZSBTbGlkZS10b2dnbGUgd2l0aCBmb3Jtc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zbGlkZS10b2dnbGUtZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3NsaWRlLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtcbiAgICBNYXRTbGlkZVRvZ2dsZU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBfTWF0U2xpZGVUb2dnbGVSZXF1aXJlZFZhbGlkYXRvck1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgUmVhY3RpdmVGb3Jtc01vZHVsZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVUb2dnbGVGb3Jtc0V4YW1wbGUge1xuICBwcml2YXRlIF9mb3JtQnVpbGRlciA9IGluamVjdChGb3JtQnVpbGRlcik7XG5cbiAgaXNDaGVja2VkID0gdHJ1ZTtcbiAgZm9ybUdyb3VwID0gdGhpcy5fZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgIGVuYWJsZVdpZmk6ICcnLFxuICAgIGFjY2VwdFRlcm1zOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRUcnVlXSxcbiAgfSk7XG5cbiAgYWxlcnRGb3JtVmFsdWVzKGZvcm1Hcm91cDogRm9ybUdyb3VwKSB7XG4gICAgYWxlcnQoSlNPTi5zdHJpbmdpZnkoZm9ybUdyb3VwLnZhbHVlLCBudWxsLCAyKSk7XG4gIH1cbn1cbiIsIjxwPlNsaWRlIFRvZ2dsZSB1c2luZyBhIHNpbXBsZSBOZ01vZGVsLjwvcD5cblxuPG1hdC1zbGlkZS10b2dnbGUgWyhuZ01vZGVsKV09XCJpc0NoZWNrZWRcIj5TbGlkZSBUb2dnbGUgQ2hlY2tlZDoge3tpc0NoZWNrZWR9fTwvbWF0LXNsaWRlLXRvZ2dsZT5cblxuPHA+U2xpZGUgVG9nZ2xlIGluc2lkZSBvZiBhIFRlbXBsYXRlLWRyaXZlbiBmb3JtPC9wPlxuXG48Zm9ybSBjbGFzcz1cImV4YW1wbGUtZm9ybVwiICNmb3JtPVwibmdGb3JtXCIgKG5nU3VibWl0KT1cImFsZXJ0Rm9ybVZhbHVlcyhmb3JtLmZvcm0pXCI+XG5cbiAgPG1hdC1zbGlkZS10b2dnbGUgbmdNb2RlbCBuYW1lPVwiZW5hYmxlV2lmaVwiPkVuYWJsZSBXaWZpPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICA8bWF0LXNsaWRlLXRvZ2dsZSBuZ01vZGVsIG5hbWU9XCJhY2NlcHRUZXJtc1wiIHJlcXVpcmVkPkFjY2VwdCBUZXJtcyBvZiBTZXJ2aWNlPC9tYXQtc2xpZGUtdG9nZ2xlPlxuXG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPlNhdmUgU2V0dGluZ3M8L2J1dHRvbj5cbjwvZm9ybT5cblxuPHA+U2xpZGUgVG9nZ2xlIGluc2lkZSBvZiBhIFJlYWN0aXZlIGZvcm08L3A+XG5cbjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtR3JvdXBcIiAobmdTdWJtaXQpPVwiYWxlcnRGb3JtVmFsdWVzKGZvcm1Hcm91cClcIiBuZ05hdGl2ZVZhbGlkYXRlPlxuXG4gIDxtYXQtc2xpZGUtdG9nZ2xlIGZvcm1Db250cm9sTmFtZT1cImVuYWJsZVdpZmlcIj5FbmFibGUgV2lmaTwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgPG1hdC1zbGlkZS10b2dnbGUgZm9ybUNvbnRyb2xOYW1lPVwiYWNjZXB0VGVybXNcIj5BY2NlcHQgVGVybXMgb2YgU2VydmljZTwvbWF0LXNsaWRlLXRvZ2dsZT5cblxuICA8cD5Gb3JtIEdyb3VwIFN0YXR1czoge3tmb3JtR3JvdXAuc3RhdHVzfX08L3A+XG5cbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U2F2ZSBTZXR0aW5nczwvYnV0dG9uPlxuPC9mb3JtPlxuIl19