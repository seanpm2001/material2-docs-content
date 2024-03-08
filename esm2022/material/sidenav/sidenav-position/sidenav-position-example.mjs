import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/** @title Implicit main content with two sidenavs */
export class SidenavPositionExample {
    constructor() {
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0+sha-37d1f71", ngImport: i0, type: SidenavPositionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-next.0+sha-37d1f71", type: SidenavPositionExample, isStandalone: true, selector: "sidenav-position-example", ngImport: i0, template: "@if (shouldRun) {\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\n    <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\n    Implicit main content\n  </mat-sidenav-container>\n} @else {\n  <div>Please open on Stackblitz to see result</div>\n}\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0+sha-37d1f71", ngImport: i0, type: SidenavPositionExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-position-example', standalone: true, imports: [MatSidenavModule], template: "@if (shouldRun) {\n  <mat-sidenav-container class=\"example-container\">\n    <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\n    <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\n    Implicit main content\n  </mat-sidenav-container>\n} @else {\n  <div>Please open on Stackblitz to see result</div>\n}\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LXBvc2l0aW9uL3NpZGVuYXYtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1wb3NpdGlvbi9zaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDOzs7QUFFM0QscURBQXFEO0FBUXJELE1BQU0sT0FBTyxzQkFBc0I7SUFQbkM7UUFRRSxjQUFTLEdBQUcsMENBQTBDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDbkY7aUlBRlksc0JBQXNCO3FIQUF0QixzQkFBc0Isb0ZDWG5DLDRWQVNBLDJKREFZLGdCQUFnQjs7OEdBRWYsc0JBQXNCO2tCQVBsQyxTQUFTOytCQUNFLDBCQUEwQixjQUd4QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0U2lkZW5hdk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbi8qKiBAdGl0bGUgSW1wbGljaXQgbWFpbiBjb250ZW50IHdpdGggdHdvIHNpZGVuYXZzICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NpZGVuYXYtcG9zaXRpb24tZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdzaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFNpZGVuYXZNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2UG9zaXRpb25FeGFtcGxlIHtcbiAgc2hvdWxkUnVuID0gLyhefC4pKHN0YWNrYmxpdHp8d2ViY29udGFpbmVyKS4oaW98Y29tKSQvLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpO1xufVxuIiwiQGlmIChzaG91bGRSdW4pIHtcbiAgPG1hdC1zaWRlbmF2LWNvbnRhaW5lciBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gICAgPG1hdC1zaWRlbmF2IG9wZW5lZCBtb2RlPVwic2lkZVwiPlN0YXJ0IGNvbnRlbnQ8L21hdC1zaWRlbmF2PlxuICAgIDxtYXQtc2lkZW5hdiBvcGVuZWQgbW9kZT1cInNpZGVcIiBwb3NpdGlvbj1cImVuZFwiPkVuZCBjb250ZW50PC9tYXQtc2lkZW5hdj5cbiAgICBJbXBsaWNpdCBtYWluIGNvbnRlbnRcbiAgPC9tYXQtc2lkZW5hdi1jb250YWluZXI+XG59IEBlbHNlIHtcbiAgPGRpdj5QbGVhc2Ugb3BlbiBvbiBTdGFja2JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbn1cbiJdfQ==