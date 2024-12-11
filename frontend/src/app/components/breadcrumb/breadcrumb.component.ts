import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BreadcrumbModel } from '../../models/breadcrumb.model';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [
    RouterLink,
  ],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @Input() data!: BreadcrumbModel[];
}
