import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorySelectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
