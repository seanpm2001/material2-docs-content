import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
/** @title Virtual scroll with no template caching */
export class CdkVirtualScrollTemplateCacheExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.0+sha-37d1f71", ngImport: i0, type: CdkVirtualScrollTemplateCacheExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.0+sha-37d1f71", type: CdkVirtualScrollTemplateCacheExample, isStandalone: true, selector: "cdk-virtual-scroll-template-cache-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"], dependencies: [{ kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.0+sha-37d1f71", ngImport: i0, type: CdkVirtualScrollTemplateCacheExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-template-cache-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [ScrollingModule], template: "<cdk-virtual-scroll-viewport itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items; templateCacheSize: 0\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC10ZW1wbGF0ZS1jYWNoZS9jZGstdmlydHVhbC1zY3JvbGwtdGVtcGxhdGUtY2FjaGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlL2Nkay12aXJ0dWFsLXNjcm9sbC10ZW1wbGF0ZS1jYWNoZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUV2RCxxREFBcUQ7QUFTckQsTUFBTSxPQUFPLG9DQUFvQztJQVJqRDtRQVNFLFVBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xFO2lJQUZZLG9DQUFvQztxSEFBcEMsb0NBQW9DLHFHQ1pqRCxxTkFHQSx1TERPWSxlQUFlOzs4R0FFZCxvQ0FBb0M7a0JBUmhELFNBQVM7K0JBQ0UsMkNBQTJDLG1CQUdwQyx1QkFBdUIsQ0FBQyxNQUFNLGNBQ25DLElBQUksV0FDUCxDQUFDLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1Njcm9sbGluZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5cbi8qKiBAdGl0bGUgVmlydHVhbCBzY3JvbGwgd2l0aCBubyB0ZW1wbGF0ZSBjYWNoaW5nICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtdGVtcGxhdGUtY2FjaGUtZXhhbXBsZScsXG4gIHN0eWxlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLXRlbXBsYXRlLWNhY2hlLWV4YW1wbGUuY3NzJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtdGVtcGxhdGUtY2FjaGUtZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtTY3JvbGxpbmdNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsVGVtcGxhdGVDYWNoZUV4YW1wbGUge1xuICBpdGVtcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwMDAwfSkubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtpfWApO1xufVxuIiwiPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBpdGVtU2l6ZT1cIjUwXCIgY2xhc3M9XCJleGFtcGxlLXZpZXdwb3J0XCI+XG4gIDxkaXYgKmNka1ZpcnR1YWxGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgdGVtcGxhdGVDYWNoZVNpemU6IDBcIiBjbGFzcz1cImV4YW1wbGUtaXRlbVwiPnt7aXRlbX19PC9kaXY+XG48L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiJdfQ==