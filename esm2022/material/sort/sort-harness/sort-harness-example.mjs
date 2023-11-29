import { Component } from '@angular/core';
import { MatSortModule } from '@angular/material/sort';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
/**
 * @title Testing with MatSortHarness
 */
export class SortHarnessExample {
    constructor() {
        this.disableThirdHeader = false;
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
        }
        else {
            this.sortedData = data.sort((a, b) => {
                const aValue = a[sort.active];
                const bValue = b[sort.active];
                return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
            });
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SortHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: SortHarnessExample, isStandalone: true, selector: "sort-harness-example", ngImport: i0, template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\n    <th mat-sort-header=\"carbs\">Carbs</th>\n    <th mat-sort-header=\"protein\">Protein</th>\n  </tr>\n\n  @for (dessert of sortedData; track dessert) {\n    <tr>\n      <td>{{dessert.name}}</td>\n      <td>{{dessert.calories}}</td>\n      <td>{{dessert.fat}}</td>\n      <td>{{dessert.carbs}}</td>\n      <td>{{dessert.protein}}</td>\n    </tr>\n  }\n</table>\n", dependencies: [{ kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i1.MatSort, selector: "[matSort]", inputs: ["matSortDisabled", "matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i1.MatSortHeader, selector: "[mat-sort-header]", inputs: ["disabled", "mat-sort-header", "arrowPosition", "start", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: SortHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'sort-harness-example', standalone: true, imports: [MatSortModule], template: "<table matSort (matSortChange)=\"sortData($event)\">\n  <tr>\n    <th mat-sort-header=\"name\">Dessert</th>\n    <th mat-sort-header=\"calories\">Calories</th>\n    <th mat-sort-header=\"fat\" [disabled]=\"disableThirdHeader\">Fat</th>\n    <th mat-sort-header=\"carbs\">Carbs</th>\n    <th mat-sort-header=\"protein\">Protein</th>\n  </tr>\n\n  @for (dessert of sortedData; track dessert) {\n    <tr>\n      <td>{{dessert.name}}</td>\n      <td>{{dessert.calories}}</td>\n      <td>{{dessert.fat}}</td>\n      <td>{{dessert.carbs}}</td>\n      <td>{{dessert.protein}}</td>\n    </tr>\n  }\n</table>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9zb3J0L3NvcnQtaGFybmVzcy9zb3J0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1oYXJuZXNzL3NvcnQtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQU8sYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUUzRDs7R0FFRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUFOL0I7UUFPRSx1QkFBa0IsR0FBRyxLQUFLLENBQUM7UUFDM0IsYUFBUSxHQUFHO1lBQ1QsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDckUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMxRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMvRCxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztZQUMvRCxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBQztTQUNyRSxDQUFDO1FBRUYsZUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7S0FlcEM7SUFiQyxRQUFRLENBQUMsSUFBVTtRQUNqQixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRW5DLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ25DLE1BQU0sTUFBTSxHQUFJLENBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLE1BQU0sTUFBTSxHQUFJLENBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3ZDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFFLENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzhHQXhCVSxrQkFBa0I7a0dBQWxCLGtCQUFrQixnRkNaL0IsMmxCQW1CQSwyQ0RUWSxhQUFhOzsyRkFFWixrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0Usc0JBQXNCLGNBRXBCLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U29ydCwgTWF0U29ydE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRTb3J0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb3J0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnc29ydC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRTb3J0TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgU29ydEhhcm5lc3NFeGFtcGxlIHtcbiAgZGlzYWJsZVRoaXJkSGVhZGVyID0gZmFsc2U7XG4gIGRlc3NlcnRzID0gW1xuICAgIHtuYW1lOiAnRnJvemVuIHlvZ3VydCcsIGNhbG9yaWVzOiAxNTksIGZhdDogNiwgY2FyYnM6IDI0LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0ljZSBjcmVhbSBzYW5kd2ljaCcsIGNhbG9yaWVzOiAyMzcsIGZhdDogOSwgY2FyYnM6IDM3LCBwcm90ZWluOiA0fSxcbiAgICB7bmFtZTogJ0VjbGFpcicsIGNhbG9yaWVzOiAyNjIsIGZhdDogMTYsIGNhcmJzOiAyNCwgcHJvdGVpbjogNn0sXG4gICAge25hbWU6ICdDdXBjYWtlJywgY2Fsb3JpZXM6IDMwNSwgZmF0OiA0LCBjYXJiczogNjcsIHByb3RlaW46IDR9LFxuICAgIHtuYW1lOiAnR2luZ2VyYnJlYWQnLCBjYWxvcmllczogMzU2LCBmYXQ6IDE2LCBjYXJiczogNDksIHByb3RlaW46IDR9LFxuICBdO1xuXG4gIHNvcnRlZERhdGEgPSB0aGlzLmRlc3NlcnRzLnNsaWNlKCk7XG5cbiAgc29ydERhdGEoc29ydDogU29ydCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRlc3NlcnRzLnNsaWNlKCk7XG5cbiAgICBpZiAoIXNvcnQuYWN0aXZlIHx8IHNvcnQuZGlyZWN0aW9uID09PSAnJykge1xuICAgICAgdGhpcy5zb3J0ZWREYXRhID0gZGF0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zb3J0ZWREYXRhID0gZGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGNvbnN0IGFWYWx1ZSA9IChhIGFzIGFueSlbc29ydC5hY3RpdmVdO1xuICAgICAgICBjb25zdCBiVmFsdWUgPSAoYiBhcyBhbnkpW3NvcnQuYWN0aXZlXTtcbiAgICAgICAgcmV0dXJuIChhVmFsdWUgPCBiVmFsdWUgPyAtMSA6IDEpICogKHNvcnQuZGlyZWN0aW9uID09PSAnYXNjJyA/IDEgOiAtMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiIsIjx0YWJsZSBtYXRTb3J0IChtYXRTb3J0Q2hhbmdlKT1cInNvcnREYXRhKCRldmVudClcIj5cbiAgPHRyPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJuYW1lXCI+RGVzc2VydDwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cImNhbG9yaWVzXCI+Q2Fsb3JpZXM8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJmYXRcIiBbZGlzYWJsZWRdPVwiZGlzYWJsZVRoaXJkSGVhZGVyXCI+RmF0PC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwiY2FyYnNcIj5DYXJiczwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cInByb3RlaW5cIj5Qcm90ZWluPC90aD5cbiAgPC90cj5cblxuICBAZm9yIChkZXNzZXJ0IG9mIHNvcnRlZERhdGE7IHRyYWNrIGRlc3NlcnQpIHtcbiAgICA8dHI+XG4gICAgICA8dGQ+e3tkZXNzZXJ0Lm5hbWV9fTwvdGQ+XG4gICAgICA8dGQ+e3tkZXNzZXJ0LmNhbG9yaWVzfX08L3RkPlxuICAgICAgPHRkPnt7ZGVzc2VydC5mYXR9fTwvdGQ+XG4gICAgICA8dGQ+e3tkZXNzZXJ0LmNhcmJzfX08L3RkPlxuICAgICAgPHRkPnt7ZGVzc2VydC5wcm90ZWlufX08L3RkPlxuICAgIDwvdHI+XG4gIH1cbjwvdGFibGU+XG4iXX0=