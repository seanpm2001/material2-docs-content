import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPopoverEditModule } from '@angular/material-experimental/popover-edit';
import { CdkPopoverEditModule } from '@angular/cdk-experimental/popover-edit';
import { MatTableModule } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/table";
import * as i2 from "@angular/cdk-experimental/popover-edit";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material-experimental/popover-edit";
import * as i5 from "@angular/material/form-field";
import * as i6 from "@angular/material/input";
import * as i7 from "@angular/material/button";
import * as i8 from "@angular/material/icon";
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
 * @title Material Popover Edit spanning multiple columns on a Material data-table
 */
class PopoverEditCellSpanMatTableExample {
    constructor() {
        this.displayedColumns = ['id', 'firstName', 'middleName', 'lastName'];
        this.dataSource = new ExampleDataSource();
        this.preservedValues = new WeakMap();
    }
    onSubmit(person, f) {
        if (!f.valid) {
            return;
        }
        person.firstName = f.value['firstName'];
        person.middleName = f.value['middleName'];
        person.lastName = f.value['lastName'];
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PopoverEditCellSpanMatTableExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: PopoverEditCellSpanMatTableExample, isStandalone: true, selector: "popover-edit-cell-span-mat-table-example", ngImport: i0, template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <ng-template #nameEdit let-ctx>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [matEditLensPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (matEditLensPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div mat-edit-content class=\"example-input-container\">\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n                [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n                [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n                [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n          </mat-form-field>\n        </div>\n\n        <div mat-edit-actions>\n          <button mat-button type=\"submit\">Confirm</button>\n          <button mat-button cdkEditRevert>Revert</button>\n          <button mat-button cdkEditClose>Close</button>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let person\"> {{person.id}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef> First Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [matPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"middleName\">\n    <th mat-header-cell *matHeaderCellDef> Middle Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [matPopoverEditColspan]=\"{before:1 , after: 1}\">\n      {{person.middleName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef> Last Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [matPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container mat-form-field {\n  flex: 1;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i1.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i1.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i1.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i1.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i1.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i1.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i1.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i1.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i1.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i1.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: CdkPopoverEditModule }, { kind: "directive", type: i2.CdkEditRevert, selector: "button[cdkEditRevert]", inputs: ["type"] }, { kind: "directive", type: i2.CdkEditClose, selector: "[cdkEditClose]" }, { kind: "directive", type: i2.CdkEditable, selector: "table[editable], cdk-table[editable], mat-table[editable]" }, { kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i3.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { kind: "directive", type: i3.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i3.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i3.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { kind: "directive", type: i3.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { kind: "directive", type: i3.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "directive", type: i3.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { kind: "ngmodule", type: MatPopoverEditModule }, { kind: "directive", type: i4.MatPopoverEdit, selector: "[matPopoverEdit]:not([matPopoverEditTabOut])", inputs: ["matPopoverEdit", "matPopoverEditContext", "matPopoverEditColspan", "matPopoverEditDisabled"] }, { kind: "directive", type: i4.MatRowHoverContent, selector: "[matRowHoverContent]" }, { kind: "directive", type: i4.MatEditLens, selector: "form[matEditLens]", inputs: ["matEditLensClickOutBehavior", "matEditLensPreservedFormValue", "matEditLensIgnoreSubmitUnlessValid"], outputs: ["matEditLensPreservedFormValueChange"] }, { kind: "directive", type: i4.MatEditOpen, selector: "[matEditOpen]" }, { kind: "ngmodule", type: MatFormFieldModule }, { kind: "component", type: i5.MatFormField, selector: "mat-form-field", inputs: ["hideRequiredMarker", "color", "floatLabel", "appearance", "subscriptSizing", "hintLabel"], exportAs: ["matFormField"] }, { kind: "ngmodule", type: MatInputModule }, { kind: "directive", type: i6.MatInput, selector: "input[matInput], textarea[matInput], select[matNativeControl],      input[matNativeControl], textarea[matNativeControl]", inputs: ["disabled", "id", "placeholder", "name", "required", "type", "errorStateMatcher", "aria-describedby", "value", "readonly"], exportAs: ["matInput"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i7.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "component", type: i7.MatIconButton, selector: "button[mat-icon-button]", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i8.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
export { PopoverEditCellSpanMatTableExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: PopoverEditCellSpanMatTableExample, decorators: [{
            type: Component,
            args: [{ selector: 'popover-edit-cell-span-mat-table-example', standalone: true, imports: [
                        MatTableModule,
                        CdkPopoverEditModule,
                        FormsModule,
                        MatPopoverEditModule,
                        MatFormFieldModule,
                        MatInputModule,
                        MatButtonModule,
                        MatIconModule,
                    ], template: "<table class=\"example-table\" mat-table editable [dataSource]=\"dataSource\">\n  <ng-template #nameEdit let-ctx>\n    <div>\n      <form #f=\"ngForm\"\n          matEditLens\n          (ngSubmit)=\"onSubmit(ctx.person, f)\"\n          [matEditLensPreservedFormValue]=\"preservedValues.get(ctx.person)\"\n          (matEditLensPreservedFormValueChange)=\"preservedValues.set(ctx.person, $event)\">\n        <div mat-edit-content class=\"example-input-container\">\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.firstName\" name=\"firstName\" required\n                [attr.cdkFocusInitial]=\"ctx.focus === 'firstName' || null\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.middleName\" name=\"middleName\"\n                [attr.cdkFocusInitial]=\"ctx.focus === 'middleName' || null\">\n          </mat-form-field>\n          <mat-form-field>\n            <input matInput [ngModel]=\"ctx.person.lastName\" name=\"lastName\" required\n                [attr.cdkFocusInitial]=\"ctx.focus === 'lastName' || null\">\n          </mat-form-field>\n        </div>\n\n        <div mat-edit-actions>\n          <button mat-button type=\"submit\">Confirm</button>\n          <button mat-button cdkEditRevert>Revert</button>\n          <button mat-button cdkEditClose>Close</button>\n        </div>\n      </form>\n    </div>\n  </ng-template>\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"id\">\n    <th mat-header-cell *matHeaderCellDef> No. </th>\n    <td mat-cell *matCellDef=\"let person\"> {{person.id}} </td>\n  </ng-container>\n\n  <!-- Name Column -->\n  <ng-container matColumnDef=\"firstName\">\n    <th mat-header-cell *matHeaderCellDef> First Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'firstName'}\"\n        [matPopoverEditColspan]=\"{after: 2}\">\n      {{person.firstName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Weight Column -->\n  <ng-container matColumnDef=\"middleName\">\n    <th mat-header-cell *matHeaderCellDef> Middle Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'middleName'}\"\n        [matPopoverEditColspan]=\"{before:1 , after: 1}\">\n      {{person.middleName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <!-- Symbol Column -->\n  <ng-container matColumnDef=\"lastName\">\n    <th mat-header-cell *matHeaderCellDef> Last Name </th>\n    <td mat-cell *matCellDef=\"let person\"\n        [matPopoverEdit]=\"nameEdit\"\n        [matPopoverEditContext]=\"{person: person, focus: 'lastName'}\"\n        [matPopoverEditColspan]=\"{before: 2}\">\n      {{person.lastName}}\n\n      <span *matRowHoverContent>\n        <button mat-icon-button matEditOpen><mat-icon>edit</mat-icon></button>\n      </span>\n    </td>\n  </ng-container>\n\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n", styles: [".example-table {\n  width: 100%;\n}\n\n.example-table th {\n  text-align: left;\n}\n\n.example-table td,\n.example-table th {\n  min-width: 300px;\n  width: 25%;\n}\n\n.example-input-container {\n  display: flex;\n  justify-content: stretch;\n}\n\n.example-input-container mat-form-field {\n  flex: 1;\n}\n"] }]
        }] });
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(PERSON_DATA);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsLWV4cGVyaW1lbnRhbC9wb3BvdmVyLWVkaXQvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUvcG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBUyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUNqRixPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGVBQWUsRUFB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O1FBQ0wsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVLEtBQUksQ0FBQztDQUNoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7TmdGb3JtLCBGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJbnB1dE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHtNYXRGb3JtRmllbGRNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHtNYXRQb3BvdmVyRWRpdE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwtZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XG5pbXBvcnQge0Nka1BvcG92ZXJFZGl0TW9kdWxlfSBmcm9tICdAYW5ndWxhci9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdCc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge0JlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGVyc29uIHtcbiAgaWQ6IG51bWJlcjtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIG1pZGRsZU5hbWU6IHN0cmluZztcbiAgbGFzdE5hbWU6IHN0cmluZztcbn1cblxuY29uc3QgUEVSU09OX0RBVEE6IFBlcnNvbltdID0gW1xuICB7aWQ6IDEsIGZpcnN0TmFtZTogJ1RlcnJhJywgbWlkZGxlTmFtZTogJ01hZHVpbicsIGxhc3ROYW1lOiAnQnJhbmZvcmQnfSxcbiAge2lkOiAyLCBmaXJzdE5hbWU6ICdMb2NrZScsIG1pZGRsZU5hbWU6ICcnLCBsYXN0TmFtZTogJ0NvbGUnfSxcbiAge2lkOiAzLCBmaXJzdE5hbWU6ICdDZWxlcycsIG1pZGRsZU5hbWU6ICdHZXN0YWhsJywgbGFzdE5hbWU6ICdDaGVyZSd9LFxuICB7aWQ6IDQsIGZpcnN0TmFtZTogJ0VkZ2FyJywgbWlkZGxlTmFtZTogJ1JvbmknLCBsYXN0TmFtZTogJ0ZpZ2Fybyd9LFxuICB7aWQ6IDUsIGZpcnN0TmFtZTogJ1NhYmluJywgbWlkZGxlTmFtZTogJ1JlbmUnLCBsYXN0TmFtZTogJ0ZpZ2Fybyd9LFxuICB7aWQ6IDYsIGZpcnN0TmFtZTogJ0NseWRlJywgbWlkZGxlTmFtZTogJ1wiU2hhZG93XCInLCBsYXN0TmFtZTogJ0Fycm93bnknfSxcbiAge2lkOiA3LCBmaXJzdE5hbWU6ICdTZXR6ZXInLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdHYWJiaWFuaSd9LFxuICB7aWQ6IDgsIGZpcnN0TmFtZTogJ0NpZCcsIG1pZGRsZU5hbWU6ICdEZWwgTm9ydGUnLCBsYXN0TmFtZTogJ01hcnF1ZXonfSxcbiAge2lkOiA5LCBmaXJzdE5hbWU6ICdNb2cnLCBtaWRkbGVOYW1lOiAnJywgbGFzdE5hbWU6ICdNY01vb2dsZSd9LFxuXTtcblxuLyoqXG4gKiBAdGl0bGUgTWF0ZXJpYWwgUG9wb3ZlciBFZGl0IHNwYW5uaW5nIG11bHRpcGxlIGNvbHVtbnMgb24gYSBNYXRlcmlhbCBkYXRhLXRhYmxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BvcG92ZXItZWRpdC1jZWxsLXNwYW4tbWF0LXRhYmxlLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsncG9wb3Zlci1lZGl0LWNlbGwtc3Bhbi1tYXQtdGFibGUtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdwb3BvdmVyLWVkaXQtY2VsbC1zcGFuLW1hdC10YWJsZS1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gICAgQ2RrUG9wb3ZlckVkaXRNb2R1bGUsXG4gICAgRm9ybXNNb2R1bGUsXG4gICAgTWF0UG9wb3ZlckVkaXRNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBQb3BvdmVyRWRpdENlbGxTcGFuTWF0VGFibGVFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ2lkJywgJ2ZpcnN0TmFtZScsICdtaWRkbGVOYW1lJywgJ2xhc3ROYW1lJ107XG4gIGRhdGFTb3VyY2UgPSBuZXcgRXhhbXBsZURhdGFTb3VyY2UoKTtcblxuICByZWFkb25seSBwcmVzZXJ2ZWRWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJzb24sIGFueT4oKTtcblxuICBvblN1Ym1pdChwZXJzb246IFBlcnNvbiwgZjogTmdGb3JtKSB7XG4gICAgaWYgKCFmLnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGVyc29uLmZpcnN0TmFtZSA9IGYudmFsdWVbJ2ZpcnN0TmFtZSddO1xuICAgIHBlcnNvbi5taWRkbGVOYW1lID0gZi52YWx1ZVsnbWlkZGxlTmFtZSddO1xuICAgIHBlcnNvbi5sYXN0TmFtZSA9IGYudmFsdWVbJ2xhc3ROYW1lJ107XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXG4gKiBjYW4gcmV0cmlldmUgaXRzIGRhdGEgaW4gYW55IHdheS4gSW4gdGhpcyBjYXNlLCB0aGUgZGF0YSBzb3VyY2UgaXMgcHJvdmlkZWQgYSByZWZlcmVuY2VcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxuICogc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcnNvbj4ge1xuICAvKiogU3RyZWFtIG9mIGRhdGEgdGhhdCBpcyBwcm92aWRlZCB0byB0aGUgdGFibGUuICovXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcnNvbltdPihQRVJTT05fREFUQSk7XG5cbiAgLyoqIENvbm5lY3QgZnVuY3Rpb24gY2FsbGVkIGJ5IHRoZSB0YWJsZSB0byByZXRyaWV2ZSBvbmUgc3RyZWFtIGNvbnRhaW5pbmcgdGhlIGRhdGEgdG8gcmVuZGVyLiAqL1xuICBjb25uZWN0KCk6IE9ic2VydmFibGU8UGVyc29uW10+IHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZGlzY29ubmVjdCgpIHt9XG59XG4iLCI8dGFibGUgY2xhc3M9XCJleGFtcGxlLXRhYmxlXCIgbWF0LXRhYmxlIGVkaXRhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIj5cbiAgPG5nLXRlbXBsYXRlICNuYW1lRWRpdCBsZXQtY3R4PlxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSAjZj1cIm5nRm9ybVwiXG4gICAgICAgICAgbWF0RWRpdExlbnNcbiAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXQoY3R4LnBlcnNvbiwgZilcIlxuICAgICAgICAgIFttYXRFZGl0TGVuc1ByZXNlcnZlZEZvcm1WYWx1ZV09XCJwcmVzZXJ2ZWRWYWx1ZXMuZ2V0KGN0eC5wZXJzb24pXCJcbiAgICAgICAgICAobWF0RWRpdExlbnNQcmVzZXJ2ZWRGb3JtVmFsdWVDaGFuZ2UpPVwicHJlc2VydmVkVmFsdWVzLnNldChjdHgucGVyc29uLCAkZXZlbnQpXCI+XG4gICAgICAgIDxkaXYgbWF0LWVkaXQtY29udGVudCBjbGFzcz1cImV4YW1wbGUtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFtuZ01vZGVsXT1cImN0eC5wZXJzb24uZmlyc3ROYW1lXCIgbmFtZT1cImZpcnN0TmFtZVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgW2F0dHIuY2RrRm9jdXNJbml0aWFsXT1cImN0eC5mb2N1cyA9PT0gJ2ZpcnN0TmFtZScgfHwgbnVsbFwiPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFtuZ01vZGVsXT1cImN0eC5wZXJzb24ubWlkZGxlTmFtZVwiIG5hbWU9XCJtaWRkbGVOYW1lXCJcbiAgICAgICAgICAgICAgICBbYXR0ci5jZGtGb2N1c0luaXRpYWxdPVwiY3R4LmZvY3VzID09PSAnbWlkZGxlTmFtZScgfHwgbnVsbFwiPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IFtuZ01vZGVsXT1cImN0eC5wZXJzb24ubGFzdE5hbWVcIiBuYW1lPVwibGFzdE5hbWVcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgIFthdHRyLmNka0ZvY3VzSW5pdGlhbF09XCJjdHguZm9jdXMgPT09ICdsYXN0TmFtZScgfHwgbnVsbFwiPlxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgbWF0LWVkaXQtYWN0aW9ucz5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2RrRWRpdFJldmVydD5SZXZlcnQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2RrRWRpdENsb3NlPkNsb3NlPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICA8L25nLXRlbXBsYXRlPlxuXG4gIDwhLS0gUG9zaXRpb24gQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImlkXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTm8uIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHBlcnNvblwiPiB7e3BlcnNvbi5pZH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gTmFtZSBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZmlyc3ROYW1lXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gRmlyc3QgTmFtZSA8L3RoPlxuICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBwZXJzb25cIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRDb250ZXh0XT1cIntwZXJzb246IHBlcnNvbiwgZm9jdXM6ICdmaXJzdE5hbWUnfVwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdENvbHNwYW5dPVwie2FmdGVyOiAyfVwiPlxuICAgICAge3twZXJzb24uZmlyc3ROYW1lfX1cblxuICAgICAgPHNwYW4gKm1hdFJvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gbWF0RWRpdE9wZW4+PG1hdC1pY29uPmVkaXQ8L21hdC1pY29uPjwvYnV0dG9uPlxuICAgICAgPC9zcGFuPlxuICAgIDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDwhLS0gV2VpZ2h0IENvbHVtbiAtLT5cbiAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJtaWRkbGVOYW1lXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTWlkZGxlIE5hbWUgPC90aD5cbiAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcGVyc29uXCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0XT1cIm5hbWVFZGl0XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0Q29udGV4dF09XCJ7cGVyc29uOiBwZXJzb24sIGZvY3VzOiAnbWlkZGxlTmFtZSd9XCJcbiAgICAgICAgW21hdFBvcG92ZXJFZGl0Q29sc3Bhbl09XCJ7YmVmb3JlOjEgLCBhZnRlcjogMX1cIj5cbiAgICAgIHt7cGVyc29uLm1pZGRsZU5hbWV9fVxuXG4gICAgICA8c3BhbiAqbWF0Um93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRFZGl0T3Blbj48bWF0LWljb24+ZWRpdDwvbWF0LWljb24+PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBTeW1ib2wgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImxhc3ROYW1lXCI+XG4gICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZj4gTGFzdCBOYW1lIDwvdGg+XG4gICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHBlcnNvblwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdF09XCJuYW1lRWRpdFwiXG4gICAgICAgIFttYXRQb3BvdmVyRWRpdENvbnRleHRdPVwie3BlcnNvbjogcGVyc29uLCBmb2N1czogJ2xhc3ROYW1lJ31cIlxuICAgICAgICBbbWF0UG9wb3ZlckVkaXRDb2xzcGFuXT1cIntiZWZvcmU6IDJ9XCI+XG4gICAgICB7e3BlcnNvbi5sYXN0TmFtZX19XG5cbiAgICAgIDxzcGFuICptYXRSb3dIb3ZlckNvbnRlbnQ+XG4gICAgICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdEVkaXRPcGVuPjxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj48L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxuICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuPC90YWJsZT5cbiJdfQ==