import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
/**
 * @title Testing with MatTableHarness
 */
export class TableHarnessExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = [
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
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0", type: TableHarnessExample, isStandalone: true, selector: "table-harness-example", ngImport: i0, template: "<table mat-table [dataSource]=\"dataSource\">\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef>No.</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\n    <td mat-footer-cell *matFooterCellDef>Number of the element</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>Name</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n    <td mat-footer-cell *matFooterCellDef>Name of the element</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\n    <td mat-footer-cell *matFooterCellDef>Weight of the element</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\n    <td mat-footer-cell *matFooterCellDef>Symbol of the element</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatFooterCellDef, selector: "[matFooterCellDef]" }, { kind: "directive", type: i1.MatFooterRowDef, selector: "[matFooterRowDef]", inputs: ["matFooterRowDef", "matFooterRowDefSticky"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "directive", type: i1.MatFooterCell, selector: "mat-footer-cell, td[mat-footer-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "component", type: i1.MatFooterRow, selector: "mat-footer-row, tr[mat-footer-row]", exportAs: ["matFooterRow"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: TableHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-harness-example', standalone: true, imports: [MatTableModule], template: "<table mat-table [dataSource]=\"dataSource\">\n  <ng-container matColumnDef=\"position\">\n    <th mat-header-cell *matHeaderCellDef>No.</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.position}}</td>\n    <td mat-footer-cell *matFooterCellDef>Number of the element</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"name\">\n    <th mat-header-cell *matHeaderCellDef>Name</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n    <td mat-footer-cell *matFooterCellDef>Name of the element</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"weight\">\n    <th mat-header-cell *matHeaderCellDef>Weight</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.weight}}</td>\n    <td mat-footer-cell *matFooterCellDef>Weight of the element</td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"symbol\">\n    <th mat-header-cell *matHeaderCellDef>Symbol</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.symbol}}</td>\n    <td mat-footer-cell *matFooterCellDef>Symbol of the element</td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaGFybmVzcy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtaGFybmVzcy90YWJsZS1oYXJuZXNzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1oYXJuZXNzL3RhYmxlLWhhcm5lc3MtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDOzs7QUFFdkQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sbUJBQW1CO0lBTmhDO1FBT0UscUJBQWdCLEdBQWEsQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUN0RSxlQUFVLEdBQUc7WUFDWCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7WUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztZQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO1lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztZQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7WUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO1lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztZQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7U0FDNUQsQ0FBQztLQUNIOzhHQWRZLG1CQUFtQjtrR0FBbkIsbUJBQW1CLGlGQ2JoQyx3d0NBNkJBLDJDRGxCWSxjQUFjOzsyRkFFYixtQkFBbUI7a0JBTi9CLFNBQVM7K0JBQ0UsdUJBQXVCLGNBRXJCLElBQUksV0FDUCxDQUFDLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuLyoqXG4gKiBAdGl0bGUgVGVzdGluZyB3aXRoIE1hdFRhYmxlSGFybmVzc1xuICovXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RhYmxlLWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtaGFybmVzcy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0VGFibGVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUhhcm5lc3NFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gW1xuICAgIHtwb3NpdGlvbjogMSwgbmFtZTogJ0h5ZHJvZ2VuJywgd2VpZ2h0OiAxLjAwNzksIHN5bWJvbDogJ0gnfSxcbiAgICB7cG9zaXRpb246IDIsIG5hbWU6ICdIZWxpdW0nLCB3ZWlnaHQ6IDQuMDAyNiwgc3ltYm9sOiAnSGUnfSxcbiAgICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAgICB7cG9zaXRpb246IDQsIG5hbWU6ICdCZXJ5bGxpdW0nLCB3ZWlnaHQ6IDkuMDEyMiwgc3ltYm9sOiAnQmUnfSxcbiAgICB7cG9zaXRpb246IDUsIG5hbWU6ICdCb3JvbicsIHdlaWdodDogMTAuODExLCBzeW1ib2w6ICdCJ30sXG4gICAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gICAge3Bvc2l0aW9uOiA3LCBuYW1lOiAnTml0cm9nZW4nLCB3ZWlnaHQ6IDE0LjAwNjcsIHN5bWJvbDogJ04nfSxcbiAgICB7cG9zaXRpb246IDgsIG5hbWU6ICdPeHlnZW4nLCB3ZWlnaHQ6IDE1Ljk5OTQsIHN5bWJvbDogJ08nfSxcbiAgICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICAgIHtwb3NpdGlvbjogMTAsIG5hbWU6ICdOZW9uJywgd2VpZ2h0OiAyMC4xNzk3LCBzeW1ib2w6ICdOZSd9LFxuICBdO1xufVxuIiwiPHRhYmxlIG1hdC10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPk5vLjwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQucG9zaXRpb259fTwvdGQ+XG4gICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj5OdW1iZXIgb2YgdGhlIGVsZW1lbnQ8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPk5hbWU8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBlbGVtZW50XCI+e3tlbGVtZW50Lm5hbWV9fTwvdGQ+XG4gICAgPHRkIG1hdC1mb290ZXItY2VsbCAqbWF0Rm9vdGVyQ2VsbERlZj5OYW1lIG9mIHRoZSBlbGVtZW50PC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ3ZWlnaHRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPldlaWdodDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQud2VpZ2h0fX08L3RkPlxuICAgIDx0ZCBtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+V2VpZ2h0IG9mIHRoZSBlbGVtZW50PC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzeW1ib2xcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlN5bWJvbDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj57e2VsZW1lbnQuc3ltYm9sfX08L3RkPlxuICAgIDx0ZCBtYXQtZm9vdGVyLWNlbGwgKm1hdEZvb3RlckNlbGxEZWY+U3ltYm9sIG9mIHRoZSBlbGVtZW50PC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1mb290ZXItcm93ICptYXRGb290ZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=