import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompleteNamePipe } from './pipes/complete-name.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { WatchBooleanPipe } from './pipes/watch-boolean.pipe';
import { AppRoutingModule } from '../app-routing.module';
// import { AuthModule } from '../features/auth/auth.module';

@NgModule({
  imports: [CommonModule, SharedModule, AppRoutingModule ],
  declarations: [CompleteNamePipe, WatchBooleanPipe, DashboardComponent],
  exports: [CompleteNamePipe, DashboardComponent, WatchBooleanPipe],
})
export class CoreModule {}
