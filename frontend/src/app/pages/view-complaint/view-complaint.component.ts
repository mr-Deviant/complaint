import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ComplaintService } from '../../services/complaint.service';
import { ComplaintTypeEnum } from 'src/app/enums/complaint-type.enum';

@Component({
  selector: 'app-view-complaint',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './view-complaint.component.html',
  styleUrl: './view-complaint.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewComplaintComponent {
  private route = inject(ActivatedRoute);
  private complaintService = inject(ComplaintService);

  private complaintId = this.route.snapshot.paramMap.get('id');
  complaint$ = this.complaintService.getComplaint(this.complaintId);
  public ComplaintTypeEnum = ComplaintTypeEnum;
}
