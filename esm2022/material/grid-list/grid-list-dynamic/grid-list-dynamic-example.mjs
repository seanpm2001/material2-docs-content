import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/grid-list";
/**
 * @title Dynamic grid-list
 */
export class GridListDynamicExample {
    constructor() {
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: GridListDynamicExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0-next.3", type: GridListDynamicExample, isStandalone: true, selector: "grid-list-dynamic-example", ngImport: i0, template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  @for (tile of tiles; track tile) {\n    <mat-grid-tile\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">{{tile.text}}</mat-grid-tile>\n  }\n</mat-grid-list>\n", dependencies: [{ kind: "ngmodule", type: MatGridListModule }, { kind: "component", type: i1.MatGridList, selector: "mat-grid-list", inputs: ["cols", "gutterSize", "rowHeight"], exportAs: ["matGridList"] }, { kind: "component", type: i1.MatGridTile, selector: "mat-grid-tile", inputs: ["rowspan", "colspan"], exportAs: ["matGridTile"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: GridListDynamicExample, decorators: [{
            type: Component,
            args: [{ selector: 'grid-list-dynamic-example', standalone: true, imports: [MatGridListModule], template: "<mat-grid-list cols=\"4\" rowHeight=\"100px\">\n  @for (tile of tiles; track tile) {\n    <mat-grid-tile\n      [colspan]=\"tile.cols\"\n      [rowspan]=\"tile.rows\"\n      [style.background]=\"tile.color\">{{tile.text}}</mat-grid-tile>\n  }\n</mat-grid-list>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC1saXN0LWR5bmFtaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2dyaWQtbGlzdC9ncmlkLWxpc3QtZHluYW1pYy9ncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvZ3JpZC1saXN0L2dyaWQtbGlzdC1keW5hbWljL2dyaWQtbGlzdC1keW5hbWljLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLDZCQUE2QixDQUFDOzs7QUFTOUQ7O0dBRUc7QUFPSCxNQUFNLE9BQU8sc0JBQXNCO0lBTm5DO1FBT0UsVUFBSyxHQUFXO1lBQ2QsRUFBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFDO1lBQ25ELEVBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBQztZQUNwRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUM7WUFDckQsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1NBQ25ELENBQUM7S0FDSDtxSEFQWSxzQkFBc0I7eUdBQXRCLHNCQUFzQixxRkNuQm5DLHdRQVFBLDJDRFNZLGlCQUFpQjs7a0dBRWhCLHNCQUFzQjtrQkFObEMsU0FBUzsrQkFDRSwyQkFBMkIsY0FFekIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdEdyaWRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9ncmlkLWxpc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRpbGUge1xuICBjb2xvcjogc3RyaW5nO1xuICBjb2xzOiBudW1iZXI7XG4gIHJvd3M6IG51bWJlcjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBEeW5hbWljIGdyaWQtbGlzdFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdncmlkLWxpc3QtZHluYW1pYy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0R3JpZExpc3RNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBHcmlkTGlzdER5bmFtaWNFeGFtcGxlIHtcbiAgdGlsZXM6IFRpbGVbXSA9IFtcbiAgICB7dGV4dDogJ09uZScsIGNvbHM6IDMsIHJvd3M6IDEsIGNvbG9yOiAnbGlnaHRibHVlJ30sXG4gICAge3RleHQ6ICdUd28nLCBjb2xzOiAxLCByb3dzOiAyLCBjb2xvcjogJ2xpZ2h0Z3JlZW4nfSxcbiAgICB7dGV4dDogJ1RocmVlJywgY29sczogMSwgcm93czogMSwgY29sb3I6ICdsaWdodHBpbmsnfSxcbiAgICB7dGV4dDogJ0ZvdXInLCBjb2xzOiAyLCByb3dzOiAxLCBjb2xvcjogJyNEREJERjEnfSxcbiAgXTtcbn1cbiIsIjxtYXQtZ3JpZC1saXN0IGNvbHM9XCI0XCIgcm93SGVpZ2h0PVwiMTAwcHhcIj5cbiAgQGZvciAodGlsZSBvZiB0aWxlczsgdHJhY2sgdGlsZSkge1xuICAgIDxtYXQtZ3JpZC10aWxlXG4gICAgICBbY29sc3Bhbl09XCJ0aWxlLmNvbHNcIlxuICAgICAgW3Jvd3NwYW5dPVwidGlsZS5yb3dzXCJcbiAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cInRpbGUuY29sb3JcIj57e3RpbGUudGV4dH19PC9tYXQtZ3JpZC10aWxlPlxuICB9XG48L21hdC1ncmlkLWxpc3Q+XG4iXX0=