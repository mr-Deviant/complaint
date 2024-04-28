import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconRegistry} from '@angular/material/icon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterOutlet],
})
export class AppComponent {
  private matIconRegistry = inject(MatIconRegistry);

  constructor() {
    // Set icomoon as a default source of icons
    this.matIconRegistry.registerFontClassAlias('icomoon', 'icon');
    this.matIconRegistry.setDefaultFontSetClass('icomoon');
  }
}
