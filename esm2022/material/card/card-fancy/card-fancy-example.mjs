import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/button";
/**
 * @title Card with multiple sections
 */
export class CardFancyExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CardFancyExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: CardFancyExample, isStandalone: true, selector: "card-fancy-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i1.MatCardAvatar, selector: "[mat-card-avatar], [matCardAvatar]" }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardImage, selector: "[mat-card-image], [matCardImage]" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CardFancyExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-fancy-example', standalone: true, imports: [MatCardModule, MatButtonModule], template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">\n  <mat-card-content>\n    <p>\n      The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n      bred for hunting.\n    </p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n\n.example-header-image {\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\n  background-size: cover;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1mYW5jeS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2FyZC9jYXJkLWZhbmN5L2NhcmQtZmFuY3ktZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1mYW5jeS9jYXJkLWZhbmN5LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFckQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sZ0JBQWdCOzhHQUFoQixnQkFBZ0I7a0dBQWhCLGdCQUFnQiw4RUNkN0IsMHhCQW1CQSxtUERQWSxhQUFhLG8wQkFBRSxlQUFlOzsyRkFFN0IsZ0JBQWdCO2tCQVA1QixTQUFTOytCQUNFLG9CQUFvQixjQUdsQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdENhcmRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NhcmQnO1xuXG4vKipcbiAqIEB0aXRsZSBDYXJkIHdpdGggbXVsdGlwbGUgc2VjdGlvbnNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FyZC1mYW5jeS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLWZhbmN5LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnY2FyZC1mYW5jeS1leGFtcGxlLmNzcycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRDYXJkTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkRmFuY3lFeGFtcGxlIHt9XG4iLCI8bWF0LWNhcmQgY2xhc3M9XCJleGFtcGxlLWNhcmRcIj5cbiAgPG1hdC1jYXJkLWhlYWRlcj5cbiAgICA8ZGl2IG1hdC1jYXJkLWF2YXRhciBjbGFzcz1cImV4YW1wbGUtaGVhZGVyLWltYWdlXCI+PC9kaXY+XG4gICAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlPkRvZyBCcmVlZDwvbWF0LWNhcmQtc3VidGl0bGU+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMi5qcGdcIiBhbHQ9XCJQaG90byBvZiBhIFNoaWJhIEludVwiPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8cD5cbiAgICAgIFRoZSBTaGliYSBJbnUgaXMgdGhlIHNtYWxsZXN0IG9mIHRoZSBzaXggb3JpZ2luYWwgYW5kIGRpc3RpbmN0IHNwaXR6IGJyZWVkcyBvZiBkb2cgZnJvbSBKYXBhbi5cbiAgICAgIEEgc21hbGwsIGFnaWxlIGRvZyB0aGF0IGNvcGVzIHZlcnkgd2VsbCB3aXRoIG1vdW50YWlub3VzIHRlcnJhaW4sIHRoZSBTaGliYSBJbnUgd2FzIG9yaWdpbmFsbHlcbiAgICAgIGJyZWQgZm9yIGh1bnRpbmcuXG4gICAgPC9wPlxuICA8L21hdC1jYXJkLWNvbnRlbnQ+XG4gIDxtYXQtY2FyZC1hY3Rpb25zPlxuICAgIDxidXR0b24gbWF0LWJ1dHRvbj5MSUtFPC9idXR0b24+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPlNIQVJFPC9idXR0b24+XG4gIDwvbWF0LWNhcmQtYWN0aW9ucz5cbjwvbWF0LWNhcmQ+XG4iXX0=