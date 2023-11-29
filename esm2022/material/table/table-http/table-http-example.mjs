import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DatePipe } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/material/progress-spinner";
import * as i3 from "@angular/material/table";
import * as i4 from "@angular/material/sort";
import * as i5 from "@angular/material/paginator";
/**
 * @title Table retrieving data through HTTP
 */
export class TableHttpExample {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.displayedColumns = ['created', 'state', 'number', 'title'];
        this.data = [];
        this.resultsLength = 0;
        this.isLoadingResults = true;
        this.isRateLimitReached = false;
    }
    ngAfterViewInit() {
        this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);
        // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
        merge(this.sort.sortChange, this.paginator.page)
            .pipe(startWith({}), switchMap(() => {
            this.isLoadingResults = true;
            return this.exampleDatabase.getRepoIssues(this.sort.active, this.sort.direction, this.paginator.pageIndex).pipe(catchError(() => observableOf(null)));
        }), map(data => {
            // Flip flag to show that loading has finished.
            this.isLoadingResults = false;
            this.isRateLimitReached = data === null;
            if (data === null) {
                return [];
            }
            // Only refresh the result length if there is new data. In case of rate
            // limit errors, we do not want to reset the paginator to zero, as that
            // would prevent users from re-triggering requests.
            this.resultsLength = data.total_count;
            return data.items;
        }))
            .subscribe(data => (this.data = data));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableHttpExample, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.0.0", version: "17.0.4", type: TableHttpExample, isStandalone: true, selector: "table-http-example", viewQueries: [{ propertyName: "paginator", first: true, predicate: MatPaginator, descendants: true }, { propertyName: "sort", first: true, predicate: MatSort, descendants: true }], ngImport: i0, template: "<div class=\"example-container mat-elevation-z8\">\n  @if (isLoadingResults || isRateLimitReached) {\n    <div class=\"example-loading-shade\">\n      @if (isLoadingResults) {\n        <mat-spinner></mat-spinner>\n      }\n      @if (isRateLimitReached) {\n        <div class=\"example-rate-limit-reached\">\n          GitHub's API rate limit has been reached. It will be reset in one minute.\n        </div>\n      }\n    </div>\n  }\n\n  <div class=\"example-table-container\">\n\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n           matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\n      <!-- Number Column -->\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>#</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>Title</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\n      </ng-container>\n\n      <!-- State Column -->\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef>State</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\n      </ng-container>\n\n      <!-- Created Column -->\n      <ng-container matColumnDef=\"created\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n          Created\n        </th>\n        <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\" aria-label=\"Select page of GitHub search results\"></mat-paginator>\n</div>\n", styles: ["/* Structure */\n.example-container {\n  position: relative;\n}\n\n.example-table-container {\n  position: relative;\n  min-height: 200px;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached {\n  max-width: 360px;\n  text-align: center;\n}\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n\n.mat-column-created {\n  max-width: 124px;\n}\n"], dependencies: [{ kind: "ngmodule", type: MatProgressSpinnerModule }, { kind: "component", type: i2.MatProgressSpinner, selector: "mat-progress-spinner, mat-spinner", inputs: ["color", "mode", "value", "diameter", "strokeWidth"], exportAs: ["matProgressSpinner"] }, { kind: "ngmodule", type: MatTableModule }, { kind: "component", type: i3.MatTable, selector: "mat-table, table[mat-table]", exportAs: ["matTable"] }, { kind: "directive", type: i3.MatHeaderCellDef, selector: "[matHeaderCellDef]" }, { kind: "directive", type: i3.MatHeaderRowDef, selector: "[matHeaderRowDef]", inputs: ["matHeaderRowDef", "matHeaderRowDefSticky"] }, { kind: "directive", type: i3.MatColumnDef, selector: "[matColumnDef]", inputs: ["sticky", "matColumnDef"] }, { kind: "directive", type: i3.MatCellDef, selector: "[matCellDef]" }, { kind: "directive", type: i3.MatRowDef, selector: "[matRowDef]", inputs: ["matRowDefColumns", "matRowDefWhen"] }, { kind: "directive", type: i3.MatHeaderCell, selector: "mat-header-cell, th[mat-header-cell]" }, { kind: "directive", type: i3.MatCell, selector: "mat-cell, td[mat-cell]" }, { kind: "component", type: i3.MatHeaderRow, selector: "mat-header-row, tr[mat-header-row]", exportAs: ["matHeaderRow"] }, { kind: "component", type: i3.MatRow, selector: "mat-row, tr[mat-row]", exportAs: ["matRow"] }, { kind: "ngmodule", type: MatSortModule }, { kind: "directive", type: i4.MatSort, selector: "[matSort]", inputs: ["matSortActive", "matSortStart", "matSortDirection", "matSortDisableClear", "matSortDisabled"], outputs: ["matSortChange"], exportAs: ["matSort"] }, { kind: "component", type: i4.MatSortHeader, selector: "[mat-sort-header]", inputs: ["mat-sort-header", "arrowPosition", "start", "disabled", "sortActionDescription", "disableClear"], exportAs: ["matSortHeader"] }, { kind: "ngmodule", type: MatPaginatorModule }, { kind: "component", type: i5.MatPaginator, selector: "mat-paginator", inputs: ["color", "pageIndex", "length", "pageSize", "pageSizeOptions", "hidePageSize", "showFirstLastButtons", "selectConfig", "disabled"], outputs: ["page"], exportAs: ["matPaginator"] }, { kind: "pipe", type: DatePipe, name: "date" }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.4", ngImport: i0, type: TableHttpExample, decorators: [{
            type: Component,
            args: [{ selector: 'table-http-example', standalone: true, imports: [MatProgressSpinnerModule, MatTableModule, MatSortModule, MatPaginatorModule, DatePipe], template: "<div class=\"example-container mat-elevation-z8\">\n  @if (isLoadingResults || isRateLimitReached) {\n    <div class=\"example-loading-shade\">\n      @if (isLoadingResults) {\n        <mat-spinner></mat-spinner>\n      }\n      @if (isRateLimitReached) {\n        <div class=\"example-rate-limit-reached\">\n          GitHub's API rate limit has been reached. It will be reset in one minute.\n        </div>\n      }\n    </div>\n  }\n\n  <div class=\"example-table-container\">\n\n    <table mat-table [dataSource]=\"data\" class=\"example-table\"\n           matSort matSortActive=\"created\" matSortDisableClear matSortDirection=\"desc\">\n      <!-- Number Column -->\n      <ng-container matColumnDef=\"number\">\n        <th mat-header-cell *matHeaderCellDef>#</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.number}}</td>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"title\">\n        <th mat-header-cell *matHeaderCellDef>Title</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.title}}</td>\n      </ng-container>\n\n      <!-- State Column -->\n      <ng-container matColumnDef=\"state\">\n        <th mat-header-cell *matHeaderCellDef>State</th>\n        <td mat-cell *matCellDef=\"let row\">{{row.state}}</td>\n      </ng-container>\n\n      <!-- Created Column -->\n      <ng-container matColumnDef=\"created\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header disableClear>\n          Created\n        </th>\n        <td mat-cell *matCellDef=\"let row\">{{row.created_at | date}}</td>\n      </ng-container>\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </div>\n\n  <mat-paginator [length]=\"resultsLength\" [pageSize]=\"30\" aria-label=\"Select page of GitHub search results\"></mat-paginator>\n</div>\n", styles: ["/* Structure */\n.example-container {\n  position: relative;\n}\n\n.example-table-container {\n  position: relative;\n  min-height: 200px;\n  max-height: 400px;\n  overflow: auto;\n}\n\ntable {\n  width: 100%;\n}\n\n.example-loading-shade {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 56px;\n  right: 0;\n  background: rgba(0, 0, 0, 0.15);\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-rate-limit-reached {\n  max-width: 360px;\n  text-align: center;\n}\n\n/* Column Widths */\n.mat-column-number,\n.mat-column-state {\n  max-width: 64px;\n}\n\n.mat-column-created {\n  max-width: 124px;\n}\n"] }]
        }], ctorParameters: () => [{ type: i1.HttpClient }], propDecorators: { paginator: [{
                type: ViewChild,
                args: [MatPaginator]
            }], sort: [{
                type: ViewChild,
                args: [MatSort]
            }] } });
/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
    getRepoIssues(sort, order, page) {
        const href = 'https://api.github.com/search/issues';
        const requestUrl = `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;
        return this._httpClient.get(requestUrl);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaHR0cC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvdGFibGUvdGFibGUtaHR0cC90YWJsZS1odHRwLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90YWJsZS90YWJsZS1odHRwL3RhYmxlLWh0dHAtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNoRCxPQUFPLEVBQUMsU0FBUyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFDLFlBQVksRUFBRSxrQkFBa0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQzdFLE9BQU8sRUFBQyxPQUFPLEVBQUUsYUFBYSxFQUFnQixNQUFNLHdCQUF3QixDQUFDO0FBQzdFLE9BQU8sRUFBQyxLQUFLLEVBQWMsRUFBRSxJQUFJLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzRCxPQUFPLEVBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzVFLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7OztBQUV6Qzs7R0FFRztBQVFILE1BQU0sT0FBTyxnQkFBZ0I7SUFZM0IsWUFBb0IsV0FBdUI7UUFBdkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFYM0MscUJBQWdCLEdBQWEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxP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c0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0UGFnaW5hdG9yLCBNYXRQYWdpbmF0b3JNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3BhZ2luYXRvcic7XG5pbXBvcnQge01hdFNvcnQsIE1hdFNvcnRNb2R1bGUsIFNvcnREaXJlY3Rpb259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xuaW1wb3J0IHttZXJnZSwgT2JzZXJ2YWJsZSwgb2YgYXMgb2JzZXJ2YWJsZU9mfSBmcm9tICdyeGpzJztcbmltcG9ydCB7Y2F0Y2hFcnJvciwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtNYXRUYWJsZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xuaW1wb3J0IHtNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHtEYXRlUGlwZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuLyoqXG4gKiBAdGl0bGUgVGFibGUgcmV0cmlldmluZyBkYXRhIHRocm91Z2ggSFRUUFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0YWJsZS1odHRwLWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsndGFibGUtaHR0cC1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLWh0dHAtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSwgTWF0VGFibGVNb2R1bGUsIE1hdFNvcnRNb2R1bGUsIE1hdFBhZ2luYXRvck1vZHVsZSwgRGF0ZVBpcGVdLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZUh0dHBFeGFtcGxlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gWydjcmVhdGVkJywgJ3N0YXRlJywgJ251bWJlcicsICd0aXRsZSddO1xuICBleGFtcGxlRGF0YWJhc2U6IEV4YW1wbGVIdHRwRGF0YWJhc2UgfCBudWxsO1xuICBkYXRhOiBHaXRodWJJc3N1ZVtdID0gW107XG5cbiAgcmVzdWx0c0xlbmd0aCA9IDA7XG4gIGlzTG9hZGluZ1Jlc3VsdHMgPSB0cnVlO1xuICBpc1JhdGVMaW1pdFJlYWNoZWQgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmV4YW1wbGVEYXRhYmFzZSA9IG5ldyBFeGFtcGxlSHR0cERhdGFiYXNlKHRoaXMuX2h0dHBDbGllbnQpO1xuXG4gICAgLy8gSWYgdGhlIHVzZXIgY2hhbmdlcyB0aGUgc29ydCBvcmRlciwgcmVzZXQgYmFjayB0byB0aGUgZmlyc3QgcGFnZS5cbiAgICB0aGlzLnNvcnQuc29ydENoYW5nZS5zdWJzY3JpYmUoKCkgPT4gKHRoaXMucGFnaW5hdG9yLnBhZ2VJbmRleCA9IDApKTtcblxuICAgIG1lcmdlKHRoaXMuc29ydC5zb3J0Q2hhbmdlLCB0aGlzLnBhZ2luYXRvci5wYWdlKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh7fSksXG4gICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pc0xvYWRpbmdSZXN1bHRzID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5leGFtcGxlRGF0YWJhc2UhLmdldFJlcG9Jc3N1ZXMoXG4gICAgICAgICAgICB0aGlzLnNvcnQuYWN0aXZlLFxuICAgICAgICAgICAgdGhpcy5zb3J0LmRpcmVjdGlvbixcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLnBhZ2VJbmRleCxcbiAgICAgICAgICApLnBpcGUoY2F0Y2hFcnJvcigoKSA9PiBvYnNlcnZhYmxlT2YobnVsbCkpKTtcbiAgICAgICAgfSksXG4gICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAvLyBGbGlwIGZsYWcgdG8gc2hvdyB0aGF0IGxvYWRpbmcgaGFzIGZpbmlzaGVkLlxuICAgICAgICAgIHRoaXMuaXNMb2FkaW5nUmVzdWx0cyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuaXNSYXRlTGltaXRSZWFjaGVkID0gZGF0YSA9PT0gbnVsbDtcblxuICAgICAgICAgIGlmIChkYXRhID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gT25seSByZWZyZXNoIHRoZSByZXN1bHQgbGVuZ3RoIGlmIHRoZXJlIGlzIG5ldyBkYXRhLiBJbiBjYXNlIG9mIHJhdGVcbiAgICAgICAgICAvLyBsaW1pdCBlcnJvcnMsIHdlIGRvIG5vdCB3YW50IHRvIHJlc2V0IHRoZSBwYWdpbmF0b3IgdG8gemVybywgYXMgdGhhdFxuICAgICAgICAgIC8vIHdvdWxkIHByZXZlbnQgdXNlcnMgZnJvbSByZS10cmlnZ2VyaW5nIHJlcXVlc3RzLlxuICAgICAgICAgIHRoaXMucmVzdWx0c0xlbmd0aCA9IGRhdGEudG90YWxfY291bnQ7XG4gICAgICAgICAgcmV0dXJuIGRhdGEuaXRlbXM7XG4gICAgICAgIH0pLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+ICh0aGlzLmRhdGEgPSBkYXRhKSk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBHaXRodWJBcGkge1xuICBpdGVtczogR2l0aHViSXNzdWVbXTtcbiAgdG90YWxfY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBHaXRodWJJc3N1ZSB7XG4gIGNyZWF0ZWRfYXQ6IHN0cmluZztcbiAgbnVtYmVyOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG59XG5cbi8qKiBBbiBleGFtcGxlIGRhdGFiYXNlIHRoYXQgdGhlIGRhdGEgc291cmNlIHVzZXMgdG8gcmV0cmlldmUgZGF0YSBmb3IgdGhlIHRhYmxlLiAqL1xuZXhwb3J0IGNsYXNzIEV4YW1wbGVIdHRwRGF0YWJhc2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwQ2xpZW50OiBIdHRwQ2xpZW50KSB7fVxuXG4gIGdldFJlcG9Jc3N1ZXMoc29ydDogc3RyaW5nLCBvcmRlcjogU29ydERpcmVjdGlvbiwgcGFnZTogbnVtYmVyKTogT2JzZXJ2YWJsZTxHaXRodWJBcGk+IHtcbiAgICBjb25zdCBocmVmID0gJ2h0dHBzOi8vYXBpLmdpdGh1Yi5jb20vc2VhcmNoL2lzc3Vlcyc7XG4gICAgY29uc3QgcmVxdWVzdFVybCA9IGAke2hyZWZ9P3E9cmVwbzphbmd1bGFyL2NvbXBvbmVudHMmc29ydD0ke3NvcnR9Jm9yZGVyPSR7b3JkZXJ9JnBhZ2U9JHtcbiAgICAgIHBhZ2UgKyAxXG4gICAgfWA7XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cENsaWVudC5nZXQ8R2l0aHViQXBpPihyZXF1ZXN0VXJsKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtY29udGFpbmVyIG1hdC1lbGV2YXRpb24tejhcIj5cbiAgQGlmIChpc0xvYWRpbmdSZXN1bHRzIHx8IGlzUmF0ZUxpbWl0UmVhY2hlZCkge1xuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWxvYWRpbmctc2hhZGVcIj5cbiAgICAgIEBpZiAoaXNMb2FkaW5nUmVzdWx0cykge1xuICAgICAgICA8bWF0LXNwaW5uZXI+PC9tYXQtc3Bpbm5lcj5cbiAgICAgIH1cbiAgICAgIEBpZiAoaXNSYXRlTGltaXRSZWFjaGVkKSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLXJhdGUtbGltaXQtcmVhY2hlZFwiPlxuICAgICAgICAgIEdpdEh1YidzIEFQSSByYXRlIGxpbWl0IGhhcyBiZWVuIHJlYWNoZWQuIEl0IHdpbGwgYmUgcmVzZXQgaW4gb25lIG1pbnV0ZS5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIH1cblxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS10YWJsZS1jb250YWluZXJcIj5cblxuICAgIDx0YWJsZSBtYXQtdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVwiIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiXG4gICAgICAgICAgIG1hdFNvcnQgbWF0U29ydEFjdGl2ZT1cImNyZWF0ZWRcIiBtYXRTb3J0RGlzYWJsZUNsZWFyIG1hdFNvcnREaXJlY3Rpb249XCJkZXNjXCI+XG4gICAgICA8IS0tIE51bWJlciBDb2x1bW4gLS0+XG4gICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIm51bWJlclwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPiM8L3RoPlxuICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgcm93XCI+e3tyb3cubnVtYmVyfX08L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDwhLS0gVGl0bGUgQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ0aXRsZVwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlRpdGxlPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPnt7cm93LnRpdGxlfX08L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDwhLS0gU3RhdGUgQ29sdW1uIC0tPlxuICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJzdGF0ZVwiPlxuICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmPlN0YXRlPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPnt7cm93LnN0YXRlfX08L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDwhLS0gQ3JlYXRlZCBDb2x1bW4gLS0+XG4gICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImNyZWF0ZWRcIj5cbiAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBtYXQtc29ydC1oZWFkZXIgZGlzYWJsZUNsZWFyPlxuICAgICAgICAgIENyZWF0ZWRcbiAgICAgICAgPC90aD5cbiAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IHJvd1wiPnt7cm93LmNyZWF0ZWRfYXQgfCBkYXRlfX08L3RkPlxuICAgICAgPC9uZy1jb250YWluZXI+XG5cbiAgICAgIDx0ciBtYXQtaGVhZGVyLXJvdyAqbWF0SGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxuICAgIDwvdGFibGU+XG4gIDwvZGl2PlxuXG4gIDxtYXQtcGFnaW5hdG9yIFtsZW5ndGhdPVwicmVzdWx0c0xlbmd0aFwiIFtwYWdlU2l6ZV09XCIzMFwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZSBvZiBHaXRIdWIgc2VhcmNoIHJlc3VsdHNcIj48L21hdC1wYWdpbmF0b3I+XG48L2Rpdj5cbiJdfQ==