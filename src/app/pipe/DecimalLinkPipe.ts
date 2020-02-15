import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "decimalLinkPipe"
})
export class DecimalLinkPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value.replace(",", "");
  }
}
