import { DataSource } from '@angular/cdk/collections';
import { Component, ContentChildren, Input, QueryList, ViewChild, ContentChild, } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatColumnDef, MatHeaderRowDef, MatNoDataRow, MatRowDef, MatTable, MatTableDataSource, } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/sort";
import * as i3 from "@angular/material/table";
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
/**
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
export class TableWrappedExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    }
    ngAfterViewInit() {
        this.dataSource.sort = this.sort;
    }
    clearTable() {
        this.dataSource.data = [];
    }
    addData() {
        this.dataSource.data = ELEMENT_DATA;
    }
}
TableWrappedExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: TableWrappedExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TableWrappedExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.0", type: TableWrappedExample, selector: "table-wrapped-example", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }], ngImport: i0, template: "<div>\n  <button mat-raised-button (click)=\"clearTable()\">Clear table</button>\n  <button mat-raised-button (click)=\"addData()\">Add data</button>\n</div>\n\n<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\n               matSort #sort=\"matSort\">\n  <!-- Custom column definition to be provided to the wrapper table. -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Custom row definitions to be provided to the wrapper table. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Row shown when there is no matching data that will be provided to the wrapper table. -->\n  <tr class=\"mat-row\" *matNoDataRow>\n    <td class=\"mat-cell\" colspan=\"4\">No data</td>\n  </tr>\n</wrapper-table>\n", styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 0 8px 8px 0;\n}\n"], dependencies: [{ kind: "component", type: i0.forwardRef(function () { return i1.MatButton; }), selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "directive", type: i0.forwardRef(function () { return i2.MatSort; }), selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatHeaderCellDef; }), selector: "[matHeaderCellDef]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatHeaderRowDef; }), selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatColumnDef; }), selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatCellDef; }), selector: "[matCellDef]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatRowDef; }), selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatHeaderCell; }), selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatCell; }), selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i0.forwardRef(function () { return i3.MatHeaderRow; }), selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i0.forwardRef(function () { return i3.MatRow; }), selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatNoDataRow; }), selector: "ng-template[matNoDataRow]" }, { kind: "component", type: i0.forwardRef(function () { return WrapperTable; }), selector: "wrapper-table", inputs: ["columns", "dataSource"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: TableWrappedExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-wrapped-example', template: "<div>\n  <button mat-raised-button (click)=\"clearTable()\">Clear table</button>\n  <button mat-raised-button (click)=\"addData()\">Add data</button>\n</div>\n\n<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\n               matSort #sort=\"matSort\">\n  <!-- Custom column definition to be provided to the wrapper table. -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Custom row definitions to be provided to the wrapper table. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Row shown when there is no matching data that will be provided to the wrapper table. -->\n  <tr class=\"mat-row\" *matNoDataRow>\n    <td class=\"mat-cell\" colspan=\"4\">No data</td>\n  </tr>\n</wrapper-table>\n", styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 0 8px 8px 0;\n}\n"] }]
        }], propDecorators: { sort: [{
                type: ViewChild,
                args: ['sort']
            }] } });
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
export class WrapperTable {
    ngAfterContentInit() {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
        this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
        this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
        this.table.setNoDataRow(this.noDataRow);
    }
}
WrapperTable.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: WrapperTable, deps: [], target: i0.ɵɵFactoryTarget.Component });
WrapperTable.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.0", type: WrapperTable, selector: "wrapper-table", inputs: { columns: "columns", dataSource: "dataSource" }, queries: [{ propertyName: "noDataRow", first: true, predicate: MatNoDataRow, descendants: true }, { propertyName: "headerRowDefs", predicate: MatHeaderRowDef }, { propertyName: "rowDefs", predicate: MatRowDef }, { propertyName: "columnDefs", predicate: MatColumnDef }], viewQueries: [{ propertyName: "table", first: true, predicate: MatTable, descendants: true, static: true }], ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-content></ng-content>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Color Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n", styles: ["\n    table {\n      width: 100%;\n    }\n  "], dependencies: [{ kind: "component", type: i2.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { kind: "component", type: i3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i3.MatCell, selector: "mat-cell, td[mat-cell]" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: WrapperTable, decorators: [{
            type: Component,
            args: [{ selector: 'wrapper-table', template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-content></ng-content>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Color Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n", styles: ["\n    table {\n      width: 100%;\n    }\n  "] }]
        }], propDecorators: { headerRowDefs: [{
                type: ContentChildren,
                args: [MatHeaderRowDef]
            }], rowDefs: [{
                type: ContentChildren,
                args: [MatRowDef]
            }], columnDefs: [{
                type: ContentChildren,
                args: [MatColumnDef]
            }], noDataRow: [{
                type: ContentChild,
                args: [MatNoDataRow]
            }], table: [{
                type: ViewChild,
                args: [MatTable, { static: true }]
            }], columns: [{
                type: Input
            }], dataSource: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd3JhcHBlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC90YWJsZS13cmFwcGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13cmFwcGVkL3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC93cmFwcGVyLXRhYmxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDL0MsT0FBTyxFQUNMLFlBQVksRUFDWixlQUFlLEVBQ2YsWUFBWSxFQUNaLFNBQVMsRUFDVCxRQUFRLEVBQ1Isa0JBQWtCLEdBQ25CLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBU2pDLE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFB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QUFhO3NCQUE5QyxlQUFlO3VCQUFDLGVBQWU7Z0JBQ0osT0FBTztzQkFBbEMsZUFBZTt1QkFBQyxTQUFTO2dCQUNLLFVBQVU7c0JBQXhDLGVBQWU7dUJBQUMsWUFBWTtnQkFDRCxTQUFTO3NCQUFwQyxZQUFZO3VCQUFDLFlBQVk7Z0JBRVcsS0FBSztzQkFBekMsU0FBUzt1QkFBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO2dCQUUxQixPQUFPO3NCQUFmLEtBQUs7Z0JBRUcsVUFBVTtzQkFBbEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBJbnB1dCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIENvbnRlbnRDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFNvcnR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHtcbiAgTWF0Q29sdW1uRGVmLFxuICBNYXRIZWFkZXJSb3dEZWYsXG4gIE1hdE5vRGF0YVJvdyxcbiAgTWF0Um93RGVmLFxuICBNYXRUYWJsZSxcbiAgTWF0VGFibGVEYXRhU291cmNlLFxufSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgZXhhbXBsZSB0aGF0IHNob3dzIGhvdyB0byB3cmFwIGEgdGFibGUgY29tcG9uZW50IGZvciBkZWZpbml0aW9uIGFuZCBiZWhhdmlvciByZXVzZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtd3JhcHBlZC1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICd0YWJsZS13cmFwcGVkLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlV3JhcHBlZEV4YW1wbGUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTxQZXJpb2RpY0VsZW1lbnQ+KEVMRU1FTlRfREFUQSk7XG5cbiAgQFZpZXdDaGlsZCgnc29ydCcpIHNvcnQ6IE1hdFNvcnQ7XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICB9XG5cbiAgY2xlYXJUYWJsZSgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IFtdO1xuICB9XG5cbiAgYWRkRGF0YSgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IEVMRU1FTlRfREFUQTtcbiAgfVxufVxuXG4vKipcbiAqIFRhYmxlIGNvbXBvbmVudCB0aGF0IGFjY2VwdHMgY29sdW1uIGFuZCByb3cgZGVmaW5pdGlvbnMgaW4gaXRzIGNvbnRlbnQgdG8gYmUgcmVnaXN0ZXJlZCB0byB0aGVcbiAqIHRhYmxlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd3cmFwcGVyLXRhYmxlJyxcbiAgdGVtcGxhdGVVcmw6ICd3cmFwcGVyLXRhYmxlLmh0bWwnLFxuICBzdHlsZXM6IFtcbiAgICBgXG4gICAgdGFibGUge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBgLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBXcmFwcGVyVGFibGU8VD4gaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0IHtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRIZWFkZXJSb3dEZWYpIGhlYWRlclJvd0RlZnM6IFF1ZXJ5TGlzdDxNYXRIZWFkZXJSb3dEZWY+O1xuICBAQ29udGVudENoaWxkcmVuKE1hdFJvd0RlZikgcm93RGVmczogUXVlcnlMaXN0PE1hdFJvd0RlZjxUPj47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0Q29sdW1uRGVmKSBjb2x1bW5EZWZzOiBRdWVyeUxpc3Q8TWF0Q29sdW1uRGVmPjtcbiAgQENvbnRlbnRDaGlsZChNYXROb0RhdGFSb3cpIG5vRGF0YVJvdzogTWF0Tm9EYXRhUm93O1xuXG4gIEBWaWV3Q2hpbGQoTWF0VGFibGUsIHtzdGF0aWM6IHRydWV9KSB0YWJsZTogTWF0VGFibGU8VD47XG5cbiAgQElucHV0KCkgY29sdW1uczogc3RyaW5nW107XG5cbiAgQElucHV0KCkgZGF0YVNvdXJjZTogRGF0YVNvdXJjZTxUPjtcblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5jb2x1bW5EZWZzLmZvckVhY2goY29sdW1uRGVmID0+IHRoaXMudGFibGUuYWRkQ29sdW1uRGVmKGNvbHVtbkRlZikpO1xuICAgIHRoaXMucm93RGVmcy5mb3JFYWNoKHJvd0RlZiA9PiB0aGlzLnRhYmxlLmFkZFJvd0RlZihyb3dEZWYpKTtcbiAgICB0aGlzLmhlYWRlclJvd0RlZnMuZm9yRWFjaChoZWFkZXJSb3dEZWYgPT4gdGhpcy50YWJsZS5hZGRIZWFkZXJSb3dEZWYoaGVhZGVyUm93RGVmKSk7XG4gICAgdGhpcy50YWJsZS5zZXROb0RhdGFSb3codGhpcy5ub0RhdGFSb3cpO1xuICB9XG59XG4iLCI8ZGl2PlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJjbGVhclRhYmxlKClcIj5DbGVhciB0YWJsZTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIChjbGljayk9XCJhZGREYXRhKClcIj5BZGQgZGF0YTwvYnV0dG9uPlxuPC9kaXY+XG5cbjx3cmFwcGVyLXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBbY29sdW1uc109XCJkaXNwbGF5ZWRDb2x1bW5zXCJcbiAgICAgICAgICAgICAgIG1hdFNvcnQgI3NvcnQ9XCJtYXRTb3J0XCI+XG4gIDwhLS0gQ3VzdG9tIGNvbHVtbiBkZWZpbml0aW9uIHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB3cmFwcGVyIHRhYmxlLiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTmFtZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBDdXN0b20gcm93IGRlZmluaXRpb25zIHRvIGJlIHByb3ZpZGVkIHRvIHRoZSB3cmFwcGVyIHRhYmxlLiAtLT5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cblxuICA8IS0tIFJvdyBzaG93biB3aGVuIHRoZXJlIGlzIG5vIG1hdGNoaW5nIGRhdGEgdGhhdCB3aWxsIGJlIHByb3ZpZGVkIHRvIHRoZSB3cmFwcGVyIHRhYmxlLiAtLT5cbiAgPHRyIGNsYXNzPVwibWF0LXJvd1wiICptYXROb0RhdGFSb3c+XG4gICAgPHRkIGNsYXNzPVwibWF0LWNlbGxcIiBjb2xzcGFuPVwiNFwiPk5vIGRhdGE8L3RkPlxuICA8L3RyPlxuPC93cmFwcGVyLXRhYmxlPlxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cblxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyPiBOby4gPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwid2VpZ2h0XCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC53ZWlnaHR9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIENvbG9yIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBTeW1ib2wgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG48L3RhYmxlPlxuIl19