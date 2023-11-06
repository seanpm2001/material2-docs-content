import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
/** @title Virtual scrolling window */
export class CdkVirtualScrollWindowScrollingExample {
    constructor() {
        this.shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CdkVirtualScrollWindowScrollingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: CdkVirtualScrollWindowScrollingExample, isStandalone: true, selector: "cdk-virtual-scroll-window-scrolling-example", inputs: { shouldRun: "shouldRun" }, ngImport: i0, template: "<ng-container *ngIf=\"shouldRun\">\n  <div class=\"example-header\">Content before</div>\n  <cdk-virtual-scroll-viewport scrollWindow itemSize=\"50\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n  <div class=\"example-footer\">Content after</div>\n</ng-container>\n\n<div *ngIf=\"!shouldRun\">Please open on StackBlitz to see result</div>\n", styles: [".example-item {\n  height: 50px;\n}\n\n.example-header,\n.example-footer {\n  height: 100px;\n  background: lightgray;\n}\n"], dependencies: [{ kind: "directive", type: NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "ngmodule", type: ScrollingModule }, { kind: "directive", type: i1.CdkFixedSizeVirtualScroll, selector: "cdk-virtual-scroll-viewport[itemSize]", inputs: ["itemSize", "minBufferPx", "maxBufferPx"] }, { kind: "directive", type: i1.CdkVirtualForOf, selector: "[cdkVirtualFor][cdkVirtualForOf]", inputs: ["cdkVirtualForOf", "cdkVirtualForTrackBy", "cdkVirtualForTemplate", "cdkVirtualForTemplateCacheSize"] }, { kind: "component", type: i1.CdkVirtualScrollViewport, selector: "cdk-virtual-scroll-viewport", inputs: ["orientation", "appendOnly"], outputs: ["scrolledIndexChange"] }, { kind: "directive", type: i1.CdkVirtualScrollableWindow, selector: "cdk-virtual-scroll-viewport[scrollWindow]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CdkVirtualScrollWindowScrollingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-virtual-scroll-window-scrolling-example', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [NgIf, ScrollingModule], template: "<ng-container *ngIf=\"shouldRun\">\n  <div class=\"example-header\">Content before</div>\n  <cdk-virtual-scroll-viewport scrollWindow itemSize=\"50\">\n    <div *cdkVirtualFor=\"let item of items\" class=\"example-item\">{{item}}</div>\n  </cdk-virtual-scroll-viewport>\n  <div class=\"example-footer\">Content after</div>\n</ng-container>\n\n<div *ngIf=\"!shouldRun\">Please open on StackBlitz to see result</div>\n", styles: [".example-item {\n  height: 50px;\n}\n\n.example-header,\n.example-footer {\n  height: 100px;\n  background: lightgray;\n}\n"] }]
        }], propDecorators: { shouldRun: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUV2RCxzQ0FBc0M7QUFTdEMsTUFBTSxPQUFPLHNDQUFzQztJQVJuRDtRQVNXLGNBQVMsR0FBRywwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzRixVQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNsRTttSEFKWSxzQ0FBc0M7dUdBQXRDLHNDQUFzQywySUNibkQsa2FBU0EscUxERVksSUFBSSw0RkFBRSxlQUFlOztnR0FFcEIsc0NBQXNDO2tCQVJsRCxTQUFTOytCQUNFLDZDQUE2QyxtQkFHdEMsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxJQUFJLFdBQ1AsQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDOzhCQUd2QixTQUFTO3NCQUFqQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nSWZ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1Njcm9sbGluZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XG5cbi8qKiBAdGl0bGUgVmlydHVhbCBzY3JvbGxpbmcgd2luZG93ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdmlydHVhbC1zY3JvbGwtd2luZG93LXNjcm9sbGluZy1leGFtcGxlJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay12aXJ0dWFsLXNjcm9sbC13aW5kb3ctc2Nyb2xsaW5nLWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXZpcnR1YWwtc2Nyb2xsLXdpbmRvdy1zY3JvbGxpbmctZXhhbXBsZS5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtOZ0lmLCBTY3JvbGxpbmdNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtWaXJ0dWFsU2Nyb2xsV2luZG93U2Nyb2xsaW5nRXhhbXBsZSB7XG4gIEBJbnB1dCgpIHNob3VsZFJ1biA9IC8oXnwuKShzdGFja2JsaXR6fHdlYmNvbnRhaW5lcikuKGlvfGNvbSkkLy50ZXN0KHdpbmRvdy5sb2NhdGlvbi5ob3N0KTtcblxuICBpdGVtcyA9IEFycmF5LmZyb20oe2xlbmd0aDogMTAwMDAwfSkubWFwKChfLCBpKSA9PiBgSXRlbSAjJHtpfWApO1xufVxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3VsZFJ1blwiPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1oZWFkZXJcIj5Db250ZW50IGJlZm9yZTwvZGl2PlxuICA8Y2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHNjcm9sbFdpbmRvdyBpdGVtU2l6ZT1cIjUwXCI+XG4gICAgPGRpdiAqY2RrVmlydHVhbEZvcj1cImxldCBpdGVtIG9mIGl0ZW1zXCIgY2xhc3M9XCJleGFtcGxlLWl0ZW1cIj57e2l0ZW19fTwvZGl2PlxuICA8L2Nkay12aXJ0dWFsLXNjcm9sbC12aWV3cG9ydD5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZm9vdGVyXCI+Q29udGVudCBhZnRlcjwvZGl2PlxuPC9uZy1jb250YWluZXI+XG5cbjxkaXYgKm5nSWY9XCIhc2hvdWxkUnVuXCI+UGxlYXNlIG9wZW4gb24gU3RhY2tCbGl0eiB0byBzZWUgcmVzdWx0PC9kaXY+XG4iXX0=