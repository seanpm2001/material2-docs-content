import { Component, TemplateRef, ViewChild, ViewContainerRef, ElementRef, } from '@angular/core';
import { ComponentPortal, DomPortal, TemplatePortal, PortalModule, } from '@angular/cdk/portal';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/portal";
/**
 * @title Portal overview
 */
export class CdkPortalOverviewExample {
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    ngAfterViewInit() {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
        this.domPortal = new DomPortal(this.domPortalContent);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CdkPortalOverviewExample, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: CdkPortalOverviewExample, isStandalone: true, selector: "cdk-portal-overview-example", viewQueries: [{ propertyName: "templatePortalContent", first: true, predicate: ["templatePortalContent"], descendants: true }, { propertyName: "domPortalContent", first: true, predicate: ["domPortalContent"], descendants: true }], ngImport: i0, template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\n\n<div #domPortalContent>Hello, this is a DOM portal</div>\n", styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"], dependencies: [{ kind: "ngmodule", type: PortalModule }, { kind: "directive", type: i1.CdkPortalOutlet, selector: "[cdkPortalOutlet]", inputs: ["cdkPortalOutlet"], outputs: ["attached"], exportAs: ["cdkPortalOutlet"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CdkPortalOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-portal-overview-example', standalone: true, imports: [PortalModule], template: "<h2>The portal outlet is below:</h2>\n<div class=\"example-portal-outlet\">\n  <ng-template [cdkPortalOutlet]=\"selectedPortal\"></ng-template>\n</div>\n<ng-template #templatePortalContent>Hello, this is a template portal</ng-template>\n\n<button (click)=\"selectedPortal = componentPortal\">Render component portal</button>\n<button (click)=\"selectedPortal = templatePortal\">Render template portal</button>\n<button (click)=\"selectedPortal = domPortal\">Render DOM portal</button>\n\n<div #domPortalContent>Hello, this is a DOM portal</div>\n", styles: [".example-portal-outlet {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i0.ViewContainerRef }], propDecorators: { templatePortalContent: [{
                type: ViewChild,
                args: ['templatePortalContent']
            }], domPortalContent: [{
                type: ViewChild,
                args: ['domPortalContent']
            }] } });
export class ComponentPortalExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: ComponentPortalExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: ComponentPortalExample, isStandalone: true, selector: "component-portal-example", ngImport: i0, template: 'Hello, this is a component portal', isInline: true }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: ComponentPortalExample, decorators: [{
            type: Component,
            args: [{
                    selector: 'component-portal-example',
                    template: 'Hello, this is a component portal',
                    standalone: true,
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BvcnRhbC9jZGstcG9ydGFsLW92ZXJ2aWV3L2Nkay1wb3J0YWwtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9wb3J0YWwvY2RrLXBvcnRhbC1vdmVydmlldy9jZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQ0wsZUFBZSxFQUNmLFNBQVMsRUFFVCxjQUFjLEVBQ2QsWUFBWSxHQUNiLE1BQU0scUJBQXFCLENBQUM7OztBQUU3Qjs7R0FFRztBQVFILE1BQU0sT0FBTyx3QkFBd0I7SUFTbkMsWUFBb0IsaUJBQW1DO1FBQW5DLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7SUFBRyxDQUFDO0lBRTNELGVBQWU7UUFDYixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0YsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN4RCxDQUFDO21IQWZVLHdCQUF3Qjt1R0FBeEIsd0JBQXdCLDhUQzFCckMsb2lCQVdBLGdNRGFZLFlBQVk7O2dHQUVYLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSw2QkFBNkIsY0FHM0IsSUFBSSxXQUNQLENBQUMsWUFBWSxDQUFDO3FGQUdhLHFCQUFxQjtzQkFBeEQsU0FBUzt1QkFBQyx1QkFBdUI7Z0JBQ0gsZ0JBQWdCO3NCQUE5QyxTQUFTO3VCQUFDLGtCQUFrQjs7QUFxQi9CLE1BQU0sT0FBTyxzQkFBc0I7bUhBQXRCLHNCQUFzQjt1R0FBdEIsc0JBQXNCLG9GQUh2QixtQ0FBbUM7O2dHQUdsQyxzQkFBc0I7a0JBTGxDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0MsVUFBVSxFQUFFLElBQUk7aUJBQ2pCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmLFxuICBFbGVtZW50UmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvbXBvbmVudFBvcnRhbCxcbiAgRG9tUG9ydGFsLFxuICBQb3J0YWwsXG4gIFRlbXBsYXRlUG9ydGFsLFxuICBQb3J0YWxNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuXG4vKipcbiAqIEB0aXRsZSBQb3J0YWwgb3ZlcnZpZXdcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBvcnRhbC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstcG9ydGFsLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtQb3J0YWxNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtQb3J0YWxPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgQFZpZXdDaGlsZCgndGVtcGxhdGVQb3J0YWxDb250ZW50JykgdGVtcGxhdGVQb3J0YWxDb250ZW50OiBUZW1wbGF0ZVJlZjx1bmtub3duPjtcbiAgQFZpZXdDaGlsZCgnZG9tUG9ydGFsQ29udGVudCcpIGRvbVBvcnRhbENvbnRlbnQ6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+O1xuXG4gIHNlbGVjdGVkUG9ydGFsOiBQb3J0YWw8YW55PjtcbiAgY29tcG9uZW50UG9ydGFsOiBDb21wb25lbnRQb3J0YWw8Q29tcG9uZW50UG9ydGFsRXhhbXBsZT47XG4gIHRlbXBsYXRlUG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDxhbnk+O1xuICBkb21Qb3J0YWw6IERvbVBvcnRhbDxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3ZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29tcG9uZW50UG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbChDb21wb25lbnRQb3J0YWxFeGFtcGxlKTtcbiAgICB0aGlzLnRlbXBsYXRlUG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMudGVtcGxhdGVQb3J0YWxDb250ZW50LCB0aGlzLl92aWV3Q29udGFpbmVyUmVmKTtcbiAgICB0aGlzLmRvbVBvcnRhbCA9IG5ldyBEb21Qb3J0YWwodGhpcy5kb21Qb3J0YWxDb250ZW50KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb21wb25lbnQtcG9ydGFsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZTogJ0hlbGxvLCB0aGlzIGlzIGEgY29tcG9uZW50IHBvcnRhbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG59KVxuZXhwb3J0IGNsYXNzIENvbXBvbmVudFBvcnRhbEV4YW1wbGUge31cbiIsIjxoMj5UaGUgcG9ydGFsIG91dGxldCBpcyBiZWxvdzo8L2gyPlxuPGRpdiBjbGFzcz1cImV4YW1wbGUtcG9ydGFsLW91dGxldFwiPlxuICA8bmctdGVtcGxhdGUgW2Nka1BvcnRhbE91dGxldF09XCJzZWxlY3RlZFBvcnRhbFwiPjwvbmctdGVtcGxhdGU+XG48L2Rpdj5cbjxuZy10ZW1wbGF0ZSAjdGVtcGxhdGVQb3J0YWxDb250ZW50PkhlbGxvLCB0aGlzIGlzIGEgdGVtcGxhdGUgcG9ydGFsPC9uZy10ZW1wbGF0ZT5cblxuPGJ1dHRvbiAoY2xpY2spPVwic2VsZWN0ZWRQb3J0YWwgPSBjb21wb25lbnRQb3J0YWxcIj5SZW5kZXIgY29tcG9uZW50IHBvcnRhbDwvYnV0dG9uPlxuPGJ1dHRvbiAoY2xpY2spPVwic2VsZWN0ZWRQb3J0YWwgPSB0ZW1wbGF0ZVBvcnRhbFwiPlJlbmRlciB0ZW1wbGF0ZSBwb3J0YWw8L2J1dHRvbj5cbjxidXR0b24gKGNsaWNrKT1cInNlbGVjdGVkUG9ydGFsID0gZG9tUG9ydGFsXCI+UmVuZGVyIERPTSBwb3J0YWw8L2J1dHRvbj5cblxuPGRpdiAjZG9tUG9ydGFsQ29udGVudD5IZWxsbywgdGhpcyBpcyBhIERPTSBwb3J0YWw8L2Rpdj5cbiJdfQ==