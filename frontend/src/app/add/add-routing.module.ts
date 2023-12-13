import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './add.component';

const routes: Routes = [
  {
    path: '',
    component: AddComponent,
    children: [
      {
        path: '',
        redirectTo: 'company',
        pathMatch: 'full',
      },
      {
        path: 'company',
        loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
      },
      {
        path: 'person',
        loadChildren: () => import('./person/person.module').then(m => m.PersonModule),
      },
      {
        path: 'product',
        loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRoutingModule {}
