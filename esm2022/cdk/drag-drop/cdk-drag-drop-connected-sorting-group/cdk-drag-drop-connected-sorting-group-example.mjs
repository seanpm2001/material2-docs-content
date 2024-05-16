import { Component } from '@angular/core';
import { CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop connected sorting group
 */
export class CdkDragDropConnectedSortingGroupExample {
    constructor() {
        this.todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
        this.done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkDragDropConnectedSortingGroupExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0-rc.2", type: CdkDragDropConnectedSortingGroupExample, isStandalone: true, selector: "cdk-drag-drop-connected-sorting-group-example", ngImport: i0, template: "<div cdkDropListGroup>\n  <div class=\"example-container\">\n    <h2>To do</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"todo\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      @for (item of todo; track item) {\n        <div class=\"example-box\" cdkDrag>{{item}}</div>\n      }\n    </div>\n  </div>\n\n  <div class=\"example-container\">\n    <h2>Done</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"done\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      @for (item of done; track item) {\n        <div class=\"example-box\" cdkDrag>{{item}}</div>\n      }\n    </div>\n  </div>\n</div>\n", styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: CdkDropListGroup, selector: "[cdkDropListGroup]", inputs: ["cdkDropListGroupDisabled"], exportAs: ["cdkDropListGroup"] }, { kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-rc.2", ngImport: i0, type: CdkDragDropConnectedSortingGroupExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-connected-sorting-group-example', standalone: true, imports: [CdkDropListGroup, CdkDropList, CdkDrag], template: "<div cdkDropListGroup>\n  <div class=\"example-container\">\n    <h2>To do</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"todo\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      @for (item of todo; track item) {\n        <div class=\"example-box\" cdkDrag>{{item}}</div>\n      }\n    </div>\n  </div>\n\n  <div class=\"example-container\">\n    <h2>Done</h2>\n\n    <div\n      cdkDropList\n      [cdkDropListData]=\"done\"\n      class=\"example-list\"\n      (cdkDropListDropped)=\"drop($event)\">\n      @for (item of done; track item) {\n        <div class=\"example-box\" cdkDrag>{{item}}</div>\n      }\n    </div>\n  </div>\n</div>\n", styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwL2Nkay1kcmFnLWRyb3AtY29ubmVjdGVkLXNvcnRpbmctZ3JvdXAtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC9jZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFFTCxPQUFPLEVBQ1AsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixlQUFlLEVBQ2YsaUJBQWlCLEdBQ2xCLE1BQU0sd0JBQXdCLENBQUM7O0FBRWhDOztHQUVHO0FBUUgsTUFBTSxPQUFPLHVDQUF1QztJQVBwRDtRQVFFLFNBQUksR0FBRyxDQUFDLGFBQWEsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFdEUsU0FBSSxHQUFHLENBQUMsUUFBUSxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsY0FBYyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBYy9FO0lBWkMsSUFBSSxDQUFDLEtBQTRCO1FBQy9CLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNoRCxlQUFlLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDakYsQ0FBQzthQUFNLENBQUM7WUFDTixpQkFBaUIsQ0FDZixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFDcEIsS0FBSyxDQUFDLGFBQWEsRUFDbkIsS0FBSyxDQUFDLFlBQVksQ0FDbkIsQ0FBQztRQUNKLENBQUM7SUFDSCxDQUFDO21IQWhCVSx1Q0FBdUM7dUdBQXZDLHVDQUF1Qyx5R0NwQnBELHFyQkE2QkEsZ3JDRFhZLGdCQUFnQixxSUFBRSxXQUFXLCtkQUFFLE9BQU87O2dHQUVyQyx1Q0FBdUM7a0JBUG5ELFNBQVM7K0JBQ0UsK0NBQStDLGNBRzdDLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcCxcbiAgQ2RrRHJhZyxcbiAgQ2RrRHJvcExpc3QsXG4gIENka0Ryb3BMaXN0R3JvdXAsXG4gIG1vdmVJdGVtSW5BcnJheSxcbiAgdHJhbnNmZXJBcnJheUl0ZW0sXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgY29ubmVjdGVkIHNvcnRpbmcgZ3JvdXBcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZHJhZy1kcm9wLWNvbm5lY3RlZC1zb3J0aW5nLWdyb3VwLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnY2RrLWRyYWctZHJvcC1jb25uZWN0ZWQtc29ydGluZy1ncm91cC1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtEcm9wTGlzdEdyb3VwLCBDZGtEcm9wTGlzdCwgQ2RrRHJhZ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wQ29ubmVjdGVkU29ydGluZ0dyb3VwRXhhbXBsZSB7XG4gIHRvZG8gPSBbJ0dldCB0byB3b3JrJywgJ1BpY2sgdXAgZ3JvY2VyaWVzJywgJ0dvIGhvbWUnLCAnRmFsbCBhc2xlZXAnXTtcblxuICBkb25lID0gWydHZXQgdXAnLCAnQnJ1c2ggdGVldGgnLCAnVGFrZSBhIHNob3dlcicsICdDaGVjayBlLW1haWwnLCAnV2FsayBkb2cnXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShcbiAgICAgICAgZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcbiAgICAgICAgZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXG4gICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCI8ZGl2IGNka0Ryb3BMaXN0R3JvdXA+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiPlxuICAgIDxoMj5UbyBkbzwvaDI+XG5cbiAgICA8ZGl2XG4gICAgICBjZGtEcm9wTGlzdFxuICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJ0b2RvXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0XCJcbiAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICBAZm9yIChpdGVtIG9mIHRvZG87IHRyYWNrIGl0ZW0pIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgY2RrRHJhZz57e2l0ZW19fTwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgICA8aDI+RG9uZTwvaDI+XG5cbiAgICA8ZGl2XG4gICAgICBjZGtEcm9wTGlzdFxuICAgICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJkb25lXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0XCJcbiAgICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCI+XG4gICAgICBAZm9yIChpdGVtIG9mIGRvbmU7IHRyYWNrIGl0ZW0pIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgY2RrRHJhZz57e2l0ZW19fTwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19