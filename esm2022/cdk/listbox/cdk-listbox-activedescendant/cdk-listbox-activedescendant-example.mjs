import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
/** @title Listbox with aria-activedescendant. */
class CdkListboxActivedescendantExample {
    constructor() {
        this.features = ['Hydrodynamic', 'Port & Starboard Attachments', 'Turbo Drive'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkListboxActivedescendantExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: CdkListboxActivedescendantExample, isStandalone: true, selector: "cdk-listbox-activedescendant-example", exportAs: ["cdkListboxActivedescendantExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-spatula-label\">\n    Spatula Features\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      cdkListboxUseActiveDescendant\n      aria-labelledby=\"example-spatula-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let feature of features\"\n        [cdkOption]=\"feature\"\n        class=\"example-option\">\n      {{feature}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-listbox:focus .cdk-option-active {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] }); }
}
export { CdkListboxActivedescendantExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: CdkListboxActivedescendantExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-activedescendant-example', exportAs: 'cdkListboxActivedescendantExample', standalone: true, imports: [CdkListbox, NgFor, CdkOption], template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-spatula-label\">\n    Spatula Features\n  </label>\n  <ul cdkListbox\n      cdkListboxMultiple\n      cdkListboxUseActiveDescendant\n      aria-labelledby=\"example-spatula-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let feature of features\"\n        [cdkOption]=\"feature\"\n        class=\"example-option\">\n      {{feature}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-listbox:focus .cdk-option-active {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtYWN0aXZlZGVzY2VuZGFudC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xpc3Rib3gvY2RrLWxpc3Rib3gtYWN0aXZlZGVzY2VuZGFudC9jZGstbGlzdGJveC1hY3RpdmVkZXNjZW5kYW50LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1hY3RpdmVkZXNjZW5kYW50L2Nkay1saXN0Ym94LWFjdGl2ZWRlc2NlbmRhbnQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQ3RDLE9BQU8sRUFBQyxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7O0FBRTNELGlEQUFpRDtBQUNqRCxNQVFhLGlDQUFpQztJQVI5QztRQVNFLGFBQVEsR0FBRyxDQUFDLGNBQWMsRUFBRSw4QkFBOEIsRUFBRSxhQUFhLENBQUMsQ0FBQztLQUM1RTs4R0FGWSxpQ0FBaUM7a0dBQWpDLGlDQUFpQyxpSkNiOUMsMmhCQWtCQSwrMkJEUFksVUFBVSwrV0FBRSxLQUFLLG1IQUFFLFNBQVM7O1NBRTNCLGlDQUFpQzsyRkFBakMsaUNBQWlDO2tCQVI3QyxTQUFTOytCQUNFLHNDQUFzQyxZQUN0QyxtQ0FBbUMsY0FHakMsSUFBSSxXQUNQLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9yfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtDZGtMaXN0Ym94LCBDZGtPcHRpb259IGZyb20gJ0Bhbmd1bGFyL2Nkay9saXN0Ym94JztcblxuLyoqIEB0aXRsZSBMaXN0Ym94IHdpdGggYXJpYS1hY3RpdmVkZXNjZW5kYW50LiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWxpc3Rib3gtYWN0aXZlZGVzY2VuZGFudC1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtMaXN0Ym94QWN0aXZlZGVzY2VuZGFudEV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1saXN0Ym94LWFjdGl2ZWRlc2NlbmRhbnQtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1saXN0Ym94LWFjdGl2ZWRlc2NlbmRhbnQtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Nka0xpc3Rib3gsIE5nRm9yLCBDZGtPcHRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtMaXN0Ym94QWN0aXZlZGVzY2VuZGFudEV4YW1wbGUge1xuICBmZWF0dXJlcyA9IFsnSHlkcm9keW5hbWljJywgJ1BvcnQgJiBTdGFyYm9hcmQgQXR0YWNobWVudHMnLCAnVHVyYm8gRHJpdmUnXTtcbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtY29udGFpbmVyXCI+XG4gIDwhLS0gI2RvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtc3BhdHVsYS1sYWJlbFwiPlxuICAgIFNwYXR1bGEgRmVhdHVyZXNcbiAgPC9sYWJlbD5cbiAgPHVsIGNka0xpc3Rib3hcbiAgICAgIGNka0xpc3Rib3hNdWx0aXBsZVxuICAgICAgY2RrTGlzdGJveFVzZUFjdGl2ZURlc2NlbmRhbnRcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtc3BhdHVsYS1sYWJlbFwiXG4gICAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgZmVhdHVyZSBvZiBmZWF0dXJlc1wiXG4gICAgICAgIFtjZGtPcHRpb25dPVwiZmVhdHVyZVwiXG4gICAgICAgIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj5cbiAgICAgIHt7ZmVhdHVyZX19XG4gICAgPC9saT5cbiAgPC91bD5cbiAgPCEtLSAjZW5kZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG48L2Rpdj5cbiJdfQ==