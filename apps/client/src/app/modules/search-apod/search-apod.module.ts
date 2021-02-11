import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchApodRoutingModule } from './search-apod-routing.module';
import { SearchApodComponent } from './search-apod.component';


@NgModule({
  declarations: [SearchApodComponent],
  imports: [
    CommonModule,
    SearchApodRoutingModule
  ]
})
export class SearchApodModule { }
