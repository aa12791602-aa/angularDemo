import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-directive-demo",
  templateUrl: "./directive-demo.component.html",
  styleUrls: ["./directive-demo.component.css"]
})
export class DirectiveDemoComponent implements OnInit {
  public color: string = "red";
  @ViewChild("appValidChild") validFormChild: any;
  constructor() {}

  ngOnInit(): void {}
  changeColor(color: string) {
    this.color = color;
  }
  getChildEvent() {
    console.log(this.validFormChild);
  }
}
