import { ArrayDataSource } from '@angular/cdk/collections';
import { CdkTree, CdkTreeModule } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FLAT_DATA } from '../tree-data';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
/**
 * @title Tree with nested nodes
 */
export class CdkTreeNestedLevelAccessorExample {
    constructor() {
        this.levelAccessor = (dataNode) => dataNode.level;
        this.dataSource = new ArrayDataSource(FLAT_DATA);
        this.hasChild = (_, node) => node.expandable;
    }
    getParentNode(node) {
        const nodeIndex = FLAT_DATA.indexOf(node);
        // Determine the node's parent by finding the first preceding node that's
        // one level shallower.
        for (let i = nodeIndex - 1; i >= 0; i--) {
            if (FLAT_DATA[i].level === node.level - 1) {
                return FLAT_DATA[i];
            }
        }
        return null;
    }
    shouldRender(node) {
        // This node should render if it is a root node or if all of its ancestors are expanded.
        const parent = this.getParentNode(node);
        return !parent || (!!this.tree?.isExpanded(parent) && this.shouldRender(parent));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkTreeNestedLevelAccessorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: CdkTreeNestedLevelAccessorExample, isStandalone: true, selector: "cdk-tree-nested-level-accessor-example", viewQueries: [{ propertyName: "tree", first: true, predicate: CdkTree, descendants: true }], ngImport: i0, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [levelAccessor]=\"levelAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\" *cdkTreeNodeDef=\"let node\"\n      class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\"\n      cdkTreeNodeToggle\n      [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n      *cdkTreeNodeDef=\"let node; when: hasChild\"\n      isExpandable\n      class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n  line-height: 40px;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkNestedTreeNode, selector: "cdk-nested-tree-node", exportAs: ["cdkNestedTreeNode"] }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNodeOutlet, selector: "[cdkTreeNodeOutlet]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkTreeNestedLevelAccessorExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-nested-level-accessor-example', standalone: true, imports: [CdkTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [levelAccessor]=\"levelAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\" *cdkTreeNodeDef=\"let node\"\n      class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\"\n      cdkTreeNodeToggle\n      [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n      *cdkTreeNodeDef=\"let node; when: hasChild\"\n      isExpandable\n      class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n  line-height: 40px;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"] }]
        }], propDecorators: { tree: [{
                type: ViewChild,
                args: [CdkTree]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtbmVzdGVkLWxldmVsLWFjY2Vzc29yLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQtbGV2ZWwtYWNjZXNzb3IvY2RrLXRyZWUtbmVzdGVkLWxldmVsLWFjY2Vzc29yLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQtbGV2ZWwtYWNjZXNzb3IvY2RrLXRyZWUtbmVzdGVkLWxldmVsLWFjY2Vzc29yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxTQUFTLEVBQWUsTUFBTSxjQUFjLENBQUM7Ozs7O0FBRXJEOztHQUVHO0FBU0gsTUFBTSxPQUFPLGlDQUFpQztJQVI5QztRQVdFLGtCQUFhLEdBQUcsQ0FBQyxRQUFzQixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBRTNELGVBQVUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU1QyxhQUFRLEdBQUcsQ0FBQyxDQUFTLEVBQUUsSUFBa0IsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztLQXFCL0Q7SUFuQkMsYUFBYSxDQUFDLElBQWtCO1FBQzlCLE1BQU0sU0FBUyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUMseUVBQXlFO1FBQ3pFLHVCQUF1QjtRQUN2QixLQUFLLElBQUksQ0FBQyxHQUFHLFNBQVMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ3hDLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMxQyxPQUFPLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDO1FBQ0gsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFrQjtRQUM3Qix3RkFBd0Y7UUFDeEYsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO3FIQTNCVSxpQ0FBaUM7eUdBQWpDLGlDQUFpQyx3SUFDakMsT0FBTyxnRENuQnBCLDhvQ0EwQkEsNlZEWFksYUFBYSwrb0JBQUUsZUFBZSwySUFBRSxhQUFhOztrR0FHNUMsaUNBQWlDO2tCQVI3QyxTQUFTOytCQUNFLHdDQUF3QyxjQUd0QyxJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyxtQkFDdkMsdUJBQXVCLENBQUMsTUFBTTs4QkFHM0IsSUFBSTtzQkFBdkIsU0FBUzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcnJheURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0Nka1RyZWUsIENka1RyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7RkxBVF9EQVRBLCBGbGF0Rm9vZE5vZGV9IGZyb20gJy4uL3RyZWUtZGF0YSc7XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBuZXN0ZWQgbm9kZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRyZWUtbmVzdGVkLWxldmVsLWFjY2Vzc29yLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay10cmVlLW5lc3RlZC1sZXZlbC1hY2Nlc3Nvci1leGFtcGxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY2RrLXRyZWUtbmVzdGVkLWxldmVsLWFjY2Vzc29yLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtUcmVlTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZU5lc3RlZExldmVsQWNjZXNzb3JFeGFtcGxlIHtcbiAgQFZpZXdDaGlsZChDZGtUcmVlKSB0cmVlOiBDZGtUcmVlPEZsYXRGb29kTm9kZT47XG5cbiAgbGV2ZWxBY2Nlc3NvciA9IChkYXRhTm9kZTogRmxhdEZvb2ROb2RlKSA9PiBkYXRhTm9kZS5sZXZlbDtcblxuICBkYXRhU291cmNlID0gbmV3IEFycmF5RGF0YVNvdXJjZShGTEFUX0RBVEEpO1xuXG4gIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogRmxhdEZvb2ROb2RlKSA9PiBub2RlLmV4cGFuZGFibGU7XG5cbiAgZ2V0UGFyZW50Tm9kZShub2RlOiBGbGF0Rm9vZE5vZGUpIHtcbiAgICBjb25zdCBub2RlSW5kZXggPSBGTEFUX0RBVEEuaW5kZXhPZihub2RlKTtcblxuICAgIC8vIERldGVybWluZSB0aGUgbm9kZSdzIHBhcmVudCBieSBmaW5kaW5nIHRoZSBmaXJzdCBwcmVjZWRpbmcgbm9kZSB0aGF0J3NcbiAgICAvLyBvbmUgbGV2ZWwgc2hhbGxvd2VyLlxuICAgIGZvciAobGV0IGkgPSBub2RlSW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKEZMQVRfREFUQVtpXS5sZXZlbCA9PT0gbm9kZS5sZXZlbCAtIDEpIHtcbiAgICAgICAgcmV0dXJuIEZMQVRfREFUQVtpXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNob3VsZFJlbmRlcihub2RlOiBGbGF0Rm9vZE5vZGUpOiBib29sZWFuIHtcbiAgICAvLyBUaGlzIG5vZGUgc2hvdWxkIHJlbmRlciBpZiBpdCBpcyBhIHJvb3Qgbm9kZSBvciBpZiBhbGwgb2YgaXRzIGFuY2VzdG9ycyBhcmUgZXhwYW5kZWQuXG4gICAgY29uc3QgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlKG5vZGUpO1xuICAgIHJldHVybiAhcGFyZW50IHx8ICghIXRoaXMudHJlZT8uaXNFeHBhbmRlZChwYXJlbnQpICYmIHRoaXMuc2hvdWxkUmVuZGVyKHBhcmVudCkpO1xuICB9XG59XG4iLCI8Y2RrLXRyZWUgI3RyZWUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIFtsZXZlbEFjY2Vzc29yXT1cImxldmVsQWNjZXNzb3JcIj5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGxlYWYgbm9kZXMgLS0+XG4gIDxjZGstbmVzdGVkLXRyZWUtbm9kZSAjdHJlZU5vZGU9XCJjZGtOZXN0ZWRUcmVlTm9kZVwiICpjZGtUcmVlTm9kZURlZj1cImxldCBub2RlXCJcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS10cmVlLW5vZGVcIj5cbiAgICA8IS0tIHVzZSBhIGRpc2FibGVkIGJ1dHRvbiB0byBwcm92aWRlIHBhZGRpbmcgZm9yIHRyZWUgbGVhZiAtLT5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gIDwvY2RrLW5lc3RlZC10cmVlLW5vZGU+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBleHBhbmRhYmxlIG5vZGVzIC0tPlxuICA8Y2RrLW5lc3RlZC10cmVlLW5vZGUgI3RyZWVOb2RlPVwiY2RrTmVzdGVkVHJlZU5vZGVcIlxuICAgICAgY2RrVHJlZU5vZGVUb2dnbGVcbiAgICAgIFtjZGtUcmVlTm9kZVR5cGVhaGVhZExhYmVsXT1cIm5vZGUubmFtZVwiXG4gICAgICAqY2RrVHJlZU5vZGVEZWY9XCJsZXQgbm9kZTsgd2hlbjogaGFzQ2hpbGRcIlxuICAgICAgaXNFeHBhbmRhYmxlXG4gICAgICBjbGFzcz1cImV4YW1wbGUtdHJlZS1ub2RlXCI+XG4gICAgPGJ1dHRvbiBtYXQtaWNvbi1idXR0b24gW2F0dHIuYXJpYS1sYWJlbF09XCInVG9nZ2xlICcgKyBub2RlLm5hbWVcIiBjZGtUcmVlTm9kZVRvZ2dsZT5cbiAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLXJ0bC1taXJyb3JcIj5cbiAgICAgICAge3t0cmVlLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICAgIDxkaXYgW2NsYXNzLmV4YW1wbGUtdHJlZS1pbnZpc2libGVdPVwiIXRyZWUuaXNFeHBhbmRlZChub2RlKVwiPlxuICAgICAgPG5nLWNvbnRhaW5lciBjZGtUcmVlTm9kZU91dGxldD48L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgPC9jZGstbmVzdGVkLXRyZWUtbm9kZT5cbjwvY2RrLXRyZWU+XG4iXX0=