import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  private complaintService = inject(ComplaintService);

  public complaints$ = this.complaintService.getComplaints();
  public lastComplaints$ = this.complaintService.getLast(3);

  constructor() {}

  ngOnInit(): void {}
}
