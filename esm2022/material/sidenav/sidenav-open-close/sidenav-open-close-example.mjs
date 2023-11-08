import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/checkbox";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/button";
/** @title Sidenav open & close behavior */
export class SidenavOpenCloseExample {
    constructor() {
        this.events = [];
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: SidenavOpenCloseExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.0", type: SidenavOpenCloseExample, isStandalone: true, selector: "sidenav-open-close-example", ngImport: i0, template: "@if (shouldRun) {\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n                (closed)=\"events.push('close!')\">\n      Sidenav content\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p>\n      <p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p>\n      <p>Events:</p>\n      <div class=\"example-events\">\n        @for (e of events; track e) {\n          <div>{{e}}</div>\n        }\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n} @else {\n  <div>Please open on Stackblitz to see result</div>\n}\n\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }, { kind: "component", type: i1.MatSidenavContent, selector: "mat-sidenav-content" }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i4.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: SidenavOpenCloseExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-open-close-example', standalone: true, imports: [MatSidenavModule, MatCheckboxModule, FormsModule, MatButtonModule], template: "@if (shouldRun) {\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" (opened)=\"events.push('open!')\"\n                (closed)=\"events.push('close!')\">\n      Sidenav content\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <p><mat-checkbox [(ngModel)]=\"opened\">sidenav.opened</mat-checkbox></p>\n      <p><button mat-button (click)=\"sidenav.toggle()\">sidenav.toggle()</button></p>\n      <p>Events:</p>\n      <div class=\"example-events\">\n        @for (e of events; track e) {\n          <div>{{e}}</div>\n        }\n      </div>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n} @else {\n  <div>Please open on Stackblitz to see result</div>\n}\n\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1vcGVuLWNsb3NlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtb3Blbi1jbG9zZS9zaWRlbmF2LW9wZW4tY2xvc2UtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1vcGVuLWNsb3NlL3NpZGVuYXYtb3Blbi1jbG9zZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7Ozs7QUFFM0QsMkNBQTJDO0FBUTNDLE1BQU0sT0FBTyx1QkFBdUI7SUFQcEM7UUFRRSxXQUFNLEdBQWEsRUFBRSxDQUFDO1FBR3RCLGNBQVMsR0FBRywwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuRjs4R0FMWSx1QkFBdUI7a0dBQXZCLHVCQUF1QixzRkNkcEMseXVCQXNCQSxvUURWWSxnQkFBZ0IsMFlBQUUsaUJBQWlCLDZXQUFFLFdBQVcsOFZBQUUsZUFBZTs7MkZBRWhFLHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSw0QkFBNEIsY0FHMUIsSUFBSSxXQUNQLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRDaGVja2JveE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xuaW1wb3J0IHtNYXRTaWRlbmF2TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuLyoqIEB0aXRsZSBTaWRlbmF2IG9wZW4gJiBjbG9zZSBiZWhhdmlvciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1vcGVuLWNsb3NlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtb3Blbi1jbG9zZS1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1vcGVuLWNsb3NlLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRTaWRlbmF2TW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgRm9ybXNNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZPcGVuQ2xvc2VFeGFtcGxlIHtcbiAgZXZlbnRzOiBzdHJpbmdbXSA9IFtdO1xuICBvcGVuZWQ6IGJvb2xlYW47XG5cbiAgc2hvdWxkUnVuID0gLyhefC4pKHN0YWNrYmxpdHp8d2ViY29udGFpbmVyKS4oaW98Y29tKSQvLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpO1xufVxuIiwiQGlmIChzaG91bGRSdW4pIHtcbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPG1hdC1zaWRlbmF2ICNzaWRlbmF2IG1vZGU9XCJzaWRlXCIgWyhvcGVuZWQpXT1cIm9wZW5lZFwiIChvcGVuZWQpPVwiZXZlbnRzLnB1c2goJ29wZW4hJylcIlxuICAgICAgICAgICAgICAgIChjbG9zZWQpPVwiZXZlbnRzLnB1c2goJ2Nsb3NlIScpXCI+XG4gICAgICBTaWRlbmF2IGNvbnRlbnRcbiAgICA8L21hdC1zaWRlbmF2PlxuXG4gICAgPG1hdC1zaWRlbmF2LWNvbnRlbnQ+XG4gICAgICA8cD48bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwib3BlbmVkXCI+c2lkZW5hdi5vcGVuZWQ8L21hdC1jaGVja2JveD48L3A+XG4gICAgICA8cD48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cInNpZGVuYXYudG9nZ2xlKClcIj5zaWRlbmF2LnRvZ2dsZSgpPC9idXR0b24+PC9wPlxuICAgICAgPHA+RXZlbnRzOjwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWV2ZW50c1wiPlxuICAgICAgICBAZm9yIChlIG9mIGV2ZW50czsgdHJhY2sgZSkge1xuICAgICAgICAgIDxkaXY+e3tlfX08L2Rpdj5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9tYXQtc2lkZW5hdi1jb250ZW50PlxuICA8L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cbn0gQGVsc2Uge1xuICA8ZGl2PlBsZWFzZSBvcGVuIG9uIFN0YWNrYmxpdHogdG8gc2VlIHJlc3VsdDwvZGl2PlxufVxuXG4iXX0=