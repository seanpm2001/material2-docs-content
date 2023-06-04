import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/material/icon";
/**
 * @title Using tabs with a custom label template
 */
export class TabGroupCustomLabelExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: TabGroupCustomLabelExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: TabGroupCustomLabelExample, isStandalone: true, selector: "tab-group-custom-label-example", ngImport: i0, template: "<mat-tab-group>\n  <mat-tab>\n<!-- #docregion label-directive -->\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n<!-- #enddocregion label-directive -->\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "directive", type: i1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: TabGroupCustomLabelExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-custom-label-example', standalone: true, imports: [MatTabsModule, MatIconModule], template: "<mat-tab-group>\n  <mat-tab>\n<!-- #docregion label-directive -->\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      First\n    </ng-template>\n<!-- #enddocregion label-directive -->\n    Content 1\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Second\n    </ng-template>\n    Content 2\n  </mat-tab>\n\n  <mat-tab>\n    <ng-template mat-tab-label>\n      <mat-icon class=\"example-tab-icon\">thumb_up</mat-icon>\n      Third\n    </ng-template>\n\n    Content 3\n  </mat-tab>\n</mat-tab-group>\n", styles: [".example-tab-icon {\n  margin-right: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWN1c3RvbS1sYWJlbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFicy90YWItZ3JvdXAtY3VzdG9tLWxhYmVsL3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWN1c3RvbS1sYWJlbC90YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFckQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sMEJBQTBCO3FIQUExQiwwQkFBMEI7eUdBQTFCLDBCQUEwQiwwRkNkdkMsNm5CQTRCQSx1R0RoQlksYUFBYSxpWkFBRSxhQUFhOztrR0FFM0IsMEJBQTBCO2tCQVB0QyxTQUFTOytCQUNFLGdDQUFnQyxjQUc5QixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5cbi8qKlxuICogQHRpdGxlIFVzaW5nIHRhYnMgd2l0aCBhIGN1c3RvbSBsYWJlbCB0ZW1wbGF0ZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtY3VzdG9tLWxhYmVsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1ncm91cC1jdXN0b20tbGFiZWwtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFRhYnNNb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cEN1c3RvbUxhYmVsRXhhbXBsZSB7fVxuIiwiPG1hdC10YWItZ3JvdXA+XG4gIDxtYXQtdGFiPlxuPCEtLSAjZG9jcmVnaW9uIGxhYmVsLWRpcmVjdGl2ZSAtLT5cbiAgICA8bmctdGVtcGxhdGUgbWF0LXRhYi1sYWJlbD5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtdGFiLWljb25cIj50aHVtYl91cDwvbWF0LWljb24+XG4gICAgICBGaXJzdFxuICAgIDwvbmctdGVtcGxhdGU+XG48IS0tICNlbmRkb2NyZWdpb24gbGFiZWwtZGlyZWN0aXZlIC0tPlxuICAgIENvbnRlbnQgMVxuICA8L21hdC10YWI+XG5cbiAgPG1hdC10YWI+XG4gICAgPG5nLXRlbXBsYXRlIG1hdC10YWItbGFiZWw+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJleGFtcGxlLXRhYi1pY29uXCI+dGh1bWJfdXA8L21hdC1pY29uPlxuICAgICAgU2Vjb25kXG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgICBDb250ZW50IDJcbiAgPC9tYXQtdGFiPlxuXG4gIDxtYXQtdGFiPlxuICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS10YWItaWNvblwiPnRodW1iX3VwPC9tYXQtaWNvbj5cbiAgICAgIFRoaXJkXG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIENvbnRlbnQgM1xuICA8L21hdC10YWI+XG48L21hdC10YWItZ3JvdXA+XG4iXX0=