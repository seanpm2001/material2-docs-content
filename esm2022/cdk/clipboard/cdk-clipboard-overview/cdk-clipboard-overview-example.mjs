import { Component } from '@angular/core';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { FormsModule } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/forms";
import * as i2 from "@angular/cdk/clipboard";
/**
 * @title Clipboard overview
 */
export class CdkClipboardOverviewExample {
    constructor() {
        this.value = `Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not ` +
            `a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord ` +
            `of the Sith, so powerful and so wise he could use the Force to influence the ` +
            `midichlorians to create life… He had such a knowledge of the dark side that he could ` +
            `even keep the ones he cared about from dying. The dark side of the Force is a pathway ` +
            `to many abilities some consider to be unnatural. He became so powerful… the only ` +
            `thing he was afraid of was losing his power, which eventually, of course, he did. ` +
            `Unfortunately, he taught his apprentice everything he knew, then his apprentice ` +
            `killed him in his sleep. Ironic. He could save others from death, but not himself.`;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: CdkClipboardOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.1", type: CdkClipboardOverviewExample, isStandalone: true, selector: "cdk-clipboard-overview-example", ngImport: i0, template: "<label for=\"clipboard-example-textarea\">Text to be copied</label>\n<textarea id=\"clipboard-example-textarea\" cols=\"30\" rows=\"10\" [(ngModel)]=\"value\"></textarea>\n<button [cdkCopyToClipboard]=\"value\">Copy to clipboard</button>\n", styles: ["textarea {\n  display: block;\n  margin: 4px 0 8px;\n}\n"], dependencies: [{ kind: "ngmodule", type: FormsModule }, { kind: "directive", type: i1.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { kind: "directive", type: i1.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { kind: "directive", type: i1.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { kind: "ngmodule", type: ClipboardModule }, { kind: "directive", type: i2.CdkCopyToClipboard, selector: "[cdkCopyToClipboard]", inputs: ["cdkCopyToClipboard", "cdkCopyToClipboardAttempts"], outputs: ["cdkCopyToClipboardCopied"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.1", ngImport: i0, type: CdkClipboardOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-clipboard-overview-example', standalone: true, imports: [FormsModule, ClipboardModule], template: "<label for=\"clipboard-example-textarea\">Text to be copied</label>\n<textarea id=\"clipboard-example-textarea\" cols=\"30\" rows=\"10\" [(ngModel)]=\"value\"></textarea>\n<button [cdkCopyToClipboard]=\"value\">Copy to clipboard</button>\n", styles: ["textarea {\n  display: block;\n  margin: 4px 0 8px;\n}\n"] }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWNsaXBib2FyZC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2NsaXBib2FyZC9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3L2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9jbGlwYm9hcmQvY2RrLWNsaXBib2FyZC1vdmVydmlldy9jZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFFM0M7O0dBRUc7QUFRSCxNQUFNLE9BQU8sMkJBQTJCO0lBUHhDO1FBUUUsVUFBSyxHQUNILG9GQUFvRjtZQUNwRixzRkFBc0Y7WUFDdEYsK0VBQStFO1lBQy9FLHVGQUF1RjtZQUN2Rix3RkFBd0Y7WUFDeEYsbUZBQW1GO1lBQ25GLG9GQUFvRjtZQUNwRixrRkFBa0Y7WUFDbEYsb0ZBQW9GLENBQUM7S0FDeEY7cUhBWFksMkJBQTJCO3lHQUEzQiwyQkFBMkIsMEZDZHhDLGlQQUdBLGlIRFNZLFdBQVcsOG1CQUFFLGVBQWU7O2tHQUUzQiwyQkFBMkI7a0JBUHZDLFNBQVM7K0JBQ0UsZ0NBQWdDLGNBRzlCLElBQUksV0FDUCxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0NsaXBib2FyZE1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NsaXBib2FyZCc7XG5pbXBvcnQge0Zvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbi8qKlxuICogQHRpdGxlIENsaXBib2FyZCBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1jbGlwYm9hcmQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmw6ICdjZGstY2xpcGJvYXJkLW92ZXJ2aWV3LWV4YW1wbGUuY3NzJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLCBDbGlwYm9hcmRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtDbGlwYm9hcmRPdmVydmlld0V4YW1wbGUge1xuICB2YWx1ZSA9XG4gICAgYERpZCB5b3UgZXZlciBoZWFyIHRoZSB0cmFnZWR5IG9mIERhcnRoIFBsYWd1ZWlzIFRoZSBXaXNlPyBJIHRob3VnaHQgbm90LiBJdCdzIG5vdCBgICtcbiAgICBgYSBzdG9yeSB0aGUgSmVkaSB3b3VsZCB0ZWxsIHlvdS4gSXQncyBhIFNpdGggbGVnZW5kLiBEYXJ0aCBQbGFndWVpcyB3YXMgYSBEYXJrIExvcmQgYCArXG4gICAgYG9mIHRoZSBTaXRoLCBzbyBwb3dlcmZ1bCBhbmQgc28gd2lzZSBoZSBjb3VsZCB1c2UgdGhlIEZvcmNlIHRvIGluZmx1ZW5jZSB0aGUgYCArXG4gICAgYG1pZGljaGxvcmlhbnMgdG8gY3JlYXRlIGxpZmXigKYgSGUgaGFkIHN1Y2ggYSBrbm93bGVkZ2Ugb2YgdGhlIGRhcmsgc2lkZSB0aGF0IGhlIGNvdWxkIGAgK1xuICAgIGBldmVuIGtlZXAgdGhlIG9uZXMgaGUgY2FyZWQgYWJvdXQgZnJvbSBkeWluZy4gVGhlIGRhcmsgc2lkZSBvZiB0aGUgRm9yY2UgaXMgYSBwYXRod2F5IGAgK1xuICAgIGB0byBtYW55IGFiaWxpdGllcyBzb21lIGNvbnNpZGVyIHRvIGJlIHVubmF0dXJhbC4gSGUgYmVjYW1lIHNvIHBvd2VyZnVs4oCmIHRoZSBvbmx5IGAgK1xuICAgIGB0aGluZyBoZSB3YXMgYWZyYWlkIG9mIHdhcyBsb3NpbmcgaGlzIHBvd2VyLCB3aGljaCBldmVudHVhbGx5LCBvZiBjb3Vyc2UsIGhlIGRpZC4gYCArXG4gICAgYFVuZm9ydHVuYXRlbHksIGhlIHRhdWdodCBoaXMgYXBwcmVudGljZSBldmVyeXRoaW5nIGhlIGtuZXcsIHRoZW4gaGlzIGFwcHJlbnRpY2UgYCArXG4gICAgYGtpbGxlZCBoaW0gaW4gaGlzIHNsZWVwLiBJcm9uaWMuIEhlIGNvdWxkIHNhdmUgb3RoZXJzIGZyb20gZGVhdGgsIGJ1dCBub3QgaGltc2VsZi5gO1xufVxuIiwiPGxhYmVsIGZvcj1cImNsaXBib2FyZC1leGFtcGxlLXRleHRhcmVhXCI+VGV4dCB0byBiZSBjb3BpZWQ8L2xhYmVsPlxuPHRleHRhcmVhIGlkPVwiY2xpcGJvYXJkLWV4YW1wbGUtdGV4dGFyZWFcIiBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIiBbKG5nTW9kZWwpXT1cInZhbHVlXCI+PC90ZXh0YXJlYT5cbjxidXR0b24gW2Nka0NvcHlUb0NsaXBib2FyZF09XCJ2YWx1ZVwiPkNvcHkgdG8gY2xpcGJvYXJkPC9idXR0b24+XG4iXX0=