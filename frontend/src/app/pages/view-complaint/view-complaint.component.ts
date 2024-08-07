import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ComplaintService } from '../../services/complaint.service';
import { ComplaintTypeEnum } from 'src/app/enums/complaint-type.enum';

@Component({
  selector: 'app-view-complaint',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './view-complaint.component.html',
  styleUrl: './view-complaint.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewComplaintComponent {
  private route = inject(ActivatedRoute);
  private complaintService = inject(ComplaintService);
  private complaintId = this.route.snapshot.paramMap.get('id');
  public complaint$ = this.complaintService.getComplaint(this.complaintId);
  public ComplaintTypeEnum = ComplaintTypeEnum;
}
