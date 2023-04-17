import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { LocalProfComponent } from './local-prof/local-prof.component';
import { MapFindComponent } from './map-find/map-find.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientProfileComponent } from './profile/client-profile/client-profile.component';
import { BusinessProfileComponent } from './profile/business-profile/business-profile.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { BusinessSnapComponent } from './businesses/business-snap/business-snap.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { BusinessRecComponent } from './businesses/business-rec/business-rec.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavComponent,
    LocalProfComponent,
    MapFindComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    AboutComponent,
    ProfileComponent,
    ClientProfileComponent,
    BusinessProfileComponent,
    AdminProfileComponent,
    ErrorPageComponent,
    BusinessesComponent,
    BusinessSnapComponent,
    ScheduleComponent,
    BusinessRecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
