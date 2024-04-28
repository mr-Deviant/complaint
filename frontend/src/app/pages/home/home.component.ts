import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ComplaintService } from '../../services/complaint.service';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';
import { MatButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
    // selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        FormsModule,
        MatFormField,
        MatLabel,
        MatInput,
        MatButton,
        NgIf,
        NgFor,
        RouterLink,
        AsyncPipe,
    ],
})
export class HomeComponent implements OnInit {
  private complaintService = inject(ComplaintService);

  public complaints$ = this.complaintService.getComplaints();
  public lastComplaints$ = this.complaintService.getLast(3);

  constructor() {}

  ngOnInit(): void {}
}
