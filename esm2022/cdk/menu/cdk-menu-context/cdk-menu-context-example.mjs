import { Component } from '@angular/core';
import { CdkContextMenuTrigger, CdkMenuItem, CdkMenu } from '@angular/cdk/menu';
import * as i0 from "@angular/core";
/** @title Context menu. */
export class CdkMenuContextExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CdkMenuContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: CdkMenuContextExample, isStandalone: true, selector: "cdk-menu-context-example", exportAs: ["cdkMenuContextExample"], ngImport: i0, template: "<div [cdkContextMenuTriggerFor]=\"context_menu\">\n  Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\n  would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\n  wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\n  of the dark side that he could even keep the ones he cared about from dying. The dark side of the\n  Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the\n  only thing he was afraid of was losing his power, which eventually, of course, he did.\n  Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his\n  sleep. Ironic. He could save others from death, but not himself.\n</div>\n\n<ng-template #context_menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Link</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"], dependencies: [{ kind: "directive", type: CdkContextMenuTrigger, selector: "[cdkContextMenuTriggerFor]", inputs: ["cdkContextMenuTriggerFor", "cdkContextMenuPosition", "cdkContextMenuTriggerData", "cdkContextMenuDisabled"], outputs: ["cdkContextMenuOpened", "cdkContextMenuClosed"], exportAs: ["cdkContextMenuTriggerFor"] }, { kind: "directive", type: CdkMenu, selector: "[cdkMenu]", outputs: ["closed"], exportAs: ["cdkMenu"] }, { kind: "directive", type: CdkMenuItem, selector: "[cdkMenuItem]", inputs: ["cdkMenuItemDisabled", "cdkMenuitemTypeaheadLabel"], outputs: ["cdkMenuItemTriggered"], exportAs: ["cdkMenuItem"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CdkMenuContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-menu-context-example', exportAs: 'cdkMenuContextExample', standalone: true, imports: [CdkContextMenuTrigger, CdkMenu, CdkMenuItem], template: "<div [cdkContextMenuTriggerFor]=\"context_menu\">\n  Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi\n  would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so\n  wise he could use the Force to influence the midichlorians to create life\u2026 He had such a knowledge\n  of the dark side that he could even keep the ones he cared about from dying. The dark side of the\n  Force is a pathway to many abilities some consider to be unnatural. He became so powerful\u2026 the\n  only thing he was afraid of was losing his power, which eventually, of course, he did.\n  Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his\n  sleep. Ironic. He could save others from death, but not himself.\n</div>\n\n<ng-template #context_menu>\n  <div class=\"example-menu\" cdkMenu>\n    <button class=\"example-menu-item\" cdkMenuItem>Cut</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Copy</button>\n    <button class=\"example-menu-item\" cdkMenuItem>Link</button>\n  </div>\n</ng-template>\n", styles: [".example-menu {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgb(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item {\n  background-color: transparent;\n  cursor: pointer;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item:active {\n  background-color: rgb(170, 170, 170);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtY29udGV4dC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL21lbnUvY2RrLW1lbnUtY29udGV4dC9jZGstbWVudS1jb250ZXh0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbWVudS9jZGstbWVudS1jb250ZXh0L2Nkay1tZW51LWNvbnRleHQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLHFCQUFxQixFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7QUFFOUUsMkJBQTJCO0FBUzNCLE1BQU0sT0FBTyxxQkFBcUI7OEdBQXJCLHFCQUFxQjtrR0FBckIscUJBQXFCLHlIQ1psQyw0bUNBa0JBLHFvQkRSWSxxQkFBcUIsaVNBQUUsT0FBTyxrR0FBRSxXQUFXOzsyRkFFMUMscUJBQXFCO2tCQVJqQyxTQUFTOytCQUNFLDBCQUEwQixZQUMxQix1QkFBdUIsY0FHckIsSUFBSSxXQUNQLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrQ29udGV4dE1lbnVUcmlnZ2VyLCBDZGtNZW51SXRlbSwgQ2RrTWVudX0gZnJvbSAnQGFuZ3VsYXIvY2RrL21lbnUnO1xuXG4vKiogQHRpdGxlIENvbnRleHQgbWVudS4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1tZW51LWNvbnRleHQtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTWVudUNvbnRleHRFeGFtcGxlJyxcbiAgc3R5bGVVcmw6ICdjZGstbWVudS1jb250ZXh0LWV4YW1wbGUuY3NzJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbWVudS1jb250ZXh0LWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtDb250ZXh0TWVudVRyaWdnZXIsIENka01lbnUsIENka01lbnVJdGVtXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrTWVudUNvbnRleHRFeGFtcGxlIHt9XG4iLCI8ZGl2IFtjZGtDb250ZXh0TWVudVRyaWdnZXJGb3JdPVwiY29udGV4dF9tZW51XCI+XG4gIERpZCB5b3UgZXZlciBoZWFyIHRoZSB0cmFnZWR5IG9mIERhcnRoIFBsYWd1ZWlzIFRoZSBXaXNlPyBJIHRob3VnaHQgbm90LiBJdCdzIG5vdCBhIHN0b3J5IHRoZSBKZWRpXG4gIHdvdWxkIHRlbGwgeW91LiBJdCdzIGEgU2l0aCBsZWdlbmQuIERhcnRoIFBsYWd1ZWlzIHdhcyBhIERhcmsgTG9yZCBvZiB0aGUgU2l0aCwgc28gcG93ZXJmdWwgYW5kIHNvXG4gIHdpc2UgaGUgY291bGQgdXNlIHRoZSBGb3JjZSB0byBpbmZsdWVuY2UgdGhlIG1pZGljaGxvcmlhbnMgdG8gY3JlYXRlIGxpZmXigKYgSGUgaGFkIHN1Y2ggYSBrbm93bGVkZ2VcbiAgb2YgdGhlIGRhcmsgc2lkZSB0aGF0IGhlIGNvdWxkIGV2ZW4ga2VlcCB0aGUgb25lcyBoZSBjYXJlZCBhYm91dCBmcm9tIGR5aW5nLiBUaGUgZGFyayBzaWRlIG9mIHRoZVxuICBGb3JjZSBpcyBhIHBhdGh3YXkgdG8gbWFueSBhYmlsaXRpZXMgc29tZSBjb25zaWRlciB0byBiZSB1bm5hdHVyYWwuIEhlIGJlY2FtZSBzbyBwb3dlcmZ1bOKApiB0aGVcbiAgb25seSB0aGluZyBoZSB3YXMgYWZyYWlkIG9mIHdhcyBsb3NpbmcgaGlzIHBvd2VyLCB3aGljaCBldmVudHVhbGx5LCBvZiBjb3Vyc2UsIGhlIGRpZC5cbiAgVW5mb3J0dW5hdGVseSwgaGUgdGF1Z2h0IGhpcyBhcHByZW50aWNlIGV2ZXJ5dGhpbmcgaGUga25ldywgdGhlbiBoaXMgYXBwcmVudGljZSBraWxsZWQgaGltIGluIGhpc1xuICBzbGVlcC4gSXJvbmljLiBIZSBjb3VsZCBzYXZlIG90aGVycyBmcm9tIGRlYXRoLCBidXQgbm90IGhpbXNlbGYuXG48L2Rpdj5cblxuPG5nLXRlbXBsYXRlICNjb250ZXh0X21lbnU+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLW1lbnVcIiBjZGtNZW51PlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkN1dDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPkNvcHk8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1tZW51LWl0ZW1cIiBjZGtNZW51SXRlbT5MaW5rPC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==