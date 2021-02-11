import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchApodComponent } from './search-apod.component';

const routes: Routes = [
  {
    path: '',
    component: SearchApodComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchApodRoutingModule {}
