import { ChangeDetectionStrategy, Component } from '@angular/core';
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
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CardMediaSizeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: CardMediaSizeExample, isStandalone: true, selector: "card-media-size-example", ngImport: i0, template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\" appearance=\"outlined\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Small</mat-card-subtitle>\n      <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\" appearance=\"outlined\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Medium</mat-card-subtitle>\n      <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"  alt=\"Image of a Shiba Inu\">\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\" appearance=\"outlined\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Large</mat-card-subtitle>\n      <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\" appearance=\"outlined\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Extra large</mat-card-subtitle>\n      <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardLgImage, selector: "[mat-card-lg-image], [matCardImageLarge]" }, { kind: "directive", type: i1.MatCardMdImage, selector: "[mat-card-md-image], [matCardImageMedium]" }, { kind: "directive", type: i1.MatCardSmImage, selector: "[mat-card-sm-image], [matCardImageSmall]" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "component", type: i1.MatCardTitleGroup, selector: "mat-card-title-group" }, { kind: "directive", type: i1.MatCardXlImage, selector: "[mat-card-xl-image], [matCardImageXLarge]" }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CardMediaSizeExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-media-size-example', standalone: true, imports: [MatCardModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- Cards with media area -->\n<mat-card class=\"example-card\" appearance=\"outlined\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Small</mat-card-subtitle>\n      <img mat-card-sm-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\" appearance=\"outlined\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Medium</mat-card-subtitle>\n      <img mat-card-md-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\"  alt=\"Image of a Shiba Inu\">\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\" appearance=\"outlined\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Large</mat-card-subtitle>\n      <img mat-card-lg-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n\n<mat-card class=\"example-card\" appearance=\"outlined\">\n  <mat-card-header>\n    <mat-card-title-group>\n      <mat-card-title>Shiba Inu</mat-card-title>\n      <mat-card-subtitle>Extra large</mat-card-subtitle>\n      <img mat-card-xl-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" >\n    </mat-card-title-group>\n  </mat-card-header>\n  <mat-card-content>\n    {{longText}}\n  </mat-card-content>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n  margin-bottom: 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1tZWRpYS1zaXplLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jYXJkL2NhcmQtbWVkaWEtc2l6ZS9jYXJkLW1lZGlhLXNpemUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1tZWRpYS1zaXplL2NhcmQtbWVkaWEtc2l6ZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7OztBQUVyRDs7R0FFRztBQVNILE1BQU0sT0FBTyxvQkFBb0I7SUFSakM7UUFTRSxhQUFRLEdBQUc7OytCQUVrQixDQUFDO0tBQy9COzhHQUpZLG9CQUFvQjtrR0FBcEIsb0JBQW9CLG1GQ2RqQyw0eERBb0RBLHlIRHpDWSxhQUFhOzsyRkFHWixvQkFBb0I7a0JBUmhDLFNBQVM7K0JBQ0UseUJBQXlCLGNBR3ZCLElBQUksV0FDUCxDQUFDLGFBQWEsQ0FBQyxtQkFDUCx1QkFBdUIsQ0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0Q2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2FyZCc7XG5cbi8qKlxuICogQHRpdGxlIENhcmQgd2l0aCBtZWRpYSBzaXplXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NhcmQtbWVkaWEtc2l6ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjYXJkLW1lZGlhLXNpemUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdjYXJkLW1lZGlhLXNpemUtZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0Q2FyZE1vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJkTWVkaWFTaXplRXhhbXBsZSB7XG4gIGxvbmdUZXh0ID0gYFRoZSBTaGliYSBJbnUgaXMgdGhlIHNtYWxsZXN0IG9mIHRoZSBzaXggb3JpZ2luYWwgYW5kIGRpc3RpbmN0IHNwaXR6IGJyZWVkcyBvZiBkb2dcbiAgZnJvbSBKYXBhbi4gQSBzbWFsbCwgYWdpbGUgZG9nIHRoYXQgY29wZXMgdmVyeSB3ZWxsIHdpdGggbW91bnRhaW5vdXMgdGVycmFpbiwgdGhlIFNoaWJhIEludSB3YXNcbiAgb3JpZ2luYWxseSBicmVkIGZvciBodW50aW5nLmA7XG59XG4iLCI8IS0tIENhcmRzIHdpdGggbWVkaWEgYXJlYSAtLT5cbjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lZFwiPlxuICA8bWF0LWNhcmQtaGVhZGVyPlxuICAgIDxtYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgICAgPG1hdC1jYXJkLXN1YnRpdGxlPlNtYWxsPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgICAgIDxpbWcgbWF0LWNhcmQtc20taW1hZ2Ugc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmEyLmpwZ1wiID5cbiAgICA8L21hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAge3tsb25nVGV4dH19XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lZFwiPlxuICA8bWF0LWNhcmQtaGVhZGVyPlxuICAgIDxtYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgICAgPG1hdC1jYXJkLXN1YnRpdGxlPk1lZGl1bTwvbWF0LWNhcmQtc3VidGl0bGU+XG4gICAgICA8aW1nIG1hdC1jYXJkLW1kLWltYWdlIHNyYz1cImh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMi5qcGdcIiAgYWx0PVwiSW1hZ2Ugb2YgYSBTaGliYSBJbnVcIj5cbiAgICA8L21hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAge3tsb25nVGV4dH19XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lZFwiPlxuICA8bWF0LWNhcmQtaGVhZGVyPlxuICAgIDxtYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgICAgPG1hdC1jYXJkLXN1YnRpdGxlPkxhcmdlPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgICAgIDxpbWcgbWF0LWNhcmQtbGctaW1hZ2Ugc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmEyLmpwZ1wiID5cbiAgICA8L21hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAge3tsb25nVGV4dH19XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG5cbjxtYXQtY2FyZCBjbGFzcz1cImV4YW1wbGUtY2FyZFwiIGFwcGVhcmFuY2U9XCJvdXRsaW5lZFwiPlxuICA8bWF0LWNhcmQtaGVhZGVyPlxuICAgIDxtYXQtY2FyZC10aXRsZS1ncm91cD5cbiAgICAgIDxtYXQtY2FyZC10aXRsZT5TaGliYSBJbnU8L21hdC1jYXJkLXRpdGxlPlxuICAgICAgPG1hdC1jYXJkLXN1YnRpdGxlPkV4dHJhIGxhcmdlPC9tYXQtY2FyZC1zdWJ0aXRsZT5cbiAgICAgIDxpbWcgbWF0LWNhcmQteGwtaW1hZ2Ugc3JjPVwiaHR0cHM6Ly9tYXRlcmlhbC5hbmd1bGFyLmlvL2Fzc2V0cy9pbWcvZXhhbXBsZXMvc2hpYmEyLmpwZ1wiID5cbiAgICA8L21hdC1jYXJkLXRpdGxlLWdyb3VwPlxuICA8L21hdC1jYXJkLWhlYWRlcj5cbiAgPG1hdC1jYXJkLWNvbnRlbnQ+XG4gICAge3tsb25nVGV4dH19XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbjwvbWF0LWNhcmQ+XG4iXX0=