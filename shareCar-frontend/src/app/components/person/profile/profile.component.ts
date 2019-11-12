import { Component, OnInit } from "@angular/core";
import { PersonService } from "src/app/services/person.service";
import { Person } from "src/app/models/person.model";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  private person: Person;

  constructor(private personService: PersonService) {}

  ngOnInit() {
    this.personService.getOnePerson().subscribe((data: Person) => {
      this.person = data;
    });
  }
}
