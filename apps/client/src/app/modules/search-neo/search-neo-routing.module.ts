import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchNeoComponent } from './search-neo.component';

const routes: Routes = [
  {
    path: '',
    component: SearchNeoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchNeoRoutingModule {}
