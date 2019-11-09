import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/person/login/login.component";
import { RegisterComponent } from "./components/person/register/register.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";

const myRoutes: Routes = [
  { path: "", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];
@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(myRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
