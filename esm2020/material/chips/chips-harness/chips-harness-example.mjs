import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/legacy-chips";
/**
 * @title Testing with MatChipsHarness
 */
export class ChipsHarnessExample {
    constructor() {
        this.isDisabled = false;
        this.remove = jasmine.createSpy('remove spy');
        this.add = jasmine.createSpy('add spy');
    }
}
ChipsHarnessExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ChipsHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
ChipsHarnessExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.1", type: ChipsHarnessExample, selector: "chips-harness-example", ngImport: i0, template: "<mat-chip-list\n    [disabled]=\"isDisabled\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip (removed)=\"remove()\">Chip 1</mat-chip>\n  <mat-chip (removed)=\"remove()\">Chip 2 <span matChipRemove>remove_icon</span></mat-chip>\n  <mat-chip (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip>\n</mat-chip-list>\n", dependencies: [{ kind: "component", type: i1.MatLegacyChipList, selector: "mat-chip-list", inputs: ["role", "aria-describedby", "errorStateMatcher", "multiple", "compareWith", "value", "required", "placeholder", "disabled", "aria-orientation", "selectable", "tabIndex"], outputs: ["change", "valueChange"], exportAs: ["matChipList"] }, { kind: "directive", type: i1.MatLegacyChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["color", "disableRipple", "tabIndex", "role", "selected", "value", "selectable", "disabled", "removable"], outputs: ["selectionChange", "destroyed", "removed"], exportAs: ["matChip"] }, { kind: "directive", type: i1.MatLegacyChipRemove, selector: "[matChipRemove]" }, { kind: "directive", type: i1.MatLegacyChipAvatar, selector: "mat-chip-avatar, [matChipAvatar]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.1", ngImport: i0, type: ChipsHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-harness-example', template: "<mat-chip-list\n    [disabled]=\"isDisabled\"\n    [aria-orientation]=\"'horizontal'\">\n  <mat-chip (removed)=\"remove()\">Chip 1</mat-chip>\n  <mat-chip (removed)=\"remove()\">Chip 2 <span matChipRemove>remove_icon</span></mat-chip>\n  <mat-chip (removed)=\"remove()\"><mat-chip-avatar>C</mat-chip-avatar>Chip 4</mat-chip>\n</mat-chip-list>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2hpcHMvY2hpcHMtaGFybmVzcy9jaGlwcy1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1oYXJuZXNzL2NoaXBzLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyxtQkFBbUI7SUFKaEM7UUFLRSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFdBQU0sR0FBZSxPQUFPLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELFFBQUcsR0FBZSxPQUFPLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ2hEOztnSEFKWSxtQkFBbUI7b0dBQW5CLG1CQUFtQiw2RENUaEMsMFZBT0E7MkZERWEsbUJBQW1CO2tCQUovQixTQUFTOytCQUNFLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdENoaXBzSGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjaGlwcy1oYXJuZXNzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWhhcm5lc3MtZXhhbXBsZS5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNIYXJuZXNzRXhhbXBsZSB7XG4gIGlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgcmVtb3ZlOiAoKSA9PiB2b2lkID0gamFzbWluZS5jcmVhdGVTcHkoJ3JlbW92ZSBzcHknKTtcbiAgYWRkOiAoKSA9PiB2b2lkID0gamFzbWluZS5jcmVhdGVTcHkoJ2FkZCBzcHknKTtcbn1cbiIsIjxtYXQtY2hpcC1saXN0XG4gICAgW2Rpc2FibGVkXT1cImlzRGlzYWJsZWRcIlxuICAgIFthcmlhLW9yaWVudGF0aW9uXT1cIidob3Jpem9udGFsJ1wiPlxuICA8bWF0LWNoaXAgKHJlbW92ZWQpPVwicmVtb3ZlKClcIj5DaGlwIDE8L21hdC1jaGlwPlxuICA8bWF0LWNoaXAgKHJlbW92ZWQpPVwicmVtb3ZlKClcIj5DaGlwIDIgPHNwYW4gbWF0Q2hpcFJlbW92ZT5yZW1vdmVfaWNvbjwvc3Bhbj48L21hdC1jaGlwPlxuICA8bWF0LWNoaXAgKHJlbW92ZWQpPVwicmVtb3ZlKClcIj48bWF0LWNoaXAtYXZhdGFyPkM8L21hdC1jaGlwLWF2YXRhcj5DaGlwIDQ8L21hdC1jaGlwPlxuPC9tYXQtY2hpcC1saXN0PlxuIl19