import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ComplaintType } from '../../enums/complaint-type';
import { AddService } from '../add.service';

@Component({
  // selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent {
  public addService = inject(AddService);
  public readonly maxSitesNum = 4;
  public readonly maxPhonesNum = 3;
  public ComplaintType = ComplaintType;
}
