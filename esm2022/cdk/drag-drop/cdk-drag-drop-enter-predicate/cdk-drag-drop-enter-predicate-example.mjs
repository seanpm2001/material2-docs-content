import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDrag, CdkDropList, } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
/**
 * @title Drag&Drop enter predicate
 */
export class CdkDragDropEnterPredicateExample {
    constructor() {
        this.all = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.even = [10];
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
    }
    /** Predicate function that only allows even numbers to be dropped into a list. */
    evenPredicate(item) {
        return item.data % 2 === 0;
    }
    /** Predicate function that doesn't allow items to be dropped into a list. */
    noReturnPredicate() {
        return false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CdkDragDropEnterPredicateExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: CdkDragDropEnterPredicateExample, isStandalone: true, selector: "cdk-drag-drop-enter-predicate-example", ngImport: i0, template: "<div class=\"example-container\">\n  <h2>Available numbers</h2>\n\n  <div\n    id=\"all\"\n    cdkDropList\n    [cdkDropListData]=\"all\"\n    cdkDropListConnectedTo=\"even\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"noReturnPredicate\">\n    @for (number of all; track number) {\n      <div\n          class=\"example-box\"\n          [cdkDragData]=\"number\"\n          cdkDrag>{{number}}</div>\n    }\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Even numbers</h2>\n\n  <div\n    id=\"even\"\n    cdkDropList\n    [cdkDropListData]=\"even\"\n    cdkDropListConnectedTo=\"all\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"evenPredicate\">\n    @for (number of even; track number) {\n      <div\n          class=\"example-box\"\n          cdkDrag\n          [cdkDragData]=\"number\">{{number}}</div>\n    }\n  </div>\n</div>\n\n", styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CdkDragDropEnterPredicateExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-enter-predicate-example', standalone: true, imports: [CdkDropList, CdkDrag], template: "<div class=\"example-container\">\n  <h2>Available numbers</h2>\n\n  <div\n    id=\"all\"\n    cdkDropList\n    [cdkDropListData]=\"all\"\n    cdkDropListConnectedTo=\"even\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"noReturnPredicate\">\n    @for (number of all; track number) {\n      <div\n          class=\"example-box\"\n          [cdkDragData]=\"number\"\n          cdkDrag>{{number}}</div>\n    }\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Even numbers</h2>\n\n  <div\n    id=\"even\"\n    cdkDropList\n    [cdkDropListData]=\"even\"\n    cdkDropListConnectedTo=\"all\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"evenPredicate\">\n    @for (number of even; track number) {\n      <div\n          class=\"example-box\"\n          cdkDrag\n          [cdkDragData]=\"number\">{{number}}</div>\n    }\n  </div>\n</div>\n\n", styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUVMLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsT0FBTyxFQUNQLFdBQVcsR0FDWixNQUFNLHdCQUF3QixDQUFDOztBQUVoQzs7R0FFRztBQVFILE1BQU0sT0FBTyxnQ0FBZ0M7SUFQN0M7UUFRRSxRQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFNBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBd0JiO0lBdEJDLElBQUksQ0FBQyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDaEQsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ2pGLENBQUM7YUFBTSxDQUFDO1lBQ04saUJBQWlCLENBQ2YsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLENBQ25CLENBQUM7UUFDSixDQUFDO0lBQ0gsQ0FBQztJQUVELGtGQUFrRjtJQUNsRixhQUFhLENBQUMsSUFBcUI7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSxpQkFBaUI7UUFDZixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OEdBekJVLGdDQUFnQztrR0FBaEMsZ0NBQWdDLGlHQ25CN0MsNjhCQXdDQSxnckNEdkJZLFdBQVcsK2RBQUUsT0FBTzs7MkZBRW5CLGdDQUFnQztrQkFQNUMsU0FBUzsrQkFDRSx1Q0FBdUMsY0FHckMsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENka0RyYWdEcm9wLFxuICBtb3ZlSXRlbUluQXJyYXksXG4gIHRyYW5zZmVyQXJyYXlJdGVtLFxuICBDZGtEcmFnLFxuICBDZGtEcm9wTGlzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBlbnRlciBwcmVkaWNhdGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdjZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtEcm9wTGlzdCwgQ2RrRHJhZ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wRW50ZXJQcmVkaWNhdGVFeGFtcGxlIHtcbiAgYWxsID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuICBldmVuID0gWzEwXTtcblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxudW1iZXJbXT4pIHtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShcbiAgICAgICAgZXZlbnQucHJldmlvdXNDb250YWluZXIuZGF0YSxcbiAgICAgICAgZXZlbnQuY29udGFpbmVyLmRhdGEsXG4gICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXG4gICAgICAgIGV2ZW50LmN1cnJlbnRJbmRleCxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IG9ubHkgYWxsb3dzIGV2ZW4gbnVtYmVycyB0byBiZSBkcm9wcGVkIGludG8gYSBsaXN0LiAqL1xuICBldmVuUHJlZGljYXRlKGl0ZW06IENka0RyYWc8bnVtYmVyPikge1xuICAgIHJldHVybiBpdGVtLmRhdGEgJSAyID09PSAwO1xuICB9XG5cbiAgLyoqIFByZWRpY2F0ZSBmdW5jdGlvbiB0aGF0IGRvZXNuJ3QgYWxsb3cgaXRlbXMgdG8gYmUgZHJvcHBlZCBpbnRvIGEgbGlzdC4gKi9cbiAgbm9SZXR1cm5QcmVkaWNhdGUoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGgyPkF2YWlsYWJsZSBudW1iZXJzPC9oMj5cblxuICA8ZGl2XG4gICAgaWQ9XCJhbGxcIlxuICAgIGNka0Ryb3BMaXN0XG4gICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJhbGxcIlxuICAgIGNka0Ryb3BMaXN0Q29ubmVjdGVkVG89XCJldmVuXCJcbiAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIlxuICAgIFtjZGtEcm9wTGlzdEVudGVyUHJlZGljYXRlXT1cIm5vUmV0dXJuUHJlZGljYXRlXCI+XG4gICAgQGZvciAobnVtYmVyIG9mIGFsbDsgdHJhY2sgbnVtYmVyKSB7XG4gICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWJveFwiXG4gICAgICAgICAgW2Nka0RyYWdEYXRhXT1cIm51bWJlclwiXG4gICAgICAgICAgY2RrRHJhZz57e251bWJlcn19PC9kaXY+XG4gICAgfVxuICA8L2Rpdj5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXJcIj5cbiAgPGgyPkV2ZW4gbnVtYmVyczwvaDI+XG5cbiAgPGRpdlxuICAgIGlkPVwiZXZlblwiXG4gICAgY2RrRHJvcExpc3RcbiAgICBbY2RrRHJvcExpc3REYXRhXT1cImV2ZW5cIlxuICAgIGNka0Ryb3BMaXN0Q29ubmVjdGVkVG89XCJhbGxcIlxuICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0XCJcbiAgICAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiXG4gICAgW2Nka0Ryb3BMaXN0RW50ZXJQcmVkaWNhdGVdPVwiZXZlblByZWRpY2F0ZVwiPlxuICAgIEBmb3IgKG51bWJlciBvZiBldmVuOyB0cmFjayBudW1iZXIpIHtcbiAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtYm94XCJcbiAgICAgICAgICBjZGtEcmFnXG4gICAgICAgICAgW2Nka0RyYWdEYXRhXT1cIm51bWJlclwiPnt7bnVtYmVyfX08L2Rpdj5cbiAgICB9XG4gIDwvZGl2PlxuPC9kaXY+XG5cbiJdfQ==