import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/** @title Listbox with reactive forms. */
export class CdkListboxReactiveFormsExample {
    constructor() {
        this.languages = ['C++', 'Java', 'JavaScript', 'Python', 'TypeScript'];
        this.languageCtrl = new FormControl(['TypeScript']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: CdkListboxReactiveFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.1.1", type: CdkListboxReactiveFormsExample, isStandalone: true, selector: "cdk-listbox-reactive-forms-example", exportAs: ["cdkListboxReactiveFormsExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-language-label\">\n    Preferred Language\n  </label>\n  <ul cdkListbox\n      [formControl]=\"languageCtrl\"\n      aria-labelledby=\"example-language-label\"\n      class=\"example-listbox\">\n    @for (language of languages; track language) {\n      <li [cdkOption]=\"language\" class=\"example-option\">{{language}}</li>\n    }\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your preferred language: <strong>{{languageCtrl.value | json}}</strong>&nbsp;\n  <button (click)=\"languageCtrl.reset()\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: CdkListboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-reactive-forms-example', exportAs: 'cdkListboxReactiveFormsExample', standalone: true, imports: [CdkListbox, FormsModule, ReactiveFormsModule, CdkOption, JsonPipe], template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-language-label\">\n    Preferred Language\n  </label>\n  <ul cdkListbox\n      [formControl]=\"languageCtrl\"\n      aria-labelledby=\"example-language-label\"\n      class=\"example-listbox\">\n    @for (language of languages; track language) {\n      <li [cdkOption]=\"language\" class=\"example-option\">{{language}}</li>\n    }\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your preferred language: <strong>{{languageCtrl.value | json}}</strong>&nbsp;\n  <button (click)=\"languageCtrl.reset()\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zL2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy9jZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDOzs7QUFFM0QsMENBQTBDO0FBUzFDLE1BQU0sT0FBTyw4QkFBOEI7SUFSM0M7UUFTRSxjQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDbEUsaUJBQVksR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7S0FDaEQ7OEdBSFksOEJBQThCO2tHQUE5Qiw4QkFBOEIsNElDZDNDLHlwQkFtQkEsMjFCRFBZLFVBQVUsOFdBQUUsV0FBVyxzSUFBRSxtQkFBbUIsa05BQUUsU0FBUyxxS0FBRSxRQUFROzsyRkFFaEUsOEJBQThCO2tCQVIxQyxTQUFTOytCQUNFLG9DQUFvQyxZQUNwQyxnQ0FBZ0MsY0FHOUIsSUFBSSxXQUNQLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7SnNvblBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Nka0xpc3Rib3gsIENka09wdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xpc3Rib3gnO1xuXG4vKiogQHRpdGxlIExpc3Rib3ggd2l0aCByZWFjdGl2ZSBmb3Jtcy4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUnLFxuICBleHBvcnRBczogJ2Nka0xpc3Rib3hSZWFjdGl2ZUZvcm1zRXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtMaXN0Ym94LCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgQ2RrT3B0aW9uLCBKc29uUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hSZWFjdGl2ZUZvcm1zRXhhbXBsZSB7XG4gIGxhbmd1YWdlcyA9IFsnQysrJywgJ0phdmEnLCAnSmF2YVNjcmlwdCcsICdQeXRob24nLCAnVHlwZVNjcmlwdCddO1xuICBsYW5ndWFnZUN0cmwgPSBuZXcgRm9ybUNvbnRyb2woWydUeXBlU2NyaXB0J10pO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1jb250YWluZXJcIj5cbiAgPCEtLSAjZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG4gIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1sYWJlbFwiIGlkPVwiZXhhbXBsZS1sYW5ndWFnZS1sYWJlbFwiPlxuICAgIFByZWZlcnJlZCBMYW5ndWFnZVxuICA8L2xhYmVsPlxuICA8dWwgY2RrTGlzdGJveFxuICAgICAgW2Zvcm1Db250cm9sXT1cImxhbmd1YWdlQ3RybFwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLWxhbmd1YWdlLWxhYmVsXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94XCI+XG4gICAgQGZvciAobGFuZ3VhZ2Ugb2YgbGFuZ3VhZ2VzOyB0cmFjayBsYW5ndWFnZSkge1xuICAgICAgPGxpIFtjZGtPcHRpb25dPVwibGFuZ3VhZ2VcIiBjbGFzcz1cImV4YW1wbGUtb3B0aW9uXCI+e3tsYW5ndWFnZX19PC9saT5cbiAgICB9XG4gIDwvdWw+XG4gIDwhLS0gI2VuZGRvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuPC9kaXY+XG48cD5cbiAgWW91ciBwcmVmZXJyZWQgbGFuZ3VhZ2U6IDxzdHJvbmc+e3tsYW5ndWFnZUN0cmwudmFsdWUgfCBqc29ufX08L3N0cm9uZz4mbmJzcDtcbiAgPGJ1dHRvbiAoY2xpY2spPVwibGFuZ3VhZ2VDdHJsLnJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuPC9wPlxuIl19