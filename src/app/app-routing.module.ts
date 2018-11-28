import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './ui/homepage/homepage.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
