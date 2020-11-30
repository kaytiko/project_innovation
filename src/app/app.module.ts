import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InnovatorsComponent } from './innovators/innovators.component';
import { PlannersComponent } from './planners/planners.component';
import { CoreComponent } from './core/core.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ContactComponent } from './core/contact/contact.component';

import { FormsModule }   from '@angular/forms';
import { RegistrationComponent } from './core/registration/registration.component';
import { LoginComponent } from './private/login/login.component';
import { ProfileComponent } from './private/profile/profile.component';
import { UserComponent } from './private/user/user.component';
import { MenuComponent } from './core/menu/menu.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'innovators', component: InnovatorsComponent},
  {path: 'planners', component: PlannersComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'user', component: UserComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InnovatorsComponent,
    PlannersComponent,
    CoreComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    RegistrationComponent,
    LoginComponent,
    ProfileComponent,
    UserComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
