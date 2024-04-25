import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/divider";
import * as i3 from "@angular/material/icon";
/**
 * @title Basic buttons
 */
export class ButtonOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: ButtonOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0-next.5", type: ButtonOverviewExample, isStandalone: true, selector: "button-overview-example", ngImport: i0, template: "<section>\n  <div class=\"example-label\">Basic</div>\n  <div class=\"example-button-row\">\n    <button mat-button>Basic</button>\n    <button mat-button color=\"primary\">Primary</button>\n    <button mat-button color=\"accent\">Accent</button>\n    <button mat-button color=\"warn\">Warn</button>\n    <button mat-button disabled>Disabled</button>\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Raised</div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Basic</button>\n    <button mat-raised-button color=\"primary\">Primary</button>\n    <button mat-raised-button color=\"accent\">Accent</button>\n    <button mat-raised-button color=\"warn\">Warn</button>\n    <button mat-raised-button disabled>Disabled</button>\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Stroked</div>\n  <div class=\"example-button-row\">\n    <button mat-stroked-button>Basic</button>\n    <button mat-stroked-button color=\"primary\">Primary</button>\n    <button mat-stroked-button color=\"accent\">Accent</button>\n    <button mat-stroked-button color=\"warn\">Warn</button>\n    <button mat-stroked-button disabled>Disabled</button>\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Flat</div>\n  <div class=\"example-button-row\">\n    <button mat-flat-button>Basic</button>\n    <button mat-flat-button color=\"primary\">Primary</button>\n    <button mat-flat-button color=\"accent\">Accent</button>\n    <button mat-flat-button color=\"warn\">Warn</button>\n    <button mat-flat-button disabled>Disabled</button>\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Icon</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\n        <mat-icon>home</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\n        <mat-icon>open_in_new</mat-icon>\n      </button>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>bookmark</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\n          <mat-icon>favorite</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Mini FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\n          <mat-icon>plus_one</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: ["section {\n  display: table;\n}\n\n.example-label {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row {\n  display: table-cell;\n  max-width: 600px;\n}\n\n.example-button-row .mat-mdc-button-base {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i1.MatMiniFabButton, selector: "button[mat-mini-fab]", exportAs: ["matButton"] }, { kind: "component", type: i1.MatFabButton, selector: "button[mat-fab]", inputs: ["extended"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0-next.5", ngImport: i0, type: ButtonOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-overview-example', standalone: true, imports: [MatButtonModule, MatDividerModule, MatIconModule], template: "<section>\n  <div class=\"example-label\">Basic</div>\n  <div class=\"example-button-row\">\n    <button mat-button>Basic</button>\n    <button mat-button color=\"primary\">Primary</button>\n    <button mat-button color=\"accent\">Accent</button>\n    <button mat-button color=\"warn\">Warn</button>\n    <button mat-button disabled>Disabled</button>\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Raised</div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Basic</button>\n    <button mat-raised-button color=\"primary\">Primary</button>\n    <button mat-raised-button color=\"accent\">Accent</button>\n    <button mat-raised-button color=\"warn\">Warn</button>\n    <button mat-raised-button disabled>Disabled</button>\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Stroked</div>\n  <div class=\"example-button-row\">\n    <button mat-stroked-button>Basic</button>\n    <button mat-stroked-button color=\"primary\">Primary</button>\n    <button mat-stroked-button color=\"accent\">Accent</button>\n    <button mat-stroked-button color=\"warn\">Warn</button>\n    <button mat-stroked-button disabled>Disabled</button>\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Flat</div>\n  <div class=\"example-button-row\">\n    <button mat-flat-button>Basic</button>\n    <button mat-flat-button color=\"primary\">Primary</button>\n    <button mat-flat-button color=\"accent\">Accent</button>\n    <button mat-flat-button color=\"warn\">Warn</button>\n    <button mat-flat-button disabled>Disabled</button>\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Icon</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\n        <mat-icon>home</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\n        <mat-icon>open_in_new</mat-icon>\n      </button>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>bookmark</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\n          <mat-icon>favorite</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Mini FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\n          <mat-icon>plus_one</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: ["section {\n  display: table;\n}\n\n.example-label {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row {\n  display: table-cell;\n  max-width: 600px;\n}\n\n.example-button-row .mat-mdc-button-base {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24vYnV0dG9uLW92ZXJ2aWV3L2J1dHRvbi1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvYnV0dG9uL2J1dHRvbi1vdmVydmlldy9idXR0b24tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFFekQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8scUJBQXFCO3FIQUFyQixxQkFBcUI7eUdBQXJCLHFCQUFxQixtRkNmbEMsNmhLQThIQSxxaUJEakhZLGVBQWUsNHRCQUFFLGdCQUFnQixrSUFBRSxhQUFhOztrR0FFL0MscUJBQXFCO2tCQVBqQyxTQUFTOytCQUNFLHlCQUF5QixjQUd2QixJQUFJLFdBQ1AsQ0FBQyxlQUFlLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0RGl2aWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGl2aWRlcic7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuLyoqXG4gKiBAdGl0bGUgQmFzaWMgYnV0dG9uc1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnYnV0dG9uLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSwgTWF0RGl2aWRlck1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvbk92ZXJ2aWV3RXhhbXBsZSB7fVxuIiwiPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+QmFzaWM8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgICA8YSBtYXQtYnV0dG9uIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkxpbms8L2E+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWxcIj5SYWlzZWQ8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICAgIDxidXR0b24gbWF0LXJhaXNlZC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNvbG9yPVwiYWNjZW50XCI+QWNjZW50PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICAgIDxhIG1hdC1yYWlzZWQtYnV0dG9uIGhyZWY9XCJodHRwczovL3d3dy5nb29nbGUuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPkxpbms8L2E+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWxcIj5TdHJva2VkPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbj5CYXNpYzwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiPlByaW1hcnk8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiPkFjY2VudDwvYnV0dG9uPlxuICAgIDxidXR0b24gbWF0LXN0cm9rZWQtYnV0dG9uIGNvbG9yPVwid2FyblwiPldhcm48L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1zdHJva2VkLWJ1dHRvbiBkaXNhYmxlZD5EaXNhYmxlZDwvYnV0dG9uPlxuICAgIDxhIG1hdC1zdHJva2VkLWJ1dHRvbiBocmVmPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5MaW5rPC9hPlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+RmxhdDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24+QmFzaWM8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIj5QcmltYXJ5PC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gY29sb3I9XCJhY2NlbnRcIj5BY2NlbnQ8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1mbGF0LWJ1dHRvbiBjb2xvcj1cIndhcm5cIj5XYXJuPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtZmxhdC1idXR0b24gZGlzYWJsZWQ+RGlzYWJsZWQ8L2J1dHRvbj5cbiAgICA8YSBtYXQtZmxhdC1idXR0b24gaHJlZj1cImh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+TGluazwvYT5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG48bWF0LWRpdmlkZXI+PC9tYXQtZGl2aWRlcj5cbjxzZWN0aW9uPlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1sYWJlbFwiPkljb248L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLXJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWZsZXgtY29udGFpbmVyXCI+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgdmVydGljYWwgdGhyZWUgZG90IGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPm1vcmVfdmVydDwvbWF0LWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBob21lIGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPmhvbWU8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cImFjY2VudFwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBtZW51IGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPm1lbnU8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBjb2xvcj1cIndhcm5cIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgICAgICA8bWF0LWljb24+ZmF2b3JpdGU8L21hdC1pY29uPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZCBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgb3BlbiBpbiBuZXcgdGFiIGljb25cIj5cbiAgICAgICAgPG1hdC1pY29uPm9wZW5faW5fbmV3PC9tYXQtaWNvbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbjxtYXQtZGl2aWRlcj48L21hdC1kaXZpZGVyPlxuPHNlY3Rpb24+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxhYmVsXCI+RkFCPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1yb3dcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mbGV4LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIG1hdC1mYWIgY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGRlbGV0ZSBpY29uXCI+XG4gICAgICAgICAgPG1hdC1pY29uPmRlbGV0ZTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWZhYiBjb2xvcj1cImFjY2VudFwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBib29rbWFyayBpY29uXCI+XG4gICAgICAgICAgPG1hdC1pY29uPmJvb2ttYXJrPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtZmFiIGNvbG9yPVwid2FyblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBob21lIGljb25cIj5cbiAgICAgICAgICA8bWF0LWljb24+aG9tZTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LWZhYiBkaXNhYmxlZCBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgaGVhcnQgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5mYXZvcml0ZTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuPG1hdC1kaXZpZGVyPjwvbWF0LWRpdmlkZXI+XG48c2VjdGlvbj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbGFiZWxcIj5NaW5pIEZBQjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tcm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtZmxleC1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJwcmltYXJ5XCIgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIG1lbnUgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5tZW51PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgY29sb3I9XCJhY2NlbnRcIiBhcmlhLWxhYmVsPVwiRXhhbXBsZSBpY29uIGJ1dHRvbiB3aXRoIGEgcGx1cyBvbmUgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5wbHVzX29uZTwvbWF0LWljb24+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGNvbG9yPVwid2FyblwiIGFyaWEtbGFiZWw9XCJFeGFtcGxlIGljb24gYnV0dG9uIHdpdGggYSBmaWx0ZXIgbGlzdCBpY29uXCI+XG4gICAgICAgICAgPG1hdC1pY29uPmZpbHRlcl9saXN0PC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgPGJ1dHRvbiBtYXQtbWluaS1mYWIgZGlzYWJsZWQgYXJpYS1sYWJlbD1cIkV4YW1wbGUgaWNvbiBidXR0b24gd2l0aCBhIGhvbWUgaWNvblwiPlxuICAgICAgICAgIDxtYXQtaWNvbj5ob21lPC9tYXQtaWNvbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iXX0=