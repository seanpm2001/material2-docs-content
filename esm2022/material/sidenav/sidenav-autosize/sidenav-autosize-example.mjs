import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/material/button";
/**
 * @title Autosize sidenav
 */
export class SidenavAutosizeExample {
    constructor() {
        this.showFiller = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: SidenavAutosizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-next.5", type: SidenavAutosizeExample, isStandalone: true, selector: "sidenav-autosize-example", ngImport: i0, template: "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    @if (showFiller) {\n      <p>Lorem, ipsum dolor sit amet consectetur.</p>\n    }\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatSidenavModule }, { kind: "component", type: i1.MatDrawer, selector: "mat-drawer", inputs: ["position", "mode", "disableClose", "autoFocus", "opened"], outputs: ["openedChange", "opened", "openedStart", "closed", "closedStart", "positionChanged"], exportAs: ["matDrawer"] }, { kind: "component", type: i1.MatDrawerContainer, selector: "mat-drawer-container", inputs: ["autosize", "hasBackdrop"], outputs: ["backdropClick"], exportAs: ["matDrawerContainer"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: SidenavAutosizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'sidenav-autosize-example', standalone: true, imports: [MatSidenavModule, MatButtonModule], template: "<mat-drawer-container class=\"example-container\" autosize>\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\">\n    <p>Auto-resizing sidenav</p>\n    @if (showFiller) {\n      <p>Lorem, ipsum dolor sit amet consectetur.</p>\n    }\n    <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n      Toggle extra text\n    </button>\n  </mat-drawer>\n\n  <div class=\"example-sidenav-content\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      Toggle sidenav\n    </button>\n  </div>\n\n</mat-drawer-container>\n", styles: [".example-container {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav {\n  padding: 20px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWF1dG9zaXplL3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1hdXRvc2l6ZS9zaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQzs7OztBQUUzRDs7R0FFRztBQVFILE1BQU0sT0FBTyxzQkFBc0I7SUFQbkM7UUFRRSxlQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3BCO3FIQUZZLHNCQUFzQjt5R0FBdEIsc0JBQXNCLG9GQ2RuQyxpakJBa0JBLGlVRE5ZLGdCQUFnQix3ZEFBRSxlQUFlOztrR0FFaEMsc0JBQXNCO2tCQVBsQyxTQUFTOytCQUNFLDBCQUEwQixjQUd4QixJQUFJLFdBQ1AsQ0FBQyxnQkFBZ0IsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0U2lkZW5hdk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2lkZW5hdic7XG5cbi8qKlxuICogQHRpdGxlIEF1dG9zaXplIHNpZGVuYXZcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRTaWRlbmF2TW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlbmF2QXV0b3NpemVFeGFtcGxlIHtcbiAgc2hvd0ZpbGxlciA9IGZhbHNlO1xufVxuIiwiPG1hdC1kcmF3ZXItY29udGFpbmVyIGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIiBhdXRvc2l6ZT5cbiAgPG1hdC1kcmF3ZXIgI2RyYXdlciBjbGFzcz1cImV4YW1wbGUtc2lkZW5hdlwiIG1vZGU9XCJzaWRlXCI+XG4gICAgPHA+QXV0by1yZXNpemluZyBzaWRlbmF2PC9wPlxuICAgIEBpZiAoc2hvd0ZpbGxlcikge1xuICAgICAgPHA+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvcD5cbiAgICB9XG4gICAgPGJ1dHRvbiAoY2xpY2spPVwic2hvd0ZpbGxlciA9ICFzaG93RmlsbGVyXCIgbWF0LXJhaXNlZC1idXR0b24+XG4gICAgICBUb2dnbGUgZXh0cmEgdGV4dFxuICAgIDwvYnV0dG9uPlxuICA8L21hdC1kcmF3ZXI+XG5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtc2lkZW5hdi1jb250ZW50XCI+XG4gICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbWF0LWJ1dHRvbiAoY2xpY2spPVwiZHJhd2VyLnRvZ2dsZSgpXCI+XG4gICAgICBUb2dnbGUgc2lkZW5hdlxuICAgIDwvYnV0dG9uPlxuICA8L2Rpdj5cblxuPC9tYXQtZHJhd2VyLWNvbnRhaW5lcj5cbiJdfQ==