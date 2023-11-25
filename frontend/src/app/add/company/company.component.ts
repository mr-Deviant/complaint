import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompanyService } from './company.service';
import { CategoryService } from '../../services/category.service';
import { CategoryModel } from '../../models/category.model';
import { CountryService } from '../../services/country.service';
import { CountryModel } from '../../models/country.model';

@Component({
  // selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent implements OnInit {
  public readonly maxPhonesNum = 3;
  public form!: FormGroup;
  public categories$!: Observable<CategoryModel[]>;
  public countries$!: Observable<CountryModel[]>;

  constructor(
    public companyService: CompanyService,
    public categoryService: CategoryService,
    public countryService: CountryService,
  ) {}

  get phones(): FormArray {
    return this.form.get('phones') as FormArray;
  }

  ngOnInit(): void {
    this.form = this.companyService.form;
    this.categories$ = this.categoryService.readAll();
    this.countries$ = this.countryService.readAll();
  }

  addPhone(): void {
    this.phones?.push(new FormControl(''), { emitEvent: false });
  }

  removePhone(index: number): void {
    this.phones.removeAt(index);
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.companyService.create(this.form.getRawValue()).subscribe(() => {
        // TODO: reset forms in services and go to complaint
      });
      return;
    } else {
      this.form.markAllAsTouched();
    }
  }
}
