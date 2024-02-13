import * as i0 from '@angular/core';
import { Component } from '@angular/core';
import * as i3 from '@angular/material/icon';
import { MatIconModule } from '@angular/material/icon';
import * as i2 from '@angular/material/divider';
import { MatDividerModule } from '@angular/material/divider';
import * as i1 from '@angular/material/button';
import { MatButtonModule, MatButton } from '@angular/material/button';
import * as i2$1 from '@angular/material/tooltip';
import { MatTooltipModule, MatTooltip } from '@angular/material/tooltip';

/**
 * @title Basic buttons
 */
class ButtonOverviewExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: ButtonOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: ButtonOverviewExample, isStandalone: true, selector: "button-overview-example", ngImport: i0, template: "<section>\n  <div class=\"example-label\">Basic</div>\n  <div class=\"example-button-row\">\n    <button mat-button>Basic</button>\n    <button mat-button color=\"primary\">Primary</button>\n    <button mat-button color=\"accent\">Accent</button>\n    <button mat-button color=\"warn\">Warn</button>\n    <button mat-button disabled>Disabled</button>\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Raised</div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Basic</button>\n    <button mat-raised-button color=\"primary\">Primary</button>\n    <button mat-raised-button color=\"accent\">Accent</button>\n    <button mat-raised-button color=\"warn\">Warn</button>\n    <button mat-raised-button disabled>Disabled</button>\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Stroked</div>\n  <div class=\"example-button-row\">\n    <button mat-stroked-button>Basic</button>\n    <button mat-stroked-button color=\"primary\">Primary</button>\n    <button mat-stroked-button color=\"accent\">Accent</button>\n    <button mat-stroked-button color=\"warn\">Warn</button>\n    <button mat-stroked-button disabled>Disabled</button>\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Flat</div>\n  <div class=\"example-button-row\">\n    <button mat-flat-button>Basic</button>\n    <button mat-flat-button color=\"primary\">Primary</button>\n    <button mat-flat-button color=\"accent\">Accent</button>\n    <button mat-flat-button color=\"warn\">Warn</button>\n    <button mat-flat-button disabled>Disabled</button>\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Icon</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\n        <mat-icon>home</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\n        <mat-icon>open_in_new</mat-icon>\n      </button>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>bookmark</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\n          <mat-icon>favorite</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Mini FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\n          <mat-icon>plus_one</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: ["section {\n  display: table;\n}\n\n.example-label {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row {\n  display: table-cell;\n  max-width: 600px;\n}\n\n.example-button-row .mat-mdc-button-base {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i1.MatMiniFabButton, selector: "button[mat-mini-fab]", exportAs: ["matButton"] }, { kind: "component", type: i1.MatFabButton, selector: "button[mat-fab]", inputs: ["extended"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatDividerModule }, { kind: "component", type: i2.MatDivider, selector: "mat-divider", inputs: ["vertical", "inset"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: ButtonOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-overview-example', standalone: true, imports: [MatButtonModule, MatDividerModule, MatIconModule], template: "<section>\n  <div class=\"example-label\">Basic</div>\n  <div class=\"example-button-row\">\n    <button mat-button>Basic</button>\n    <button mat-button color=\"primary\">Primary</button>\n    <button mat-button color=\"accent\">Accent</button>\n    <button mat-button color=\"warn\">Warn</button>\n    <button mat-button disabled>Disabled</button>\n    <a mat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Raised</div>\n  <div class=\"example-button-row\">\n    <button mat-raised-button>Basic</button>\n    <button mat-raised-button color=\"primary\">Primary</button>\n    <button mat-raised-button color=\"accent\">Accent</button>\n    <button mat-raised-button color=\"warn\">Warn</button>\n    <button mat-raised-button disabled>Disabled</button>\n    <a mat-raised-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Stroked</div>\n  <div class=\"example-button-row\">\n    <button mat-stroked-button>Basic</button>\n    <button mat-stroked-button color=\"primary\">Primary</button>\n    <button mat-stroked-button color=\"accent\">Accent</button>\n    <button mat-stroked-button color=\"warn\">Warn</button>\n    <button mat-stroked-button disabled>Disabled</button>\n    <a mat-stroked-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Flat</div>\n  <div class=\"example-button-row\">\n    <button mat-flat-button>Basic</button>\n    <button mat-flat-button color=\"primary\">Primary</button>\n    <button mat-flat-button color=\"accent\">Accent</button>\n    <button mat-flat-button color=\"warn\">Warn</button>\n    <button mat-flat-button disabled>Disabled</button>\n    <a mat-flat-button href=\"https://www.google.com/\" target=\"_blank\">Link</a>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Icon</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <button mat-icon-button aria-label=\"Example icon button with a vertical three dot icon\">\n        <mat-icon>more_vert</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\" aria-label=\"Example icon button with a home icon\">\n        <mat-icon>home</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\" aria-label=\"Example icon button with a menu icon\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a heart icon\">\n        <mat-icon>favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled aria-label=\"Example icon button with a open in new tab icon\">\n        <mat-icon>open_in_new</mat-icon>\n      </button>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"primary\" aria-label=\"Example icon button with a delete icon\">\n          <mat-icon>delete</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"accent\" aria-label=\"Example icon button with a bookmark icon\">\n          <mat-icon>bookmark</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab color=\"warn\" aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-fab disabled aria-label=\"Example icon button with a heart icon\">\n          <mat-icon>favorite</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n<mat-divider></mat-divider>\n<section>\n  <div class=\"example-label\">Mini FAB</div>\n  <div class=\"example-button-row\">\n    <div class=\"example-flex-container\">\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"primary\" aria-label=\"Example icon button with a menu icon\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"accent\" aria-label=\"Example icon button with a plus one icon\">\n          <mat-icon>plus_one</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab color=\"warn\" aria-label=\"Example icon button with a filter list icon\">\n          <mat-icon>filter_list</mat-icon>\n        </button>\n      </div>\n      <div class=\"example-button-container\">\n        <button mat-mini-fab disabled aria-label=\"Example icon button with a home icon\">\n          <mat-icon>home</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</section>\n", styles: ["section {\n  display: table;\n}\n\n.example-label {\n  display: table-cell;\n  font-size: 14px;\n  margin-left: 8px;\n  min-width: 120px;\n}\n\n.example-button-row {\n  display: table-cell;\n  max-width: 600px;\n}\n\n.example-button-row .mat-mdc-button-base {\n  margin: 8px 8px 8px 0;\n}\n\n.example-flex-container {\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.example-button-container {\n  display: flex;\n  justify-content: center;\n  width: 120px;\n}\n"] }]
        }] });

/**
 * @title Button varieties
 */
class ButtonTypesExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: ButtonTypesExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: ButtonTypesExample, isStandalone: true, selector: "button-types-example", ngImport: i0, template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button matTooltip=\"Basic\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-icon-button matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-fab disabled aria-label=\"Example fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-mini-fab disabled aria-label=\"Example mini fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-mini-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Extended Fab</h3>\n<div class=\"example-button-row\">\n  <button mat-fab extended color=\"primary\">\n    <mat-icon>favorite</mat-icon>\n    Primary\n  </button>\n  <button mat-fab extended color=\"accent\">\n    <mat-icon>favorite</mat-icon>\n    Accent\n  </button>\n  <button mat-fab extended color=\"warn\">\n    <mat-icon>favorite</mat-icon>\n    Warn\n  </button>\n  <button mat-fab extended disabled>\n    <mat-icon>favorite</mat-icon>\n    Disabled\n  </button>\n  <a mat-fab extended routerLink=\".\">\n    <mat-icon>favorite</mat-icon>\n    Link\n  </a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n\n.example-disabled {\n  display: inline-block;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatAnchor, selector: "a[mat-button], a[mat-raised-button], a[mat-flat-button], a[mat-stroked-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "component", type: i1.MatIconAnchor, selector: "a[mat-icon-button]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "component", type: i1.MatMiniFabAnchor, selector: "a[mat-mini-fab]", exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatMiniFabButton, selector: "button[mat-mini-fab]", exportAs: ["matButton"] }, { kind: "component", type: i1.MatFabAnchor, selector: "a[mat-fab]", inputs: ["extended"], exportAs: ["matButton", "matAnchor"] }, { kind: "component", type: i1.MatFabButton, selector: "button[mat-fab]", inputs: ["extended"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatTooltipModule }, { kind: "directive", type: i2$1.MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: ButtonTypesExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-types-example', standalone: true, imports: [MatButtonModule, MatTooltipModule, MatIconModule], template: "<h3>Basic Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-button>Basic</button>\n  <button mat-button color=\"primary\">Primary</button>\n  <button mat-button color=\"accent\">Accent</button>\n  <button mat-button color=\"warn\">Warn</button>\n  <button mat-button disabled>Disabled</button>\n  <a mat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Raised Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-raised-button>Basic</button>\n  <button mat-raised-button color=\"primary\">Primary</button>\n  <button mat-raised-button color=\"accent\">Accent</button>\n  <button mat-raised-button color=\"warn\">Warn</button>\n  <button mat-raised-button disabled>Disabled</button>\n  <a mat-raised-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Stroked Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-stroked-button>Basic</button>\n  <button mat-stroked-button color=\"primary\">Primary</button>\n  <button mat-stroked-button color=\"accent\">Accent</button>\n  <button mat-stroked-button color=\"warn\">Warn</button>\n  <button mat-stroked-button disabled>Disabled</button>\n  <a mat-stroked-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Flat Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-flat-button>Basic</button>\n  <button mat-flat-button color=\"primary\">Primary</button>\n  <button mat-flat-button color=\"accent\">Accent</button>\n  <button mat-flat-button color=\"warn\">Warn</button>\n  <button mat-flat-button disabled>Disabled</button>\n  <a mat-flat-button routerLink=\".\">Link</a>\n</div>\n\n<h3>Icon Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-icon-button matTooltip=\"Basic\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-icon-button matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-icon-button disabled aria-label=\"Example icon-button with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-icon-button matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example icon-button with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-fab disabled aria-label=\"Example fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Mini Fab Buttons</h3>\n<div class=\"example-button-row\">\n  <button mat-mini-fab matTooltip=\"Primary\" color=\"primary\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Accent\" color=\"accent\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <button mat-mini-fab matTooltip=\"Warn\" color=\"warn\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n  <div matTooltip=\"Disabled\" class=\"example-disabled\">\n    <button mat-mini-fab disabled aria-label=\"Example mini fab with a heart icon\">\n      <mat-icon>favorite</mat-icon>\n    </button>\n  </div>\n  <a mat-mini-fab matTooltip=\"Link\" routerLink=\".\" aria-label=\"Example mini fab with a heart icon\">\n    <mat-icon>favorite</mat-icon>\n  </a>\n</div>\n\n<h3>Extended Fab</h3>\n<div class=\"example-button-row\">\n  <button mat-fab extended color=\"primary\">\n    <mat-icon>favorite</mat-icon>\n    Primary\n  </button>\n  <button mat-fab extended color=\"accent\">\n    <mat-icon>favorite</mat-icon>\n    Accent\n  </button>\n  <button mat-fab extended color=\"warn\">\n    <mat-icon>favorite</mat-icon>\n    Warn\n  </button>\n  <button mat-fab extended disabled>\n    <mat-icon>favorite</mat-icon>\n    Disabled\n  </button>\n  <a mat-fab extended routerLink=\".\">\n    <mat-icon>favorite</mat-icon>\n    Link\n  </a>\n</div>\n", styles: [".example-button-row button,\n.example-button-row a {\n  margin-right: 8px;\n}\n\n.example-disabled {\n  display: inline-block;\n}\n"] }]
        }] });

/**
 * @title Interactive disabled buttons
 */
class ButtonDisabledInteractiveExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: ButtonDisabledInteractiveExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: ButtonDisabledInteractiveExample, isStandalone: true, selector: "button-disabled-interactive-example", ngImport: i0, template: "<button\n  mat-raised-button\n  disabled\n  disabledInteractive\n  matTooltip=\"This is a tooltip!\">Disabled button allowing interactivity</button>\n\n<button\n  mat-raised-button\n  disabled\n  matTooltip=\"This is a tooltip!\">Default disabled button</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"], dependencies: [{ kind: "component", type: MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }, { kind: "directive", type: MatTooltip, selector: "[matTooltip]", inputs: ["matTooltipPosition", "matTooltipPositionAtOrigin", "matTooltipDisabled", "matTooltipShowDelay", "matTooltipHideDelay", "matTooltipTouchGestures", "matTooltip", "matTooltipClass"], exportAs: ["matTooltip"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: ButtonDisabledInteractiveExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-disabled-interactive-example', standalone: true, imports: [MatButton, MatTooltip], template: "<button\n  mat-raised-button\n  disabled\n  disabledInteractive\n  matTooltip=\"This is a tooltip!\">Disabled button allowing interactivity</button>\n\n<button\n  mat-raised-button\n  disabled\n  matTooltip=\"This is a tooltip!\">Default disabled button</button>\n", styles: ["button {\n  margin-right: 8px;\n}\n"] }]
        }] });

/**
 * @title Testing with MatButtonHarness
 */
class ButtonHarnessExample {
    constructor() {
        this.clicked = false;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: ButtonHarnessExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.2.0-rc.1", type: ButtonHarnessExample, isStandalone: true, selector: "button-harness-example", ngImport: i0, template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\n  Basic button\n</button>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.2.0-rc.1", ngImport: i0, type: ButtonHarnessExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-harness-example', standalone: true, imports: [MatButtonModule], template: "<button id=\"basic\" type=\"button\" mat-button (click)=\"clicked = true\">\n  Basic button\n</button>\n" }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { ButtonDisabledInteractiveExample, ButtonHarnessExample, ButtonOverviewExample, ButtonTypesExample };
//# sourceMappingURL=button.mjs.map
