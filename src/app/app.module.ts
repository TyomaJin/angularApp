import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { HomepageComponent } from './ui/homepage/homepage.component';
import { PageNotFoundComponent } from './ui/page-not-found/page-not-found.component';
import { AboutComponent } from './ui/about/about.component';
import { ContactsComponent } from './ui/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
