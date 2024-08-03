import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ComplaintService } from '../../services/complaint.service';
import { ComplaintPreviewComponent } from '../../components/complaint-preview/complaint-preview.component';

@Component({
  // selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ComplaintPreviewComponent,
  ],
})
export class HomeComponent {
  private complaintService = inject(ComplaintService);

  public countries$ = this.complaintService.getCountriesAndCities();
  public lastComplaints$ = this.complaintService.getLast(3);
}
