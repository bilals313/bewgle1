import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryComponent } from './category/category.component';
import { SpeakerComponent } from './speaker/speaker.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"category",component:CategoryComponent},
  {path:"speaker",component:SpeakerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
