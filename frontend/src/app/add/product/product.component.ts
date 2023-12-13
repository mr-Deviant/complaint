import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ComplaintType } from 'src/app/enums/complaint-type';
import { AddService } from '../add.service';

@Component({
  // selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
  public addService = inject(AddService);
  public ComplaintType = ComplaintType;
}
