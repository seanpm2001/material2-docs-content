import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button-toggle";
import * as i2 from "@angular/material/checkbox";
/**
 * @title Button toggle selection mode
 */
export class ButtonToggleModeExample {
    constructor() {
        this.hideSingleSelectionIndicator = signal(false);
        this.hideMultipleSelectionIndicator = signal(false);
    }
    toggleSingleSelectionIndicator() {
        this.hideSingleSelectionIndicator.update(value => !value);
    }
    toggleMultipleSelectionIndicator() {
        this.hideMultipleSelectionIndicator.update(value => !value);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: ButtonToggleModeExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.0.0", type: ButtonToggleModeExample, isStandalone: true, selector: "button-toggle-mode-example", ngImport: i0, template: "<section>\n  <mat-checkbox\n    [checked]=\"hideSingleSelectionIndicator()\"\n    (change)=\"toggleSingleSelectionIndicator()\"\n  >\n    Hide Single Selection Indicator\n  </mat-checkbox>\n  <mat-checkbox\n    [checked]=\"hideMultipleSelectionIndicator()\"\n    (change)=\"toggleMultipleSelectionIndicator()\"\n  >\n    Hide Multiple Selection Indicator\n  </mat-checkbox>\n</section>\n<section>\n  <h3>Single selection</h3>\n  <mat-button-toggle-group\n    name=\"favoriteColor\"\n    aria-label=\"Favorite Color\"\n    [hideSingleSelectionIndicator]=\"hideSingleSelectionIndicator()\"\n  >\n    <mat-button-toggle value=\"red\">Red</mat-button-toggle>\n    <mat-button-toggle value=\"green\">Green</mat-button-toggle>\n    <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\n  </mat-button-toggle-group>\n</section>\n<section>\n  <h3>Multiple selection</h3>\n  <mat-button-toggle-group\n    name=\"ingredients\"\n    aria-label=\"Ingredients\"\n    [hideMultipleSelectionIndicator]=\"hideMultipleSelectionIndicator()\"\n    multiple\n  >\n    <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\n    <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\n    <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\n  </mat-button-toggle-group>\n</section>\n", dependencies: [{ kind: "ngmodule", type: MatButtonToggleModule }, { kind: "directive", type: i1.MatButtonToggleGroup, selector: "mat-button-toggle-group", inputs: ["appearance", "name", "vertical", "value", "multiple", "disabled", "hideSingleSelectionIndicator", "hideMultipleSelectionIndicator"], outputs: ["valueChange", "change"], exportAs: ["matButtonToggleGroup"] }, { kind: "component", type: i1.MatButtonToggle, selector: "mat-button-toggle", inputs: ["aria-label", "aria-labelledby", "id", "name", "value", "tabIndex", "disableRipple", "appearance", "checked", "disabled"], outputs: ["change"], exportAs: ["matButtonToggle"] }, { kind: "ngmodule", type: MatCheckboxModule }, { kind: "component", type: i2.MatCheckbox, selector: "mat-checkbox", inputs: ["aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "disableRipple", "tabIndex", "color", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: ButtonToggleModeExample, decorators: [{
            type: Component,
            args: [{ selector: 'button-toggle-mode-example', standalone: true, imports: [MatButtonToggleModule, MatCheckboxModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<section>\n  <mat-checkbox\n    [checked]=\"hideSingleSelectionIndicator()\"\n    (change)=\"toggleSingleSelectionIndicator()\"\n  >\n    Hide Single Selection Indicator\n  </mat-checkbox>\n  <mat-checkbox\n    [checked]=\"hideMultipleSelectionIndicator()\"\n    (change)=\"toggleMultipleSelectionIndicator()\"\n  >\n    Hide Multiple Selection Indicator\n  </mat-checkbox>\n</section>\n<section>\n  <h3>Single selection</h3>\n  <mat-button-toggle-group\n    name=\"favoriteColor\"\n    aria-label=\"Favorite Color\"\n    [hideSingleSelectionIndicator]=\"hideSingleSelectionIndicator()\"\n  >\n    <mat-button-toggle value=\"red\">Red</mat-button-toggle>\n    <mat-button-toggle value=\"green\">Green</mat-button-toggle>\n    <mat-button-toggle value=\"blue\">Blue</mat-button-toggle>\n  </mat-button-toggle-group>\n</section>\n<section>\n  <h3>Multiple selection</h3>\n  <mat-button-toggle-group\n    name=\"ingredients\"\n    aria-label=\"Ingredients\"\n    [hideMultipleSelectionIndicator]=\"hideMultipleSelectionIndicator()\"\n    multiple\n  >\n    <mat-button-toggle value=\"flour\">Flour</mat-button-toggle>\n    <mat-button-toggle value=\"eggs\">Eggs</mat-button-toggle>\n    <mat-button-toggle value=\"sugar\">Sugar</mat-button-toggle>\n  </mat-button-toggle-group>\n</section>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXRvZ2dsZS1tb2RlLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9idXR0b24tdG9nZ2xlL2J1dHRvbi10b2dnbGUtbW9kZS9idXR0b24tdG9nZ2xlLW1vZGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2J1dHRvbi10b2dnbGUvYnV0dG9uLXRvZ2dsZS1tb2RlL2J1dHRvbi10b2dnbGUtbW9kZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0saUNBQWlDLENBQUM7QUFDdEUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7Ozs7QUFFN0Q7O0dBRUc7QUFRSCxNQUFNLE9BQU8sdUJBQXVCO0lBUHBDO1FBUUUsaUNBQTRCLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLG1DQUE4QixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztLQVNoRDtJQVBDLDhCQUE4QjtRQUM1QixJQUFJLENBQUMsNEJBQTRCLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsZ0NBQWdDO1FBQzlCLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlELENBQUM7OEdBVlUsdUJBQXVCO2tHQUF2Qix1QkFBdUIsc0ZDZHBDLDB3Q0F1Q0EsMkNENUJZLHFCQUFxQix3bEJBQUUsaUJBQWlCOzsyRkFHdkMsdUJBQXVCO2tCQVBuQyxTQUFTOytCQUNFLDRCQUE0QixjQUUxQixJQUFJLFdBQ1AsQ0FBQyxxQkFBcUIsRUFBRSxpQkFBaUIsQ0FBQyxtQkFDbEMsdUJBQXVCLENBQUMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgc2lnbmFsfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uVG9nZ2xlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24tdG9nZ2xlJztcbmltcG9ydCB7TWF0Q2hlY2tib3hNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcblxuLyoqXG4gKiBAdGl0bGUgQnV0dG9uIHRvZ2dsZSBzZWxlY3Rpb24gbW9kZVxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24tdG9nZ2xlLW1vZGUtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXRvZ2dsZS1tb2RlLWV4YW1wbGUuaHRtbCcsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtNYXRCdXR0b25Ub2dnbGVNb2R1bGUsIE1hdENoZWNrYm94TW9kdWxlXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEJ1dHRvblRvZ2dsZU1vZGVFeGFtcGxlIHtcbiAgaGlkZVNpbmdsZVNlbGVjdGlvbkluZGljYXRvciA9IHNpZ25hbChmYWxzZSk7XG4gIGhpZGVNdWx0aXBsZVNlbGVjdGlvbkluZGljYXRvciA9IHNpZ25hbChmYWxzZSk7XG5cbiAgdG9nZ2xlU2luZ2xlU2VsZWN0aW9uSW5kaWNhdG9yKCkge1xuICAgIHRoaXMuaGlkZVNpbmdsZVNlbGVjdGlvbkluZGljYXRvci51cGRhdGUodmFsdWUgPT4gIXZhbHVlKTtcbiAgfVxuXG4gIHRvZ2dsZU11bHRpcGxlU2VsZWN0aW9uSW5kaWNhdG9yKCkge1xuICAgIHRoaXMuaGlkZU11bHRpcGxlU2VsZWN0aW9uSW5kaWNhdG9yLnVwZGF0ZSh2YWx1ZSA9PiAhdmFsdWUpO1xuICB9XG59XG4iLCI8c2VjdGlvbj5cbiAgPG1hdC1jaGVja2JveFxuICAgIFtjaGVja2VkXT1cImhpZGVTaW5nbGVTZWxlY3Rpb25JbmRpY2F0b3IoKVwiXG4gICAgKGNoYW5nZSk9XCJ0b2dnbGVTaW5nbGVTZWxlY3Rpb25JbmRpY2F0b3IoKVwiXG4gID5cbiAgICBIaWRlIFNpbmdsZSBTZWxlY3Rpb24gSW5kaWNhdG9yXG4gIDwvbWF0LWNoZWNrYm94PlxuICA8bWF0LWNoZWNrYm94XG4gICAgW2NoZWNrZWRdPVwiaGlkZU11bHRpcGxlU2VsZWN0aW9uSW5kaWNhdG9yKClcIlxuICAgIChjaGFuZ2UpPVwidG9nZ2xlTXVsdGlwbGVTZWxlY3Rpb25JbmRpY2F0b3IoKVwiXG4gID5cbiAgICBIaWRlIE11bHRpcGxlIFNlbGVjdGlvbiBJbmRpY2F0b3JcbiAgPC9tYXQtY2hlY2tib3g+XG48L3NlY3Rpb24+XG48c2VjdGlvbj5cbiAgPGgzPlNpbmdsZSBzZWxlY3Rpb248L2gzPlxuICA8bWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXBcbiAgICBuYW1lPVwiZmF2b3JpdGVDb2xvclwiXG4gICAgYXJpYS1sYWJlbD1cIkZhdm9yaXRlIENvbG9yXCJcbiAgICBbaGlkZVNpbmdsZVNlbGVjdGlvbkluZGljYXRvcl09XCJoaWRlU2luZ2xlU2VsZWN0aW9uSW5kaWNhdG9yKClcIlxuICA+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwicmVkXCI+UmVkPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJncmVlblwiPkdyZWVuPC9tYXQtYnV0dG9uLXRvZ2dsZT5cbiAgICA8bWF0LWJ1dHRvbi10b2dnbGUgdmFsdWU9XCJibHVlXCI+Qmx1ZTwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gIDwvbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXA+XG48L3NlY3Rpb24+XG48c2VjdGlvbj5cbiAgPGgzPk11bHRpcGxlIHNlbGVjdGlvbjwvaDM+XG4gIDxtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cFxuICAgIG5hbWU9XCJpbmdyZWRpZW50c1wiXG4gICAgYXJpYS1sYWJlbD1cIkluZ3JlZGllbnRzXCJcbiAgICBbaGlkZU11bHRpcGxlU2VsZWN0aW9uSW5kaWNhdG9yXT1cImhpZGVNdWx0aXBsZVNlbGVjdGlvbkluZGljYXRvcigpXCJcbiAgICBtdWx0aXBsZVxuICA+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiZmxvdXJcIj5GbG91cjwvbWF0LWJ1dHRvbi10b2dnbGU+XG4gICAgPG1hdC1idXR0b24tdG9nZ2xlIHZhbHVlPVwiZWdnc1wiPkVnZ3M8L21hdC1idXR0b24tdG9nZ2xlPlxuICAgIDxtYXQtYnV0dG9uLXRvZ2dsZSB2YWx1ZT1cInN1Z2FyXCI+U3VnYXI8L21hdC1idXR0b24tdG9nZ2xlPlxuICA8L21hdC1idXR0b24tdG9nZ2xlLWdyb3VwPlxuPC9zZWN0aW9uPlxuIl19