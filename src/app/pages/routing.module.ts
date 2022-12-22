import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

//lazy
const routes: Routes = [
  { 
    path: '',
    component: HomeComponent
  },
  { 
    path: 'details/:id',
    component: DetailsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],   //mudar de forRoot para forChild
  exports: [RouterModule]
})
export class RoutingModule { }