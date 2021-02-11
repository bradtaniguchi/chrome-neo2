import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchNeoRoutingModule } from './search-neo-routing.module';
import { SearchNeoComponent } from './search-neo.component';


@NgModule({
  declarations: [SearchNeoComponent],
  imports: [
    CommonModule,
    SearchNeoRoutingModule
  ]
})
export class SearchNeoModule { }
