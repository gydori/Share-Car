import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/person/login/login.component";
import { RegisterComponent } from "./components/person/register/register.component";
import { MaterialModule } from "./material/material.module";
import { ProfileComponent } from "./components/person/profile/profile.component";
import { HeaderComponent } from "./components/common/header/header.component";
import { TokenInterceptor } from "./interceptors/token.interceptor";
import { GenderPipe } from "./pipes/gender.pipe";
import { CustomDatePipe } from "./pipes/date.pipe";
import { CreateCarComponent } from "./components/car/create-car/create-car.component";
import { MyTravelsComponent } from "./components/travel/my-travels/my-travels.component";
import { CreateTravelComponent } from "./components/travel/create-travel/create-travel.component";
import { AllTravelsComponent } from "./components/travel/all-travels/all-travels.component";
import { ShowTravelsTemplateComponent } from './components/travel/show-travels-template/show-travels-template.component';

const myRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent },
  { path: "mytravels", component: MyTravelsComponent },
  { path: "alltravels", component: AllTravelsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HeaderComponent,
    GenderPipe,
    CustomDatePipe,
    CreateCarComponent,
    MyTravelsComponent,
    CreateTravelComponent,
    AllTravelsComponent,
    ShowTravelsTemplateComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(myRoutes),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [CreateCarComponent, CreateTravelComponent]
})
export class AppModule {}
