import { Component } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/tooltip";
/**
 * @title Tooltip that can be manually shown/hidden.
 */
export class TooltipManualExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: TooltipManualExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.1", type: TooltipManualExample, isStandalone: true, selector: "tooltip-manual-example", ngImport: i0, template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: TooltipManualExample, decorators: [{
            type: Component,
            args: [{ selector: 'tooltip-manual-example', standalone: true, imports: [MatButtonModule, MatTooltipModule], template: "<div>\n  <span> Click the following buttons to... </span>\n  <button mat-button\n          (click)=\"tooltip.show()\"\n          aria-label=\"Show tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    show\n  </button>\n  <button mat-button\n          (click)=\"tooltip.hide()\"\n          aria-label=\"Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    hide\n  </button>\n  <button mat-button\n          (click)=\"tooltip.toggle()\"\n          aria-label=\"Show/Hide tooltip on the button at the end of this section\"\n          class=\"example-action-button\">\n    toggle show/hide\n  </button>\n</div>\n\n<button mat-raised-button #tooltip=\"matTooltip\"\n        matTooltip=\"Info about the action\"\n        matTooltipPosition=\"right\"\n        aria-tooltip=\"Button that displays and hides a tooltip triggered by other buttons\">\n  Action\n</button>", styles: [".example-action-button {\n  margin-top: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1tYW51YWwtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3Rvb2x0aXAvdG9vbHRpcC1tYW51YWwvdG9vbHRpcC1tYW51YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7O0FBRXpEOztHQUVHO0FBUUgsTUFBTSxPQUFPLG9CQUFvQjtxSEFBcEIsb0JBQW9CO3lHQUFwQixvQkFBb0Isa0ZDZGpDLGc4QkEyQlMsMkdEZkcsZUFBZSwyTkFBRSxnQkFBZ0I7O2tHQUVoQyxvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0Usd0JBQXdCLGNBR3RCLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxnQkFBZ0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VG9vbHRpcE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuLyoqXG4gKiBAdGl0bGUgVG9vbHRpcCB0aGF0IGNhbiBiZSBtYW51YWxseSBzaG93bi9oaWRkZW4uXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3Rvb2x0aXAtbWFudWFsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAndG9vbHRpcC1tYW51YWwtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcE1hbnVhbEV4YW1wbGUge31cbiIsIjxkaXY+XG4gIDxzcGFuPiBDbGljayB0aGUgZm9sbG93aW5nIGJ1dHRvbnMgdG8uLi4gPC9zcGFuPlxuICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC5zaG93KClcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTaG93IHRvb2x0aXAgb24gdGhlIGJ1dHRvbiBhdCB0aGUgZW5kIG9mIHRoaXMgc2VjdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIj5cbiAgICBzaG93XG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC5oaWRlKClcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJIaWRlIHRvb2x0aXAgb24gdGhlIGJ1dHRvbiBhdCB0aGUgZW5kIG9mIHRoaXMgc2VjdGlvblwiXG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWFjdGlvbi1idXR0b25cIj5cbiAgICBoaWRlXG4gIDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1idXR0b25cbiAgICAgICAgICAoY2xpY2spPVwidG9vbHRpcC50b2dnbGUoKVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlNob3cvSGlkZSB0b29sdGlwIG9uIHRoZSBidXR0b24gYXQgdGhlIGVuZCBvZiB0aGlzIHNlY3Rpb25cIlxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCI+XG4gICAgdG9nZ2xlIHNob3cvaGlkZVxuICA8L2J1dHRvbj5cbjwvZGl2PlxuXG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uICN0b29sdGlwPVwibWF0VG9vbHRpcFwiXG4gICAgICAgIG1hdFRvb2x0aXA9XCJJbmZvIGFib3V0IHRoZSBhY3Rpb25cIlxuICAgICAgICBtYXRUb29sdGlwUG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgIGFyaWEtdG9vbHRpcD1cIkJ1dHRvbiB0aGF0IGRpc3BsYXlzIGFuZCBoaWRlcyBhIHRvb2x0aXAgdHJpZ2dlcmVkIGJ5IG90aGVyIGJ1dHRvbnNcIj5cbiAgQWN0aW9uXG48L2J1dHRvbj4iXX0=