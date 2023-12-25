import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ComplaintTypeEnum } from '../../enums/complaint-type.enum';
import { AddService } from '../add.service';

@Component({
  // selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyComponent implements OnInit {
  public addService = inject(AddService);
  public readonly maxSitesNum = 4;
  public readonly maxPhonesNum = 3;
  public ComplaintTypeEnum = ComplaintTypeEnum;

  ngOnInit(): void {
    this.addService.disableFields('surname', 'patronymic', 'barCode');
    this.addService.enableFields('sites', 'email', 'phones');
  }
}
