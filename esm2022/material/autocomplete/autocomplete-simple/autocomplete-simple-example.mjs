import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/material/autocomplete";
import * as i5 from "@angular/material/core";
/**
 * @title Simple autocomplete
 */
export class AutocompleteSimpleExample {
    constructor() {
        this.myControl = new FormControl('');
        this.options = ['One', 'Two', 'Three'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: AutocompleteSimpleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.0-next.2", type: AutocompleteSimpleExample, isStandalone: true, selector: "autocomplete-simple-example", ngImport: i0, template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Number</mat-label>\n<!-- #docregion input -->\n    <input type=\"text\"\n           placeholder=\"Pick one\"\n           aria-label=\"Number\"\n           matInput\n           [formControl]=\"myControl\"\n           [matAutocomplete]=\"auto\">\n<!-- #enddocregion input -->\n<!-- #docregion mat-autocomplete -->\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      @for (option of options; track option) {\n        <mat-option [value]=\"option\">{{option}}</mat-option>\n      }\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i1.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i2.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i2.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i3.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatAutocompleteModule }, { kind: "component", type: i4.MatAutocomplete, selector: "mat-autocomplete", inputs: ["aria-label", "aria-labelledby", "displayWith", "autoActiveFirstOption", "autoSelectActiveOption", "requireSelection", "panelWidth", "disableRipple", "class", "hideSingleSelectionIndicator"], outputs: ["optionSelected", "opened", "closed", "optionActivated"], exportAs: ["matAutocomplete"] }, { kind: "component", type: i5.MatOption, selector: "mat-option", inputs: ["value", "id", "disabled"], outputs: ["onSelectionChange"], exportAs: ["matOption"] }, { kind: "directive", type: i4.MatAutocompleteTrigger, selector: "input[matAutocomplete], textarea[matAutocomplete]", inputs: ["matAutocomplete", "matAutocompletePosition", "matAutocompleteConnectedTo", "autocomplete", "matAutocompleteDisabled"], exportAs: ["matAutocompleteTrigger"] }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: AutocompleteSimpleExample, decorators: [{
            type: Component,
            args: [{ selector: 'autocomplete-simple-example', standalone: true, imports: [
                        FormsModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatAutocompleteModule,
                        ReactiveFormsModule,
                    ], template: "<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n    <mat-label>Number</mat-label>\n<!-- #docregion input -->\n    <input type=\"text\"\n           placeholder=\"Pick one\"\n           aria-label=\"Number\"\n           matInput\n           [formControl]=\"myControl\"\n           [matAutocomplete]=\"auto\">\n<!-- #enddocregion input -->\n<!-- #docregion mat-autocomplete -->\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      @for (option of options; track option) {\n        <mat-option [value]=\"option\">{{option}}</mat-option>\n      }\n    </mat-autocomplete>\n<!-- #enddocregion mat-autocomplete -->\n  </mat-form-field>\n</form>\n", styles: [".example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlL2F1dG9jb21wbGV0ZS1zaW1wbGUvYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQUVoRTs7R0FFRztBQWNILE1BQU0sT0FBTyx5QkFBeUI7SUFidEM7UUFjRSxjQUFTLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEMsWUFBTyxHQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztLQUM3QztxSEFIWSx5QkFBeUI7eUdBQXpCLHlCQUF5Qix1RkN0QnRDLHFxQkFvQkEsbUxETEksV0FBVywrMEJBQ1gsa0JBQWtCLDBTQUNsQixjQUFjLDBXQUNkLHFCQUFxQix3MUJBQ3JCLG1CQUFtQjs7a0dBR1YseUJBQXlCO2tCQWJyQyxTQUFTOytCQUNFLDZCQUE2QixjQUczQixJQUFJLFdBQ1A7d0JBQ1AsV0FBVzt3QkFDWCxrQkFBa0I7d0JBQ2xCLGNBQWM7d0JBQ2QscUJBQXFCO3dCQUNyQixtQkFBbUI7cUJBQ3BCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0QXV0b2NvbXBsZXRlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9hdXRvY29tcGxldGUnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKipcbiAqIEB0aXRsZSBTaW1wbGUgYXV0b2NvbXBsZXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2F1dG9jb21wbGV0ZS1zaW1wbGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYXV0b2NvbXBsZXRlLXNpbXBsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ2F1dG9jb21wbGV0ZS1zaW1wbGUtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEF1dG9jb21wbGV0ZU1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRvY29tcGxldGVTaW1wbGVFeGFtcGxlIHtcbiAgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcbiAgb3B0aW9uczogc3RyaW5nW10gPSBbJ09uZScsICdUd28nLCAnVGhyZWUnXTtcbn1cbiIsIjxmb3JtIGNsYXNzPVwiZXhhbXBsZS1mb3JtXCI+XG4gIDxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtZnVsbC13aWR0aFwiPlxuICAgIDxtYXQtbGFiZWw+TnVtYmVyPC9tYXQtbGFiZWw+XG48IS0tICNkb2NyZWdpb24gaW5wdXQgLS0+XG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQaWNrIG9uZVwiXG4gICAgICAgICAgIGFyaWEtbGFiZWw9XCJOdW1iZXJcIlxuICAgICAgICAgICBtYXRJbnB1dFxuICAgICAgICAgICBbZm9ybUNvbnRyb2xdPVwibXlDb250cm9sXCJcbiAgICAgICAgICAgW21hdEF1dG9jb21wbGV0ZV09XCJhdXRvXCI+XG48IS0tICNlbmRkb2NyZWdpb24gaW5wdXQgLS0+XG48IS0tICNkb2NyZWdpb24gbWF0LWF1dG9jb21wbGV0ZSAtLT5cbiAgICA8bWF0LWF1dG9jb21wbGV0ZSAjYXV0bz1cIm1hdEF1dG9jb21wbGV0ZVwiPlxuICAgICAgQGZvciAob3B0aW9uIG9mIG9wdGlvbnM7IHRyYWNrIG9wdGlvbikge1xuICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwib3B0aW9uXCI+e3tvcHRpb259fTwvbWF0LW9wdGlvbj5cbiAgICAgIH1cbiAgICA8L21hdC1hdXRvY29tcGxldGU+XG48IS0tICNlbmRkb2NyZWdpb24gbWF0LWF1dG9jb21wbGV0ZSAtLT5cbiAgPC9tYXQtZm9ybS1maWVsZD5cbjwvZm9ybT5cbiJdfQ==