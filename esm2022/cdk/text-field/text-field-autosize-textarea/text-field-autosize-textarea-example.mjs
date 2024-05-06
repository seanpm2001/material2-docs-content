import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { afterNextRender, Component, inject, Injector, ViewChild } from '@angular/core';
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
    constructor() {
        this._injector = inject(Injector);
    }
    triggerResize() {
        // Wait for content to render, then trigger textarea resize.
        afterNextRender(() => {
            this.autosize.resizeToFitContent(true);
        }, {
            injector: this._injector,
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.0", ngImport: i0, type: TextFieldAutosizeTextareaExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-rc.0", type: TextFieldAutosizeTextareaExample, isStandalone: true, selector: "text-field-autosize-textarea-example", viewQueries: [{ propertyName: "autosize", first: true, predicate: ["autosize"], descendants: true }], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatSelectModule }, { kind: "component", type: i2.MatSelect, selector: "mat-select", inputs: ["aria-describedby", "panelClass", "disabled", "disableRipple", "tabIndex", "hideSingleSelectionIndicator", "placeholder", "required", "multiple", "disableOptionCentering", "compareWith", "value", "aria-label", "aria-labelledby", "errorStateMatcher", "typeaheadDebounceInterval", "sortComparator", "id", "panelWidth"], outputs: ["openedChange", "opened", "closed", "selectionChange", "valueChange"], exportAs: ["matSelect"] }, { kind: "component", type: i3.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i4.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "directive", type: i5.CdkTextareaAutosize, selector: "textarea[cdkTextareaAutosize]", inputs: ["cdkAutosizeMinRows", "cdkAutosizeMaxRows", "cdkTextareaAutosize", "placeholder"], exportAs: ["cdkTextareaAutosize"] }, { kind: "ngmodule", type: TextFieldModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.0", ngImport: i0, type: TextFieldAutosizeTextareaExample, decorators: [{
            type: Component,
            args: [{ selector: 'text-field-autosize-textarea-example', standalone: true, imports: [MatFormFieldModule, MatSelectModule, MatInputModule, TextFieldModule], template: "<mat-form-field>\n  <mat-label>Font size</mat-label>\n  <mat-select #fontSize value=\"16px\" (selectionChange)=\"triggerResize()\">\n    <mat-option value=\"10px\">10px</mat-option>\n    <mat-option value=\"12px\">12px</mat-option>\n    <mat-option value=\"14px\">14px</mat-option>\n    <mat-option value=\"16px\">16px</mat-option>\n    <mat-option value=\"18px\">18px</mat-option>\n    <mat-option value=\"20px\">20px</mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field [style.fontSize]=\"fontSize.value\">\n  <mat-label>Autosize textarea</mat-label>\n  <textarea matInput\n            cdkTextareaAutosize\n            #autosize=\"cdkTextareaAutosize\"\n            cdkAutosizeMinRows=\"1\"\n            cdkAutosizeMaxRows=\"5\"></textarea>\n</mat-form-field>\n", styles: ["mat-form-field {\n  margin-right: 12px;\n}\n"] }]
        }], propDecorators: { autosize: [{
                type: ViewChild,
                args: ['autosize']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RleHQtZmllbGQvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxtQkFBbUIsRUFBRSxlQUFlLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM3RSxPQUFPLEVBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN0RixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7O0FBRWhFLG9DQUFvQztBQVFwQyxNQUFNLE9BQU8sZ0NBQWdDO0lBUDdDO1FBUVUsY0FBUyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQWV0QztJQVhDLGFBQWE7UUFDWCw0REFBNEQ7UUFDNUQsZUFBZSxDQUNiLEdBQUcsRUFBRTtZQUNILElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUNEO1lBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQ3pCLENBQ0YsQ0FBQztJQUNKLENBQUM7bUhBZlUsZ0NBQWdDO3VHQUFoQyxnQ0FBZ0Msc01DZDdDLDR3QkFvQkEscUdEUlksa0JBQWtCLDBTQUFFLGVBQWUsbXJCQUFFLGNBQWMseWtCQUFFLGVBQWU7O2dHQUVuRSxnQ0FBZ0M7a0JBUDVDLFNBQVM7K0JBQ0Usc0NBQXNDLGNBR3BDLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsZUFBZSxDQUFDOzhCQUt4RCxRQUFRO3NCQUE5QixTQUFTO3VCQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Nka1RleHRhcmVhQXV0b3NpemUsIFRleHRGaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RleHQtZmllbGQnO1xuaW1wb3J0IHthZnRlck5leHRSZW5kZXIsIENvbXBvbmVudCwgaW5qZWN0LCBJbmplY3RvciwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0SW5wdXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcbmltcG9ydCB7TWF0U2VsZWN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKiogQHRpdGxlIEF1dG8tcmVzaXppbmcgdGV4dGFyZWEgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0U2VsZWN0TW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgVGV4dEZpZWxkTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGV4dEZpZWxkQXV0b3NpemVUZXh0YXJlYUV4YW1wbGUge1xuICBwcml2YXRlIF9pbmplY3RvciA9IGluamVjdChJbmplY3Rvcik7XG5cbiAgQFZpZXdDaGlsZCgnYXV0b3NpemUnKSBhdXRvc2l6ZTogQ2RrVGV4dGFyZWFBdXRvc2l6ZTtcblxuICB0cmlnZ2VyUmVzaXplKCkge1xuICAgIC8vIFdhaXQgZm9yIGNvbnRlbnQgdG8gcmVuZGVyLCB0aGVuIHRyaWdnZXIgdGV4dGFyZWEgcmVzaXplLlxuICAgIGFmdGVyTmV4dFJlbmRlcihcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5hdXRvc2l6ZS5yZXNpemVUb0ZpdENvbnRlbnQodHJ1ZSk7XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmplY3RvcjogdGhpcy5faW5qZWN0b3IsXG4gICAgICB9LFxuICAgICk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5Gb250IHNpemU8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgI2ZvbnRTaXplIHZhbHVlPVwiMTZweFwiIChzZWxlY3Rpb25DaGFuZ2UpPVwidHJpZ2dlclJlc2l6ZSgpXCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxMHB4XCI+MTBweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjEycHhcIj4xMnB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTRweFwiPjE0cHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxNnB4XCI+MTZweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjE4cHhcIj4xOHB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMjBweFwiPjIwcHg8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBbc3R5bGUuZm9udFNpemVdPVwiZm9udFNpemUudmFsdWVcIj5cbiAgPG1hdC1sYWJlbD5BdXRvc2l6ZSB0ZXh0YXJlYTwvbWF0LWxhYmVsPlxuICA8dGV4dGFyZWEgbWF0SW5wdXRcbiAgICAgICAgICAgIGNka1RleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICNhdXRvc2l6ZT1cImNka1RleHRhcmVhQXV0b3NpemVcIlxuICAgICAgICAgICAgY2RrQXV0b3NpemVNaW5Sb3dzPVwiMVwiXG4gICAgICAgICAgICBjZGtBdXRvc2l6ZU1heFJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=