import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
/**
 * @title Tab group with asynchronously loading tab contents
 */
export class TabGroupAsyncExample {
    constructor() {
        this.asyncTabs = new Observable((observer) => {
            setTimeout(() => {
                observer.next([
                    { label: 'First', content: 'Content 1' },
                    { label: 'Second', content: 'Content 2' },
                    { label: 'Third', content: 'Content 3' },
                ]);
            }, 1000);
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: TabGroupAsyncExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "18.1.0", type: TabGroupAsyncExample, isStandalone: true, selector: "tab-group-async-example", ngImport: i0, template: "@if ((asyncTabs | async) === null) {\n  Loading tabs...\n}\n\n<mat-tab-group>\n  @for (tab of asyncTabs | async; track tab) {\n    <mat-tab>\n      <ng-template mat-tab-label>{{tab.label}}</ng-template>\n      {{tab.content}}\n    </mat-tab>\n  }\n</mat-tab-group>\n", dependencies: [{ kind: "ngmodule", type: MatTabsModule }, { kind: "directive", type: i1.MatTabLabel, selector: "[mat-tab-label], [matTabLabel]" }, { kind: "component", type: i1.MatTab, selector: "mat-tab", inputs: ["disabled", "label", "aria-label", "aria-labelledby", "labelClass", "bodyClass"], exportAs: ["matTab"] }, { kind: "component", type: i1.MatTabGroup, selector: "mat-tab-group", inputs: ["color", "fitInkBarToContent", "mat-stretch-tabs", "dynamicHeight", "selectedIndex", "headerPosition", "animationDuration", "contentTabIndex", "disablePagination", "disableRipple", "preserveContent", "backgroundColor"], outputs: ["selectedIndexChange", "focusChange", "animationDone", "selectedTabChange"], exportAs: ["matTabGroup"] }, { kind: "pipe", type: AsyncPipe, name: "async" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: TabGroupAsyncExample, decorators: [{
            type: Component,
            args: [{ selector: 'tab-group-async-example', standalone: true, imports: [MatTabsModule, AsyncPipe], template: "@if ((asyncTabs | async) === null) {\n  Loading tabs...\n}\n\n<mat-tab-group>\n  @for (tab of asyncTabs | async; track tab) {\n    <mat-tab>\n      <ng-template mat-tab-label>{{tab.label}}</ng-template>\n      {{tab.content}}\n    </mat-tab>\n  }\n</mat-tab-group>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJzL3RhYi1ncm91cC1hc3luYy90YWItZ3JvdXAtYXN5bmMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLWdyb3VwLWFzeW5jL3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN4QyxPQUFPLEVBQUMsVUFBVSxFQUFXLE1BQU0sTUFBTSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0saUJBQWlCLENBQUM7OztBQU8xQzs7R0FFRztBQU9ILE1BQU0sT0FBTyxvQkFBb0I7SUFHL0I7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxDQUFDLENBQUMsUUFBZ0MsRUFBRSxFQUFFO1lBQ25FLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFDWixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBQztvQkFDdEMsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUM7b0JBQ3ZDLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFDO2lCQUN2QyxDQUFDLENBQUM7WUFDTCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OEdBYlUsb0JBQW9CO2tHQUFwQixvQkFBb0IsbUZDbkJqQyw0UUFZQSwyQ0RLWSxhQUFhLGdzQkFBRSxTQUFTOzsyRkFFdkIsb0JBQW9CO2tCQU5oQyxTQUFTOytCQUNFLHlCQUF5QixjQUV2QixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBPYnNlcnZlcn0gZnJvbSAncnhqcyc7XG5pbXBvcnQge01hdFRhYnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHtBc3luY1BpcGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRXhhbXBsZVRhYiB7XG4gIGxhYmVsOiBzdHJpbmc7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAdGl0bGUgVGFiIGdyb3VwIHdpdGggYXN5bmNocm9ub3VzbHkgbG9hZGluZyB0YWIgY29udGVudHNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLWdyb3VwLWFzeW5jLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYi1ncm91cC1hc3luYy1leGFtcGxlLmh0bWwnLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbTWF0VGFic01vZHVsZSwgQXN5bmNQaXBlXSxcbn0pXG5leHBvcnQgY2xhc3MgVGFiR3JvdXBBc3luY0V4YW1wbGUge1xuICBhc3luY1RhYnM6IE9ic2VydmFibGU8RXhhbXBsZVRhYltdPjtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFzeW5jVGFicyA9IG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcjogT2JzZXJ2ZXI8RXhhbXBsZVRhYltdPikgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIG9ic2VydmVyLm5leHQoW1xuICAgICAgICAgIHtsYWJlbDogJ0ZpcnN0JywgY29udGVudDogJ0NvbnRlbnQgMSd9LFxuICAgICAgICAgIHtsYWJlbDogJ1NlY29uZCcsIGNvbnRlbnQ6ICdDb250ZW50IDInfSxcbiAgICAgICAgICB7bGFiZWw6ICdUaGlyZCcsIGNvbnRlbnQ6ICdDb250ZW50IDMnfSxcbiAgICAgICAgXSk7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9KTtcbiAgfVxufVxuIiwiQGlmICgoYXN5bmNUYWJzIHwgYXN5bmMpID09PSBudWxsKSB7XG4gIExvYWRpbmcgdGFicy4uLlxufVxuXG48bWF0LXRhYi1ncm91cD5cbiAgQGZvciAodGFiIG9mIGFzeW5jVGFicyB8IGFzeW5jOyB0cmFjayB0YWIpIHtcbiAgICA8bWF0LXRhYj5cbiAgICAgIDxuZy10ZW1wbGF0ZSBtYXQtdGFiLWxhYmVsPnt7dGFiLmxhYmVsfX08L25nLXRlbXBsYXRlPlxuICAgICAge3t0YWIuY29udGVudH19XG4gICAgPC9tYXQtdGFiPlxuICB9XG48L21hdC10YWItZ3JvdXA+XG4iXX0=