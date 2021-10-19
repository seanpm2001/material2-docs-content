import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/checkbox";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
/**
 * @title Basic checkboxes
 */
export class CheckboxOverviewExample {
    constructor() {
        this.task = {
            name: 'Indeterminate',
            completed: false,
            color: 'primary',
            subtasks: [
                { name: 'Primary', completed: false, color: 'primary' },
                { name: 'Accent', completed: false, color: 'accent' },
                { name: 'Warn', completed: false, color: 'warn' },
            ],
        };
        this.allComplete = false;
    }
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => (t.completed = completed));
    }
}
CheckboxOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CheckboxOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component });
CheckboxOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0-next.15", type: CheckboxOverviewExample, selector: "checkbox-overview-example", ngImport: i0, template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox class=\"example-margin\"\n                  [checked]=\"allComplete\"\n                  [color]=\"task.color\"\n                  [indeterminate]=\"someComplete()\"\n                  (change)=\"setAll($event.checked)\">\n      {{task.name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      <li *ngFor=\"let subtask of task.subtasks\">\n        <mat-checkbox [(ngModel)]=\"subtask.completed\"\n                      [color]=\"subtask.color\"\n                      (ngModelChange)=\"updateAllComplete()\">\n          {{subtask.name}}\n        </mat-checkbox>\n      </li>\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"], components: [{ type: i1.MatCheckbox, selector: "mat-checkbox", inputs: ["disableRipple", "color", "tabIndex", "aria-label", "aria-labelledby", "aria-describedby", "id", "required", "labelPosition", "name", "value", "checked", "disabled", "indeterminate"], outputs: ["change", "indeterminateChange"], exportAs: ["matCheckbox"] }], directives: [{ type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0-next.15", ngImport: i0, type: CheckboxOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'checkbox-overview-example', template: "<section class=\"example-section\">\n  <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\n  <mat-checkbox class=\"example-margin\" [disabled]=\"true\">Disabled</mat-checkbox>\n</section>\n\n<section class=\"example-section\">\n  <span class=\"example-list-section\">\n    <mat-checkbox class=\"example-margin\"\n                  [checked]=\"allComplete\"\n                  [color]=\"task.color\"\n                  [indeterminate]=\"someComplete()\"\n                  (change)=\"setAll($event.checked)\">\n      {{task.name}}\n    </mat-checkbox>\n  </span>\n  <span class=\"example-list-section\">\n    <ul>\n      <li *ngFor=\"let subtask of task.subtasks\">\n        <mat-checkbox [(ngModel)]=\"subtask.completed\"\n                      [color]=\"subtask.color\"\n                      (ngModelChange)=\"updateAllComplete()\">\n          {{subtask.name}}\n        </mat-checkbox>\n      </li>\n    </ul>\n  </span>\n</section>\n", styles: [".example-section {\n  margin: 12px 0;\n}\n\n.example-margin {\n  margin: 0 12px;\n}\n\nul {\n  list-style-type: none;\n  margin-top: 4px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3gtb3ZlcnZpZXctZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL2NoZWNrYm94L2NoZWNrYm94LW92ZXJ2aWV3L2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC9jaGVja2JveC9jaGVja2JveC1vdmVydmlldy9jaGVja2JveC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFVeEM7O0dBRUc7QUFNSCxNQUFNLE9BQU8sdUJBQXVCO0lBTHBDO1FBTUUsU0FBSSxHQUFTO1lBQ1gsSUFBSSxFQUFFLGVBQWU7WUFDckIsU0FBUyxFQUFFLEtBQUs7WUFDaEIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsUUFBUSxFQUFFO2dCQUNSLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7Z0JBQ3JELEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUM7Z0JBQ25ELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUM7YUFDaEQ7U0FDRixDQUFDO1FBRUYsZ0JBQVcsR0FBWSxLQUFLLENBQUM7S0FvQjlCO0lBbEJDLGlCQUFpQjtRQUNmLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5RixDQUFDO0lBRUQsWUFBWTtRQUNWLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUNyRixDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQWtCO1FBQ3ZCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFDO1FBQzdCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7OzRIQS9CVSx1QkFBdUI7Z0hBQXZCLHVCQUF1QixpRUNsQnBDLHU3QkEyQkE7bUdEVGEsdUJBQXVCO2tCQUxuQyxTQUFTOytCQUNFLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBUYXNrIHtcbiAgbmFtZTogc3RyaW5nO1xuICBjb21wbGV0ZWQ6IGJvb2xlYW47XG4gIGNvbG9yOiBUaGVtZVBhbGV0dGU7XG4gIHN1YnRhc2tzPzogVGFza1tdO1xufVxuXG4vKipcbiAqIEB0aXRsZSBCYXNpYyBjaGVja2JveGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2NoZWNrYm94LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjaGVja2JveC1vdmVydmlldy1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja2JveE92ZXJ2aWV3RXhhbXBsZSB7XG4gIHRhc2s6IFRhc2sgPSB7XG4gICAgbmFtZTogJ0luZGV0ZXJtaW5hdGUnLFxuICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcbiAgICBzdWJ0YXNrczogW1xuICAgICAge25hbWU6ICdQcmltYXJ5JywgY29tcGxldGVkOiBmYWxzZSwgY29sb3I6ICdwcmltYXJ5J30sXG4gICAgICB7bmFtZTogJ0FjY2VudCcsIGNvbXBsZXRlZDogZmFsc2UsIGNvbG9yOiAnYWNjZW50J30sXG4gICAgICB7bmFtZTogJ1dhcm4nLCBjb21wbGV0ZWQ6IGZhbHNlLCBjb2xvcjogJ3dhcm4nfSxcbiAgICBdLFxuICB9O1xuXG4gIGFsbENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgdXBkYXRlQWxsQ29tcGxldGUoKSB7XG4gICAgdGhpcy5hbGxDb21wbGV0ZSA9IHRoaXMudGFzay5zdWJ0YXNrcyAhPSBudWxsICYmIHRoaXMudGFzay5zdWJ0YXNrcy5ldmVyeSh0ID0+IHQuY29tcGxldGVkKTtcbiAgfVxuXG4gIHNvbWVDb21wbGV0ZSgpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy50YXNrLnN1YnRhc2tzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGFzay5zdWJ0YXNrcy5maWx0ZXIodCA9PiB0LmNvbXBsZXRlZCkubGVuZ3RoID4gMCAmJiAhdGhpcy5hbGxDb21wbGV0ZTtcbiAgfVxuXG4gIHNldEFsbChjb21wbGV0ZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmFsbENvbXBsZXRlID0gY29tcGxldGVkO1xuICAgIGlmICh0aGlzLnRhc2suc3VidGFza3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRhc2suc3VidGFza3MuZm9yRWFjaCh0ID0+ICh0LmNvbXBsZXRlZCA9IGNvbXBsZXRlZCkpO1xuICB9XG59XG4iLCI8c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIj5DaGVjayBtZSE8L21hdC1jaGVja2JveD5cbiAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCIgW2Rpc2FibGVkXT1cInRydWVcIj5EaXNhYmxlZDwvbWF0LWNoZWNrYm94PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cImV4YW1wbGUtc2VjdGlvblwiPlxuICA8c3BhbiBjbGFzcz1cImV4YW1wbGUtbGlzdC1zZWN0aW9uXCI+XG4gICAgPG1hdC1jaGVja2JveCBjbGFzcz1cImV4YW1wbGUtbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cImFsbENvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJ0YXNrLmNvbG9yXCJcbiAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNvbWVDb21wbGV0ZSgpXCJcbiAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwic2V0QWxsKCRldmVudC5jaGVja2VkKVwiPlxuICAgICAge3t0YXNrLm5hbWV9fVxuICAgIDwvbWF0LWNoZWNrYm94PlxuICA8L3NwYW4+XG4gIDxzcGFuIGNsYXNzPVwiZXhhbXBsZS1saXN0LXNlY3Rpb25cIj5cbiAgICA8dWw+XG4gICAgICA8bGkgKm5nRm9yPVwibGV0IHN1YnRhc2sgb2YgdGFzay5zdWJ0YXNrc1wiPlxuICAgICAgICA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwic3VidGFzay5jb21wbGV0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgIFtjb2xvcl09XCJzdWJ0YXNrLmNvbG9yXCJcbiAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVBbGxDb21wbGV0ZSgpXCI+XG4gICAgICAgICAge3tzdWJ0YXNrLm5hbWV9fVxuICAgICAgICA8L21hdC1jaGVja2JveD5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgPC9zcGFuPlxuPC9zZWN0aW9uPlxuIl19