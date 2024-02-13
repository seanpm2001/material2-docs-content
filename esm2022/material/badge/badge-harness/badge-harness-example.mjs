import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/badge";
/**
 * @title Testing with MatBadgeHarness
 */
export class BadgeHarnessExample {
    constructor() {
        this.simpleContent = 'S';
        this.overlap = true;
        this.disabled = true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: BadgeHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: BadgeHarnessExample, isStandalone: true, selector: "badge-harness-example", ngImport: i0, template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatBadgeModule }, { kind: "directive", type: i2.MatBadge, selector: "[matBadge]", inputs: ["matBadgeColor", "matBadgeOverlap", "matBadgeDisabled", "matBadgePosition", "matBadge", "matBadgeDescription", "matBadgeSize", "matBadgeHidden"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: BadgeHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'badge-harness-example', standalone: true, imports: [MatButtonModule, MatBadgeModule], template: "<button mat-button id=\"simple\" [matBadge]=\"simpleContent\">Simple</button>\n<button mat-button\n    id=\"overlapping\"\n    matBadge=\"O\"\n    [matBadgeOverlap]=\"overlap\">Overlapping</button>\n<button\n    mat-button\n    id=\"disabled\"\n    matBadge=\"D\"\n    [matBadgeDisabled]=\"disabled\">Disabled</button>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFkZ2UtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYmFkZ2UvYmFkZ2UtaGFybmVzcy9iYWRnZS1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9iYWRnZS9iYWRnZS1oYXJuZXNzL2JhZGdlLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUV6RDs7R0FFRztBQU9ILE1BQU0sT0FBTyxtQkFBbUI7SUFOaEM7UUFPRSxrQkFBYSxHQUFHLEdBQUcsQ0FBQztRQUNwQixZQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2YsYUFBUSxHQUFHLElBQUksQ0FBQztLQUNqQjttSEFKWSxtQkFBbUI7dUdBQW5CLG1CQUFtQixpRkNiaEMsa1VBVUEsMkNEQ1ksZUFBZSwyTkFBRSxjQUFjOztnR0FFOUIsbUJBQW1CO2tCQU4vQixTQUFTOytCQUNFLHVCQUF1QixjQUVyQixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCYWRnZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYmFkZ2UnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRCYWRnZUhhcm5lc3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmFkZ2UtaGFybmVzcy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdiYWRnZS1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Nb2R1bGUsIE1hdEJhZGdlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQmFkZ2VIYXJuZXNzRXhhbXBsZSB7XG4gIHNpbXBsZUNvbnRlbnQgPSAnUyc7XG4gIG92ZXJsYXAgPSB0cnVlO1xuICBkaXNhYmxlZCA9IHRydWU7XG59XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gaWQ9XCJzaW1wbGVcIiBbbWF0QmFkZ2VdPVwic2ltcGxlQ29udGVudFwiPlNpbXBsZTwvYnV0dG9uPlxuPGJ1dHRvbiBtYXQtYnV0dG9uXG4gICAgaWQ9XCJvdmVybGFwcGluZ1wiXG4gICAgbWF0QmFkZ2U9XCJPXCJcbiAgICBbbWF0QmFkZ2VPdmVybGFwXT1cIm92ZXJsYXBcIj5PdmVybGFwcGluZzwvYnV0dG9uPlxuPGJ1dHRvblxuICAgIG1hdC1idXR0b25cbiAgICBpZD1cImRpc2FibGVkXCJcbiAgICBtYXRCYWRnZT1cIkRcIlxuICAgIFttYXRCYWRnZURpc2FibGVkXT1cImRpc2FibGVkXCI+RGlzYWJsZWQ8L2J1dHRvbj5cbiJdfQ==