import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RepositoryinfoComponent } from './repositoryinfo/repositoryinfo.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path:'userinfo' , component: UserinfoComponent},
  { path:'repositoryinfo' , component: RepositoryinfoComponent},
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/userinfo", pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
