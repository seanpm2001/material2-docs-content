import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/forms";
/**
 * @title Button-toggles with forms
 */
class ButtonToggleFormsExample {
    constructor() {
        this.fontStyleControl = new FormControl('');
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ButtonToggleFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: ButtonToggleFormsExample, isStandalone: true, selector: "button-toggle-forms-example", ngImport: i0, template: "<section>\n  <h4>Button Toggle inside of a Template-driven form</h4>\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyle}}</p>\n</section>\n\n<section>\n  <h4>Button Toggle inside of a Reactive form</h4>\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyleControl.value}}</p>\n</section>\n\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i2.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
export { ButtonToggleFormsExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: ButtonToggleFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-forms-example', standalone: true, imports: [MatButtonToggleModule, FormsModule, ReactiveFormsModule], template: "<section>\n  <h4>Button Toggle inside of a Template-driven form</h4>\n  <mat-button-toggle-group [(ngModel)]=\"fontStyle\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyle}}</p>\n</section>\n\n<section>\n  <h4>Button Toggle inside of a Reactive form</h4>\n  <mat-button-toggle-group [formControl]=\"fontStyleControl\" aria-label=\"Font Style\">\n    <mat-button-toggle value=\"bold\">Bold</mat-button-toggle>\n    <mat-button-toggle value=\"italic\">Italic</mat-button-toggle>\n    <mat-button-toggle value=\"underline\">Underline</mat-button-toggle>\n  </mat-button-toggle-group>\n  <p>Chosen value is {{fontStyleControl.value}}</p>\n</section>\n\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uLXRvZ2dsZS9idXR0b24tdG9nZ2xlLWZvcm1zL2J1dHRvbi10b2dnbGUtZm9ybXMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1mb3Jtcy9idXR0b24tdG9nZ2xlLWZvcm1zLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFFdEU7O0dBRUc7QUFDSCxNQU1hLHdCQUF3QjtJQU5yQztRQU9FLHFCQUFnQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBRXhDOzhHQUhZLHdCQUF3QjtrR0FBeEIsd0JBQXdCLHVGQ2JyQyxtNEJBb0JBLDJDRFRZLHFCQUFxQixzaEJBQUUsV0FBVyw4VkFBRSxtQkFBbUI7O1NBRXRELHdCQUF3QjsyRkFBeEIsd0JBQXdCO2tCQU5wQyxTQUFTOytCQUNFLDZCQUE2QixjQUUzQixJQUFJLFdBQ1AsQ0FBQyxxQkFBcUIsRUFBRSxXQUFXLEVBQUUsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRCdXR0b25Ub2dnbGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbi10b2dnbGUnO1xuXG4vKipcbiAqIEB0aXRsZSBCdXR0b24tdG9nZ2xlcyB3aXRoIGZvcm1zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi10b2dnbGUtZm9ybXMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS1mb3Jtcy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uVG9nZ2xlTW9kdWxlLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZUZvcm1zRXhhbXBsZSB7XG4gIGZvbnRTdHlsZUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xuICBmb250U3R5bGU/OiBzdHJpbmc7XG59XG4iLCI8c2VjdGlvbj5cbiAgPGg0PkJ1dHRvbiBUb2dnbGUgaW5zaWRlIG9mIGEgVGVtcGxhdGUtZHJpdmVuIGZvcm08L2g0PlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgWyhuZ01vZGVsKV09XCJmb250U3R5bGVcIiBhcmlhLWxhYmVsPVwiRm9udCBTdHlsZVwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cImJvbGRcIj5Cb2xkPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJpdGFsaWNcIj5JdGFsaWM8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInVuZGVybGluZVwiPlVuZGVybGluZTwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG4gIDxwPkNob3NlbiB2YWx1ZSBpcyB7e2ZvbnRTdHlsZX19PC9wPlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbj5cbiAgPGg0PkJ1dHRvbiBUb2dnbGUgaW5zaWRlIG9mIGEgUmVhY3RpdmUgZm9ybTwvaDQ+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCBbZm9ybUNvbnRyb2xdPVwiZm9udFN0eWxlQ29udHJvbFwiIGFyaWEtbGFiZWw9XCJGb250IFN0eWxlXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiYm9sZFwiPkJvbGQ8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIml0YWxpY1wiPkl0YWxpYzwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwidW5kZXJsaW5lXCI+VW5kZXJsaW5lPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiAgPHA+Q2hvc2VuIHZhbHVlIGlzIHt7Zm9udFN0eWxlQ29udHJvbC52YWx1ZX19PC9wPlxuPC9zZWN0aW9uPlxuXG4iXX0=