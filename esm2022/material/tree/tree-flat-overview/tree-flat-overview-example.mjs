import { FlatTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tree";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/material/icon";
const TREE_DATA = [
    {
        name: 'Fruit',
        children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];
/**
 * @title Tree with flat nodes
 */
export class TreeFlatOverviewExample {
    constructor() {
        this._transformer = (node, level) => {
            return {
                expandable: !!node.children && node.children.length > 0,
                name: node.name,
                level: level,
            };
        };
        this.treeControl = new FlatTreeControl(node => node.level, node => node.expandable);
        this.treeFlattener = new MatTreeFlattener(this._transformer, node => node.level, node => node.expandable, node => node.children);
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.hasChild = (_, node) => node.expandable;
        this.dataSource.data = TREE_DATA;
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: TreeFlatOverviewExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.0.0", type: TreeFlatOverviewExample, isStandalone: true, selector: "tree-flat-overview-example", ngImport: i0, template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n", dependencies: [{ kind: "ngmodule", type: MatTreeModule }, { kind: "directive", type: i1.MatTreeNodeDef, selector: "[matTreeNodeDef]", inputs: ["matTreeNodeDefWhen", "matTreeNode"] }, { kind: "directive", type: i1.MatTreeNodePadding, selector: "[matTreeNodePadding]", inputs: ["matTreeNodePadding", "matTreeNodePaddingIndent"] }, { kind: "directive", type: i1.MatTreeNodeToggle, selector: "[matTreeNodeToggle]", inputs: ["matTreeNodeToggleRecursive"] }, { kind: "component", type: i1.MatTree, selector: "mat-tree", exportAs: ["matTree"] }, { kind: "directive", type: i1.MatTreeNode, selector: "mat-tree-node", inputs: ["role", "disabled", "tabIndex"], exportAs: ["matTreeNode"] }, { kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i2.MatIconButton, selector: "button[mat-icon-button]", exportAs: ["matButton"] }, { kind: "ngmodule", type: MatIconModule }, { kind: "component", type: i3.MatIcon, selector: "mat-icon", inputs: ["color", "inline", "svgIcon", "fontSet", "fontIcon"], exportAs: ["matIcon"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.0.0", ngImport: i0, type: TreeFlatOverviewExample, decorators: [{
            type: Component,
            args: [{ selector: 'tree-flat-overview-example', standalone: true, imports: [MatTreeModule, MatButtonModule, MatIconModule], template: "<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\">\n  <!-- This is the tree node template for leaf nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node\" matTreeNodePadding>\n    <!-- use a disabled button to provide padding for tree leaf -->\n    <button mat-icon-button disabled></button>\n    {{node.name}}\n  </mat-tree-node>\n  <!-- This is the tree node template for expandable nodes -->\n  <mat-tree-node *matTreeNodeDef=\"let node;when: hasChild\" matTreeNodePadding>\n    <button mat-icon-button matTreeNodeToggle\n            [attr.aria-label]=\"'Toggle ' + node.name\">\n      <mat-icon class=\"mat-icon-rtl-mirror\">\n        {{treeControl.isExpanded(node) ? 'expand_more' : 'chevron_right'}}\n      </mat-icon>\n    </button>\n    {{node.name}}\n  </mat-tree-node>\n</mat-tree>\n" }]
        }], ctorParameters: () => [] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1mbGF0LW92ZXJ2aWV3LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC90cmVlL3RyZWUtZmxhdC1vdmVydmlldy90cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RyZWUvdHJlZS1mbGF0LW92ZXJ2aWV3L3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLHFCQUFxQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQzlGLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7O0FBV3pELE1BQU0sU0FBUyxHQUFlO0lBQzVCO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixRQUFRLEVBQUUsQ0FBQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUMsRUFBRSxFQUFDLElBQUksRUFBRSxhQUFhLEVBQUMsQ0FBQztLQUNyRTtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsUUFBUSxFQUFFO1lBQ1I7Z0JBQ0UsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLENBQUMsRUFBQyxJQUFJLEVBQUUsVUFBVSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUMsQ0FBQzthQUMzRDtZQUNEO2dCQUNFLElBQUksRUFBRSxRQUFRO2dCQUNkLFFBQVEsRUFBRSxDQUFDLEVBQUMsSUFBSSxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBQyxDQUFDO2FBQ2xEO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFTRjs7R0FFRztBQU9ILE1BQU0sT0FBTyx1QkFBdUI7SUF1QmxDO1FBdEJRLGlCQUFZLEdBQUcsQ0FBQyxJQUFjLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDdkQsT0FBTztnQkFDTCxVQUFVLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDdkQsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLEtBQUssRUFBRSxLQUFLO2FBQ2IsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUVGLGdCQUFXLEdBQUcsSUFBSSxlQUFlLENBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUN4QixDQUFDO1FBRUYsa0JBQWEsR0FBRyxJQUFJLGdCQUFnQixDQUNsQyxJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFDdkIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUN0QixDQUFDO1FBRUYsZUFBVSxHQUFHLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFNN0UsYUFBUSxHQUFHLENBQUMsQ0FBUyxFQUFFLElBQXFCLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFIL0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFDO0lBQ25DLENBQUM7OEdBekJVLHVCQUF1QjtrR0FBdkIsdUJBQXVCLHNGQ25EcEMsOHlCQWtCQSwyQ0QrQlksYUFBYSw0b0JBQUUsZUFBZSwySUFBRSxhQUFhOzsyRkFFNUMsdUJBQXVCO2tCQU5uQyxTQUFTOytCQUNFLDRCQUE0QixjQUUxQixJQUFJLFdBQ1AsQ0FBQyxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RmxhdFRyZWVDb250cm9sfSBmcm9tICdAYW5ndWxhci9jZGsvdHJlZSc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRyZWVGbGF0RGF0YVNvdXJjZSwgTWF0VHJlZUZsYXR0ZW5lciwgTWF0VHJlZU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdHJlZSc7XG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNYXRCdXR0b25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5cbi8qKlxuICogRm9vZCBkYXRhIHdpdGggbmVzdGVkIHN0cnVjdHVyZS5cbiAqIEVhY2ggbm9kZSBoYXMgYSBuYW1lIGFuZCBhbiBvcHRpb25hbCBsaXN0IG9mIGNoaWxkcmVuLlxuICovXG5pbnRlcmZhY2UgRm9vZE5vZGUge1xuICBuYW1lOiBzdHJpbmc7XG4gIGNoaWxkcmVuPzogRm9vZE5vZGVbXTtcbn1cblxuY29uc3QgVFJFRV9EQVRBOiBGb29kTm9kZVtdID0gW1xuICB7XG4gICAgbmFtZTogJ0ZydWl0JyxcbiAgICBjaGlsZHJlbjogW3tuYW1lOiAnQXBwbGUnfSwge25hbWU6ICdCYW5hbmEnfSwge25hbWU6ICdGcnVpdCBsb29wcyd9XSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdWZWdldGFibGVzJyxcbiAgICBjaGlsZHJlbjogW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnR3JlZW4nLFxuICAgICAgICBjaGlsZHJlbjogW3tuYW1lOiAnQnJvY2NvbGknfSwge25hbWU6ICdCcnVzc2VscyBzcHJvdXRzJ31dLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ09yYW5nZScsXG4gICAgICAgIGNoaWxkcmVuOiBbe25hbWU6ICdQdW1wa2lucyd9LCB7bmFtZTogJ0NhcnJvdHMnfV0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG5dO1xuXG4vKiogRmxhdCBub2RlIHdpdGggZXhwYW5kYWJsZSBhbmQgbGV2ZWwgaW5mb3JtYXRpb24gKi9cbmludGVyZmFjZSBFeGFtcGxlRmxhdE5vZGUge1xuICBleHBhbmRhYmxlOiBib29sZWFuO1xuICBuYW1lOiBzdHJpbmc7XG4gIGxldmVsOiBudW1iZXI7XG59XG5cbi8qKlxuICogQHRpdGxlIFRyZWUgd2l0aCBmbGF0IG5vZGVzXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RyZWUtZmxhdC1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICd0cmVlLWZsYXQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdFRyZWVNb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIFRyZWVGbGF0T3ZlcnZpZXdFeGFtcGxlIHtcbiAgcHJpdmF0ZSBfdHJhbnNmb3JtZXIgPSAobm9kZTogRm9vZE5vZGUsIGxldmVsOiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgZXhwYW5kYWJsZTogISFub2RlLmNoaWxkcmVuICYmIG5vZGUuY2hpbGRyZW4ubGVuZ3RoID4gMCxcbiAgICAgIG5hbWU6IG5vZGUubmFtZSxcbiAgICAgIGxldmVsOiBsZXZlbCxcbiAgICB9O1xuICB9O1xuXG4gIHRyZWVDb250cm9sID0gbmV3IEZsYXRUcmVlQ29udHJvbDxFeGFtcGxlRmxhdE5vZGU+KFxuICAgIG5vZGUgPT4gbm9kZS5sZXZlbCxcbiAgICBub2RlID0+IG5vZGUuZXhwYW5kYWJsZSxcbiAgKTtcblxuICB0cmVlRmxhdHRlbmVyID0gbmV3IE1hdFRyZWVGbGF0dGVuZXIoXG4gICAgdGhpcy5fdHJhbnNmb3JtZXIsXG4gICAgbm9kZSA9PiBub2RlLmxldmVsLFxuICAgIG5vZGUgPT4gbm9kZS5leHBhbmRhYmxlLFxuICAgIG5vZGUgPT4gbm9kZS5jaGlsZHJlbixcbiAgKTtcblxuICBkYXRhU291cmNlID0gbmV3IE1hdFRyZWVGbGF0RGF0YVNvdXJjZSh0aGlzLnRyZWVDb250cm9sLCB0aGlzLnRyZWVGbGF0dGVuZXIpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gVFJFRV9EQVRBO1xuICB9XG5cbiAgaGFzQ2hpbGQgPSAoXzogbnVtYmVyLCBub2RlOiBFeGFtcGxlRmxhdE5vZGUpID0+IG5vZGUuZXhwYW5kYWJsZTtcbn1cbiIsIjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCI+XG4gIDwhLS0gVGhpcyBpcyB0aGUgdHJlZSBub2RlIHRlbXBsYXRlIGZvciBsZWFmIG5vZGVzIC0tPlxuICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIG1hdFRyZWVOb2RlUGFkZGluZz5cbiAgICA8IS0tIHVzZSBhIGRpc2FibGVkIGJ1dHRvbiB0byBwcm92aWRlIHBhZGRpbmcgZm9yIHRyZWUgbGVhZiAtLT5cbiAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZD48L2J1dHRvbj5cbiAgICB7e25vZGUubmFtZX19XG4gIDwvbWF0LXRyZWUtbm9kZT5cbiAgPCEtLSBUaGlzIGlzIHRoZSB0cmVlIG5vZGUgdGVtcGxhdGUgZm9yIGV4cGFuZGFibGUgbm9kZXMgLS0+XG4gIDxtYXQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlO3doZW46IGhhc0NoaWxkXCIgbWF0VHJlZU5vZGVQYWRkaW5nPlxuICAgIDxidXR0b24gbWF0LWljb24tYnV0dG9uIG1hdFRyZWVOb2RlVG9nZ2xlXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb2dnbGUgJyArIG5vZGUubmFtZVwiPlxuICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tcnRsLW1pcnJvclwiPlxuICAgICAgICB7e3RyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkgPyAnZXhwYW5kX21vcmUnIDogJ2NoZXZyb25fcmlnaHQnfX1cbiAgICAgIDwvbWF0LWljb24+XG4gICAgPC9idXR0b24+XG4gICAge3tub2RlLm5hbWV9fVxuICA8L21hdC10cmVlLW5vZGU+XG48L21hdC10cmVlPlxuIl19