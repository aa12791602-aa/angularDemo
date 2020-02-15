import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes-demo",
  templateUrl: "./pipes-demo.component.html",
  styleUrls: ["./pipes-demo.component.css"]
})
export class PipesDemoComponent implements OnInit {
  pipeDate: Date = new Date("2018-06-12 20:18:20");

  pipeJsonData: any = {
    userName: "lisi",
    age: 18
  };
  pipeDecimalData: number = 18.1234456;
  pipeDecimalData2: number = 12003;

  PSex: string = "man";
  purePipeData: any = {
    userInfo: {
      userName: "张三",
      age: "33",
      address: "山东济宁"
    }
  };
  constructor() {}

  ngOnInit(): void {}
  changeSex() {
    if (this.PSex === "man") {
      this.PSex = "ladyboy";
    } else {
      this.PSex = "lady";
    }
  }

  changePurePipeData() {
    this.purePipeData.userInfo.userName = "陈康";
    this.purePipeData.userInfo.age = 12;
    this.purePipeData.userInfo.address = "北京朝阳区";
  }
}
