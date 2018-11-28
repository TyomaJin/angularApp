import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './ui/homepage/homepage.component';
import { AboutComponent } from './ui/about/about.component';
import { ContactsComponent } from './ui/contacts/contacts.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'home', component: HomepageComponent},
  { path: 'about', component: AboutComponent},
  { path: 'contacts', component: ContactsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
