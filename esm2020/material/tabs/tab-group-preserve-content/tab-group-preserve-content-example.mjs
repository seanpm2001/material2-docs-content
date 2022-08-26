import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group that keeps its content inside the DOM when it's off-screen.
 */
export class TabGroupPreserveContentExample {
}
TabGroupPreserveContentExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: TabGroupPreserveContentExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
TabGroupPreserveContentExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.0", type: TabGroupPreserveContentExample, selector: "tab-group-preserve-content-example", ngImport: i0, template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\n\n<mat-tab-group preserveContent>\n  <mat-tab label=\"First\">\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\n      frameborder=\"0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe>\n  </mat-tab>\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\n</mat-tab-group>\n", dependencies: [{ kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple"], exportAs: ["matTabGroup"] }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.0", ngImport: i0, type: TabGroupPreserveContentExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-preserve-content-example', template: "<p>Start the video in the first tab and navigate to the second one to see how it keeps playing.</p>\n\n<mat-tab-group preserveContent>\n  <mat-tab label=\"First\">\n    <iframe\n      width=\"560\"\n      height=\"315\"\n      src=\"https://www.youtube.com/embed/B-lipaiZII8\"\n      frameborder=\"0\"\n      allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\n      allowfullscreen></iframe>\n  </mat-tab>\n  <mat-tab label=\"Second\">Note how the video from the previous tab is still playing.</mat-tab>\n</mat-tab-group>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQvdGFiLWdyb3VwLXByZXNlcnZlLWNvbnRlbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQUtILE1BQU0sT0FBTyw4QkFBOEI7OzJIQUE5Qiw4QkFBOEI7K0dBQTlCLDhCQUE4QiwwRUNUM0MsNmlCQWNBOzJGRExhLDhCQUE4QjtrQkFKMUMsU0FBUzsrQkFDRSxvQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIFRhYiBncm91cCB0aGF0IGtlZXBzIGl0cyBjb250ZW50IGluc2lkZSB0aGUgRE9NIHdoZW4gaXQncyBvZmYtc2NyZWVuLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtcHJlc2VydmUtY29udGVudC1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0YWItZ3JvdXAtcHJlc2VydmUtY29udGVudC1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJHcm91cFByZXNlcnZlQ29udGVudEV4YW1wbGUge31cbiIsIjxwPlN0YXJ0IHRoZSB2aWRlbyBpbiB0aGUgZmlyc3QgdGFiIGFuZCBuYXZpZ2F0ZSB0byB0aGUgc2Vjb25kIG9uZSB0byBzZWUgaG93IGl0IGtlZXBzIHBsYXlpbmcuPC9wPlxuXG48bWF0LXRhYi1ncm91cCBwcmVzZXJ2ZUNvbnRlbnQ+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5cbiAgICA8aWZyYW1lXG4gICAgICB3aWR0aD1cIjU2MFwiXG4gICAgICBoZWlnaHQ9XCIzMTVcIlxuICAgICAgc3JjPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvQi1saXBhaVpJSThcIlxuICAgICAgZnJhbWVib3JkZXI9XCIwXCJcbiAgICAgIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcIlxuICAgICAgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICA8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Tm90ZSBob3cgdGhlIHZpZGVvIGZyb20gdGhlIHByZXZpb3VzIHRhYiBpcyBzdGlsbCBwbGF5aW5nLjwvbWF0LXRhYj5cbjwvbWF0LXRhYi1ncm91cD5cbiJdfQ==