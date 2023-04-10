import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CrearAlumnoComponent } from './components/crear-alumno/crear-alumno.component';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { DefaultFontHeaderDirective } from './directives/defaultFontHeader.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CrearAlumnoComponent,
    AlumnosComponent,
    AlumnoComponent,
    DefaultFontHeaderDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
