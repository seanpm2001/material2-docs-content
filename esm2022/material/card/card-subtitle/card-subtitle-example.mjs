import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/card";
import * as i2 from "@angular/material/button";
/**
 * @title Card with sub-title
 */
export class CardSubtitleExample {
    constructor() {
        this.longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.1.0-next.2", ngImport: i0, type: CardSubtitleExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.1.0-next.2", type: CardSubtitleExample, isStandalone: true, selector: "card-subtitle-example", ngImport: i0, template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatCardModule }, { kind: "component", type: i1.MatCard, selector: "mat-card", inputs: ["appearance"], exportAs: ["matCard"] }, { kind: "directive", type: i1.MatCardActions, selector: "mat-card-actions", inputs: ["align"], exportAs: ["matCardActions"] }, { kind: "directive", type: i1.MatCardContent, selector: "mat-card-content" }, { kind: "component", type: i1.MatCardHeader, selector: "mat-card-header" }, { kind: "directive", type: i1.MatCardSubtitle, selector: "mat-card-subtitle, [mat-card-subtitle], [matCardSubtitle]" }, { kind: "directive", type: i1.MatCardTitle, selector: "mat-card-title, [mat-card-title], [matCardTitle]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", exportAs: ["matButton"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.1.0-next.2", ngImport: i0, type: CardSubtitleExample, decorators: [{
            type: Component,
            args: [{ selector: 'card-subtitle-example', standalone: true, imports: [MatCardModule, MatButtonModule], template: "<mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title>Shiba Inu</mat-card-title>\n    <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p>This card indeterminates progress bar.</p>\n    <p>{{longText}}</p>\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button>LIKE</button>\n    <button mat-button>SHARE</button>\n  </mat-card-actions>\n</mat-card>\n", styles: [".example-card {\n  max-width: 400px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC1zdWJ0aXRsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvY2FyZC9jYXJkLXN1YnRpdGxlL2NhcmQtc3VidGl0bGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NhcmQvY2FyZC1zdWJ0aXRsZS9jYXJkLXN1YnRpdGxlLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFckQ7O0dBRUc7QUFRSCxNQUFNLE9BQU8sbUJBQW1CO0lBUGhDO1FBUUUsYUFBUSxHQUFHOzsrQkFFa0IsQ0FBQztLQUMvQjtxSEFKWSxtQkFBbUI7eUdBQW5CLG1CQUFtQixpRkNkaEMsc2JBY0Esa0dERlksYUFBYSx5b0JBQUUsZUFBZTs7a0dBRTdCLG1CQUFtQjtrQkFQL0IsU0FBUzsrQkFDRSx1QkFBdUIsY0FHckIsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGVBQWUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRDYXJkTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jYXJkJztcblxuLyoqXG4gKiBAdGl0bGUgQ2FyZCB3aXRoIHN1Yi10aXRsZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjYXJkLXN1YnRpdGxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NhcmQtc3VidGl0bGUtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2NhcmQtc3VidGl0bGUtZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdENhcmRNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENhcmRTdWJ0aXRsZUV4YW1wbGUge1xuICBsb25nVGV4dCA9IGBUaGUgU2hpYmEgSW51IGlzIHRoZSBzbWFsbGVzdCBvZiB0aGUgc2l4IG9yaWdpbmFsIGFuZCBkaXN0aW5jdCBzcGl0eiBicmVlZHMgb2YgZG9nXG4gIGZyb20gSmFwYW4uIEEgc21hbGwsIGFnaWxlIGRvZyB0aGF0IGNvcGVzIHZlcnkgd2VsbCB3aXRoIG1vdW50YWlub3VzIHRlcnJhaW4sIHRoZSBTaGliYSBJbnUgd2FzXG4gIG9yaWdpbmFsbHkgYnJlZCBmb3IgaHVudGluZy5gO1xufVxuIiwiPG1hdC1jYXJkIGNsYXNzPVwiZXhhbXBsZS1jYXJkXCI+XG4gIDxtYXQtY2FyZC1oZWFkZXI+XG4gICAgPG1hdC1jYXJkLXRpdGxlPlNoaWJhIEludTwvbWF0LWNhcmQtdGl0bGU+XG4gICAgPG1hdC1jYXJkLXN1YnRpdGxlPkRvZyBCcmVlZDwvbWF0LWNhcmQtc3VidGl0bGU+XG4gIDwvbWF0LWNhcmQtaGVhZGVyPlxuICA8bWF0LWNhcmQtY29udGVudD5cbiAgICA8cD5UaGlzIGNhcmQgaW5kZXRlcm1pbmF0ZXMgcHJvZ3Jlc3MgYmFyLjwvcD5cbiAgICA8cD57e2xvbmdUZXh0fX08L3A+XG4gIDwvbWF0LWNhcmQtY29udGVudD5cbiAgPG1hdC1jYXJkLWFjdGlvbnM+XG4gICAgPGJ1dHRvbiBtYXQtYnV0dG9uPkxJS0U8L2J1dHRvbj5cbiAgICA8YnV0dG9uIG1hdC1idXR0b24+U0hBUkU8L2J1dHRvbj5cbiAgPC9tYXQtY2FyZC1hY3Rpb25zPlxuPC9tYXQtY2FyZD5cbiJdfQ==