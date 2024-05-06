import { Component } from '@angular/core';
import { moveItemInArray, CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { MatChipsModule } from '@angular/material/chips';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/chips";
/**
 * @title Chips Drag and Drop
 */
export class ChipsDragDropExample {
    constructor() {
        this.vegetables = [
            { name: 'apple' },
            { name: 'banana' },
            { name: 'strawberry' },
            { name: 'orange' },
            { name: 'kiwi' },
            { name: 'cherry' },
        ];
    }
    drop(event) {
        moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.0", ngImport: i0, type: ChipsDragDropExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-rc.0", type: ChipsDragDropExample, isStandalone: true, selector: "chips-drag-drop-example", ngImport: i0, template: "<mat-chip-set\n  class=\"example-chip\"\n  cdkDropList\n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  @for (vegetable of vegetables; track vegetable) {\n    <mat-chip class=\"example-box\" cdkDrag>{{vegetable.name}}</mat-chip>\n  }\n</mat-chip-set>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "ngmodule", type: MatChipsModule }, { kind: "component", type: i1.MatChip, selector: "mat-basic-chip, [mat-basic-chip], mat-chip, [mat-chip]", inputs: ["role", "id", "aria-label", "aria-description", "value", "color", "removable", "highlighted", "disableRipple", "disabled", "tabIndex"], outputs: ["removed", "destroyed"], exportAs: ["matChip"] }, { kind: "component", type: i1.MatChipSet, selector: "mat-chip-set", inputs: ["disabled", "role", "tabIndex"] }, { kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.0", ngImport: i0, type: ChipsDragDropExample, decorators: [{
            type: Component,
            args: [{ selector: 'chips-drag-drop-example', standalone: true, imports: [MatChipsModule, CdkDropList, CdkDrag], template: "<mat-chip-set\n  class=\"example-chip\"\n  cdkDropList\n  cdkDropListOrientation=\"horizontal\"\n  (cdkDropListDropped)=\"drop($event)\">\n  @for (vegetable of vegetables; track vegetable) {\n    <mat-chip class=\"example-box\" cdkDrag>{{vegetable.name}}</mat-chip>\n  }\n</mat-chip-set>\n", styles: [".example-box.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-chip .cdk-drop-list-dragging {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1kcmFnLWRyb3AvY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGlwcy9jaGlwcy1kcmFnLWRyb3AvY2hpcHMtZHJhZy1kcm9wLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxlQUFlLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzFGLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBTXZEOztHQUVHO0FBUUgsTUFBTSxPQUFPLG9CQUFvQjtJQVBqQztRQVFFLGVBQVUsR0FBZ0I7WUFDeEIsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO1lBQ2YsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1lBQ2hCLEVBQUMsSUFBSSxFQUFFLFlBQVksRUFBQztZQUNwQixFQUFDLElBQUksRUFBRSxRQUFRLEVBQUM7WUFDaEIsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFDO1lBQ2QsRUFBQyxJQUFJLEVBQUUsUUFBUSxFQUFDO1NBQ2pCLENBQUM7S0FLSDtJQUhDLElBQUksQ0FBQyxLQUErQjtRQUNsQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1RSxDQUFDO21IQVpVLG9CQUFvQjt1R0FBcEIsb0JBQW9CLG1GQ2xCakMsbVNBU0EsbVFET1ksY0FBYyx1Y0FBRSxXQUFXLCtkQUFFLE9BQU87O2dHQUVuQyxvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0UseUJBQXlCLGNBR3ZCLElBQUksV0FDUCxDQUFDLGNBQWMsRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCBDZGtEcmFnLCBDZGtEcm9wTGlzdH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQge01hdENoaXBzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmVnZXRhYmxlIHtcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBDaGlwcyBEcmFnIGFuZCBEcm9wXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoaXBzLWRyYWctZHJvcC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjaGlwcy1kcmFnLWRyb3AtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdjaGlwcy1kcmFnLWRyb3AtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Q2hpcHNNb2R1bGUsIENka0Ryb3BMaXN0LCBDZGtEcmFnXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hpcHNEcmFnRHJvcEV4YW1wbGUge1xuICB2ZWdldGFibGVzOiBWZWdldGFibGVbXSA9IFtcbiAgICB7bmFtZTogJ2FwcGxlJ30sXG4gICAge25hbWU6ICdiYW5hbmEnfSxcbiAgICB7bmFtZTogJ3N0cmF3YmVycnknfSxcbiAgICB7bmFtZTogJ29yYW5nZSd9LFxuICAgIHtuYW1lOiAna2l3aSd9LFxuICAgIHtuYW1lOiAnY2hlcnJ5J30sXG4gIF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8VmVnZXRhYmxlW10+KSB7XG4gICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMudmVnZXRhYmxlcywgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgfVxufVxuIiwiPG1hdC1jaGlwLXNldFxuICBjbGFzcz1cImV4YW1wbGUtY2hpcFwiXG4gIGNka0Ryb3BMaXN0XG4gIGNka0Ryb3BMaXN0T3JpZW50YXRpb249XCJob3Jpem9udGFsXCJcbiAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgQGZvciAodmVnZXRhYmxlIG9mIHZlZ2V0YWJsZXM7IHRyYWNrIHZlZ2V0YWJsZSkge1xuICAgIDxtYXQtY2hpcCBjbGFzcz1cImV4YW1wbGUtYm94XCIgY2RrRHJhZz57e3ZlZ2V0YWJsZS5uYW1lfX08L21hdC1jaGlwPlxuICB9XG48L21hdC1jaGlwLXNldD5cbiJdfQ==