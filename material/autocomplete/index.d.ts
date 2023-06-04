import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import * as i0 from '@angular/core';
import { Observable } from 'rxjs';
import { OnInit } from '@angular/core';

/**
 * @title Highlight the first autocomplete option
 */
export declare class AutocompleteAutoActiveFirstOptionExample implements OnInit {
    myControl: FormControl<string | null>;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteAutoActiveFirstOptionExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteAutoActiveFirstOptionExample, "autocomplete-auto-active-first-option-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Display value autocomplete
 */
export declare class AutocompleteDisplayExample implements OnInit {
    myControl: FormControl<string | User | null>;
    options: User[];
    filteredOptions: Observable<User[]>;
    ngOnInit(): void;
    displayFn(user: User): string;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteDisplayExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteDisplayExample, "autocomplete-display-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Filter autocomplete
 */
export declare class AutocompleteFilterExample implements OnInit {
    myControl: FormControl<string | null>;
    options: string[];
    filteredOptions: Observable<string[]>;
    ngOnInit(): void;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteFilterExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteFilterExample, "autocomplete-filter-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Testing with MatAutocompleteHarness
 */
export declare class AutocompleteHarnessExample {
    states: {
        code: string;
        name: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteHarnessExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteHarnessExample, "autocomplete-harness-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Option groups autocomplete
 */
export declare class AutocompleteOptgroupExample implements OnInit {
    private _formBuilder;
    stateForm: FormGroup<    {
    stateGroup: FormControl<string | null>;
    }>;
    stateGroups: StateGroup[];
    stateGroupOptions: Observable<StateGroup[]>;
    constructor(_formBuilder: FormBuilder);
    ngOnInit(): void;
    private _filterGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteOptgroupExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteOptgroupExample, "autocomplete-optgroup-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Autocomplete overview
 */
export declare class AutocompleteOverviewExample {
    stateCtrl: FormControl<string | null>;
    filteredStates: Observable<State[]>;
    states: State[];
    constructor();
    private _filterStates;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteOverviewExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteOverviewExample, "autocomplete-overview-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Plain input autocomplete
 */
export declare class AutocompletePlainInputExample implements OnInit {
    control: FormControl<string | null>;
    streets: string[];
    filteredStreets: Observable<string[]>;
    ngOnInit(): void;
    private _filter;
    private _normalizeValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompletePlainInputExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompletePlainInputExample, "autocomplete-plain-input-example", never, {}, {}, never, never, true, never, false>;
}

/**
 * @title Simple autocomplete
 */
export declare class AutocompleteSimpleExample {
    myControl: FormControl<string | null>;
    options: string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<AutocompleteSimpleExample, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AutocompleteSimpleExample, "autocomplete-simple-example", never, {}, {}, never, never, true, never, false>;
}

declare interface State {
    flag: string;
    name: string;
    population: string;
}

declare interface StateGroup {
    letter: string;
    names: string[];
}

declare interface User {
    name: string;
}

export { }
