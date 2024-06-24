import { Component } from '@angular/core';
import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior, } from '@angular/cdk/platform';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/platform";
/**
 * @title Platform overview
 */
export class CdkPlatformOverviewExample {
    constructor(platform) {
        this.platform = platform;
        this.supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
        this.supportsPassiveEventListeners = supportsPassiveEventListeners();
        this.supportsScrollBehavior = supportsScrollBehavior();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: CdkPlatformOverviewExample, deps: [{ token: i1.Platform }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0-next.3", type: CdkPlatformOverviewExample, isStandalone: true, selector: "cdk-platform-overview-example", ngImport: i0, template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0-next.3", ngImport: i0, type: CdkPlatformOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-platform-overview-example', standalone: true, template: "<h2>Platform information:</h2>\n<p>Is Android: {{platform.ANDROID}}</p>\n<p>Is iOS: {{platform.IOS}}</p>\n<p>Is Firefox: {{platform.FIREFOX}}</p>\n<p>Is Blink: {{platform.BLINK}}</p>\n<p>Is Webkit: {{platform.WEBKIT}}</p>\n<p>Is Trident: {{platform.TRIDENT}}</p>\n<p>Is Edge: {{platform.EDGE}}</p>\n<p>Is Safari: {{platform.SAFARI}}</p>\n<p>Supported input types: {{supportedInputTypes}}</p>\n<p>Supports passive event listeners: {{supportsPassiveEventListeners}}</p>\n<p>Supports scroll behavior: {{supportsScrollBehavior}}</p>\n" }]
        }], ctorParameters: () => [{ type: i1.Platform }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBsYXRmb3JtLW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvcGxhdGZvcm0vY2RrLXBsYXRmb3JtLW92ZXJ2aWV3L2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3BsYXRmb3JtL2Nkay1wbGF0Zm9ybS1vdmVydmlldy9jZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixRQUFRLEVBQ1IsNkJBQTZCLEVBQzdCLHNCQUFzQixHQUN2QixNQUFNLHVCQUF1QixDQUFDOzs7QUFFL0I7O0dBRUc7QUFNSCxNQUFNLE9BQU8sMEJBQTBCO0lBS3JDLFlBQW1CLFFBQWtCO1FBQWxCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFKckMsd0JBQW1CLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLGtDQUE2QixHQUFHLDZCQUE2QixFQUFFLENBQUM7UUFDaEUsMkJBQXNCLEdBQUcsc0JBQXNCLEVBQUUsQ0FBQztJQUVWLENBQUM7cUhBTDlCLDBCQUEwQjt5R0FBMUIsMEJBQTBCLHlGQ2hCdkMsb2hCQVlBOztrR0RJYSwwQkFBMEI7a0JBTHRDLFNBQVM7K0JBQ0UsK0JBQStCLGNBRTdCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBnZXRTdXBwb3J0ZWRJbnB1dFR5cGVzLFxuICBQbGF0Zm9ybSxcbiAgc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMsXG4gIHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IsXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5cbi8qKlxuICogQHRpdGxlIFBsYXRmb3JtIG92ZXJ2aWV3XG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1wbGF0Zm9ybS1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstcGxhdGZvcm0tb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrUGxhdGZvcm1PdmVydmlld0V4YW1wbGUge1xuICBzdXBwb3J0ZWRJbnB1dFR5cGVzID0gQXJyYXkuZnJvbShnZXRTdXBwb3J0ZWRJbnB1dFR5cGVzKCkpLmpvaW4oJywgJyk7XG4gIHN1cHBvcnRzUGFzc2l2ZUV2ZW50TGlzdGVuZXJzID0gc3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnMoKTtcbiAgc3VwcG9ydHNTY3JvbGxCZWhhdmlvciA9IHN1cHBvcnRzU2Nyb2xsQmVoYXZpb3IoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxufVxuIiwiPGgyPlBsYXRmb3JtIGluZm9ybWF0aW9uOjwvaDI+XG48cD5JcyBBbmRyb2lkOiB7e3BsYXRmb3JtLkFORFJPSUR9fTwvcD5cbjxwPklzIGlPUzoge3twbGF0Zm9ybS5JT1N9fTwvcD5cbjxwPklzIEZpcmVmb3g6IHt7cGxhdGZvcm0uRklSRUZPWH19PC9wPlxuPHA+SXMgQmxpbms6IHt7cGxhdGZvcm0uQkxJTkt9fTwvcD5cbjxwPklzIFdlYmtpdDoge3twbGF0Zm9ybS5XRUJLSVR9fTwvcD5cbjxwPklzIFRyaWRlbnQ6IHt7cGxhdGZvcm0uVFJJREVOVH19PC9wPlxuPHA+SXMgRWRnZToge3twbGF0Zm9ybS5FREdFfX08L3A+XG48cD5JcyBTYWZhcmk6IHt7cGxhdGZvcm0uU0FGQVJJfX08L3A+XG48cD5TdXBwb3J0ZWQgaW5wdXQgdHlwZXM6IHt7c3VwcG9ydGVkSW5wdXRUeXBlc319PC9wPlxuPHA+U3VwcG9ydHMgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnM6IHt7c3VwcG9ydHNQYXNzaXZlRXZlbnRMaXN0ZW5lcnN9fTwvcD5cbjxwPlN1cHBvcnRzIHNjcm9sbCBiZWhhdmlvcjoge3tzdXBwb3J0c1Njcm9sbEJlaGF2aW9yfX08L3A+XG4iXX0=