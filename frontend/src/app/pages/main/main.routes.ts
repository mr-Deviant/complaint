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
        path: ':countryCode',
        loadComponent: () => import('../country/country.component').then(m => m.CountryComponent),
      },
      {
        path: ':countryCode/:cityUrl',
        loadComponent: () => import('../city/city.component').then(m => m.CityComponent),
      },
      {
        path: ':countryCode/:cityUrl/:complaintId',
        loadComponent: () => import('../view-complaint/view-complaint.component').then(m => m.ViewComplaintComponent),
      },
    ],
  },
];
