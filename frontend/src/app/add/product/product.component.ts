import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { ComplaintTypeEnum } from 'src/app/enums/complaint-type.enum';
import { AddService } from '../add.service';

@Component({
  // selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent implements OnInit {
  public addService = inject(AddService);
  public ComplaintTypeEnum = ComplaintTypeEnum;

  ngOnInit(): void {
    this.addService.disableFields('surname', 'patronymic', 'sites', 'email', 'phones');
    this.addService.enableFields('barCode');
  }
}
