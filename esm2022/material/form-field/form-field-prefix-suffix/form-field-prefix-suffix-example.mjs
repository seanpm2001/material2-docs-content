import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/button";
import * as i4 from "@angular/material/icon";
/** @title Form field with prefix & suffix */
export class FormFieldPrefixSuffixExample {
    constructor() {
        this.hide = signal(true);
    }
    clickEvent(event) {
        this.hide.set(!this.hide());
        event.stopPropagation();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: FormFieldPrefixSuffixExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.3", type: FormFieldPrefixSuffixExample, isStandalone: true, selector: "form-field-prefix-suffix-example", ngImport: i0, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n    <input matInput [type]=\"hide() ? 'password' : 'text'\" />\n    <button\n      mat-icon-button\n      matSuffix\n      (click)=\"clickEvent($event)\"\n      [attr.aria-label]=\"'Hide password'\"\n      [attr.aria-pressed]=\"hide()\"\n    >\n      <mat-icon>{{hide() ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field floatLabel=\"always\">\n    <mat-label>Amount</mat-label>\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\" />\n    <span matTextPrefix>$&nbsp;</span>\n    <span matTextSuffix>.00</span>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "directive", type: i1.MatPrefix, selector: "[matPrefix], [matIconPrefix], [matTextPrefix]", inputs: ["matTextPrefix"] }, { kind: "directive", type: i1.MatSuffix, selector: "[matSuffix], [matIconSuffix], [matTextSuffix]", inputs: ["matTextSuffix"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i3.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i4.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: FormFieldPrefixSuffixExample, decorators: [{
            type: Component,
            args: [{ selector: 'form-field-prefix-suffix-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<div class=\"example-container\">\n  <mat-form-field>\n    <mat-label>Enter your password</mat-label>\n    <input matInput [type]=\"hide() ? 'password' : 'text'\" />\n    <button\n      mat-icon-button\n      matSuffix\n      (click)=\"clickEvent($event)\"\n      [attr.aria-label]=\"'Hide password'\"\n      [attr.aria-pressed]=\"hide()\"\n    >\n      <mat-icon>{{hide() ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button>\n  </mat-form-field>\n\n  <mat-form-field floatLabel=\"always\">\n    <mat-label>Amount</mat-label>\n    <input matInput type=\"number\" class=\"example-right-align\" placeholder=\"0\" />\n    <span matTextPrefix>$&nbsp;</span>\n    <span matTextSuffix>.00</span>\n  </mat-form-field>\n</div>\n", styles: [".example-container mat-form-field + mat-form-field {\n  margin-left: 8px;\n}\n\n.example-right-align {\n  text-align: right;\n}\n\ninput.example-right-align::-webkit-outer-spin-button,\ninput.example-right-align::-webkit-inner-spin-button {\n  display: none;\n}\n\ninput.example-right-align {\n  -moz-appearance: textfield;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9mb3JtLWZpZWxkL2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC9mb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2Zvcm0tZmllbGQvZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4L2Zvcm0tZmllbGQtcHJlZml4LXN1ZmZpeC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUV2RCw2Q0FBNkM7QUFTN0MsTUFBTSxPQUFPLDRCQUE0QjtJQVJ6QztRQVNFLFNBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7S0FLckI7SUFKQyxVQUFVLENBQUMsS0FBaUI7UUFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQztxSEFMVSw0QkFBNEI7eUdBQTVCLDRCQUE0Qiw0RkNmekMsMnRCQXNCQSxpWURWWSxrQkFBa0IsNGlCQUFFLGNBQWMsMFdBQUUsZUFBZSwySUFBRSxhQUFhOztrR0FHakUsNEJBQTRCO2tCQVJ4QyxTQUFTOytCQUNFLGtDQUFrQyxjQUdoQyxJQUFJLFdBQ1AsQ0FBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxtQkFDNUQsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcblxuLyoqIEB0aXRsZSBGb3JtIGZpZWxkIHdpdGggcHJlZml4ICYgc3VmZml4ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdmb3JtLWZpZWxkLXByZWZpeC1zdWZmaXgtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnZm9ybS1maWVsZC1wcmVmaXgtc3VmZml4LWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb3JtRmllbGRQcmVmaXhTdWZmaXhFeGFtcGxlIHtcbiAgaGlkZSA9IHNpZ25hbCh0cnVlKTtcbiAgY2xpY2tFdmVudChldmVudDogTW91c2VFdmVudCkge1xuICAgIHRoaXMuaGlkZS5zZXQoIXRoaXMuaGlkZSgpKTtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPkVudGVyIHlvdXIgcGFzc3dvcmQ8L21hdC1sYWJlbD5cbiAgICA8aW5wdXQgbWF0SW5wdXQgW3R5cGVdPVwiaGlkZSgpID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0J1wiIC8+XG4gICAgPGJ1dHRvblxuICAgICAgbWF0LWljb24tYnV0dG9uXG4gICAgICBtYXRTdWZmaXhcbiAgICAgIChjbGljayk9XCJjbGlja0V2ZW50KCRldmVudClcIlxuICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInSGlkZSBwYXNzd29yZCdcIlxuICAgICAgW2F0dHIuYXJpYS1wcmVzc2VkXT1cImhpZGUoKVwiXG4gICAgPlxuICAgICAgPG1hdC1pY29uPnt7aGlkZSgpID8gJ3Zpc2liaWxpdHlfb2ZmJyA6ICd2aXNpYmlsaXR5J319PC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQgZmxvYXRMYWJlbD1cImFsd2F5c1wiPlxuICAgIDxtYXQtbGFiZWw+QW1vdW50PC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzcz1cImV4YW1wbGUtcmlnaHQtYWxpZ25cIiBwbGFjZWhvbGRlcj1cIjBcIiAvPlxuICAgIDxzcGFuIG1hdFRleHRQcmVmaXg+JCZuYnNwOzwvc3Bhbj5cbiAgICA8c3BhbiBtYXRUZXh0U3VmZml4Pi4wMDwvc3Bhbj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZGl2PlxuIl19