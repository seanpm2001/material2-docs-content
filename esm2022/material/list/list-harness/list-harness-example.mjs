import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/list";
/**
 * @title Testing with MatListHarness
 */
export class ListHarnessExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: ListHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.1", type: ListHarnessExample, isStandalone: true, selector: "list-harness-example", ngImport: i0, template: "<mat-list>\n  <mat-list-item>\n    <div matListItemTitle>Item </div>\n    <div matListItemLine>1</div>\n    <div matListItemIcon>icon</div>\n    <div matListItemAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n", dependencies: [{ kind: "ngmodule", type: MatListModule }, { kind: "component", type: i1.MatList, selector: "mat-list", exportAs: ["matList"] }, { kind: "component", type: i1.MatListItem, selector: "mat-list-item, a[mat-list-item], button[mat-list-item]", inputs: ["activated"], exportAs: ["matListItem"] }, { kind: "directive", type: i1.MatListItemAvatar, selector: "[matListItemAvatar]" }, { kind: "directive", type: i1.MatListItemIcon, selector: "[matListItemIcon]" }, { kind: "directive", type: i1.MatListSubheaderCssMatStyler, selector: "[mat-subheader], [matSubheader]" }, { kind: "directive", type: i1.MatListItemLine, selector: "[matListItemLine]" }, { kind: "directive", type: i1.MatListItemTitle, selector: "[matListItemTitle]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.1", ngImport: i0, type: ListHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'list-harness-example', standalone: true, imports: [MatListModule], template: "<mat-list>\n  <mat-list-item>\n    <div matListItemTitle>Item </div>\n    <div matListItemLine>1</div>\n    <div matListItemIcon>icon</div>\n    <div matListItemAvatar>Avatar</div>\n  </mat-list-item>\n  <div matSubheader>Section 1</div>\n  <a mat-list-item>\n    <span>Item 2</span>\n  </a>\n  <button mat-list-item>Item 3</button>\n  <div matSubheader>Section 2</div>\n</mat-list>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1oYXJuZXNzLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9saXN0L2xpc3QtaGFybmVzcy9saXN0LWhhcm5lc3MtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2xpc3QvbGlzdC1oYXJuZXNzL2xpc3QtaGFybmVzcy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDs7R0FFRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7OEdBQWxCLGtCQUFrQjtrR0FBbEIsa0JBQWtCLGdGQ1ovQixrWUFjQSwyQ0RKWSxhQUFhOzsyRkFFWixrQkFBa0I7a0JBTjlCLFNBQVM7K0JBQ0Usc0JBQXNCLGNBRXBCLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0TGlzdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbGlzdCc7XG5cbi8qKlxuICogQHRpdGxlIFRlc3Rpbmcgd2l0aCBNYXRMaXN0SGFybmVzc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaXN0LWhhcm5lc3MtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbGlzdC1oYXJuZXNzLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRMaXN0TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgTGlzdEhhcm5lc3NFeGFtcGxlIHt9XG4iLCI8bWF0LWxpc3Q+XG4gIDxtYXQtbGlzdC1pdGVtPlxuICAgIDxkaXYgbWF0TGlzdEl0ZW1UaXRsZT5JdGVtIDwvZGl2PlxuICAgIDxkaXYgbWF0TGlzdEl0ZW1MaW5lPjE8L2Rpdj5cbiAgICA8ZGl2IG1hdExpc3RJdGVtSWNvbj5pY29uPC9kaXY+XG4gICAgPGRpdiBtYXRMaXN0SXRlbUF2YXRhcj5BdmF0YXI8L2Rpdj5cbiAgPC9tYXQtbGlzdC1pdGVtPlxuICA8ZGl2IG1hdFN1YmhlYWRlcj5TZWN0aW9uIDE8L2Rpdj5cbiAgPGEgbWF0LWxpc3QtaXRlbT5cbiAgICA8c3Bhbj5JdGVtIDI8L3NwYW4+XG4gIDwvYT5cbiAgPGJ1dHRvbiBtYXQtbGlzdC1pdGVtPkl0ZW0gMzwvYnV0dG9uPlxuICA8ZGl2IG1hdFN1YmhlYWRlcj5TZWN0aW9uIDI8L2Rpdj5cbjwvbWF0LWxpc3Q+XG4iXX0=