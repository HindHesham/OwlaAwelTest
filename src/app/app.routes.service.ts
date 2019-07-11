import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { SignupComponent } from '../app/pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },

//   { path: 'students', children:
//     [
//       { path: 'allStudents', component: ListStudentsComponent}
//     ]
//   },
  
  // { path: '**', component: NotFoundComponent }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);