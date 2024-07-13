import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/chips";
import * as i3 from "@angular/material/icon";
/**
 * @title Chips with input
 */
export class ChipsInputExample {
    constructor() {
        this.addOnBlur = true;
        this.separatorKeysCodes = [ENTER, COMMA];
        this.fruits = signal([{ name: 'Lemon' }, { name: 'Lime' }, { name: 'Apple' }]);
        this.announcer = inject(LiveAnnouncer);
    }
    add(event) {
        const value = (event.value || '').trim();
        // Add our fruit
        if (value) {
            this.fruits.update(fruits => [...fruits, { name: value }]);
        }
        // Clear the input value
        event.chipInput.clear();
    }
    remove(fruit) {
        this.fruits.update(fruits => {
            const index = fruits.indexOf(fruit);
            if (index < 0) {
                return fruits;
            }
            fruits.splice(index, 1);
            this.announcer.announce(`Removed ${fruit.name}`);
            return [...fruits];
        });
    }
    edit(fruit, event) {
        const value = event.value.trim();
        // Remove fruit if it no longer has a name
        if (!value) {
            this.remove(fruit);
            return;
        }
        // Edit existing fruit
        this.fruits.update(fruits => {
            const index = fruits.indexOf(fruit);
            if (index >= 0) {
                fruits[index].name = value;
                return [...fruits];
            }
            return fruits;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: ChipsInputExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0", type: ChipsInputExample, isStandalone: true, selector: "chips-input-example", ngImport: i0, template: "<mat-form-field class=\"example-chip-list\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    @for (fruit of fruits(); track fruit) {\n      <mat-chip-row\n        (removed)=\"remove(fruit)\"\n        [editable]=\"true\"\n        (edited)=\"edit(fruit, $event)\"\n        [aria-description]=\"'press enter to edit ' + fruit.name\"\n      >\n        {{fruit.name}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n    <input\n      placeholder=\"New fruit...\"\n      [matChipInputFor]=\"chipGrid\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\"\n    />\n  </mat-chip-grid>\n</mat-form-field>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i2.MatChipGrid, selector: "mat-chip-grid", inputs: ["disabled", "placeholder", "required", "value", "errorStateMatcher"], outputs: ["change", "valueChange"] }, { kind: "directive", type: i2.MatChipInput, selector: "input[matChipInputFor]", inputs: ["matChipInputFor", "matChipInputAddOnBlur", "matChipInputSeparatorKeyCodes", "placeholder", "id", "disabled"], outputs: ["matChipInputTokenEnd"], exportAs: ["matChipInput", "matChipInputFor"] }, { kind: "directive", type: i2.MatChipRemove, selector: "[matChipRemove]" }, { kind: "component", type: i2.MatChipRow, selector: "mat-chip-row, [mat-chip-row], mat-basic-chip-row, [mat-basic-chip-row]", inputs: ["editable"], outputs: ["edited"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: ChipsInputExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-input-example', standalone: true, imports: [MatFormFieldModule, MatChipsModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<mat-form-field class=\"example-chip-list\">\n  <mat-label>Favorite Fruits</mat-label>\n  <mat-chip-grid #chipGrid aria-label=\"Enter fruits\">\n    @for (fruit of fruits(); track fruit) {\n      <mat-chip-row\n        (removed)=\"remove(fruit)\"\n        [editable]=\"true\"\n        (edited)=\"edit(fruit, $event)\"\n        [aria-description]=\"'press enter to edit ' + fruit.name\"\n      >\n        {{fruit.name}}\n        <button matChipRemove [attr.aria-label]=\"'remove ' + fruit.name\">\n          <mat-icon>cancel</mat-icon>\n        </button>\n      </mat-chip-row>\n    }\n    <input\n      placeholder=\"New fruit...\"\n      [matChipInputFor]=\"chipGrid\"\n      [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n      [matChipInputAddOnBlur]=\"addOnBlur\"\n      (matChipInputTokenEnd)=\"add($event)\"\n    />\n  </mat-chip-grid>\n</mat-form-field>\n", styles: [".example-chip-list {\n  width: 100%;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtaW5wdXQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoaXBzL2NoaXBzLWlucHV0L2NoaXBzLWlucHV0LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1pbnB1dC9jaGlwcy1pbnB1dC1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pGLE9BQU8sRUFBd0MsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDOUYsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7QUFDaEUsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDOzs7OztBQU1yRDs7R0FFRztBQVNILE1BQU0sT0FBTyxpQkFBaUI7SUFSOUI7UUFTVyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLHVCQUFrQixHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBVSxDQUFDO1FBQzdDLFdBQU0sR0FBRyxNQUFNLENBQVUsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0UsY0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztLQThDNUM7SUE1Q0MsR0FBRyxDQUFDLEtBQXdCO1FBQzFCLE1BQU0sS0FBSyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUV6QyxnQkFBZ0I7UUFDaEIsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLE1BQU0sRUFBRSxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztRQUVELHdCQUF3QjtRQUN4QixLQUFLLENBQUMsU0FBVSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBWTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNkLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7WUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ2pELE9BQU8sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELElBQUksQ0FBQyxLQUFZLEVBQUUsS0FBeUI7UUFDMUMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVqQywwQ0FBMEM7UUFDMUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNuQixPQUFPO1FBQ1QsQ0FBQztRQUVELHNCQUFzQjtRQUN0QixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3BDLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNmLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztZQUNyQixDQUFDO1lBQ0QsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzhHQWpEVSxpQkFBaUI7a0dBQWpCLGlCQUFpQiwrRUN0QjlCLHkyQkF5QkEsa0dETlksa0JBQWtCLDBTQUFFLGNBQWMsNHVCQUFFLGFBQWE7OzJGQUdoRCxpQkFBaUI7a0JBUjdCLFNBQVM7K0JBQ0UscUJBQXFCLGNBR25CLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxhQUFhLENBQUMsbUJBQzNDLHVCQUF1QixDQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpdmVBbm5vdW5jZXJ9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7Q09NTUEsIEVOVEVSfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBpbmplY3QsIHNpZ25hbH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdENoaXBFZGl0ZWRFdmVudCwgTWF0Q2hpcElucHV0RXZlbnQsIE1hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQge01hdEZvcm1GaWVsZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZydWl0IHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBDaGlwcyB3aXRoIGlucHV0XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWlucHV0LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoaXBzLWlucHV0LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnY2hpcHMtaW5wdXQtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRDaGlwc01vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDaGlwc0lucHV0RXhhbXBsZSB7XG4gIHJlYWRvbmx5IGFkZE9uQmx1ciA9IHRydWU7XG4gIHJlYWRvbmx5IHNlcGFyYXRvcktleXNDb2RlcyA9IFtFTlRFUiwgQ09NTUFdIGFzIGNvbnN0O1xuICByZWFkb25seSBmcnVpdHMgPSBzaWduYWw8RnJ1aXRbXT4oW3tuYW1lOiAnTGVtb24nfSwge25hbWU6ICdMaW1lJ30sIHtuYW1lOiAnQXBwbGUnfV0pO1xuICByZWFkb25seSBhbm5vdW5jZXIgPSBpbmplY3QoTGl2ZUFubm91bmNlcik7XG5cbiAgYWRkKGV2ZW50OiBNYXRDaGlwSW5wdXRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gKGV2ZW50LnZhbHVlIHx8ICcnKS50cmltKCk7XG5cbiAgICAvLyBBZGQgb3VyIGZydWl0XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmZydWl0cy51cGRhdGUoZnJ1aXRzID0+IFsuLi5mcnVpdHMsIHtuYW1lOiB2YWx1ZX1dKTtcbiAgICB9XG5cbiAgICAvLyBDbGVhciB0aGUgaW5wdXQgdmFsdWVcbiAgICBldmVudC5jaGlwSW5wdXQhLmNsZWFyKCk7XG4gIH1cblxuICByZW1vdmUoZnJ1aXQ6IEZydWl0KTogdm9pZCB7XG4gICAgdGhpcy5mcnVpdHMudXBkYXRlKGZydWl0cyA9PiB7XG4gICAgICBjb25zdCBpbmRleCA9IGZydWl0cy5pbmRleE9mKGZydWl0KTtcbiAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgcmV0dXJuIGZydWl0cztcbiAgICAgIH1cblxuICAgICAgZnJ1aXRzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLmFubm91bmNlci5hbm5vdW5jZShgUmVtb3ZlZCAke2ZydWl0Lm5hbWV9YCk7XG4gICAgICByZXR1cm4gWy4uLmZydWl0c107XG4gICAgfSk7XG4gIH1cblxuICBlZGl0KGZydWl0OiBGcnVpdCwgZXZlbnQ6IE1hdENoaXBFZGl0ZWRFdmVudCkge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudmFsdWUudHJpbSgpO1xuXG4gICAgLy8gUmVtb3ZlIGZydWl0IGlmIGl0IG5vIGxvbmdlciBoYXMgYSBuYW1lXG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5yZW1vdmUoZnJ1aXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEVkaXQgZXhpc3RpbmcgZnJ1aXRcbiAgICB0aGlzLmZydWl0cy51cGRhdGUoZnJ1aXRzID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZnJ1aXRzLmluZGV4T2YoZnJ1aXQpO1xuICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgZnJ1aXRzW2luZGV4XS5uYW1lID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBbLi4uZnJ1aXRzXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBmcnVpdHM7XG4gICAgfSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImV4YW1wbGUtY2hpcC1saXN0XCI+XG4gIDxtYXQtbGFiZWw+RmF2b3JpdGUgRnJ1aXRzPC9tYXQtbGFiZWw+XG4gIDxtYXQtY2hpcC1ncmlkICNjaGlwR3JpZCBhcmlhLWxhYmVsPVwiRW50ZXIgZnJ1aXRzXCI+XG4gICAgQGZvciAoZnJ1aXQgb2YgZnJ1aXRzKCk7IHRyYWNrIGZydWl0KSB7XG4gICAgICA8bWF0LWNoaXAtcm93XG4gICAgICAgIChyZW1vdmVkKT1cInJlbW92ZShmcnVpdClcIlxuICAgICAgICBbZWRpdGFibGVdPVwidHJ1ZVwiXG4gICAgICAgIChlZGl0ZWQpPVwiZWRpdChmcnVpdCwgJGV2ZW50KVwiXG4gICAgICAgIFthcmlhLWRlc2NyaXB0aW9uXT1cIidwcmVzcyBlbnRlciB0byBlZGl0ICcgKyBmcnVpdC5uYW1lXCJcbiAgICAgID5cbiAgICAgICAge3tmcnVpdC5uYW1lfX1cbiAgICAgICAgPGJ1dHRvbiBtYXRDaGlwUmVtb3ZlIFthdHRyLmFyaWEtbGFiZWxdPVwiJ3JlbW92ZSAnICsgZnJ1aXQubmFtZVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5jYW5jZWw8L21hdC1pY29uPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvbWF0LWNoaXAtcm93PlxuICAgIH1cbiAgICA8aW5wdXRcbiAgICAgIHBsYWNlaG9sZGVyPVwiTmV3IGZydWl0Li4uXCJcbiAgICAgIFttYXRDaGlwSW5wdXRGb3JdPVwiY2hpcEdyaWRcIlxuICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXG4gICAgICBbbWF0Q2hpcElucHV0QWRkT25CbHVyXT1cImFkZE9uQmx1clwiXG4gICAgICAobWF0Q2hpcElucHV0VG9rZW5FbmQpPVwiYWRkKCRldmVudClcIlxuICAgIC8+XG4gIDwvbWF0LWNoaXAtZ3JpZD5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=