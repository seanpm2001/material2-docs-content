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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CdkDragDropEnterPredicateExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.0", type: CdkDragDropEnterPredicateExample, isStandalone: true, selector: "cdk-drag-drop-enter-predicate-example", ngImport: i0, template: "<div class=\"example-container\">\n  <h2>Available numbers</h2>\n\n  <div\n    id=\"all\"\n    cdkDropList\n    [cdkDropListData]=\"all\"\n    cdkDropListConnectedTo=\"even\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"noReturnPredicate\">\n    @for (number of all; track number) {\n      <div\n          class=\"example-box\"\n          [cdkDragData]=\"number\"\n          cdkDrag>{{number}}</div>\n    }\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Even numbers</h2>\n\n  <div\n    id=\"even\"\n    cdkDropList\n    [cdkDropListData]=\"even\"\n    cdkDropListConnectedTo=\"all\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"evenPredicate\">\n    @for (number of even; track number) {\n      <div\n          class=\"example-box\"\n          cdkDrag\n          [cdkDragData]=\"number\">{{number}}</div>\n    }\n  </div>\n</div>\n\n", styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: CdkDragDropEnterPredicateExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-enter-predicate-example', standalone: true, imports: [CdkDropList, CdkDrag], template: "<div class=\"example-container\">\n  <h2>Available numbers</h2>\n\n  <div\n    id=\"all\"\n    cdkDropList\n    [cdkDropListData]=\"all\"\n    cdkDropListConnectedTo=\"even\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"noReturnPredicate\">\n    @for (number of all; track number) {\n      <div\n          class=\"example-box\"\n          [cdkDragData]=\"number\"\n          cdkDrag>{{number}}</div>\n    }\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Even numbers</h2>\n\n  <div\n    id=\"even\"\n    cdkDropList\n    [cdkDropListData]=\"even\"\n    cdkDropListConnectedTo=\"all\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"evenPredicate\">\n    @for (number of even; track number) {\n      <div\n          class=\"example-box\"\n          cdkDrag\n          [cdkDragData]=\"number\">{{number}}</div>\n    }\n  </div>\n</div>\n\n", styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUVMLGVBQWUsRUFDZixpQkFBaUIsRUFDakIsT0FBTyxFQUNQLFdBQVcsR0FDWixNQUFNLHdCQUF3QixDQUFDOztBQUVoQzs7R0FFRztBQVFILE1BQU0sT0FBTyxnQ0FBZ0M7SUFQN0M7UUFRRSxRQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLFNBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBd0JiO0lBdEJDLElBQUksQ0FBQyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNoRjthQUFNO1lBQ0wsaUJBQWlCLENBQ2YsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQUksRUFDNUIsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQ3BCLEtBQUssQ0FBQyxhQUFhLEVBQ25CLEtBQUssQ0FBQyxZQUFZLENBQ25CLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCxrRkFBa0Y7SUFDbEYsYUFBYSxDQUFDLElBQXFCO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCw2RUFBNkU7SUFDN0UsaUJBQWlCO1FBQ2YsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzhHQXpCVSxnQ0FBZ0M7a0dBQWhDLGdDQUFnQyxpR0NuQjdDLDY4QkF3Q0EsZ3JDRHZCWSxXQUFXLCtkQUFFLE9BQU87OzJGQUVuQixnQ0FBZ0M7a0JBUDVDLFNBQVM7K0JBQ0UsdUNBQXVDLGNBR3JDLElBQUksV0FDUCxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDZGtEcmFnRHJvcCxcbiAgbW92ZUl0ZW1JbkFycmF5LFxuICB0cmFuc2ZlckFycmF5SXRlbSxcbiAgQ2RrRHJhZyxcbiAgQ2RrRHJvcExpc3QsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgZW50ZXIgcHJlZGljYXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrRHJvcExpc3QsIENka0RyYWddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEVudGVyUHJlZGljYXRlRXhhbXBsZSB7XG4gIGFsbCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgZXZlbiA9IFsxMF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8bnVtYmVyW10+KSB7XG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oXG4gICAgICAgIGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsXG4gICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxuICAgICAgICBldmVudC5jdXJyZW50SW5kZXgsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBvbmx5IGFsbG93cyBldmVuIG51bWJlcnMgdG8gYmUgZHJvcHBlZCBpbnRvIGEgbGlzdC4gKi9cbiAgZXZlblByZWRpY2F0ZShpdGVtOiBDZGtEcmFnPG51bWJlcj4pIHtcbiAgICByZXR1cm4gaXRlbS5kYXRhICUgMiA9PT0gMDtcbiAgfVxuXG4gIC8qKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBkb2Vzbid0IGFsbG93IGl0ZW1zIHRvIGJlIGRyb3BwZWQgaW50byBhIGxpc3QuICovXG4gIG5vUmV0dXJuUHJlZGljYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoMj5BdmFpbGFibGUgbnVtYmVyczwvaDI+XG5cbiAgPGRpdlxuICAgIGlkPVwiYWxsXCJcbiAgICBjZGtEcm9wTGlzdFxuICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiYWxsXCJcbiAgICBjZGtEcm9wTGlzdENvbm5lY3RlZFRvPVwiZXZlblwiXG4gICAgY2xhc3M9XCJleGFtcGxlLWxpc3RcIlxuICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCJcbiAgICBbY2RrRHJvcExpc3RFbnRlclByZWRpY2F0ZV09XCJub1JldHVyblByZWRpY2F0ZVwiPlxuICAgIEBmb3IgKG51bWJlciBvZiBhbGw7IHRyYWNrIG51bWJlcikge1xuICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1ib3hcIlxuICAgICAgICAgIFtjZGtEcmFnRGF0YV09XCJudW1iZXJcIlxuICAgICAgICAgIGNka0RyYWc+e3tudW1iZXJ9fTwvZGl2PlxuICAgIH1cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoMj5FdmVuIG51bWJlcnM8L2gyPlxuXG4gIDxkaXZcbiAgICBpZD1cImV2ZW5cIlxuICAgIGNka0Ryb3BMaXN0XG4gICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJldmVuXCJcbiAgICBjZGtEcm9wTGlzdENvbm5lY3RlZFRvPVwiYWxsXCJcbiAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIlxuICAgIFtjZGtEcm9wTGlzdEVudGVyUHJlZGljYXRlXT1cImV2ZW5QcmVkaWNhdGVcIj5cbiAgICBAZm9yIChudW1iZXIgb2YgZXZlbjsgdHJhY2sgbnVtYmVyKSB7XG4gICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJleGFtcGxlLWJveFwiXG4gICAgICAgICAgY2RrRHJhZ1xuICAgICAgICAgIFtjZGtEcmFnRGF0YV09XCJudW1iZXJcIj57e251bWJlcn19PC9kaXY+XG4gICAgfVxuICA8L2Rpdj5cbjwvZGl2PlxuXG4iXX0=