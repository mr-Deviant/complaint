import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ComplaintTypeEnum } from 'src/app/enums/complaint-type.enum';
import { AddService } from '../add.service';

@Component({
  // selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonComponent implements OnInit {
  public addService = inject(AddService);
  public readonly maxSitesNum = 5;
  public readonly maxPhonesNum = 3;
  public ComplaintTypeEnum = ComplaintTypeEnum;

  ngOnInit(): void {
    this.addService.disableFields('barCode');
    this.addService.enableFields('surname', 'patronymic', 'sites', 'email', 'phones');
  }
}
