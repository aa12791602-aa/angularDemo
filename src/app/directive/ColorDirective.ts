import { Directive, ElementRef, Input, HostListener } from "@angular/core";

@Directive({
  selector: "[colorDirective]"
})
export class ColorDirective {
  @Input("ccDirective")
  set backgroundColor(color) {
    this.setStyle(color);
  }
  private el: HTMLElement;
  constructor(el: ElementRef) {
    console.log(el);
    this.el = el.nativeElement;
    this.setStyle("yellow");
  }
  @HostListener("click")
  onClick() {
    console.log("click");
    this.el.style.background = "pink";
  }

  setStyle(color) {
    this.el.style.background = color;
  }
}
