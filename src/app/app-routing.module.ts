import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MapFindComponent } from './map-find/map-find.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { ClientProfileComponent } from './profile/client-profile/client-profile.component';
import { BusinessProfileComponent } from './profile/business-profile/business-profile.component';
import { AdminProfileComponent } from './profile/admin-profile/admin-profile.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'search', component: MapFindComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent, children: [
    { path: 'client', component: ClientProfileComponent },
    { path: 'business', component: BusinessProfileComponent },
    { path: 'admin', component: AdminProfileComponent }
  ]},
  
  {path: 'error', component: ErrorPageComponent}
 
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
