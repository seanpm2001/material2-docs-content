import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/input";
import * as i3 from "@angular/material/table";
import * as i4 from "@angular/material/sort";
import * as i5 from "@angular/material/paginator";
/** Constants used to fill up our data base. */
const FRUITS = [
    'blueberry',
    'lychee',
    'kiwi',
    'mango',
    'peach',
    'lime',
    'pomegranate',
    'pineapple',
];
const NAMES = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth',
];
/**
 * @title Data table with sorting, pagination, and filtering.
 */
export class TableOverviewExample {
    constructor() {
        this.displayedColumns = ['id', 'name', 'progress', 'fruit'];
        // Create 100 users
        const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));
        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(users);
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    applyFilter(event) {
        const filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: TableOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: TableOverviewExample, isStandalone: true, selector: "table-overview-example", viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }, { propertyName: "sort", first: true, predicate: MatSort, descendants: true }], ngImport: i0, template: "<mat-form-field>\n  <mat-label>Filter</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n    <!-- Fruit Column -->\n    <ng-container matColumnDef=\"fruit\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fruit </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.fruit}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of users\"></mat-paginator>\n</div>\n\n", styles: ["table {\n  width: 100%;\n}\n\n.mat-mdc-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i1.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "directive", type: i1.MatLabel, selector: "mat-label" }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i2.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i3.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i3.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i3.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i3.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i3.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "directive", type: i3.MatNoDataRow, selector: "ng-template[matNoDataRow]" }, { kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i4.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i4.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i5.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: TableOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-overview-example', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule], template: "<mat-form-field>\n  <mat-label>Filter</mat-label>\n  <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. Mia\" #input>\n</mat-form-field>\n\n<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> ID </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.id}} </td>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Progress </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.progress}}% </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Name </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.name}} </td>\n    </ng-container>\n\n    <!-- Fruit Column -->\n    <ng-container matColumnDef=\"fruit\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header> Fruit </th>\n      <td mat-cell *matCellDef=\"let row\"> {{row.fruit}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n    <!-- Row shown when there is no matching data. -->\n    <tr class=\"mat-row\" *matNoDataRow>\n      <td class=\"mat-cell\" colspan=\"4\">No data matching the filter \"{{input.value}}\"</td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\" aria-label=\"Select page of users\"></mat-paginator>\n</div>\n\n", styles: ["table {\n  width: 100%;\n}\n\n.mat-mdc-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\ntd, th {\n  width: 25%;\n}\n"] }]
        }], ctorParameters: () => [], propDecorators: { paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], sort: [{
                type: ViewChild,
                args: [MatSort]
            }] } });
/** Builds and returns a new User. */
function createNewUser(id) {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
        ' ' +
        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
        '.';
    return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYmxlL3RhYmxlLW92ZXJ2aWV3L3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1vdmVydmlldy90YWJsZS1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFnQixTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSw2QkFBNkIsQ0FBQztBQUM3RSxPQUFPLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBQyxrQkFBa0IsRUFBRSxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMzRSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7QUFTaEUsK0NBQStDO0FBQy9DLE1BQU0sTUFBTSxHQUFhO0lBQ3ZCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsTUFBTTtJQUNOLE9BQU87SUFDUCxPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixXQUFXO0NBQ1osQ0FBQztBQUNGLE1BQU0sS0FBSyxHQUFhO0lBQ3RCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxRQUFRO0lBQ1IsTUFBTTtJQUNOLFdBQVc7SUFDWCxVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixVQUFVO0lBQ1YsUUFBUTtJQUNSLE1BQU07SUFDTixNQUFNO0lBQ04sUUFBUTtJQUNSLFFBQVE7SUFDUixLQUFLO0lBQ0wsUUFBUTtJQUNSLFdBQVc7Q0FDWixDQUFDO0FBRUY7O0dBRUc7QUFRSCxNQUFNLE9BQU8sb0JBQW9CO0lBTy9CO1FBTkEscUJBQWdCLEdBQWEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxPQUFPLENBQUMsQ0FBQztRQU8vRCxtQkFBbUI7UUFDbkIsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUV4RSw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25DLENBQUM7SUFFRCxXQUFXLENBQUMsS0FBWTtRQUN0QixNQUFNLFdBQVcsR0FBSSxLQUFLLENBQUMsTUFBMkIsQ0FBQyxLQUFLLENBQUM7UUFDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRTFELElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDO21IQTNCVSxvQkFBb0I7dUdBQXBCLG9CQUFvQiw2SEFJcEIsWUFBWSx1RUFDWixPQUFPLGdEQzlEcEIsMm5EQTRDQSxtTERXWSxrQkFBa0IsMFNBQUUsY0FBYywwV0FBRSxjQUFjLHFtQ0FBRSxhQUFhLGlkQUFFLGtCQUFrQjs7Z0dBRXBGLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSx3QkFBd0IsY0FHdEIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLENBQUM7d0RBTXZFLFNBQVM7c0JBQWpDLFNBQVM7dUJBQUMsWUFBWTtnQkFDSCxJQUFJO3NCQUF2QixTQUFTO3VCQUFDLE9BQU87O0FBeUJwQixxQ0FBcUM7QUFDckMsU0FBUyxhQUFhLENBQUMsRUFBVTtJQUMvQixNQUFNLElBQUksR0FDUixLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsR0FBRztRQUNILEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDL0QsR0FBRyxDQUFDO0lBRU4sT0FBTztRQUNMLEVBQUUsRUFBRSxFQUFFLENBQUMsUUFBUSxFQUFFO1FBQ2pCLElBQUksRUFBRSxJQUFJO1FBQ1YsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLFFBQVEsRUFBRTtRQUNwRCxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQy9ELENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFBhZ2luYXRvciwgTWF0UGFnaW5hdG9yTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xuaW1wb3J0IHtNYXRTb3J0LCBNYXRTb3J0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zb3J0JztcbmltcG9ydCB7TWF0VGFibGVEYXRhU291cmNlLCBNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJEYXRhIHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwcm9ncmVzczogc3RyaW5nO1xuICBmcnVpdDogc3RyaW5nO1xufVxuXG4vKiogQ29uc3RhbnRzIHVzZWQgdG8gZmlsbCB1cCBvdXIgZGF0YSBiYXNlLiAqL1xuY29uc3QgRlJVSVRTOiBzdHJpbmdbXSA9IFtcbiAgJ2JsdWViZXJyeScsXG4gICdseWNoZWUnLFxuICAna2l3aScsXG4gICdtYW5nbycsXG4gICdwZWFjaCcsXG4gICdsaW1lJyxcbiAgJ3BvbWVncmFuYXRlJyxcbiAgJ3BpbmVhcHBsZScsXG5dO1xuY29uc3QgTkFNRVM6IHN0cmluZ1tdID0gW1xuICAnTWFpYScsXG4gICdBc2hlcicsXG4gICdPbGl2aWEnLFxuICAnQXR0aWN1cycsXG4gICdBbWVsaWEnLFxuICAnSmFjaycsXG4gICdDaGFybG90dGUnLFxuICAnVGhlb2RvcmUnLFxuICAnSXNsYScsXG4gICdPbGl2ZXInLFxuICAnSXNhYmVsbGEnLFxuICAnSmFzcGVyJyxcbiAgJ0NvcmEnLFxuICAnTGV2aScsXG4gICdWaW9sZXQnLFxuICAnQXJ0aHVyJyxcbiAgJ01pYScsXG4gICdUaG9tYXMnLFxuICAnRWxpemFiZXRoJyxcbl07XG5cbi8qKlxuICogQHRpdGxlIERhdGEgdGFibGUgd2l0aCBzb3J0aW5nLCBwYWdpbmF0aW9uLCBhbmQgZmlsdGVyaW5nLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1vdmVydmlldy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYmxlLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdFRhYmxlTW9kdWxlLCBNYXRTb3J0TW9kdWxlLCBNYXRQYWdpbmF0b3JNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZU92ZXJ2aWV3RXhhbXBsZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFsnaWQnLCAnbmFtZScsICdwcm9ncmVzcycsICdmcnVpdCddO1xuICBkYXRhU291cmNlOiBNYXRUYWJsZURhdGFTb3VyY2U8VXNlckRhdGE+O1xuXG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIC8vIENyZWF0ZSAxMDAgdXNlcnNcbiAgICBjb25zdCB1c2VycyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwfSwgKF8sIGspID0+IGNyZWF0ZU5ld1VzZXIoayArIDEpKTtcblxuICAgIC8vIEFzc2lnbiB0aGUgZGF0YSB0byB0aGUgZGF0YSBzb3VyY2UgZm9yIHRoZSB0YWJsZSB0byByZW5kZXJcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHVzZXJzKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gIH1cblxuICBhcHBseUZpbHRlcihldmVudDogRXZlbnQpIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG59XG5cbi8qKiBCdWlsZHMgYW5kIHJldHVybnMgYSBuZXcgVXNlci4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU5ld1VzZXIoaWQ6IG51bWJlcik6IFVzZXJEYXRhIHtcbiAgY29uc3QgbmFtZSA9XG4gICAgTkFNRVNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKE5BTUVTLmxlbmd0aCAtIDEpKV0gK1xuICAgICcgJyArXG4gICAgTkFNRVNbTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogKE5BTUVTLmxlbmd0aCAtIDEpKV0uY2hhckF0KDApICtcbiAgICAnLic7XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogaWQudG9TdHJpbmcoKSxcbiAgICBuYW1lOiBuYW1lLFxuICAgIHByb2dyZXNzOiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxMDApLnRvU3RyaW5nKCksXG4gICAgZnJ1aXQ6IEZSVUlUU1tNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoRlJVSVRTLmxlbmd0aCAtIDEpKV0sXG4gIH07XG59XG4iLCI8bWF0LWZvcm0tZmllbGQ+XG4gIDxtYXQtbGFiZWw+RmlsdGVyPC9tYXQtbGFiZWw+XG4gIDxpbnB1dCBtYXRJbnB1dCAoa2V5dXApPVwiYXBwbHlGaWx0ZXIoJGV2ZW50KVwiIHBsYWNlaG9sZGVyPVwiRXguIE1pYVwiICNpbnB1dD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxkaXYgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXo4XCI+XG4gIDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG1hdFNvcnQ+XG5cbiAgICA8IS0tIElEIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImlkXCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gSUQgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3tyb3cuaWR9fSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSBQcm9ncmVzcyBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJwcm9ncmVzc1wiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IFByb2dyZXNzIDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+IHt7cm93LnByb2dyZXNzfX0lIDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwibmFtZVwiPlxuICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXI+IE5hbWUgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3tyb3cubmFtZX19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8IS0tIEZydWl0IENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImZydWl0XCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlcj4gRnJ1aXQgPC90aD5cbiAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCByb3dcIj4ge3tyb3cuZnJ1aXR9fSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuXG4gICAgPCEtLSBSb3cgc2hvd24gd2hlbiB0aGVyZSBpcyBubyBtYXRjaGluZyBkYXRhLiAtLT5cbiAgICA8dHIgY2xhc3M9XCJtYXQtcm93XCIgKm1hdE5vRGF0YVJvdz5cbiAgICAgIDx0ZCBjbGFzcz1cIm1hdC1jZWxsXCIgY29sc3Bhbj1cIjRcIj5ObyBkYXRhIG1hdGNoaW5nIHRoZSBmaWx0ZXIgXCJ7e2lucHV0LnZhbHVlfX1cIjwvdGQ+XG4gICAgPC90cj5cbiAgPC90YWJsZT5cblxuICA8bWF0LXBhZ2luYXRvciBbcGFnZVNpemVPcHRpb25zXT1cIls1LCAxMCwgMjUsIDEwMF1cIiBhcmlhLWxhYmVsPVwiU2VsZWN0IHBhZ2Ugb2YgdXNlcnNcIj48L21hdC1wYWdpbmF0b3I+XG48L2Rpdj5cblxuIl19