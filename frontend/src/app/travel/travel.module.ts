import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelPageRoutingModule } from './travel-routing.module';

import { TravelPage } from './travel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TravelPageRoutingModule
  ],
  declarations: [TravelPage]
})
export class TravelPageModule {}
