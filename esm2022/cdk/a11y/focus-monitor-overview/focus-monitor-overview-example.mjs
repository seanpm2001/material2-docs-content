import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, NgZone, ViewChild, } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/a11y";
/** @title Monitoring focus with FocusMonitor */
export class FocusMonitorOverviewExample {
    constructor(_focusMonitor, _cdr, _ngZone) {
        this._focusMonitor = _focusMonitor;
        this._cdr = _cdr;
        this._ngZone = _ngZone;
        this.elementOrigin = this.formatOrigin(null);
        this.subtreeOrigin = this.formatOrigin(null);
    }
    ngAfterViewInit() {
        this._focusMonitor.monitor(this.element).subscribe(origin => this._ngZone.run(() => {
            this.elementOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }));
        this._focusMonitor.monitor(this.subtree, true).subscribe(origin => this._ngZone.run(() => {
            this.subtreeOrigin = this.formatOrigin(origin);
            this._cdr.markForCheck();
        }));
    }
    ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.element);
        this._focusMonitor.stopMonitoring(this.subtree);
    }
    formatOrigin(origin) {
        return origin ? origin + ' focused' : 'blurred';
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: FocusMonitorOverviewExample, deps: [{ token: i1.FocusMonitor }, { token: i0.ChangeDetectorRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: FocusMonitorOverviewExample, isStandalone: true, selector: "focus-monitor-overview-example", viewQueries: [{ propertyName: "element", first: true, predicate: ["element"], descendants: true }, { propertyName: "subtree", first: true, predicate: ["subtree"], descendants: true }], ngImport: i0, template: "<div class=\"example-focus-monitor\">\n  <button #element>Focus Monitored Element ({{elementOrigin}})</button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div #subtree>\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n", styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: FocusMonitorOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'focus-monitor-overview-example', standalone: true, template: "<div class=\"example-focus-monitor\">\n  <button #element>Focus Monitored Element ({{elementOrigin}})</button>\n</div>\n\n<div class=\"example-focus-monitor\">\n  <div #subtree>\n    <p>Focus Monitored Subtree ({{subtreeOrigin}})</p>\n    <button>Child Button 1</button>\n    <button>Child Button 2</button>\n  </div>\n</div>\n", styles: [".example-focus-monitor {\n  padding: 20px;\n}\n\n.example-focus-monitor .cdk-mouse-focused {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-keyboard-focused {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor .cdk-touch-focused {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor .cdk-program-focused {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton {\n  margin-right: 12px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.FocusMonitor }, { type: i0.ChangeDetectorRef }, { type: i0.NgZone }], propDecorators: { element: [{
                type: ViewChild,
                args: ['element']
            }], subtree: [{
                type: ViewChild,
                args: ['subtree']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL2ExMXkvZm9jdXMtbW9uaXRvci1vdmVydmlldy9mb2N1cy1tb25pdG9yLW92ZXJ2aWV3LWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvYTExeS9mb2N1cy1tb25pdG9yLW92ZXJ2aWV3L2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxZQUFZLEVBQWMsTUFBTSxtQkFBbUIsQ0FBQztBQUM1RCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUVOLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQzs7O0FBRXZCLGdEQUFnRDtBQU9oRCxNQUFNLE9BQU8sMkJBQTJCO0lBT3RDLFlBQ1UsYUFBMkIsRUFDM0IsSUFBdUIsRUFDdkIsT0FBZTtRQUZmLGtCQUFhLEdBQWIsYUFBYSxDQUFjO1FBQzNCLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQ3ZCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFOekIsa0JBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLGtCQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQU1yQyxDQUFDO0lBRUosZUFBZTtRQUNiLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7WUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsWUFBWSxDQUFDLE1BQW1CO1FBQzlCLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDbEQsQ0FBQztxSEFuQ1UsMkJBQTJCO3lHQUEzQiwyQkFBMkIsbVJDbEJ4Qyx5VUFXQTs7a0dET2EsMkJBQTJCO2tCQU52QyxTQUFTOytCQUNFLGdDQUFnQyxjQUc5QixJQUFJO3NJQUdNLE9BQU87c0JBQTVCLFNBQVM7dUJBQUMsU0FBUztnQkFDRSxPQUFPO3NCQUE1QixTQUFTO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ZvY3VzTW9uaXRvciwgRm9jdXNPcmlnaW59IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogQHRpdGxlIE1vbml0b3JpbmcgZm9jdXMgd2l0aCBGb2N1c01vbml0b3IgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXctZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnZm9jdXMtbW9uaXRvci1vdmVydmlldy1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybDogJ2ZvY3VzLW1vbml0b3Itb3ZlcnZpZXctZXhhbXBsZS5jc3MnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxufSlcbmV4cG9ydCBjbGFzcyBGb2N1c01vbml0b3JPdmVydmlld0V4YW1wbGUgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdlbGVtZW50JykgZWxlbWVudDogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG4gIEBWaWV3Q2hpbGQoJ3N1YnRyZWUnKSBzdWJ0cmVlOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PjtcblxuICBlbGVtZW50T3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4obnVsbCk7XG4gIHN1YnRyZWVPcmlnaW4gPSB0aGlzLmZvcm1hdE9yaWdpbihudWxsKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9mb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcbiAgICBwcml2YXRlIF9jZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX25nWm9uZTogTmdab25lLFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudCkuc3Vic2NyaWJlKG9yaWdpbiA9PlxuICAgICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuZWxlbWVudE9yaWdpbiA9IHRoaXMuZm9ybWF0T3JpZ2luKG9yaWdpbik7XG4gICAgICAgIHRoaXMuX2Nkci5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5fZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5zdWJ0cmVlLCB0cnVlKS5zdWJzY3JpYmUob3JpZ2luID0+XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdWJ0cmVlT3JpZ2luID0gdGhpcy5mb3JtYXRPcmlnaW4ob3JpZ2luKTtcbiAgICAgICAgdGhpcy5fY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSksXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLmVsZW1lbnQpO1xuICAgIHRoaXMuX2ZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLnN1YnRyZWUpO1xuICB9XG5cbiAgZm9ybWF0T3JpZ2luKG9yaWdpbjogRm9jdXNPcmlnaW4pOiBzdHJpbmcge1xuICAgIHJldHVybiBvcmlnaW4gPyBvcmlnaW4gKyAnIGZvY3VzZWQnIDogJ2JsdXJyZWQnO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZXhhbXBsZS1mb2N1cy1tb25pdG9yXCI+XG4gIDxidXR0b24gI2VsZW1lbnQ+Rm9jdXMgTW9uaXRvcmVkIEVsZW1lbnQgKHt7ZWxlbWVudE9yaWdpbn19KTwvYnV0dG9uPlxuPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJleGFtcGxlLWZvY3VzLW1vbml0b3JcIj5cbiAgPGRpdiAjc3VidHJlZT5cbiAgICA8cD5Gb2N1cyBNb25pdG9yZWQgU3VidHJlZSAoe3tzdWJ0cmVlT3JpZ2lufX0pPC9wPlxuICAgIDxidXR0b24+Q2hpbGQgQnV0dG9uIDE8L2J1dHRvbj5cbiAgICA8YnV0dG9uPkNoaWxkIEJ1dHRvbiAyPC9idXR0b24+XG4gIDwvZGl2PlxuPC9kaXY+XG4iXX0=