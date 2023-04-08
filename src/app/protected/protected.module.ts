import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { DashboardAboutComponent } from './dashboard/dashboard-about/dashboard-about.component';
import { DashboardFaqComponent } from './dashboard/dashboard-faq/dashboard-faq.component';
import { DashboardContactComponent } from './dashboard/dashboard-contact/dashboard-contact.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAboutComponent,
    DashboardFaqComponent,
    DashboardContactComponent
  ],
  imports: [
    CommonModule,
    // Import our Routes for this module
    ProtectedRoutingModule,
    // Angular Material Imports
    MatButtonModule,
  ]
})
export class ProtectedModule { }
