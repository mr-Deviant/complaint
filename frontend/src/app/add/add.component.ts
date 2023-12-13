import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  // selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddComponent {
  public navLinks = [
    {
      label: 'Компания',
      path: './company',
    },
    {
      label: 'Человек',
      path: './person',
    },
    {
      label: 'Товар',
      path: './product',
    },
  ];
}
