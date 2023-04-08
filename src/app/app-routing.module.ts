import { DashboardContactComponent } from './protected/dashboard/dashboard-contact/dashboard-contact.component';
import { DashboardFaqComponent } from './protected/dashboard/dashboard-faq/dashboard-faq.component';
import { DashboardComponent } from './protected/dashboard/dashboard.component';
import { DashboardAboutComponent } from './protected/dashboard/dashboard-about/dashboard-about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { compileClassMetadata } from '@angular/compiler';

const routes: Routes = [
  {
    // Lazy Loading the public module (all children routes will be under '/public/{route from lazy loaded module}')
    path: 'public',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    // Lazy Loading the protected module (all children routes will be under '/protected/{route from lazy loaded module}')
    // The guard will check if the user is having a jwt, otherwise he will be redirected to the base route
    path: 'protected',
    canActivate: [AuthGuard],
    loadChildren: () => import('./protected/protected.module').then(m => m.ProtectedModule)
  },
  { path: 'dashboard-about', component: DashboardAboutComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path :'dashboard-faq', component: DashboardFaqComponent},
  {path : 'dashboard-about' , component:DashboardContactComponent},
  
  {
    // Redirects all paths that are not matching to the 'public' route/path
    path: '**',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
