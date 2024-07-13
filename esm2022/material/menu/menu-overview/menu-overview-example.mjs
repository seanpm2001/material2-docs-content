import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * @title Basic menu
 */
export class MenuOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: MenuOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: MenuOverviewExample, isStandalone: true, selector: "menu-overview-example", ngImport: i0, template: "<!-- #docregion mat-menu-trigger-for -->\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<!-- #enddocregion mat-menu-trigger-for -->\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i2.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: i2.MatMenuItem, selector: "[mat-menu-item]", inputs: ["role", "disabled", "disableRipple"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i2.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: MenuOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'menu-overview-example', standalone: true, imports: [MatButtonModule, MatMenuModule], template: "<!-- #docregion mat-menu-trigger-for -->\n<button mat-button [matMenuTriggerFor]=\"menu\">Menu</button>\n<!-- #enddocregion mat-menu-trigger-for -->\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item>Item 1</button>\n  <button mat-menu-item>Item 2</button>\n</mat-menu>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbWVudS9tZW51LW92ZXJ2aWV3L21lbnUtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1vdmVydmlldy9tZW51LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7QUFFekQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8sbUJBQW1COzhHQUFuQixtQkFBbUI7a0dBQW5CLG1CQUFtQixpRkNiaEMscVJBT0EsMkNESVksZUFBZSwyTkFBRSxhQUFhOzsyRkFFN0IsbUJBQW1CO2tCQU4vQixTQUFTOytCQUNFLHVCQUF1QixjQUVyQixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRNZW51TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBtZW51XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ21lbnUtb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRNZW51TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudU92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPCEtLSAjZG9jcmVnaW9uIG1hdC1tZW51LXRyaWdnZXItZm9yIC0tPlxuPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCI+TWVudTwvYnV0dG9uPlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC1tZW51LXRyaWdnZXItZm9yIC0tPlxuPG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SXRlbSAxPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5JdGVtIDI8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG4iXX0=