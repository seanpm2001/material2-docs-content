import { CdkSelectionModule } from '@angular/cdk-experimental/selection';
import { Component } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "@angular/cdk-experimental/selection";
/**
 * @title CDK Selection Column on a CDK table.
 */
export class CdkSelectionColumnExample {
    constructor() {
        this.displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
        this.selected = [];
    }
    selectionChanged(event) {
        this.selected = event.after.map(select => select.value.name);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: CdkSelectionColumnExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0", type: CdkSelectionColumnExample, isStandalone: true, selector: "cdk-selection-column-example", ngImport: i0, template: "Selected: {{selected}}\n<table class=\"example-table\" cdk-table [dataSource]=\"dataSource\" cdkSelection [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selectionChanged($event)\">\n    <cdk-selection-column cdkSelectionColumnName=\"select\"></cdk-selection-column>\n    <!-- Position Column -->\n    <ng-container cdkColumnDef=\"position\">\n      <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n      <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container cdkColumnDef=\"weight\">\n      <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container cdkColumnDef=\"symbol\">\n      <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" cdkRowSelection [cdkRowSelectionValue]=\"row\"></tr>\n</table>\n", styles: [".example-table {\n  border-collapse: collapse;\n}\n\ntr.cdk-selected {\n  background-color: yellow;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTableModule }, { kind: "component", type: i1.CdkTable, selector: "cdk-table, table[cdk-table]", inputs: ["trackBy", "dataSource", "multiTemplateDataRows", "fixedLayout"], outputs: ["contentChanged"], exportAs: ["cdkTable"] }, { kind: "directive", type: i1.CdkRowDef, selector: "[cdkRowDef]", inputs: ["cdkRowDefColumns", "cdkRowDefWhen"] }, { kind: "directive", type: i1.CdkCellDef, selector: "[cdkCellDef]" }, { kind: "directive", type: i1.CdkHeaderCellDef, selector: "[cdkHeaderCellDef]" }, { kind: "directive", type: i1.CdkColumnDef, selector: "[cdkColumnDef]", inputs: ["cdkColumnDef", "sticky", "stickyEnd"] }, { kind: "directive", type: i1.CdkCell, selector: "cdk-cell, td[cdk-cell]" }, { kind: "component", type: i1.CdkRow, selector: "cdk-row, tr[cdk-row]" }, { kind: "directive", type: i1.CdkHeaderCell, selector: "cdk-header-cell, th[cdk-header-cell]" }, { kind: "component", type: i1.CdkHeaderRow, selector: "cdk-header-row, tr[cdk-header-row]" }, { kind: "directive", type: i1.CdkHeaderRowDef, selector: "[cdkHeaderRowDef]", inputs: ["cdkHeaderRowDef", "cdkHeaderRowDefSticky"] }, { kind: "ngmodule", type: CdkSelectionModule }, { kind: "directive", type: i2.CdkSelection, selector: "[cdkSelection]", inputs: ["dataSource", "trackBy", "cdkSelectionMultiple"], outputs: ["cdkSelectionChange"], exportAs: ["cdkSelection"] }, { kind: "component", type: i2.CdkSelectionColumn, selector: "cdk-selection-column", inputs: ["cdkSelectionColumnName"] }, { kind: "directive", type: i2.CdkRowSelection, selector: "[cdkRowSelection]", inputs: ["cdkRowSelectionValue", "cdkRowSelectionIndex"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0", ngImport: i0, type: CdkSelectionColumnExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-selection-column-example', standalone: true, imports: [CdkTableModule, CdkSelectionModule], template: "Selected: {{selected}}\n<table class=\"example-table\" cdk-table [dataSource]=\"dataSource\" cdkSelection [cdkSelectionMultiple]=\"true\" (cdkSelectionChange)=\"selectionChanged($event)\">\n    <cdk-selection-column cdkSelectionColumnName=\"select\"></cdk-selection-column>\n    <!-- Position Column -->\n    <ng-container cdkColumnDef=\"position\">\n      <th cdk-header-cell *cdkHeaderCellDef> No. </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.position}} </td>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container cdkColumnDef=\"name\">\n      <th cdk-header-cell *cdkHeaderCellDef> Name </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.name}} </td>\n    </ng-container>\n\n    <!-- Weight Column -->\n    <ng-container cdkColumnDef=\"weight\">\n      <th cdk-header-cell *cdkHeaderCellDef> Weight </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.weight}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container cdkColumnDef=\"symbol\">\n      <th cdk-header-cell *cdkHeaderCellDef> Symbol </th>\n      <td cdk-cell *cdkCellDef=\"let element\"> {{element.symbol}} </td>\n    </ng-container>\n\n    <tr cdk-header-row *cdkHeaderRowDef=\"displayedColumns\"></tr>\n    <tr cdk-row *cdkRowDef=\"let row; columns: displayedColumns;\" cdkRowSelection [cdkRowSelectionValue]=\"row\"></tr>\n</table>\n", styles: [".example-table {\n  border-collapse: collapse;\n}\n\ntr.cdk-selected {\n  background-color: yellow;\n}\n"] }]
        }] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXNlbGVjdGlvbi1jb2x1bW4tZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay1leHBlcmltZW50YWwvc2VsZWN0aW9uL2Nkay1zZWxlY3Rpb24tY29sdW1uL2Nkay1zZWxlY3Rpb24tY29sdW1uLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3NlbGVjdGlvbi9jZGstc2VsZWN0aW9uLWNvbHVtbi9jZGstc2VsZWN0aW9uLWNvbHVtbi1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFrQixrQkFBa0IsRUFBQyxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG9CQUFvQixDQUFDOzs7O0FBRWxEOztHQUVHO0FBUUgsTUFBTSxPQUFPLHlCQUF5QjtJQVB0QztRQVFFLHFCQUFnQixHQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2hGLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIsYUFBUSxHQUFhLEVBQUUsQ0FBQztLQUt6QjtJQUhDLGdCQUFnQixDQUFDLEtBQXVDO1FBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7OEdBUFUseUJBQXlCO2tHQUF6Qix5QkFBeUIsd0ZDZHRDLHUyQ0E4QkEsaUtEbEJZLGNBQWMsbWxDQUFFLGtCQUFrQjs7MkZBRWpDLHlCQUF5QjtrQkFQckMsU0FBUzsrQkFDRSw4QkFBOEIsY0FHNUIsSUFBSSxXQUNQLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDOztBQW1CL0MsTUFBTSxZQUFZLEdBQXNCO0lBQ3RDLEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM1RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUM5RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDekQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQy9ELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ2hFLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMvRCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7Q0FDOUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2VsZWN0aW9uQ2hhbmdlLCBDZGtTZWxlY3Rpb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvc2VsZWN0aW9uJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Q2RrVGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90YWJsZSc7XG5cbi8qKlxuICogQHRpdGxlIENESyBTZWxlY3Rpb24gQ29sdW1uIG9uIGEgQ0RLIHRhYmxlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstc2VsZWN0aW9uLWNvbHVtbi1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstc2VsZWN0aW9uLWNvbHVtbi1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ2Nkay1zZWxlY3Rpb24tY29sdW1uLWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Nka1RhYmxlTW9kdWxlLCBDZGtTZWxlY3Rpb25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtTZWxlY3Rpb25Db2x1bW5FeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3NlbGVjdCcsICdwb3NpdGlvbicsICduYW1lJywgJ3dlaWdodCcsICdzeW1ib2wnXTtcbiAgZGF0YVNvdXJjZSA9IEVMRU1FTlRfREFUQTtcbiAgc2VsZWN0ZWQ6IHN0cmluZ1tdID0gW107XG5cbiAgc2VsZWN0aW9uQ2hhbmdlZChldmVudDogU2VsZWN0aW9uQ2hhbmdlPFBlcmlvZGljRWxlbWVudD4pIHtcbiAgICB0aGlzLnNlbGVjdGVkID0gZXZlbnQuYWZ0ZXIubWFwKHNlbGVjdCA9PiBzZWxlY3QudmFsdWUubmFtZSk7XG4gIH1cbn1cblxuaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbiAge3Bvc2l0aW9uOiAxMSwgbmFtZTogJ1NvZGl1bScsIHdlaWdodDogMjIuOTg5Nywgc3ltYm9sOiAnTmEnfSxcbiAge3Bvc2l0aW9uOiAxMiwgbmFtZTogJ01hZ25lc2l1bScsIHdlaWdodDogMjQuMzA1LCBzeW1ib2w6ICdNZyd9LFxuICB7cG9zaXRpb246IDEzLCBuYW1lOiAnQWx1bWludW0nLCB3ZWlnaHQ6IDI2Ljk4MTUsIHN5bWJvbDogJ0FsJ30sXG4gIHtwb3NpdGlvbjogMTQsIG5hbWU6ICdTaWxpY29uJywgd2VpZ2h0OiAyOC4wODU1LCBzeW1ib2w6ICdTaSd9LFxuICB7cG9zaXRpb246IDE1LCBuYW1lOiAnUGhvc3Bob3J1cycsIHdlaWdodDogMzAuOTczOCwgc3ltYm9sOiAnUCd9LFxuICB7cG9zaXRpb246IDE2LCBuYW1lOiAnU3VsZnVyJywgd2VpZ2h0OiAzMi4wNjUsIHN5bWJvbDogJ1MnfSxcbiAge3Bvc2l0aW9uOiAxNywgbmFtZTogJ0NobG9yaW5lJywgd2VpZ2h0OiAzNS40NTMsIHN5bWJvbDogJ0NsJ30sXG4gIHtwb3NpdGlvbjogMTgsIG5hbWU6ICdBcmdvbicsIHdlaWdodDogMzkuOTQ4LCBzeW1ib2w6ICdBcid9LFxuICB7cG9zaXRpb246IDE5LCBuYW1lOiAnUG90YXNzaXVtJywgd2VpZ2h0OiAzOS4wOTgzLCBzeW1ib2w6ICdLJ30sXG4gIHtwb3NpdGlvbjogMjAsIG5hbWU6ICdDYWxjaXVtJywgd2VpZ2h0OiA0MC4wNzgsIHN5bWJvbDogJ0NhJ30sXG5dO1xuIiwiU2VsZWN0ZWQ6IHt7c2VsZWN0ZWR9fVxuPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiIGNkay10YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgY2RrU2VsZWN0aW9uIFtjZGtTZWxlY3Rpb25NdWx0aXBsZV09XCJ0cnVlXCIgKGNka1NlbGVjdGlvbkNoYW5nZSk9XCJzZWxlY3Rpb25DaGFuZ2VkKCRldmVudClcIj5cbiAgICA8Y2RrLXNlbGVjdGlvbi1jb2x1bW4gY2RrU2VsZWN0aW9uQ29sdW1uTmFtZT1cInNlbGVjdFwiPjwvY2RrLXNlbGVjdGlvbi1jb2x1bW4+XG4gICAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gICAgPG5nLWNvbnRhaW5lciBjZGtDb2x1bW5EZWY9XCJwb3NpdGlvblwiPlxuICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gTm8uIDwvdGg+XG4gICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgPCEtLSBOYW1lIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IE5hbWUgPC90aD5cbiAgICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCI+IHt7ZWxlbWVudC5uYW1lfX0gPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gV2VpZ2h0IDwvdGg+XG4gICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQud2VpZ2h0fX0gPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDwhLS0gU3ltYm9sIENvbHVtbiAtLT5cbiAgICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cInN5bWJvbFwiPlxuICAgICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XG4gICAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQuc3ltYm9sfX0gPC90ZD5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDx0ciBjZGstaGVhZGVyLXJvdyAqY2RrSGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgPHRyIGNkay1yb3cgKmNka1Jvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCIgY2RrUm93U2VsZWN0aW9uIFtjZGtSb3dTZWxlY3Rpb25WYWx1ZV09XCJyb3dcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==