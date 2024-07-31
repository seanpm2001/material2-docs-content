import { Component } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { JsonPipe } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/slide-toggle";
import * as i5 from "@angular/material/paginator";
/**
 * @title Configurable paginator
 */
export class PaginatorConfigurableExample {
    constructor() {
        this.length = 50;
        this.pageSize = 10;
        this.pageIndex = 0;
        this.pageSizeOptions = [5, 10, 25];
        this.hidePageSize = false;
        this.showPageSizeOptions = true;
        this.showFirstLastButtons = true;
        this.disabled = false;
    }
    handlePageEvent(e) {
        this.pageEvent = e;
        this.length = e.length;
        this.pageSize = e.pageSize;
        this.pageIndex = e.pageIndex;
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: PaginatorConfigurableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: PaginatorConfigurableExample, isStandalone: true, selector: "paginator-configurable-example", ngImport: i0, template: "<div class=\"demo-options\">\n  <mat-form-field>\n    <mat-label>Length</mat-label>\n    <input matInput placeholder=\"Length\" type=\"number\" [(ngModel)]=\"length\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size</mat-label>\n    <input matInput placeholder=\"Page Size\" type=\"number\" [(ngModel)]=\"pageSize\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Index</mat-label>\n    <input matInput placeholder=\"Page Index\" type=\"number\" [(ngModel)]=\"pageIndex\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size Options</mat-label>\n    <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n           [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n  </mat-form-field>\n\n  <div class=\"demo-toggles\">\n    <mat-slide-toggle [(ngModel)]=\"hidePageSize\">Hide page size</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showPageSizeOptions\">Show multiple page size options</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showFirstLastButtons\">Show first/last buttons</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"disabled\">Disabled</mat-slide-toggle>\n  </div>\n</div>\n\n<mat-paginator #paginator\n               class=\"demo-paginator\"\n               (page)=\"handlePageEvent($event)\"\n               [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [disabled]=\"disabled\"\n               [showFirstLastButtons]=\"showFirstLastButtons\"\n               [pageSizeOptions]=\"showPageSizeOptions ? pageSizeOptions : []\"\n               [hidePageSize]=\"hidePageSize\"\n               [pageIndex]=\"pageIndex\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div class=\"demo-data\">\n  <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>\n  <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>\n</div>\n", styles: [".demo-toggles {\n  display: flex;\n  flex-direction: column;\n}\n\n.demo-toggles * {\n  margin-bottom: 16px;\n}\n\n.demo-options {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n}\n\n.demo-data * {\n  margin: 16px 0;\n}\n\n.demo-paginator {\n  width: 600px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NumberValueAccessor, selector: "input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatSlideToggleModule }, { kind: "component", type: i4.MatSlideToggle, selector: "mat-slide-toggle", inputs: ["name", "id", "labelPosition", "aria-label", "aria-labelledby", "aria-describedby", "required", "color", "disabled", "disableRipple", "tabIndex", "checked", "hideIcon"], outputs: ["change", "toggleChange"], exportAs: ["matSlideToggle"] }, { kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i5.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: PaginatorConfigurableExample, decorators: [{
            type: Component,
            args: [{ selector: 'paginator-configurable-example', standalone: true, imports: [
                        MatFormFieldModule,
                        MatInputModule,
                        FormsModule,
                        MatSlideToggleModule,
                        MatPaginatorModule,
                        JsonPipe,
                    ], template: "<div class=\"demo-options\">\n  <mat-form-field>\n    <mat-label>Length</mat-label>\n    <input matInput placeholder=\"Length\" type=\"number\" [(ngModel)]=\"length\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size</mat-label>\n    <input matInput placeholder=\"Page Size\" type=\"number\" [(ngModel)]=\"pageSize\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Index</mat-label>\n    <input matInput placeholder=\"Page Index\" type=\"number\" [(ngModel)]=\"pageIndex\">\n  </mat-form-field>\n\n  <mat-form-field>\n    <mat-label>Page Size Options</mat-label>\n    <input matInput [ngModel]=\"pageSizeOptions\" (ngModelChange)=\"setPageSizeOptions($event)\"\n           [ngModelOptions]=\"{updateOn: 'blur'}\" placeholder=\"Ex. 10,25,50\">\n  </mat-form-field>\n\n  <div class=\"demo-toggles\">\n    <mat-slide-toggle [(ngModel)]=\"hidePageSize\">Hide page size</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showPageSizeOptions\">Show multiple page size options</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"showFirstLastButtons\">Show first/last buttons</mat-slide-toggle>\n    <mat-slide-toggle [(ngModel)]=\"disabled\">Disabled</mat-slide-toggle>\n  </div>\n</div>\n\n<mat-paginator #paginator\n               class=\"demo-paginator\"\n               (page)=\"handlePageEvent($event)\"\n               [length]=\"length\"\n               [pageSize]=\"pageSize\"\n               [disabled]=\"disabled\"\n               [showFirstLastButtons]=\"showFirstLastButtons\"\n               [pageSizeOptions]=\"showPageSizeOptions ? pageSizeOptions : []\"\n               [hidePageSize]=\"hidePageSize\"\n               [pageIndex]=\"pageIndex\"\n               aria-label=\"Select page\">\n</mat-paginator>\n\n<div class=\"demo-data\">\n  <div> Output event: {{(pageEvent | json) || 'No events dispatched yet'}} </div>\n  <div> getNumberOfPages: {{paginator.getNumberOfPages()}} </div>\n</div>\n", styles: [".demo-toggles {\n  display: flex;\n  flex-direction: column;\n}\n\n.demo-toggles * {\n  margin-bottom: 16px;\n}\n\n.demo-options {\n  display: flex;\n  flex-direction: column;\n  width: 600px;\n}\n\n.demo-data * {\n  margin: 16px 0;\n}\n\n.demo-paginator {\n  width: 600px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvcGFnaW5hdG9yL3BhZ2luYXRvci1jb25maWd1cmFibGUvcGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQVksa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQzs7Ozs7OztBQUVoRTs7R0FFRztBQWVILE1BQU0sT0FBTyw0QkFBNEI7SUFkekM7UUFlRSxXQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ1osYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNkLGNBQVMsR0FBRyxDQUFDLENBQUM7UUFDZCxvQkFBZSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU5QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQix3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDM0IseUJBQW9CLEdBQUcsSUFBSSxDQUFDO1FBQzVCLGFBQVEsR0FBRyxLQUFLLENBQUM7S0FnQmxCO0lBWkMsZUFBZSxDQUFDLENBQVk7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDL0IsQ0FBQztJQUVELGtCQUFrQixDQUFDLHVCQUErQjtRQUNoRCxJQUFJLHVCQUF1QixFQUFFLENBQUM7WUFDNUIsSUFBSSxDQUFDLGVBQWUsR0FBRyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3RSxDQUFDO0lBQ0gsQ0FBQztxSEF4QlUsNEJBQTRCO3lHQUE1Qiw0QkFBNEIsMEZDekJ6QyxnNkRBK0NBLCtVRDlCSSxrQkFBa0IsMFNBQ2xCLGNBQWMsMFdBQ2QsV0FBVyxneEJBQ1gsb0JBQW9CLGtXQUNwQixrQkFBa0IsK1JBQ2xCLFFBQVE7O2tHQUdDLDRCQUE0QjtrQkFkeEMsU0FBUzsrQkFDRSxnQ0FBZ0MsY0FHOUIsSUFBSSxXQUNQO3dCQUNQLGtCQUFrQjt3QkFDbEIsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLG9CQUFvQjt3QkFDcEIsa0JBQWtCO3dCQUNsQixRQUFRO3FCQUNUIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQYWdlRXZlbnQsIE1hdFBhZ2luYXRvck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcbmltcG9ydCB7SnNvblBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge01hdFNsaWRlVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbGlkZS10b2dnbGUnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG4vKipcbiAqIEB0aXRsZSBDb25maWd1cmFibGUgcGFnaW5hdG9yXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAncGFnaW5hdG9yLWNvbmZpZ3VyYWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ3BhZ2luYXRvci1jb25maWd1cmFibGUtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIE1hdFNsaWRlVG9nZ2xlTW9kdWxlLFxuICAgIE1hdFBhZ2luYXRvck1vZHVsZSxcbiAgICBKc29uUGlwZSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgUGFnaW5hdG9yQ29uZmlndXJhYmxlRXhhbXBsZSB7XG4gIGxlbmd0aCA9IDUwO1xuICBwYWdlU2l6ZSA9IDEwO1xuICBwYWdlSW5kZXggPSAwO1xuICBwYWdlU2l6ZU9wdGlvbnMgPSBbNSwgMTAsIDI1XTtcblxuICBoaWRlUGFnZVNpemUgPSBmYWxzZTtcbiAgc2hvd1BhZ2VTaXplT3B0aW9ucyA9IHRydWU7XG4gIHNob3dGaXJzdExhc3RCdXR0b25zID0gdHJ1ZTtcbiAgZGlzYWJsZWQgPSBmYWxzZTtcblxuICBwYWdlRXZlbnQ6IFBhZ2VFdmVudDtcblxuICBoYW5kbGVQYWdlRXZlbnQoZTogUGFnZUV2ZW50KSB7XG4gICAgdGhpcy5wYWdlRXZlbnQgPSBlO1xuICAgIHRoaXMubGVuZ3RoID0gZS5sZW5ndGg7XG4gICAgdGhpcy5wYWdlU2l6ZSA9IGUucGFnZVNpemU7XG4gICAgdGhpcy5wYWdlSW5kZXggPSBlLnBhZ2VJbmRleDtcbiAgfVxuXG4gIHNldFBhZ2VTaXplT3B0aW9ucyhzZXRQYWdlU2l6ZU9wdGlvbnNJbnB1dDogc3RyaW5nKSB7XG4gICAgaWYgKHNldFBhZ2VTaXplT3B0aW9uc0lucHV0KSB7XG4gICAgICB0aGlzLnBhZ2VTaXplT3B0aW9ucyA9IHNldFBhZ2VTaXplT3B0aW9uc0lucHV0LnNwbGl0KCcsJykubWFwKHN0ciA9PiArc3RyKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJkZW1vLW9wdGlvbnNcIj5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+TGVuZ3RoPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiTGVuZ3RoXCIgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwibGVuZ3RoXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPG1hdC1mb3JtLWZpZWxkPlxuICAgIDxtYXQtbGFiZWw+UGFnZSBTaXplPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUGFnZSBTaXplXCIgdHlwZT1cIm51bWJlclwiIFsobmdNb2RlbCldPVwicGFnZVNpemVcIj5cbiAgPC9tYXQtZm9ybS1maWVsZD5cblxuICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgPG1hdC1sYWJlbD5QYWdlIEluZGV4PC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IHBsYWNlaG9sZGVyPVwiUGFnZSBJbmRleFwiIHR5cGU9XCJudW1iZXJcIiBbKG5nTW9kZWwpXT1cInBhZ2VJbmRleFwiPlxuICA8L21hdC1mb3JtLWZpZWxkPlxuXG4gIDxtYXQtZm9ybS1maWVsZD5cbiAgICA8bWF0LWxhYmVsPlBhZ2UgU2l6ZSBPcHRpb25zPC9tYXQtbGFiZWw+XG4gICAgPGlucHV0IG1hdElucHV0IFtuZ01vZGVsXT1cInBhZ2VTaXplT3B0aW9uc1wiIChuZ01vZGVsQ2hhbmdlKT1cInNldFBhZ2VTaXplT3B0aW9ucygkZXZlbnQpXCJcbiAgICAgICAgICAgW25nTW9kZWxPcHRpb25zXT1cInt1cGRhdGVPbjogJ2JsdXInfVwiIHBsYWNlaG9sZGVyPVwiRXguIDEwLDI1LDUwXCI+XG4gIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgPGRpdiBjbGFzcz1cImRlbW8tdG9nZ2xlc1wiPlxuICAgIDxtYXQtc2xpZGUtdG9nZ2xlIFsobmdNb2RlbCldPVwiaGlkZVBhZ2VTaXplXCI+SGlkZSBwYWdlIHNpemU8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgPG1hdC1zbGlkZS10b2dnbGUgWyhuZ01vZGVsKV09XCJzaG93UGFnZVNpemVPcHRpb25zXCI+U2hvdyBtdWx0aXBsZSBwYWdlIHNpemUgb3B0aW9uczwvbWF0LXNsaWRlLXRvZ2dsZT5cbiAgICA8bWF0LXNsaWRlLXRvZ2dsZSBbKG5nTW9kZWwpXT1cInNob3dGaXJzdExhc3RCdXR0b25zXCI+U2hvdyBmaXJzdC9sYXN0IGJ1dHRvbnM8L21hdC1zbGlkZS10b2dnbGU+XG4gICAgPG1hdC1zbGlkZS10b2dnbGUgWyhuZ01vZGVsKV09XCJkaXNhYmxlZFwiPkRpc2FibGVkPC9tYXQtc2xpZGUtdG9nZ2xlPlxuICA8L2Rpdj5cbjwvZGl2PlxuXG48bWF0LXBhZ2luYXRvciAjcGFnaW5hdG9yXG4gICAgICAgICAgICAgICBjbGFzcz1cImRlbW8tcGFnaW5hdG9yXCJcbiAgICAgICAgICAgICAgIChwYWdlKT1cImhhbmRsZVBhZ2VFdmVudCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgIFtsZW5ndGhdPVwibGVuZ3RoXCJcbiAgICAgICAgICAgICAgIFtwYWdlU2l6ZV09XCJwYWdlU2l6ZVwiXG4gICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgICAgW3Nob3dGaXJzdExhc3RCdXR0b25zXT1cInNob3dGaXJzdExhc3RCdXR0b25zXCJcbiAgICAgICAgICAgICAgIFtwYWdlU2l6ZU9wdGlvbnNdPVwic2hvd1BhZ2VTaXplT3B0aW9ucyA/IHBhZ2VTaXplT3B0aW9ucyA6IFtdXCJcbiAgICAgICAgICAgICAgIFtoaWRlUGFnZVNpemVdPVwiaGlkZVBhZ2VTaXplXCJcbiAgICAgICAgICAgICAgIFtwYWdlSW5kZXhdPVwicGFnZUluZGV4XCJcbiAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZVwiPlxuPC9tYXQtcGFnaW5hdG9yPlxuXG48ZGl2IGNsYXNzPVwiZGVtby1kYXRhXCI+XG4gIDxkaXY+IE91dHB1dCBldmVudDoge3socGFnZUV2ZW50IHwganNvbikgfHwgJ05vIGV2ZW50cyBkaXNwYXRjaGVkIHlldCd9fSA8L2Rpdj5cbiAgPGRpdj4gZ2V0TnVtYmVyT2ZQYWdlczoge3twYWdpbmF0b3IuZ2V0TnVtYmVyT2ZQYWdlcygpfX0gPC9kaXY+XG48L2Rpdj5cbiJdfQ==