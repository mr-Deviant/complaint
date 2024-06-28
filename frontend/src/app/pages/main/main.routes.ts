import { MainComponent } from './main.component';

export default [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('../home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'add',
        loadComponent: () => import('../add-complaint/add-complaint.component').then(m => m.AddComplaintComponent),
      },
      {
        path: ':id',
        loadComponent: () => import('../view-complaint/view-complaint.component').then(m => m.ViewComplaintComponent),
      },
    ],
  },
];
