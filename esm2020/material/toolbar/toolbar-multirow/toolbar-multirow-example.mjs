import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/icon";
import * as i2 from "@angular/material/toolbar";
/**
 * @title Multi-row toolbar
 */
export class ToolbarMultirowExample {
}
ToolbarMultirowExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: ToolbarMultirowExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ToolbarMultirowExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-next.16", type: ToolbarMultirowExample, selector: "toolbar-multirow-example", ngImport: i0, template: "<mat-toolbar color=\"primary\">\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"], dependencies: [{ kind: "component", type: i1.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }, { kind: "component", type: i2.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i2.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: ToolbarMultirowExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-multirow-example', template: "<mat-toolbar color=\"primary\">\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7O0FBRXhDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjs7MkhBQXRCLHNCQUFzQjsrR0FBdEIsc0JBQXNCLGdFQ1ZuQyxrM0JBc0JBO21HRFphLHNCQUFzQjtrQkFMbEMsU0FBUzsrQkFDRSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIE11bHRpLXJvdyB0b29sYmFyXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsndG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUb29sYmFyTXVsdGlyb3dFeGFtcGxlIHt9XG4iLCI8bWF0LXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XG48IS0tICNkb2NyZWdpb24gdG9vbGJhci1yb3cgLS0+XG4gIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgPHNwYW4+Q3VzdG9tIFRvb2xiYXI8L3NwYW4+XG4gIDwvbWF0LXRvb2xiYXItcm93PlxuPCEtLSAjZW5kZG9jcmVnaW9uIHRvb2xiYXItcm93IC0tPlxuXG48IS0tICNkb2NyZWdpb24gdG9vbGJhci1wb3NpdGlvbi1jb250ZW50IC0tPlxuICA8bWF0LXRvb2xiYXItcm93PlxuICAgIDxzcGFuPlNlY29uZCBMaW5lPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1oaWRkZW49XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIHVzZXIgdmVyaWZpZWQgaWNvblwiPnZlcmlmaWVkX3VzZXI8L21hdC1pY29uPlxuICA8L21hdC10b29sYmFyLXJvdz5cbjwhLS0gI2VuZGRvY3JlZ2lvbiB0b29sYmFyLXBvc2l0aW9uLWNvbnRlbnQgLS0+XG5cbiAgPG1hdC10b29sYmFyLXJvdz5cbiAgICA8c3Bhbj5UaGlyZCBMaW5lPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1zcGFjZXJcIj48L3NwYW4+XG4gICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1oaWRkZW49XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGhlYXJ0IGljb25cIj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS1pY29uXCIgYXJpYS1oaWRkZW49XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGRlbGV0ZSBpY29uXCI+ZGVsZXRlPC9tYXQtaWNvbj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48L21hdC10b29sYmFyPlxuIl19