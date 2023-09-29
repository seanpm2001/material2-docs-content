import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgFor, JsonPipe } from '@angular/common';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
/** @title Listbox with reactive forms. */
export class CdkListboxReactiveFormsExample {
    constructor() {
        this.languages = ['C++', 'Java', 'JavaScript', 'Python', 'TypeScript'];
        this.languageCtrl = new FormControl(['TypeScript']);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CdkListboxReactiveFormsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-next.6", type: CdkListboxReactiveFormsExample, isStandalone: true, selector: "cdk-listbox-reactive-forms-example", exportAs: ["cdkListboxReactiveFormsExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-language-label\">\n    Preferred Language\n  </label>\n  <ul cdkListbox\n      [formControl]=\"languageCtrl\"\n      aria-labelledby=\"example-language-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let language of languages\"\n        [cdkOption]=\"language\"\n        class=\"example-option\">\n      {{language}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your preferred language: <strong>{{languageCtrl.value | json}}</strong>&nbsp;\n  <button (click)=\"languageCtrl.reset()\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "ngmodule", type: ReactiveFormsModule }, { kind: "directive", type: i1.FormControlDirective, selector: "[formControl]", inputs: ["formControl", "disabled", "ngModel"], outputs: ["ngModelChange"], exportAs: ["ngForm"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-next.6", ngImport: i0, type: CdkListboxReactiveFormsExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-reactive-forms-example', exportAs: 'cdkListboxReactiveFormsExample', standalone: true, imports: [CdkListbox, FormsModule, ReactiveFormsModule, NgFor, CdkOption, JsonPipe], template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-language-label\">\n    Preferred Language\n  </label>\n  <ul cdkListbox\n      [formControl]=\"languageCtrl\"\n      aria-labelledby=\"example-language-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let language of languages\"\n        [cdkOption]=\"language\"\n        class=\"example-option\">\n      {{language}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your preferred language: <strong>{{languageCtrl.value | json}}</strong>&nbsp;\n  <button (click)=\"languageCtrl.reset()\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9saXN0Ym94L2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zL2Nkay1saXN0Ym94LXJlYWN0aXZlLWZvcm1zLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy9jZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQzdFLE9BQU8sRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQzs7O0FBRTNELDBDQUEwQztBQVMxQyxNQUFNLE9BQU8sOEJBQThCO0lBUjNDO1FBU0UsY0FBUyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ2xFLGlCQUFZLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0tBQ2hEO3FIQUhZLDhCQUE4Qjt5R0FBOUIsOEJBQThCLDRJQ2QzQyxpcUJBcUJBLDIxQkRUWSxVQUFVLDhXQUFFLFdBQVcsc0lBQUUsbUJBQW1CLGtOQUFFLEtBQUssbUhBQUUsU0FBUyxxS0FBRSxRQUFROztrR0FFdkUsOEJBQThCO2tCQVIxQyxTQUFTOytCQUNFLG9DQUFvQyxZQUNwQyxnQ0FBZ0MsY0FHOUIsSUFBSSxXQUNQLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge05nRm9yLCBKc29uUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7Q2RrTGlzdGJveCwgQ2RrT3B0aW9ufSBmcm9tICdAYW5ndWxhci9jZGsvbGlzdGJveCc7XG5cbi8qKiBAdGl0bGUgTGlzdGJveCB3aXRoIHJlYWN0aXZlIGZvcm1zLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWxpc3Rib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZScsXG4gIGV4cG9ydEFzOiAnY2RrTGlzdGJveFJlYWN0aXZlRm9ybXNFeGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstbGlzdGJveC1yZWFjdGl2ZS1mb3Jtcy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWxpc3Rib3gtcmVhY3RpdmUtZm9ybXMtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Nka0xpc3Rib3gsIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBOZ0ZvciwgQ2RrT3B0aW9uLCBKc29uUGlwZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0xpc3Rib3hSZWFjdGl2ZUZvcm1zRXhhbXBsZSB7XG4gIGxhbmd1YWdlcyA9IFsnQysrJywgJ0phdmEnLCAnSmF2YVNjcmlwdCcsICdQeXRob24nLCAnVHlwZVNjcmlwdCddO1xuICBsYW5ndWFnZUN0cmwgPSBuZXcgRm9ybUNvbnRyb2woWydUeXBlU2NyaXB0J10pO1xufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1jb250YWluZXJcIj5cbiAgPCEtLSAjZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG4gIDxsYWJlbCBjbGFzcz1cImV4YW1wbGUtbGlzdGJveC1sYWJlbFwiIGlkPVwiZXhhbXBsZS1sYW5ndWFnZS1sYWJlbFwiPlxuICAgIFByZWZlcnJlZCBMYW5ndWFnZVxuICA8L2xhYmVsPlxuICA8dWwgY2RrTGlzdGJveFxuICAgICAgW2Zvcm1Db250cm9sXT1cImxhbmd1YWdlQ3RybFwiXG4gICAgICBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLWxhbmd1YWdlLWxhYmVsXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94XCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBsYW5ndWFnZSBvZiBsYW5ndWFnZXNcIlxuICAgICAgICBbY2RrT3B0aW9uXT1cImxhbmd1YWdlXCJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAge3tsYW5ndWFnZX19XG4gICAgPC9saT5cbiAgPC91bD5cbiAgPCEtLSAjZW5kZG9jcmVnaW9uIGxpc3Rib3ggLS0+XG48L2Rpdj5cbjxwPlxuICBZb3VyIHByZWZlcnJlZCBsYW5ndWFnZTogPHN0cm9uZz57e2xhbmd1YWdlQ3RybC52YWx1ZSB8IGpzb259fTwvc3Ryb25nPiZuYnNwO1xuICA8YnV0dG9uIChjbGljayk9XCJsYW5ndWFnZUN0cmwucmVzZXQoKVwiPlJlc2V0PC9idXR0b24+XG48L3A+XG4iXX0=