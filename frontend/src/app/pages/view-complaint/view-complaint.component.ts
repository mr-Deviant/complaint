import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {AsyncPipe, JsonPipe, NgForOf, NgIf} from '@angular/common';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {FormModule} from '../../modules/form.module';
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from '@angular/material/autocomplete';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/form-field';
import {MatIcon} from '@angular/material/icon';
import {MatInput} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import {ComplaintService} from '../../services/complaint.service';
import {ActivatedRoute} from '@angular/router';
import { ComplaintTypeEnum } from 'src/app/enums/complaint-type.enum';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-view-complaint',
  standalone: true,
  imports: [
    JsonPipe,
    AsyncPipe,
    CdkTextareaAutosize,
    FormModule,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatButton,
    MatButtonToggle,
    MatButtonToggleGroup,
    MatFormField,
    MatIcon,
    MatIconButton,
    MatInput,
    MatLabel,
    MatOption,
    MatSuffix,
    NgForOf,
    NgIf,
    ReactiveFormsModule
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
  // public ProductModel2 = ProductModel;

}
