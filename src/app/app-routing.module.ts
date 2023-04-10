import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { AuthComponent } from './features/auth/auth.component';
import { AuthRoutingModule } from './features/auth/auth-routing.module';
import { LoginComponent } from './features/auth/login/login.component';
import { LogoutComponent } from './features/auth/logout/logout.component';

// const routes: Routes = [
//   // {
//   //   path: 'auth',
//   //   loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
//   // },
//   {path: 'auth', component: AuthComponent},
//   {path: 'todos', component: AlumnosComponent },
//   {path: 'crear', component: CrearAlumnoComponent},
//   {path: "**", redirectTo: 'todos'}
// ];

// const routes: Routes = [
//   {
//     path: 'auth',
//     loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule)
//   },
//   { path: 'todos', component: AlumnosComponent },
//   { path: 'crear', component: CrearAlumnoComponent },
//   { path: '**', redirectTo: 'todos' }
// ];

const routes: Routes = [
  { path: 'auth', component: AuthComponent, children: [
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent }
  ]},
  {path: 'todos', component: AlumnosComponent },
  {path: 'crear', component: CrearAlumnoComponent},
  {path: "**", redirectTo: 'todos'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes), AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
