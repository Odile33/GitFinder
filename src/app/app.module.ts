import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { RepositoryinfoComponent } from './repositoryinfo/repositoryinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserinfoComponent,
    RepositoryinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
