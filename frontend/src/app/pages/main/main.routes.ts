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
        path: 'country',
        redirectTo: '',
      },
      {
        path: 'country/:countryCode',
        loadComponent: () => import('../country/country.component').then(m => m.CountryComponent),
      },
      {
        path: 'country/:countryCode/city',
        redirectTo: 'countries/:countryCode',
      },
      {
        path: 'country/:countryCode/city/null',
        redirectTo: 'country/:countryCode',
      },
      {
        path: 'country/:countryCode/city/:cityUrl',
        loadComponent: () => import('../city/city.component').then(m => m.CityComponent),
      },
      {
        path: 'country/:countryCode/complaint/:complaintId',
        loadComponent: () => import('../view-complaint/view-complaint.component').then(m => m.ViewComplaintComponent),
      },
      {
        path: 'country/:countryCode/city/:cityUrl/complaint/:complaintId',
        loadComponent: () => import('../view-complaint/view-complaint.component').then(m => m.ViewComplaintComponent),
      },
    ],
  },
];
