import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-show-travels-template",
  templateUrl: "./show-travels-template.component.html",
  styleUrls: ["./show-travels-template.component.css"]
})
export class ShowTravelsTemplateComponent implements OnInit {
  @Input() travel;
  constructor() {}

  ngOnInit() {}
}
