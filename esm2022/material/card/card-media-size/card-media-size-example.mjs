import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
/**
 * @title Card with media size
 */
export class CardMediaSizeExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CardMediaSizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0-rc.2", type: CardMediaSizeExample, isStandalone: true, selector: "card-media-size-example", ngImport: i0, template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Small</mat-card-subtitle>\n      <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Medium</mat-card-subtitle>\n      <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"  alt=\"Image of a Shiba Inu\">\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Large</mat-card-subtitle>\n      <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Extra large</mat-card-subtitle>\n      <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardLgImage, selector: "[mat-card-lg-image], [matCardImageLarge]" }, { kind: "directive", type: i1.MatCardMdImage, selector: "[mat-card-md-image], [matCardImageMedium]" }, { kind: "directive", type: i1.MatCardSmImage, selector: "[mat-card-sm-image], [matCardImageSmall]" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "component", type: i1.MatCardTitleGroup, selector: "mat-card-title-group" }, { kind: "directive", type: i1.MatCardXlImage, selector: "[mat-card-xl-image], [matCardImageXLarge]" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0-rc.2", ngImport: i0, type: CardMediaSizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-media-size-example', standalone: true, imports: [MatCardModule], template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Small</mat-card-subtitle>\n      <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Medium</mat-card-subtitle>\n      <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"  alt=\"Image of a Shiba Inu\">\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Large</mat-card-subtitle>\n      <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Extra large</mat-card-subtitle>\n      <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1tZWRpYS1zaXplLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtbWVkaWEtc2l6ZS9jYXJkLW1lZGlhLXNpemUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1tZWRpYS1zaXplL2NhcmQtbWVkaWEtc2l6ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDs7R0FFRztBQVFILE1BQU0sT0FBTyxvQkFBb0I7SUFQakM7UUFRRSxhQUFRLEdBQUc7OytCQUVrQixDQUFDO0tBQy9CO21IQUpZLG9CQUFvQjt1R0FBcEIsb0JBQW9CLG1GQ2JqQyw0ckRBb0RBLHlIRHpDWSxhQUFhOztnR0FFWixvQkFBb0I7a0JBUGhDLFNBQVM7K0JBQ0UseUJBQXlCLGNBR3ZCLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5cbi8qKlxuICogQHRpdGxlIENhcmQgd2l0aCBtZWRpYSBzaXplXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhcmQtbWVkaWEtc2l6ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLW1lZGlhLXNpemUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NhcmQtbWVkaWEtc2l6ZS1leGFtcGxlLmNzcyddLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Q2FyZE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRNZWRpYVNpemVFeGFtcGxlIHtcbiAgbG9uZ1RleHQgPSBgVGhlIFNoaWJhIEludSBpcyB0aGUgc21hbGxlc3Qgb2YgdGhlIHNpeCBvcmlnaW5hbCBhbmQgZGlzdGluY3Qgc3BpdHogYnJlZWRzIG9mIGRvZ1xuICBmcm9tIEphcGFuLiBBIHNtYWxsLCBhZ2lsZSBkb2cgdGhhdCBjb3BlcyB2ZXJ5IHdlbGwgd2l0aCBtb3VudGFpbm91cyB0ZXJyYWluLCB0aGUgU2hpYmEgSW51IHdhc1xuICBvcmlnaW5hbGx5IGJyZWQgZm9yIGh1bnRpbmcuYDtcbn1cbiIsIjwhLS0gQ2FyZHMgd2l0aCBtZWRpYSBhcmVhIC0tPlxuPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPG1hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICAgICAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgICA8bWF0LWNhcmQtc3VidGl0bGU+U21hbGw8L21hdC1jYXJkLXN1YnRpdGxlPlxuICAgICAgPGltZyBtYXQtY2FyZC1zbS1pbWFnZSBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIgPlxuICAgIDwvbWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICB7e2xvbmdUZXh0fX1cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cblxuPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPG1hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICAgICAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgICA8bWF0LWNhcmQtc3VidGl0bGU+TWVkaXVtPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgICAgIDxpbWcgbWF0LWNhcmQtbWQtaW1hZ2Ugc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmEyLmpwZ1wiICBhbHQ9XCJJbWFnZSBvZiBhIFNoaWJhIEludVwiPlxuICAgIDwvbWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICB7e2xvbmdUZXh0fX1cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cblxuPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPG1hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICAgICAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgICA8bWF0LWNhcmQtc3VidGl0bGU+TGFyZ2U8L21hdC1jYXJkLXN1YnRpdGxlPlxuICAgICAgPGltZyBtYXQtY2FyZC1sZy1pbWFnZSBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIgPlxuICAgIDwvbWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICB7e2xvbmdUZXh0fX1cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cblxuPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPG1hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICAgICAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgICA8bWF0LWNhcmQtc3VidGl0bGU+RXh0cmEgbGFyZ2U8L21hdC1jYXJkLXN1YnRpdGxlPlxuICAgICAgPGltZyBtYXQtY2FyZC14bC1pbWFnZSBzcmM9XCJodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTIuanBnXCIgPlxuICAgIDwvbWF0LWNhcmQtdGl0bGUtZ3JvdXA+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICB7e2xvbmdUZXh0fX1cbiAgPC9tYXQtY2FyZC1jb250ZW50PlxuPC9tYXQtY2FyZD5cbiJdfQ==