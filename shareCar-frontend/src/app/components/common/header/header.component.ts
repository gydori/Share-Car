import { Component, OnInit } from "@angular/core";
import { SessionService } from "src/app/services/session.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(private sessionService: SessionService) {}

  ngOnInit() {}

  onClick() {
    this.sessionService.logout();
  }
}
