import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
/** @title Virtual scroll with view recycling disabled. */
export class CdkVirtualScrollAppendOnlyExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollAppendOnlyExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: CdkVirtualScrollAppendOnlyExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkVirtualScrollAppendOnlyExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.2.0-next.2", type: CdkVirtualScrollAppendOnlyExample, selector: "cdk-virtual-scroll-append-only-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport appendOnly itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"], components: [{ type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], directives: [{ type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.0-next.2", ngImport: i0, type: CdkVirtualScrollAppendOnlyExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-append-only-example', changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-virtual-scroll-viewport appendOnly itemSize=\"50\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item {\n  height: 50px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWFwcGVuZC1vbmx5LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvc2Nyb2xsaW5nL2Nkay12aXJ0dWFsLXNjcm9sbC1hcHBlbmQtb25seS9jZGstdmlydHVhbC1zY3JvbGwtYXBwZW5kLW9ubHktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWFwcGVuZC1vbmx5L2Nkay12aXJ0dWFsLXNjcm9sbC1hcHBlbmQtb25seS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7O0FBRWpFLDBEQUEwRDtBQU8xRCxNQUFNLE9BQU8saUNBQWlDO0lBTjlDO1FBT0UsVUFBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEU7O3FJQUZZLGlDQUFpQzt5SEFBakMsaUNBQWlDLDhFQ1Q5QywwTUFHQTtrR0RNYSxpQ0FBaUM7a0JBTjdDLFNBQVM7K0JBQ0Usd0NBQXdDLG1CQUdqQyx1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBWaXJ0dWFsIHNjcm9sbCB3aXRoIHZpZXcgcmVjeWNsaW5nIGRpc2FibGVkLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWFwcGVuZC1vbmx5LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXZpcnR1YWwtc2Nyb2xsLWFwcGVuZC1vbmx5LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWFwcGVuZC1vbmx5LWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsQXBwZW5kT25seUV4YW1wbGUge1xuICBpdGVtcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwMDAwfSkubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtpfWApO1xufVxuIiwiPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBhcHBlbmRPbmx5IGl0ZW1TaXplPVwiNTBcIiBjbGFzcz1cImV4YW1wbGUtdmlld3BvcnRcIj5cbiAgPGRpdiAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgY2xhc3M9XCJleGFtcGxlLWl0ZW1cIj57e2l0ZW19fTwvZGl2PlxuPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4iXX0=