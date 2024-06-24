import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Table with expandable rows
 */
export class TableExpandableRowsExample {
    constructor() {
        this.dataSource = ELEMENT_DATA;
        this.columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: TableExpandableRowsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0-next.3", type: TableExpandableRowsExample, isStandalone: true, selector: "table-expandable-rows-example", ngImport: i0, template: "<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  @for (column of columnsToDisplay; track column) {\n    <ng-container matColumnDef=\"{{column}}\">\n      <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n    </ng-container>\n  }\n  <ng-container matColumnDef=\"expand\">\n    <th mat-header-cell *matHeaderCellDef aria-label=\"row actions\">&nbsp;</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-icon-button aria-label=\"expand row\" (click)=\"(expandedElement = expandedElement === element ? null : element); $event.stopPropagation()\">\n        @if (expandedElement === element) {\n          <mat-icon>keyboard_arrow_up</mat-icon>\n        } @else {\n          <mat-icon>keyboard_arrow_down</mat-icon>\n        }\n      </button>\n    </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplayWithExpand.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplayWithExpand\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplayWithExpand;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], animations: [
            trigger('detailExpand', [
                state('collapsed,void', style({ height: '0px', minHeight: '0' })),
                state('expanded', style({ height: '*' })),
                transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
            ]),
        ] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: TableExpandableRowsExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-expandable-rows-example', animations: [
                        trigger('detailExpand', [
                            state('collapsed,void', style({ height: '0px', minHeight: '0' })),
                            state('expanded', style({ height: '*' })),
                            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ], standalone: true, imports: [MatTableModule, MatButtonModule, MatIconModule], template: "<table mat-table\n       [dataSource]=\"dataSource\" multiTemplateDataRows\n       class=\"mat-elevation-z8\">\n  @for (column of columnsToDisplay; track column) {\n    <ng-container matColumnDef=\"{{column}}\">\n      <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n    </ng-container>\n  }\n  <ng-container matColumnDef=\"expand\">\n    <th mat-header-cell *matHeaderCellDef aria-label=\"row actions\">&nbsp;</th>\n    <td mat-cell *matCellDef=\"let element\">\n      <button mat-icon-button aria-label=\"expand row\" (click)=\"(expandedElement = expandedElement === element ? null : element); $event.stopPropagation()\">\n        @if (expandedElement === element) {\n          <mat-icon>keyboard_arrow_up</mat-icon>\n        } @else {\n          <mat-icon>keyboard_arrow_down</mat-icon>\n        }\n      </button>\n    </td>\n  </ng-container>\n\n  <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n  <ng-container matColumnDef=\"expandedDetail\">\n    <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplayWithExpand.length\">\n      <div class=\"example-element-detail\"\n           [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n        <div class=\"example-element-diagram\">\n          <div class=\"example-element-position\"> {{element.position}} </div>\n          <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n          <div class=\"example-element-name\"> {{element.name}} </div>\n          <div class=\"example-element-weight\"> {{element.weight}} </div>\n        </div>\n        <div class=\"example-element-description\">\n          {{element.description}}\n          <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n        </div>\n      </div>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"columnsToDisplayWithExpand\"></tr>\n  <tr mat-row *matRowDef=\"let element; columns: columnsToDisplayWithExpand;\"\n      class=\"example-element-row\"\n      [class.example-expanded-row]=\"expandedElement === element\"\n      (click)=\"expandedElement = expandedElement === element ? null : element\">\n  </tr>\n  <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n</table>\n", styles: ["table {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: whitesmoke;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n"] }]
        }] });
const ELEMENT_DATA = [
    {
        position: 1,
        name: 'Hydrogen',
        weight: 1.0079,
        symbol: 'H',
        description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    },
    {
        position: 2,
        name: 'Helium',
        weight: 4.0026,
        symbol: 'He',
        description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
    },
    {
        position: 3,
        name: 'Lithium',
        weight: 6.941,
        symbol: 'Li',
        description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
    },
    {
        position: 4,
        name: 'Beryllium',
        weight: 9.0122,
        symbol: 'Be',
        description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
    },
    {
        position: 5,
        name: 'Boron',
        weight: 10.811,
        symbol: 'B',
        description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
    },
    {
        position: 6,
        name: 'Carbon',
        weight: 12.0107,
        symbol: 'C',
        description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
    },
    {
        position: 7,
        name: 'Nitrogen',
        weight: 14.0067,
        symbol: 'N',
        description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
    },
    {
        position: 8,
        name: 'Oxygen',
        weight: 15.9994,
        symbol: 'O',
        description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
    },
    {
        position: 9,
        name: 'Fluorine',
        weight: 18.9984,
        symbol: 'F',
        description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
    },
    {
        position: 10,
        name: 'Neon',
        weight: 20.1797,
        symbol: 'Ne',
        description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1leHBhbmRhYmxlLXJvd3MvdGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1leHBhbmRhYmxlLXJvd3MvdGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDL0UsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBRXZEOztHQUVHO0FBZUgsTUFBTSxPQUFPLDBCQUEwQjtJQWR2QztRQWVFLGVBQVUsR0FBRyxZQUFZLENBQUM7UUFDMUIscUJBQWdCLEdBQUcsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztRQUM1RCwrQkFBMEIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsQ0FBQyxDQUFDO0tBRW5FO3FIQUxZLDBCQUEwQjt5R0FBMUIsMEJBQTBCLHlGQ3ZCdkMscTJFQWlEQSxpekJENUJZLGNBQWMsc2dDQUFFLGVBQWUsMklBQUUsYUFBYSxzS0FSNUM7WUFDVixP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ZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7YW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7TWF0SWNvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7TWF0VGFibGVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYmxlJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgd2l0aCBleHBhbmRhYmxlIHJvd3NcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUnLFxuICBzdHlsZVVybDogJ3RhYmxlLWV4cGFuZGFibGUtcm93cy1leGFtcGxlLmNzcycsXG4gIHRlbXBsYXRlVXJsOiAndGFibGUtZXhwYW5kYWJsZS1yb3dzLWV4YW1wbGUuaHRtbCcsXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkLHZvaWQnLCBzdHlsZSh7aGVpZ2h0OiAnMHB4JywgbWluSGVpZ2h0OiAnMCd9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7aGVpZ2h0OiAnKid9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxuICAgIF0pLFxuICBdLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0VGFibGVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlRXhwYW5kYWJsZVJvd3NFeGFtcGxlIHtcbiAgZGF0YVNvdXJjZSA9IEVMRU1FTlRfREFUQTtcbiAgY29sdW1uc1RvRGlzcGxheSA9IFsnbmFtZScsICd3ZWlnaHQnLCAnc3ltYm9sJywgJ3Bvc2l0aW9uJ107XG4gIGNvbHVtbnNUb0Rpc3BsYXlXaXRoRXhwYW5kID0gWy4uLnRoaXMuY29sdW1uc1RvRGlzcGxheSwgJ2V4cGFuZCddO1xuICBleHBhbmRlZEVsZW1lbnQ6IFBlcmlvZGljRWxlbWVudCB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyaW9kaWNFbGVtZW50IHtcbiAgbmFtZTogc3RyaW5nO1xuICBwb3NpdGlvbjogbnVtYmVyO1xuICB3ZWlnaHQ6IG51bWJlcjtcbiAgc3ltYm9sOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG59XG5cbmNvbnN0IEVMRU1FTlRfREFUQTogUGVyaW9kaWNFbGVtZW50W10gPSBbXG4gIHtcbiAgICBwb3NpdGlvbjogMSxcbiAgICBuYW1lOiAnSHlkcm9nZW4nLFxuICAgIHdlaWdodDogMS4wMDc5LFxuICAgIHN5bWJvbDogJ0gnLFxuICAgIGRlc2NyaXB0aW9uOiBgSHlkcm9nZW4gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIEggYW5kIGF0b21pYyBudW1iZXIgMS4gV2l0aCBhIHN0YW5kYXJkXG4gICAgICAgIGF0b21pYyB3ZWlnaHQgb2YgMS4wMDgsIGh5ZHJvZ2VuIGlzIHRoZSBsaWdodGVzdCBlbGVtZW50IG9uIHRoZSBwZXJpb2RpYyB0YWJsZS5gLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDIsXG4gICAgbmFtZTogJ0hlbGl1bScsXG4gICAgd2VpZ2h0OiA0LjAwMjYsXG4gICAgc3ltYm9sOiAnSGUnLFxuICAgIGRlc2NyaXB0aW9uOiBgSGVsaXVtIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBIZSBhbmQgYXRvbWljIG51bWJlciAyLiBJdCBpcyBhXG4gICAgICAgIGNvbG9ybGVzcywgb2Rvcmxlc3MsIHRhc3RlbGVzcywgbm9uLXRveGljLCBpbmVydCwgbW9uYXRvbWljIGdhcywgdGhlIGZpcnN0IGluIHRoZSBub2JsZSBnYXNcbiAgICAgICAgZ3JvdXAgaW4gdGhlIHBlcmlvZGljIHRhYmxlLiBJdHMgYm9pbGluZyBwb2ludCBpcyB0aGUgbG93ZXN0IGFtb25nIGFsbCB0aGUgZWxlbWVudHMuYCxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiAzLFxuICAgIG5hbWU6ICdMaXRoaXVtJyxcbiAgICB3ZWlnaHQ6IDYuOTQxLFxuICAgIHN5bWJvbDogJ0xpJyxcbiAgICBkZXNjcmlwdGlvbjogYExpdGhpdW0gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIExpIGFuZCBhdG9taWMgbnVtYmVyIDMuIEl0IGlzIGEgc29mdCxcbiAgICAgICAgc2lsdmVyeS13aGl0ZSBhbGthbGkgbWV0YWwuIFVuZGVyIHN0YW5kYXJkIGNvbmRpdGlvbnMsIGl0IGlzIHRoZSBsaWdodGVzdCBtZXRhbCBhbmQgdGhlXG4gICAgICAgIGxpZ2h0ZXN0IHNvbGlkIGVsZW1lbnQuYCxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA0LFxuICAgIG5hbWU6ICdCZXJ5bGxpdW0nLFxuICAgIHdlaWdodDogOS4wMTIyLFxuICAgIHN5bWJvbDogJ0JlJyxcbiAgICBkZXNjcmlwdGlvbjogYEJlcnlsbGl1bSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgQmUgYW5kIGF0b21pYyBudW1iZXIgNC4gSXQgaXMgYVxuICAgICAgICByZWxhdGl2ZWx5IHJhcmUgZWxlbWVudCBpbiB0aGUgdW5pdmVyc2UsIHVzdWFsbHkgb2NjdXJyaW5nIGFzIGEgcHJvZHVjdCBvZiB0aGUgc3BhbGxhdGlvbiBvZlxuICAgICAgICBsYXJnZXIgYXRvbWljIG51Y2xlaSB0aGF0IGhhdmUgY29sbGlkZWQgd2l0aCBjb3NtaWMgcmF5cy5gLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDUsXG4gICAgbmFtZTogJ0Jvcm9uJyxcbiAgICB3ZWlnaHQ6IDEwLjgxMSxcbiAgICBzeW1ib2w6ICdCJyxcbiAgICBkZXNjcmlwdGlvbjogYEJvcm9uIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBCIGFuZCBhdG9taWMgbnVtYmVyIDUuIFByb2R1Y2VkIGVudGlyZWx5XG4gICAgICAgIGJ5IGNvc21pYyByYXkgc3BhbGxhdGlvbiBhbmQgc3VwZXJub3ZhZSBhbmQgbm90IGJ5IHN0ZWxsYXIgbnVjbGVvc3ludGhlc2lzLCBpdCBpcyBhXG4gICAgICAgIGxvdy1hYnVuZGFuY2UgZWxlbWVudCBpbiB0aGUgU29sYXIgc3lzdGVtIGFuZCBpbiB0aGUgRWFydGgncyBjcnVzdC5gLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDYsXG4gICAgbmFtZTogJ0NhcmJvbicsXG4gICAgd2VpZ2h0OiAxMi4wMTA3LFxuICAgIHN5bWJvbDogJ0MnLFxuICAgIGRlc2NyaXB0aW9uOiBgQ2FyYm9uIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBDIGFuZCBhdG9taWMgbnVtYmVyIDYuIEl0IGlzIG5vbm1ldGFsbGljXG4gICAgICAgIGFuZCB0ZXRyYXZhbGVudOKAlG1ha2luZyBmb3VyIGVsZWN0cm9ucyBhdmFpbGFibGUgdG8gZm9ybSBjb3ZhbGVudCBjaGVtaWNhbCBib25kcy4gSXQgYmVsb25nc1xuICAgICAgICB0byBncm91cCAxNCBvZiB0aGUgcGVyaW9kaWMgdGFibGUuYCxcbiAgfSxcbiAge1xuICAgIHBvc2l0aW9uOiA3LFxuICAgIG5hbWU6ICdOaXRyb2dlbicsXG4gICAgd2VpZ2h0OiAxNC4wMDY3LFxuICAgIHN5bWJvbDogJ04nLFxuICAgIGRlc2NyaXB0aW9uOiBgTml0cm9nZW4gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIE4gYW5kIGF0b21pYyBudW1iZXIgNy4gSXQgd2FzIGZpcnN0XG4gICAgICAgIGRpc2NvdmVyZWQgYW5kIGlzb2xhdGVkIGJ5IFNjb3R0aXNoIHBoeXNpY2lhbiBEYW5pZWwgUnV0aGVyZm9yZCBpbiAxNzcyLmAsXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogOCxcbiAgICBuYW1lOiAnT3h5Z2VuJyxcbiAgICB3ZWlnaHQ6IDE1Ljk5OTQsXG4gICAgc3ltYm9sOiAnTycsXG4gICAgZGVzY3JpcHRpb246IGBPeHlnZW4gaXMgYSBjaGVtaWNhbCBlbGVtZW50IHdpdGggc3ltYm9sIE8gYW5kIGF0b21pYyBudW1iZXIgOC4gSXQgaXMgYSBtZW1iZXIgb2ZcbiAgICAgICAgIHRoZSBjaGFsY29nZW4gZ3JvdXAgb24gdGhlIHBlcmlvZGljIHRhYmxlLCBhIGhpZ2hseSByZWFjdGl2ZSBub25tZXRhbCwgYW5kIGFuIG94aWRpemluZ1xuICAgICAgICAgYWdlbnQgdGhhdCByZWFkaWx5IGZvcm1zIG94aWRlcyB3aXRoIG1vc3QgZWxlbWVudHMgYXMgd2VsbCBhcyB3aXRoIG90aGVyIGNvbXBvdW5kcy5gLFxuICB9LFxuICB7XG4gICAgcG9zaXRpb246IDksXG4gICAgbmFtZTogJ0ZsdW9yaW5lJyxcbiAgICB3ZWlnaHQ6IDE4Ljk5ODQsXG4gICAgc3ltYm9sOiAnRicsXG4gICAgZGVzY3JpcHRpb246IGBGbHVvcmluZSBpcyBhIGNoZW1pY2FsIGVsZW1lbnQgd2l0aCBzeW1ib2wgRiBhbmQgYXRvbWljIG51bWJlciA5LiBJdCBpcyB0aGVcbiAgICAgICAgbGlnaHRlc3QgaGFsb2dlbiBhbmQgZXhpc3RzIGFzIGEgaGlnaGx5IHRveGljIHBhbGUgeWVsbG93IGRpYXRvbWljIGdhcyBhdCBzdGFuZGFyZFxuICAgICAgICBjb25kaXRpb25zLmAsXG4gIH0sXG4gIHtcbiAgICBwb3NpdGlvbjogMTAsXG4gICAgbmFtZTogJ05lb24nLFxuICAgIHdlaWdodDogMjAuMTc5NyxcbiAgICBzeW1ib2w6ICdOZScsXG4gICAgZGVzY3JpcHRpb246IGBOZW9uIGlzIGEgY2hlbWljYWwgZWxlbWVudCB3aXRoIHN5bWJvbCBOZSBhbmQgYXRvbWljIG51bWJlciAxMC4gSXQgaXMgYSBub2JsZSBnYXMuXG4gICAgICAgIE5lb24gaXMgYSBjb2xvcmxlc3MsIG9kb3JsZXNzLCBpbmVydCBtb25hdG9taWMgZ2FzIHVuZGVyIHN0YW5kYXJkIGNvbmRpdGlvbnMsIHdpdGggYWJvdXRcbiAgICAgICAgdHdvLXRoaXJkcyB0aGUgZGVuc2l0eSBvZiBhaXIuYCxcbiAgfSxcbl07XG4iLCI8dGFibGUgbWF0LXRhYmxlXG4gICAgICAgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG11bHRpVGVtcGxhdGVEYXRhUm93c1xuICAgICAgIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16OFwiPlxuICBAZm9yIChjb2x1bW4gb2YgY29sdW1uc1RvRGlzcGxheTsgdHJhY2sgY29sdW1uKSB7XG4gICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ7e2NvbHVtbn19XCI+XG4gICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiB7e2NvbHVtbn19IDwvdGg+XG4gICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnRbY29sdW1uXX19IDwvdGQ+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIH1cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJleHBhbmRcIj5cbiAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIGFyaWEtbGFiZWw9XCJyb3cgYWN0aW9uc1wiPiZuYnNwOzwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJleHBhbmQgcm93XCIgKGNsaWNrKT1cIihleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGVsZW1lbnQgPyBudWxsIDogZWxlbWVudCk7ICRldmVudC5zdG9wUHJvcGFnYXRpb24oKVwiPlxuICAgICAgICBAaWYgKGV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudCkge1xuICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd191cDwvbWF0LWljb24+XG4gICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgIDxtYXQtaWNvbj5rZXlib2FyZF9hcnJvd19kb3duPC9tYXQtaWNvbj5cbiAgICAgICAgfVxuICAgICAgPC9idXR0b24+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBFeHBhbmRlZCBDb250ZW50IENvbHVtbiAtIFRoZSBkZXRhaWwgcm93IGlzIG1hZGUgdXAgb2YgdGhpcyBvbmUgY29sdW1uIHRoYXQgc3BhbnMgYWNyb3NzIGFsbCBjb2x1bW5zIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImV4cGFuZGVkRGV0YWlsXCI+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIiBbYXR0ci5jb2xzcGFuXT1cImNvbHVtbnNUb0Rpc3BsYXlXaXRoRXhwYW5kLmxlbmd0aFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1kZXRhaWxcIlxuICAgICAgICAgICBbQGRldGFpbEV4cGFuZF09XCJlbGVtZW50ID09IGV4cGFuZGVkRWxlbWVudCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LWRpYWdyYW1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LXBvc2l0aW9uXCI+IHt7ZWxlbWVudC5wb3NpdGlvbn19IDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWVsZW1lbnQtc3ltYm9sXCI+IHt7ZWxlbWVudC5zeW1ib2x9fSA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LW5hbWVcIj4ge3tlbGVtZW50Lm5hbWV9fSA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LXdlaWdodFwiPiB7e2VsZW1lbnQud2VpZ2h0fX0gPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge3tlbGVtZW50LmRlc2NyaXB0aW9ufX1cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvblwiPiAtLSBXaWtpcGVkaWEgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiY29sdW1uc1RvRGlzcGxheVdpdGhFeHBhbmRcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IGVsZW1lbnQ7IGNvbHVtbnM6IGNvbHVtbnNUb0Rpc3BsYXlXaXRoRXhwYW5kO1wiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtZWxlbWVudC1yb3dcIlxuICAgICAgW2NsYXNzLmV4YW1wbGUtZXhwYW5kZWQtcm93XT1cImV4cGFuZGVkRWxlbWVudCA9PT0gZWxlbWVudFwiXG4gICAgICAoY2xpY2spPVwiZXhwYW5kZWRFbGVtZW50ID0gZXhwYW5kZWRFbGVtZW50ID09PSBlbGVtZW50ID8gbnVsbCA6IGVsZW1lbnRcIj5cbiAgPC90cj5cbiAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IFsnZXhwYW5kZWREZXRhaWwnXVwiIGNsYXNzPVwiZXhhbXBsZS1kZXRhaWwtcm93XCI+PC90cj5cbjwvdGFibGU+XG4iXX0=