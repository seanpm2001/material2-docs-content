import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/button-toggle";
import * as i3 from "@angular/material/table";
import * as i4 from "@angular/common";
/**
 * @title Flex-layout tables with toggle-able sticky headers, footers, and columns
 */
export class TableStickyComplexFlexExample {
    constructor() {
        this.displayedColumns = [];
        this.dataSource = ELEMENT_DATA;
        this.tables = [0];
        this.displayedColumns.length = 24;
        this.displayedColumns.fill('filler');
        // The first two columns should be position and name; the last two columns: weight, symbol
        this.displayedColumns[0] = 'position';
        this.displayedColumns[1] = 'name';
        this.displayedColumns[22] = 'weight';
        this.displayedColumns[23] = 'symbol';
    }
    /** Whether the button toggle group contains the id as an active value. */
    isSticky(buttonToggleGroup, id) {
        return (buttonToggleGroup.value || []).indexOf(id) !== -1;
    }
}
TableStickyComplexFlexExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TableStickyComplexFlexExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableStickyComplexFlexExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: TableStickyComplexFlexExample, selector: "table-sticky-complex-flex-example", ngImport: i0, template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Position Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Name Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Weight Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Symbol Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <mat-header-cell *matHeaderCellDef> Filler header cell </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> Filler data cell </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Filler footer cell </mat-footer-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row>\n  </mat-table>\n</div>\n", styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell, .mat-footer-cell, .mat-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-header-row, .mat-footer-row, .mat-row {\n  min-width: 1920px; /* 24 columns, 80px each */\n}\n\n.mat-table-sticky-border-elem-top {\n  border-bottom: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-right {\n  border-left: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-bottom {\n  border-top: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-left {\n  border-right: 2px solid midnightblue;\n}\n"], components: [{ type: i1.MatButton, selector: "button[mat-button], button[mat-raised-button], button[mat-icon-button],             button[mat-fab], button[mat-mini-fab], button[mat-stroked-button],             button[mat-flat-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { type: i2.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { type: i3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { type: i3.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { type: i3.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { type: i3.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }], directives: [{ type: i2.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { type: i3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { type: i3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { type: i3.MatCellDef, selector: "[matCellDef]" }, { type: i3.MatCell, selector: "mat-cell, td[mat-cell]" }, { type: i3.MatFooterCellDef, selector: "[matFooterCellDef]" }, { type: i3.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { type: i3.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { type: i3.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { type: i3.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: TableStickyComplexFlexExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-sticky-complex-flex-example', template: "<div>\n  <button mat-raised-button (click)=\"tables.push(tables.length)\">Add table</button>\n  <button mat-raised-button (click)=\"tables.pop()\">Remove table</button>\n</div>\n\n<div>\n  Sticky Headers:\n  <mat-button-toggle-group multiple [value]=\"['header-1']\"\n                           #stickyHeaders=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"header-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"header-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Footers:\n  <mat-button-toggle-group multiple [value]=\"['footer-1']\"\n                           #stickyFooters=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"footer-1\"> Row 1 </mat-button-toggle>\n    <mat-button-toggle value=\"footer-2\"> Row 2 </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div>\n  Sticky Columns:\n  <mat-button-toggle-group multiple [value]=\"['position', 'symbol']\"\n                           #stickyColumns=\"matButtonToggleGroup\"\n                           class=\"example-sticky-toggle-group\">\n    <mat-button-toggle value=\"position\"> Position </mat-button-toggle>\n    <mat-button-toggle value=\"name\"> Name </mat-button-toggle>\n    <mat-button-toggle value=\"weight\"> Weight </mat-button-toggle>\n    <mat-button-toggle value=\"symbol\"> Symbol </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n  <mat-table [dataSource]=\"dataSource\" *ngFor=\"let table of tables\">\n    <ng-container matColumnDef=\"position\" [sticky]=\"isSticky(stickyColumns, 'position')\">\n      <mat-header-cell *matHeaderCellDef> Position </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.position}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Position Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"name\" [sticky]=\"isSticky(stickyColumns, 'name')\">\n      <mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.name}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Name Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"weight\" [stickyEnd]=\"isSticky(stickyColumns, 'weight')\">\n      <mat-header-cell *matHeaderCellDef> Weight </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.weight}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Weight Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"symbol\" [stickyEnd]=\"isSticky(stickyColumns, 'symbol')\">\n      <mat-header-cell *matHeaderCellDef> Symbol </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.symbol}} </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Symbol Footer </mat-footer-cell>\n    </ng-container>\n\n    <ng-container matColumnDef=\"filler\">\n      <mat-header-cell *matHeaderCellDef> Filler header cell </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> Filler data cell </mat-cell>\n      <mat-footer-cell *matFooterCellDef> Filler footer cell </mat-footer-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-1')\"></mat-header-row>\n    <mat-header-row *matHeaderRowDef=\"displayedColumns; sticky: isSticky(stickyHeaders, 'header-2')\"></mat-header-row>\n\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-1')\"></mat-footer-row>\n    <mat-footer-row *matFooterRowDef=\"displayedColumns; sticky: isSticky(stickyFooters, 'footer-2')\"></mat-footer-row>\n  </mat-table>\n</div>\n", styles: [".example-container {\n  height: 400px;\n  overflow: auto;\n}\n\n.mat-table-sticky {\n  background: #59abfd;\n  opacity: 1;\n}\n\n.example-sticky-toggle-group {\n  margin: 8px;\n}\n\n.mat-column-filler {\n  padding: 0 8px;\n  font-size: 10px;\n  text-align: center;\n}\n\n.mat-header-cell, .mat-footer-cell, .mat-cell {\n  min-width: 80px;\n  box-sizing: border-box;\n}\n\n.mat-header-row, .mat-footer-row, .mat-row {\n  min-width: 1920px; /* 24 columns, 80px each */\n}\n\n.mat-table-sticky-border-elem-top {\n  border-bottom: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-right {\n  border-left: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-bottom {\n  border-top: 2px solid midnightblue;\n}\n\n.mat-table-sticky-border-elem-left {\n  border-right: 2px solid midnightblue;\n}\n"] }]
        }], ctorParameters: function () { return []; } });
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc3RpY2t5LWNvbXBsZXgtZmxleC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtc3RpY2t5LWNvbXBsZXgtZmxleC90YWJsZS1zdGlja3ktY29tcGxleC1mbGV4LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1zdGlja3ktY29tcGxleC1mbGV4L3RhYmxlLXN0aWNreS1jb21wbGV4LWZsZXgtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7OztBQUd4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyw2QkFBNkI7SUFNeEM7UUFMQSxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFDaEMsZUFBVSxHQUFHLFlBQVksQ0FBQztRQUUxQixXQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUdYLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFckMsMEZBQTBGO1FBQzFGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUM7SUFDdkMsQ0FBQztJQUVELDBFQUEwRTtJQUMxRSxRQUFRLENBQUMsaUJBQXVDLEVBQUUsRUFBVTtRQUMxRCxPQUFPLENBQUMsaUJBQWlCLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUM1RCxDQUFDOztrSUFwQlUsNkJBQTZCO3NIQUE3Qiw2QkFBNkIseUVDWDFDLDYwSEE4RUE7bUdEbkVhLDZCQUE2QjtrQkFMekMsU0FBUzsrQkFDRSxtQ0FBbUM7O0FBa0MvQyxNQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzVELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEJ1dHRvblRvZ2dsZUdyb3VwfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcblxuLyoqXG4gKiBAdGl0bGUgRmxleC1sYXlvdXQgdGFibGVzIHdpdGggdG9nZ2xlLWFibGUgc3RpY2t5IGhlYWRlcnMsIGZvb3RlcnMsIGFuZCBjb2x1bW5zXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXN0aWNreS1jb21wbGV4LWZsZXgtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS1zdGlja3ktY29tcGxleC1mbGV4LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtc3RpY2t5LWNvbXBsZXgtZmxleC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVN0aWNreUNvbXBsZXhGbGV4RXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRhdGFTb3VyY2UgPSBFTEVNRU5UX0RBVEE7XG5cbiAgdGFibGVzID0gWzBdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5sZW5ndGggPSAyNDtcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMuZmlsbCgnZmlsbGVyJyk7XG5cbiAgICAvLyBUaGUgZmlyc3QgdHdvIGNvbHVtbnMgc2hvdWxkIGJlIHBvc2l0aW9uIGFuZCBuYW1lOyB0aGUgbGFzdCB0d28gY29sdW1uczogd2VpZ2h0LCBzeW1ib2xcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNbMF0gPSAncG9zaXRpb24nO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1uc1sxXSA9ICduYW1lJztcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnNbMjJdID0gJ3dlaWdodCc7XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zWzIzXSA9ICdzeW1ib2wnO1xuICB9XG5cbiAgLyoqIFdoZXRoZXIgdGhlIGJ1dHRvbiB0b2dnbGUgZ3JvdXAgY29udGFpbnMgdGhlIGlkIGFzIGFuIGFjdGl2ZSB2YWx1ZS4gKi9cbiAgaXNTdGlja3koYnV0dG9uVG9nZ2xlR3JvdXA6IE1hdEJ1dHRvblRvZ2dsZUdyb3VwLCBpZDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChidXR0b25Ub2dnbGVHcm91cC52YWx1ZSB8fCBbXSkuaW5kZXhPZihpZCkgIT09IC0xO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcbiIsIjxkaXY+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cInRhYmxlcy5wdXNoKHRhYmxlcy5sZW5ndGgpXCI+QWRkIHRhYmxlPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cInRhYmxlcy5wb3AoKVwiPlJlbW92ZSB0YWJsZTwvYnV0dG9uPlxuPC9kaXY+XG5cbjxkaXY+XG4gIFN0aWNreSBIZWFkZXJzOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbXVsdGlwbGUgW3ZhbHVlXT1cIlsnaGVhZGVyLTEnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAjc3RpY2t5SGVhZGVycz1cIm1hdEJ1dHRvblRvZ2dsZUdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1zdGlja3ktdG9nZ2xlLWdyb3VwXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiaGVhZGVyLTFcIj4gUm93IDEgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJoZWFkZXItMlwiPiBSb3cgMiA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPC9kaXY+XG5cbjxkaXY+XG4gIFN0aWNreSBGb290ZXJzOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbXVsdGlwbGUgW3ZhbHVlXT1cIlsnZm9vdGVyLTEnXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAjc3RpY2t5Rm9vdGVycz1cIm1hdEJ1dHRvblRvZ2dsZUdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS1zdGlja3ktdG9nZ2xlLWdyb3VwXCI+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiZm9vdGVyLTFcIj4gUm93IDEgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJmb290ZXItMlwiPiBSb3cgMiA8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPC9kaXY+XG5cbjxkaXY+XG4gIFN0aWNreSBDb2x1bW5zOlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgbXVsdGlwbGUgW3ZhbHVlXT1cIlsncG9zaXRpb24nLCAnc3ltYm9sJ11cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgI3N0aWNreUNvbHVtbnM9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtc3RpY2t5LXRvZ2dsZS1ncm91cFwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInBvc2l0aW9uXCI+IFBvc2l0aW9uIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwibmFtZVwiPiBOYW1lIDwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwid2VpZ2h0XCI+IFdlaWdodCA8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInN5bWJvbFwiPiBTeW1ib2wgPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbjwvZGl2PlxuXG48ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250YWluZXIgbWF0LWVsZXZhdGlvbi16OFwiPlxuICA8bWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiAqbmdGb3I9XCJsZXQgdGFibGUgb2YgdGFibGVzXCI+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiIFtzdGlja3ldPVwiaXNTdGlja3koc3RpY2t5Q29sdW1ucywgJ3Bvc2l0aW9uJylcIj5cbiAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFBvc2l0aW9uIDwvbWF0LWhlYWRlci1jZWxsPlxuICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC9tYXQtY2VsbD5cbiAgICAgIDxtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+IFBvc2l0aW9uIEZvb3RlciA8L21hdC1mb290ZXItY2VsbD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiIFtzdGlja3ldPVwiaXNTdGlja3koc3RpY2t5Q29sdW1ucywgJ25hbWUnKVwiPlxuICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTmFtZSA8L21hdC1oZWFkZXItY2VsbD5cbiAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC9tYXQtY2VsbD5cbiAgICAgIDxtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+IE5hbWUgRm9vdGVyIDwvbWF0LWZvb3Rlci1jZWxsPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIiBbc3RpY2t5RW5kXT1cImlzU3RpY2t5KHN0aWNreUNvbHVtbnMsICd3ZWlnaHQnKVwiPlxuICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvbWF0LWhlYWRlci1jZWxsPlxuICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LndlaWdodH19IDwvbWF0LWNlbGw+XG4gICAgICA8bWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBXZWlnaHQgRm9vdGVyIDwvbWF0LWZvb3Rlci1jZWxsPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIiBbc3RpY2t5RW5kXT1cImlzU3RpY2t5KHN0aWNreUNvbHVtbnMsICdzeW1ib2wnKVwiPlxuICAgICAgPG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvbWF0LWhlYWRlci1jZWxsPlxuICAgICAgPG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvbWF0LWNlbGw+XG4gICAgICA8bWF0LWZvb3Rlci1jZWxsICptYXRGb290ZXJDZWxsRGVmPiBTeW1ib2wgRm9vdGVyIDwvbWF0LWZvb3Rlci1jZWxsPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJmaWxsZXJcIj5cbiAgICAgIDxtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IEZpbGxlciBoZWFkZXIgY2VsbCA8L21hdC1oZWFkZXItY2VsbD5cbiAgICAgIDxtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IEZpbGxlciBkYXRhIGNlbGwgPC9tYXQtY2VsbD5cbiAgICAgIDxtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+IEZpbGxlciBmb290ZXIgY2VsbCA8L21hdC1mb290ZXItY2VsbD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uczsgc3RpY2t5OiBpc1N0aWNreShzdGlja3lIZWFkZXJzLCAnaGVhZGVyLTEnKVwiPjwvbWF0LWhlYWRlci1yb3c+XG4gICAgPG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zOyBzdGlja3k6IGlzU3RpY2t5KHN0aWNreUhlYWRlcnMsICdoZWFkZXItMicpXCI+PC9tYXQtaGVhZGVyLXJvdz5cblxuICAgIDxtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvbWF0LXJvdz5cblxuICAgIDxtYXQtZm9vdGVyLXJvdyAqbWF0Rm9vdGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uczsgc3RpY2t5OiBpc1N0aWNreShzdGlja3lGb290ZXJzLCAnZm9vdGVyLTEnKVwiPjwvbWF0LWZvb3Rlci1yb3c+XG4gICAgPG1hdC1mb290ZXItcm93ICptYXRGb290ZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zOyBzdGlja3k6IGlzU3RpY2t5KHN0aWNreUZvb3RlcnMsICdmb290ZXItMicpXCI+PC9tYXQtZm9vdGVyLXJvdz5cbiAgPC9tYXQtdGFibGU+XG48L2Rpdj5cbiJdfQ==