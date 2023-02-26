import { Component, Inject } from '@angular/core';
import { Dialog, DialogRef, DIALOG_DATA } from '@angular/cdk/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/dialog";
import * as i2 from "@angular/common";
import * as i3 from "@angular/forms";
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
}
CdkDialogOverviewExample.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CdkDialogOverviewExample, deps: [{ token: i1.Dialog }], target: i0.ɵɵFactoryTarget.Component });
CdkDialogOverviewExample.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.0", type: CdkDialogOverviewExample, selector: "cdk-dialog-overview-example", ngImport: i0, template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <em>{{animal}}</em>\n  </li>\n</ol>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CdkDialogOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example', template: "<ol>\n  <li>\n    <label id=\"dialog-user-name\">What's your name?</label>\n    <input for=\"dialog-user-name\" [(ngModel)]=\"name\">\n  </li>\n  <li>\n    <button (click)=\"openDialog()\">Pick one</button>\n  </li>\n  <li *ngIf=\"animal\">\n    You chose: <em>{{animal}}</em>\n  </li>\n</ol>\n" }]
        }], ctorParameters: function () { return [{ type: i1.Dialog }]; } });
export class CdkDialogOverviewExampleDialog {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
CdkDialogOverviewExampleDialog.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CdkDialogOverviewExampleDialog, deps: [{ token: i1.DialogRef }, { token: DIALOG_DATA }], target: i0.ɵɵFactoryTarget.Component });
CdkDialogOverviewExampleDialog.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0-next.0", type: CdkDialogOverviewExampleDialog, selector: "cdk-dialog-overview-example-dialog", ngImport: i0, template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"], dependencies: [{ kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0-next.0", ngImport: i0, type: CdkDialogOverviewExampleDialog, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-dialog-overview-example-dialog', template: "<h1>Hi {{data.name}}</h1>\n<div>\n  <label id=\"favorite-animal\">What's your favorite animal?</label>\n  <input for=\"favorite-animal\" [(ngModel)]=\"data.animal\" placeholder=\"Enter your name\">\n</div>\n<div>\n  <button (click)=\"dialogRef.close(data.animal)\">OK</button>\n  <button (click)=\"dialogRef.close()\">Cancel</button>\n</div>\n", styles: [":host {\n  display: block;\n  background: #fff;\n  border-radius: 8px;\n  padding: 8px 16px 16px;\n}\n\ninput {\n  margin: 8px 0;\n}\n\nbutton + button {\n  margin-left: 8px;\n}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.DialogRef }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [DIALOG_DATA]
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2RpYWxvZy9jZGstZGlhbG9nLW92ZXJ2aWV3L2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1vdmVydmlldy9jZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kaWFsb2cvY2RrLWRpYWxvZy1vdmVydmlldy9jZGstZGlhbG9nLW92ZXJ2aWV3LWV4YW1wbGUtZGlhbG9nLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDaEQsT0FBTyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFDLE1BQU0scUJBQXFCLENBQUM7Ozs7O0FBT25FOztHQUVHO0FBS0gsTUFBTSxPQUFPLHdCQUF3QjtJQUluQyxZQUFtQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFckMsVUFBVTtRQUNSLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFTLDhCQUE4QixFQUFFO1lBQ3pFLEtBQUssRUFBRSxPQUFPO1lBQ2QsSUFBSSxFQUFFLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUM7U0FDN0MsQ0FBQyxDQUFDO1FBRUgsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7NEhBaEJVLHdCQUF3QjtnSEFBeEIsd0JBQXdCLG1FQ2ZyQyx3U0FZQTtrR0RHYSx3QkFBd0I7a0JBSnBDLFNBQVM7K0JBQ0UsNkJBQTZCOztBQTJCekMsTUFBTSxPQUFPLDhCQUE4QjtJQUN6QyxZQUFtQixTQUE0QixFQUE4QixJQUFnQjtRQUExRSxjQUFTLEdBQVQsU0FBUyxDQUFtQjtRQUE4QixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUcsQ0FBQzs7a0lBRHRGLDhCQUE4QiwyQ0FDZ0IsV0FBVztzSEFEekQsOEJBQThCLDBFRXZDM0MseVZBU0E7a0dGOEJhLDhCQUE4QjtrQkFMMUMsU0FBUzsrQkFDRSxvQ0FBb0M7OzBCQUtJLE1BQU07MkJBQUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbmplY3R9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtEaWFsb2csIERpYWxvZ1JlZiwgRElBTE9HX0RBVEF9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kaWFsb2cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbmltYWw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEB0aXRsZSBDREsgRGlhbG9nIE92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEaWFsb2dPdmVydmlld0V4YW1wbGUge1xuICBhbmltYWw6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgbmFtZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2c6IERpYWxvZykge31cblxuICBvcGVuRGlhbG9nKCk6IHZvaWQge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW48c3RyaW5nPihDZGtEaWFsb2dPdmVydmlld0V4YW1wbGVEaWFsb2csIHtcbiAgICAgIHdpZHRoOiAnMjUwcHgnLFxuICAgICAgZGF0YToge25hbWU6IHRoaXMubmFtZSwgYW5pbWFsOiB0aGlzLmFuaW1hbH0sXG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuY2xvc2VkLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1RoZSBkaWFsb2cgd2FzIGNsb3NlZCcpO1xuICAgICAgdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLWRpYWxvZy1vdmVydmlldy1leGFtcGxlLWRpYWxvZy5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2Nkay1kaWFsb2ctb3ZlcnZpZXctZXhhbXBsZS1kaWFsb2cuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENka0RpYWxvZ092ZXJ2aWV3RXhhbXBsZURpYWxvZyB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IERpYWxvZ1JlZjxzdHJpbmc+LCBASW5qZWN0KERJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogRGlhbG9nRGF0YSkge31cbn1cbiIsIjxvbD5cbiAgPGxpPlxuICAgIDxsYWJlbCBpZD1cImRpYWxvZy11c2VyLW5hbWVcIj5XaGF0J3MgeW91ciBuYW1lPzwvbGFiZWw+XG4gICAgPGlucHV0IGZvcj1cImRpYWxvZy11c2VyLW5hbWVcIiBbKG5nTW9kZWwpXT1cIm5hbWVcIj5cbiAgPC9saT5cbiAgPGxpPlxuICAgIDxidXR0b24gKGNsaWNrKT1cIm9wZW5EaWFsb2coKVwiPlBpY2sgb25lPC9idXR0b24+XG4gIDwvbGk+XG4gIDxsaSAqbmdJZj1cImFuaW1hbFwiPlxuICAgIFlvdSBjaG9zZTogPGVtPnt7YW5pbWFsfX08L2VtPlxuICA8L2xpPlxuPC9vbD5cbiIsIjxoMT5IaSB7e2RhdGEubmFtZX19PC9oMT5cbjxkaXY+XG4gIDxsYWJlbCBpZD1cImZhdm9yaXRlLWFuaW1hbFwiPldoYXQncyB5b3VyIGZhdm9yaXRlIGFuaW1hbD88L2xhYmVsPlxuICA8aW5wdXQgZm9yPVwiZmF2b3JpdGUtYW5pbWFsXCIgWyhuZ01vZGVsKV09XCJkYXRhLmFuaW1hbFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBuYW1lXCI+XG48L2Rpdj5cbjxkaXY+XG4gIDxidXR0b24gKGNsaWNrKT1cImRpYWxvZ1JlZi5jbG9zZShkYXRhLmFuaW1hbClcIj5PSzwvYnV0dG9uPlxuICA8YnV0dG9uIChjbGljayk9XCJkaWFsb2dSZWYuY2xvc2UoKVwiPkNhbmNlbDwvYnV0dG9uPlxuPC9kaXY+XG4iXX0=