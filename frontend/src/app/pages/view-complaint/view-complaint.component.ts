import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ComplaintService } from '../../services/complaint.service';
import { ComplaintTypeEnum } from 'src/app/enums/complaint-type.enum';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';

@Component({
  selector: 'app-view-complaint',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbComponent,
  ],
  templateUrl: './view-complaint.component.html',
  styleUrl: './view-complaint.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewComplaintComponent {
  private activatedRoute = inject(ActivatedRoute);
  private complaintService = inject(ComplaintService);
  private complaintId = this.activatedRoute.snapshot.paramMap.get('complaintId');
  public complaint$ = this.complaintService.getComplaint(this.complaintId);
  public ComplaintTypeEnum = ComplaintTypeEnum;
}
