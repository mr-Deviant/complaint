import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { CountryService } from '../../services/country.service';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  // selector: 'app-country',
  standalone: true,
  imports: [
    RouterLink,
    AsyncPipe,
    NgIf,
    NgForOf,
    BreadcrumbComponent
  ],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent {
  private activatedRoute = inject(ActivatedRoute);
  private countryService = inject(CountryService);

  public country$ = this.countryService.getCountryAndCities(
    this.activatedRoute.snapshot.paramMap.get('countryCode')
  );
}
