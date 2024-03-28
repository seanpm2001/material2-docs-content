import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
/**
 * @title List variants
 */
export class ListVariantsExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: ListVariantsExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.1", type: ListVariantsExample, isStandalone: true, selector: "list-variants-example", ngImport: i0, template: "<h3>Single line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>This is the title</span>\n  </mat-list-item>\n  <mat-list-item>Also the title</mat-list-item>\n</mat-list>\n\n<h3>Two line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    Second line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n    <span matListItemLine>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    <span>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    Third line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line list with secondary text wrapping</h3>\n<mat-list class=\"example-list-wrapping\">\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    <span>\n      Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text\n      inside of a `matListItemTitle` or `matListItemLine` will never wrap.\n    </span>\n  </mat-list-item>\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est\n  </mat-list-item>\n</mat-list>\n", styles: [".example-list-wrapping {\n  max-width: 500px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.1", ngImport: i0, type: ListVariantsExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-variants-example', standalone: true, imports: [MatListModule], template: "<h3>Single line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>This is the title</span>\n  </mat-list-item>\n  <mat-list-item>Also the title</mat-list-item>\n</mat-list>\n\n<h3>Two line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span>Second line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    Second line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line lists</h3>\n<mat-list>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line</span>\n    <span matListItemLine>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    <span>Third line</span>\n  </mat-list-item>\n  <mat-list-item>\n    <span matListItemTitle>Title</span>\n    <span matListItemLine>Second line. This line will truncate.</span>\n    Third line\n  </mat-list-item>\n</mat-list>\n\n<h3>Three line list with secondary text wrapping</h3>\n<mat-list class=\"example-list-wrapping\">\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    <span>\n      Secondary line that will wrap because the list lines is explicitly set to 3 lines. Text\n      inside of a `matListItemTitle` or `matListItemLine` will never wrap.\n    </span>\n  </mat-list-item>\n  <mat-list-item lines=\"3\">\n    <span matListItemTitle>Title</span>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco\n    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in\n    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat\n    non proident, sunt in culpa qui officia deserunt mollit anim id est\n  </mat-list-item>\n</mat-list>\n", styles: [".example-list-wrapping {\n  max-width: 500px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12YXJpYW50cy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvbGlzdC9saXN0LXZhcmlhbnRzL2xpc3QtdmFyaWFudHMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC12YXJpYW50cy9saXN0LXZhcmlhbnRzLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQzs7O0FBRXJEOztHQUVHO0FBUUgsTUFBTSxPQUFPLG1CQUFtQjtxSEFBbkIsbUJBQW1CO3lHQUFuQixtQkFBbUIsaUZDYmhDLCtqRUE2REEsMkdEbERZLGFBQWE7O2tHQUVaLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSx1QkFBdUIsY0FHckIsSUFBSSxXQUNQLENBQUMsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRMaXN0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9saXN0JztcblxuLyoqXG4gKiBAdGl0bGUgTGlzdCB2YXJpYW50c1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LXZhcmlhbnRzLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2xpc3QtdmFyaWFudHMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2xpc3QtdmFyaWFudHMtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0TGlzdE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RWYXJpYW50c0V4YW1wbGUge31cbiIsIjxoMz5TaW5nbGUgbGluZSBsaXN0czwvaDM+XG48bWF0LWxpc3Q+XG4gIDxtYXQtbGlzdC1pdGVtPlxuICAgIDxzcGFuIG1hdExpc3RJdGVtVGl0bGU+VGhpcyBpcyB0aGUgdGl0bGU8L3NwYW4+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1saXN0LWl0ZW0+QWxzbyB0aGUgdGl0bGU8L21hdC1saXN0LWl0ZW0+XG48L21hdC1saXN0PlxuXG48aDM+VHdvIGxpbmUgbGlzdHM8L2gzPlxuPG1hdC1saXN0PlxuICA8bWF0LWxpc3QtaXRlbT5cbiAgICA8c3BhbiBtYXRMaXN0SXRlbVRpdGxlPlRpdGxlPC9zcGFuPlxuICAgIDxzcGFuIG1hdExpc3RJdGVtTGluZT5TZWNvbmQgbGluZTwvc3Bhbj5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuICA8bWF0LWxpc3QtaXRlbT5cbiAgICA8c3BhbiBtYXRMaXN0SXRlbVRpdGxlPlRpdGxlPC9zcGFuPlxuICAgIDxzcGFuPlNlY29uZCBsaW5lPC9zcGFuPlxuICA8L21hdC1saXN0LWl0ZW0+XG4gIDxtYXQtbGlzdC1pdGVtPlxuICAgIDxzcGFuIG1hdExpc3RJdGVtVGl0bGU+VGl0bGU8L3NwYW4+XG4gICAgU2Vjb25kIGxpbmVcbiAgPC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cblxuPGgzPlRocmVlIGxpbmUgbGlzdHM8L2gzPlxuPG1hdC1saXN0PlxuICA8bWF0LWxpc3QtaXRlbT5cbiAgICA8c3BhbiBtYXRMaXN0SXRlbVRpdGxlPlRpdGxlPC9zcGFuPlxuICAgIDxzcGFuIG1hdExpc3RJdGVtTGluZT5TZWNvbmQgbGluZTwvc3Bhbj5cbiAgICA8c3BhbiBtYXRMaXN0SXRlbUxpbmU+VGhpcmQgbGluZTwvc3Bhbj5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuICA8bWF0LWxpc3QtaXRlbT5cbiAgICA8c3BhbiBtYXRMaXN0SXRlbVRpdGxlPlRpdGxlPC9zcGFuPlxuICAgIDxzcGFuIG1hdExpc3RJdGVtTGluZT5TZWNvbmQgbGluZS4gVGhpcyBsaW5lIHdpbGwgdHJ1bmNhdGUuPC9zcGFuPlxuICAgIDxzcGFuPlRoaXJkIGxpbmU8L3NwYW4+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1saXN0LWl0ZW0+XG4gICAgPHNwYW4gbWF0TGlzdEl0ZW1UaXRsZT5UaXRsZTwvc3Bhbj5cbiAgICA8c3BhbiBtYXRMaXN0SXRlbUxpbmU+U2Vjb25kIGxpbmUuIFRoaXMgbGluZSB3aWxsIHRydW5jYXRlLjwvc3Bhbj5cbiAgICBUaGlyZCBsaW5lXG4gIDwvbWF0LWxpc3QtaXRlbT5cbjwvbWF0LWxpc3Q+XG5cbjxoMz5UaHJlZSBsaW5lIGxpc3Qgd2l0aCBzZWNvbmRhcnkgdGV4dCB3cmFwcGluZzwvaDM+XG48bWF0LWxpc3QgY2xhc3M9XCJleGFtcGxlLWxpc3Qtd3JhcHBpbmdcIj5cbiAgPG1hdC1saXN0LWl0ZW0gbGluZXM9XCIzXCI+XG4gICAgPHNwYW4gbWF0TGlzdEl0ZW1UaXRsZT5UaXRsZTwvc3Bhbj5cbiAgICA8c3Bhbj5cbiAgICAgIFNlY29uZGFyeSBsaW5lIHRoYXQgd2lsbCB3cmFwIGJlY2F1c2UgdGhlIGxpc3QgbGluZXMgaXMgZXhwbGljaXRseSBzZXQgdG8gMyBsaW5lcy4gVGV4dFxuICAgICAgaW5zaWRlIG9mIGEgYG1hdExpc3RJdGVtVGl0bGVgIG9yIGBtYXRMaXN0SXRlbUxpbmVgIHdpbGwgbmV2ZXIgd3JhcC5cbiAgICA8L3NwYW4+XG4gIDwvbWF0LWxpc3QtaXRlbT5cbiAgPG1hdC1saXN0LWl0ZW0gbGluZXM9XCIzXCI+XG4gICAgPHNwYW4gbWF0TGlzdEl0ZW1UaXRsZT5UaXRsZTwvc3Bhbj5cbiAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dFxuICAgIGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvXG4gICAgbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIER1aXMgYXV0ZSBpcnVyZSBkb2xvciBpbiByZXByZWhlbmRlcml0IGluXG4gICAgdm9sdXB0YXRlIHZlbGl0IGVzc2UgY2lsbHVtIGRvbG9yZSBldSBmdWdpYXQgbnVsbGEgcGFyaWF0dXIuIEV4Y2VwdGV1ciBzaW50IG9jY2FlY2F0IGN1cGlkYXRhdFxuICAgIG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3RcbiAgPC9tYXQtbGlzdC1pdGVtPlxuPC9tYXQtbGlzdD5cbiJdfQ==