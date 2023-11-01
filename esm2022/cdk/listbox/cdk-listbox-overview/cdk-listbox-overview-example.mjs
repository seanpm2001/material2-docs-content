import { Component } from '@angular/core';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
/** @title Basic listbox. */
export class CdkListboxOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: CdkListboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.0", type: CdkListboxOverviewExample, isStandalone: true, selector: "cdk-listbox-overview-example", exportAs: ["cdkListboxOverviewExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-fav-color-label\">\n    Favorite color\n  </label>\n  <ul cdkListbox\n      aria-labelledby=\"example-fav-color-label\"\n      class=\"example-listbox\">\n    <!-- #docregion option -->\n    <li cdkOption=\"red\" class=\"example-option\">Red</li>\n    <!-- #enddocregion option -->\n    <li cdkOption=\"green\" class=\"example-option\">Green</li>\n    <li cdkOption=\"blue\" class=\"example-option\">Blue</li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: CdkListboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-overview-example', exportAs: 'cdkListboxOverviewExample', standalone: true, imports: [CdkListbox, CdkOption], template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-fav-color-label\">\n    Favorite color\n  </label>\n  <ul cdkListbox\n      aria-labelledby=\"example-fav-color-label\"\n      class=\"example-listbox\">\n    <!-- #docregion option -->\n    <li cdkOption=\"red\" class=\"example-option\">Red</li>\n    <!-- #enddocregion option -->\n    <li cdkOption=\"green\" class=\"example-option\">Green</li>\n    <li cdkOption=\"blue\" class=\"example-option\">Blue</li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LW92ZXJ2aWV3L2Nkay1saXN0Ym94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1vdmVydmlldy9jZGstbGlzdGJveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDOztBQUUzRCw0QkFBNEI7QUFTNUIsTUFBTSxPQUFPLHlCQUF5QjttSEFBekIseUJBQXlCO3VHQUF6Qix5QkFBeUIsaUlDWnRDLGdsQkFnQkEsMjFCRE5ZLFVBQVUsK1dBQUUsU0FBUzs7Z0dBRXBCLHlCQUF5QjtrQkFSckMsU0FBUzsrQkFDRSw4QkFBOEIsWUFDOUIsMkJBQTJCLGNBR3pCLElBQUksV0FDUCxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0Nka0xpc3Rib3gsIENka09wdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xpc3Rib3gnO1xuXG4vKiogQHRpdGxlIEJhc2ljIGxpc3Rib3guICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstbGlzdGJveC1vdmVydmlldy1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtMaXN0Ym94T3ZlcnZpZXdFeGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbGlzdGJveC1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWxpc3Rib3gtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Nka0xpc3Rib3gsIENka09wdGlvbl0sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hPdmVydmlld0V4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtY29udGFpbmVyXCI+XG4gIDwhLS0gI2RvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtZmF2LWNvbG9yLWxhYmVsXCI+XG4gICAgRmF2b3JpdGUgY29sb3JcbiAgPC9sYWJlbD5cbiAgPHVsIGNka0xpc3Rib3hcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtZmF2LWNvbG9yLWxhYmVsXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94XCI+XG4gICAgPCEtLSAjZG9jcmVnaW9uIG9wdGlvbiAtLT5cbiAgICA8bGkgY2RrT3B0aW9uPVwicmVkXCIgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlJlZDwvbGk+XG4gICAgPCEtLSAjZW5kZG9jcmVnaW9uIG9wdGlvbiAtLT5cbiAgICA8bGkgY2RrT3B0aW9uPVwiZ3JlZW5cIiBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+R3JlZW48L2xpPlxuICAgIDxsaSBjZGtPcHRpb249XCJibHVlXCIgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPkJsdWU8L2xpPlxuICA8L3VsPlxuICA8IS0tICNlbmRkb2NyZWdpb24gbGlzdGJveCAtLT5cbjwvZGl2PlxuIl19