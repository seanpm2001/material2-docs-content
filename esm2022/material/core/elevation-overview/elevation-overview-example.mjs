import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
/**
 * @title Elevation CSS classes
 */
export class ElevationOverviewExample {
    constructor() {
        this.isActive = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: ElevationOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.1.0-next.3", type: ElevationOverviewExample, isStandalone: true, selector: "elevation-overview-example", ngImport: i0, template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n", styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.1.0-next.3", ngImport: i0, type: ElevationOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'elevation-overview-example', standalone: true, imports: [MatButtonModule], template: "<div class=\"example-container\"\n    [class.mat-elevation-z2]=\"!isActive\"\n    [class.mat-elevation-z8]=\"isActive\">\n  Example\n</div>\n\n<button mat-button (click)=\"isActive = !isActive\">Toggle Elevation</button>\n", styles: [".example-container {\n  padding: 16px;\n  margin-bottom: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jb3JlL2VsZXZhdGlvbi1vdmVydmlldy9lbGV2YXRpb24tb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NvcmUvZWxldmF0aW9uLW92ZXJ2aWV3L2VsZXZhdGlvbi1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7OztBQUV6RDs7R0FFRztBQVFILE1BQU0sT0FBTyx3QkFBd0I7SUFQckM7UUFRRSxhQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ2xCO3FIQUZZLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLHNGQ2JyQyxnT0FPQSw0SERJWSxlQUFlOztrR0FFZCx3QkFBd0I7a0JBUHBDLFNBQVM7K0JBQ0UsNEJBQTRCLGNBRzFCLElBQUksV0FDUCxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG4vKipcbiAqIEB0aXRsZSBFbGV2YXRpb24gQ1NTIGNsYXNzZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnZWxldmF0aW9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBFbGV2YXRpb25PdmVydmlld0V4YW1wbGUge1xuICBpc0FjdGl2ZSA9IGZhbHNlO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCJcbiAgICBbY2xhc3MubWF0LWVsZXZhdGlvbi16Ml09XCIhaXNBY3RpdmVcIlxuICAgIFtjbGFzcy5tYXQtZWxldmF0aW9uLXo4XT1cImlzQWN0aXZlXCI+XG4gIEV4YW1wbGVcbjwvZGl2PlxuXG48YnV0dG9uIG1hdC1idXR0b24gKGNsaWNrKT1cImlzQWN0aXZlID0gIWlzQWN0aXZlXCI+VG9nZ2xlIEVsZXZhdGlvbjwvYnV0dG9uPlxuIl19