import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/menu";
/**
 * @title Testing with MatMenuHarness
 */
export class MenuHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: MenuHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.5", type: MenuHarnessExample, isStandalone: true, selector: "menu-harness-example", ngImport: i0, template: "<button type=\"button\" [matMenuTriggerFor]=\"settingsMenu\">Settings</button>\n<button type=\"button\" disabled [matMenuTriggerFor]=\"settingsMenu\">Disabled menu</button>\n\n<mat-menu #settingsMenu>\n  <menu mat-menu-item>Profile</menu>\n  <menu mat-menu-item>Account</menu>\n</mat-menu>\n", dependencies: [{ kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i1.MatMenu, selector: "mat-menu", inputs: ["backdropClass", "aria-label", "aria-labelledby", "aria-describedby", "xPosition", "yPosition", "overlapTrigger", "hasBackdrop", "class", "classList"], outputs: ["closed", "close"], exportAs: ["matMenu"] }, { kind: "component", type: i1.MatMenuItem, selector: "[mat-menu-item]", inputs: ["role", "disabled", "disableRipple"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i1.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", inputs: ["mat-menu-trigger-for", "matMenuTriggerFor", "matMenuTriggerData", "matMenuTriggerRestoreFocus"], outputs: ["menuOpened", "onMenuOpen", "menuClosed", "onMenuClose"], exportAs: ["matMenuTrigger"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: MenuHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'menu-harness-example', standalone: true, imports: [MatMenuModule], template: "<button type=\"button\" [matMenuTriggerFor]=\"settingsMenu\">Settings</button>\n<button type=\"button\" disabled [matMenuTriggerFor]=\"settingsMenu\">Disabled menu</button>\n\n<mat-menu #settingsMenu>\n  <menu mat-menu-item>Profile</menu>\n  <menu mat-menu-item>Account</menu>\n</mat-menu>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9tZW51L21lbnUtaGFybmVzcy9tZW51LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1oYXJuZXNzL21lbnUtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDs7R0FFRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7cUhBQWxCLGtCQUFrQjt5R0FBbEIsa0JBQWtCLGdGQ1ovQixxU0FPQSwyQ0RHWSxhQUFhOztrR0FFWixrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0Usc0JBQXNCLGNBRXBCLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRNZW51SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtZW51LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRNZW51TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVudUhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBbbWF0TWVudVRyaWdnZXJGb3JdPVwic2V0dGluZ3NNZW51XCI+U2V0dGluZ3M8L2J1dHRvbj5cbjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRpc2FibGVkIFttYXRNZW51VHJpZ2dlckZvcl09XCJzZXR0aW5nc01lbnVcIj5EaXNhYmxlZCBtZW51PC9idXR0b24+XG5cbjxtYXQtbWVudSAjc2V0dGluZ3NNZW51PlxuICA8bWVudSBtYXQtbWVudS1pdGVtPlByb2ZpbGU8L21lbnU+XG4gIDxtZW51IG1hdC1tZW51LWl0ZW0+QWNjb3VudDwvbWVudT5cbjwvbWF0LW1lbnU+XG4iXX0=