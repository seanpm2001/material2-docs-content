import { Component, Inject } from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
import * as i2 from "@angular/forms";
/**
 * @title CDK Dialog Overview
 */
export class CdkDialogOverviewExample {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openDialog() {
        const dialogRef = this.dialog.open(CdkDialogOverviewExampleDialog, {
            width: '250px',
            data: { name: this.name, animal: this.animal },
        });
        dialogRef.closed.subscribe(result => {
            console.log('The dialog was closed');
            this.animal = result;
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkDialogOverviewExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.2.0-next.2", type: CdkDialogOverviewExample, isStandalone: true, selector: "cdk-dialog-overview-example", ngImport: i0, template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  @if (animal) {\n    <li>\n      You chose: <em>{{animal}}</em>\n    </li>\n  }\n</ol>\n", dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: DialogModule }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkDialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example', standalone: true, imports: [FormsModule, DialogModule], template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  @if (animal) {\n    <li>\n      You chose: <em>{{animal}}</em>\n    </li>\n  }\n</ol>\n" }]
        }], ctorParameters: () => [{ type: i1.Dialog }] });
export class CdkDialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkDialogOverviewExampleDialog, deps: [{ token: i1.DialogRef }, { token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: CdkDialogOverviewExampleDialog, isStandalone: true, selector: "cdk-dialog-overview-example-dialog", ngImport: i0, template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkDialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example-dialog', standalone: true, imports: [FormsModule], template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.DialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RpYWxvZy9jZGstZGlhbG9nLW92ZXJ2aWV3L2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1vdmVydmlldy9jZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1vdmVydmlldy9jZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQU8zQzs7R0FFRztBQU9ILE1BQU0sT0FBTyx3QkFBd0I7SUFJbkMsWUFBbUIsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRyxDQUFDO0lBRXJDLFVBQVU7UUFDUixNQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBUyw4QkFBOEIsRUFBRTtZQUN6RSxLQUFLLEVBQUUsT0FBTztZQUNkLElBQUksRUFBRSxFQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFDO1NBQzdDLENBQUMsQ0FBQztRQUVILFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7cUhBaEJVLHdCQUF3Qjt5R0FBeEIsd0JBQXdCLHVGQ2xCckMsb1RBY0EsMkNERVksV0FBVyw4bUJBQUUsWUFBWTs7a0dBRXhCLHdCQUF3QjtrQkFOcEMsU0FBUzsrQkFDRSw2QkFBNkIsY0FFM0IsSUFBSSxXQUNQLENBQUMsV0FBVyxFQUFFLFlBQVksQ0FBQzs7QUE0QnRDLE1BQU0sT0FBTyw4QkFBOEI7SUFDekMsWUFDUyxTQUE0QixFQUNQLElBQWdCO1FBRHJDLGNBQVMsR0FBVCxTQUFTLENBQW1CO1FBQ1AsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUMzQyxDQUFDO3FIQUpPLDhCQUE4QiwyQ0FHL0IsV0FBVzt5R0FIViw4QkFBOEIsOEZFNUMzQyx5VkFTQSw0T0ZpQ1ksV0FBVzs7a0dBRVYsOEJBQThCO2tCQVAxQyxTQUFTOytCQUNFLG9DQUFvQyxjQUdsQyxJQUFJLFdBQ1AsQ0FBQyxXQUFXLENBQUM7OzBCQUtuQixNQUFNOzJCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5qZWN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGlhbG9nLCBEaWFsb2dSZWYsIERJQUxPR19EQVRBLCBEaWFsb2dNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kaWFsb2cnO1xuaW1wb3J0IHtGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBDREsgRGlhbG9nIE92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsIERpYWxvZ01vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENka0RpYWxvZ092ZXJ2aWV3RXhhbXBsZSB7XG4gIGFuaW1hbDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGRpYWxvZzogRGlhbG9nKSB7fVxuXG4gIG9wZW5EaWFsb2coKTogdm9pZCB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbjxzdHJpbmc+KENka0RpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZywge1xuICAgICAgd2lkdGg6ICcyNTBweCcsXG4gICAgICBkYXRhOiB7bmFtZTogdGhpcy5uYW1lLCBhbmltYWw6IHRoaXMuYW5pbWFsfSxcbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5jbG9zZWQuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlIGRpYWxvZyB3YXMgY2xvc2VkJyk7XG4gICAgICB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmh0bWwnLFxuICBzdHlsZVVybDogJ2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrRGlhbG9nT3ZlcnZpZXdFeGFtcGxlRGlhbG9nIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogRGlhbG9nUmVmPHN0cmluZz4sXG4gICAgQEluamVjdChESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IERpYWxvZ0RhdGEsXG4gICkge31cbn1cbiIsIjxvbD5cbiAgPGxpPlxuICAgIDxsYWJlbCBpZD1cImRpYWxvZy11c2VyLW5hbWVcIj5XaGF0J3MgeW91ciBuYW1lPzwvbGFiZWw+XG4gICAgPGlucHV0IGZvcj1cImRpYWxvZy11c2VyLW5hbWVcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPlBpY2sgb25lPC9idXR0b24+XG4gIDwvbGk+XG4gIEBpZiAoYW5pbWFsKSB7XG4gICAgPGxpPlxuICAgICAgWW91IGNob3NlOiA8ZW0+e3thbmltYWx9fTwvZW0+XG4gICAgPC9saT5cbiAgfVxuPC9vbD5cbiIsIjxoMT5IaSB7e2RhdGEubmFtZX19PC9oMT5cbjxkaXY+XG4gIDxsYWJlbCBpZD1cImZhdm9yaXRlLWFuaW1hbFwiPldoYXQncyB5b3VyIGZhdm9yaXRlIGFuaW1hbD88L2xhYmVsPlxuICA8aW5wdXQgZm9yPVwiZmF2b3JpdGUtYW5pbWFsXCIgWyhuZ01vZGVsKV09XCJkYXRhLmFuaW1hbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCI+XG48L2Rpdj5cbjxkaXY+XG4gIDxidXR0b24gKGNsaWNrKT1cImRpYWxvZ1JlZi5jbG9zZShkYXRhLmFuaW1hbClcIj5PSzwvYnV0dG9uPlxuICA8YnV0dG9uIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UoKVwiPkNhbmNlbDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=