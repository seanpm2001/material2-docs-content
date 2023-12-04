import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/forms";
/** @title Sidenav with configurable mode */
export class SidenavModeExample {
    constructor() {
        this.mode = new FormControl('over');
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-next.2", ngImport: i0, type: SidenavModeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0-next.2", type: SidenavModeExample, isStandalone: true, selector: "sidenav-mode-example", ngImport: i0, template: "@if (shouldRun) {\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav [mode]=\"mode.value || 'over'\">\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n      <p>\n        <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n          <label>Mode:</label>\n          <mat-radio-button value=\"over\">Over</mat-radio-button>\n          <mat-radio-button value=\"side\">Side</mat-radio-button>\n          <mat-radio-button value=\"push\">Push</mat-radio-button>\n        </mat-radio-group>\n      </p>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n      <p>\n        <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n          <label>Mode:</label>\n          <mat-radio-button value=\"over\">Over</mat-radio-button>\n          <mat-radio-button value=\"side\">Side</mat-radio-button>\n          <mat-radio-button value=\"push\">Push</mat-radio-button>\n        </mat-radio-group>\n      </p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n} @else {\n  <div>Please open on Stackblitz to see result</div>\n}\n\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i1.MatSidenavContent, selector: "mat-sidenav-content" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-next.2", ngImport: i0, type: SidenavModeExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-mode-example', standalone: true, imports: [MatSidenavModule, MatButtonModule, MatRadioModule, FormsModule, ReactiveFormsModule], template: "@if (shouldRun) {\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav [mode]=\"mode.value || 'over'\">\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n      <p>\n        <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n          <label>Mode:</label>\n          <mat-radio-button value=\"over\">Over</mat-radio-button>\n          <mat-radio-button value=\"side\">Side</mat-radio-button>\n          <mat-radio-button value=\"push\">Push</mat-radio-button>\n        </mat-radio-group>\n      </p>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n      <p>\n        <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n          <label>Mode:</label>\n          <mat-radio-button value=\"over\">Over</mat-radio-button>\n          <mat-radio-button value=\"side\">Side</mat-radio-button>\n          <mat-radio-button value=\"push\">Push</mat-radio-button>\n        </mat-radio-group>\n      </p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n} @else {\n  <div>Please open on Stackblitz to see result</div>\n}\n\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1tb2RlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtbW9kZS9zaWRlbmF2LW1vZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1tb2RlL3NpZGVuYXYtbW9kZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBZ0IsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMxRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7QUFFekQsNENBQTRDO0FBUTVDLE1BQU0sT0FBTyxrQkFBa0I7SUFQL0I7UUFRRSxTQUFJLEdBQUcsSUFBSSxXQUFXLENBQUMsTUFBdUIsQ0FBQyxDQUFDO1FBQ2hELGNBQVMsR0FBRywwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuRjtxSEFIWSxrQkFBa0I7eUdBQWxCLGtCQUFrQixnRkNkL0IsaXJDQThCQSx5UURsQlksZ0JBQWdCLDBZQUFFLGVBQWUsMk5BQUUsY0FBYyxzaUJBQUUsV0FBVyxzSUFBRSxtQkFBbUI7O2tHQUVsRixrQkFBa0I7a0JBUDlCLFNBQVM7K0JBQ0Usc0JBQXNCLGNBR3BCLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0RHJhd2VyTW9kZSwgTWF0U2lkZW5hdk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuLyoqIEB0aXRsZSBTaWRlbmF2IHdpdGggY29uZmlndXJhYmxlIG1vZGUgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtbW9kZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LW1vZGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NpZGVuYXYtbW9kZS1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0U2lkZW5hdk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRSYWRpb01vZHVsZSwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2TW9kZUV4YW1wbGUge1xuICBtb2RlID0gbmV3IEZvcm1Db250cm9sKCdvdmVyJyBhcyBNYXREcmF3ZXJNb2RlKTtcbiAgc2hvdWxkUnVuID0gLyhefC4pKHN0YWNrYmxpdHp8d2ViY29udGFpbmVyKS4oaW98Y29tKSQvLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpO1xufVxuIiwiQGlmIChzaG91bGRSdW4pIHtcbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IFttb2RlXT1cIm1vZGUudmFsdWUgfHwgJ292ZXInXCI+XG4gICAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNpZGVuYXYudG9nZ2xlKClcIj5Ub2dnbGU8L2J1dHRvbj48L3A+XG4gICAgICA8cD5cbiAgICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbZm9ybUNvbnRyb2xdPVwibW9kZVwiPlxuICAgICAgICAgIDxsYWJlbD5Nb2RlOjwvbGFiZWw+XG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJvdmVyXCI+T3ZlcjwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInNpZGVcIj5TaWRlPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwicHVzaFwiPlB1c2g8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxuICAgICAgPC9wPlxuICAgIDwvbWF0LXNpZGVuYXY+XG5cbiAgICA8bWF0LXNpZGVuYXYtY29udGVudD5cbiAgICAgIDxwPjxidXR0b24gbWF0LWJ1dHRvbiAoY2xpY2spPVwic2lkZW5hdi50b2dnbGUoKVwiPlRvZ2dsZTwvYnV0dG9uPjwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1ncm91cFwiIFtmb3JtQ29udHJvbF09XCJtb2RlXCI+XG4gICAgICAgICAgPGxhYmVsPk1vZGU6PC9sYWJlbD5cbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cIm92ZXJcIj5PdmVyPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwic2lkZVwiPlNpZGU8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJwdXNoXCI+UHVzaDwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgICA8L3A+XG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbn0gQGVsc2Uge1xuICA8ZGl2PlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxufVxuXG4iXX0=