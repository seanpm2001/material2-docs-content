import { Component } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
import * as i2 from "@angular/common";
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
}
CdkDragDropEnterPredicateExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: CdkDragDropEnterPredicateExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkDragDropEnterPredicateExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.0-rc.0", type: CdkDragDropEnterPredicateExample, selector: "cdk-drag-drop-enter-predicate-example", ngImport: i0, template: "<div class=\"example-container\">\n  <h2>Available numbers</h2>\n\n  <div\n    id=\"all\"\n    cdkDropList\n    [cdkDropListData]=\"all\"\n    cdkDropListConnectedTo=\"even\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"noReturnPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of all\"\n      [cdkDragData]=\"number\"\n      cdkDrag>{{number}}</div>\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Even numbers</h2>\n\n  <div\n    id=\"even\"\n    cdkDropList\n    [cdkDropListData]=\"even\"\n    cdkDropListConnectedTo=\"all\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"evenPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of even\"\n      cdkDrag\n      [cdkDragData]=\"number\">{{number}}</div>\n  </div>\n</div>\n\n", styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: i1.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.0-rc.0", ngImport: i0, type: CdkDragDropEnterPredicateExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-enter-predicate-example', template: "<div class=\"example-container\">\n  <h2>Available numbers</h2>\n\n  <div\n    id=\"all\"\n    cdkDropList\n    [cdkDropListData]=\"all\"\n    cdkDropListConnectedTo=\"even\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"noReturnPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of all\"\n      [cdkDragData]=\"number\"\n      cdkDrag>{{number}}</div>\n  </div>\n</div>\n\n<div class=\"example-container\">\n  <h2>Even numbers</h2>\n\n  <div\n    id=\"even\"\n    cdkDropList\n    [cdkDropListData]=\"even\"\n    cdkDropListConnectedTo=\"all\"\n    class=\"example-list\"\n    (cdkDropListDropped)=\"drop($event)\"\n    [cdkDropListEnterPredicate]=\"evenPredicate\">\n    <div\n      class=\"example-box\"\n      *ngFor=\"let number of even\"\n      cdkDrag\n      [cdkDragData]=\"number\">{{number}}</div>\n  </div>\n</div>\n\n", styles: [".example-container {\n  width: 400px;\n  max-width: 100%;\n  margin: 0 25px 25px 0;\n  display: inline-block;\n  vertical-align: top;\n}\n\n.example-list {\n  border: solid 1px #ccc;\n  min-height: 60px;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n  display: block;\n}\n\n.example-box {\n  padding: 20px 10px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  cursor: move;\n  background: white;\n  font-size: 14px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUvY2RrLWRyYWctZHJvcC1lbnRlci1wcmVkaWNhdGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFjLGVBQWUsRUFBRSxpQkFBaUIsRUFBVSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBRWhHOztHQUVHO0FBTUgsTUFBTSxPQUFPLGdDQUFnQztJQUw3QztRQU1FLFFBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsU0FBSSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7S0F3QmI7SUF0QkMsSUFBSSxDQUFDLEtBQTRCO1FBQy9CLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDL0MsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hGO2FBQU07WUFDTCxpQkFBaUIsQ0FDZixLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUM1QixLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFDcEIsS0FBSyxDQUFDLGFBQWEsRUFDbkIsS0FBSyxDQUFDLFlBQVksQ0FDbkIsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVELGtGQUFrRjtJQUNsRixhQUFhLENBQUMsSUFBcUI7UUFDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELDZFQUE2RTtJQUM3RSxpQkFBaUI7UUFDZixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2tJQXpCVSxnQ0FBZ0M7c0hBQWhDLGdDQUFnQyw2RUNYN0MsdTVCQXNDQTtnR0QzQmEsZ0NBQWdDO2tCQUw1QyxTQUFTOytCQUNFLHVDQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIG1vdmVJdGVtSW5BcnJheSwgdHJhbnNmZXJBcnJheUl0ZW0sIENka0RyYWd9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuXG4vKipcbiAqIEB0aXRsZSBEcmFnJkRyb3AgZW50ZXIgcHJlZGljYXRlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtZW50ZXItcHJlZGljYXRlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWVudGVyLXByZWRpY2F0ZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEVudGVyUHJlZGljYXRlRXhhbXBsZSB7XG4gIGFsbCA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcbiAgZXZlbiA9IFsxMF07XG5cbiAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8bnVtYmVyW10+KSB7XG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdHJhbnNmZXJBcnJheUl0ZW0oXG4gICAgICAgIGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsXG4gICAgICAgIGV2ZW50LmNvbnRhaW5lci5kYXRhLFxuICAgICAgICBldmVudC5wcmV2aW91c0luZGV4LFxuICAgICAgICBldmVudC5jdXJyZW50SW5kZXgsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBvbmx5IGFsbG93cyBldmVuIG51bWJlcnMgdG8gYmUgZHJvcHBlZCBpbnRvIGEgbGlzdC4gKi9cbiAgZXZlblByZWRpY2F0ZShpdGVtOiBDZGtEcmFnPG51bWJlcj4pIHtcbiAgICByZXR1cm4gaXRlbS5kYXRhICUgMiA9PT0gMDtcbiAgfVxuXG4gIC8qKiBQcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBkb2Vzbid0IGFsbG93IGl0ZW1zIHRvIGJlIGRyb3BwZWQgaW50byBhIGxpc3QuICovXG4gIG5vUmV0dXJuUHJlZGljYXRlKCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoMj5BdmFpbGFibGUgbnVtYmVyczwvaDI+XG5cbiAgPGRpdlxuICAgIGlkPVwiYWxsXCJcbiAgICBjZGtEcm9wTGlzdFxuICAgIFtjZGtEcm9wTGlzdERhdGFdPVwiYWxsXCJcbiAgICBjZGtEcm9wTGlzdENvbm5lY3RlZFRvPVwiZXZlblwiXG4gICAgY2xhc3M9XCJleGFtcGxlLWxpc3RcIlxuICAgIChjZGtEcm9wTGlzdERyb3BwZWQpPVwiZHJvcCgkZXZlbnQpXCJcbiAgICBbY2RrRHJvcExpc3RFbnRlclByZWRpY2F0ZV09XCJub1JldHVyblByZWRpY2F0ZVwiPlxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1ib3hcIlxuICAgICAgKm5nRm9yPVwibGV0IG51bWJlciBvZiBhbGxcIlxuICAgICAgW2Nka0RyYWdEYXRhXT1cIm51bWJlclwiXG4gICAgICBjZGtEcmFnPnt7bnVtYmVyfX08L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyXCI+XG4gIDxoMj5FdmVuIG51bWJlcnM8L2gyPlxuXG4gIDxkaXZcbiAgICBpZD1cImV2ZW5cIlxuICAgIGNka0Ryb3BMaXN0XG4gICAgW2Nka0Ryb3BMaXN0RGF0YV09XCJldmVuXCJcbiAgICBjZGtEcm9wTGlzdENvbm5lY3RlZFRvPVwiYWxsXCJcbiAgICBjbGFzcz1cImV4YW1wbGUtbGlzdFwiXG4gICAgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIlxuICAgIFtjZGtEcm9wTGlzdEVudGVyUHJlZGljYXRlXT1cImV2ZW5QcmVkaWNhdGVcIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzcz1cImV4YW1wbGUtYm94XCJcbiAgICAgICpuZ0Zvcj1cImxldCBudW1iZXIgb2YgZXZlblwiXG4gICAgICBjZGtEcmFnXG4gICAgICBbY2RrRHJhZ0RhdGFdPVwibnVtYmVyXCI+e3tudW1iZXJ9fTwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuXG4iXX0=