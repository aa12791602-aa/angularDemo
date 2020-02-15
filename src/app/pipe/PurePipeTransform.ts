import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pureDataTransform",
  pure: false
})
export class PureDataTransform implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return (
      "姓名:" +
      value.userInfo.userName +
      " | 年龄 | " +
      value.userInfo.age +
      " | 地址 | " +
      value.userInfo.address
    );
  }
}
