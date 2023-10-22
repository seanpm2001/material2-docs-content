import { Component } from '@angular/core';
import { NgFor, JsonPipe } from '@angular/common';
import { CdkListbox, CdkOption } from '@angular/cdk/listbox';
import * as i0 from "@angular/core";
/** @title Listbox with value binding. */
export class CdkListboxValueBindingExample {
    constructor() {
        this.starters = ['Sprigatito', 'Fuecoco', 'Quaxly'];
        this.starter = ['Fuecoco'];
    }
    reset() {
        this.starter = ['Fuecoco'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: CdkListboxValueBindingExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.0", type: CdkListboxValueBindingExample, isStandalone: true, selector: "cdk-listbox-value-binding-example", exportAs: ["cdkListboxValueBindingExample"], ngImport: i0, template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-starter-pokemon-label\">\n    Starter Pokemon\n  </label>\n  <ul cdkListbox\n      [cdkListboxValue]=\"starter\"\n      (cdkListboxValueChange)=\"starter = $event.value\"\n      aria-labelledby=\"example-starter-pokemon-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let pokemon of starters\"\n        [cdkOption]=\"pokemon\"\n        class=\"example-option\">\n      {{pokemon}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your starter pokemon is <strong>{{starter | json}}</strong>&nbsp;\n  <button (click)=\"reset()\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"], dependencies: [{ kind: "directive", type: CdkListbox, selector: "[cdkListbox]", inputs: ["id", "tabindex", "cdkListboxValue", "cdkListboxMultiple", "cdkListboxDisabled", "cdkListboxUseActiveDescendant", "cdkListboxOrientation", "cdkListboxCompareWith", "cdkListboxNavigationWrapDisabled", "cdkListboxNavigatesDisabledOptions"], outputs: ["cdkListboxValueChange"], exportAs: ["cdkListbox"] }, { kind: "directive", type: NgFor, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: CdkOption, selector: "[cdkOption]", inputs: ["id", "cdkOption", "cdkOptionTypeaheadLabel", "cdkOptionDisabled", "tabindex"], exportAs: ["cdkOption"] }, { kind: "pipe", type: JsonPipe, name: "json" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.0", ngImport: i0, type: CdkListboxValueBindingExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-listbox-value-binding-example', exportAs: 'cdkListboxValueBindingExample', standalone: true, imports: [CdkListbox, NgFor, CdkOption, JsonPipe], template: "<div class=\"example-listbox-container\">\n  <!-- #docregion listbox -->\n  <label class=\"example-listbox-label\" id=\"example-starter-pokemon-label\">\n    Starter Pokemon\n  </label>\n  <ul cdkListbox\n      [cdkListboxValue]=\"starter\"\n      (cdkListboxValueChange)=\"starter = $event.value\"\n      aria-labelledby=\"example-starter-pokemon-label\"\n      class=\"example-listbox\">\n    <li *ngFor=\"let pokemon of starters\"\n        [cdkOption]=\"pokemon\"\n        class=\"example-option\">\n      {{pokemon}}\n    </li>\n  </ul>\n  <!-- #enddocregion listbox -->\n</div>\n<p>\n  Your starter pokemon is <strong>{{starter | json}}</strong>&nbsp;\n  <button (click)=\"reset()\">Reset</button>\n</p>\n", styles: [".example-listbox-container {\n  display: block;\n  width: 250px;\n  border: 1px solid black;\n}\n\n.example-listbox-label {\n  display: block;\n  padding: 5px;\n}\n\n.example-listbox {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.example-option {\n  position: relative;\n  padding: 5px 5px 5px 25px;\n}\n\n.example-option[aria-selected='true']::before {\n  content: '';\n  display: block;\n  width: 20px;\n  height: 20px;\n  background-image: url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24\" width=\"24\"><path d=\"m9.55 18-5.7-5.7 1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4Z\"/></svg>'); /* stylelint-disable-line */\n  background-size: cover;\n  position: absolute;\n  left: 2px;\n}\n\n.example-option:focus {\n  background: rgba(0, 0, 0, 0.2);\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWxpc3Rib3gtdmFsdWUtYmluZGluZy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2xpc3Rib3gvY2RrLWxpc3Rib3gtdmFsdWUtYmluZGluZy9jZGstbGlzdGJveC12YWx1ZS1iaW5kaW5nLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvbGlzdGJveC9jZGstbGlzdGJveC12YWx1ZS1iaW5kaW5nL2Nkay1saXN0Ym94LXZhbHVlLWJpbmRpbmctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLEtBQUssRUFBRSxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUMsVUFBVSxFQUFFLFNBQVMsRUFBQyxNQUFNLHNCQUFzQixDQUFDOztBQUUzRCx5Q0FBeUM7QUFTekMsTUFBTSxPQUFPLDZCQUE2QjtJQVIxQztRQVNFLGFBQVEsR0FBRyxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0MsWUFBTyxHQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBSzFDO0lBSEMsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM3QixDQUFDO21IQU5VLDZCQUE2Qjt1R0FBN0IsNkJBQTZCLDBJQ2IxQyx3c0JBc0JBLDIxQkRYWSxVQUFVLCtXQUFFLEtBQUssbUhBQUUsU0FBUyxxS0FBRSxRQUFROztnR0FFckMsNkJBQTZCO2tCQVJ6QyxTQUFTOytCQUNFLG1DQUFtQyxZQUNuQywrQkFBK0IsY0FHN0IsSUFBSSxXQUNQLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ0ZvciwgSnNvblBpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge0Nka0xpc3Rib3gsIENka09wdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xpc3Rib3gnO1xuXG4vKiogQHRpdGxlIExpc3Rib3ggd2l0aCB2YWx1ZSBiaW5kaW5nLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWxpc3Rib3gtdmFsdWUtYmluZGluZy1leGFtcGxlJyxcbiAgZXhwb3J0QXM6ICdjZGtMaXN0Ym94VmFsdWVCaW5kaW5nRXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWxpc3Rib3gtdmFsdWUtYmluZGluZy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLWxpc3Rib3gtdmFsdWUtYmluZGluZy1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrTGlzdGJveCwgTmdGb3IsIENka09wdGlvbiwgSnNvblBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtMaXN0Ym94VmFsdWVCaW5kaW5nRXhhbXBsZSB7XG4gIHN0YXJ0ZXJzID0gWydTcHJpZ2F0aXRvJywgJ0Z1ZWNvY28nLCAnUXVheGx5J107XG4gIHN0YXJ0ZXI6IHJlYWRvbmx5IHN0cmluZ1tdID0gWydGdWVjb2NvJ107XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5zdGFydGVyID0gWydGdWVjb2NvJ107XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtY29udGFpbmVyXCI+XG4gIDwhLS0gI2RvY3JlZ2lvbiBsaXN0Ym94IC0tPlxuICA8bGFiZWwgY2xhc3M9XCJleGFtcGxlLWxpc3Rib3gtbGFiZWxcIiBpZD1cImV4YW1wbGUtc3RhcnRlci1wb2tlbW9uLWxhYmVsXCI+XG4gICAgU3RhcnRlciBQb2tlbW9uXG4gIDwvbGFiZWw+XG4gIDx1bCBjZGtMaXN0Ym94XG4gICAgICBbY2RrTGlzdGJveFZhbHVlXT1cInN0YXJ0ZXJcIlxuICAgICAgKGNka0xpc3Rib3hWYWx1ZUNoYW5nZSk9XCJzdGFydGVyID0gJGV2ZW50LnZhbHVlXCJcbiAgICAgIGFyaWEtbGFiZWxsZWRieT1cImV4YW1wbGUtc3RhcnRlci1wb2tlbW9uLWxhYmVsXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS1saXN0Ym94XCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBwb2tlbW9uIG9mIHN0YXJ0ZXJzXCJcbiAgICAgICAgW2Nka09wdGlvbl09XCJwb2tlbW9uXCJcbiAgICAgICAgY2xhc3M9XCJleGFtcGxlLW9wdGlvblwiPlxuICAgICAge3twb2tlbW9ufX1cbiAgICA8L2xpPlxuICA8L3VsPlxuICA8IS0tICNlbmRkb2NyZWdpb24gbGlzdGJveCAtLT5cbjwvZGl2PlxuPHA+XG4gIFlvdXIgc3RhcnRlciBwb2tlbW9uIGlzIDxzdHJvbmc+e3tzdGFydGVyIHwganNvbn19PC9zdHJvbmc+Jm5ic3A7XG4gIDxidXR0b24gKGNsaWNrKT1cInJlc2V0KClcIj5SZXNldDwvYnV0dG9uPlxuPC9wPlxuIl19