import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/popover-edit";
import * as i2 from "@angular/forms";
const PERSON_DATA = [
    { id: 1, firstName: 'Terra', middleName: 'Maduin', lastName: 'Branford' },
    { id: 2, firstName: 'Locke', middleName: '', lastName: 'Cole' },
    { id: 3, firstName: 'Celes', middleName: 'Gestahl', lastName: 'Chere' },
    { id: 4, firstName: 'Edgar', middleName: 'Roni', lastName: 'Figaro' },
    { id: 5, firstName: 'Sabin', middleName: 'Rene', lastName: 'Figaro' },
    { id: 6, firstName: 'Clyde', middleName: '"Shadow"', lastName: 'Arrowny' },
    { id: 7, firstName: 'Setzer', middleName: '', lastName: 'Gabbiani' },
    { id: 8, firstName: 'Cid', middleName: 'Del Norte', lastName: 'Marquez' },
    { id: 9, firstName: 'Mog', middleName: '', lastName: 'McMoogle' },
];
/**
 * @title CDK Popover Edit spanning multiple columns on an HTML data-table
 */
export class CdkPopoverEditCellSpanVanillaTableExample {
    constructor() {
        this.preservedValues = new WeakMap();
        this.persons = PERSON_DATA;
    }
    onSubmit(person, f) {
        if (!f.valid) {
            return;
        }
        person.firstName = f.value['firstName'];
        person.middleName = f.value['middleName'];
        person.lastName = f.value['lastName'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CdkPopoverEditCellSpanVanillaTableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.0.0", type: CdkPopoverEditCellSpanVanillaTableExample, isStandalone: true, selector: "cdk-popover-edit-cell-span-vanilla-table-example", ngImport: i0, template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #nameEdit let-ctx>\n    <div style=\"background-color: #ddd; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div class=\"example-input-container\">\n          <input [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          <input [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n              [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          <input [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n        </div>\n        <br>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <tr>\n    <th> No. </th>\n    <th> First name </th>\n    <th> Middle name </th>\n    <th> Last name </th>\n  </tr>\n\n  @for (person of persons; track person) {\n    <tr>\n      <td> {{person.id}} </td>\n\n      <td [cdkPopoverEdit]=\"nameEdit\"\n          [cdkPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n          [cdkPopoverEditColspan]=\"{after: 2}\">\n        {{person.firstName}}\n\n        <span *cdkRowHoverContent>\n          <button cdkEditOpen>Edit</button>\n        </span>\n      </td>\n\n      <td [cdkPopoverEdit]=\"nameEdit\"\n          [cdkPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n          [cdkPopoverEditColspan]=\"{before: 1, after: 1}\">\n        {{person.middleName}}\n\n        <span *cdkRowHoverContent>\n          <button cdkEditOpen>Edit</button>\n        </span>\n      </td>\n\n      <td [cdkPopoverEdit]=\"nameEdit\"\n          [cdkPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n          [cdkPopoverEditColspan]=\"{before: 2}\">\n        {{person.lastName}}\n\n        <span *cdkRowHoverContent>\n          <button cdkEditOpen>Edit</button>\n        </span>\n      </td>\n    </tr>\n  }\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container input {\n  flex: 1;\n  font-size: 14px;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i1.CdkPopoverEdit, selector: "[cdkPopoverEdit]:not([cdkPopoverEditTabOut])", inputs: ["cdkPopoverEdit", "cdkPopoverEditContext", "cdkPopoverEditColspan", "cdkPopoverEditDisabled", "cdkPopoverEditAriaLabel"] }, { kind: "directive", type: i1.CdkRowHoverContent, selector: "[cdkRowHoverContent]" }, { kind: "directive", type: i1.CdkEditControl, selector: "form[cdkEditControl]", inputs: ["cdkEditControlClickOutBehavior", "cdkEditControlPreservedFormValue", "cdkEditControlIgnoreSubmitUnlessValid"], outputs: ["cdkEditControlPreservedFormValueChange"] }, { kind: "directive", type: i1.CdkEditRevert, selector: "button[cdkEditRevert]", inputs: ["type"] }, { kind: "directive", type: i1.CdkEditClose, selector: "[cdkEditClose]" }, { kind: "directive", type: i1.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "directive", type: i1.CdkEditOpen, selector: "[cdkEditOpen]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i2.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i2.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i2.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i2.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i2.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i2.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i2.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.0", ngImport: i0, type: CdkPopoverEditCellSpanVanillaTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-popover-edit-cell-span-vanilla-table-example', standalone: true, imports: [CdkPopoverEditModule, FormsModule], template: "<table editable class=\"example-table\">\n  <!--\n    This edit lens is specified outside of the cell and must explicitly declare\n    its context. It could be reused in multiple cells.\n  -->\n  <ng-template #nameEdit let-ctx>\n    <div style=\"background-color: #ddd; width: 100%\">\n      <form #f=\"ngForm\"\n          cdkEditControl\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [cdkEditControlPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (cdkEditControlPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div class=\"example-input-container\">\n          <input [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          <input [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n              [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          <input [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n              [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n        </div>\n        <br>\n        <br>\n        <button type=\"submit\">Confirm</button>\n        <button cdkEditRevert>Revert</button>\n        <button cdkEditClose>Close</button>\n      </form>\n    </div>\n  </ng-template>\n\n  <tr>\n    <th> No. </th>\n    <th> First name </th>\n    <th> Middle name </th>\n    <th> Last name </th>\n  </tr>\n\n  @for (person of persons; track person) {\n    <tr>\n      <td> {{person.id}} </td>\n\n      <td [cdkPopoverEdit]=\"nameEdit\"\n          [cdkPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n          [cdkPopoverEditColspan]=\"{after: 2}\">\n        {{person.firstName}}\n\n        <span *cdkRowHoverContent>\n          <button cdkEditOpen>Edit</button>\n        </span>\n      </td>\n\n      <td [cdkPopoverEdit]=\"nameEdit\"\n          [cdkPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n          [cdkPopoverEditColspan]=\"{before: 1, after: 1}\">\n        {{person.middleName}}\n\n        <span *cdkRowHoverContent>\n          <button cdkEditOpen>Edit</button>\n        </span>\n      </td>\n\n      <td [cdkPopoverEdit]=\"nameEdit\"\n          [cdkPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n          [cdkPopoverEditColspan]=\"{before: 2}\">\n        {{person.lastName}}\n\n        <span *cdkRowHoverContent>\n          <button cdkEditOpen>Edit</button>\n        </span>\n      </td>\n    </tr>\n  }\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container input {\n  flex: 1;\n  font-size: 14px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi12YW5pbGxhLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFTLFdBQVcsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDOzs7O0FBUzVFLE1BQU0sV0FBVyxHQUFhO0lBQzVCLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztJQUN2RSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUM7SUFDN0QsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFDO0lBQ3JFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBQztJQUNuRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUM7SUFDbkUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDO0lBQ3hFLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBQztJQUNsRSxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUM7SUFDdkUsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFDO0NBQ2hFLENBQUM7QUFFRjs7R0FFRztBQVFILE1BQU0sT0FBTyx5Q0FBeUM7SUFQdEQ7UUFRVyxvQkFBZSxHQUFHLElBQUksT0FBTyxFQUFlLENBQUM7UUFFN0MsWUFBTyxHQUFHLFdBQVcsQ0FBQztLQVdoQztJQVRDLFFBQVEsQ0FBQyxNQUFjLEVBQUUsQ0FBUztRQUNoQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzhHQWJVLHlDQUF5QztrR0FBekMseUNBQXlDLDRHQ2pDdEQsbzhFQXdFQSxzWER6Q1ksb0JBQW9CLDI4QkFBRSxXQUFXOzsyRkFFaEMseUNBQXlDO2tCQVByRCxTQUFTOytCQUNFLGtEQUFrRCxjQUdoRCxJQUFJLFdBQ1AsQ0FBQyxvQkFBb0IsRUFBRSxXQUFXLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9ybSwgRm9ybXNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q2RrUG9wb3ZlckVkaXRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0JztcblxuZXhwb3J0IGludGVyZmFjZSBQZXJzb24ge1xuICBpZDogbnVtYmVyO1xuICBmaXJzdE5hbWU6IHN0cmluZztcbiAgbWlkZGxlTmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCBQRVJTT05fREFUQTogUGVyc29uW10gPSBbXG4gIHtpZDogMSwgZmlyc3ROYW1lOiAnVGVycmEnLCBtaWRkbGVOYW1lOiAnTWFkdWluJywgbGFzdE5hbWU6ICdCcmFuZm9yZCd9LFxuICB7aWQ6IDIsIGZpcnN0TmFtZTogJ0xvY2tlJywgbWlkZGxlTmFtZTogJycsIGxhc3ROYW1lOiAnQ29sZSd9LFxuICB7aWQ6IDMsIGZpcnN0TmFtZTogJ0NlbGVzJywgbWlkZGxlTmFtZTogJ0dlc3RhaGwnLCBsYXN0TmFtZTogJ0NoZXJlJ30sXG4gIHtpZDogNCwgZmlyc3ROYW1lOiAnRWRnYXInLCBtaWRkbGVOYW1lOiAnUm9uaScsIGxhc3ROYW1lOiAnRmlnYXJvJ30sXG4gIHtpZDogNSwgZmlyc3ROYW1lOiAnU2FiaW4nLCBtaWRkbGVOYW1lOiAnUmVuZScsIGxhc3ROYW1lOiAnRmlnYXJvJ30sXG4gIHtpZDogNiwgZmlyc3ROYW1lOiAnQ2x5ZGUnLCBtaWRkbGVOYW1lOiAnXCJTaGFkb3dcIicsIGxhc3ROYW1lOiAnQXJyb3dueSd9LFxuICB7aWQ6IDcsIGZpcnN0TmFtZTogJ1NldHplcicsIG1pZGRsZU5hbWU6ICcnLCBsYXN0TmFtZTogJ0dhYmJpYW5pJ30sXG4gIHtpZDogOCwgZmlyc3ROYW1lOiAnQ2lkJywgbWlkZGxlTmFtZTogJ0RlbCBOb3J0ZScsIGxhc3ROYW1lOiAnTWFycXVleid9LFxuICB7aWQ6IDksIGZpcnN0TmFtZTogJ01vZycsIG1pZGRsZU5hbWU6ICcnLCBsYXN0TmFtZTogJ01jTW9vZ2xlJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBDREsgUG9wb3ZlciBFZGl0IHNwYW5uaW5nIG11bHRpcGxlIGNvbHVtbnMgb24gYW4gSFRNTCBkYXRhLXRhYmxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wb3BvdmVyLWVkaXQtY2VsbC1zcGFuLXZhbmlsbGEtdGFibGUtZXhhbXBsZScsXG4gIHN0eWxlVXJsOiAnY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLmNzcycsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXBvcG92ZXItZWRpdC1jZWxsLXNwYW4tdmFuaWxsYS10YWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbQ2RrUG9wb3ZlckVkaXRNb2R1bGUsIEZvcm1zTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUG9wb3ZlckVkaXRDZWxsU3BhblZhbmlsbGFUYWJsZUV4YW1wbGUge1xuICByZWFkb25seSBwcmVzZXJ2ZWRWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJzb24sIGFueT4oKTtcblxuICByZWFkb25seSBwZXJzb25zID0gUEVSU09OX0RBVEE7XG5cbiAgb25TdWJtaXQocGVyc29uOiBQZXJzb24sIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHBlcnNvbi5maXJzdE5hbWUgPSBmLnZhbHVlWydmaXJzdE5hbWUnXTtcbiAgICBwZXJzb24ubWlkZGxlTmFtZSA9IGYudmFsdWVbJ21pZGRsZU5hbWUnXTtcbiAgICBwZXJzb24ubGFzdE5hbWUgPSBmLnZhbHVlWydsYXN0TmFtZSddO1xuICB9XG59XG4iLCI8dGFibGUgZWRpdGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCI+XG4gIDwhLS1cbiAgICBUaGlzIGVkaXQgbGVucyBpcyBzcGVjaWZpZWQgb3V0c2lkZSBvZiB0aGUgY2VsbCBhbmQgbXVzdCBleHBsaWNpdGx5IGRlY2xhcmVcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxuICAtLT5cbiAgPG5nLXRlbXBsYXRlICNuYW1lRWRpdCBsZXQtY3R4PlxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB3aWR0aDogMTAwJVwiPlxuICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgIGNka0VkaXRDb250cm9sXG4gICAgICAgICAgKG5nU3VibWl0KT1cIm9uU3VibWl0KGN0eC5wZXJzb24sIGYpXCJcbiAgICAgICAgICBbY2RrRWRpdENvbnRyb2xQcmVzZXJ2ZWRGb3JtVmFsdWVdPVwicHJlc2VydmVkVmFsdWVzLmdldChjdHgucGVyc29uKVwiXG4gICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZFZhbHVlcy5zZXQoY3R4LnBlcnNvbiwgJGV2ZW50KVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pbnB1dC1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW5wdXQgW25nTW9kZWxdPVwiY3R4LnBlcnNvbi5maXJzdE5hbWVcIiBuYW1lPVwiZmlyc3ROYW1lXCIgcmVxdWlyZWRcbiAgICAgICAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImN0eC5mb2N1cyA9PT0gJ2ZpcnN0TmFtZScgfHwgbnVsbFwiPlxuICAgICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XCJjdHgucGVyc29uLm1pZGRsZU5hbWVcIiBuYW1lPVwibWlkZGxlTmFtZVwiXG4gICAgICAgICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjdHguZm9jdXMgPT09ICdtaWRkbGVOYW1lJyB8fCBudWxsXCI+XG4gICAgICAgICAgPGlucHV0IFtuZ01vZGVsXT1cImN0eC5wZXJzb24ubGFzdE5hbWVcIiBuYW1lPVwibGFzdE5hbWVcIiByZXF1aXJlZFxuICAgICAgICAgICAgICBbYXR0ci5jZGtGb2N1c0luaXRpYWxdPVwiY3R4LmZvY3VzID09PSAnbGFzdE5hbWUnIHx8IG51bGxcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGJyPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Db25maXJtPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2RrRWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgPC9uZy10ZW1wbGF0ZT5cblxuICA8dHI+XG4gICAgPHRoPiBOby4gPC90aD5cbiAgICA8dGg+IEZpcnN0IG5hbWUgPC90aD5cbiAgICA8dGg+IE1pZGRsZSBuYW1lIDwvdGg+XG4gICAgPHRoPiBMYXN0IG5hbWUgPC90aD5cbiAgPC90cj5cblxuICBAZm9yIChwZXJzb24gb2YgcGVyc29uczsgdHJhY2sgcGVyc29uKSB7XG4gICAgPHRyPlxuICAgICAgPHRkPiB7e3BlcnNvbi5pZH19IDwvdGQ+XG5cbiAgICAgIDx0ZCBbY2RrUG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIlxuICAgICAgICAgIFtjZGtQb3BvdmVyRWRpdENvbnRleHRdPVwie3BlcnNvbjogcGVyc29uLCBmb2N1czogJ2ZpcnN0TmFtZSd9XCJcbiAgICAgICAgICBbY2RrUG9wb3ZlckVkaXRDb2xzcGFuXT1cInthZnRlcjogMn1cIj5cbiAgICAgICAge3twZXJzb24uZmlyc3ROYW1lfX1cblxuICAgICAgICA8c3BhbiAqY2RrUm93SG92ZXJDb250ZW50PlxuICAgICAgICAgIDxidXR0b24gY2RrRWRpdE9wZW4+RWRpdDwvYnV0dG9uPlxuICAgICAgICA8L3NwYW4+XG4gICAgICA8L3RkPlxuXG4gICAgICA8dGQgW2Nka1BvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCJcbiAgICAgICAgICBbY2RrUG9wb3ZlckVkaXRDb250ZXh0XT1cIntwZXJzb246IHBlcnNvbiwgZm9jdXM6ICdtaWRkbGVOYW1lJ31cIlxuICAgICAgICAgIFtjZGtQb3BvdmVyRWRpdENvbHNwYW5dPVwie2JlZm9yZTogMSwgYWZ0ZXI6IDF9XCI+XG4gICAgICAgIHt7cGVyc29uLm1pZGRsZU5hbWV9fVxuXG4gICAgICAgIDxzcGFuICpjZGtSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0T3Blbj5FZGl0PC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvdGQ+XG5cbiAgICAgIDx0ZCBbY2RrUG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIlxuICAgICAgICAgIFtjZGtQb3BvdmVyRWRpdENvbnRleHRdPVwie3BlcnNvbjogcGVyc29uLCBmb2N1czogJ2xhc3ROYW1lJ31cIlxuICAgICAgICAgIFtjZGtQb3BvdmVyRWRpdENvbHNwYW5dPVwie2JlZm9yZTogMn1cIj5cbiAgICAgICAge3twZXJzb24ubGFzdE5hbWV9fVxuXG4gICAgICAgIDxzcGFuICpjZGtSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0T3Blbj5FZGl0PC9idXR0b24+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvdGQ+XG4gICAgPC90cj5cbiAgfVxuPC90YWJsZT5cbiJdfQ==