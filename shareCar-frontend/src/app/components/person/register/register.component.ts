import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PersonService } from "src/app/services/person.service";
import { Person } from "src/app/models/person.model";
import { Router } from "@angular/router";
import { DateService } from "src/app/services/date.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  private register: FormGroup;

  constructor(
    private personService: PersonService,
    private dateService: DateService,
    private router: Router
  ) {}

  ngOnInit() {
    this.register = new FormGroup({
      lastname: new FormControl("", Validators.required),
      firstname: new FormControl("", Validators.required),
      email: new FormControl("", Validators.required),
      gender: new FormControl("", Validators.required),
      dateOfBirth: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      passwordAgain: new FormControl("", Validators.required)
    });
  }

  public onSubmit() {
    if (
      this.register.valid &&
      this.register.value.password === this.register.value.passwordAgain
    ) {
      let person = new Person(
        this.register.value.email,
        this.register.value.password,
        this.register.value.firstname,
        this.register.value.lastname,
        this.register.value.gender,
        this.dateService.convertDate(this.register.value.dateOfBirth)
      );
      console.log(person);
      this.personService.createPerson(person).subscribe(() => {
        this.router.navigate([""]);
      });
    }
  }
}
