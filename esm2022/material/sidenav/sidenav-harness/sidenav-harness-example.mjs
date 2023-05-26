import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
/**
 * @title Testing with MatSidenavHarness
 */
class SidenavHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SidenavHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: SidenavHarnessExample, isStandalone: true, selector: "sidenav-harness-example", ngImport: i0, template: "<mat-drawer-container>\n  <mat-drawer mode=\"side\">Hello from the drawer</mat-drawer>\n  <mat-drawer-content>Hello from the content</mat-drawer-content>\n</mat-drawer-container>\n", dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { kind: "component", type: i1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { kind: "component", type: i1.MatDrawerContent, selector: "mat-drawer-content" }] }); }
}
export { SidenavHarnessExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: SidenavHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-harness-example', standalone: true, imports: [MatSidenavModule], template: "<mat-drawer-container>\n  <mat-drawer mode=\"side\">Hello from the drawer</mat-drawer>\n  <mat-drawer-content>Hello from the content</mat-drawer-content>\n</mat-drawer-container>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zaWRlbmF2L3NpZGVuYXYtaGFybmVzcy9zaWRlbmF2LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1oYXJuZXNzL3NpZGVuYXYtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7O0FBRTNEOztHQUVHO0FBQ0gsTUFNYSxxQkFBcUI7OEdBQXJCLHFCQUFxQjtrR0FBckIscUJBQXFCLG1GQ1psQyxzTEFJQSwyQ0RNWSxnQkFBZ0I7O1NBRWYscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBTmpDLFNBQVM7K0JBQ0UseUJBQXlCLGNBRXZCLElBQUksV0FDUCxDQUFDLGdCQUFnQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTaWRlbmF2TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zaWRlbmF2JztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFNpZGVuYXZIYXJuZXNzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGVuYXYtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFNpZGVuYXZNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2SGFybmVzc0V4YW1wbGUge31cbiIsIjxtYXQtZHJhd2VyLWNvbnRhaW5lcj5cbiAgPG1hdC1kcmF3ZXIgbW9kZT1cInNpZGVcIj5IZWxsbyBmcm9tIHRoZSBkcmF3ZXI8L21hdC1kcmF3ZXI+XG4gIDxtYXQtZHJhd2VyLWNvbnRlbnQ+SGVsbG8gZnJvbSB0aGUgY29udGVudDwvbWF0LWRyYXdlci1jb250ZW50PlxuPC9tYXQtZHJhd2VyLWNvbnRhaW5lcj5cbiJdfQ==