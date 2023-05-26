import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/tabs";
/**
 * @title Customizing the theme options on the tab group
 */
class TabGroupThemeExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TabGroupThemeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: TabGroupThemeExample, isStandalone: true, selector: "tab-group-theme-example", ngImport: i0, template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Color</span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Background Color</span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["disableRipple", "aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: MatTabsModule }, { kind: "component", type: i2.MatTab, selector: "mat-tab", inputs: ["disabled"], exportAs: ["matTab"] }, { kind: "component", type: i2.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "disableRipple", "fitInkBarToContent", "mat-stretch-tabs"], exportAs: ["matTabGroup"] }] }); }
}
export { TabGroupThemeExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: TabGroupThemeExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-theme-example', standalone: true, imports: [MatButtonToggleModule, MatTabsModule], template: "<div>\n  <mat-button-toggle-group #colorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Color</span>\n</div>\n\n<div>\n  <mat-button-toggle-group #backgroundColorToggle=\"matButtonToggleGroup\"\n                           value=\"primary\"\n                           aria-label=\"Change color\">\n    <mat-button-toggle value=\"primary\">Primary</mat-button-toggle>\n    <mat-button-toggle value=\"accent\">Accent</mat-button-toggle>\n    <mat-button-toggle value=\"warn\">Warn</mat-button-toggle>\n  </mat-button-toggle-group>\n  <span class=\"example-button-toggle-label\">Background Color</span>\n</div>\n\n<mat-tab-group [color]=\"colorToggle.value\" [backgroundColor]=\"backgroundColorToggle.value\">\n  <mat-tab label=\"First\">Content 1</mat-tab>\n  <mat-tab label=\"Second\">Content 2</mat-tab>\n  <mat-tab label=\"Third\">Content 3</mat-tab>\n</mat-tab-group>\n", styles: [".example-button-toggle-label {\n  display: inline-block;\n  margin: 16px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLXRoZW1lLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC10aGVtZS90YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLXRoZW1lL3RhYi1ncm91cC10aGVtZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7Ozs7QUFFdEU7O0dBRUc7QUFDSCxNQU9hLG9CQUFvQjs4R0FBcEIsb0JBQW9CO2tHQUFwQixvQkFBb0IsbUZDZGpDLHV0Q0EyQkEsdUlEZlkscUJBQXFCLHNoQkFBRSxhQUFhOztTQUVuQyxvQkFBb0I7MkZBQXBCLG9CQUFvQjtrQkFQaEMsU0FBUzsrQkFDRSx5QkFBeUIsY0FHdkIsSUFBSSxXQUNQLENBQUMscUJBQXFCLEVBQUUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRUYWJzTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcblxuLyoqXG4gKiBAdGl0bGUgQ3VzdG9taXppbmcgdGhlIHRoZW1lIG9wdGlvbnMgb24gdGhlIHRhYiBncm91cFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWItZ3JvdXAtdGhlbWUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLWdyb3VwLXRoZW1lLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWyd0YWItZ3JvdXAtdGhlbWUtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJ1dHRvblRvZ2dsZU1vZHVsZSwgTWF0VGFic01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRhYkdyb3VwVGhlbWVFeGFtcGxlIHt9XG4iLCI8ZGl2PlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAgI2NvbG9yVG9nZ2xlPVwibWF0QnV0dG9uVG9nZ2xlR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDaGFuZ2UgY29sb3JcIj5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJwcmltYXJ5XCI+UHJpbWFyeTwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiYWNjZW50XCI+QWNjZW50PC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJ3YXJuXCI+V2FybjwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1idXR0b24tdG9nZ2xlLWxhYmVsXCI+Q29sb3I8L3NwYW4+XG48L2Rpdj5cblxuPGRpdj5cbiAgPG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwICNiYWNrZ3JvdW5kQ29sb3JUb2dnbGU9XCJtYXRCdXR0b25Ub2dnbGVHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNoYW5nZSBjb2xvclwiPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInByaW1hcnlcIj5QcmltYXJ5PC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJhY2NlbnRcIj5BY2NlbnQ8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cIndhcm5cIj5XYXJuPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgPC9tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cD5cbiAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi10b2dnbGUtbGFiZWxcIj5CYWNrZ3JvdW5kIENvbG9yPC9zcGFuPlxuPC9kaXY+XG5cbjxtYXQtdGFiLWdyb3VwIFtjb2xvcl09XCJjb2xvclRvZ2dsZS52YWx1ZVwiIFtiYWNrZ3JvdW5kQ29sb3JdPVwiYmFja2dyb3VuZENvbG9yVG9nZ2xlLnZhbHVlXCI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiRmlyc3RcIj5Db250ZW50IDE8L21hdC10YWI+XG4gIDxtYXQtdGFiIGxhYmVsPVwiU2Vjb25kXCI+Q29udGVudCAyPC9tYXQtdGFiPlxuICA8bWF0LXRhYiBsYWJlbD1cIlRoaXJkXCI+Q29udGVudCAzPC9tYXQtdGFiPlxuPC9tYXQtdGFiLWdyb3VwPlxuIl19