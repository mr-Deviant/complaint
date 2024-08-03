import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ComplaintType } from '../../types/complaint.type';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-complaint-preview',
  standalone: true,
  imports: [
    RouterModule,
  ],
  templateUrl: './complaint-preview.component.html',
  styleUrl: './complaint-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplaintPreviewComponent {
  @Input() public complaint!: ComplaintType;
}
