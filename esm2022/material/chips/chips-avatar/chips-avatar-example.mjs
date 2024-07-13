import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Chips avatar
 * @description An avatar inside a chip
 */
export class ChipsAvatarExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: ChipsAvatarExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: ChipsAvatarExample, isStandalone: true, selector: "chips-avatar-example", ngImport: i0, template: "<mat-chip-set aria-label=\"Dog selection\">\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog one\n  </mat-chip>\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog two\n  </mat-chip>\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog three\n  </mat-chip>\n</mat-chip-set>\n", styles: [""], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["role", "id", "aria-label", "aria-description", "value", "color", "removable", "highlighted", "disableRipple", "disabled", "tabIndex"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "directive", type: i1.MatChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }, { kind: "component", type: i1.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role", "tabIndex"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: ChipsAvatarExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-avatar-example', standalone: true, imports: [MatChipsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-chip-set aria-label=\"Dog selection\">\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog one\n  </mat-chip>\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog two\n  </mat-chip>\n  <mat-chip>\n    <img\n      matChipAvatar\n      src=\"https://material.angular.io/assets/img/examples/shiba1.jpg\"\n      alt=\"Photo of a Shiba Inu\"\n    />\n    Dog three\n  </mat-chip>\n</mat-chip-set>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtYXZhdGFyLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1hdmF0YXIvY2hpcHMtYXZhdGFyLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRXZEOzs7R0FHRztBQVNILE1BQU0sT0FBTyxrQkFBa0I7OEdBQWxCLGtCQUFrQjtrR0FBbEIsa0JBQWtCLGdGQ2YvQiwrbkJBMEJBLHlERGRZLGNBQWM7OzJGQUdiLGtCQUFrQjtrQkFSOUIsU0FBUzsrQkFDRSxzQkFBc0IsY0FHcEIsSUFBSSxXQUNQLENBQUMsY0FBYyxDQUFDLG1CQUNSLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRDaGlwc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuXG4vKipcbiAqIEB0aXRsZSBDaGlwcyBhdmF0YXJcbiAqIEBkZXNjcmlwdGlvbiBBbiBhdmF0YXIgaW5zaWRlIGEgY2hpcFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1hdmF0YXItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2hpcHMtYXZhdGFyLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnY2hpcHMtYXZhdGFyLWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdENoaXBzTW9kdWxlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIENoaXBzQXZhdGFyRXhhbXBsZSB7fVxuIiwiPG1hdC1jaGlwLXNldCBhcmlhLWxhYmVsPVwiRG9nIHNlbGVjdGlvblwiPlxuICA8bWF0LWNoaXA+XG4gICAgPGltZ1xuICAgICAgbWF0Q2hpcEF2YXRhclxuICAgICAgc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmExLmpwZ1wiXG4gICAgICBhbHQ9XCJQaG90byBvZiBhIFNoaWJhIEludVwiXG4gICAgLz5cbiAgICBEb2cgb25lXG4gIDwvbWF0LWNoaXA+XG4gIDxtYXQtY2hpcD5cbiAgICA8aW1nXG4gICAgICBtYXRDaGlwQXZhdGFyXG4gICAgICBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnXCJcbiAgICAgIGFsdD1cIlBob3RvIG9mIGEgU2hpYmEgSW51XCJcbiAgICAvPlxuICAgIERvZyB0d29cbiAgPC9tYXQtY2hpcD5cbiAgPG1hdC1jaGlwPlxuICAgIDxpbWdcbiAgICAgIG1hdENoaXBBdmF0YXJcbiAgICAgIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGdcIlxuICAgICAgYWx0PVwiUGhvdG8gb2YgYSBTaGliYSBJbnVcIlxuICAgIC8+XG4gICAgRG9nIHRocmVlXG4gIDwvbWF0LWNoaXA+XG48L21hdC1jaGlwLXNldD5cbiJdfQ==