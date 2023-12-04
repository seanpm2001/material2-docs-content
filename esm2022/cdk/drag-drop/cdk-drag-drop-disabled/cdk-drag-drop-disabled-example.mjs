import { Component } from '@angular/core';
import { CdkDrag, CdkDropList, moveItemInArray } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop disabled
 */
export class CdkDragDropDisabledExample {
    constructor() {
        this.items = [
            { value: 'I can be dragged', disabled: false },
            { value: 'I cannot be dragged', disabled: true },
            { value: 'I can also be dragged', disabled: false },
        ];
    }
    drop(event) {
        moveItemInArray(this.items, event.previousIndex, event.currentIndex);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-next.2", ngImport: i0, type: CdkDragDropDisabledExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.0-next.2", type: CdkDragDropDisabledExample, isStandalone: true, selector: "cdk-drag-drop-disabled-example", ngImport: i0, template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  @for (item of items; track item) {\n    <div\n      class=\"example-box\"\n      cdkDrag\n      [cdkDragDisabled]=\"item.disabled\">{{item.value}}</div>\n  }\n</div>\n", styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box.cdk-drag-disabled {\n  background: #ccc;\n  cursor: not-allowed;\n  user-select: none;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-next.2", ngImport: i0, type: CdkDragDropDisabledExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-disabled-example', standalone: true, imports: [CdkDropList, CdkDrag], template: "<div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\n  @for (item of items; track item) {\n    <div\n      class=\"example-box\"\n      cdkDrag\n      [cdkDragDisabled]=\"item.disabled\">{{item.value}}</div>\n  }\n</div>\n", styles: [".example-list {\n  width: 500px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.example-box.cdk-drag-disabled {\n  background: #ccc;\n  cursor: not-allowed;\n  user-select: none;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWRpc2FibGVkL2Nkay1kcmFnLWRyb3AtZGlzYWJsZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1kaXNhYmxlZC9jZGstZHJhZy1kcm9wLWRpc2FibGVkLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBYyxPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBQyxNQUFNLHdCQUF3QixDQUFDOztBQUUxRjs7R0FFRztBQVFILE1BQU0sT0FBTywwQkFBMEI7SUFQdkM7UUFRRSxVQUFLLEdBQUc7WUFDTixFQUFDLEtBQUssRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFDO1lBQzVDLEVBQUMsS0FBSyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUM7WUFDOUMsRUFBQyxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBQztTQUNsRCxDQUFDO0tBS0g7SUFIQyxJQUFJLENBQUMsS0FBNEI7UUFDL0IsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDdkUsQ0FBQztxSEFUVSwwQkFBMEI7eUdBQTFCLDBCQUEwQiwwRkNidkMsMlBBUUEsbXJDREdZLFdBQVcsK2RBQUUsT0FBTzs7a0dBRW5CLDBCQUEwQjtrQkFQdEMsU0FBUzsrQkFDRSxnQ0FBZ0MsY0FHOUIsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIENka0RyYWcsIENka0Ryb3BMaXN0LCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgZGlzYWJsZWRcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1kaXNhYmxlZC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWRpc2FibGVkLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWRpc2FibGVkLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtEcm9wTGlzdCwgQ2RrRHJhZ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wRGlzYWJsZWRFeGFtcGxlIHtcbiAgaXRlbXMgPSBbXG4gICAge3ZhbHVlOiAnSSBjYW4gYmUgZHJhZ2dlZCcsIGRpc2FibGVkOiBmYWxzZX0sXG4gICAge3ZhbHVlOiAnSSBjYW5ub3QgYmUgZHJhZ2dlZCcsIGRpc2FibGVkOiB0cnVlfSxcbiAgICB7dmFsdWU6ICdJIGNhbiBhbHNvIGJlIGRyYWdnZWQnLCBkaXNhYmxlZDogZmFsc2V9LFxuICBdO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xuICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLml0ZW1zLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICB9XG59XG4iLCI8ZGl2IGNka0Ryb3BMaXN0IGNsYXNzPVwiZXhhbXBsZS1saXN0XCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cbiAgQGZvciAoaXRlbSBvZiBpdGVtczsgdHJhY2sgaXRlbSkge1xuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1ib3hcIlxuICAgICAgY2RrRHJhZ1xuICAgICAgW2Nka0RyYWdEaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkXCI+e3tpdGVtLnZhbHVlfX08L2Rpdj5cbiAgfVxuPC9kaXY+XG4iXX0=