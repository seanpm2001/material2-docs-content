import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/** @title Implicit main content with two sidenavs */
export class SidenavPositionExample {
    constructor() {
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: SidenavPositionExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: SidenavPositionExample, isStandalone: true, selector: "sidenav-position-example", ngImport: i0, template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\n  <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\n  Implicit main content\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatSidenav, selector: "mat-sidenav", inputs: ["fixedInViewport", "fixedTopGap", "fixedBottomGap"], exportAs: ["matSidenav"] }, { kind: "component", type: i1.MatSidenavContainer, selector: "mat-sidenav-container", exportAs: ["matSidenavContainer"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: SidenavPositionExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-position-example', standalone: true, imports: [NgIf, MatSidenavModule], template: "<mat-sidenav-container class=\"example-container\" *ngIf=\"shouldRun\">\n  <mat-sidenav opened mode=\"side\">Start content</mat-sidenav>\n  <mat-sidenav opened mode=\"side\" position=\"end\">End content</mat-sidenav>\n  Implicit main content\n</mat-sidenav-container>\n\n<div *ngIf=\"!shouldRun\">Please open on Stackblitz to see result</div>\n", styles: [".example-container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LXBvc2l0aW9uL3NpZGVuYXYtcG9zaXRpb24tZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1wb3NpdGlvbi9zaWRlbmF2LXBvc2l0aW9uLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRXJDLHFEQUFxRDtBQVFyRCxNQUFNLE9BQU8sc0JBQXNCO0lBUG5DO1FBUUUsY0FBUyxHQUFHLDBDQUEwQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ25GO21IQUZZLHNCQUFzQjt1R0FBdEIsc0JBQXNCLG9GQ1puQywwVkFPQSw0SkRHWSxJQUFJLDRGQUFFLGdCQUFnQjs7Z0dBRXJCLHNCQUFzQjtrQkFQbEMsU0FBUzsrQkFDRSwwQkFBMEIsY0FHeEIsSUFBSSxXQUNQLENBQUMsSUFBSSxFQUFFLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTaWRlbmF2TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7TmdJZn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqIEB0aXRsZSBJbXBsaWNpdCBtYWluIGNvbnRlbnQgd2l0aCB0d28gc2lkZW5hdnMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtcG9zaXRpb24tZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnc2lkZW5hdi1wb3NpdGlvbi1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTmdJZiwgTWF0U2lkZW5hdk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZQb3NpdGlvbkV4YW1wbGUge1xuICBzaG91bGRSdW4gPSAvKF58Likoc3RhY2tibGl0enx3ZWJjb250YWluZXIpLihpb3xjb20pJC8udGVzdCh3aW5kb3cubG9jYXRpb24uaG9zdCk7XG59XG4iLCI8bWF0LXNpZGVuYXYtY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiAqbmdJZj1cInNob3VsZFJ1blwiPlxuICA8bWF0LXNpZGVuYXYgb3BlbmVkIG1vZGU9XCJzaWRlXCI+U3RhcnQgY29udGVudDwvbWF0LXNpZGVuYXY+XG4gIDxtYXQtc2lkZW5hdiBvcGVuZWQgbW9kZT1cInNpZGVcIiBwb3NpdGlvbj1cImVuZFwiPkVuZCBjb250ZW50PC9tYXQtc2lkZW5hdj5cbiAgSW1wbGljaXQgbWFpbiBjb250ZW50XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cblxuPGRpdiAqbmdJZj1cIiFzaG91bGRSdW5cIj5QbGVhc2Ugb3BlbiBvbiBTdGFja2JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbiJdfQ==