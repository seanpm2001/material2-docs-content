import { Component } from '@angular/core';
import { CdkMenu, CdkMenuItem } from '@angular/cdk/menu';
import * as i0 from "@angular/core";
/** @title Gmail inline menu. */
export class CdkMenuInlineExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0+sha-37d1f71", ngImport: i0, type: CdkMenuInlineExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0+sha-37d1f71", type: CdkMenuInlineExample, isStandalone: true, selector: "cdk-menu-inline-example", exportAs: ["cdkMenuInlineExample"], ngImport: i0, template: "<div class=\"example-menu\" cdkMenu>\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\n</div>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], dependencies: [{ kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0+sha-37d1f71", ngImport: i0, type: CdkMenuInlineExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-inline-example', exportAs: 'cdkMenuInlineExample', standalone: true, imports: [CdkMenu, CdkMenuItem], template: "<div class=\"example-menu\" cdkMenu>\n  <button class=\"example-menu-item\" cdkMenuItem>Inbox</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Snoozed</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Important</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Sent</button>\n  <button class=\"example-menu-item\" cdkMenuItem>Drafts</button>\n  <button class=\"example-menu-item\" cdkMenuItem>All Mail</button>\n</div>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1pbmxpbmUvY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1pbmxpbmUvY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXZELGdDQUFnQztBQVNoQyxNQUFNLE9BQU8sb0JBQW9CO2lJQUFwQixvQkFBb0I7cUhBQXBCLG9CQUFvQix1SENaakMscWNBUUEscW9CREVZLE9BQU8sa0dBQUUsV0FBVzs7OEdBRW5CLG9CQUFvQjtrQkFSaEMsU0FBUzsrQkFDRSx5QkFBeUIsWUFDekIsc0JBQXNCLGNBR3BCLElBQUksV0FDUCxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka01lbnUsIENka01lbnVJdGVtfSBmcm9tICdAYW5ndWxhci9jZGsvbWVudSc7XG5cbi8qKiBAdGl0bGUgR21haWwgaW5saW5lIG1lbnUuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbWVudS1pbmxpbmUtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTWVudUlubGluZUV4YW1wbGUnLFxuICBzdHlsZVVybDogJ2Nkay1tZW51LWlubGluZS1leGFtcGxlLmNzcycsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLW1lbnUtaW5saW5lLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtNZW51LCBDZGtNZW51SXRlbV0sXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVJbmxpbmVFeGFtcGxlIHt9XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgY2RrTWVudT5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+SW5ib3g8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U25vb3plZDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5JbXBvcnRhbnQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+U2VudDwvYnV0dG9uPlxuICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5EcmFmdHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+QWxsIE1haWw8L2J1dHRvbj5cbjwvZGl2PlxuIl19