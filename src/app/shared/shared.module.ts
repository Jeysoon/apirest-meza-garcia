import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [],
  exports: [ReactiveFormsModule, MaterialModule,AppRoutingModule]
})
export class SharedModule { }
