import { Component, OnInit } from "@angular/core";

import { validUserAccount } from "../../utils/FormValidUtils";
import { FormControl, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: "app-valid-form",
  templateUrl: "./valid-form.component.html",
  styleUrls: ["./valid-form.component.css"]
})
export class ValidFormComponent implements OnInit {
  pwdRegExp = new RegExp("xxy[0-9]+mima");
  validPwd = (c: FormControl) => {
    return this.pwdRegExp.test(c.value)
      ? null
      : {
          data: {
            valid: false,
            errorMsg: "密码格式不正确"
          }
        };
  };
  constructor() {}
  customForm = new FormGroup({
    loginAccount: new FormControl("", [
      Validators.required,
      Validators.minLength(4),
      validUserAccount
    ]),
    loginPwd: new FormControl("", this.validPwd)
  });

  ngOnInit(): void {}
  doLogin(data) {
    console.log(data);
  }
  callMe = function() {
    console.log("call me ....");
  };
}
