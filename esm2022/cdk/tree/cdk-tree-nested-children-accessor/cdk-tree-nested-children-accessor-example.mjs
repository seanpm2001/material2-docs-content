import { ArrayDataSource } from '@angular/cdk/collections';
import { CdkTree, CdkTreeModule } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NESTED_DATA } from '../tree-data';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
function flattenNodes(nodes) {
    const flattenedNodes = [];
    for (const node of nodes) {
        flattenedNodes.push(node);
        if (node.children) {
            flattenedNodes.push(...flattenNodes(node.children));
        }
    }
    return flattenedNodes;
}
/**
 * @title Tree with nested nodes, using childAccessor
 */
export class CdkTreeNestedChildrenAccessorExample {
    constructor() {
        this.childrenAccessor = (dataNode) => dataNode.children ?? [];
        this.dataSource = new ArrayDataSource(NESTED_DATA);
        this.hasChild = (_, node) => !!node.children && node.children.length > 0;
    }
    getParentNode(node) {
        for (const parent of flattenNodes(NESTED_DATA)) {
            if (parent.children?.includes(node)) {
                return parent;
            }
        }
        return null;
    }
    shouldRender(node) {
        // This node should render if it is a root node or if all of its ancestors are expanded.
        const parent = this.getParentNode(node);
        return !parent || (!!this.tree?.isExpanded(parent) && this.shouldRender(parent));
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkTreeNestedChildrenAccessorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.1.0", type: CdkTreeNestedChildrenAccessorExample, isStandalone: true, selector: "cdk-tree-nested-children-accessor-example", viewQueries: [{ propertyName: "tree", first: true, predicate: CdkTree, descendants: true }], ngImport: i0, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\" *cdkTreeNodeDef=\"let node\"\n      class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\"\n      cdkTreeNodeToggle\n      *cdkTreeNodeDef=\"let node; when: hasChild\"\n      [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n      isExpandable\n      class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n  line-height: 40px;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkNestedTreeNode, selector: "cdk-nested-tree-node", exportAs: ["cdkNestedTreeNode"] }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNodeOutlet, selector: "[cdkTreeNodeOutlet]" }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.1.0", ngImport: i0, type: CdkTreeNestedChildrenAccessorExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-nested-children-accessor-example', standalone: true, imports: [CdkTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\" *cdkTreeNodeDef=\"let node\"\n      class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-nested-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-nested-tree-node #treeNode=\"cdkNestedTreeNode\"\n      cdkTreeNodeToggle\n      *cdkTreeNodeDef=\"let node; when: hasChild\"\n      [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n      isExpandable\n      class=\"example-tree-node\">\n    <button mat-icon-button [attr.aria-label]=\"'Toggle ' + node.name\" cdkTreeNodeToggle>\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n    <div [class.example-tree-invisible]=\"!tree.isExpanded(node)\">\n      <ng-container cdkTreeNodeOutlet></ng-container>\n    </div>\n  </cdk-nested-tree-node>\n</cdk-tree>\n", styles: [".example-tree-invisible {\n  display: none;\n}\n\n.example-tree ul,\n.example-tree li {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node {\n  display: block;\n  line-height: 40px;\n}\n\n.example-tree-node .example-tree-node {\n  padding-left: 40px;\n}\n"] }]
        }], propDecorators: { tree: [{
                type: ViewChild,
                args: [CdkTree]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtbmVzdGVkLWNoaWxkcmVuLWFjY2Vzc29yLWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQtY2hpbGRyZW4tYWNjZXNzb3IvY2RrLXRyZWUtbmVzdGVkLWNoaWxkcmVuLWFjY2Vzc29yLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1uZXN0ZWQtY2hpbGRyZW4tYWNjZXNzb3IvY2RrLXRyZWUtbmVzdGVkLWNoaWxkcmVuLWFjY2Vzc29yLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBaUIsV0FBVyxFQUFDLE1BQU0sY0FBYyxDQUFDOzs7OztBQUV6RCxTQUFTLFlBQVksQ0FBQyxLQUF1QjtJQUMzQyxNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7SUFDMUIsS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN6QixjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2xCLGNBQWMsQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQztJQUNILENBQUM7SUFDRCxPQUFPLGNBQWMsQ0FBQztBQUN4QixDQUFDO0FBRUQ7O0dBRUc7QUFTSCxNQUFNLE9BQU8sb0NBQW9DO0lBUmpEO1FBV0UscUJBQWdCLEdBQUcsQ0FBQyxRQUF3QixFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUV6RSxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUMsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLElBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztLQWlCN0Y7SUFmQyxhQUFhLENBQUMsSUFBb0I7UUFDaEMsS0FBSyxNQUFNLE1BQU0sSUFBSSxZQUFZLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQztZQUMvQyxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7Z0JBQ3BDLE9BQU8sTUFBTSxDQUFDO1lBQ2hCLENBQUM7UUFDSCxDQUFDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsWUFBWSxDQUFDLElBQW9CO1FBQy9CLHdGQUF3RjtRQUN4RixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25GLENBQUM7OEdBdkJVLG9DQUFvQztrR0FBcEMsb0NBQW9DLDJJQUNwQyxPQUFPLGdEQzlCcEIsb3BDQTBCQSw2VkRBWSxhQUFhLCtvQkFBRSxlQUFlLDJJQUFFLGFBQWE7OzJGQUc1QyxvQ0FBb0M7a0JBUmhELFNBQVM7K0JBQ0UsMkNBQTJDLGNBR3pDLElBQUksV0FDUCxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxDQUFDLG1CQUN2Qyx1QkFBdUIsQ0FBQyxNQUFNOzhCQUczQixJQUFJO3NCQUF2QixTQUFTO3VCQUFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FycmF5RGF0YVNvdXJjZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7Q2RrVHJlZSwgQ2RrVHJlZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtOZXN0ZWRGb29kTm9kZSwgTkVTVEVEX0RBVEF9IGZyb20gJy4uL3RyZWUtZGF0YSc7XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Ob2Rlcyhub2RlczogTmVzdGVkRm9vZE5vZGVbXSk6IE5lc3RlZEZvb2ROb2RlW10ge1xuICBjb25zdCBmbGF0dGVuZWROb2RlcyA9IFtdO1xuICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICBmbGF0dGVuZWROb2Rlcy5wdXNoKG5vZGUpO1xuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICBmbGF0dGVuZWROb2Rlcy5wdXNoKC4uLmZsYXR0ZW5Ob2Rlcyhub2RlLmNoaWxkcmVuKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmbGF0dGVuZWROb2Rlcztcbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIG5lc3RlZCBub2RlcywgdXNpbmcgY2hpbGRBY2Nlc3NvclxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjZGstdHJlZS1uZXN0ZWQtY2hpbGRyZW4tYWNjZXNzb3ItZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnY2RrLXRyZWUtbmVzdGVkLWNoaWxkcmVuLWFjY2Vzc29yLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstdHJlZS1uZXN0ZWQtY2hpbGRyZW4tYWNjZXNzb3ItZXhhbXBsZS5jc3MnXSxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW0Nka1RyZWVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtUcmVlTmVzdGVkQ2hpbGRyZW5BY2Nlc3NvckV4YW1wbGUge1xuICBAVmlld0NoaWxkKENka1RyZWUpIHRyZWU6IENka1RyZWU8TmVzdGVkRm9vZE5vZGU+O1xuXG4gIGNoaWxkcmVuQWNjZXNzb3IgPSAoZGF0YU5vZGU6IE5lc3RlZEZvb2ROb2RlKSA9PiBkYXRhTm9kZS5jaGlsZHJlbiA/PyBbXTtcblxuICBkYXRhU291cmNlID0gbmV3IEFycmF5RGF0YVNvdXJjZShORVNURURfREFUQSk7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBOZXN0ZWRGb29kTm9kZSkgPT4gISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMDtcblxuICBnZXRQYXJlbnROb2RlKG5vZGU6IE5lc3RlZEZvb2ROb2RlKSB7XG4gICAgZm9yIChjb25zdCBwYXJlbnQgb2YgZmxhdHRlbk5vZGVzKE5FU1RFRF9EQVRBKSkge1xuICAgICAgaWYgKHBhcmVudC5jaGlsZHJlbj8uaW5jbHVkZXMobm9kZSkpIHtcbiAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHNob3VsZFJlbmRlcihub2RlOiBOZXN0ZWRGb29kTm9kZSk6IGJvb2xlYW4ge1xuICAgIC8vIFRoaXMgbm9kZSBzaG91bGQgcmVuZGVyIGlmIGl0IGlzIGEgcm9vdCBub2RlIG9yIGlmIGFsbCBvZiBpdHMgYW5jZXN0b3JzIGFyZSBleHBhbmRlZC5cbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldFBhcmVudE5vZGUobm9kZSk7XG4gICAgcmV0dXJuICFwYXJlbnQgfHwgKCEhdGhpcy50cmVlPy5pc0V4cGFuZGVkKHBhcmVudCkgJiYgdGhpcy5zaG91bGRSZW5kZXIocGFyZW50KSk7XG4gIH1cbn1cbiIsIjxjZGstdHJlZSAjdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW2NoaWxkcmVuQWNjZXNzb3JdPVwiY2hpbGRyZW5BY2Nlc3NvclwiPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgbGVhZiBub2RlcyAtLT5cbiAgPGNkay1uZXN0ZWQtdHJlZS1ub2RlICN0cmVlTm9kZT1cImNka05lc3RlZFRyZWVOb2RlXCIgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGVcIlxuICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtbm9kZVwiPlxuICAgIDwhLS0gdXNlIGEgZGlzYWJsZWQgYnV0dG9uIHRvIHByb3ZpZGUgcGFkZGluZyBmb3IgdHJlZSBsZWFmIC0tPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGRpc2FibGVkPjwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9jZGstbmVzdGVkLXRyZWUtbm9kZT5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGV4cGFuZGFibGUgbm9kZXMgLS0+XG4gIDxjZGstbmVzdGVkLXRyZWUtbm9kZSAjdHJlZU5vZGU9XCJjZGtOZXN0ZWRUcmVlTm9kZVwiXG4gICAgICBjZGtUcmVlTm9kZVRvZ2dsZVxuICAgICAgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGU7IHdoZW46IGhhc0NoaWxkXCJcbiAgICAgIFtjZGtUcmVlTm9kZVR5cGVhaGVhZExhYmVsXT1cIm5vZGUubmFtZVwiXG4gICAgICBpc0V4cGFuZGFibGVcbiAgICAgIGNsYXNzPVwiZXhhbXBsZS10cmVlLW5vZGVcIj5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb2dnbGUgJyArIG5vZGUubmFtZVwiIGNka1RyZWVOb2RlVG9nZ2xlPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWUuaXNFeHBhbmRlZChub2RlKSA/ICdleHBhbmRfbW9yZScgOiAnY2hldnJvbl9yaWdodCd9fVxuICAgICAgPC9tYXQtaWNvbj5cbiAgICA8L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gICAgPGRpdiBbY2xhc3MuZXhhbXBsZS10cmVlLWludmlzaWJsZV09XCIhdHJlZS5pc0V4cGFuZGVkKG5vZGUpXCI+XG4gICAgICA8bmctY29udGFpbmVyIGNka1RyZWVOb2RlT3V0bGV0PjwvbmctY29udGFpbmVyPlxuICAgIDwvZGl2PlxuICA8L2Nkay1uZXN0ZWQtdHJlZS1ub2RlPlxuPC9jZGstdHJlZT5cbiJdfQ==