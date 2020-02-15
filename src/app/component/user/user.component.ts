import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  userName: any = "我是张三";
  address: string = "山东济宁";
  imagePath: string = "assets/image/abm2.png";
  innerHtml: string = "<h1>helloword</h1>";
  dynamicClass: string = "redFont";
  isBlueFont: boolean = true;
  inputName: string = "";
  userTel: string = "17663707065";
  ngModuleP1: string = "22";
  ngIfBoolea: boolean = true;
  ngFormUserName: string = "陈凯";
  ngFormUserAge: Number = 18;
  ngStyleData: any = {
    "font-size": "30px",
    color: "yellow",
    width: "1000px"
  };
  ngSwitchValue: string = "data2";
  ngSwitchData1: string = "data1";
  ngSwitchData2: string = "data2";
  ngSwitchData3: string = "data3";
  ngMGConcatData: any = {
    user:{
      firstName:'陈',
      lastName:'默默'
    },
    address:{
      province:"山东",
      city:'济南'
    }
  };
  ngForArray: Array<string> = [
    "数据1",
    "数据2",
    "马云",
    "拉里埃利什",
    "王健林",
    "扎克伯格"
  ];
  funcObject: any = {
    getName() {
      return "这是一个方法的getname";
    }
  };
  constructor() {}

  ngOnInit(): void {}

  clickAlert(e) {
    console.log("clickAlert");
    console.log(e);
    window.alert(this.inputName);
  }
  onInputEvent($event) {
    console.log("onInputEvent");
  }
  onChangeEvent($event) {
    console.log("onChnageEvent");
  }
  showUserTel() {
    alert(this.userTel);
  }
  changeUserTel() {
    console.log("changeUserTel");
    this.userTel = "1202020033";
  }

  ngModuleListener(e) {
    console.log(this.ngModuleP1);
    console.log(e);
    console.log("ngModuleListener....");
  }
  getClasses() {
    return {
      blueFont: true,
      redFont: false
    };
  }
  getNgStyle() {
    return {
      ...this.ngStyleData
    };
  }
  getFormData() {}
  getNameFroupData(data){
    console.log(data);
  }
}
