import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/toolbar";
import * as i2 from "@angular/material/icon";
/**
 * @title Multi-row toolbar
 */
export class ToolbarMultirowExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: ToolbarMultirowExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.1", type: ToolbarMultirowExample, isStandalone: true, selector: "toolbar-multirow-example", ngImport: i0, template: "<mat-toolbar>\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"], dependencies: [{ kind: "ngmodule", type: MatToolbarModule }, { kind: "component", type: i1.MatToolbar, selector: "mat-toolbar", inputs: ["color"], exportAs: ["matToolbar"] }, { kind: "directive", type: i1.MatToolbarRow, selector: "mat-toolbar-row", exportAs: ["matToolbarRow"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: ToolbarMultirowExample, decorators: [{
            type: Component,
            args: [{ selector: 'toolbar-multirow-example', standalone: true, imports: [MatToolbarModule, MatIconModule], template: "<mat-toolbar>\n<!-- #docregion toolbar-row -->\n  <mat-toolbar-row>\n    <span>Custom Toolbar</span>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-row -->\n\n<!-- #docregion toolbar-position-content -->\n  <mat-toolbar-row>\n    <span>Second Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example user verified icon\">verified_user</mat-icon>\n  </mat-toolbar-row>\n<!-- #enddocregion toolbar-position-content -->\n\n  <mat-toolbar-row>\n    <span>Third Line</span>\n    <span class=\"example-spacer\"></span>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">favorite</mat-icon>\n    <mat-icon class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\">delete</mat-icon>\n  </mat-toolbar-row>\n</mat-toolbar>\n", styles: [".example-icon {\n  padding: 0 14px;\n}\n/* #docregion toolbar-position-content-style */\n.example-spacer {\n  flex: 1 1 auto;\n}\n/* #enddocregion toolbar-position-content-style */\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdG9vbGJhci90b29sYmFyLW11bHRpcm93L3Rvb2xiYXItbXVsdGlyb3ctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2xiYXIvdG9vbGJhci1tdWx0aXJvdy90b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUUzRDs7R0FFRztBQVFILE1BQU0sT0FBTyxzQkFBc0I7cUhBQXRCLHNCQUFzQjt5R0FBdEIsc0JBQXNCLG9GQ2RuQyxnMkJBc0JBLCtPRFZZLGdCQUFnQix5UEFBRSxhQUFhOztrR0FFOUIsc0JBQXNCO2tCQVBsQyxTQUFTOytCQUNFLDBCQUEwQixjQUd4QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRUb29sYmFyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sYmFyJztcblxuLyoqXG4gKiBAdGl0bGUgTXVsdGktcm93IHRvb2xiYXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9vbGJhci1tdWx0aXJvdy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0b29sYmFyLW11bHRpcm93LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAndG9vbGJhci1tdWx0aXJvdy1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUb29sYmFyTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbGJhck11bHRpcm93RXhhbXBsZSB7fVxuIiwiPG1hdC10b29sYmFyPlxuPCEtLSAjZG9jcmVnaW9uIHRvb2xiYXItcm93IC0tPlxuICA8bWF0LXRvb2xiYXItcm93PlxuICAgIDxzcGFuPkN1c3RvbSBUb29sYmFyPC9zcGFuPlxuICA8L21hdC10b29sYmFyLXJvdz5cbjwhLS0gI2VuZGRvY3JlZ2lvbiB0b29sYmFyLXJvdyAtLT5cblxuPCEtLSAjZG9jcmVnaW9uIHRvb2xiYXItcG9zaXRpb24tY29udGVudCAtLT5cbiAgPG1hdC10b29sYmFyLXJvdz5cbiAgICA8c3Bhbj5TZWNvbmQgTGluZTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSB1c2VyIHZlcmlmaWVkIGljb25cIj52ZXJpZmllZF91c2VyPC9tYXQtaWNvbj5cbiAgPC9tYXQtdG9vbGJhci1yb3c+XG48IS0tICNlbmRkb2NyZWdpb24gdG9vbGJhci1wb3NpdGlvbi1jb250ZW50IC0tPlxuXG4gIDxtYXQtdG9vbGJhci1yb3c+XG4gICAgPHNwYW4+VGhpcmQgTGluZTwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtc3BhY2VyXCI+PC9zcGFuPlxuICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBoZWFydCBpY29uXCI+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgIDxtYXQtaWNvbiBjbGFzcz1cImV4YW1wbGUtaWNvblwiIGFyaWEtaGlkZGVuPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBkZWxldGUgaWNvblwiPmRlbGV0ZTwvbWF0LWljb24+XG4gIDwvbWF0LXRvb2xiYXItcm93PlxuPC9tYXQtdG9vbGJhcj5cbiJdfQ==