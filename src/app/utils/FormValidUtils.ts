import { FormControl } from "@angular/forms";

const VALID_USERNAME = new RegExp("[a-z0-9]+@[a-z0-9]+.com");
const VALID_PASSWORD = new RegExp("xxy[0-9]{10}");

export function validUserAccount(c: FormControl) {
  return VALID_USERNAME.test(c.value)
    ? null
    : {
        data: {
          valid: false,
          errorMsg: "用户名必须是一个邮箱账号"
        }
      };
}
