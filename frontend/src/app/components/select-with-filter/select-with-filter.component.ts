import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  HostBinding,
  Input,
  OnDestroy,
  Optional,
  Self,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  NgControl,
  NgForm,
} from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { MatFormField, MatFormFieldControl } from '@angular/material/form-field';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { FocusMonitor } from '@angular/cdk/a11y';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-select-with-filter',
  templateUrl: './select-with-filter.component.html',
  styleUrls: ['./select-with-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: MatFormFieldControl, useExisting: SelectWithFilterComponent }],
})
// https://material.angular.io/guide/creating-a-custom-form-field-control
export class SelectWithFilterComponent
  implements MatFormFieldControl<string>, ControlValueAccessor, DoCheck, OnDestroy
{
  @Input() public label: string = '';
  @Input() public items$!: Observable<any[]>;
  @Input() public bindLabel = 'name';
  @Input() public bindValue = '_id';
  @Input() public subItems: string | null = null;
  @Input() public showFlag = false;

  _value!: string | null;
  @Input()
  get value(): string | null {
    return this._value;
  }
  set value(value: string | null) {
    this._value = value;
    this.stateChanges.next();
  }

  stateChanges = new Subject<void>();

  static nextId = 0;

  @HostBinding() id = `select-with-filter-${SelectWithFilterComponent.nextId++}`;

  private _placeholder!: string;
  @Input()
  get placeholder() {
    return this._placeholder;
  }
  set placeholder(placeholder: string) {
    this._placeholder = placeholder;
    this.stateChanges.next();
  }

  focused = false;

  @HostBinding('class.floating')
  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  private _required = false;
  @Input()
  get required() {
    return this._required;
  }
  set required(req: boolean) {
    this._required = coerceBooleanProperty(req);
    this.stateChanges.next();
  }

  private _disabled = false;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this.stateChanges.next();
    // this.cdr.detectChanges();
  }

  errorState = false;

  controlType = 'select-with-filter';

  @HostBinding('attr.aria-describedby') describedBy = '';

  get empty(): boolean {
    return !this._value;
  }

  constructor(
    private fm: FocusMonitor,
    private elRef: ElementRef<HTMLElement>,
    @Optional() @Self() public ngControl: NgControl,
    @Optional() private _parentForm: NgForm,
    @Optional() private _parentFormGroup: FormGroupDirective,
    @Optional() public parentFormField?: MatFormField,
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    fm.monitor(elRef.nativeElement, true).subscribe(origin => {
      this.focused = !!origin;
      this.stateChanges.next();
    });
  }

  ngDoCheck(): void {
    if (this.ngControl) {
      this.updateErrorState();
    }
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
    this.fm.stopMonitoring(this.elRef.nativeElement);
  }

  private updateErrorState(): void {
    const parent = this._parentFormGroup || this._parentForm;

    const oldState = this.errorState;
    const newState = !!(this.ngControl?.invalid && (this.touched || parent.submitted));

    if (oldState !== newState) {
      this.errorState = newState;
      this.stateChanges.next();
    }
  }

  onFocusIn(event: FocusEvent): void {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  onFocusOut(event: FocusEvent): void {
    if (!this.elRef.nativeElement.contains(event.relatedTarget as Element)) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  setDescribedByIds(ids: string[]): void {
    this.describedBy = ids.join(' ');
  }

  onContainerClick(event: MouseEvent): void {
    if ((event.target as Element).tagName.toLowerCase() != 'select') {
      this.elRef.nativeElement.querySelector('select')?.focus();
    }
  }

  touched = false;

  filterControl = new FormControl('');

  onChange = (value: string | null): void => {}; // +

  onTouched = (): void => {}; // +

  writeValue(value: string | null): void {
    this.value = value;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }

  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }

  markAsTouched(): void {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  // https://stackblitz.com/edit/mat-select-with-controlvalueaccessor?file=app%2Fapp.component.ts
  selectionChanged(event: MatSelectChange) {
    this.writeValue(event.value);
    this.onChange(event.value);
    this.onTouched();
  }
}
