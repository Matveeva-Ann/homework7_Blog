import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminComponent } from './components/admin/admin.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogInfoComponent } from './components/blog/blog-info/blog-info.component';


const routes: Routes = [
  {path:'admin', component: AdminComponent},
  {path:'blog', component:BlogComponent},
  {path:'blog/:id', component:BlogInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
