import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/cdk/text-field";
/** @title Auto-resizing textarea */
export class TextFieldAutosizeTextareaExample {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
    }
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: TextFieldAutosizeTextareaExample, deps: [{ token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.0", type: TextFieldAutosizeTextareaExample, isStandalone: true, selector: "text-field-autosize-textarea-example", viewQueries: [{ propertyName: "autosize", first: true, predicate: ["autosize"], descendants: true }], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["disabled", "disableRipple", "tabIndex", "aria-describedby", "panelClass", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.CdkTextareaAutosize, selector: "textarea[cdkTextareaAutosize]", inputs: ["cdkAutosizeMinRows", "cdkAutosizeMaxRows", "cdkTextareaAutosize", "placeholder"], exportAs: ["cdkTextareaAutosize"] }, { kind: "ngmodule", type: TextFieldModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: TextFieldAutosizeTextareaExample, decorators: [{
            type: Component,
            args: [{ selector: 'text-field-autosize-textarea-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, MatInputModule, TextFieldModule], template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i0.NgZone }], propDecorators: { autosize: [{
                type: ViewChild,
                args: ['autosize']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RleHQtZmllbGQvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxlQUFlLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RSxPQUFPLEVBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDM0QsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFFaEUsb0NBQW9DO0FBUXBDLE1BQU0sT0FBTyxnQ0FBZ0M7SUFDM0MsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDO0lBSXZDLGFBQWE7UUFDWCxnRUFBZ0U7UUFDaEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDOUYsQ0FBQzttSEFSVSxnQ0FBZ0M7dUdBQWhDLGdDQUFnQyxzTUNmN0MsNHdCQW9CQSxxR0RQWSxrQkFBa0IsMFNBQUUsZUFBZSxtckJBQUUsY0FBYyx5a0JBQUUsZUFBZTs7Z0dBRW5FLGdDQUFnQztrQkFQNUMsU0FBUzsrQkFDRSxzQ0FBc0MsY0FHcEMsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxlQUFlLENBQUM7MkVBS3hELFFBQVE7c0JBQTlCLFNBQVM7dUJBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2RrVGV4dGFyZWFBdXRvc2l6ZSwgVGV4dEZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0NvbXBvbmVudCwgTmdab25lLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge01hdElucHV0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQge01hdFNlbGVjdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7TWF0Rm9ybUZpZWxkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcblxuLyoqIEB0aXRsZSBBdXRvLXJlc2l6aW5nIHRleHRhcmVhICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIFRleHRGaWVsZE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRleHRGaWVsZEF1dG9zaXplVGV4dGFyZWFFeGFtcGxlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHt9XG5cbiAgQFZpZXdDaGlsZCgnYXV0b3NpemUnKSBhdXRvc2l6ZTogQ2RrVGV4dGFyZWFBdXRvc2l6ZTtcblxuICB0cmlnZ2VyUmVzaXplKCkge1xuICAgIC8vIFdhaXQgZm9yIGNoYW5nZXMgdG8gYmUgYXBwbGllZCwgdGhlbiB0cmlnZ2VyIHRleHRhcmVhIHJlc2l6ZS5cbiAgICB0aGlzLl9uZ1pvbmUub25TdGFibGUucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5hdXRvc2l6ZS5yZXNpemVUb0ZpdENvbnRlbnQodHJ1ZSkpO1xuICB9XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+Rm9udCBzaXplPC9tYXQtbGFiZWw+XG4gIDxtYXQtc2VsZWN0ICNmb250U2l6ZSB2YWx1ZT1cIjE2cHhcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cInRyaWdnZXJSZXNpemUoKVwiPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTBweFwiPjEwcHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxMnB4XCI+MTJweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjE0cHhcIj4xNHB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTZweFwiPjE2cHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxOHB4XCI+MThweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjIwcHhcIj4yMHB4PC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48bWF0LWZvcm0tZmllbGQgW3N0eWxlLmZvbnRTaXplXT1cImZvbnRTaXplLnZhbHVlXCI+XG4gIDxtYXQtbGFiZWw+QXV0b3NpemUgdGV4dGFyZWE8L21hdC1sYWJlbD5cbiAgPHRleHRhcmVhIG1hdElucHV0XG4gICAgICAgICAgICBjZGtUZXh0YXJlYUF1dG9zaXplXG4gICAgICAgICAgICAjYXV0b3NpemU9XCJjZGtUZXh0YXJlYUF1dG9zaXplXCJcbiAgICAgICAgICAgIGNka0F1dG9zaXplTWluUm93cz1cIjFcIlxuICAgICAgICAgICAgY2RrQXV0b3NpemVNYXhSb3dzPVwiNVwiPjwvdGV4dGFyZWE+XG48L21hdC1mb3JtLWZpZWxkPlxuIl19