import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { PersonService } from './person.service';

@Component({
  // selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent {
  public readonly maxPhonesNum = 3;
  public form = this.personService.form;

  constructor(public personService: PersonService) {}

  get phones(): FormArray {
    return this.form.get('phones') as FormArray;
  }

  addPhone(): void {
    this.phones?.push(new FormControl(''), { emitEvent: false });
  }

  removePhone(index: number): void {
    this.phones.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.personService.create(this.form.getRawValue()).subscribe(() => {
        // TODO: reset forms in services and go to complaint
      });
      return;
    } else {
      this.form.markAllAsTouched();
    }
  }
}
