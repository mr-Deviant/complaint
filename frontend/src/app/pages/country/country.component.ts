import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryComponent {

}
