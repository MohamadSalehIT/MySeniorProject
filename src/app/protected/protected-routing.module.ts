import { DashboardContactComponent } from './dashboard/dashboard-contact/dashboard-contact.component';
import { DashboardFaqComponent } from './dashboard/dashboard-faq/dashboard-faq.component';
import { DashboardAboutComponent } from './dashboard/dashboard-about/dashboard-about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Routes for child Module (protectedModule). Since protected module is lazy loaded in in the 
// app-routing.module the full path is `/protected/dashboard`
const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {path: 'dashboard-about' , component:DashboardAboutComponent},
  {path : 'dashboard-faq' , component: DashboardFaqComponent},
  {path : 'dashboard-contact' , component:DashboardContactComponent},
  
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
