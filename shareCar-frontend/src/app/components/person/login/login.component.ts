import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SessionService } from "src/app/services/session.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private login: FormGroup;

  constructor(private sessionService: SessionService) {}

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  onSubmit() {
    this.sessionService.login(
      this.login.value.email,
      this.login.value.password
    );
  }
}
