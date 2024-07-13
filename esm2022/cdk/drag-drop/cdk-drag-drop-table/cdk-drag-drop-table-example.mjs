import { Component, ViewChild } from '@angular/core';
import { CdkDropList, CdkDrag, moveItemInArray } from '@angular/cdk/drag-drop';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/material/icon";
export const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', quantity: 100 },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', quantity: 100 },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', quantity: 100 },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', quantity: 100 },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B', quantity: 100 },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', quantity: 100 },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', quantity: 100 },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', quantity: 100 },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', quantity: 100 },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', quantity: 100 },
];
/**
 * @title Drag&Drop table
 */
export class CdkDragDropTableExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol', 'quantity'];
        this.dataSource = ELEMENT_DATA;
    }
    drop(event) {
        const previousIndex = this.dataSource.findIndex(d => d === event.item.data);
        moveItemInArray(this.dataSource, previousIndex, event.currentIndex);
        this.table.renderRows();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkDragDropTableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: CdkDragDropTableExample, isStandalone: true, selector: "cdk-drag-drop-table-example", viewQueries: [{ propertyName: "table", first: true, predicate: ["table"], descendants: true, static: true }], ngImport: i0, template: "<mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" cdkDropList (cdkDropListDropped)=\"drop($event)\"\r\n  cdkDropListData=\"dataSource\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\" sticky>\r\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\">\r\n      <mat-icon class=\"example-drag-cursor\">reorder</mat-icon>\r\n      <span>{{element.position}}</span>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Quantity Column -->\r\n  <ng-container matColumnDef=\"quantity\">\r\n    <mat-header-cell *matHeaderCellDef> Quantity of Element </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\">{{element.quantity}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\" cdkDrag [cdkDragData]=\"row\"></mat-row>\r\n</mat-table>\r\n", styles: ["table {\n  width: 100%;\n}\n\n.example-drag-cursor {\n  margin-right: 16px;\n  cursor: move;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: white;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drop-list-dragging .mat-row:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"], dependencies: [{ kind: "directive", type: CdkDropList, selector: "[cdkDropList], cdk-drop-list", inputs: ["cdkDropListConnectedTo", "cdkDropListData", "cdkDropListOrientation", "id", "cdkDropListLockAxis", "cdkDropListDisabled", "cdkDropListSortingDisabled", "cdkDropListEnterPredicate", "cdkDropListSortPredicate", "cdkDropListAutoScrollDisabled", "cdkDropListAutoScrollStep", "cdkDropListElementContainer"], outputs: ["cdkDropListDropped", "cdkDropListEntered", "cdkDropListExited", "cdkDropListSorted"], exportAs: ["cdkDropList"] }, { kind: "directive", type: CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i2.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkDragDropTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-drag-drop-table-example', standalone: true, imports: [CdkDropList, CdkDrag, MatTableModule, MatIconModule], template: "<mat-table #table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" cdkDropList (cdkDropListDropped)=\"drop($event)\"\r\n  cdkDropListData=\"dataSource\">\r\n  <!-- Position Column -->\r\n  <ng-container matColumnDef=\"position\" sticky>\r\n    <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\">\r\n      <mat-icon class=\"example-drag-cursor\">reorder</mat-icon>\r\n      <span>{{element.position}}</span>\r\n    </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Name Column -->\r\n  <ng-container matColumnDef=\"name\">\r\n    <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Weight Column -->\r\n  <ng-container matColumnDef=\"weight\">\r\n    <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Symbol Column -->\r\n  <ng-container matColumnDef=\"symbol\">\r\n    <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\r\n  </ng-container>\r\n\r\n  <!-- Quantity Column -->\r\n  <ng-container matColumnDef=\"quantity\">\r\n    <mat-header-cell *matHeaderCellDef> Quantity of Element </mat-header-cell>\r\n    <mat-cell *matCellDef=\"let element\">{{element.quantity}}</mat-cell>\r\n  </ng-container>\r\n\r\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\" cdkDrag [cdkDragData]=\"row\"></mat-row>\r\n</mat-table>\r\n", styles: ["table {\n  width: 100%;\n}\n\n.example-drag-cursor {\n  margin-right: 16px;\n  cursor: move;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n    0 8px 10px 1px rgba(0, 0, 0, 0.14),\n    0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: white;\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.cdk-drop-list-dragging .mat-row:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n"] }]
        }], propDecorators: { table: [{
                type: ViewChild,
                args: ['table', { static: true }]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RyYWctZHJvcC9jZGstZHJhZy1kcm9wLXRhYmxlL2Nkay1kcmFnLWRyb3AtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC10YWJsZS9jZGstZHJhZy1kcm9wLXRhYmxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQWMsV0FBVyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUMxRixPQUFPLEVBQUMsUUFBUSxFQUFFLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVVyRCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQXNCO0lBQzdDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0lBQzNFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0lBQzFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0lBQzFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0lBQzdFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0lBQ3hFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0lBQzFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0lBQzVFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0lBQzFFLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0lBQzVFLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFDO0NBQzNFLENBQUM7QUFFRjs7R0FFRztBQVFILE1BQU0sT0FBTyx1QkFBdUI7SUFQcEM7UUFVRSxxQkFBZ0IsR0FBYSxDQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUNsRixlQUFVLEdBQUcsWUFBWSxDQUFDO0tBUTNCO0lBTkMsSUFBSSxDQUFDLEtBQTBCO1FBQzdCLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFNUUsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzFCLENBQUM7OEdBWFUsdUJBQXVCO2tHQUF2Qix1QkFBdUIscU1DcENwQywrcERBc0NBLDBvQkRKWSxXQUFXLDhmQUFFLE9BQU8sdWJBQUUsY0FBYyxzZ0NBQUUsYUFBYTs7MkZBRWxELHVCQUF1QjtrQkFQbkMsU0FBUzsrQkFDRSw2QkFBNkIsY0FHM0IsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxjQUFjLEVBQUUsYUFBYSxDQUFDOzhCQUcxQixLQUFLO3NCQUF4QyxTQUFTO3VCQUFDLE9BQU8sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrRHJhZ0Ryb3AsIENka0Ryb3BMaXN0LCBDZGtEcmFnLCBtb3ZlSXRlbUluQXJyYXl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHtNYXRUYWJsZSwgTWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIHF1YW50aXR5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBjb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJywgcXVhbnRpdHk6IDEwMH0sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZScsIHF1YW50aXR5OiAxMDB9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknLCBxdWFudGl0eTogMTAwfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJywgcXVhbnRpdHk6IDEwMH0sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InLCBxdWFudGl0eTogMTAwfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJywgcXVhbnRpdHk6IDEwMH0sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJywgcXVhbnRpdHk6IDEwMH0sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTycsIHF1YW50aXR5OiAxMDB9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRicsIHF1YW50aXR5OiAxMDB9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnLCBxdWFudGl0eTogMTAwfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCB0YWJsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZHJhZy1kcm9wLXRhYmxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtdGFibGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdjZGstZHJhZy1kcm9wLXRhYmxlLWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Nka0Ryb3BMaXN0LCBDZGtEcmFnLCBNYXRUYWJsZU1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0RyYWdEcm9wVGFibGVFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZCgndGFibGUnLCB7c3RhdGljOiB0cnVlfSkgdGFibGU6IE1hdFRhYmxlPFBlcmlvZGljRWxlbWVudD47XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCcsICdxdWFudGl0eSddO1xuICBkYXRhU291cmNlID0gRUxFTUVOVF9EQVRBO1xuXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZz4pIHtcbiAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gdGhpcy5kYXRhU291cmNlLmZpbmRJbmRleChkID0+IGQgPT09IGV2ZW50Lml0ZW0uZGF0YSk7XG5cbiAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhU291cmNlLCBwcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgIHRoaXMudGFibGUucmVuZGVyUm93cygpO1xuICB9XG59XG4iLCI8bWF0LXRhYmxlICN0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCIgY2RrRHJvcExpc3QgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIlxyXG4gIGNka0Ryb3BMaXN0RGF0YT1cImRhdGFTb3VyY2VcIj5cclxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cclxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCIgc3RpY2t5PlxyXG4gICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTm8uIDwvbWF0LWhlYWRlci1jZWxsPlxyXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cclxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwiZXhhbXBsZS1kcmFnLWN1cnNvclwiPnJlb3JkZXI8L21hdC1pY29uPlxyXG4gICAgICA8c3Bhbj57e2VsZW1lbnQucG9zaXRpb259fTwvc3Bhbj5cclxuICAgIDwvbWF0LWNlbGw+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XHJcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XHJcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvbWF0LWhlYWRlci1jZWxsPlxyXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L21hdC1jZWxsPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XHJcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cclxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L21hdC1jZWxsPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XHJcbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cclxuICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L21hdC1oZWFkZXItY2VsbD5cclxuICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L21hdC1jZWxsPlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8IS0tIFF1YW50aXR5IENvbHVtbiAtLT5cclxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInF1YW50aXR5XCI+XHJcbiAgICA8bWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBRdWFudGl0eSBvZiBFbGVtZW50IDwvbWF0LWhlYWRlci1jZWxsPlxyXG4gICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQucXVhbnRpdHl9fTwvbWF0LWNlbGw+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvbWF0LWhlYWRlci1yb3c+XHJcbiAgPG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCIgY2RrRHJhZyBbY2RrRHJhZ0RhdGFdPVwicm93XCI+PC9tYXQtcm93PlxyXG48L21hdC10YWJsZT5cclxuIl19