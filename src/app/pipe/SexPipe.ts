import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sexPipe" })
export class SexPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    switch (value) {
      case "man":
        return "男";
      case "lady":
        return "女";
      case "ladyboy":
        return "人妖";
    }
  }
}
