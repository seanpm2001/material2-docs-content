/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Component } from '@angular/core';
import { MatColumnResizeModule } from '@angular/material-experimental/column-resize';
import { MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/material-experimental/column-resize";
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
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
/**
 * @title Opt-in column resize with a table-based mat-table.
 */
export class OptInColumnResizeExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: OptInColumnResizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.5", type: OptInColumnResizeExample, isStandalone: true, selector: "opt-in-column-resize-example", ngImport: i0, template: "<table mat-table columnResize [dataSource]=\"dataSource\" class=\"mat-elevation-z8 example-table\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\" sticky>\n    <th mat-header-cell *matHeaderCellDef resizable [matResizableMaxWidthPx]=\"100\"> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\" sticky>\n    <th mat-header-cell *matHeaderCellDef resizable [matResizableMinWidthPx]=\"150\"> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column (not resizable) -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight (Not resizable) </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef resizable> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [":host {\n  display: block;\n  overflow: auto;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatColumnResizeModule }, { kind: "directive", type: i2.MatColumnResize, selector: "table[mat-table][columnResize]" }, { kind: "directive", type: i2.MatResizable, selector: "mat-header-cell[resizable], th[mat-header-cell][resizable]", inputs: ["matResizableMinWidthPx", "matResizableMaxWidthPx"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: OptInColumnResizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'opt-in-column-resize-example', standalone: true, imports: [MatTableModule, MatColumnResizeModule], template: "<table mat-table columnResize [dataSource]=\"dataSource\" class=\"mat-elevation-z8 example-table\">\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"position\" sticky>\n    <th mat-header-cell *matHeaderCellDef resizable [matResizableMaxWidthPx]=\"100\"> No. </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"name\" sticky>\n    <th mat-header-cell *matHeaderCellDef resizable [matResizableMinWidthPx]=\"150\"> Name </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n  </ng-container>\n\n  <!-- Weight Column (not resizable) -->\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef> Weight (Not resizable) </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef resizable> Symbol </th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [":host {\n  display: block;\n  overflow: auto;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9jb2x1bW4tcmVzaXplL29wdC1pbi1jb2x1bW4tcmVzaXplL29wdC1pbi1jb2x1bW4tcmVzaXplLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9vcHQtaW4tY29sdW1uLXJlc2l6ZS9vcHQtaW4tY29sdW1uLXJlc2l6ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMscUJBQXFCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUNuRixPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFTdkQsTUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ2hFLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDOUQsQ0FBQztBQUVGOztHQUVHO0FBUUgsTUFBTSxPQUFPLHdCQUF3QjtJQVByQztRQVFFLHFCQUFnQixHQUFhLENBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDdEUsZUFBVSxHQUFHLFlBQVksQ0FBQztLQUMzQjtxSEFIWSx3QkFBd0I7eUdBQXhCLHdCQUF3Qix3RkNwRHJDLDR1Q0E0QkEsMkdEc0JZLGNBQWMsc2dDQUFFLHFCQUFxQjs7a0dBRXBDLHdCQUF3QjtrQkFQcEMsU0FBUzsrQkFDRSw4QkFBOEIsY0FHNUIsSUFBSSxXQUNQLENBQUMsY0FBYyxFQUFFLHFCQUFxQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q29sdW1uUmVzaXplTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZSc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAge3Bvc2l0aW9uOiAyLCBuYW1lOiAnSGVsaXVtJywgd2VpZ2h0OiA0LjAwMjYsIHN5bWJvbDogJ0hlJ30sXG4gIHtwb3NpdGlvbjogMywgbmFtZTogJ0xpdGhpdW0nLCB3ZWlnaHQ6IDYuOTQxLCBzeW1ib2w6ICdMaSd9LFxuICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAge3Bvc2l0aW9uOiA1LCBuYW1lOiAnQm9yb24nLCB3ZWlnaHQ6IDEwLjgxMSwgc3ltYm9sOiAnQid9LFxuICB7cG9zaXRpb246IDYsIG5hbWU6ICdDYXJib24nLCB3ZWlnaHQ6IDEyLjAxMDcsIHN5bWJvbDogJ0MnfSxcbiAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAge3Bvc2l0aW9uOiA4LCBuYW1lOiAnT3h5Z2VuJywgd2VpZ2h0OiAxNS45OTk0LCBzeW1ib2w6ICdPJ30sXG4gIHtwb3NpdGlvbjogOSwgbmFtZTogJ0ZsdW9yaW5lJywgd2VpZ2h0OiAxOC45OTg0LCBzeW1ib2w6ICdGJ30sXG4gIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuICB7cG9zaXRpb246IDExLCBuYW1lOiAnU29kaXVtJywgd2VpZ2h0OiAyMi45ODk3LCBzeW1ib2w6ICdOYSd9LFxuICB7cG9zaXRpb246IDEyLCBuYW1lOiAnTWFnbmVzaXVtJywgd2VpZ2h0OiAyNC4zMDUsIHN5bWJvbDogJ01nJ30sXG4gIHtwb3NpdGlvbjogMTMsIG5hbWU6ICdBbHVtaW51bScsIHdlaWdodDogMjYuOTgxNSwgc3ltYm9sOiAnQWwnfSxcbiAge3Bvc2l0aW9uOiAxNCwgbmFtZTogJ1NpbGljb24nLCB3ZWlnaHQ6IDI4LjA4NTUsIHN5bWJvbDogJ1NpJ30sXG4gIHtwb3NpdGlvbjogMTUsIG5hbWU6ICdQaG9zcGhvcnVzJywgd2VpZ2h0OiAzMC45NzM4LCBzeW1ib2w6ICdQJ30sXG4gIHtwb3NpdGlvbjogMTYsIG5hbWU6ICdTdWxmdXInLCB3ZWlnaHQ6IDMyLjA2NSwgc3ltYm9sOiAnUyd9LFxuICB7cG9zaXRpb246IDE3LCBuYW1lOiAnQ2hsb3JpbmUnLCB3ZWlnaHQ6IDM1LjQ1Mywgc3ltYm9sOiAnQ2wnfSxcbiAge3Bvc2l0aW9uOiAxOCwgbmFtZTogJ0FyZ29uJywgd2VpZ2h0OiAzOS45NDgsIHN5bWJvbDogJ0FyJ30sXG4gIHtwb3NpdGlvbjogMTksIG5hbWU6ICdQb3Rhc3NpdW0nLCB3ZWlnaHQ6IDM5LjA5ODMsIHN5bWJvbDogJ0snfSxcbiAge3Bvc2l0aW9uOiAyMCwgbmFtZTogJ0NhbGNpdW0nLCB3ZWlnaHQ6IDQwLjA3OCwgc3ltYm9sOiAnQ2EnfSxcbl07XG5cbi8qKlxuICogQHRpdGxlIE9wdC1pbiBjb2x1bW4gcmVzaXplIHdpdGggYSB0YWJsZS1iYXNlZCBtYXQtdGFibGUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ29wdC1pbi1jb2x1bW4tcmVzaXplLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ29wdC1pbi1jb2x1bW4tcmVzaXplLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnb3B0LWluLWNvbHVtbi1yZXNpemUtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0VGFibGVNb2R1bGUsIE1hdENvbHVtblJlc2l6ZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE9wdEluQ29sdW1uUmVzaXplRXhhbXBsZSB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IEVMRU1FTlRfREFUQTtcbn1cbiIsIjx0YWJsZSBtYXQtdGFibGUgY29sdW1uUmVzaXplIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBjbGFzcz1cIm1hdC1lbGV2YXRpb24tejggZXhhbXBsZS10YWJsZVwiPlxuICA8IS0tIFBvc2l0aW9uIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwb3NpdGlvblwiIHN0aWNreT5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIHJlc2l6YWJsZSBbbWF0UmVzaXphYmxlTWF4V2lkdGhQeF09XCIxMDBcIj4gTm8uIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnBvc2l0aW9ufX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBOYW1lIENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJuYW1lXCIgc3RpY2t5PlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgcmVzaXphYmxlIFttYXRSZXNpemFibGVNaW5XaWR0aFB4XT1cIjE1MFwiPiBOYW1lIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFdlaWdodCBDb2x1bW4gKG5vdCByZXNpemFibGUpIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWY+IFdlaWdodCAoTm90IHJlc2l6YWJsZSkgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQud2VpZ2h0fX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgcmVzaXphYmxlPiBTeW1ib2wgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=