import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
/** @title Virtual scroll context variables */
export class CdkVirtualScrollContextExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollContextExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: CdkVirtualScrollContextExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CdkVirtualScrollContextExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.0.0-next.16", type: CdkVirtualScrollContextExample, selector: "cdk-virtual-scroll-context-example", ngImport: i0, template: "<cdk-virtual-scroll-viewport [itemSize]=\"18 * 7\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items;\n                       let index = index;\n                       let count = count;\n                       let first = first;\n                       let last = last;\n                       let even = even;\n                       let odd = odd;\" [class.example-alternate]=\"odd\">\n    <div class=\"example-item-detail\">Item: {{item}}</div>\n    <div class=\"example-item-detail\">Index: {{index}}</div>\n    <div class=\"example-item-detail\">Count: {{count}}</div>\n    <div class=\"example-item-detail\">First: {{first ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Last: {{last ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Even: {{even ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Odd: {{odd ? 'Yes' : 'No'}}</div>\n  </div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail {\n  height: 18px;\n}\n\n.example-alternate {\n  background: rgba(127, 127, 127, 0.3);\n}\n"], dependencies: [{ kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.0.0-next.16", ngImport: i0, type: CdkVirtualScrollContextExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-context-example', changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-virtual-scroll-viewport [itemSize]=\"18 * 7\" class=\"example-viewport\">\n  <div *cdkVirtualFor=\"let item of items;\n                       let index = index;\n                       let count = count;\n                       let first = first;\n                       let last = last;\n                       let even = even;\n                       let odd = odd;\" [class.example-alternate]=\"odd\">\n    <div class=\"example-item-detail\">Item: {{item}}</div>\n    <div class=\"example-item-detail\">Index: {{index}}</div>\n    <div class=\"example-item-detail\">Count: {{count}}</div>\n    <div class=\"example-item-detail\">First: {{first ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Last: {{last ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Even: {{even ? 'Yes' : 'No'}}</div>\n    <div class=\"example-item-detail\">Odd: {{odd ? 'Yes' : 'No'}}</div>\n  </div>\n</cdk-virtual-scroll-viewport>\n", styles: [".example-viewport {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail {\n  height: 18px;\n}\n\n.example-alternate {\n  background: rgba(127, 127, 127, 0.3);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUVqRSw4Q0FBOEM7QUFPOUMsTUFBTSxPQUFPLDhCQUE4QjtJQU4zQztRQU9FLFVBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xFOzttSUFGWSw4QkFBOEI7dUhBQTlCLDhCQUE4QiwwRUNUM0MsazdCQWlCQTttR0RSYSw4QkFBOEI7a0JBTjFDLFNBQVM7K0JBQ0Usb0NBQW9DLG1CQUc3Qix1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBWaXJ0dWFsIHNjcm9sbCBjb250ZXh0IHZhcmlhYmxlcyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstdmlydHVhbC1zY3JvbGwtY29udGV4dC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay12aXJ0dWFsLXNjcm9sbC1jb250ZXh0LWV4YW1wbGUuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsQ29udGV4dEV4YW1wbGUge1xuICBpdGVtcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwMDAwfSkubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtpfWApO1xufVxuIiwiPGNkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydCBbaXRlbVNpemVdPVwiMTggKiA3XCIgY2xhc3M9XCJleGFtcGxlLXZpZXdwb3J0XCI+XG4gIDxkaXYgKmNka1ZpcnR1YWxGb3I9XCJsZXQgaXRlbSBvZiBpdGVtcztcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IGNvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3QgPSBmaXJzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxhc3QgPSBsYXN0O1xuICAgICAgICAgICAgICAgICAgICAgICBsZXQgZXZlbiA9IGV2ZW47XG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBvZGQgPSBvZGQ7XCIgW2NsYXNzLmV4YW1wbGUtYWx0ZXJuYXRlXT1cIm9kZFwiPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWl0ZW0tZGV0YWlsXCI+SXRlbToge3tpdGVtfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pdGVtLWRldGFpbFwiPkluZGV4OiB7e2luZGV4fX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pdGVtLWRldGFpbFwiPkNvdW50OiB7e2NvdW50fX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pdGVtLWRldGFpbFwiPkZpcnN0OiB7e2ZpcnN0ID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pdGVtLWRldGFpbFwiPkxhc3Q6IHt7bGFzdCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaXRlbS1kZXRhaWxcIj5FdmVuOiB7e2V2ZW4gPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWl0ZW0tZGV0YWlsXCI+T2RkOiB7e29kZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gIDwvZGl2PlxuPC9jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQ+XG4iXX0=