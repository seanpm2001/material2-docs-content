import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/material/button";
/**
 * @title Basic use of the tab nav bar
 */
export class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    toggleBackground() {
        this.background = this.background ? undefined : 'primary';
    }
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-next.5", ngImport: i0, type: TabNavBarBasicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0-next.5", type: TabNavBarBasicExample, isStandalone: true, selector: "tab-nav-bar-basic-example", ngImport: i0, template: "<!-- #docregion mat-tab-nav -->\n<nav mat-tab-nav-bar [backgroundColor]=\"background\" [tabPanel]=\"tabPanel\">\n  @for (link of links; track link) {\n    <a mat-tab-link\n      (click)=\"activeLink = link\"\n      [active]=\"activeLink == link\"> {{link}} </a>\n  }\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\n<!-- #enddocregion mat-tab-nav -->\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n", styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i1.MatTabNav, selector: "[mat-tab-nav-bar]", inputs: ["fitInkBarToContent", "mat-stretch-tabs", "animationDuration", "backgroundColor", "disableRipple", "color", "tabPanel"], exportAs: ["matTabNavBar", "matTabNav"] }, { kind: "component", type: i1.MatTabNavPanel, selector: "mat-tab-nav-panel", inputs: ["id"], exportAs: ["matTabNavPanel"] }, { kind: "component", type: i1.MatTabLink, selector: "[mat-tab-link], [matTabLink]", inputs: ["active", "disabled", "disableRipple", "tabIndex", "id"], exportAs: ["matTabLink"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-next.5", ngImport: i0, type: TabNavBarBasicExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-nav-bar-basic-example', standalone: true, imports: [MatTabsModule, MatButtonModule], template: "<!-- #docregion mat-tab-nav -->\n<nav mat-tab-nav-bar [backgroundColor]=\"background\" [tabPanel]=\"tabPanel\">\n  @for (link of links; track link) {\n    <a mat-tab-link\n      (click)=\"activeLink = link\"\n      [active]=\"activeLink == link\"> {{link}} </a>\n  }\n  <a mat-tab-link disabled>Disabled Link</a>\n</nav>\n<mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>\n<!-- #enddocregion mat-tab-nav -->\n\n<button mat-raised-button class=\"example-action-button\" (click)=\"toggleBackground()\">\n  Toggle background\n</button>\n<button mat-raised-button class=\"example-action-button\" (click)=\"addLink()\">\n  Add link\n</button>\n", styles: [".example-action-button {\n  margin-top: 8px;\n  margin-right: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLW5hdi1iYXItYmFzaWMvdGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLW5hdi1iYXItYmFzaWMvdGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVyRDs7R0FFRztBQVFILE1BQU0sT0FBTyxxQkFBcUI7SUFQbEM7UUFRRSxVQUFLLEdBQUcsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLGVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGVBQVUsR0FBaUIsU0FBUyxDQUFDO0tBU3RDO0lBUEMsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNuRCxDQUFDO3FIQVhVLHFCQUFxQjt5R0FBckIscUJBQXFCLHFGQ2ZsQyxpb0JBa0JBLGdJRExZLGFBQWEsbWtCQUFFLGVBQWU7O2tHQUU3QixxQkFBcUI7a0JBUGpDLFNBQVM7K0JBQ0UsMkJBQTJCLGNBR3pCLElBQUksV0FDUCxDQUFDLGFBQWEsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0VGFic01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFicyc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHVzZSBvZiB0aGUgdGFiIG5hdiBiYXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUYWJzTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJOYXZCYXJCYXNpY0V4YW1wbGUge1xuICBsaW5rcyA9IFsnRmlyc3QnLCAnU2Vjb25kJywgJ1RoaXJkJ107XG4gIGFjdGl2ZUxpbmsgPSB0aGlzLmxpbmtzWzBdO1xuICBiYWNrZ3JvdW5kOiBUaGVtZVBhbGV0dGUgPSB1bmRlZmluZWQ7XG5cbiAgdG9nZ2xlQmFja2dyb3VuZCgpIHtcbiAgICB0aGlzLmJhY2tncm91bmQgPSB0aGlzLmJhY2tncm91bmQgPyB1bmRlZmluZWQgOiAncHJpbWFyeSc7XG4gIH1cblxuICBhZGRMaW5rKCkge1xuICAgIHRoaXMubGlua3MucHVzaChgTGluayAke3RoaXMubGlua3MubGVuZ3RoICsgMX1gKTtcbiAgfVxufVxuIiwiPCEtLSAjZG9jcmVnaW9uIG1hdC10YWItbmF2IC0tPlxuPG5hdiBtYXQtdGFiLW5hdi1iYXIgW2JhY2tncm91bmRDb2xvcl09XCJiYWNrZ3JvdW5kXCIgW3RhYlBhbmVsXT1cInRhYlBhbmVsXCI+XG4gIEBmb3IgKGxpbmsgb2YgbGlua3M7IHRyYWNrIGxpbmspIHtcbiAgICA8YSBtYXQtdGFiLWxpbmtcbiAgICAgIChjbGljayk9XCJhY3RpdmVMaW5rID0gbGlua1wiXG4gICAgICBbYWN0aXZlXT1cImFjdGl2ZUxpbmsgPT0gbGlua1wiPiB7e2xpbmt9fSA8L2E+XG4gIH1cbiAgPGEgbWF0LXRhYi1saW5rIGRpc2FibGVkPkRpc2FibGVkIExpbms8L2E+XG48L25hdj5cbjxtYXQtdGFiLW5hdi1wYW5lbCAjdGFiUGFuZWw+PC9tYXQtdGFiLW5hdi1wYW5lbD5cbjwhLS0gI2VuZGRvY3JlZ2lvbiBtYXQtdGFiLW5hdiAtLT5cblxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVCYWNrZ3JvdW5kKClcIj5cbiAgVG9nZ2xlIGJhY2tncm91bmRcbjwvYnV0dG9uPlxuPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtYWN0aW9uLWJ1dHRvblwiIChjbGljayk9XCJhZGRMaW5rKClcIj5cbiAgQWRkIGxpbmtcbjwvYnV0dG9uPlxuIl19