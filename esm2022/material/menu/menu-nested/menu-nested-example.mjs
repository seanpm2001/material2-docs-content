import { Component } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
import * as i2 from "@angular/material/menu";
/**
 * @title Nested menu
 */
class MenuNestedExample {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MenuNestedExample, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.0", type: MenuNestedExample, isStandalone: true, selector: "menu-nested-example", ngImport: i0, template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n<!-- #docregion sub-menu -->\n<mat-menu #animals=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n</mat-menu>\n\n<mat-menu #vertebrates=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n  <button mat-menu-item>Birds</button>\n  <button mat-menu-item>Mammals</button>\n</mat-menu>\n<!-- #enddocregion sub-menu -->\n\n<mat-menu #invertebrates=\"matMenu\">\n  <button mat-menu-item>Insects</button>\n  <button mat-menu-item>Molluscs</button>\n  <button mat-menu-item>Crustaceans</button>\n  <button mat-menu-item>Corals</button>\n  <button mat-menu-item>Arachnids</button>\n  <button mat-menu-item>Velvet worms</button>\n  <button mat-menu-item>Horseshoe crabs</button>\n</mat-menu>\n\n<mat-menu #fish=\"matMenu\">\n  <button mat-menu-item>Baikal oilfish</button>\n  <button mat-menu-item>Bala shark</button>\n  <button mat-menu-item>Ballan wrasse</button>\n  <button mat-menu-item>Bamboo shark</button>\n  <button mat-menu-item>Banded killifish</button>\n</mat-menu>\n\n<mat-menu #amphibians=\"matMenu\">\n  <button mat-menu-item>Sonoran desert toad</button>\n  <button mat-menu-item>Western toad</button>\n  <button mat-menu-item>Arroyo toad</button>\n  <button mat-menu-item>Yosemite toad</button>\n</mat-menu>\n\n<mat-menu #reptiles=\"matMenu\">\n  <button mat-menu-item>Banded Day Gecko</button>\n  <button mat-menu-item>Banded Gila Monster</button>\n  <button mat-menu-item>Black Tree Monitor</button>\n  <button mat-menu-item>Blue Spiny Lizard</button>\n  <button mat-menu-item disabled>Velociraptor</button>\n</mat-menu>\n", dependencies: [{ kind: "ngmodule", type: MatButtonModule }, { kind: "component", type: i1.MatButton, selector: "    button[mat-button], button[mat-raised-button], button[mat-flat-button],    button[mat-stroked-button]  ", inputs: ["disabled", "disableRipple", "color"], exportAs: ["matButton"] }, { kind: "ngmodule", type: MatMenuModule }, { kind: "component", type: i2.MatMenu, selector: "mat-menu", exportAs: ["matMenu"] }, { kind: "component", type: i2.MatMenuItem, selector: "[mat-menu-item]", inputs: ["disabled", "disableRipple", "role"], exportAs: ["matMenuItem"] }, { kind: "directive", type: i2.MatMenuTrigger, selector: "[mat-menu-trigger-for], [matMenuTriggerFor]", exportAs: ["matMenuTrigger"] }] }); }
}
export { MenuNestedExample };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.0", ngImport: i0, type: MenuNestedExample, decorators: [{
            type: Component,
            args: [{ selector: 'menu-nested-example', standalone: true, imports: [MatButtonModule, MatMenuModule], template: "<button mat-button [matMenuTriggerFor]=\"animals\">Animal index</button>\n<!-- #docregion sub-menu -->\n<mat-menu #animals=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"vertebrates\">Vertebrates</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"invertebrates\">Invertebrates</button>\n</mat-menu>\n\n<mat-menu #vertebrates=\"matMenu\">\n  <button mat-menu-item [matMenuTriggerFor]=\"fish\">Fishes</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"amphibians\">Amphibians</button>\n  <button mat-menu-item [matMenuTriggerFor]=\"reptiles\">Reptiles</button>\n  <button mat-menu-item>Birds</button>\n  <button mat-menu-item>Mammals</button>\n</mat-menu>\n<!-- #enddocregion sub-menu -->\n\n<mat-menu #invertebrates=\"matMenu\">\n  <button mat-menu-item>Insects</button>\n  <button mat-menu-item>Molluscs</button>\n  <button mat-menu-item>Crustaceans</button>\n  <button mat-menu-item>Corals</button>\n  <button mat-menu-item>Arachnids</button>\n  <button mat-menu-item>Velvet worms</button>\n  <button mat-menu-item>Horseshoe crabs</button>\n</mat-menu>\n\n<mat-menu #fish=\"matMenu\">\n  <button mat-menu-item>Baikal oilfish</button>\n  <button mat-menu-item>Bala shark</button>\n  <button mat-menu-item>Ballan wrasse</button>\n  <button mat-menu-item>Bamboo shark</button>\n  <button mat-menu-item>Banded killifish</button>\n</mat-menu>\n\n<mat-menu #amphibians=\"matMenu\">\n  <button mat-menu-item>Sonoran desert toad</button>\n  <button mat-menu-item>Western toad</button>\n  <button mat-menu-item>Arroyo toad</button>\n  <button mat-menu-item>Yosemite toad</button>\n</mat-menu>\n\n<mat-menu #reptiles=\"matMenu\">\n  <button mat-menu-item>Banded Day Gecko</button>\n  <button mat-menu-item>Banded Gila Monster</button>\n  <button mat-menu-item>Black Tree Monitor</button>\n  <button mat-menu-item>Blue Spiny Lizard</button>\n  <button mat-menu-item disabled>Velociraptor</button>\n</mat-menu>\n" }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1uZXN0ZWQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1uZXN0ZWQvbWVudS1uZXN0ZWQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL21lbnUvbWVudS1uZXN0ZWQvbWVudS1uZXN0ZWQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDeEMsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBQyxlQUFlLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQzs7OztBQUV6RDs7R0FFRztBQUNILE1BTWEsaUJBQWlCOzhHQUFqQixpQkFBaUI7a0dBQWpCLGlCQUFpQiwrRUNiOUIsczREQWdEQSwyQ0RyQ1ksZUFBZSwyUUFBRSxhQUFhOztTQUU3QixpQkFBaUI7MkZBQWpCLGlCQUFpQjtrQkFON0IsU0FBUzsrQkFDRSxxQkFBcUIsY0FFbkIsSUFBSSxXQUNQLENBQUMsZUFBZSxFQUFFLGFBQWEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWF0TWVudU1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XG5pbXBvcnQge01hdEJ1dHRvbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcblxuLyoqXG4gKiBAdGl0bGUgTmVzdGVkIG1lbnVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbWVudS1uZXN0ZWQtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAnbWVudS1uZXN0ZWQtZXhhbXBsZS5odG1sJyxcbiAgc3RhbmRhbG9uZTogdHJ1ZSxcbiAgaW1wb3J0czogW01hdEJ1dHRvbk1vZHVsZSwgTWF0TWVudU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIE1lbnVOZXN0ZWRFeGFtcGxlIHt9XG4iLCI8YnV0dG9uIG1hdC1idXR0b24gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImFuaW1hbHNcIj5BbmltYWwgaW5kZXg8L2J1dHRvbj5cbjwhLS0gI2RvY3JlZ2lvbiBzdWItbWVudSAtLT5cbjxtYXQtbWVudSAjYW5pbWFscz1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtIFttYXRNZW51VHJpZ2dlckZvcl09XCJ2ZXJ0ZWJyYXRlc1wiPlZlcnRlYnJhdGVzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwiaW52ZXJ0ZWJyYXRlc1wiPkludmVydGVicmF0ZXM8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG5cbjxtYXQtbWVudSAjdmVydGVicmF0ZXM9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwiZmlzaFwiPkZpc2hlczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gW21hdE1lbnVUcmlnZ2VyRm9yXT1cImFtcGhpYmlhbnNcIj5BbXBoaWJpYW5zPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbSBbbWF0TWVudVRyaWdnZXJGb3JdPVwicmVwdGlsZXNcIj5SZXB0aWxlczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmlyZHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPk1hbW1hbHM8L2J1dHRvbj5cbjwvbWF0LW1lbnU+XG48IS0tICNlbmRkb2NyZWdpb24gc3ViLW1lbnUgLS0+XG5cbjxtYXQtbWVudSAjaW52ZXJ0ZWJyYXRlcz1cIm1hdE1lbnVcIj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkluc2VjdHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPk1vbGx1c2NzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5DcnVzdGFjZWFuczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+Q29yYWxzPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5BcmFjaG5pZHM8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPlZlbHZldCB3b3JtczwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+SG9yc2VzaG9lIGNyYWJzPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48bWF0LW1lbnUgI2Zpc2g9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYWlrYWwgb2lsZmlzaDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFsYSBzaGFyazwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFsbGFuIHdyYXNzZTwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFtYm9vIHNoYXJrPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CYW5kZWQga2lsbGlmaXNoPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48bWF0LW1lbnUgI2FtcGhpYmlhbnM9XCJtYXRNZW51XCI+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5Tb25vcmFuIGRlc2VydCB0b2FkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5XZXN0ZXJuIHRvYWQ8L2J1dHRvbj5cbiAgPGJ1dHRvbiBtYXQtbWVudS1pdGVtPkFycm95byB0b2FkPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5Zb3NlbWl0ZSB0b2FkPC9idXR0b24+XG48L21hdC1tZW51PlxuXG48bWF0LW1lbnUgI3JlcHRpbGVzPVwibWF0TWVudVwiPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFuZGVkIERheSBHZWNrbzwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmFuZGVkIEdpbGEgTW9uc3RlcjwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0+QmxhY2sgVHJlZSBNb25pdG9yPC9idXR0b24+XG4gIDxidXR0b24gbWF0LW1lbnUtaXRlbT5CbHVlIFNwaW55IExpemFyZDwvYnV0dG9uPlxuICA8YnV0dG9uIG1hdC1tZW51LWl0ZW0gZGlzYWJsZWQ+VmVsb2NpcmFwdG9yPC9idXR0b24+XG48L21hdC1tZW51PlxuIl19