import { ArrayDataSource } from '@angular/cdk/collections';
import { CdkTree, CdkTreeModule } from '@angular/cdk/tree';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { timer } from 'rxjs';
import { mapTo } from 'rxjs/operators';
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
 * @title Tree with flat nodes
 */
export class CdkTreeFlatChildrenAccessorExample {
    constructor() {
        this.childrenAccessor = (dataNode) => timer(100).pipe(mapTo(dataNode.children ?? []));
        this.dataSource = new ArrayDataSource(NESTED_DATA);
        this.hasChild = (_, node) => !!node.children?.length;
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
        let parent = this.getParentNode(node);
        while (parent) {
            if (!this.tree.isExpanded(parent)) {
                return false;
            }
            parent = this.getParentNode(parent);
        }
        return true;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkTreeFlatChildrenAccessorExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "18.2.0-next.2", type: CdkTreeFlatChildrenAccessorExample, isStandalone: true, selector: "cdk-tree-flat-children-accessor-example", viewQueries: [{ propertyName: "tree", first: true, predicate: CdkTree, descendants: true }], ngImport: i0, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 [isExpandable]=\"true\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"], dependencies: [{ kind: "ngmodule", type: CdkTreeModule }, { kind: "directive", type: i1.CdkTreeNodeDef, selector: "[cdkTreeNodeDef]", inputs: ["cdkTreeNodeDefWhen"] }, { kind: "directive", type: i1.CdkTreeNodePadding, selector: "[cdkTreeNodePadding]", inputs: ["cdkTreeNodePadding", "cdkTreeNodePaddingIndent"] }, { kind: "directive", type: i1.CdkTreeNodeToggle, selector: "[cdkTreeNodeToggle]", inputs: ["cdkTreeNodeToggleRecursive"] }, { kind: "component", type: i1.CdkTree, selector: "cdk-tree", inputs: ["dataSource", "treeControl", "levelAccessor", "childrenAccessor", "trackBy", "expansionKey"], exportAs: ["cdkTree"] }, { kind: "directive", type: i1.CdkTreeNode, selector: "cdk-tree-node", inputs: ["role", "isExpandable", "isExpanded", "isDisabled", "cdkTreeNodeTypeaheadLabel"], outputs: ["activation", "expandedChange"], exportAs: ["cdkTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.0-next.2", ngImport: i0, type: CdkTreeFlatChildrenAccessorExample, decorators: [{
            type: Component,
            args: [{ selector: 'cdk-tree-flat-children-accessor-example', standalone: true, imports: [CdkTreeModule, MatButtonModule, MatIconModule], changeDetection: ChangeDetectionStrategy.OnPush, template: "<cdk-tree #tree [dataSource]=\"dataSource\" [childrenAccessor]=\"childrenAccessor\">\n  <!-- This is the tree node template for leaf nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node\" cdkTreeNodePadding\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 class=\"example-tree-node\">\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </cdk-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <cdk-tree-node *cdkTreeNodeDef=\"let node; when: hasChild\" cdkTreeNodePadding\n                 cdkTreeNodeToggle\n                 [cdkTreeNodeTypeaheadLabel]=\"node.name\"\n                 [style.display]=\"shouldRender(node) ? 'flex' : 'none'\"\n                 [isDisabled]=\"!shouldRender(node)\"\n                 [isExpandable]=\"true\"\n                 class=\"example-tree-node\">\n    <button mat-icon-button cdkTreeNodeToggle [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{tree.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </cdk-tree-node>\n</cdk-tree>\n", styles: [".example-tree-node {\n  display: flex;\n  align-items: center;\n}\n"] }]
        }], propDecorators: { tree: [{
                type: ViewChild,
                args: [CdkTree]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXRyZWUtZmxhdC1jaGlsZHJlbi1hY2Nlc3Nvci1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RyZWUvY2RrLXRyZWUtZmxhdC1jaGlsZHJlbi1hY2Nlc3Nvci9jZGstdHJlZS1mbGF0LWNoaWxkcmVuLWFjY2Vzc29yLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdHJlZS9jZGstdHJlZS1mbGF0LWNoaWxkcmVuLWFjY2Vzc29yL2Nkay10cmVlLWZsYXQtY2hpbGRyZW4tYWNjZXNzb3ItZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsT0FBTyxFQUFFLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3pELE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLE1BQU0sQ0FBQztBQUMzQixPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDckMsT0FBTyxFQUFpQixXQUFXLEVBQUMsTUFBTSxjQUFjLENBQUM7Ozs7O0FBRXpELFNBQVMsWUFBWSxDQUFDLEtBQXVCO0lBQzNDLE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUMxQixLQUFLLE1BQU0sSUFBSSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3pCLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7WUFDbEIsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0RCxDQUFDO0lBQ0gsQ0FBQztJQUNELE9BQU8sY0FBYyxDQUFDO0FBQ3hCLENBQUM7QUFFRDs7R0FFRztBQVNILE1BQU0sT0FBTyxrQ0FBa0M7SUFSL0M7UUFZRSxxQkFBZ0IsR0FBRyxDQUFDLFFBQXdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVqRyxlQUFVLEdBQUcsSUFBSSxlQUFlLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFOUMsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLElBQW9CLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztLQXNCekU7SUFwQkMsYUFBYSxDQUFDLElBQW9CO1FBQ2hDLEtBQUssTUFBTSxNQUFNLElBQUksWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7WUFDL0MsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO2dCQUNwQyxPQUFPLE1BQU0sQ0FBQztZQUNoQixDQUFDO1FBQ0gsQ0FBQztRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFvQjtRQUMvQixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sTUFBTSxFQUFFLENBQUM7WUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztnQkFDbEMsT0FBTyxLQUFLLENBQUM7WUFDZixDQUFDO1lBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztxSEE3QlUsa0NBQWtDO3lHQUFsQyxrQ0FBa0MseUlBQ2xDLE9BQU8sZ0RDaENwQixxeENBMEJBLDRIREVZLGFBQWEsZzBCQUFFLGVBQWUsMklBQUUsYUFBYTs7a0dBRzVDLGtDQUFrQztrQkFSOUMsU0FBUzsrQkFDRSx5Q0FBeUMsY0FHdkMsSUFBSSxXQUNQLENBQUMsYUFBYSxFQUFFLGVBQWUsRUFBRSxhQUFhLENBQUMsbUJBQ3ZDLHVCQUF1QixDQUFDLE1BQU07OEJBSS9DLElBQUk7c0JBREgsU0FBUzt1QkFBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBcnJheURhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0Nka1RyZWUsIENka1RyZWVNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2Nkay90cmVlJztcbmltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0QnV0dG9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHtNYXRJY29uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7dGltZXJ9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHttYXBUb30gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtOZXN0ZWRGb29kTm9kZSwgTkVTVEVEX0RBVEF9IGZyb20gJy4uL3RyZWUtZGF0YSc7XG5cbmZ1bmN0aW9uIGZsYXR0ZW5Ob2Rlcyhub2RlczogTmVzdGVkRm9vZE5vZGVbXSk6IE5lc3RlZEZvb2ROb2RlW10ge1xuICBjb25zdCBmbGF0dGVuZWROb2RlcyA9IFtdO1xuICBmb3IgKGNvbnN0IG5vZGUgb2Ygbm9kZXMpIHtcbiAgICBmbGF0dGVuZWROb2Rlcy5wdXNoKG5vZGUpO1xuICAgIGlmIChub2RlLmNoaWxkcmVuKSB7XG4gICAgICBmbGF0dGVuZWROb2Rlcy5wdXNoKC4uLmZsYXR0ZW5Ob2Rlcyhub2RlLmNoaWxkcmVuKSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBmbGF0dGVuZWROb2Rlcztcbn1cblxuLyoqXG4gKiBAdGl0bGUgVHJlZSB3aXRoIGZsYXQgbm9kZXNcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXRyZWUtZmxhdC1jaGlsZHJlbi1hY2Nlc3Nvci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdHJlZS1mbGF0LWNoaWxkcmVuLWFjY2Vzc29yLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstdHJlZS1mbGF0LWNoaWxkcmVuLWFjY2Vzc29yLWV4YW1wbGUuY3NzJ10sXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDZGtUcmVlTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVHJlZUZsYXRDaGlsZHJlbkFjY2Vzc29yRXhhbXBsZSB7XG4gIEBWaWV3Q2hpbGQoQ2RrVHJlZSlcbiAgdHJlZSE6IENka1RyZWU8TmVzdGVkRm9vZE5vZGU+O1xuXG4gIGNoaWxkcmVuQWNjZXNzb3IgPSAoZGF0YU5vZGU6IE5lc3RlZEZvb2ROb2RlKSA9PiB0aW1lcigxMDApLnBpcGUobWFwVG8oZGF0YU5vZGUuY2hpbGRyZW4gPz8gW10pKTtcblxuICBkYXRhU291cmNlID0gbmV3IEFycmF5RGF0YVNvdXJjZShORVNURURfREFUQSk7XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBOZXN0ZWRGb29kTm9kZSkgPT4gISFub2RlLmNoaWxkcmVuPy5sZW5ndGg7XG5cbiAgZ2V0UGFyZW50Tm9kZShub2RlOiBOZXN0ZWRGb29kTm9kZSkge1xuICAgIGZvciAoY29uc3QgcGFyZW50IG9mIGZsYXR0ZW5Ob2RlcyhORVNURURfREFUQSkpIHtcbiAgICAgIGlmIChwYXJlbnQuY2hpbGRyZW4/LmluY2x1ZGVzKG5vZGUpKSB7XG4gICAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBzaG91bGRSZW5kZXIobm9kZTogTmVzdGVkRm9vZE5vZGUpIHtcbiAgICBsZXQgcGFyZW50ID0gdGhpcy5nZXRQYXJlbnROb2RlKG5vZGUpO1xuICAgIHdoaWxlIChwYXJlbnQpIHtcbiAgICAgIGlmICghdGhpcy50cmVlLmlzRXhwYW5kZWQocGFyZW50KSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBwYXJlbnQgPSB0aGlzLmdldFBhcmVudE5vZGUocGFyZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsIjxjZGstdHJlZSAjdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW2NoaWxkcmVuQWNjZXNzb3JdPVwiY2hpbGRyZW5BY2Nlc3NvclwiPlxuICA8IS0tIFRoaXMgaXMgdGhlIHRyZWUgbm9kZSB0ZW1wbGF0ZSBmb3IgbGVhZiBub2RlcyAtLT5cbiAgPGNkay10cmVlLW5vZGUgKmNka1RyZWVOb2RlRGVmPVwibGV0IG5vZGVcIiBjZGtUcmVlTm9kZVBhZGRpbmdcbiAgICAgICAgICAgICAgICAgW3N0eWxlLmRpc3BsYXldPVwic2hvdWxkUmVuZGVyKG5vZGUpID8gJ2ZsZXgnIDogJ25vbmUnXCJcbiAgICAgICAgICAgICAgICAgW2lzRGlzYWJsZWRdPVwiIXNob3VsZFJlbmRlcihub2RlKVwiXG4gICAgICAgICAgICAgICAgIGNsYXNzPVwiZXhhbXBsZS10cmVlLW5vZGVcIj5cbiAgICA8IS0tIHVzZSBhIGRpc2FibGVkIGJ1dHRvbiB0byBwcm92aWRlIHBhZGRpbmcgZm9yIHRyZWUgbGVhZiAtLT5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gIDwvY2RrLXRyZWUtbm9kZT5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGV4cGFuZGFibGUgbm9kZXMgLS0+XG4gIDxjZGstdHJlZS1ub2RlICpjZGtUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIGNka1RyZWVOb2RlUGFkZGluZ1xuICAgICAgICAgICAgICAgICBjZGtUcmVlTm9kZVRvZ2dsZVxuICAgICAgICAgICAgICAgICBbY2RrVHJlZU5vZGVUeXBlYWhlYWRMYWJlbF09XCJub2RlLm5hbWVcIlxuICAgICAgICAgICAgICAgICBbc3R5bGUuZGlzcGxheV09XCJzaG91bGRSZW5kZXIobm9kZSkgPyAnZmxleCcgOiAnbm9uZSdcIlxuICAgICAgICAgICAgICAgICBbaXNEaXNhYmxlZF09XCIhc2hvdWxkUmVuZGVyKG5vZGUpXCJcbiAgICAgICAgICAgICAgICAgW2lzRXhwYW5kYWJsZV09XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgY2xhc3M9XCJleGFtcGxlLXRyZWUtbm9kZVwiPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIGNka1RyZWVOb2RlVG9nZ2xlIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1RvZ2dsZSAnICsgbm9kZS5uYW1lXCI+XG4gICAgICA8bWF0LWljb24gY2xhc3M9XCJtYXQtaWNvbi1ydGwtbWlycm9yXCI+XG4gICAgICAgIHt7dHJlZS5pc0V4cGFuZGVkKG5vZGUpID8gJ2V4cGFuZF9tb3JlJyA6ICdjaGV2cm9uX3JpZ2h0J319XG4gICAgICA8L21hdC1pY29uPlxuICAgIDwvYnV0dG9uPlxuICAgIHt7bm9kZS5uYW1lfX1cbiAgPC9jZGstdHJlZS1ub2RlPlxuPC9jZGstdHJlZT5cbiJdfQ==