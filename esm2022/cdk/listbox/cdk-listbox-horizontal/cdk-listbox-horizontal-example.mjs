import { Component } from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
/** @title Horizontal listbox */
export class CdkListboxHorizontalExample {
    constructor() {
        this.sizes = ['XS', 'S', 'M', 'L', 'XL'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkListboxHorizontalExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.2.0-rc.1", type: CdkListboxHorizontalExample, isStandalone: true, selector: "cdk-listbox-horizontal-example", exportAs: ["cdkListboxhorizontalExample"], ngImport: i0, template: "<!-- #docregion listbox -->\n<label class=\"example-listbox-label\" id=\"example-shirt-size-label\">\n  Shirt Size\n</label>\n<ul cdkListbox\n    cdkListboxOrientation=\"horizontal\"\n    aria-labelledby=\"example-shirt-size-label\"\n    class=\"example-listbox\">\n  @for (size of sizes; track size) {\n    <li [cdkOption]=\"size\" class=\"example-option\">{{size}}</li>\n  }\n</ul>\n<!-- #enddocregion listbox -->\n", styles: [".example-listbox {\n  display: flex;\n  width: 250px;\n  padding: 0;\n}\n\n.example-option {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  list-style: none;\n  padding: 12px;\n  border: solid black;\n  border-width: 1px 1px 1px 0;\n}\n\n.example-option:first-child {\n  border-left-width: 1px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  position: absolute;\n  border: 2px solid black;\n  top: 3px;\n  bottom: 3px;\n  left: 3px;\n  right: 3px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: CdkListboxHorizontalExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-horizontal-example', exportAs: 'cdkListboxhorizontalExample', standalone: true, imports: [CdkListbox, CdkOption], template: "<!-- #docregion listbox -->\n<label class=\"example-listbox-label\" id=\"example-shirt-size-label\">\n  Shirt Size\n</label>\n<ul cdkListbox\n    cdkListboxOrientation=\"horizontal\"\n    aria-labelledby=\"example-shirt-size-label\"\n    class=\"example-listbox\">\n  @for (size of sizes; track size) {\n    <li [cdkOption]=\"size\" class=\"example-option\">{{size}}</li>\n  }\n</ul>\n<!-- #enddocregion listbox -->\n", styles: [".example-listbox {\n  display: flex;\n  width: 250px;\n  padding: 0;\n}\n\n.example-option {\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  list-style: none;\n  padding: 12px;\n  border: solid black;\n  border-width: 1px 1px 1px 0;\n}\n\n.example-option:first-child {\n  border-left-width: 1px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  position: absolute;\n  border: 2px solid black;\n  top: 3px;\n  bottom: 3px;\n  left: 3px;\n  right: 3px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtaG9yaXpvbnRhbC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xpc3Rib3gvY2RrLWxpc3Rib3gtaG9yaXpvbnRhbC9jZGstbGlzdGJveC1ob3Jpem9udGFsLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1ob3Jpem9udGFsL2Nkay1saXN0Ym94LWhvcml6b250YWwtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFM0QsZ0NBQWdDO0FBU2hDLE1BQU0sT0FBTywyQkFBMkI7SUFSeEM7UUFTRSxVQUFLLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDckM7bUhBRlksMkJBQTJCO3VHQUEzQiwyQkFBMkIscUlDWnhDLG1hQWFBLHNwQkRIWSxVQUFVLCtXQUFFLFNBQVM7O2dHQUVwQiwyQkFBMkI7a0JBUnZDLFNBQVM7K0JBQ0UsZ0NBQWdDLFlBQ2hDLDZCQUE2QixjQUczQixJQUFJLFdBQ1AsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDZGtMaXN0Ym94LCBDZGtPcHRpb259IGZyb20gJ0Bhbmd1bGFyL2Nkay9saXN0Ym94JztcblxuLyoqIEB0aXRsZSBIb3Jpem9udGFsIGxpc3Rib3ggKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LWhvcml6b250YWwtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTGlzdGJveGhvcml6b250YWxFeGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbGlzdGJveC1ob3Jpem9udGFsLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstbGlzdGJveC1ob3Jpem9udGFsLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtMaXN0Ym94LCBDZGtPcHRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtMaXN0Ym94SG9yaXpvbnRhbEV4YW1wbGUge1xuICBzaXplcyA9IFsnWFMnLCAnUycsICdNJywgJ0wnLCAnWEwnXTtcbn1cbiIsIjwhLS0gI2RvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuPGxhYmVsIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94LWxhYmVsXCIgaWQ9XCJleGFtcGxlLXNoaXJ0LXNpemUtbGFiZWxcIj5cbiAgU2hpcnQgU2l6ZVxuPC9sYWJlbD5cbjx1bCBjZGtMaXN0Ym94XG4gICAgY2RrTGlzdGJveE9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiXG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwiZXhhbXBsZS1zaGlydC1zaXplLWxhYmVsXCJcbiAgICBjbGFzcz1cImV4YW1wbGUtbGlzdGJveFwiPlxuICBAZm9yIChzaXplIG9mIHNpemVzOyB0cmFjayBzaXplKSB7XG4gICAgPGxpIFtjZGtPcHRpb25dPVwic2l6ZVwiIGNsYXNzPVwiZXhhbXBsZS1vcHRpb25cIj57e3NpemV9fTwvbGk+XG4gIH1cbjwvdWw+XG48IS0tICNlbmRkb2NyZWdpb24gbGlzdGJveCAtLT5cbiJdfQ==