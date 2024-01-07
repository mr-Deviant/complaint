import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComplaintComponent } from './add-complaint.component';

const routes: Routes = [
  {
    path: '',
    component: AddComplaintComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddComplaintRoutingModule {}
