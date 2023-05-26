import { DataSource } from '@angular/cdk/collections';
import { Component, ContentChildren, Input, QueryList, ViewChild, ContentChild, forwardRef, } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatColumnDef, MatHeaderRowDef, MatNoDataRow, MatRowDef, MatTable, MatTableDataSource, MatTableModule, } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
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
class TableWrappedExample {
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TableWrappedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TableWrappedExample, isStandalone: true, selector: "table-wrapped-example", viewQueries: [{ propertyName: "sort", first: true, predicate: ["sort"], descendants: true }], ngImport: i0, template: "<div>\n  <button mat-raised-button (click)=\"clearTable()\">Clear table</button>\n  <button mat-raised-button (click)=\"addData()\">Add data</button>\n</div>\n\n<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\n               matSort #sort=\"matSort\">\n  <!-- Custom column definition to be provided to the wrapper table. -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Custom row definitions to be provided to the wrapper table. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Row shown when there is no matching data that will be provided to the wrapper table. -->\n  <tr class=\"mat-row\" *matNoDataRow>\n    <td class=\"mat-cell\" colspan=\"4\">No data</td>\n  </tr>\n</wrapper-table>\n", styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 0 8px 8px 0;\n}\n"], dependencies: [{ kind: "ngmodule", type: i0.forwardRef(function () { return MatButtonModule; }) }, { kind: "component", type: i0.forwardRef(function () { return i1.MatButton; }), selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i0.forwardRef(function () { return WrapperTable; }), selector: "wrapper-table", inputs: ["columns", "dataSource"] }, { kind: "ngmodule", type: i0.forwardRef(function () { return MatSortModule; }) }, { kind: "directive", type: i0.forwardRef(function () { return i2.MatSort; }), selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "ngmodule", type: i0.forwardRef(function () { return MatTableModule; }) }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatHeaderCellDef; }), selector: "[matHeaderCellDef]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatHeaderRowDef; }), selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatColumnDef; }), selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatCellDef; }), selector: "[matCellDef]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatRowDef; }), selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatHeaderCell; }), selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatCell; }), selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i0.forwardRef(function () { return i3.MatHeaderRow; }), selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i0.forwardRef(function () { return i3.MatRow; }), selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i0.forwardRef(function () { return i3.MatNoDataRow; }), selector: "ng-template[matNoDataRow]" }] }); }
}
export { TableWrappedExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TableWrappedExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-wrapped-example', standalone: true, imports: [MatButtonModule, forwardRef(() => WrapperTable), MatSortModule, MatTableModule], template: "<div>\n  <button mat-raised-button (click)=\"clearTable()\">Clear table</button>\n  <button mat-raised-button (click)=\"addData()\">Add data</button>\n</div>\n\n<wrapper-table [dataSource]=\"dataSource\" [columns]=\"displayedColumns\"\n               matSort #sort=\"matSort\">\n  <!-- Custom column definition to be provided to the wrapper table. -->\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Custom row definitions to be provided to the wrapper table. -->\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n  <!-- Row shown when there is no matching data that will be provided to the wrapper table. -->\n  <tr class=\"mat-row\" *matNoDataRow>\n    <td class=\"mat-cell\" colspan=\"4\">No data</td>\n  </tr>\n</wrapper-table>\n", styles: ["table {\n  width: 100%;\n}\n\nbutton {\n  margin: 0 8px 8px 0;\n}\n"] }]
        }], propDecorators: { sort: [{
                type: ViewChild,
                args: ['sort']
            }] } });
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
class WrapperTable {
    ngAfterContentInit() {
        this.columnDefs.forEach(columnDef => this.table.addColumnDef(columnDef));
        this.rowDefs.forEach(rowDef => this.table.addRowDef(rowDef));
        this.headerRowDefs.forEach(headerRowDef => this.table.addHeaderRowDef(headerRowDef));
        this.table.setNoDataRow(this.noDataRow);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: WrapperTable, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: WrapperTable, isStandalone: true, selector: "wrapper-table", inputs: { columns: "columns", dataSource: "dataSource" }, queries: [{ propertyName: "noDataRow", first: true, predicate: MatNoDataRow, descendants: true }, { propertyName: "headerRowDefs", predicate: MatHeaderRowDef }, { propertyName: "rowDefs", predicate: MatRowDef }, { propertyName: "columnDefs", predicate: MatColumnDef }], viewQueries: [{ propertyName: "table", first: true, predicate: MatTable, descendants: true, static: true }], ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-content></ng-content>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Color Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n", styles: ["\n    table {\n      width: 100%;\n    }\n  "], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i3.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "ngmodule", type: MatSortModule }, { kind: "component", type: i2.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }] }); }
}
export { WrapperTable };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: WrapperTable, decorators: [{
            type: Component,
            args: [{ selector: 'wrapper-table', standalone: true, imports: [MatTableModule, MatSortModule], template: "<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <ng-content></ng-content>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef mat-sort-header> Weight </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Color Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n</table>\n", styles: ["\n    table {\n      width: 100%;\n    }\n  "] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtd3JhcHBlZC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC90YWJsZS13cmFwcGVkLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS13cmFwcGVkL3RhYmxlLXdyYXBwZWQtZXhhbXBsZS5odG1sIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtd3JhcHBlZC93cmFwcGVyLXRhYmxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFFTCxTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFFTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBQ1osU0FBUyxFQUNULFFBQVEsRUFDUixrQkFBa0IsRUFDbEIsY0FBYyxHQUNmLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7OztBQVN6RCxNQUFNLFlBQVksR0FBc0I7SUFDdEMsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzVELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzlELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUN6RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0NBQzVELENBQUM7QUFFRjs7R0FFRztBQUNILE1BT2EsbUJBQW1CO0lBUGhDO1FBUUUscUJBQWdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBa0IsWUFBWSxDQUFDLENBQUM7S0FlcEU7SUFYQyxlQUFlO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFlBQVksQ0FBQztJQUN0QyxDQUFDOzhHQWhCVSxtQkFBbUI7a0dBQW5CLG1CQUFtQiwrS0N0RGhDLDQ4QkFzQkEsK0pEOEJZLGVBQWUsMFZBc0NkLFlBQVksbUlBdENvQyxhQUFhLHdVQUFFLGNBQWM7O1NBRTdFLG1CQUFtQjsyRkFBbkIsbUJBQW1CO2tCQVAvQixTQUFTOytCQUNFLHVCQUF1QixjQUdyQixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFFLGFBQWEsRUFBRSxjQUFjLENBQUM7OEJBTXRFLElBQUk7c0JBQXRCLFNBQVM7dUJBQUMsTUFBTTs7QUFlbkI7OztHQUdHO0FBQ0gsTUFhYSxZQUFZO0lBWXZCLGtCQUFrQjtRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQzs4R0FqQlUsWUFBWTtrR0FBWixZQUFZLDBLQUlULFlBQVksbUVBSFQsZUFBZSwwQ0FDZixTQUFTLDZDQUNULFlBQVksb0VBR2xCLFFBQVEsOERFaEdyQixteUJBcUJBLHFHRm1FWSxjQUFjLDZqQkFBRSxhQUFhOztTQUU1QixZQUFZOzJGQUFaLFlBQVk7a0JBYnhCLFNBQVM7K0JBQ0UsZUFBZSxjQVNiLElBQUksV0FDUCxDQUFDLGNBQWMsRUFBRSxhQUFhLENBQUM7OEJBR04sYUFBYTtzQkFBOUMsZUFBZTt1QkFBQyxlQUFlO2dCQUNKLE9BQU87c0JBQWxDLGVBQWU7dUJBQUMsU0FBUztnQkFDSyxVQUFVO3NCQUF4QyxlQUFlO3VCQUFDLFlBQVk7Z0JBQ0QsU0FBUztzQkFBcEMsWUFBWTt1QkFBQyxZQUFZO2dCQUVXLEtBQUs7c0JBQXpDLFNBQVM7dUJBQUMsUUFBUSxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQztnQkFFMUIsT0FBTztzQkFBZixLQUFLO2dCQUVHLFVBQVU7c0JBQWxCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgSW5wdXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBDb250ZW50Q2hpbGQsXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRTb3J0LCBNYXRTb3J0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7XG4gIE1hdENvbHVtbkRlZixcbiAgTWF0SGVhZGVyUm93RGVmLFxuICBNYXROb0RhdGFSb3csXG4gIE1hdFJvd0RlZixcbiAgTWF0VGFibGUsXG4gIE1hdFRhYmxlRGF0YVNvdXJjZSxcbiAgTWF0VGFibGVNb2R1bGUsXG59IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIFRhYmxlIGV4YW1wbGUgdGhhdCBzaG93cyBob3cgdG8gd3JhcCBhIHRhYmxlIGNvbXBvbmVudCBmb3IgZGVmaW5pdGlvbiBhbmQgYmVoYXZpb3IgcmV1c2UuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLXdyYXBwZWQtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWyd0YWJsZS13cmFwcGVkLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtd3JhcHBlZC1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0QnV0dG9uTW9kdWxlLCBmb3J3YXJkUmVmKCgpID0+IFdyYXBwZXJUYWJsZSksIE1hdFNvcnRNb2R1bGUsIE1hdFRhYmxlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFibGVXcmFwcGVkRXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsncG9zaXRpb24nLCAnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4oRUxFTUVOVF9EQVRBKTtcblxuICBAVmlld0NoaWxkKCdzb3J0Jykgc29ydDogTWF0U29ydDtcblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxuICBjbGVhclRhYmxlKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107XG4gIH1cblxuICBhZGREYXRhKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gRUxFTUVOVF9EQVRBO1xuICB9XG59XG5cbi8qKlxuICogVGFibGUgY29tcG9uZW50IHRoYXQgYWNjZXB0cyBjb2x1bW4gYW5kIHJvdyBkZWZpbml0aW9ucyBpbiBpdHMgY29udGVudCB0byBiZSByZWdpc3RlcmVkIHRvIHRoZVxuICogdGFibGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3dyYXBwZXItdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ3dyYXBwZXItdGFibGUuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICB0YWJsZSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIGAsXG4gIF0sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRUYWJsZU1vZHVsZSwgTWF0U29ydE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFdyYXBwZXJUYWJsZTxUPiBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBAQ29udGVudENoaWxkcmVuKE1hdEhlYWRlclJvd0RlZikgaGVhZGVyUm93RGVmczogUXVlcnlMaXN0PE1hdEhlYWRlclJvd0RlZj47XG4gIEBDb250ZW50Q2hpbGRyZW4oTWF0Um93RGVmKSByb3dEZWZzOiBRdWVyeUxpc3Q8TWF0Um93RGVmPFQ+PjtcbiAgQENvbnRlbnRDaGlsZHJlbihNYXRDb2x1bW5EZWYpIGNvbHVtbkRlZnM6IFF1ZXJ5TGlzdDxNYXRDb2x1bW5EZWY+O1xuICBAQ29udGVudENoaWxkKE1hdE5vRGF0YVJvdykgbm9EYXRhUm93OiBNYXROb0RhdGFSb3c7XG5cbiAgQFZpZXdDaGlsZChNYXRUYWJsZSwge3N0YXRpYzogdHJ1ZX0pIHRhYmxlOiBNYXRUYWJsZTxUPjtcblxuICBASW5wdXQoKSBjb2x1bW5zOiBzdHJpbmdbXTtcblxuICBASW5wdXQoKSBkYXRhU291cmNlOiBEYXRhU291cmNlPFQ+O1xuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmNvbHVtbkRlZnMuZm9yRWFjaChjb2x1bW5EZWYgPT4gdGhpcy50YWJsZS5hZGRDb2x1bW5EZWYoY29sdW1uRGVmKSk7XG4gICAgdGhpcy5yb3dEZWZzLmZvckVhY2gocm93RGVmID0+IHRoaXMudGFibGUuYWRkUm93RGVmKHJvd0RlZikpO1xuICAgIHRoaXMuaGVhZGVyUm93RGVmcy5mb3JFYWNoKGhlYWRlclJvd0RlZiA9PiB0aGlzLnRhYmxlLmFkZEhlYWRlclJvd0RlZihoZWFkZXJSb3dEZWYpKTtcbiAgICB0aGlzLnRhYmxlLnNldE5vRGF0YVJvdyh0aGlzLm5vRGF0YVJvdyk7XG4gIH1cbn1cbiIsIjxkaXY+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImNsZWFyVGFibGUoKVwiPkNsZWFyIHRhYmxlPC9idXR0b24+XG4gIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24gKGNsaWNrKT1cImFkZERhdGEoKVwiPkFkZCBkYXRhPC9idXR0b24+XG48L2Rpdj5cblxuPHdyYXBwZXItdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFtjb2x1bW5zXT1cImRpc3BsYXllZENvbHVtbnNcIlxuICAgICAgICAgICAgICAgbWF0U29ydCAjc29ydD1cIm1hdFNvcnRcIj5cbiAgPCEtLSBDdXN0b20gY29sdW1uIGRlZmluaXRpb24gdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHdyYXBwZXIgdGFibGUuIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiBOYW1lIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIEN1c3RvbSByb3cgZGVmaW5pdGlvbnMgdG8gYmUgcHJvdmlkZWQgdG8gdGhlIHdyYXBwZXIgdGFibGUuIC0tPlxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gIDwhLS0gUm93IHNob3duIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgZGF0YSB0aGF0IHdpbGwgYmUgcHJvdmlkZWQgdG8gdGhlIHdyYXBwZXIgdGFibGUuIC0tPlxuICA8dHIgY2xhc3M9XCJtYXQtcm93XCIgKm1hdE5vRGF0YVJvdz5cbiAgICA8dGQgY2xhc3M9XCJtYXQtY2VsbFwiIGNvbHNwYW49XCI0XCI+Tm8gZGF0YTwvdGQ+XG4gIDwvdHI+XG48L3dyYXBwZXItdGFibGU+XG4iLCI8dGFibGUgbWF0LXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejhcIj5cbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuXG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInBvc2l0aW9uXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IE5vLiA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gV2VpZ2h0IDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LndlaWdodH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gQ29sb3IgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFN5bWJvbCA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cbjwvdGFibGU+XG4iXX0=