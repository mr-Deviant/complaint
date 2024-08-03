import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // selector: 'app-city',
  standalone: true,
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityComponent {

}
