import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Toolbar overview
 */
export class ToolbarOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToolbarOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.4", type: ToolbarOverviewExample, isStandalone: true, selector: "toolbar-overview-example", ngImport: i0, template: "<p>\n  <!-- #docregion toolbar-simple -->\n  <mat-toolbar>\n    <span>My Application</span>\n  </mat-toolbar>\n  <!-- #enddocregion toolbar-simple -->\n</p>\n\n<p>\n  <mat-toolbar>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>My App</span>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n      <mat-icon>share</mat-icon>\n    </button>\n  </mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>My App</span>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n      <mat-icon>share</mat-icon>\n    </button>\n  </mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>My App</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <span>Second Line</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n        <mat-icon>share</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</p>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: ToolbarOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-overview-example', standalone: true, imports: [MatToolbarModule, MatButtonModule, MatIconModule], template: "<p>\n  <!-- #docregion toolbar-simple -->\n  <mat-toolbar>\n    <span>My Application</span>\n  </mat-toolbar>\n  <!-- #enddocregion toolbar-simple -->\n</p>\n\n<p>\n  <mat-toolbar>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>My App</span>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n      <mat-icon>share</mat-icon>\n    </button>\n  </mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n      <mat-icon>menu</mat-icon>\n    </button>\n    <span>My App</span>\n    <span class=\"example-spacer\"></span>\n    <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n    <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n      <mat-icon>share</mat-icon>\n    </button>\n  </mat-toolbar>\n</p>\n\n<p>\n  <mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n      <span>My App</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <span>Second Line</span>\n      <span class=\"example-spacer\"></span>\n      <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">\n        <mat-icon>share</mat-icon>\n      </button>\n    </mat-toolbar-row>\n  </mat-toolbar>\n</p>\n", styles: [".example-spacer {\n  flex: 1 1 auto;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW92ZXJ2aWV3L3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1vdmVydmlldy90b29sYmFyLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7Ozs7O0FBRTNEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHNCQUFzQjs4R0FBdEIsc0JBQXNCO2tHQUF0QixzQkFBc0Isb0ZDZm5DLHFuRUE4REEsa0dEakRZLGdCQUFnQix5UEFBRSxlQUFlLDJJQUFFLGFBQWE7OzJGQUUvQyxzQkFBc0I7a0JBUGxDLFNBQVM7K0JBQ0UsMEJBQTBCLGNBR3hCLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdFRvb2xiYXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2xiYXInO1xuXG4vKipcbiAqIEB0aXRsZSBUb29sYmFyIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2xiYXItb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJhci1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbGJhci1vdmVydmlldy1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0VG9vbGJhck1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhck92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPHA+XG4gIDwhLS0gI2RvY3JlZ2lvbiB0b29sYmFyLXNpbXBsZSAtLT5cbiAgPG1hdC10b29sYmFyPlxuICAgIDxzcGFuPk15IEFwcGxpY2F0aW9uPC9zcGFuPlxuICA8L21hdC10b29sYmFyPlxuICA8IS0tICNlbmRkb2NyZWdpb24gdG9vbGJhci1zaW1wbGUgLS0+XG48L3A+XG5cbjxwPlxuICA8bWF0LXRvb2xiYXI+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIG1lbnUgaWNvblwiPlxuICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxzcGFuPk15IEFwcDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uIGZhdm9yaXRlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGhlYXJ0IGljb25cIj5cbiAgICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIHNoYXJlIGljb25cIj5cbiAgICAgIDxtYXQtaWNvbj5zaGFyZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvbWF0LXRvb2xiYXI+XG48L3A+XG5cbjxwPlxuICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIG1lbnUgaWNvblwiPlxuICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIDxzcGFuPk15IEFwcDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uIGZhdm9yaXRlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGhlYXJ0IGljb25cIj5cbiAgICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIHNoYXJlIGljb25cIj5cbiAgICAgIDxtYXQtaWNvbj5zaGFyZTwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gIDwvbWF0LXRvb2xiYXI+XG48L3A+XG5cbjxwPlxuICA8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgPG1hdC10b29sYmFyLXJvdz5cbiAgICAgIDxzcGFuPk15IEFwcDwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24tYnV0dG9uIHdpdGggbWVudSBpY29uXCI+XG4gICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbWF0LXRvb2xiYXItcm93PlxuXG4gICAgPG1hdC10b29sYmFyLXJvdz5cbiAgICAgIDxzcGFuPlNlY29uZCBMaW5lPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLXNwYWNlclwiPjwvc3Bhbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1pY29uIGZhdm9yaXRlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIGhlYXJ0IGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPmZhdm9yaXRlPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gY2xhc3M9XCJleGFtcGxlLWljb25cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uLWJ1dHRvbiB3aXRoIHNoYXJlIGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPnNoYXJlPC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbWF0LXRvb2xiYXItcm93PlxuICA8L21hdC10b29sYmFyPlxuPC9wPlxuIl19