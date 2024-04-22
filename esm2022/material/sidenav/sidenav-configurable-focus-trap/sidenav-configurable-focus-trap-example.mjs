import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { ConfigurableFocusTrapFactory, FocusTrapFactory } from '@angular/cdk/a11y';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/radio";
import * as i4 from "@angular/forms";
/** @title Sidenav using injected ConfigurableFocusTrap */
export class SidenavConfigurableFocusTrapExample {
    constructor() {
        this.mode = new FormControl('over');
        this.hasBackdrop = new FormControl(null);
        this.position = new FormControl('start');
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: SidenavConfigurableFocusTrapExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-next.5", type: SidenavConfigurableFocusTrapExample, isStandalone: true, selector: "sidenav-configurable-focus-trap-example", providers: [{ provide: FocusTrapFactory, useClass: ConfigurableFocusTrapFactory }], ngImport: i0, template: "@if (shouldRun) {\n  <mat-sidenav-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\">\n    <mat-sidenav #sidenav [mode]=\"mode.value!\" [position]=\"position.value!\">\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n      <p>\n        <label>Test input for drawer<input/></label>\n      </p>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n      <p>\n        <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n          <label>Mode:</label>\n          <mat-radio-button value=\"over\">Over</mat-radio-button>\n          <mat-radio-button value=\"side\">Side</mat-radio-button>\n          <mat-radio-button value=\"push\">Push</mat-radio-button>\n        </mat-radio-group>\n        <mat-radio-group class=\"example-radio-group\" [formControl]=\"hasBackdrop\">\n          <label>Has Backdrop:</label>\n          <mat-radio-button [value]=\"null\">Default</mat-radio-button>\n          <mat-radio-button [value]=\"true\">true</mat-radio-button>\n          <mat-radio-button [value]=\"false\">false</mat-radio-button>\n        </mat-radio-group>\n        <mat-radio-group class=\"example-radio-group\" [formControl]=\"position\">\n          <label>Position:</label>\n          <mat-radio-button value=\"start\">Start</mat-radio-button>\n          <mat-radio-button value=\"end\">End</mat-radio-button>\n        </mat-radio-group>\n      </p>\n      <p>\n        <label>Test input for drawer content<input/></label>\n      </p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n} @else {\n  <div>Please open on Stackblitz to see result</div>\n}\n\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i1.MatSidenavContent, selector: "mat-sidenav-content" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatRadioModule }, { kind: "directive", type: i3.MatRadioGroup, selector: "mat-radio-group", inputs: ["color", "name", "labelPosition", "value", "selected", "disabled", "required"], outputs: ["change"], exportAs: ["matRadioGroup"] }, { kind: "component", type: i3.MatRadioButton, selector: "mat-radio-button", inputs: ["id", "name", "aria-label", "aria-labelledby", "aria-describedby", "disableRipple", "tabIndex", "checked", "value", "labelPosition", "disabled", "required", "color"], outputs: ["change"], exportAs: ["matRadioButton"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i4.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i4.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: SidenavConfigurableFocusTrapExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-configurable-focus-trap-example', standalone: true, imports: [MatSidenavModule, MatButtonModule, MatRadioModule, FormsModule, ReactiveFormsModule], providers: [{ provide: FocusTrapFactory, useClass: ConfigurableFocusTrapFactory }], template: "@if (shouldRun) {\n  <mat-sidenav-container class=\"example-container\" [hasBackdrop]=\"hasBackdrop.value\">\n    <mat-sidenav #sidenav [mode]=\"mode.value!\" [position]=\"position.value!\">\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n      <p>\n        <label>Test input for drawer<input/></label>\n      </p>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p><button mat-button (click)=\"sidenav.toggle()\">Toggle</button></p>\n      <p>\n        <mat-radio-group class=\"example-radio-group\" [formControl]=\"mode\">\n          <label>Mode:</label>\n          <mat-radio-button value=\"over\">Over</mat-radio-button>\n          <mat-radio-button value=\"side\">Side</mat-radio-button>\n          <mat-radio-button value=\"push\">Push</mat-radio-button>\n        </mat-radio-group>\n        <mat-radio-group class=\"example-radio-group\" [formControl]=\"hasBackdrop\">\n          <label>Has Backdrop:</label>\n          <mat-radio-button [value]=\"null\">Default</mat-radio-button>\n          <mat-radio-button [value]=\"true\">true</mat-radio-button>\n          <mat-radio-button [value]=\"false\">false</mat-radio-button>\n        </mat-radio-group>\n        <mat-radio-group class=\"example-radio-group\" [formControl]=\"position\">\n          <label>Position:</label>\n          <mat-radio-button value=\"start\">Start</mat-radio-button>\n          <mat-radio-button value=\"end\">End</mat-radio-button>\n        </mat-radio-group>\n      </p>\n      <p>\n        <label>Test input for drawer content<input/></label>\n      </p>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n} @else {\n  <div>Please open on Stackblitz to see result</div>\n}\n\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-radio-group {\n  display: block;\n  border: 1px solid #555;\n  margin: 20px;\n  padding: 10px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1jb25maWd1cmFibGUtZm9jdXMtdHJhcC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWNvbmZpZ3VyYWJsZS1mb2N1cy10cmFwL3NpZGVuYXYtY29uZmlndXJhYmxlLWZvY3VzLXRyYXAtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1jb25maWd1cmFibGUtZm9jdXMtdHJhcC9zaWRlbmF2LWNvbmZpZ3VyYWJsZS1mb2N1cy10cmFwLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLG1CQUFtQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0UsT0FBTyxFQUFnQixnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzFFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLDRCQUE0QixFQUFFLGdCQUFnQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7Ozs7OztBQUVqRiwwREFBMEQ7QUFTMUQsTUFBTSxPQUFPLG1DQUFtQztJQVJoRDtRQVNFLFNBQUksR0FBRyxJQUFJLFdBQVcsQ0FBQyxNQUF1QixDQUFDLENBQUM7UUFDaEQsZ0JBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxJQUFzQixDQUFDLENBQUM7UUFDdEQsYUFBUSxHQUFHLElBQUksV0FBVyxDQUFDLE9BQTBCLENBQUMsQ0FBQztRQUV2RCxjQUFTLEdBQUcsMENBQTBDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkY7cUhBTlksbUNBQW1DO3lHQUFuQyxtQ0FBbUMsc0ZBRm5DLENBQUMsRUFBQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLDRCQUE0QixFQUFDLENBQUMsMEJDZGxGLDRxREF1Q0EseVFEMUJZLGdCQUFnQiwwWUFBRSxlQUFlLDJOQUFFLGNBQWMsc2lCQUFFLFdBQVcsc0lBQUUsbUJBQW1COztrR0FHbEYsbUNBQW1DO2tCQVIvQyxTQUFTOytCQUNFLHlDQUF5QyxjQUd2QyxJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsQ0FBQyxhQUNuRixDQUFDLEVBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSw0QkFBNEIsRUFBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7TWF0RHJhd2VyTW9kZSwgTWF0U2lkZW5hdk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5pbXBvcnQge01hdFJhZGlvTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9yYWRpbyc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7Q29uZmlndXJhYmxlRm9jdXNUcmFwRmFjdG9yeSwgRm9jdXNUcmFwRmFjdG9yeX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuXG4vKiogQHRpdGxlIFNpZGVuYXYgdXNpbmcgaW5qZWN0ZWQgQ29uZmlndXJhYmxlRm9jdXNUcmFwICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LWNvbmZpZ3VyYWJsZS1mb2N1cy10cmFwLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtY29uZmlndXJhYmxlLWZvY3VzLXRyYXAtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdzaWRlbmF2LWNvbmZpZ3VyYWJsZS1mb2N1cy10cmFwLWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFNpZGVuYXZNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0UmFkaW9Nb2R1bGUsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEZvY3VzVHJhcEZhY3RvcnksIHVzZUNsYXNzOiBDb25maWd1cmFibGVGb2N1c1RyYXBGYWN0b3J5fV0sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZDb25maWd1cmFibGVGb2N1c1RyYXBFeGFtcGxlIHtcbiAgbW9kZSA9IG5ldyBGb3JtQ29udHJvbCgnb3ZlcicgYXMgTWF0RHJhd2VyTW9kZSk7XG4gIGhhc0JhY2tkcm9wID0gbmV3IEZvcm1Db250cm9sKG51bGwgYXMgbnVsbCB8IGJvb2xlYW4pO1xuICBwb3NpdGlvbiA9IG5ldyBGb3JtQ29udHJvbCgnc3RhcnQnIGFzICdzdGFydCcgfCAnZW5kJyk7XG5cbiAgc2hvdWxkUnVuID0gLyhefC4pKHN0YWNrYmxpdHp8d2ViY29udGFpbmVyKS4oaW98Y29tKSQvLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpO1xufVxuIiwiQGlmIChzaG91bGRSdW4pIHtcbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCIgW2hhc0JhY2tkcm9wXT1cImhhc0JhY2tkcm9wLnZhbHVlXCI+XG4gICAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IFttb2RlXT1cIm1vZGUudmFsdWUhXCIgW3Bvc2l0aW9uXT1cInBvc2l0aW9uLnZhbHVlIVwiPlxuICAgICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+VG9nZ2xlPC9idXR0b24+PC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxsYWJlbD5UZXN0IGlucHV0IGZvciBkcmF3ZXI8aW5wdXQvPjwvbGFiZWw+XG4gICAgICA8L3A+XG4gICAgPC9tYXQtc2lkZW5hdj5cblxuICAgIDxtYXQtc2lkZW5hdi1jb250ZW50PlxuICAgICAgPHA+PGJ1dHRvbiBtYXQtYnV0dG9uIChjbGljayk9XCJzaWRlbmF2LnRvZ2dsZSgpXCI+VG9nZ2xlPC9idXR0b24+PC9wPlxuICAgICAgPHA+XG4gICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCIgW2Zvcm1Db250cm9sXT1cIm1vZGVcIj5cbiAgICAgICAgICA8bGFiZWw+TW9kZTo8L2xhYmVsPlxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwib3ZlclwiPk92ZXI8L21hdC1yYWRpby1idXR0b24+XG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJzaWRlXCI+U2lkZTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiB2YWx1ZT1cInB1c2hcIj5QdXNoPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgICAgPG1hdC1yYWRpby1ncm91cCBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbZm9ybUNvbnRyb2xdPVwiaGFzQmFja2Ryb3BcIj5cbiAgICAgICAgICA8bGFiZWw+SGFzIEJhY2tkcm9wOjwvbGFiZWw+XG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gW3ZhbHVlXT1cIm51bGxcIj5EZWZhdWx0PC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIFt2YWx1ZV09XCJ0cnVlXCI+dHJ1ZTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBbdmFsdWVdPVwiZmFsc2VcIj5mYWxzZTwvbWF0LXJhZGlvLWJ1dHRvbj5cbiAgICAgICAgPC9tYXQtcmFkaW8tZ3JvdXA+XG4gICAgICAgIDxtYXQtcmFkaW8tZ3JvdXAgY2xhc3M9XCJleGFtcGxlLXJhZGlvLWdyb3VwXCIgW2Zvcm1Db250cm9sXT1cInBvc2l0aW9uXCI+XG4gICAgICAgICAgPGxhYmVsPlBvc2l0aW9uOjwvbGFiZWw+XG4gICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gdmFsdWU9XCJzdGFydFwiPlN0YXJ0PC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIHZhbHVlPVwiZW5kXCI+RW5kPC9tYXQtcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8bGFiZWw+VGVzdCBpbnB1dCBmb3IgZHJhd2VyIGNvbnRlbnQ8aW5wdXQvPjwvbGFiZWw+XG4gICAgICA8L3A+XG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbn0gQGVsc2Uge1xuICA8ZGl2PlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxufVxuXG4iXX0=