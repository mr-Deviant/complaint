import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { CountryModel } from '../../models/country.model';

@Component({
  selector: 'app-country-select',
  templateUrl: './country-select.component.html',
  styleUrls: ['./country-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CountrySelectComponent,
      multi: true,
    },
  ],
})
export class CountrySelectComponent implements ControlValueAccessor {
  @Input() public countries$!: Observable<CountryModel[]>;

  value!: string | null;
  touched = false;
  disabled = false;

  filter = new FormControl('');

  onChange = (value: string | null): void => {};

  onTouched = (): void => {};

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
}
