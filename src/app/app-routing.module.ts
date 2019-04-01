import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { UserDetailsComponent } from './user-details/user-details.component'
import {UserComponent} from './user/user.component';
import { AddLeavesComponent } from './add-leaves/add-leaves.component';

const routes: Routes = [

  
  { path: 'users', component: UserComponent },
  {path:'addLeaves' , component:AddLeavesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
