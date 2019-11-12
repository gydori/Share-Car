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

const myRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "profile", component: ProfileComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HeaderComponent,
    GenderPipe,
    CustomDatePipe
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
  bootstrap: [AppComponent]
})
export class AppModule {}